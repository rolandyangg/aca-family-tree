import React, { useMemo, useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, Handle, Position, useNodesState, useEdgesState, useReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DATA, { EXEC } from "./data"
import { zodiacColors, zodiacEmojis } from './constants';

const NameNode = ({ data }) => {
  return (
    <div style={{
      padding: 10,
      backgroundColor: data.bgColor,
      border: '1px solid #ccc',
      borderRadius: 4,
      color: '#000',        // Force text to be black
      fontWeight: 'bold',
      textAlign: 'center',
    }}>
      {data.label}

      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
      />

      {/* Outgoing edge */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
      />
    </div>
  );
};

const nodeTypes = {
  name: NameNode,
};

// Function to find the furthest back parent
const findFurthestParent = (name, checked = new Set()) => {
  if (checked.has(name)) return name;
  checked.add(name);

  // Search through all generations
  for (let i = 0; i < DATA.length; i++) {
    const generation = DATA[i];
    for (const parent in generation) {
      if (generation[parent].includes(name)) {
        // If we find a parent, recursively check if they have a parent
        return findFurthestParent(parent, checked);
      }
    }
  }

  // If no parent is found, this is the furthest back parent
  return name;
};

// Create a mapping of dynasty roots to colors
const createDynastyColorMap = () => {
  const colorMap = new Map();
  let colorIndex = 3;

  // First pass: find all root parents
  const rootParents = new Set();
  for (let i = 0; i < DATA.length; i++) {
    const generation = DATA[i];
    for (const name in generation) {
      const root = findFurthestParent(name);
      rootParents.add(root);
    }
  }

  // Second pass: assign colors to each root parent
  rootParents.forEach(root => {
    colorMap.set(root, zodiacColors[colorIndex % zodiacColors.length]);
    colorIndex++;
  });

  return colorMap;
};

const dynastyColorMap = createDynastyColorMap();

// Function to organize nodes by dynasty and year
const organizeNodesByDynasty = (nodes) => {
  // Group nodes by dynasty
  const dynastyGroups = new Map();
  nodes.forEach(node => {
    const root = findFurthestParent(node.id);
    if (!dynastyGroups.has(root)) {
      dynastyGroups.set(root, []);
    }
    dynastyGroups.get(root).push(node);
  });

  // Sort nodes within each dynasty by year
  dynastyGroups.forEach(nodes => {
    nodes.sort((a, b) => {
      const aYear = DATA.findIndex(group => Object.keys(group).includes(a.id));
      const bYear = DATA.findIndex(group => Object.keys(group).includes(b.id));
      return aYear - bYear;
    });
  });

  return Array.from(dynastyGroups.values());
};

function getZodiacEmoji(name) {
  for (const emoji in EXEC) {
    if (EXEC[emoji].includes(name)) {
      return emoji;
    }
  }
  return '';
}

// Create a new inner component that uses useReactFlow
const FamilyTreeInner = () => {
  const [colorMode, setColorMode] = useState('year');
  const [positionMode, setPositionMode] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const { fitView } = useReactFlow();

  const { allRawNodes, allRawEdges } = useMemo(() => {
    const rawNodes = [];
    const rawEdges = [];

    for (let level = 0; level < DATA.length; level++) {
      const group = DATA[level];
      for (const name in group) {
        rawNodes.push({
          id: name,
          type: 'name',
          data: {
            label: `${name} ${zodiacEmojis[level]}${getZodiacEmoji(name)}`,
          }
        });

        for (const child of group[name]) {
          rawEdges.push({
            id: `${name}-${child}`,
            source: name,
            target: child,
            type: 'straight',
            style: { strokeWidth: 2, stroke: '#666' }
          });
        }
      }
    }
    return { allRawNodes: rawNodes, allRawEdges: rawEdges };
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(allRawEdges);

  // Update nodes and edges when sort mode changes
  React.useEffect(() => {
    const ySpacing = 140;
    const NODE_WIDTH = 180; // Fixed width for each node, increased for more spacing
    const MIN_SPACING_BETWEEN_DYNASTIES = 30; // Minimum space between dynasties, increased for more spacing

    let newNodes = [];

    if (positionMode === 'dynasty') {
      // Group nodes by dynasty first, as this is the consistent grouping we want to maintain horizontal spacing for
      const dynastyGroups = organizeNodesByDynasty(allRawNodes);

      let currentX = 0;
      const dynastyHorizontalPositions = new Map(); // dynasty index -> { startX, width }

      // Calculate positions for each dynasty's overall block
      dynastyGroups.forEach((dynastyNodes, dynastyIndex) => {
        const yearCounts = new Map();
        dynastyNodes.forEach(node => {
          const year = DATA.findIndex(group => Object.keys(group).includes(node.id));
          yearCounts.set(year, (yearCounts.get(year) || 0) + 1);
        });

        const maxNodesInYear = Math.max(...Array.from(yearCounts.values()));
        const dynastyWidth = maxNodesInYear * NODE_WIDTH; // Width based on widest year in dynasty

        dynastyHorizontalPositions.set(dynastyIndex, {
          startX: currentX,
          width: dynastyWidth
        });

        currentX += dynastyWidth + MIN_SPACING_BETWEEN_DYNASTIES;
      });

      // Total width of all dynasties for centering
      const totalContentWidth = currentX - MIN_SPACING_BETWEEN_DYNASTIES;
      const centerOffset = totalContentWidth / 2;

      // Position all nodes based on the sort mode and pre-calculated dynasty positions
      dynastyGroups.forEach((dynastyNodes, dynastyIndex) => {
        const dynastyPos = dynastyHorizontalPositions.get(dynastyIndex);
        const dynastyRoot = findFurthestParent(dynastyNodes[0].id); // Assuming first node in group represents the root

        // Group nodes by year within this dynasty
        const yearGroups = new Map();
        dynastyNodes.forEach(node => {
          const year = DATA.findIndex(group => Object.keys(group).includes(node.id));
          if (!yearGroups.has(year)) {
            yearGroups.set(year, []);
          }
          yearGroups.get(year).push(node);
        });

        yearGroups.forEach((yearNodes, year) => {
          const yearGroupWidth = yearNodes.length * NODE_WIDTH;
          // Calculate offset to center the year group within its dynasty's allocated horizontal space
          const centerOffsetWithinDynastyBlock = (dynastyPos.width - yearGroupWidth) / 2;

          yearNodes.forEach((node, index) => {
            newNodes.push({
              ...node,
              position: {
                x: dynastyPos.startX + (index * NODE_WIDTH) + centerOffsetWithinDynastyBlock - centerOffset,
                y: year * ySpacing
              },
              data: {
                ...node.data,
                bgColor: colorMode === 'dynasty' ? dynastyColorMap.get(dynastyRoot) : zodiacColors[year]
              }
            });
          });
        });
      });
    } else if (positionMode === 'year') {
      // Restore the original year-based layout (before any changes)
      const xSpacing = 180; // Original default spacing
      DATA.forEach((group, level) => {
        const names = Object.keys(group);
        const xOffset = (names.length * xSpacing) / 2;
        names.forEach((name, i) => {
          const originalNode = allRawNodes.find(n => n.id === name); // Find the original node from allRawNodes
          newNodes.push({
            ...originalNode,
            position: {
              x: i * xSpacing - xOffset,
              y: level * ySpacing
            },
            data: {
              ...originalNode.data,
              label: `${name} ${zodiacEmojis[level]}${getZodiacEmoji(name)}`,
              bgColor: colorMode === 'dynasty' ? dynastyColorMap.get(findFurthestParent(name)) : zodiacColors[level]
            }
          });
        });
      });
    } else { // positionMode === 'default'
      // Tidy tree layout (the new default)
      const xSpacing = 180; // Base spacing between nodes
      const ySpacing = 140;
      let nextX = 0;
      const nodeX = new Map();
      const nodeLevel = new Map();

      // Build child map for each node
      const childMap = new Map();
      DATA.forEach((group, level) => {
        for (const parent in group) {
          if (!childMap.has(parent)) childMap.set(parent, []);
          group[parent].forEach(child => {
            childMap.get(parent).push(child);
          });
        }
      });

      // Find all nodes
      const allNames = new Set();
      DATA.forEach(group => {
        Object.keys(group).forEach(name => allNames.add(name));
        Object.values(group).forEach(children => children.forEach(child => allNames.add(child)));
      });

      // Find roots (nodes that are never a child)
      const allChildren = new Set();
      DATA.forEach(group => {
        Object.values(group).forEach(children => children.forEach(child => allChildren.add(child)));
      });
      const roots = Array.from(allNames).filter(name => !allChildren.has(name));

      // Recursive layout
      function layout(node, level) {
        nodeLevel.set(node, level);
        const children = childMap.get(node) || [];
        if (children.length === 0) {
          // Leaf node
          nodeX.set(node, nextX);
          nextX += xSpacing;
        } else {
          children.forEach(child => layout(child, level + 1));
          // Center parent over children
          const minX = Math.min(...children.map(c => nodeX.get(c)));
          const maxX = Math.max(...children.map(c => nodeX.get(c)));
          nodeX.set(node, (minX + maxX) / 2);
        }
      }
      roots.sort(); // For consistency
      roots.forEach(root => layout(root, 0));

      // Center the tree
      const allX = Array.from(nodeX.values());
      const centerOffset = (Math.min(...allX) + Math.max(...allX)) / 2;

      // Create the nodes with the optimized positions
      newNodes = [];
      nodeX.forEach((x, name) => {
        // Find the level for this node
        const level = nodeLevel.get(name);
        // Find the original node data
        let nodeLevelIdx = level;
        // Try to find the level index from DATA if possible
        for (let i = 0; i < DATA.length; i++) {
          if (Object.keys(DATA[i]).includes(name)) {
            nodeLevelIdx = i;
            break;
          }
        }
        const originalNode = allRawNodes.find(n => n.id === name);
        newNodes.push({
          ...originalNode,
          position: {
            x: x - centerOffset,
            y: nodeLevelIdx * ySpacing
          },
          data: {
            ...originalNode.data,
            label: `${name} ${zodiacEmojis[nodeLevelIdx]}${getZodiacEmoji(name)}`,
            bgColor: colorMode === 'dynasty' ? dynastyColorMap.get(findFurthestParent(name)) : zodiacColors[nodeLevelIdx]
          }
        });
      });
    }

    setNodes(newNodes);
  }, [positionMode, colorMode, allRawNodes]); // Dependencies: positionMode, colorMode, allRawNodes. dynastyColorMap and zodiacColors are constants.

  // Add search functionality
  const matchingNodes = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return nodes.filter(node => 
      node.id.toLowerCase().includes(query)
    );
  }, [nodes, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentSearchIndex(0);
  };

  const handleSearchKeyDown = (e) => {
    if (!matchingNodes.length) return;
    
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextIndex = (currentSearchIndex + 1) % matchingNodes.length;
      setCurrentSearchIndex(nextIndex);
      const node = matchingNodes[nextIndex];
      fitView({ nodes: [node], duration: 800, padding: 0.2 });
    }
  };

  const cycleSearchResult = (direction) => {
    if (!matchingNodes.length) return;
    
    const newIndex = direction === 'up' 
      ? (currentSearchIndex - 1 + matchingNodes.length) % matchingNodes.length
      : (currentSearchIndex + 1) % matchingNodes.length;
    
    setCurrentSearchIndex(newIndex);
    const node = matchingNodes[newIndex];
    fitView({ nodes: [node], duration: 800, padding: 0.2 });
  };

  // Update node styles based on search
  const nodesWithSearchHighlight = useMemo(() => {
    return nodes.map(node => {
      const isMatch = matchingNodes.includes(node);
      const isCurrentMatch = isMatch && node === matchingNodes[currentSearchIndex];
      
      return {
        ...node,
        style: {
          ...node.style,
          border: isCurrentMatch ? '4px solid #ff0000' : isMatch ? '3px solid #ff6666' : undefined,
          boxShadow: isCurrentMatch ? '0 0 10px rgba(255, 0, 0, 0.7)' : undefined,
        }
      };
    });
  }, [nodes, matchingNodes, currentSearchIndex]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      {/* Controls container */}
      <div style={{
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px',
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: 'min(90vw, 400px)',
        boxSizing: 'border-box'
      }}>
        {/* Search bar - always visible */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flex: 1,
            minWidth: 0
          }}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              style={{
                padding: '2px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                color: '#000',
                fontSize: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: '32px',
                height: '32px'
              }}
              title="Settings"
            >
              ⚙
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search names..."
              style={{
                padding: '6px 8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                boxSizing: 'border-box',
                minWidth: 0
              }}
            />
          </div>
          {matchingNodes.length > 0 && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px', 
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}>
              <button
                onClick={() => cycleSearchResult('up')}
                style={{
                  padding: '6px 10px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  fontSize: '14px',
                  minWidth: '36px'
                }}
              >
                ↑
              </button>
              <span style={{ 
                color: '#666', 
                fontSize: '14px',
                padding: '0 2px'
              }}>
                {currentSearchIndex + 1}/{matchingNodes.length}
              </span>
              <button
                onClick={() => cycleSearchResult('down')}
                style={{
                  padding: '6px 10px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  fontSize: '14px',
                  minWidth: '36px'
                }}
              >
                ↓
              </button>
            </div>
          )}
        </div>

        {/* View controls - dropdown */}
        {isExpanded && (
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '8px',
            border: '1px solid #eee',
            borderRadius: '4px',
            backgroundColor: '#fafafa',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* Positioning buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => setPositionMode('default')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: positionMode === 'default' ? '#d0eaff' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
              >
                Default
              </button>
              <button 
                onClick={() => setPositionMode('dynasty')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: positionMode === 'dynasty' ? '#d0eaff' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
              >
                Condensed Dynasty
              </button>
              <button 
                onClick={() => setPositionMode('year')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: positionMode === 'year' ? '#d0eaff' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
              >
                Year
              </button>
            </div>

            {/* Coloring buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => setColorMode('year')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: colorMode === 'year' ? '#d0eaff' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
              >
                Color by Year
              </button>
              <button 
                onClick={() => setColorMode('dynasty')}
                style={{
                  padding: '6px 12px',
                  backgroundColor: colorMode === 'dynasty' ? '#d0eaff' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: '#000',
                  whiteSpace: 'nowrap',
                  fontSize: '14px'
                }}
              >
                Color by Dynasty
              </button>
            </div>
          </div>
        )}
      </div>

      <ReactFlow
        nodes={nodesWithSearchHighlight}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={true}
        fitViewOptions={{ padding: 0.1, minZoom: 0.1, maxZoom: 2 }}
        minZoom={0.1}
        maxZoom={2}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

// Main component that provides the ReactFlowProvider
const FamilyTree = () => {
  return (
    <ReactFlowProvider>
      <FamilyTreeInner />
    </ReactFlowProvider>
  );
};

export default FamilyTree; 
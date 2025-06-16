import React, { useMemo, useState } from 'react';
import { ReactFlow, Background, Controls, Handle, Position, useNodesState, useEdgesState  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

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

// Start data here
// Data Format: "NAME": ["CHILDREN"]
const RAM = {
  "Brandon Judo": ["Maggie Shi", "Jing Wang"],
  "Alana Yip": ["Kristen Liu", "Rochelle Yee", "Michael Dao", "Yee Chau"]
}

const MONKEY = {
  "Maggie Shi": ["Vivian Liu", "Katherine Gan"],
  "Jing Wang": ["Sirena Liu", "Ryan Young"],
  "Anna Tao": ["Michael Chen"],
  "Kristen Liu": [],
  "Yee Chau": [],
  "Myron Fung": ["Clifford Zhang"],
  "Isabel Qi": ["Priscilla Wu", "Daniel Go", "Doreen Chang", "Jing Huang", "Jenny Huang"]
}

const ROOSTER = {
  "Vivian Liu": ["Melody So", "Iris Sun"],
  "Sirena Liu": [],
  "Michael Chen": ["Audrey Zhang", "Michelle She"],
  "Rochelle Yee": ["Liana Chie", "Nerissa Low"],
  "Michael Dao": ["Calena Ang", "Henry Cao"],
  "Clifford Zhang": ["Donna Fang"],
  "Priscilla Wu": ["Emily Su"],
  "Daniel Go": ["Ianna Fong"],
  "Doreen Chang": ["Charlie Tang"],
  "Jing Huang": [],
  "Jenny Huang": ["Lilly Lin", "Thomas Xian"],
  "Alexander Ham": ["Jennifer Yip"],
  "Kevin Jin": ["Jennifer Yee"],
  "Jeremy Phan": ["Sydney Lim"]
}

const DOG = {
  "Melody So": ["Carolin Jia", "Sean Haung"],
  "Iris Sun": [],
  "Ryan Young": ["Angela Chen", "Rachel Go", "Skylar Zhao"],
  "Audrey Zhang": [],
  "Michelle She": [],
  "Liana Chie": ["Charlene Kwan", "Ryan Chen", "Sydney Tay"],
  "Nerissa Low": [],
  "Donna Fang": [],
  "Emily Su": ["Esmy Xu", "Daniel Li", "David Li"],
  "Ianna Fong": ["Kevin Tai", "Sammi Owyang"],
  "Charlie Tang": ["Wayland Leung"],
  "Lilly Lin": ["Nick Manipud", "Dylan Tan"],
  "Jennifer Yip": [],
  "Jennifer Yee": ["Vikkie Jiang"],
  "Sydney Lim": ["Angela Cong"]
};

const BOAR = {
  "Sean Haung": [],
  "Katherine Gan": ["Ashley Xu Park", "Bryant Yang"],
  "Angela Chen": ["Mary An Nan"],
  "Skylar Zhao": ["Susie Pan"],
  "Ryan Chen": ["Julie Laporte", "Alyssa Zhu"],
  "Calena Ang": [],
  "Henry Cao": ["William Xu", "Kenny Chang"],
  "Esmy Xu": [],
  "Daniel Li": ["Robin Reyes", "Alana Wang", "Vivian Wong"],
  "David Li": ["Raymond Phan"],
  "Kevin Tai": ["Kevin Lin"],
  "Wayland Leung": ["Jessie Ri"],
  "Dylan Tan": ["Zoe Ge", "Sisi Li"],
  "Thomas Xian": ["Darren Lu"],
  "Vikkie Jiang": []
};

const RAT = {
  "Carolin Jia": ["Caitlyn Tran"],
  "Ashley Xu Park": [],
  "Bryant Yang": ["Jeremy Louie", "Ethan Trinh", "Alex Pun", "Madeline Zhang", "Anson Lum", "Amie Xu", "Alex Ng"],
  "Mary An Nan": [],
  "Susie Pan": [],
  "Charlene Kwan": ["Kristina Lau"],
  "Julie Laporte": ["Cissy Huang"],
  "Alyssa Zhu": ["Eunice Nguyen"],
  "Sydney Tay": ["Queena", "Katherine (Kett) Xie"],
  "Kenny Chang": ["Kristen Chan"],
  "Robin Reyes": [],
  "Alana Wang": ["Michelle Chan"],
  "Raymond Phan": ["Serena Lee"],
  "Sammi Owyang": [],
  "Jessie Ri": ["Brandon Tao"],
  "Nick Manipud": [],
  "Sisi Li": ["Kevin Liu", "Zoë Finch"],
  "Angela Cong": ["Pauline Young"]
}

const OX = {
  "Jeremy Louie": ["Alexander Li", "Jared Khoo"],
  "Ethan Trinh": [],
  "Anson Lum": [],
  "Rachel Go": [],
  "Kristina Lau": [],
  "Cissy Huang": ["Tony Jiang", "Alicia Ying"],
  "Eunice Nguyen": [],
  "Kristen Chan": [],
  "Michelle Chan": ["Emma Chi", "Humza Malik"],
  "Vivian Wong": [],
  "Serena Lee": ["Sean Chan"],
  "Kevin Lin": [],
  "Brandon Tao": ["Scarlet Yang"],
  "Zoe Ge": ["Janet Louie"],
  "Kevin Liu": ["Victor Xie"],
  "Zoë Finch": [],
  "Darren Lu": [],
  "Pauline Young": ["Grace Deng", "Katherine Wang"]
}

const TIGER = {
  "Caitlyn Tran": ["Blair Lee"],
  "Alexander Li": ["Elisa Xu", "Nathan Tran"],
  "Jared Khoo": [],
  "Alex Pun": ["Bryson Xiao", "Eric Pan"],
  "Madeline Zhang": ["Alex Chhor"],
  "Amie Xu": [],
  "Alex Ng": ["Sophia Zhao", "Waylon Tang", "Nathan Yang"],
  "Tony Jiang": [],
  "Alicia Ying": [],
  "Queena": [],
  "Katherine (Kett) Xie": [],
  "William Xu": ["Dylan Du", "Deborah Lee"],
  "Emma Chi": ["Caitlyn Lo", "Isabel Tao", "Andrew Nguyen"],
  "Scarlet Yang": [],
  "Janet Louie": ["Alyssa Cheung", "Kayla Liu"],
  "Victor Xie": ["YaQi (Andy) Liu", "Sharii Liang", "Melody Yuan"],
  "Grace Deng": ["Jessica Li", "Madison Yee", "Morgan Oey"]
}

const RABBIT = {
  "Blair Lee": ["Anna Li"],
  "Elisa Xu": ["Emily Foster"],
  "Nathan Tran": ["Evan Lam"],
  "Eric Pan": ["Roland Yang", "Audrey Huang"],
  "Alex Chhor": [],
  "Sophia Zhao": [],
  "Waylon Tang": [],
  "Nathan Yang": ["Katie Lai", "Tyler Ho"],
  "Dylan Du": [],
  "Deborah Lee": ["Jolene Chan"],
  "Caitlyn Lo": [],
  "Isabel Tao": [],
  "Andrew Nguyen": ["Jasmine Wei"],
  "Humza Malik": ["Janie Kuang"],
  "Sean Chan": [],
  "Madison Yee": ["Lily Mcleod"],
  "Morgan Oey": ["Chloe Thean"],
  "Katherine Wang": ["Ryan Quan", "Selena Yu"]
}

const DRAGON = {
  "Anna Li": [],
  "Emily Foster": ["Conner Lee"],
  "Evan Lam": ["Brian Zhao", "Ashley Huang"],
  "Bryson Xiao": ["Victoria Yee"],
  "Audrey Huang": ["Luisa Chen", "Alex Hoe", "Sadie Wong", "David Xu", "Robert Cui"],
  "Katie Lai": [],
  "Tyler Ho": ["Ritchie Li", "Kaylee Huynh", "Jeffrey Liu", "Theanh Nguyen"],
  "Jolene Chan": [],
  "Jasmine Wei": ["Ella Liang"],
  "Janie Kuang": [],
  "Kayla Liu": [],
  "YaQi (Andy) Liu": ["Madison (Maddie) Lee", "Sadie Remillard"],
  "Sharii Liang": ["Julia Chen"],
  "Melody Yuan": [],
  "Jessica Li": ["Morgan Fu"],
  "Lily Mcleod": [],
  "Chloe Thean": [],
  "Ryan Quan": [],
  "Selena Yu": []
}

const SNAKE = {
  "Conner Lee": ["Annie Liu", "Mia Nakamura", "Natalie La", "Nicha Tangcharoenmonkong", "William Liu"],
  "Brian Zhao": [],
  "Ashley Huang": [],
  "Victoria Yee": [],
  "Luisa Chen": [],
  "Sadie Wong": ["Chloe Han", "Allen Ke"],
  "David Xu": [],
  "Robert Cui": [],
  "Ritchie Li": ["Jojo Wang", "Angela Huang"],
  "Kaylee Huynh": [],
  "Jeffrey Liu": ["Manda Cai", "Daniel Mastick"],
  "Theanh Nguyen": ["Angelina Zou"],
  "Ella Liang": ["Sophia Tan"],
  "Alyssa Cheung": [],
  "Madison (Maddie) Lee": ["Justine Li-Wu", "Richard Li"],
  "Sadie Remillard": ["Fiona Xu"],
  "Julia Chen": [],
  "Morgan Fu": ["Connor Chu", "Nicklaus Chui"]
}

const HORSE = {
  "Annie Liu": [],
  "Mia Nakamura": [],
  "Natalie La": [],
  "Nicha Tangcharoenmonkong": [],
  "William Liu": [],
  "Roland Yang": [],
  "Alex Hoe": [],
  "Chloe Han": [],
  "Allen Ke": [],
  "Jojo Wang": [],
  "Angela Huang": [],
  "Manda Cai": [],
  "Daniel Mastick": [],
  "Angelina Zou": [],
  "Sophia Tan": [],
  "Justine Li-Wu": [],
  "Richard Li": [],
  "Fiona Xu": [],
  "Connor Chu": [],
  "Nicklaus Chui": []
}

const DATA = [RAM, MONKEY, ROOSTER, DOG, BOAR, RAT, OX, TIGER, RABBIT, DRAGON, SNAKE, HORSE];
const zodiacEmojis = [
  "🐐", // Ram
  "🐒", // Monkey
  "🐓", // Rooster
  "🐕", // Dog
  "🐖", // Boar
  "🐀", // Rat
  "🐂", // Ox
  "🐅", // Tiger
  "🐇", // Rabbit
  "🐉", // Dragon
  "🐍", // Snake
  "🐎"  // Horse
];
const zodiacColors = [
  "#FFE4E1", // Ram - Misty Rose
  "#F0E68C", // Monkey - Light Khaki
  "#FFDAB9", // Rooster - Peach Puff
  "#D3D3D3", // Dog - Light Gray
  "#BC8F8F", // Boar - Rosy Brown
  "#B0C4DE", // Rat - Light Steel Blue
  "#EEE8AA", // Ox - Pale Goldenrod
  "#FFA07A", // Tiger - Light Salmon
  "#D8BFD8", // Rabbit - Thistle
  "#F08080", // Dragon - Light Coral
  "#66CDAA", // Snake - Medium Aquamarine
  "#F4A460"  // Horse - Sandy Brown
];

// const nodes = []
// const edges = []

// console.log(nodes);
// console.log(edges);

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
  let colorIndex = 0;

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

const FamilyTree = () => {
  const [sortMode, setSortMode] = useState('default');

  const { allRawNodes, allRawEdges } = useMemo(() => {
    const rawNodes = [];
    const rawEdges = [];

    for (let level = 0; level < DATA.length; level++) {
      const group = DATA[level];
      for (const name in group) {
        rawNodes.push({
          id: name,
          type: 'name',
          // Position and bgColor will be set in useEffect
          data: {
            label: `${name} ${zodiacEmojis[level]}`,
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
  }, []); // No dependencies, runs once

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(allRawEdges);

  // Update nodes and edges when sort mode changes
  React.useEffect(() => {
    const ySpacing = 140;
    const NODE_WIDTH = 180; // Fixed width for each node, increased for more spacing
    const MIN_SPACING_BETWEEN_DYNASTIES = 30; // Minimum space between dynasties, increased for more spacing

    let newNodes = [];

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
              // This is the only part that changes based on sortMode
              bgColor: sortMode === 'dynasty' ? dynastyColorMap.get(dynastyRoot) : zodiacColors[year]
            }
          });
        });
      });
    });

    setNodes(newNodes);
  }, [sortMode, allRawNodes]); // Dependencies: sortMode, allRawNodes. dynastyColorMap and zodiacColors are constants.

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
      <div style={{ 
        position: 'absolute', 
        top: 10, 
        right: 10, 
        zIndex: 5,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setSortMode(sortMode === 'default' ? 'dynasty' : 'default')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#000'
          }}
        >
          {sortMode === 'default' ? 'Show by Dynasty' : 'Show by Year'}
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={true}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FamilyTree; 
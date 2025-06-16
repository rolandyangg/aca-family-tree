import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Robust custom node that always displays the label
const NameNode = ({ data }) => (
  <div style={{
    padding: 8,
    border: '1px solid #222',
    borderRadius: 6,
    background: '#fff',
    minWidth: 100,
    minHeight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }}>
    {data?.label || 'No Label'}
  </div>
);

const nodeTypes = { name: NameNode };

// Sample nodes and edges based on the image (partial tree for demo)
const nodes = [
  { id: 'root', type: 'name', position: { x: 400, y: 0 }, data: { label: 'Node A' }, draggable: false },
  { id: 'a1', type: 'name', position: { x: 200, y: 200 }, data: { label: 'Node B' }, draggable: false },
//   { id: 'a2', type: 'name', position: { x: 600, y: 100 }, data: { label: 'Myron' }, draggable: false },
//   { id: 'b1', type: 'name', position: { x: 100, y: 200 }, data: { label: 'Michael Chen' }, draggable: false },
//   { id: 'b2', type: 'name', position: { x: 300, y: 200 }, data: { label: 'Rochelle' }, draggable: false },
//   { id: 'b3', type: 'name', position: { x: 500, y: 200 }, data: { label: 'Michael Do' }, draggable: false },
//   { id: 'b4', type: 'name', position: { x: 700, y: 200 }, data: { label: 'Cliff' }, draggable: false },
//   { id: 'c1', type: 'name', position: { x: 100, y: 300 }, data: { label: 'Ryan/Joyoung' }, draggable: false },
//   { id: 'c2', type: 'name', position: { x: 300, y: 300 }, data: { label: 'Michelle/Sid' }, draggable: false },
//   { id: 'c3', type: 'name', position: { x: 500, y: 300 }, data: { label: 'Liana' }, draggable: false },
//   { id: 'c4', type: 'name', position: { x: 700, y: 300 }, data: { label: 'Norissa' }, draggable: false },
];

const edges = [
  { id: 'e-root-a1', source: 'root', target: 'a1' },
//   { id: 'e-root-a2', source: 'root', target: 'a2' },
//   { id: 'e-a1-b1', source: 'a1', target: 'b1' },
//   { id: 'e-a1-b2', source: 'a1', target: 'b2' },
//   { id: 'e-a2-b3', source: 'a2', target: 'b3' },
//   { id: 'e-a2-b4', source: 'a2', target: 'b4' },
//   { id: 'e-b1-c1', source: 'b1', target: 'c1' },
//   { id: 'e-b2-c2', source: 'b2', target: 'c2' },
//   { id: 'e-b3-c3', source: 'b3', target: 'c3' },
//   { id: 'e-b4-c4', source: 'b4', target: 'c4' },
];

const FamilyTree = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      nodesDraggable={false}
    //   nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={true}
      zoomOnScroll={true}
      zoomOnPinch={true}
      zoomOnDoubleClick={true}
    >
      <Background />
      <Controls showInteractive={false} />
    </ReactFlow>
  </div>
);

export default FamilyTree; 
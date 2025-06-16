import React from 'react';
import { ReactFlow, Background, Controls, Handle, Position } from '@xyflow/react';
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
  "Judo": ["Maggie", "Jing Wang"],
  "Alana Yip": ["Kristen Liu", "Yee Chau"]
}

const MONKEY = {
  "Maggie": ["Vivian Liu"],
  "Jing Wang": ["Sirena Liu", "Ryan Young"],
  "Anna Tao": ["Michael Chen"],
  "Kristen Liu": [],
  "Yee Chau": [],
  "Myron": ["Cliff"],
  "Isabel Qi": ["Priscilla", "Daniel Go", "Doreen", "Jing Huang", "Jenny"]
}

const ROOSTER = {
  "Vivian Liu": ["Mel", "Iris"],
  "Sirena Liu": [],
  "Michael Chen": ["Audrey", "Michelle She"],
  "Rochelle": ["Liana", "Nerissa"],
  "Michael Dao": ["Calena", "Henry"],
  "Cliff": ["Donna"],
  "Priscilla": ["EmSu"],
  "Daniel Go": ["Ianna"],
  "Doreen": ["Charlie"],
  "Jing Huang": [],
  "Jenny": ["Lilly"],
  "Alex Ham": ["Jenn Yip"],
  "Kevin Jin": ["Jenn Yee"],
  "Jeremy Phan": ["Sydney Lim"]
}

const DOG = {
  "Mel": ["Carolin", "Sean"],
  "Iris": [],
  "Ryan Young": ["Angela Chen", "Rachel", "Skylar"],
  "Audrey": [],
  "Michelle She": [],
  "Liana": ["Ryan Chen"],
  "Nerissa": [],
  "Donna": [],
  "EmSu": ["Esmy", "Daniel Li", "David"],
  "Ianna": ["Kev Tai", "Sammi"],
  "Charlie": ["Wayland"],
  "Lilly": ["Nick", "Dylan"],
  "Jenn Yip": [],
  "Jenn Yee": ["Vikkie"],
  "Sydney Lim": ["Angela Cong"]
};

const BOAR = {
  "Sean": [],
  "Kat": ["Ashley", "Bryant"],
  "Angela Chen": ["Mary An"],
  "Skylar": ["Susie"],
  "Ryan Chen": ["Julie", "Alyssa"],
  "Calena": [],
  "Henry": ["Will", "Kenny"],
  "Esmy": [],
  "Daniel Li": ["Robin", "Alana"],
  "David": ["Raymond"],
  "Kev Tai": ["Kev Lin"],
  "Wayland": ["Jessie"],
  "Dylan": ["Zoege", "Sisi"],
  "Thomas": ["Darren"],
  "Vikkie": []
};

const RAT = {
  "Carolin": ["Caitlyn"],
  "Ashley": [],
  "Bryant": ["Jeremy", "Ethan", "Alex P", "Maddie", "Anson", "Annie", "Alex N"],
  "Mary An": [],
  "Susie": [],
  "Charlene": ["Kristina"],
  "Julie": ["Cissy"],
  "Alyssa": ["Eunice"],
  "Sydney Tay": ["Queena", "Kett"],
  "Kenny": ["Kristen"],
  "Robin": [],
  "Alana": ["Michelle"],
  "Raymond": ["Serena"],
  "Sammi": [],
  "Jessie": ["Brandon"],
  "Nick": [],
  "Sisi": ["Kev Liu", "Zoe Finch"],
  "Angela Cong": ["Pauline"]
}

const OX = {
  "Jeremy": ["Alex L", "Jared"],
  "Ethan": [],
  "Anson": [],
  "Rachel": [],
  "Kristina": [],
  "Cissy": ["Tony", "Alicia"],
  "Eunice": [],
  "Kristen": [],
  "Michelle": ["Emma", "Humza"],
  "Vivian": [],
  "Serena": ["Sean Chan"],
  "Kev Lin": [],
  "Brandon": ["Scarlet"],
  "Zoege": ["Janet"],
  "Kev Liu": ["Victor"],
  "Zoe Finch": [],
  "Darren": [],
  "Pauline": ["Grace", "Kat"]
}

const TIGER = {
  "Caitlyn": ["Blair"],
  "Alex L": ["Elisa", "Nathan T"],
  "Jared": [],
  "Alex P": ["Bryson", "Eric"],
  "Maddie": ["Alex C"],
  "Annie": [],
  "Alex N": ["Sophia", "Waylon", "Nathan Y"],
  "Tony": [],
  "Alicia": [],
  "Queena": [],
  "Kett": [],
  "Will": ["Dylan", "Deborah"],
  "Emma": ["Caitlyn", "Isabel", "Andrew"],
  "Scarlet": [],
  "Janet": ["Alyssa", "Kayla"],
  "Victor": ["Andy", "Sharii", "Melody"],
  "Grace": ["Jesse", "Madison", "Morgan", "Kat"]
}

const RABBIT = {
  "Blair": ["Anna"],
  "Elisa": ["Emily"],
  "Nathan T": ["Evan"],
  "Eric": ["Roland", "Audrey"],
  "Alex C": [],
  "Sophia": [],
  "Waylon": [],
  "Nathan Y": ["Katie", "Tyler"],
  "Dylan": [],
  "Deborah": ["Jolene"],
  "Caitlyn": [],
  "Isabel": [],
  "Andrew": ["Jasmine"],
  "Humza": ["Janie"],
  "Sean Chan": [],
  "Madison": ["Lily"],
  "Morgan": ["Chloe"],
  "Kat": ["Ryan", "Selena"]
}

const DRAGON = {
  "Anna": [],
  "Emily": ["Conner"],
  "Evan": ["Brian", "Ashley"],
  "Bryson": ["Victoria"],
  "Audrey": ["Luisa", "Alex", "Sadie W", "David", "Rob"],
  "Katie": [],
  "Tyler": ["Ritchie", "Kaylee", "Jeff", "Teanh"],
  "Jolene": [],
  "Jasmine": ["Ella"],
  "Janie": [],
  "Kayla": [],
  "Andy": ["Maddie", "Sadie R"],
  "Sharii": ["Julia"],
  "Melody": [],
  "Jesse": ["Morgan"],
  "Lily": [],
  "Chloe": [],
  "Ryan": [],
  "Selana": []
}

const SNAKE = {
  "Conner": ["Annie", "Mia", "Nat", "Nicha", "William"],
  "Brian": [],
  "Ashley": [],
  "Victoria": [],
  "Luisa": [],
  "Sadie W": ["Chloe", "Allen"],
  "David": [],
  "Rob": [],
  "Ritchie": ["Jojo", "Angela"],
  "Kaylee": [],
  "Jeff": ["Manda", "Daniel"],
  "Teanh": ["Angelina"],
  "Ella": ["Sophia"],
  "Alyssa": [],
  "Maddie": ["Justine", "Richard"],
  "Sadie R": ["Fiona"],
  "Julia": [],
  "Morgan": ["Connor", "Nicklaus"]
}

const HORSE = {
  "Annie": [],
  "Misa": [],
  "Nat": [],
  "Nicha": [],
  "William": [],
  "Roland": [],
  "Alex": [],
  "Chloe": [],
  "Allen": [],
  "Jojo": [],
  "Angela": [],
  "Manda": [],
  "Daniel": [],
  "Angelina": [],
  "Sophia": [],
  "Justine": [],
  "Richard": [],
  "Fiona": [],
  "Connor": [],
  "Nicklaus": []
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

const nodes = []
const edges = []

// Add nodes
// let i = 0;
// let y = 0;
// for (const year of DATA) {
//   let x = 0;
//   for (name in year) {
//     nodes.push({ id: name, type: 'name', position: { x: x, y: y }, data: { label: name, bgColor: zodiacColors[i] } });
//     x += 150;
//   }
//   y += 150;
//   i += 1;
// }

const xSpacing = 180;
const ySpacing = 120;

for (let level = 0; level < DATA.length; level++) {
  const group = DATA[level];
  const names = Object.keys(group);
  const xOffset = (names.length * xSpacing) / 2;

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    nodes.push({
      id: name,
      type: 'name',
      position: {
        x: i * xSpacing - xOffset,
        y: level * ySpacing,
      },
      data: {
        label: `${name} ${zodiacEmojis[level]}`,
        bgColor: zodiacColors[level],
      }
    });
  }
}

// Add edges
for (const year of DATA) {
  for (const name in year) {
    for (const child of year[name]) {
      edges.push({ id: `${name}-${child}`, source: name, target: child, style: { stroke: '#444', strokeWidth: 2 } });
    }
  }
}

console.log(nodes);
console.log(edges);

const FamilyTree = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#fff' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      nodesDraggable={false}
      nodesConnectable={false}
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
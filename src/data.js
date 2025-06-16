
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

const DATA =  [RAM, MONKEY, ROOSTER, DOG, BOAR, RAT, OX, TIGER, RABBIT, DRAGON, SNAKE, HORSE];
export default DATA;
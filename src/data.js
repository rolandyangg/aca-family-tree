
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
  "Luisa Chen": ["Auri Suder"],
  "Sadie Wong": ["Chloe Han", "Allen Ke"],
  "David Xu": ["Rina Li"],
  "Robert Cui": [],
  "Ritchie Li": ["Jojo Wang", "Angela Huang"],
  "Kaylee Huynh": ["Rina Li"],
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
  "Annie Liu": ["Taj Aliotta"],
  "Mia Nakamura": ["Jessica Yin"],
  "Natalie La": ["Hastin Chen"],
  "Nicha Tangcharoenmonkong": [],
  "William Liu": [],
  "Roland Yang": [],
  "Alex Hoe": [],
  "Chloe Han": [],
  "Allen Ke": ["Roy Jeong", "Eddy Yao", "Megan Nguyen", "Shannon Chau"],
  "Jojo Wang": ["Yash Malani"],
  "Angela Huang": ["April Gou"],
  "Manda Cai": ["Dylan Choi"],
  "Daniel Mastick": ["Michelle Xie", "Aidan Yu"],
  "Angelina Zou": ["Cecilia Liang"],
  "Sophia Tan": [],
  "Justine Li-Wu": ["Stephanie Feng", "Anaya McKail"],
  "Richard Li": ["Auri Suder"],
  "Fiona Xu": ["Matthew Chen"],
  "Connor Chu": [],
  "Nicklaus Chui": ["Ryan Wu", "Ling Casenas"]
}

const RAM2 = {
   "Michelle Xie": [],
   "Stephanie Feng": [],
   "Auri Suder": [],
   "Rina Li": [],
   "Aidan Yu": [],
   "Cecilia Liang": [],
   "Yash Malani": [],
   "Ryan Wu": [],
   "Hastin Chen": [],
   "Matthew Chen": [],
   "Roy Jeong": [],
   "Anaya McKail": [],
   "Dylan Choi": [],
   "Ling Casenas": [],
   "Taj Aliotta": [],
   "Eddy Yao": [],
   "Megan Nguyen": [],
   "April Gou": [],
   "Shannon Chau": [],
   "Jessica Yin": []
}

const EXEC = {
  "🐐": ["Jessica Wong", "Avery Hua", "Eileen The", "Brandon Shih", "Jojo Wang", "Angela Huang", "Nicha Tangcharoenmonkong", "Daniel Mastick"],
  "🐒": ["Sienna Tsan", "Dermot Nguyen", "Annie Jiang", "Amy Wong", "Rochelle Yee"],
  "🐓": ["David Wright", "Jing Wang", "Dan Sui"],
  "🐕": ["Michael Dao", "Jenny Huang", "Jeremy Phan"],
  "🐖": ["Liana Chie", "Nerissa Low", "Emily Su", "Ianna Fong"],
  "🐀": ["Thomas Xian", "Henry Cao", "Ryan Young"],
  "🐂": ["Sydney Tay", "Bryant Yang", "Alyssa Zhu", "Robin Reyes"],
  "🐅": ["Serena Lee", "Cissy Huang", "Pauline Young", "Michelle Chan"],
  "🐇": ["Victor Xie", "Madeline Zhang", "Grace Deng", "Alex Pun", "Janet Louie"], // Janet Louie is an exception, she repeated EEC twice.
  "🐉": ["Morgan Oey", "Andrew Nguyen", "Sophia Zhao"],
  "🐍": ["Jessica Li", "Jolene Chan", "Tyler Ho", "Audrey Huang"],
  "🐎": ["David Xu", "Kaylee Huynh", "Ritchie Li", "Luisa Chen"]
}

const DATA =  [RAM, MONKEY, ROOSTER, DOG, BOAR, RAT, OX, TIGER, RABBIT, DRAGON, SNAKE, HORSE, RAM2];

// Position history for each person. Format: [{ title: string, years: string, zodiac: string }]
// Data sourced from acabruins.org/alumni-page. All names are pre-populated.
const POSITIONS = {
  // RAM (2014-2015)
  "Brandon Judo": [{ title: "PUL", years: "2014-2015", zodiac: "🐐 Ram" }],
  "Alana Yip": [{ title: "Publicity", years: "2014-2015", zodiac: "🐐 Ram" }],
  // MONKEY (2015-2016)
  "Maggie Shi": [
    { title: "Publicity", years: "2015-2016", zodiac: "🐒 Monkey" },
    { title: "CACN Producer", years: "2017-2018", zodiac: "🐕 Dog" },
  ],
  "Jing Wang": [
    { title: "CEC", years: "2015-2016", zodiac: "🐒 Monkey" },
    { title: "IVP", years: "2016-2017", zodiac: "🐓 Rooster" },
  ],
  "Anna Tao": [{ title: "General Rep", years: "2015-2016", zodiac: "🐒 Monkey" }],
  "Kristen Liu": [{ title: "Historian", years: "2015-2016", zodiac: "🐒 Monkey" }],
  "Yee Chau": [{ title: "Academic Chair", years: "2015-2016", zodiac: "🐒 Monkey" }],
  "Myron Fung": [{ title: "Social Chair", years: "2015-2016", zodiac: "🐒 Monkey" }],
  "Isabel Qi": [{ title: "CEC", years: "2015-2016", zodiac: "🐒 Monkey" }],
  // ROOSTER (2016-2017)
  "Vivian Liu": [{ title: "Publicity", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Katherine Gan": [{ title: "PUL", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Sirena Liu": [{ title: "CEC", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Rochelle Yee": [
    { title: "Secretary", years: "2015-2016", zodiac: "🐒 Monkey" },
    { title: "CACN Producer", years: "2016-2017", zodiac: "🐓 Rooster" },
  ],
  "Michael Dao": [
    { title: "SMMC", years: "2016-2017", zodiac: "🐓 Rooster" },
    { title: "President", years: "2017-2018", zodiac: "🐕 Dog" },
  ],
  "Ryan Young": [
    { title: "Historian", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "IVP", years: "2019-2020", zodiac: "🐀 Rat" },
  ],
  "Michael Chen": [{ title: "Fundraising Chair", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Clifford Zhang": [{ title: "PUL", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Priscilla Wu": [{ title: "Sponsorship Chair", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Daniel Go": [{ title: "Athletic Director", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Doreen Chang": [{ title: "General Rep", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Jing Huang": [{ title: "General Rep", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Jenny Huang": [
    { title: "Publicity", years: "2016-2017", zodiac: "🐓 Rooster" },
    { title: "EVP", years: "2017-2018", zodiac: "🐕 Dog" },
  ],
  "Alexander Ham": [{ title: "Social Chair", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Kevin Jin": [{ title: "Historian", years: "2016-2017", zodiac: "🐓 Rooster" }],
  "Jeremy Phan": [
    { title: "Athletic Director", years: "2016-2017", zodiac: "🐓 Rooster" },
    { title: "IVP", years: "2017-2018", zodiac: "🐕 Dog" },
  ],
  // DOG (2017-2018)
  "Melody So": [{ title: "PUL", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Iris Sun": [{ title: "Publicity", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Audrey Zhang": [{ title: "SMMC", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Michelle She": [{ title: "Social Chair", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Liana Chie": [
    { title: "CEC", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "President", years: "2018-2019", zodiac: "🐖 Boar" },
  ],
  "Nerissa Low": [
    { title: "General Rep", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "EVP", years: "2018-2019", zodiac: "🐖 Boar" },
  ],
  "Donna Fang": [{ title: "Secretary", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Emily Su": [
    { title: "General Rep", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "IVP", years: "2018-2019", zodiac: "🐖 Boar" },
  ],
  "Ianna Fong": [
    { title: "CEC", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "Treasurer", years: "2018-2019", zodiac: "🐖 Boar" },
  ],
  "Charlie Tang": [{ title: "Cultural Chair", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Lilly Lin": [{ title: "Publicity", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Jennifer Yip": [{ title: "Fundraising Chair", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Jennifer Yee": [{ title: "Historian", years: "2017-2018", zodiac: "🐕 Dog" }],
  "Sydney Lim": [
    { title: "Sponsorship Chair", years: "2017-2018", zodiac: "🐕 Dog" },
    { title: "CACN Producer", years: "2018-2019", zodiac: "🐖 Boar" },
  ],
  "Calena Ang": [{ title: "SMMC", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Henry Cao": [
    { title: "Social Chair", years: "2018-2019", zodiac: "🐖 Boar" },
    { title: "EVP", years: "2019-2020", zodiac: "🐀 Rat" },
  ],
  // BOAR (2018-2019)
  "Sean Haung": [{ title: "Secretary", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Angela Chen": [{ title: "Sponsorship Chair", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Rachel Go": [{ title: "Cultural Chair", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Skylar Zhao": [{ title: "Cultural Chair", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Charlene Kwan": [{ title: "Secretary", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Ryan Chen": [{ title: "CEC", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Sydney Tay": [
    { title: "General Rep", years: "2019-2020", zodiac: "🐀 Rat" },
    { title: "President", years: "2020-2021", zodiac: "🐂 Ox" },
    { title: "CACN Producer", years: "2021-2022", zodiac: "🐅 Tiger" },
  ],
  "Esmy Xu": [{ title: "Publicity", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Daniel Li": [{ title: "General Rep", years: "2018-2019", zodiac: "🐖 Boar" }],
  "David Li": [{ title: "Historian", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Kevin Tai": [{ title: "Fundraising Chair", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Sammi Owyang": [{ title: "General Rep", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Wayland Leung": [{ title: "Athletic Director", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Nick Manipud": [{ title: "Athletic Director", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Dylan Tan": [{ title: "General Rep", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Vikkie Jiang": [{ title: "CEC", years: "2018-2019", zodiac: "🐖 Boar" }],
  "Angela Cong": [{ title: "Cultural Chair", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Thomas Xian": [
    { title: "Athletic Director", years: "2018-2019", zodiac: "🐖 Boar" },
    { title: "President", years: "2019-2020", zodiac: "🐀 Rat" },
  ],
  // RAT (2019-2020)
  "Carolin Jia": [{ title: "CACN Producer", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Ashley Xu Park": [{ title: "PUL", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Bryant Yang": [
    { title: "SMMC", years: "2019-2020", zodiac: "🐀 Rat" },
    { title: "EVP", years: "2020-2021", zodiac: "🐂 Ox" },
  ],
  "Mary An Nan": [
    { title: "Historian", years: "2019-2020", zodiac: "🐀 Rat" },
    { title: "CACN Producer", years: "2020-2021", zodiac: "🐂 Ox" },
  ],
  "Susie Pan": [{ title: "Fundraising Chair", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Julie Laporte": [{ title: "Publicity", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Alyssa Zhu": [
    { title: "Publicity", years: "2019-2020", zodiac: "🐀 Rat" },
    { title: "IVP", years: "2020-2021", zodiac: "🐂 Ox" },
  ],
  "Kenny Chang": [{ title: "CEC", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Robin Reyes": [
    { title: "Social Chair", years: "2019-2020", zodiac: "🐀 Rat" },
    { title: "Treasurer", years: "2020-2021", zodiac: "🐂 Ox" },
  ],
  "Alana Wang": [{ title: "Sponsorship Chair", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Raymond Phan": [{ title: "Historian", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Jessie Ri": [{ title: "Athletic Director", years: "2019-2020", zodiac: "🐀 Rat" }],
  "Sisi Li": [{ title: "CEC", years: "2019-2020", zodiac: "🐀 Rat" }],
  // OX (2020-2021)
  "Jeremy Louie": [{ title: "Historian", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Ethan Trinh": [{ title: "CEC", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Anson Lum": [{ title: "Historian", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Kristina Lau": [{ title: "Athletic Director", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Cissy Huang": [
    { title: "SMMC", years: "2020-2021", zodiac: "🐂 Ox" },
    { title: "EVP", years: "2021-2022", zodiac: "🐅 Tiger" },
  ],
  "Eunice Nguyen": [{ title: "General Rep", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Kristen Chan": [{ title: "Fundraising Chair", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Michelle Chan": [
    { title: "Secretary", years: "2020-2021", zodiac: "🐂 Ox" },
    { title: "FVP", years: "2021-2022", zodiac: "🐅 Tiger" },
  ],
  "Vivian Wong": [{ title: "Publicity", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Serena Lee": [
    { title: "Social Chair", years: "2020-2021", zodiac: "🐂 Ox" },
    { title: "President", years: "2021-2022", zodiac: "🐅 Tiger" },
  ],
  "Kevin Lin": [{ title: "PUL", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Brandon Tao": [{ title: "Athletic Director", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Zoe Ge": [{ title: "CACN Producer", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Kevin Liu": [{ title: "General Rep", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Zoë Finch": [{ title: "CEC", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Darren Lu": [{ title: "Sponsorship Chair", years: "2020-2021", zodiac: "🐂 Ox" }],
  "Pauline Young": [
    { title: "Publicity", years: "2020-2021", zodiac: "🐂 Ox" },
    { title: "IVP", years: "2021-2022", zodiac: "🐅 Tiger" },
  ],
  // TIGER (2021-2022)
  "Caitlyn Tran": [{ title: "Secretary", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Alexander Li": [{ title: "Athletic Director", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Jared Khoo": [{ title: "General Rep", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Alex Pun": [
    { title: "SMMC", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "FVP", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  "Madeline Zhang": [
    { title: "Social Chair", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "EVP", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  "Amie Xu": [{ title: "Publicity", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Alex Ng": [{ title: "Cultural Chair", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Tony Jiang": [{ title: "Sponsorship Chair", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Alicia Ying": [{ title: "PUL", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Queena": [],
  "Katherine (Kett) Xie": [{ title: "Historian", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "William Xu": [{ title: "Historian", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Emma Chi": [
    { title: "Fundraising Chair", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "CACN Producer", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  "Scarlet Yang": [{ title: "General Rep", years: "2021-2022", zodiac: "🐅 Tiger" }],
  "Janet Louie": [
    { title: "CEC", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "EEC", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  "Victor Xie": [
    { title: "CEC", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "President", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  "YaQi (Andy) Liu": [{ title: "Athletic Director", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Sharii Liang": [{ title: "Secretary", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Melody Yuan": [{ title: "Community Chair", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Grace Deng": [
    { title: "Publicity", years: "2021-2022", zodiac: "🐅 Tiger" },
    { title: "IVP", years: "2022-2023", zodiac: "🐇 Rabbit" },
  ],
  // RABBIT (2022-2023)
  "Blair Lee": [{ title: "PUL", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Elisa Xu": [{ title: "EEC", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Nathan Tran": [{ title: "Athletic Director", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Eric Pan": [{ title: "General Rep", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Alex Chhor": [{ title: "Secretary", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Sophia Zhao": [
    { title: "Social Chair", years: "2022-2023", zodiac: "🐇 Rabbit" },
    { title: "IVP", years: "2023-2024", zodiac: "🐉 Dragon" },
  ],
  "Waylon Tang": [{ title: "SMMC", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Nathan Yang": [{ title: "General Rep", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Dylan Du": [{ title: "Historian", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Deborah Lee": [{ title: "Publicity", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Caitlyn Lo": [{ title: "Fundraising Chair", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Isabel Tao": [{ title: "Cultural Chair", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Andrew Nguyen": [
    { title: "Historian", years: "2022-2023", zodiac: "🐇 Rabbit" },
    { title: "EVP", years: "2023-2024", zodiac: "🐉 Dragon" },
  ],
  "Humza Malik": [{ title: "CACN Producer", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Sean Chan": [{ title: "Sponsorship Chair", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Madison Yee": [{ title: "Community Chair", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  "Morgan Oey": [
    { title: "Athletic Director", years: "2022-2023", zodiac: "🐇 Rabbit" },
    { title: "President", years: "2023-2024", zodiac: "🐉 Dragon" },
  ],
  "Katherine Wang": [{ title: "Publicity", years: "2022-2023", zodiac: "🐇 Rabbit" }],
  // DRAGON (2023-2024)
  "Anna Li": [{ title: "Historian", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Emily Foster": [{ title: "Cultural Chair", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Evan Lam": [{ title: "Athletic Director", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Bryson Xiao": [{ title: "PUL", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Audrey Huang": [
    { title: "Social Chair", years: "2023-2024", zodiac: "🐉 Dragon" },
    { title: "FVP", years: "2024-2025", zodiac: "🐍 Snake" },
  ],
  "Katie Lai": [{ title: "Sponsorship Chair", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Tyler Ho": [
    { title: "SMMC", years: "2023-2024", zodiac: "🐉 Dragon" },
    { title: "EVP", years: "2024-2025", zodiac: "🐍 Snake" },
  ],
  "Jolene Chan": [
    { title: "Fundraising Chair", years: "2023-2024", zodiac: "🐉 Dragon" },
    { title: "IVP", years: "2024-2025", zodiac: "🐍 Snake" },
  ],
  "Jasmine Wei": [{ title: "Publicity", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Janie Kuang": [{ title: "CACN Outreach Chair", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Kayla Liu": [{ title: "Historian", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Jessica Li": [
    { title: "EEC", years: "2023-2024", zodiac: "🐉 Dragon" },
    { title: "President", years: "2024-2025", zodiac: "🐍 Snake" },
  ],
  "Lily Mcleod": [{ title: "General Rep", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Chloe Thean": [{ title: "Publicity", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Ryan Quan": [{ title: "General Rep", years: "2023-2024", zodiac: "🐉 Dragon" }],
  "Selena Yu": [{ title: "EEC", years: "2023-2024", zodiac: "🐉 Dragon" }],
  // SNAKE (2024-2025)
  "Conner Lee": [{ title: "General Rep", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Brian Zhao": [{ title: "PUL", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Ashley Huang": [{ title: "Cultural Chair", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Victoria Yee": [{ title: "Publicity", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Luisa Chen": [
    { title: "Athletic Director", years: "2024-2025", zodiac: "🐍 Snake" },
    { title: "EVP", years: "2025-2026", zodiac: "🐎 Horse" },
  ],
  "Auri Suder": [{ title: "Fundraising Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Ritchie Li": [
    { title: "Historian", years: "2024-2025", zodiac: "🐍 Snake" },
    { title: "FVP", years: "2025-2026", zodiac: "🐎 Horse" },
  ],
  "Kaylee Huynh": [
    { title: "Secretary", years: "2024-2025", zodiac: "🐍 Snake" },
    { title: "IVP", years: "2025-2026", zodiac: "🐎 Horse" },
  ],
  "Jeffrey Liu": [{ title: "Athletic Director", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Theanh Nguyen": [{ title: "Social Chair", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Ella Liang": [{ title: "EEC", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Alyssa Cheung": [{ title: "General Rep", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Madison (Maddie) Lee": [{ title: "EEC", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Sadie Remillard": [{ title: "Historian", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Julia Chen": [{ title: "Publicity", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Morgan Fu": [{ title: "SMMC", years: "2024-2025", zodiac: "🐍 Snake" }],
  "Sadie Wong": [{ title: "Community Chair", years: "2024-2025", zodiac: "🐍 Snake" }],
  "David Xu": [
    { title: "Fundraising Chair", years: "2024-2025", zodiac: "🐍 Snake" },
    { title: "President", years: "2025-2026", zodiac: "🐎 Horse" },
  ],
  "Robert Cui": [{ title: "Sponsorship Chair", years: "2024-2025", zodiac: "🐍 Snake" }],
  // HORSE (2025-2026)
  "Annie Liu": [{ title: "Publicity Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Mia Nakamura": [{ title: "Community Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Natalie La": [{ title: "Social Media & Marketing Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Nicha Tangcharoenmonkong": [
    { title: "General Representative", years: "2025-2026", zodiac: "🐎 Horse" },
    { title: "EVP", years: "2026-2027", zodiac: "🐏 Ram" },
  ],
  "William Liu": [{ title: "Outreach Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Roland Yang": [{ title: "Sponsorship Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Alex Hoe": [{ title: "Athletic Director", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Chloe Han": [{ title: "Education & Empowerment Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Allen Ke": [{ title: "General Representative", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Jojo Wang": [
    { title: "Secretary", years: "2025-2026", zodiac: "🐎 Horse" },
    { title: "President", years: "2026-2027", zodiac: "🐏 Ram" },
  ],
  "Angela Huang": [
    { title: "PUL", years: "2025-2026", zodiac: "🐎 Horse" },
    { title: "IVP", years: "2026-2027", zodiac: "🐏 Ram" },
  ],
  "Manda Cai": [{ title: "Social Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Daniel Mastick": [
    { title: "Social Chair", years: "2025-2026", zodiac: "🐎 Horse" },
    { title: "FVP", years: "2026-2027", zodiac: "🐏 Ram" },
  ],
  "Angelina Zou": [{ title: "Cultural Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Sophia Tan": [{ title: "Publicity Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Justine Li-Wu": [{ title: "Education & Empowerment Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Richard Li": [{ title: "Athletic Director", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Fiona Xu": [{ title: "Historian", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Connor Chu": [{ title: "Fundraising Chair", years: "2025-2026", zodiac: "🐎 Horse" }],
  "Nicklaus Chui": [{ title: "Historian", years: "2025-2026", zodiac: "🐎 Horse" }],
  // RAM2 (2026-2027)
  "Michelle Xie": [{ title: "EEC", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Stephanie Feng": [{ title: "EEC", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Rina Li": [{ title: "Historian", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Aidan Yu": [{ title: "Historian", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Cecilia Liang": [{ title: "Social Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Yash Malani": [{ title: "Social Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Ryan Wu": [{ title: "PUL", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Hastin Chen": [{ title: "Sponsorship Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Matthew Chen": [{ title: "Athletic Director", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Roy Jeong": [{ title: "Athletic Director", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Anaya McKail": [{ title: "Secretary", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Dylan Choi": [{ title: "Community Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Ling Casenas": [{ title: "Cultural Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Taj Aliotta": [{ title: "SMMC", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Eddy Yao": [{ title: "General Representative", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Megan Nguyen": [{ title: "General Representative", years: "2026-2027", zodiac: "🐏 Ram" }],
  "April Gou": [{ title: "Publicity", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Shannon Chau": [{ title: "Publicity", years: "2026-2027", zodiac: "🐏 Ram" }],
  "Jessica Yin": [{ title: "Outreach Chair", years: "2026-2027", zodiac: "🐏 Ram" }],
};

export { EXEC, POSITIONS };
export default DATA;
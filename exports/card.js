let f = (data) => {
  return {
    type: data[0],
name: data[1],
value: data[2],
cost: data[3],
pendingAction: data[4],
pendingAction2: data[5],
css_file: data[6],
css_x: data[7],
css_y: data[8],
data_id: data[9],
css_position: data[10],

  };
};


        /*
        * Game Constants
        */
        
        const RECRUIT = 'recruit';
const PRESCIA = 'Prescia';
const KA = 'Ka';
const KHALLA = 'Khalla';
const EQUIPMENT = 'equipment';
const SAND_TOWER = 'Sand Tower';
const 11 = '11';
const EXPLORE = 'explore';
const 13 = '13';
const ROB = 'Rob';
const KILL = 'kill';
const DADDY = 'Daddy';
const SKULL_TOTEM = 'Skull Totem';
const COMPANION = 'companion';
const PEL = 'Pel';
const RECYCLE = 'recycle';
const SHIELD = 'Shield';
const GAS_STATION = 'Gas Station';
const OASIS = 'Oasis';
const PIO = 'Pio';
const SPECIALIST = 'specialist';
const TRAVEL = 'travel';
const PYRO = 'Pyro';
const IMPROVED_EQUIP = 'improvedEquip';
const TRICK = 'trick';
const 10 = '10';
const JADE = 'Jade';
const 12 = '12';
const OUTPOST = 'Outpost';
const LOST_CITY = 'Lost City';
const PLUNDER = 'plunder';
const OBSTRUCT = 'obstruct';
const LAW = 'Law';
const ELI = 'Eli';
const MEDEE = 'Medee';
const ROCK_CITY = 'Rock City';
const COMPASS = 'Compass';
const MAP = 'Map';
const SMOKE = 'Smoke';


// prettier-ignore
const CARDS_DATA = {
    1 : $f([[ACT_TRAVEL], KHALLA, '13', '', ACT_TRAVEL, '', 'img/travel_cards.png', 0, 0, 1, 0]),
2 : $f([[ACT_TRAVEL], KHALLA, '13', '', ACT_TRAVEL, '', 'img/travel_cards.png', 0, 0, 2, 0]),
3 : $f([[ACT_TRAVEL], KHALLA, '13', '', ACT_TRAVEL, '', 'img/travel_cards.png', 0, 0, 3, 0]),
4 : $f([[ACT_TRAVEL], KHALLA, '13', '', ACT_TRAVEL, '', 'img/travel_cards.png', 0, 0, 4, 0]),
5 : $f([[ACT_TRAVEL], 'The Founder', '12', '', ACT_RECRUIT, '', 'img/travel_cards.png', 1, 0, 5, 1]),
6 : $f([[ACT_TRAVEL], '', '12', '', ACT_TRAVEL, '', 'img/travel_cards.png', 2, 0, 6, 2]),
7 : $f([[ACT_TRAVEL], '', '12', '', ACT_TRAVEL, '', 'img/travel_cards.png', 2, 0, 7, 2]),
8 : $f([[ACT_TRAVEL], '', '12', '', ACT_TRAVEL, '', 'img/travel_cards.png', 2, 0, 8, 2]),
9 : $f([[ACT_TRAVEL], '', '12', '', ACT_TRAVEL, '', 'img/travel_cards.png', 2, 0, 9, 2]),
10 : $f([[ACT_TRAVEL], '', '12', '', ACT_TRAVEL, '', 'img/travel_cards.png', 2, 0, 10, 2]),
11 : $f([[ACT_TRAVEL], ROCK_CITY, '11', '', ACT_RECRUIT, '', 'img/travel_cards.png', 3, 0, 11, 3]),
12 : $f([[ACT_TRAVEL], ROCK_CITY, '11', '', ACT_RECRUIT, '', 'img/travel_cards.png', 3, 0, 12, 3]),
13 : $f([[ACT_TRAVEL], ROCK_CITY, '11', '', ACT_RECRUIT, '', 'img/travel_cards.png', 3, 0, 13, 3]),
14 : $f([[ACT_TRAVEL], '', '11', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 0, 14, 4]),
15 : $f([[ACT_TRAVEL], '', '11', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 0, 15, 4]),
16 : $f([[ACT_TRAVEL], '', '11', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 0, 16, 4]),
17 : $f([[ACT_TRAVEL], OUTPOST, '10', '', ACT_RECRUIT, '', 'img/travel_cards.png', 5, 0, 17, 5]),
18 : $f([[ACT_TRAVEL], OUTPOST, '10', '', ACT_RECRUIT, '', 'img/travel_cards.png', 5, 0, 18, 5]),
19 : $f([[ACT_TRAVEL], OUTPOST, '10', '', ACT_RECRUIT, '', 'img/travel_cards.png', 5, 0, 19, 5]),
20 : $f([[ACT_TRAVEL], '', '10', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 0, 20, 6]),
21 : $f([[ACT_TRAVEL], '', '10', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 0, 21, 6]),
22 : $f([[ACT_TRAVEL], '', '10', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 0, 22, 6]),
23 : $f([[ACT_TRAVEL], LOST_CITY, '9', '', ACT_RECRUIT, '', 'img/travel_cards.png', 7, 0, 23, 7]),
24 : $f([[ACT_TRAVEL], LOST_CITY, '9', '', ACT_RECRUIT, '', 'img/travel_cards.png', 7, 0, 24, 7]),
25 : $f([[ACT_TRAVEL], LOST_CITY, '9', '', ACT_RECRUIT, '', 'img/travel_cards.png', 7, 0, 25, 7]),
26 : $f([[ACT_TRAVEL], '', '9', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 0, 26, 8]),
27 : $f([[ACT_TRAVEL], '', '9', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 0, 27, 8]),
28 : $f([[ACT_TRAVEL], '', '9', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 0, 28, 8]),
29 : $f([[ACT_TRAVEL], SKULL_TOTEM, '8', '', ACT_RECRUIT, '', 'img/travel_cards.png', 9, 0, 29, 9]),
30 : $f([[ACT_TRAVEL], SKULL_TOTEM, '8', '', ACT_RECRUIT, '', 'img/travel_cards.png', 9, 0, 30, 9]),
31 : $f([[ACT_TRAVEL], SKULL_TOTEM, '8', '', ACT_RECRUIT, '', 'img/travel_cards.png', 9, 0, 31, 9]),
32 : $f([[ACT_TRAVEL], SKULL_TOTEM, '8', '', ACT_RECRUIT, '', 'img/travel_cards.png', 9, 0, 32, 9]),
33 : $f([[ACT_TRAVEL], '', '8', '', ACT_TRAVEL, '', 'img/travel_cards.png', 10, 0, 33, 10]),
34 : $f([[ACT_TRAVEL], '', '8', '', ACT_TRAVEL, '', 'img/travel_cards.png', 10, 0, 34, 10]),
35 : $f([[ACT_TRAVEL], GAS_STATION, '7', '', ACT_RECRUIT, '', 'img/travel_cards.png', 0, 1, 35, 11]),
36 : $f([[ACT_TRAVEL], GAS_STATION, '7', '', ACT_RECRUIT, '', 'img/travel_cards.png', 0, 1, 36, 11]),
37 : $f([[ACT_TRAVEL], '', '7', '', ACT_TRAVEL, '', 'img/travel_cards.png', 1, 1, 37, 12]),
38 : $f([[ACT_TRAVEL], '', '7', '', ACT_TRAVEL, '', 'img/travel_cards.png', 1, 1, 38, 12]),
39 : $f([[ACT_TRAVEL], '', '7', '', ACT_TRAVEL, '', 'img/travel_cards.png', 1, 1, 39, 12]),
40 : $f([[ACT_TRAVEL], '', '7', '', ACT_TRAVEL, '', 'img/travel_cards.png', 1, 1, 40, 12]),
41 : $f([[ACT_TRAVEL], SAND_TOWER, '6', '', ACT_RECRUIT, '', 'img/travel_cards.png', 2, 1, 41, 13]),
42 : $f([[ACT_TRAVEL], SAND_TOWER, '6', '', ACT_RECRUIT, '', 'img/travel_cards.png', 2, 1, 42, 13]),
43 : $f([[ACT_TRAVEL], '', '6', '', ACT_TRAVEL, '', 'img/travel_cards.png', 3, 1, 43, 14]),
44 : $f([[ACT_TRAVEL], '', '6', '', ACT_TRAVEL, '', 'img/travel_cards.png', 3, 1, 44, 14]),
45 : $f([[ACT_TRAVEL], '', '6', '', ACT_TRAVEL, '', 'img/travel_cards.png', 3, 1, 45, 14]),
46 : $f([[ACT_TRAVEL], '', '6', '', ACT_TRAVEL, '', 'img/travel_cards.png', 3, 1, 46, 14]),
47 : $f([[ACT_TRAVEL], '', '5', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 1, 47, 15]),
48 : $f([[ACT_TRAVEL], '', '5', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 1, 48, 15]),
49 : $f([[ACT_TRAVEL], '', '5', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 1, 49, 15]),
50 : $f([[ACT_TRAVEL], '', '5', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 1, 50, 15]),
51 : $f([[ACT_TRAVEL], '', '5', '', ACT_TRAVEL, '', 'img/travel_cards.png', 4, 1, 51, 15]),
52 : $f([[ACT_TRAVEL], '', '4', '', ACT_TRAVEL, '', 'img/travel_cards.png', 5, 1, 52, 16]),
53 : $f([[ACT_TRAVEL], '', '4', '', ACT_TRAVEL, '', 'img/travel_cards.png', 5, 1, 53, 16]),
54 : $f([[ACT_TRAVEL], '', '4', '', ACT_TRAVEL, '', 'img/travel_cards.png', 5, 1, 54, 16]),
55 : $f([[ACT_TRAVEL], '', '4', '', ACT_TRAVEL, '', 'img/travel_cards.png', 5, 1, 55, 16]),
56 : $f([[ACT_TRAVEL], '', '4', '', ACT_TRAVEL, '', 'img/travel_cards.png', 5, 1, 56, 16]),
57 : $f([[ACT_TRAVEL], '', '3', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 1, 57, 17]),
58 : $f([[ACT_TRAVEL], '', '3', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 1, 58, 17]),
59 : $f([[ACT_TRAVEL], '', '3', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 1, 59, 17]),
60 : $f([[ACT_TRAVEL], '', '3', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 1, 60, 17]),
61 : $f([[ACT_TRAVEL], '', '3', '', ACT_TRAVEL, '', 'img/travel_cards.png', 6, 1, 61, 17]),
62 : $f([[ACT_TRAVEL], '', '2', '', ACT_TRAVEL, '', 'img/travel_cards.png', 7, 1, 62, 18]),
63 : $f([[ACT_TRAVEL], '', '2', '', ACT_TRAVEL, '', 'img/travel_cards.png', 7, 1, 63, 18]),
64 : $f([[ACT_TRAVEL], '', '2', '', ACT_TRAVEL, '', 'img/travel_cards.png', 7, 1, 64, 18]),
65 : $f([[ACT_TRAVEL], '', '2', '', ACT_TRAVEL, '', 'img/travel_cards.png', 7, 1, 65, 18]),
66 : $f([[ACT_TRAVEL], '', '2', '', ACT_TRAVEL, '', 'img/travel_cards.png', 7, 1, 66, 18]),
67 : $f([[ACT_TRAVEL], '', '1', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 1, 67, 19]),
68 : $f([[ACT_TRAVEL], '', '1', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 1, 68, 19]),
69 : $f([[ACT_TRAVEL], '', '1', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 1, 69, 19]),
70 : $f([[ACT_TRAVEL], '', '1', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 1, 70, 19]),
71 : $f([[ACT_TRAVEL], '', '1', '', ACT_TRAVEL, '', 'img/travel_cards.png', 8, 1, 71, 19]),
72 : $f([[ACT_TRAVEL], OASIS, '0', '', '', '', 'img/travel_cards.png', 9, 1, 72, 20]),
73 : $f([[ACT_TRAVEL], OASIS, '0', '', '', '', 'img/travel_cards.png', 9, 1, 73, 20]),
74 : $f([[COMPANION], DADDY, '', '', ACT_RECYCLE, ACT_TRAVEL, 'img/other_cards.png', 0, 0, 74, 0]),
75 : $f([[COMPANION], DADDY, '', '', ACT_RECYCLE, ACT_TRAVEL, 'img/other_cards.png', 0, 0, 75, 0]),
76 : $f([[COMPANION], DADDY, '', '', ACT_RECYCLE, ACT_TRAVEL, 'img/other_cards.png', 0, 0, 76, 0]),
77 : $f([[COMPANION], ROB, '', '', ACT_RECYCLE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 1, 0, 77, 1]),
78 : $f([[COMPANION], ROB, '', '', ACT_RECYCLE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 1, 0, 78, 1]),
79 : $f([[COMPANION], ROB, '', '', ACT_RECYCLE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 1, 0, 79, 1]),
80 : $f([[COMPANION], PIO, '', '', ACT_RECYCLE, ACT_RECYCLE, 'img/other_cards.png', 0, 1, 80, 8]),
81 : $f([[COMPANION], PIO, '', '', ACT_RECYCLE, ACT_RECYCLE, 'img/other_cards.png', 0, 1, 81, 8]),
82 : $f([[COMPANION], PIO, '', '', ACT_RECYCLE, ACT_RECYCLE, 'img/other_cards.png', 0, 1, 82, 8]),
83 : $f([[COMPANION], JADE, '', '', ACT_EXPLORE, ACT_TRAVEL, 'img/other_cards.png', 1, 1, 83, 9]),
84 : $f([[COMPANION], JADE, '', '', ACT_EXPLORE, ACT_TRAVEL, 'img/other_cards.png', 1, 1, 84, 9]),
85 : $f([[COMPANION], JADE, '', '', ACT_EXPLORE, ACT_TRAVEL, 'img/other_cards.png', 1, 1, 85, 9]),
86 : $f([[COMPANION], LAW, '', '', ACT_EXPLORE, ACT_EXPLORE, 'img/other_cards.png', 2, 0, 86, 2]),
87 : $f([[COMPANION], LAW, '', '', ACT_EXPLORE, ACT_EXPLORE, 'img/other_cards.png', 2, 0, 87, 2]),
88 : $f([[COMPANION], LAW, '', '', ACT_EXPLORE, ACT_EXPLORE, 'img/other_cards.png', 2, 0, 88, 2]),
89 : $f([[COMPANION], PEL, '', '', ACT_EXPLORE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 2, 1, 89, 10]),
90 : $f([[COMPANION], PEL, '', '', ACT_EXPLORE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 2, 1, 90, 10]),
91 : $f([[COMPANION], PEL, '', '', ACT_EXPLORE, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 2, 1, 91, 10]),
92 : $f([[COMPANION], ELI, '', '', ACT_PLUNDER, ACT_TRAVEL, 'img/other_cards.png', 3, 0, 92, 3]),
93 : $f([[COMPANION], ELI, '', '', ACT_PLUNDER, ACT_TRAVEL, 'img/other_cards.png', 3, 0, 93, 3]),
94 : $f([[COMPANION], ELI, '', '', ACT_PLUNDER, ACT_TRAVEL, 'img/other_cards.png', 3, 0, 94, 3]),
95 : $f([[COMPANION], SMOKE, '', '', ACT_PLUNDER, ACT_PLUNDER, 'img/other_cards.png', 4, 0, 95, 4]),
96 : $f([[COMPANION], SMOKE, '', '', ACT_PLUNDER, ACT_PLUNDER, 'img/other_cards.png', 4, 0, 96, 4]),
97 : $f([[COMPANION], SMOKE, '', '', ACT_PLUNDER, ACT_PLUNDER, 'img/other_cards.png', 4, 0, 97, 4]),
98 : $f([[COMPANION], PYRO, '', '', ACT_PLUNDER, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 3, 1, 98, 11]),
99 : $f([[COMPANION], PYRO, '', '', ACT_PLUNDER, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 3, 1, 99, 11]),
100 : $f([[COMPANION], PYRO, '', '', ACT_PLUNDER, ACT_IMPROVED_EQUIP, 'img/other_cards.png', 3, 1, 100, 11]),
101 : $f([[SPECIALIST], PRESCIA, '', '', ACT_EXPLORE, ACT_OBSTRUCT, 'img/other_cards.png', 5, 0, 101, 5]),
102 : $f([[SPECIALIST], PRESCIA, '', '', ACT_EXPLORE, ACT_OBSTRUCT, 'img/other_cards.png', 5, 0, 102, 5]),
103 : $f([[SPECIALIST], PRESCIA, '', '', ACT_EXPLORE, ACT_OBSTRUCT, 'img/other_cards.png', 5, 0, 103, 5]),
104 : $f([[SPECIALIST], PRESCIA, '', '', ACT_EXPLORE, ACT_OBSTRUCT, 'img/other_cards.png', 5, 0, 104, 5]),
105 : $f([[SPECIALIST], MEDEE, '', '', ACT_RECYCLE, ACT_TRICK, 'img/other_cards.png', 4, 1, 105, 12]),
106 : $f([[SPECIALIST], MEDEE, '', '', ACT_RECYCLE, ACT_TRICK, 'img/other_cards.png', 4, 1, 106, 12]),
107 : $f([[SPECIALIST], MEDEE, '', '', ACT_RECYCLE, ACT_TRICK, 'img/other_cards.png', 4, 1, 107, 12]),
108 : $f([[SPECIALIST], MEDEE, '', '', ACT_RECYCLE, ACT_TRICK, 'img/other_cards.png', 4, 1, 108, 12]),
109 : $f([[SPECIALIST], KA, '', '', ACT_PLUNDER, ACT_KILL, 'img/other_cards.png', 5, 1, 109, 13]),
110 : $f([[SPECIALIST], KA, '', '', ACT_PLUNDER, ACT_KILL, 'img/other_cards.png', 5, 1, 110, 13]),
111 : $f([[SPECIALIST], KA, '', '', ACT_PLUNDER, ACT_KILL, 'img/other_cards.png', 5, 1, 111, 13]),
112 : $f([[SPECIALIST], KA, '', '', ACT_PLUNDER, ACT_KILL, 'img/other_cards.png', 5, 1, 112, 13]),
113 : $f([[EQUIPMENT], SHIELD, '', '2', '', '', 'img/other_cards.png', 6, 0, 113, 6]),
114 : $f([[EQUIPMENT], SHIELD, '', '2', '', '', 'img/other_cards.png', 6, 0, 114, 6]),
115 : $f([[EQUIPMENT], SHIELD, '', '2', '', '', 'img/other_cards.png', 6, 0, 115, 6]),
116 : $f([[EQUIPMENT], SHIELD, '', '2', '', '', 'img/other_cards.png', 6, 0, 116, 6]),
117 : $f([[EQUIPMENT], SHIELD, '', '2', '', '', 'img/other_cards.png', 6, 0, 117, 6]),
118 : $f([[EQUIPMENT, ACT_TRAVEL], MAP, '0', '3', ACT_TRAVEL, '', 'img/other_cards.png', 7, 0, 118, 7]),
119 : $f([[EQUIPMENT, ACT_TRAVEL], MAP, '0', '3', ACT_TRAVEL, '', 'img/other_cards.png', 7, 0, 119, 7]),
120 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 120, 14]),
121 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 121, 14]),
122 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 122, 14]),
123 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 123, 14]),
124 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 124, 14]),
125 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 125, 14]),
126 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 126, 14]),
127 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 127, 14]),
128 : $f([[EQUIPMENT, ACT_TRAVEL], COMPASS, 'X', '2', ACT_TRAVEL, '', 'img/other_cards.png', 6, 1, 128, 14]),

};

<?php

namespace OASIS\Managers;

use OASIS\Helpers\Utils;
use OASIS\Helpers\Collection;
use OASIS\Core\Notifications;
use OASIS\Core\Stats;

/* Class to manage all the Cards for Oasis */

class Cards extends \OASIS\Helpers\Pieces
{
    protected static $table = 'cards';
    protected static $prefix = 'card_';
    protected static $autoIncrement = true;
    protected static $autoremovePrefix = false;
    protected static $customFields = ['extra_datas', 'player_id'];

    protected static function cast($row)
    {
        $data = self::getCards()[$row['data_id']];
        return new \OASIS\Models\Card($row, $data);
    }

    public static function getUiData()
    {
        return [];
    }

    /* Creation of the Cards */
    public static function setupNewGame($players, $options)
    {
        // $cards = [];
        // // Create the deck
        // foreach (self::getCards() as $id => $card) {
        //   if ($id < 100) {
        //     continue;
        //   }
        //   $age = $id < 140 ? 1 : 2;

        //   $card[] = [
        //     'data_id' => $id,
        //     'location' => 'deckAge' . $age,
        //   ];
        // }

        // // Create the initial boards
        // $board = self::getInitialBoard($options[\OPTION_BOARD_SIDE]);
        // foreach ($players as $pId => $info) {
        //   for ($y = 0; $y < 3; $y++) {
        //     for ($x = 0; $x < 3; $x++) {
        //       $cards[] = [
        //         'data_id' => $board[$y][$x],
        //         'location' => 'board',
        //         'player_id' => $pId,
        //         'x' => $x,
        //         'y' => $y,
        //       ];
        //     }
        //   }
        // }

        // self::create($cards);
    }

    public function getCards()
    {
        $f = function ($data) {
            return [
                'type' => $data[0],
'name' => $data[1],
'value' => $data[2],
'cost' => $data[3],
'pendingAction' => $data[4],
'pendingAction2' => $data[5],
'data_id' => $data[6],

            ];
        };

        return [
            1 => $f([[TRAVEL], KHALLA, '13', '', TRAVEL, '', 1]),
2 => $f([[TRAVEL], KHALLA, '13', '', TRAVEL, '', 2]),
3 => $f([[TRAVEL], KHALLA, '13', '', TRAVEL, '', 3]),
4 => $f([[TRAVEL], KHALLA, '13', '', TRAVEL, '', 4]),
5 => $f([[TRAVEL], 'The Founder', '12', '', RECRUIT, '', 5]),
6 => $f([[TRAVEL], '', '12', '', TRAVEL, '', 6]),
7 => $f([[TRAVEL], '', '12', '', TRAVEL, '', 7]),
8 => $f([[TRAVEL], '', '12', '', TRAVEL, '', 8]),
9 => $f([[TRAVEL], '', '12', '', TRAVEL, '', 9]),
10 => $f([[TRAVEL], '', '12', '', TRAVEL, '', 10]),
11 => $f([[TRAVEL], ROCK_CITY, '11', '', RECRUIT, '', 11]),
12 => $f([[TRAVEL], ROCK_CITY, '11', '', RECRUIT, '', 12]),
13 => $f([[TRAVEL], ROCK_CITY, '11', '', RECRUIT, '', 13]),
14 => $f([[TRAVEL], '', '11', '', TRAVEL, '', 14]),
15 => $f([[TRAVEL], '', '11', '', TRAVEL, '', 15]),
16 => $f([[TRAVEL], '', '11', '', TRAVEL, '', 16]),
17 => $f([[TRAVEL], OUTPOST, '10', '', RECRUIT, '', 17]),
18 => $f([[TRAVEL], OUTPOST, '10', '', RECRUIT, '', 18]),
19 => $f([[TRAVEL], OUTPOST, '10', '', RECRUIT, '', 19]),
20 => $f([[TRAVEL], '', '10', '', TRAVEL, '', 20]),
21 => $f([[TRAVEL], '', '10', '', TRAVEL, '', 21]),
22 => $f([[TRAVEL], '', '10', '', TRAVEL, '', 22]),
23 => $f([[TRAVEL], LOST_CITY, '9', '', RECRUIT, '', 23]),
24 => $f([[TRAVEL], LOST_CITY, '9', '', RECRUIT, '', 24]),
25 => $f([[TRAVEL], LOST_CITY, '9', '', RECRUIT, '', 25]),
26 => $f([[TRAVEL], '', '9', '', TRAVEL, '', 26]),
27 => $f([[TRAVEL], '', '9', '', TRAVEL, '', 27]),
28 => $f([[TRAVEL], '', '9', '', TRAVEL, '', 28]),
29 => $f([[TRAVEL], SKULL_TOTEM, '8', '', RECRUIT, '', 29]),
30 => $f([[TRAVEL], SKULL_TOTEM, '8', '', RECRUIT, '', 30]),
31 => $f([[TRAVEL], SKULL_TOTEM, '8', '', RECRUIT, '', 31]),
32 => $f([[TRAVEL], SKULL_TOTEM, '8', '', RECRUIT, '', 32]),
33 => $f([[TRAVEL], '', '8', '', TRAVEL, '', 33]),
34 => $f([[TRAVEL], '', '8', '', TRAVEL, '', 34]),
35 => $f([[TRAVEL], GAS_STATION, '7', '', RECRUIT, '', 35]),
36 => $f([[TRAVEL], GAS_STATION, '7', '', RECRUIT, '', 36]),
37 => $f([[TRAVEL], '', '7', '', TRAVEL, '', 37]),
38 => $f([[TRAVEL], '', '7', '', TRAVEL, '', 38]),
39 => $f([[TRAVEL], '', '7', '', TRAVEL, '', 39]),
40 => $f([[TRAVEL], '', '7', '', TRAVEL, '', 40]),
41 => $f([[TRAVEL], SAND_TOWER, '6', '', RECRUIT, '', 41]),
42 => $f([[TRAVEL], SAND_TOWER, '6', '', RECRUIT, '', 42]),
43 => $f([[TRAVEL], '', '6', '', TRAVEL, '', 43]),
44 => $f([[TRAVEL], '', '6', '', TRAVEL, '', 44]),
45 => $f([[TRAVEL], '', '6', '', TRAVEL, '', 45]),
46 => $f([[TRAVEL], '', '6', '', TRAVEL, '', 46]),
47 => $f([[TRAVEL], '', '5', '', TRAVEL, '', 47]),
48 => $f([[TRAVEL], '', '5', '', TRAVEL, '', 48]),
49 => $f([[TRAVEL], '', '5', '', TRAVEL, '', 49]),
50 => $f([[TRAVEL], '', '5', '', TRAVEL, '', 50]),
51 => $f([[TRAVEL], '', '5', '', TRAVEL, '', 51]),
52 => $f([[TRAVEL], '', '4', '', TRAVEL, '', 52]),
53 => $f([[TRAVEL], '', '4', '', TRAVEL, '', 53]),
54 => $f([[TRAVEL], '', '4', '', TRAVEL, '', 54]),
55 => $f([[TRAVEL], '', '4', '', TRAVEL, '', 55]),
56 => $f([[TRAVEL], '', '4', '', TRAVEL, '', 56]),
57 => $f([[TRAVEL], '', '3', '', TRAVEL, '', 57]),
58 => $f([[TRAVEL], '', '3', '', TRAVEL, '', 58]),
59 => $f([[TRAVEL], '', '3', '', TRAVEL, '', 59]),
60 => $f([[TRAVEL], '', '3', '', TRAVEL, '', 60]),
61 => $f([[TRAVEL], '', '3', '', TRAVEL, '', 61]),
62 => $f([[TRAVEL], '', '2', '', TRAVEL, '', 62]),
63 => $f([[TRAVEL], '', '2', '', TRAVEL, '', 63]),
64 => $f([[TRAVEL], '', '2', '', TRAVEL, '', 64]),
65 => $f([[TRAVEL], '', '2', '', TRAVEL, '', 65]),
66 => $f([[TRAVEL], '', '2', '', TRAVEL, '', 66]),
67 => $f([[TRAVEL], '', '1', '', TRAVEL, '', 67]),
68 => $f([[TRAVEL], '', '1', '', TRAVEL, '', 68]),
69 => $f([[TRAVEL], '', '1', '', TRAVEL, '', 69]),
70 => $f([[TRAVEL], '', '1', '', TRAVEL, '', 70]),
71 => $f([[TRAVEL], '', '1', '', TRAVEL, '', 71]),
72 => $f([[TRAVEL], OASIS, '0', '', '', '', 72]),
73 => $f([[TRAVEL], OASIS, '0', '', '', '', 73]),
74 => $f([[COMPANION], DADDY, '', '', RECYCLE, TRAVEL, 74]),
75 => $f([[COMPANION], DADDY, '', '', RECYCLE, TRAVEL, 75]),
76 => $f([[COMPANION], DADDY, '', '', RECYCLE, TRAVEL, 76]),
77 => $f([[COMPANION], ROB, '', '', RECYCLE, IMPROVED_EQUIP, 77]),
78 => $f([[COMPANION], ROB, '', '', RECYCLE, IMPROVED_EQUIP, 78]),
79 => $f([[COMPANION], ROB, '', '', RECYCLE, IMPROVED_EQUIP, 79]),
80 => $f([[COMPANION], PIO, '', '', RECYCLE, RECYCLE, 80]),
81 => $f([[COMPANION], PIO, '', '', RECYCLE, RECYCLE, 81]),
82 => $f([[COMPANION], PIO, '', '', RECYCLE, RECYCLE, 82]),
83 => $f([[COMPANION], JADE, '', '', EXPLORE, TRAVEL, 83]),
84 => $f([[COMPANION], JADE, '', '', EXPLORE, TRAVEL, 84]),
85 => $f([[COMPANION], JADE, '', '', EXPLORE, TRAVEL, 85]),
86 => $f([[COMPANION], LAW, '', '', EXPLORE, EXPLORE, 86]),
87 => $f([[COMPANION], LAW, '', '', EXPLORE, EXPLORE, 87]),
88 => $f([[COMPANION], LAW, '', '', EXPLORE, EXPLORE, 88]),
89 => $f([[COMPANION], PEL, '', '', EXPLORE, IMPROVED_EQUIP, 89]),
90 => $f([[COMPANION], PEL, '', '', EXPLORE, IMPROVED_EQUIP, 90]),
91 => $f([[COMPANION], PEL, '', '', EXPLORE, IMPROVED_EQUIP, 91]),
92 => $f([[COMPANION], ELI, '', '', PLUNDER, TRAVEL, 92]),
93 => $f([[COMPANION], ELI, '', '', PLUNDER, TRAVEL, 93]),
94 => $f([[COMPANION], ELI, '', '', PLUNDER, TRAVEL, 94]),
95 => $f([[COMPANION], SMOKE, '', '', PLUNDER, PLUNDER, 95]),
96 => $f([[COMPANION], SMOKE, '', '', PLUNDER, PLUNDER, 96]),
97 => $f([[COMPANION], SMOKE, '', '', PLUNDER, PLUNDER, 97]),
98 => $f([[COMPANION], PYRO, '', '', PLUNDER, IMPROVED_EQUIP, 98]),
99 => $f([[COMPANION], PYRO, '', '', PLUNDER, IMPROVED_EQUIP, 99]),
100 => $f([[COMPANION], PYRO, '', '', PLUNDER, IMPROVED_EQUIP, 100]),
101 => $f([[SPECIALIST], PRESCIA, '', '', EXPLORE, OBSTRUCT, 101]),
102 => $f([[SPECIALIST], PRESCIA, '', '', EXPLORE, OBSTRUCT, 102]),
103 => $f([[SPECIALIST], PRESCIA, '', '', EXPLORE, OBSTRUCT, 103]),
104 => $f([[SPECIALIST], PRESCIA, '', '', EXPLORE, OBSTRUCT, 104]),
105 => $f([[SPECIALIST], MEDEE, '', '', RECYCLE, TRICK, 105]),
106 => $f([[SPECIALIST], MEDEE, '', '', RECYCLE, TRICK, 106]),
107 => $f([[SPECIALIST], MEDEE, '', '', RECYCLE, TRICK, 107]),
108 => $f([[SPECIALIST], MEDEE, '', '', RECYCLE, TRICK, 108]),
109 => $f([[SPECIALIST], KA, '', '', PLUNDER, KILL, 109]),
110 => $f([[SPECIALIST], KA, '', '', PLUNDER, KILL, 110]),
111 => $f([[SPECIALIST], KA, '', '', PLUNDER, KILL, 111]),
112 => $f([[SPECIALIST], KA, '', '', PLUNDER, KILL, 112]),
113 => $f([[EQUIPMENT], SHIELD, '', '2', '', '', 113]),
114 => $f([[EQUIPMENT], SHIELD, '', '2', '', '', 114]),
115 => $f([[EQUIPMENT], SHIELD, '', '2', '', '', 115]),
116 => $f([[EQUIPMENT], SHIELD, '', '2', '', '', 116]),
117 => $f([[EQUIPMENT], SHIELD, '', '2', '', '', 117]),
118 => $f([[EQUIPMENT, TRAVEL], MAP, '0', '3', TRAVEL, '', 118]),
119 => $f([[EQUIPMENT, TRAVEL], MAP, '0', '3', TRAVEL, '', 119]),
120 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 120]),
121 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 121]),
122 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 122]),
123 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 123]),
124 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 124]),
125 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 125]),
126 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 126]),
127 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 127]),
128 => $f([[EQUIPMENT, TRAVEL], COMPASS, 'X', '2', TRAVEL, '', 128]),

        ];
    }
}

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

            CREATE TABLE IF NOT EXISTS `cards` (
            `card_id` int(5) NOT NULL AUTO_INCREMENT,
            `card_state` int(10) DEFAULT 0,
            `card_location` varchar(32) NOT NULL,
            `extra_datas` JSON NULL,
`player_id` int(10) NULL,

            PRIMARY KEY (`card_id`)
            ) ENGINE = InnoDB DEFAULT CHARSET = utf8;
        
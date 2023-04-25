<?php

namespace COL\Managers;

use COL\Helpers\Utils;
use COL\Helpers\Collection;
use COL\Core\Notifications;
use COL\Core\Stats;

/* Class to manage all the Cards for Col */

class Cards extends \COL\Helpers\Pieces
{
    protected static $table = 'cards';
    protected static $prefix = 'card_';
    protected static $autoIncrement = true;
    protected static $autoremovePrefix = false;
    protected static $customFields = ['extra_datas', 'player_id'];

    protected static function cast($row)
    {
        $data = self::getCards()[$row['data_id']];
        return new \COL\Models\Card($row, $data);
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
                'color' => $data[0],
'value' => $data[1],
'action' => $data[2],

            ];
        };

        return [
            1 => $f([GREEN, 1, NUGGETS]),
2 => $f([GREEN, 1, NUGGETS]),
3 => $f([GREEN, 1, NUGGETS]),
4 => $f([GREEN, 1, NUGGETS]),
5 => $f([GREEN, 2, NUGGETS]),
6 => $f([GREEN, 2, NUGGETS]),
7 => $f([GREEN, 2, NUGGETS]),
8 => $f([GREEN, 2, NUGGETS]),
9 => $f([GREEN, 3, NUGGETS]),
10 => $f([GREEN, 3, NUGGETS]),
11 => $f([GREEN, 3, NUGGETS]),
12 => $f([GREEN, 3, NUGGETS]),
13 => $f([RED, 1, NUGGETS]),
14 => $f([RED, 1, NUGGETS]),
15 => $f([RED, 1, NUGGETS]),
16 => $f([RED, 1, NUGGETS]),
17 => $f([RED, 2, NUGGETS]),
18 => $f([RED, 2, NUGGETS]),
19 => $f([RED, 2, NUGGETS]),
20 => $f([RED, 2, NUGGETS]),
21 => $f([RED, 3, NUGGETS]),
22 => $f([RED, 3, NUGGETS]),
23 => $f([RED, 3, NUGGETS]),
24 => $f([RED, 3, NUGGETS]),
25 => $f([BLUE, 1, CHECK]),
26 => $f([BLUE, 1, CHECK]),
27 => $f([BLUE, 1, CHECK]),
28 => $f([BLUE, 1, CHECK]),
29 => $f([BLUE, 1, CHECK]),
30 => $f([BLUE, 2, CHECK]),
31 => $f([BLUE, 2, CHECK]),
32 => $f([BLUE, 2, CHECK]),
33 => $f([BLUE, 2, CHECK]),
34 => $f([BLUE, 2, CHECK]),
35 => $f([BLUE, 3, CHECK]),
36 => $f([BLUE, 3, CHECK]),
37 => $f([BLUE, 3, CHECK]),
38 => $f([BLUE, 3, CHECK]),
39 => $f([BLUE, 3, CHECK]),
40 => $f([YELLOW, 1, CHECK]),
41 => $f([YELLOW, 1, CHECK]),
42 => $f([YELLOW, 1, CHECK]),
43 => $f([YELLOW, 1, CHECK]),
44 => $f([YELLOW, 1, CHECK]),
45 => $f([YELLOW, 2, CHECK]),
46 => $f([YELLOW, 2, CHECK]),
47 => $f([YELLOW, 2, CHECK]),
48 => $f([YELLOW, 2, CHECK]),
49 => $f([YELLOW, 2, CHECK]),
50 => $f([YELLOW, 3, CHECK]),
51 => $f([YELLOW, 3, CHECK]),
52 => $f([YELLOW, 3, CHECK]),
53 => $f([YELLOW, 3, CHECK]),
54 => $f([YELLOW, 3, CHECK]),
55 => $f([PURPLE, 1, CARDS]),
56 => $f([PURPLE, 1, CARDS]),
57 => $f([PURPLE, 1, CARDS]),
58 => $f([PURPLE, 1, CARDS]),
59 => $f([PURPLE, 2, CARDS]),
60 => $f([PURPLE, 2, CARDS]),
61 => $f([PURPLE, 2, CARDS]),
62 => $f([PURPLE, 2, CARDS]),
63 => $f([PURPLE, 3, CARDS]),
64 => $f([PURPLE, 3, CARDS]),
65 => $f([PURPLE, 3, CARDS]),
66 => $f([PURPLE, 3, CARDS]),
67 => $f([GREY, 1, CARDS]),
68 => $f([GREY, 1, CARDS]),
69 => $f([GREY, 1, CARDS]),
70 => $f([GREY, 1, CARDS]),
71 => $f([GREY, 2, CARDS]),
72 => $f([GREY, 2, CARDS]),
73 => $f([GREY, 2, CARDS]),
74 => $f([GREY, 2, CARDS]),
75 => $f([GREY, 3, CARDS]),
76 => $f([GREY, 3, CARDS]),
77 => $f([GREY, 3, CARDS]),
78 => $f([GREY, 3, CARDS]),

        ];
    }
}

        /*
        * Game Constants
        */
        
        const NUGGETS = 'nuggets';
const YELLOW = 'yellow';
const PURPLE = 'purple';
const GREEN = 'green';
const BLUE = 'blue';
const GREY = 'grey';
const RED = 'red';
const CARDS = 'cards';
const CHECK = 'check';

            CREATE TABLE IF NOT EXISTS `cards` (
            `card_id` int(5) NOT NULL AUTO_INCREMENT,
            `card_state` int(10) DEFAULT 0,
            `card_location` varchar(32) NOT NULL,
            `extra_datas` JSON NULL,
`player_id` int(10) NULL,

            PRIMARY KEY (`card_id`)
            ) ENGINE = InnoDB DEFAULT CHARSET = utf8;
        
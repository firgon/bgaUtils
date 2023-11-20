<?php

namespace {TRIGRAMME}\Managers;

use {TRIGRAMME}\Helpers\Utils;
use {TRIGRAMME}\Helpers\Collection;
use {TRIGRAMME}\Core\Notifications;
use {TRIGRAMME}\Core\Stats;

/* Class to manage all the {MODEL}s for {NAME} */

class {MODEL}s extends \{TRIGRAMME}\Helpers\Pieces
{
    protected static $table = '{MODEL_LOWER}s';
    protected static $prefix = '{MODEL_LOWER}_';
    protected static $autoIncrement = true;
    protected static $autoremovePrefix = false;
    protected static $customFields = [{CUSTOM_FIELDS}];

    protected static function cast($row)
    {
        $data = self::get{MODEL}s()[$row['data_id']];
        return new \{TRIGRAMME}\Models\{MODEL}($row, $data);
    }

    public static function getUiData()
    {
        return [];
    }

    /* Creation of the {MODEL}s */
    public static function setupNewGame($players, $options)
    {
        // ${MODEL_LOWER}s = [];
        // // Create the deck
        // foreach (self::get{MODEL}s() as $id => ${MODEL_LOWER}) {
        //   if ($id < 100) {
        //     continue;
        //   }
        //   $age = $id < 140 ? 1 : 2;

        //   ${MODEL_LOWER}s[] = [
        //     'data_id' => $id,
        //     'location' => 'deckAge' . $age,
        //   ];
        // }

        // // Create the initial boards
        // $board = self::getInitialBoard($options[\OPTION_BOARD_SIDE]);
        // foreach ($players as $pId => $info) {
        //   for ($y = 0; $y < 3; $y++) {
        //     for ($x = 0; $x < 3; $x++) {
        //       ${MODEL_LOWER}s[] = [
        //         'data_id' => $board[$y][$x],
        //         'location' => 'board',
        //         'player_id' => $pId,
        //         'x' => $x,
        //         'y' => $y,
        //       ];
        //     }
        //   }
        // }

        // self::create(${MODEL_LOWER}s);
    }

    public function get{MODEL}s()
    {
        $f = function ($data) {
            return [
                {STRUCTURE}
            ];
        };

        return [
            {DATA}
        ];
    }
}

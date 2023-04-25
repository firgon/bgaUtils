<?php

namespace COL\Models;

use COL\Managers\Players;

/*
 * Card
 */

class Card extends \COL\Helpers\DB_Model
{
    protected $table = 'cards';
    protected $primary = 'card_id';
    protected $attributes = [
        'id' => ['card_id', 'int'],
        'location' => 'card_location',
        'state' => ['card_state', 'int'],
        'extraDatas' => ['extra_datas', 'obj'],
'playerId' => ['player_id', 'int'],

    ];

    protected $staticAttributes = [
        'color',
['value', 'int'],
'action',
['occurrences', 'int'],
['id', 'int'],

    ];

    public function __construct($row, $datas)
    {
        parent::__construct($row);
        foreach ($datas as $attribute => $value) {
            $this->$attribute = $value;
        }
    }

    public function isSupported($players, $options)
    {
        return true; // Useful for expansion/ban list/ etc...
    }

}

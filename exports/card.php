<?php

namespace OASIS\Models;

use OASIS\Managers\Players;

/*
 * Card
 */

class Card extends \OASIS\Helpers\DB_Model
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
        ['type', 'obj'],
'name',
'value',
'cost',
['occurrences', 'int'],
'pendingAction',
'pendingAction2',
['data_id', 'int'],

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

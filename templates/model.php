<?php

namespace {TRIGRAMME}\Models;

use {TRIGRAMME}\Managers\Players;

/*
 * {MODEL}
 */

class {MODEL} extends \{TRIGRAMME}\Helpers\DB_Model
{
    protected $table = '{MODEL_LOWER}s';
    protected $primary = '{MODEL_LOWER}_id';
    protected $attributes = [
        'id' => ['{MODEL_LOWER}_id', 'int'],
        'location' => '{MODEL_LOWER}_location',
        'state' => ['{MODEL_LOWER}_state', 'int'],
        {CUSTOM_FIELDS_EXTENDED}
    ];

    protected $staticAttributes = [
        {STATIC_STRUCTURE}
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

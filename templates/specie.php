<?php

namespace FOS\Models\Species\{PATH_CC};

use FOS\Core\Notifications;
use FOS\Managers\Players;
use FOS\Managers\Cards;

/*
 * Beech
 */

class {NAME_PC} extends \FOS\Models\Species
{
    public $name = '{NAME}';
    public $nb = {NB};
    public $tags = [{TAGS}];
    public $cost = {COST};

    //{EFFECT}
    public function effect()
    {
    }

    //{BONUS}
    public function bonus()
    {
    }

    //{POINTS}
    public function score($playerId, $forests)
    {

    }
}

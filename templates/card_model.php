<?php

namespace BOR\Models\Cards;

use BOR\Managers\Cards;

/*
 * card n°{ID}
 */

class Card{ID} extends \BOR\Models\Card
{
  public $color = ['{COLOR}'];
  public $constraint = {CONSTRAINT};
  public $cost = {COST};
  public $income = {INCOME};
  public $isStarter = {STARTER};


  public function __construct($player)
  {
    $this->pointsString = clienttranslate("{POINTS}");
    $this->effectString = clienttranslate("{EFFECT}");
    parent::__construct($player);
  }

  //EFFECT : {EFFECT}
  public function effect()
  {
  }

  //{POINTS}
  public function score()
  {
  }
}

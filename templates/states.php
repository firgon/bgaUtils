<?php

/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * Oasis implementation : © Emmanuel Albisser <emmanuel.albisser@gmail.com>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * states.inc.php
 *
 * Oasis game states description
 *
 */

/*
   Game state machine is a tool used to facilitate game developpement by doing common stuff that can be set up
   in a very easy way from this configuration file.

   Please check the BGA Studio presentation about game state to understand this, and associated documentation.

   Summary:

   States types:
   _ activeplayer: in this type of state, we expect some action from the active player.
   _ multipleactiveplayer: in this type of state, we expect some action from multiple players (the active players)
   _ game: this is an intermediary state where we don't expect any actions from players. Your game logic must decide what is the next game state.
   _ manager: special type for initial and final state

   Arguments of game states:
   _ name: the name of the GameState, in order you can recognize it on your own code.
   _ description: the description of the current game state is always displayed in the action status bar on
                  the top of the game. Most of the time this is useless for game state with "game" type.
   _ descriptionmyturn: the description of the current game state when it's your turn.
   _ type: defines the type of game states (activeplayer / multipleactiveplayer / game / manager)
   _ action: name of the method to call when this game state become the current game state. Usually, the
             action method is prefixed by "st" (ex: "stMyGameStateName").
   _ possibleactions: array that specify possible player actions on this step. It allows you to use "checkAction"
                      method on both client side (Javacript: this.checkAction) and server side (PHP: self::checkAction).
   _ transitions: the transitions are the possible paths to go from a game state to another. You must name
                  transitions in order to use transition names in "nextState" PHP method, and use IDs to
                  specify the next game state for each transition.
   _ args: name of the method to call to retrieve arguments for this gamestate. Arguments are sent to the
           client side to be used on "onEnteringState" or to set arguments in the gamestate description.
   _ updateGameProgression: when specified, the game progression is updated (=> call to your getGameProgression
                            method).
*/


$machinestates = [

    // The initial state. Please do not modify.
    ST_GAME_SETUP => [
        "name" => "gameSetup",
        "description" => "",
        "type" => "manager",
        "action" => "stGameSetup",
        "transitions" => [
            "" => ST_SETUP,
        ]
    ],

    ST_SETUP => [
        "name" => "setup",
        "description" => clienttranslate('Card dealing'),
        "type" => "game",
        "action" => "stSetup",
        "transitions" => [
            "" => ST_NEXT_PLAYER_COUNTER_CLOCK_WISE,
        ]
    ],

    ST_NEXT_PLAYER_COUNTER_CLOCK_WISE => [
        "name" => "nextPlayerCounterClockWise",
        "description" => clienttranslate('Next Player'),
        "type" => "game",
        "action" => "stNextPlayerCounterClockWise",
        "transitions" => [
            "nextPlayer" => ST_CHOOSE_CARD,
            "setupEnd" => ST_PLAY
        ]
    ],


    ST_CHOOSE_CARD => [
        "name" => "chooseCard",
        "description" => clienttranslate('${actplayer} must choose a companion'),
        "descriptionmyturn" => clienttranslate('${you} must choose a companion'),
        "type" => "activeplayer",
        'args' => 'argChooseCard', //cards id choosable
        "possibleactions" => [ACT_RECRUIT],
        "transitions" => [
            ACT_SKIP => ST_NEXT_PLAYER_COUNTER_CLOCK_WISE,
            "zombiePass" => ST_NEXT_PLAYER_COUNTER_CLOCK_WISE
        ]
    ],

    ST_NEXT_PLAYER => [
        "name" => "nextPlayer",
        "description" => clienttranslate('Next Player'),
        "type" => "game",
        "action" => "stNextPlayer",
        "transitions" => [
            "nextPlayer" => ST_PLAY,
            "endGame" => ST_PRE_END_OF_GAME
        ]
    ],


    ST_PLAY => [
        "name" => "play",
        "description" => clienttranslate('${actplayer} can ${actionList}'),
        "descriptionmyturn" => clienttranslate('${you} can ${actionList}'),
        "type" => "activeplayer",
        'args' => 'argPlay', //actList
        "action" => "stPlay",
        "possibleactions" => [
            ACT_EXPLORE, ACT_RECYCLE, ACT_RECRUIT, ACT_TRAVEL, ACT_EQUIP,
            ACT_IMPROVED_EQUIP, ACT_PLUNDER, ACT_KILL, ACT_TRICK, ACT_OBSTRUCT, ACT_SKIP,
            ACT_MISSION,  EXPLORERS, PLUNDERERS, RECYCLERS
        ],
        "transitions" => [
            "keepPlaying" => ST_PLAY,
            "oasisFound" => ST_PRE_END_OF_GAME,
            ACT_TRICK => ST_TRICK,
            ACT_PLUNDER => ST_PLUNDER_BACK,
            ACT_SKIP => ST_DISCARD,
            "zombiePass" => ST_NEXT_PLAYER
        ]
    ],


    ST_TRICK => [
        "name" => "trick",
        "description" => clienttranslate('${player_name} and ${player_name2} must exchange card(s)'),
        "descriptionmyturn" => clienttranslate('${you} must choose 1 card to give to ${player_name2}'),
        "descriptionmyturntricked" => clienttranslate('${you} must choose 2 cards to give to ${player_name}'),
        "descriptionmyturnwaiting" => clienttranslate('You can modify your choice'),
        "type" => "multipleactiveplayer",
        "action" => "stTrick",
        'args' => 'argTrick',
        "possibleactions" => [ACT_TRICK_BACK],
        "transitions" => [
            "" => ST_EXCHANGE_TRICK
        ]
    ],

    ST_EXCHANGE_TRICK => [
        "name" => "exchangeTrick",
        "description" => clienttranslate('${player_name} and ${player_name2} exchange their cards'),
        "type" => "game",
        'args' => 'argTrick',
        "action" => "stExchangeTrick",
        "transitions" => [
            "" => ST_PLAY
        ]

    ],

    ST_PLUNDER_BACK => [
        "name" => "plunderBack",
        "description" => clienttranslate('${actplayer} can plunder a card to ${player_name2}'),
        "descriptionmyturn" => clienttranslate('${you} can plunder a card to ${player_name2}'),
        "descriptionmyturnskip" => clienttranslate('${you} picked a shield, you must give cards back to ${player_name2}'),
        "type" => "activeplayer",
        'args' => 'argPlunderBack',
        "possibleactions" => [ACT_PLUNDER_BACK, ACT_SKIP],
        "transitions" => [
            ACT_PLUNDER_BACK => ST_PLAY,
        ]
    ],

    ST_DISCARD => [
        "name" => "discard",
        "description" => clienttranslate('${actplayer} must discard ${discard} card(s)'),
        "descriptionmyturn" => clienttranslate('${you} must discard ${discard} card(s)'),
        "type" => "activeplayer",
        "args" => 'argDiscard',
        "action" => "stDiscard", // check if there are too much card
        "possibleactions" => [ACT_DISCARD],
        "transitions" => [
            ACT_SKIP => ST_NEXT_PLAYER,
            "keepPlaying" => ST_NEXT_PLAYER,
        ]
    ],

    ST_PRE_END_OF_GAME => [
        'name' => 'preEndOfGame',
        'type' => 'game',
        'action' => 'stPreEndOfGame',
        'transitions' => ['' => ST_END_GAME],
    ],

    // Final state.
    // Please do not modify (and do not overload action/args methods).
    ST_END_GAME => [
        "name" => "gameEnd",
        "description" => clienttranslate("End of game"),
        "type" => "manager",
        "action" => "stGameEnd",
        "args" => "argGameEnd"

    ]
];

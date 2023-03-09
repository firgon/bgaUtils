from enum import Enum
from Utils import str_to_constant


class StateConstant:
    ID = 0

    def __init__(self, name):
        StateConstant.ID += 1
        self.value = StateConstant.ID
        self.name = 'ST_'+str_to_constant(name)


class State:
    """something like that :
    ST_NEXT_PLAYER_COUNTER_CLOCK_WISE => [
        "name" => "nextPlayerCounterClockWise",
        "description" => clienttranslate('Next Player'),
        "type" => "game",
        "action" => "stNextPlayerCounterClockWise",
        "transitions" => [
            "nextPlayer" => ST_CHOOSE_CARD,
            "setupEnd" => ST_PLAY
        ]
    ],"""
    required_fields = ['name', 'description', 'type', 'transitions']

    class Type(Enum):
        GAME = 'game'
        ACTIVE_PLAYER = 'activeplayer'
        MULTIPLE_ACTIVE_PLAYER = 'multipleactiveplayer'
        MANAGER = 'MANAGER'

    def __init__(self, name, state_type: Type = None, description: str = None, description_my_turn: str = None,
                 has_args: bool = None, has_action: bool = None, possible_actions: list(str) = None):
        self.name = name
        self.id = StateConstant(name)
        self.state_type = state_type
        self.description = description
        self.description_my_turn = description_my_turn
        self.has_args = has_args
        self.has_action = has_action
        self.possible_actions = possible_actions
        self.transitions = dict()

        self.check_coherence()

    def set_type(self, state_type: Type):
        self.state_type = state_type
        if state_type == self.Type.GAME:
            self.has_action = True

    def set_descriptions(self, description: str, description_my_turn: str = None):
        self.description = description
        self.description_my_turn = description_my_turn
        self.check_coherence()

    # , description, description_my_turn, state_type, args: bool, action: bool, transitions, possibles_actions

    def set_has_action(self, has_action):
        self.has_action = has_action
        self.check_coherence()

    def set_has_args(self, has_args):
        self.has_args = has_args

    def set_possible_actions(self, possible_actions: list(str)):
        self.possible_actions = possible_actions

    def add_transitions(self, transition: str, state):
        self.transitions[transition] = state.id

    def check_coherence(self) -> list[str]:
        errors = []
        if not self.has_action and self.state_type == self.Type.GAME:
            errors.append('Misconfiguration, a game state should have action')
        if self.description_my_turn is None and \
                self.state_type in [self.Type.ACTIVE_PLAYER, self.Type.MULTIPLE_ACTIVE_PLAYER]:
            errors.append(
                f'Misconfiguration, for {self.state_type} state, you should provide a "description_my_turn"')
        return errors


class StatesCreator:

    def check_coherence(self):
        # TODO : check if all transitions are implemented
        pass

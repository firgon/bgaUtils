import sys
import math
from dataclasses import dataclass


# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

@dataclass
class Point:
    x: int
    y: int
    value: int

    def __str__(self):
        return f"{self.x} {self.y}"


board = [[None, None, None], [None, None, None], [None, None, None]]
default_values = [[5, 0, 5], [0, 10, 0], [5, 0, 5]]


def add_move(mark: str, x: int, y: int):
    board[x][y] = mark


def add_opponent_move(x, y):
    add_move("O", x, y)


def add_my_move(x, y):
    add_move('X', x, y)


# game loop
while True:
    opponent_row, opponent_col = [int(i) for i in input().split()]
    if opponent_col != -1:
        add_opponent_move(opponent_row, opponent_col)
    valid_action_count = int(input())
    possible_moves: list[Point] = []
    for i in range(valid_action_count):
        row, col = [int(j) for j in input().split()]
        possible_moves.append(Point(row, col, 0))

    # To debug: print("Debug messages...", file=sys.stderr, flush=True)

    my_move = max(possible_moves, key=lambda x: default_values[x.x][x.y])
    print(my_move)
    add_my_move(my_move.x, my_move.y)

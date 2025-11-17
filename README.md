# Knight's Travails

A JavaScript implementation of the classic "Knight's Travails" problem - finding the shortest path for a chess knight to move from one square to another on a standard 8x8 chessboard.

## Problem Description

Given a starting position and a target position on a chessboard, this program calculates the shortest sequence of valid knight moves required to reach the target.

A knight in chess moves in an "L" shape: 2 squares in one direction and 1 square perpendicular, or vice versa. This gives up to 8 possible moves from any position.

## Implementation

This solution uses **Breadth-First Search (BFS)** to guarantee finding the shortest path. BFS explores all positions at distance N before moving to distance N+1, naturally finding the optimal solution.

### Key Concepts

- **Queue-based traversal**: Processes positions level by level
- **Path tracking**: Each position in the queue carries its complete movement history
- **Boundary validation**: Ensures moves stay within the 8x8 board (positions 0-7)

## Usage
```javascript
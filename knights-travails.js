const maxXPos = 7;
const maxYPos = 7;
const minXPos = 0;
const minYPos = 0;

const knightMovements = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

function knightMoves(
  [startingPosX, startingPosY],
  [targetXPos, targetYPos] = [7, 7]
) {
  if (startingPosX === targetXPos && startingPosY === targetYPos) {
    return "HI";
  }

  let startingPosition = [startingPosX, startingPosY];
  let queue = [{ pos: startingPosition, path: [startingPosition] }];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current.pos[0] === targetXPos && current.pos[1] === targetYPos) {
      console.log(current.path);
      return current.path;
    }

    knightMovements.forEach((move) => {
      let newX = current.pos[0] + move[0];
      let newY = current.pos[1] + move[1];

      if (
        newX >= minXPos &&
        newX <= maxXPos &&
        newY >= minYPos &&
        newY <= maxYPos
      ) {
        let newPath = current.path.slice();
        newPath.push([newX, newY]);

        queue.push({ pos: [newX, newY], path: newPath });
      }
    });
  }
}

knightMoves([3, 6]);

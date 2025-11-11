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
  [targetXPos, targetYPos] = [4, 2]
) {

   if ((startingPosX === targetXPos) && (startingPosY === targetYPos)) {
    return "HI"
   }


  let startingPosition = [startingPosX, startingPosY];
  let queue = [{ pos: startingPosition, path: [] }];

  let availableMoves = [];

  knightMovements.forEach((move) => {
    let newXCoord = move[0] + queue[0].pos[0];
    let newYCoord = move[1] + queue[0].pos[1];

    if (
      newXCoord < maxXPos &&
      newXCoord > minXPos &&
      newYCoord < maxYPos &&
      newYCoord > minYPos
    ) {
      availableMoves.push([newXCoord, newYCoord]);
    }
  });

  let currentPath = queue[0].path;
  availableMoves.forEach((setOfCoords) => {
    let pathCopy = currentPath.slice();

    pathCopy.push(setOfCoords);

    let newObjectForQueue = {
      pos: setOfCoords,
      path: pathCopy,
    };
    queue.push(newObjectForQueue);
  });

  queue.shift();

  queue.forEach((route) => {
    let currentPosition = route.pos;

    if (
      currentPosition[0] === targetXPos &&
      currentPosition[1] === targetYPos
    ) {

        console.log(route.path);
        return

    } else {
        knightMoves([route.pos[0], route.pos[1]], [targetXPos, targetYPos])
    }
  });
}

knightMoves([0, 0]);

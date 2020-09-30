let mover = {
  getDirection() {
    const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
    while (true) {
      let direction = parseInt(prompt('Введите число (от 1 до 9 кроме 5), куда вы хотите переместиться, "Отмена" для выхода.'));
      if (isNaN(direction)) {
        return  null;
      }
      if(!availableDirections.includes(direction)) {
        alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
        continue;
      }
      return direction;
    }
  },

  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y,
    };
    switch(direction) {
      case 2:
        if (nextPosition.y < config.colsCount-1) {
          nextPosition.y++;
        }
        break;
      case 4:
        if (nextPosition.x > 0) {
          nextPosition.x--;
        }
        break;
      case 6:
        if (nextPosition.x < config.rowsCount-1) {
          nextPosition.x++;
        }
        break;
      case 8:
        if (nextPosition.y > 0) {
          nextPosition.y--;
        }
        break;
      case 1:
        if (nextPosition.x < config.rowsCount) {
          nextPosition.x--;
        }
        if (nextPosition.y < config.colsCount-1) {
          nextPosition.y++;
        }
        break;
      case 3:
        if (nextPosition.x < config.rowsCount-1) {
          nextPosition.x++;
        }
        if (nextPosition.y < config.colsCount-1) {
          nextPosition.y++;
        }
        break;
      case 7:
        if (nextPosition.x < config.rowsCount-1) {
          nextPosition.x--;
        }
        if (nextPosition.y < config.colsCount-1) {
          nextPosition.y--;
        }
        break;
      case 9:
        if (nextPosition.x < config.rowsCount-1) {
          nextPosition.x++;
        }
        if (nextPosition.y < config.colsCount-1) {
          nextPosition.y--;
        }
        break;
    }
    return nextPosition;
  }
}
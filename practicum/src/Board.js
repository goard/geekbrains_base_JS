class Board {
  constructor() {
    this.boardEl = document.getElementById('game');
  }
  /**
   * @param {Settings} settings
   * @param {Snake} snake
   */
  init(settings, snake) {
    this.settings = settings;
    this.snake = snake;
  }

  /**
   *
   */
  renderBoard() {
    this.boardEl.innerHTML = '';
    for (let row = 0; row < this.settings.rowsCount; row++) {
      let tr = document.createElement('tr');
      this.boardEl.appendChild(tr);

      for (let col = 0; col < this.settings.colsCount; col++) {
        let td = document.createElement('td');
        tr.appendChild(td);
      }
    }
  }

  /**
   *
   */
  clearBoard() {
    const tdElems = document.querySelectorAll('td');
    tdElems.forEach(function(td) {
      td.className = '';
    })
  }
  /**
   *
   */
  renderSnake() {
    const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
    if (snakeBodyElems) {
      snakeBodyElems.forEach(function(tdEl) {
        tdEl.classList.add('snakeBody');
      });
    }
  }

  /**
   *
   */
  getCellEl(x, y) {
    return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
  }

  /**
   *
   */
  getSnakeBodyElems(bodyCoords) {
    if (bodyCoords.length > 0) {
      let bodyElems = [];
      for (let value of bodyCoords) {
        let elem = this.getCellEl(value.x, value.y);
        bodyElems.push(elem);
      }
      return bodyElems;
    }
    return null;
  }

  /**
   *
   * @param {Object} nextCellCoords
   * @param {number} nextCellCoords.x
   * @param {number} nextCellCoords.y
   * @param {boolean}
   */
  isNextStepToWall(nextCellCoords) {
    let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
    return nextCell === null;
  }

  /**
   *
   */
  renderFood(coords) {
    const foodCell = this.getCellEl(coords.x, coords.y);
    foodCell.classList.add('food');
  }

  /**
   * @returns {boolean} true
   */
  isHeadOnFood() {
    return this.boardEl.querySelector('.food').classList.contains('snakeBody');
  }
}
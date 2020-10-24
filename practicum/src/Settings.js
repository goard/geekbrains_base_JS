class Settings {
  /**
   *
   * @param {Object} params - Параметры игры.
   * @param {number} params.rowsCount - количество строк игрового поля.
   */
  init(params) {
    let defaultParams = {rowsCount: 21, colsCount: 21, speed: 2, winLength: 50};
    Object.assign(defaultParams, params);

    if (defaultParams.rowsCount < 10 || defaultParams > 30) {
      throw new Error('Неверные настройки, значение rowsCount долно быть в диапозоне [10, 30]')
    }
    this.rowsCount = defaultParams.rowsCount;

    if (defaultParams.colsCount < 10 || defaultParams > 30) {
      throw new Error('Неверные настройки, значение colsCount долно быть в диапозоне [10, 30]')
    }
    this.colsCount = defaultParams.colsCount

    if (defaultParams.speed < 1 || defaultParams.speed > 10) {
      throw new Error('Неверные настройки, значение speed долно быть в диапозоне [1, 10]')
    }
    this.speed = defaultParams.speed;

    if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
      throw new Error('Неверные настройки, значение winLength долно быть в диапозоне [5, 50]')
    }
    this.winLength = defaultParams.winLength;
  }
}
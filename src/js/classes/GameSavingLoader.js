import read from '../Modules/reader';
import json from '../Modules/parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const save = read()
        .then((data) => json(data))
        .then((value) => value);
      resolve(save);
    });
  }
}

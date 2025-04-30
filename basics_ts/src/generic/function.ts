class ArryaUtis {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

// const utils = new ArryaUtis();
let numbers = ArryaUtis.wrapInArray(5);

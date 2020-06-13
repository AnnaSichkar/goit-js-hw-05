class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    builder.append(str);
    builder.prepend(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

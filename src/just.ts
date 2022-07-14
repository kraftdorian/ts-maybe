export class Just<A> {
  constructor(private readonly _value: A) {}

  valueOf(): A {
    return this._value;
  }
}

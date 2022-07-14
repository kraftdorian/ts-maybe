export class Nothing {
  private static readonly id: unique symbol = Symbol('Nothing');

  valueOf(): typeof Nothing.id {
    return Nothing.id;
  }
}

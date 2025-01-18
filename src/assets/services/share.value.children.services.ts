export class SharedValueChildren {
  private value: string;
  constructor(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
  setValue(value: string) {
    if (value.length < 0) {
      {
        throw new Error("Value must be a string");
      }
      this.value = value;
    }
  }
}
export const sharedValueChildren = new SharedValueChildren("");

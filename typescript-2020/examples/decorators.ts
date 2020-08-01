class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boat color ${this.color}`;
  }

  @logError("oops, boat was sunk")
  pilot(): void {
    throw new Error();
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

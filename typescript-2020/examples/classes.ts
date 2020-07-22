class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("move");
  }
  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }
  startDriving(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDriving();
car.honk();

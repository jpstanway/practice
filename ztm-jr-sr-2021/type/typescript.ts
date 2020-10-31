const sum = (a: number, b: number) => {
  return a + b;
};

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string =`I'm not old i'm only ${age}`;

// arrays
let pets: string[] = ["cat", "dog", "pig"];
let pet2: Array<string> = ['lion', 'dragon', 'lizard'];

// object
let wizard: object = {
  a: 'John'
};

// null, undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ["basketball", 5];

// enum
enum Size { 
  Small = 1, 
  Medium = 2, 
  Large = 3 
}

let sizeName: string = Size[2];
let sizeName2: number = Size.Small;

// Any - !!!!!!!!!!! be careful
let whatever: any = 'ahhh no';

// void
let sing = (): void => {
  console.log('random');
};

// never
let error = (): never => {
  throw new Error('oops');
};

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT!');
};

// type assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy;
dog.count = 1;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('FIGHT!');
};

let fightRobotArmy4 = (robots: RobotArmy): number => {
  console.log('FIGHT!');
  return 5;
};

// class
class Animal {
  sing: string = 'aaaaaaaa';
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("roar");
lion.greet();

// union
let confused: string | number = "hello";
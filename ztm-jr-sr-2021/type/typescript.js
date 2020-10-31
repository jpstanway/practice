var sum = function (a, b) {
    return a + b;
};
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old i'm only " + age;
// arrays
var pets = ["cat", "dog", "pig"];
var pet2 = ['lion', 'dragon', 'lizard'];
// object
var wizard = {
    a: 'John'
};
// null, undefined
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ["basketball", 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName2 = Size.Small;
// Any - !!!!!!!!!!! be careful
var whatever = 'ahhh no';
// void
var sing = function () {
    console.log('random');
};
// never
var error = function () {
    throw new Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count = 1;

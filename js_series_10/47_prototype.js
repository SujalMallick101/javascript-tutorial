let myName = "hitesh     "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
"iceTea".trueLength()






let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    // console.log("hitesh is present in all objects");
}

Array.prototype.heyHitesh = function () {
    // console.log("hitesh says HI");
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance

const User = {
    username: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


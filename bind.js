Function.prototype.bindx = function (obj, ...args) {

    if (!this.binded) {
        this.binded = true;
        let newObject = { ...obj, fn: this };
        return (a, b) => newObject.fn(a, b, ...args);
    }
    return this;

}
function s(a, b) {
    console.log(`hi ${this.name} this is your value ${a + b}`);
}

let obj = {
    name: "hrithik",
    age: 22,
    workingAt: "Epam",
};
let x = s.bindx(obj);
x(1, 2);
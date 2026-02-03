
Function.prototype.callx = function (obj, ...args) {

    let context = obj ? obj : globalThis;
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
let name = "k"

function k() {
    console.log(this.name);
}

let obj = {
    name: "hrithik",
};

k.callx(obj)
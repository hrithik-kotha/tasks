
Function.prototype.applyx=function (obj,args){
    let context=obj?obj:globalThis;
    context.fn=this;
    let result=context.fn(...args);
    delete context.fn;
    return result;
}
function s(a,b){
    console.log(`hi ${this.name} this is your value ${a+b}`);
}

s(10,20);
let obj={
    name:"hrithik",
    age:22,
    workingAt:"Epam",
};
s.applyx(obj,[10,20]);
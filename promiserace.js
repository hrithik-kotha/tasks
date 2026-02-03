Promise.racex= function (...args) {

    return new Promise((resolve, reject) => {
        let result = [];
        for (let i = 0; i < args.length; i++) {
            args[i]
                .then((res) => {
                    resolve(res);   
                })
                .catch((err) => {
                    reject(err);
                })
        }

    })
}
let p1 = new Promise((res, rej) => {
    res(2);
});     
let p2 = new Promise((res, rej) => {
    res(3);
}
);
let x = Promise.racex(p1, p2);
x
    .then((res) => {
        console.log(res); 
    })
    .catch((err) => {
        console.log(err);
    })
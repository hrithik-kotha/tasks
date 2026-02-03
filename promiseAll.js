Promise.allx = function (...args) {

    return new Promise((resolve, reject) => {
        let result = [];
        for (let i = 0; i < args.length; i++) {
            args[i]
                .then((res) => {
                    result.push(res);
                    if (result.length == args.length) {
                        resolve(result);
                    }
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
    res(2);
});
let x = Promise.allx(p1, p2);
x
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
function debounceTrailing(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}
function debounceLeading(fn, delay) {
    let timerId = null;
    return function (...args) {
        if (!timerId) {
            fn.apply(this, args)
        }
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            timerId = null;
        }, delay)
    }
}

function A(a, b) {
    console.log(a, b);
}
let x = debounceTrailing(A, 100);
let y = debounceLeading(A, 100);

let button = document.getElementById("button").addEventListener("click",() => x(10, 20));
let button1 = document.getElementById("button1").addEventListener("click", () => y(10, 20));





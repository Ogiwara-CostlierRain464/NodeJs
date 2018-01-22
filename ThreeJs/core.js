let fib = {
    iterator: function () {},
    [Symbol.iterator]: function* () {
        let i = 0,k = 1;
        yield k;
        while(k < 100){
            k = i + k;
            i = k - i;
            yield k;
        }
    }
};

for (let k of fib) console.log(k);

//TODO kotlin.js
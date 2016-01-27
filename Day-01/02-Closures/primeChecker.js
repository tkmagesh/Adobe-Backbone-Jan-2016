/*
Create a function that returns true/false depending on the given number is a prime number or not. The algorithm to check the prime should be run only once for any given Number..
*/

var  primeChecker = (function(){
    var cache = {};
    function isPrime(n){
        console.log('processing ', n);
        for(var i=2; i <= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    return function(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = isPrime(n);
        return cache[n];
    }
})();

primeChecker(10) // run
primeChecker(11) // run
primeChecker(12) // run

primeChecker(10) // should not run the algorithm
primeChecker(11) // should not run the algorithm
primeChecker(12) // should not run the algorithm

var  evenOddFinder = (function(){
    var cache = {};
    function isEvenOrOdd(n){
        console.log('processing ', n);
        return n % 2 === 0;
    }
    return function(n){
        if (typeof cache[n] === 'undefined')
            cache[n] = isEvenOrOdd(n);
        return cache[n];
    }
})();


function memoize(fn){
     var cache = {};
     return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === 'undefined')
            cache[key] = fn.apply(this,arguments);
        return cache[key];
    }
}


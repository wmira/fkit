

export const curry = function(f, ...args) {
    if ( f.length === 0 ) {
        return f;
    }
    if ( args.length >= f.length ) {
        return f(...args);
    }
    return function(...nextArgs) {
        return curry(f, ...args.concat(nextArgs));
    };
};
export default curry;

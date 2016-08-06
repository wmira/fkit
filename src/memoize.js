
import identity from './identity';

export const memoize = (f, createKey = identity) => {

    const cache = {};
    return (...args) => {
        const key = createKey(...args);
        const val = cache[key];
        if ( val !== undefined ) {
            return val;
        } else {
            const result = f(...args);
            cache[key] = result;
            return result;
        }
    };

};

export default memoize;

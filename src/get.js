
import { nullcombinator } from './combinators';
import compose from './compose';
import memoize from './memoize';

const sget = nullcombinator(field => {
    return nullcombinator(( obj ) => {
        return obj[field];
    });
});


const create = getter => nullcombinator((field) => {

    const arr = field.split('.');
    if ( arr.length === 1 ) {
        return getter(field);
    } else {
        return compose( ...arr.map( getter).concat().reverse() );
    }
});

export const get = create(sget);
export const mget = create(memoize(sget));

export default { get, mget };

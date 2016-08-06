
import should from 'should';
import { curry } from '../src/curry';

describe (' curry ', () => {
    
    it('curries with no arg', () => {
        const ha = () => 'ha';
        const curried = curry(ha);
        should(curried()).be.exactly('ha');
    });
    it('curries single arg', () => {
        const single = (toHa) => toHa;
        const curried = curry(single);
        should(curried('haha')).be.exactly('haha');
        should(curried('haha')).be.exactly('haha');
    });

    it('curries stuff', () => {
        const someFunkyFunc = (toHa, arg2 ) => toHa + arg2;
        const hahaNum = curry(someFunkyFunc, 'haha' );
        should(hahaNum('2')).be.exactly('haha2');
        should(hahaNum('3')).be.exactly('haha3');
    });

    it('curries stuff 3', () => {
        const someFunkyFunc = (toHa, arg2, arg3 ) => toHa + arg2 + arg3;
        const hahaNum = curry(someFunkyFunc, 'haha');
        const haha33 = hahaNum('33');
        should(haha33('2')).be.exactly('haha332');
        should(haha33('3')).be.exactly('haha333');
        should(haha33('4')).be.exactly('haha334');
    });

    it('returns are curriable ', () => {
        const someFunkyFunc = (toHa, arg2, arg3 ) => toHa + arg2 + arg3;
        const hahaNum = curry(someFunkyFunc, 'haha');
        const haha33 = hahaNum('33');
        const haha44 = hahaNum('44');
        should(haha33('2')).be.exactly('haha332');
        should(haha33('3')).be.exactly('haha333');
        should(haha33('4')).be.exactly('haha334');

        should(haha44('2')).be.exactly('haha442');
        should(haha44('3')).be.exactly('haha443');
        should(haha44('4')).be.exactly('haha444');
    });
});

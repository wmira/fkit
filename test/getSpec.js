


import should from 'should';
import { get } from '../src/get';

describe (' get ', () => {

    it('get single stuff', () => {
        const obj = { a: 1, b: 2, c: 3 };

        const geta = get('a');
        const getb = get('b');
        const getc = get('c');

        should(geta(obj)).be.exactly(1);
        should(getb(obj)).be.exactly(2);
        should(getc(obj)).be.exactly(3);
    });

    it('get deeper stuff', () => {
        const obj = { a: { b: { c: 3} } };
        const getABC = get('a.b.c');
        should(getABC(obj)).be.exactly(3);

    });
});

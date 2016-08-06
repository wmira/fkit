import should from 'should';
import { compose } from '../src/compose';

describe('compose', () => {

    it('execute funcs', () => {
        const f2 = (arg) => arg;
        const { round } = Math;
        const stringToInt = compose(round, f2);
        should(stringToInt('5.3')).be.exactly(5);
    });

    it('execute more funcs ', () => {
        const f1 = (a) => a+ 1;
        const f2 = (a) => a+ 2;

        const composed = compose(f2, f1);

        should(composed(1)).be.exactly(4);

    });
});

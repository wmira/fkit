


import should from 'should';
import { indexBy } from '../src/indexBy';

describe (' indexBy ', () => {

    it('indexBy some field', () => {
        const col = [ { id: 1, name: 'name'}, {id: 2, name: 'name2' }];
        const indexById = indexBy('id');
        const result = indexById(col);
        should(result[1].id).be.exactly(1);
        should(result[2].id).be.exactly(2);

        const indexByName = indexBy('name');
        const result2 = indexByName(col);        
        should(result2.name.name).be.exactly('name');
        should(result2.name2.name).be.exactly('name2');

    });
});

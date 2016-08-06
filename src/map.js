

import curry from './curry';

export const map = curry( (f, ftor) => {
    return ftor.map(f);
});

export default map;

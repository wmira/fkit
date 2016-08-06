

export const compose = function(...fs) {
    if ( fs.length === 1 ) {
        return fs[0];
    }
    const fspipe = fs.concat().reverse();
    return function(arg) {
        return fspipe.reduce( (acc, f) => {
            return f(acc);
        }, arg);
    };
};

export default compose;


export const nullcombinator = (f) => (arg) => {
    if ( arg !==  null && arg !== undefined ) {
        return f(arg);
    }
    return arg;
};

export default { nullcombinator };

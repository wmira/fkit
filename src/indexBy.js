

export const indexBy = (key) => (arr) => {

    return arr.reduce( (acc, value) => {
        const keyValue = value[[key]];
        acc[keyValue] = value;
        return acc;
    }, {});
};

export default { indexBy };

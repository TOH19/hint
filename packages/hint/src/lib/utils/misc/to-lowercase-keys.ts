/**
 * Returns the same object but with all the properties lower cased. This is
 * helpful when working with `headers`.
 */
export default (obj) => {
    const entries = Object.entries(obj);

    return entries.reduce((lowerCased, [key, value]) => {
        lowerCased[key.toLowerCase()] = value;

        return lowerCased;
    }, {});
};

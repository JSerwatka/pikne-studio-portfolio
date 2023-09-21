// zip arrays of different lengths - takes the longest
export function zip<T, K, R>(
    aArray: Array<T>,
    bArray: Array<K>,
    callback: (aElement: T | undefined, bElement: K | undefined) => R
) {
    const maxArraysLenght = Math.max(aArray.length, bArray.length);
    const iterator = Array(maxArraysLenght).fill(0);

    return iterator.map((_, index) => {
        const aElement = aArray[index];
        const bElement = bArray[index];

        return callback(aElement, bElement);
    });
}

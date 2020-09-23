/**
 * Sorts Object elements of array
 * @param {string} a previous element of array
 * @param {string} b next element of array
 * @param {string} sorter attribute of object to use in sorting
 */
export function useAsort(a, b, sorter) {
    return a[sorter] === b[sorter] ? 0 : a[sorter] < b[sorter] ? -1 : 1;
}

/**
 * Shuffle elements of array
 * @param {array} array array to shuffle
 */
export function useShuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

/**
 * Sorts Object elements of array
 * @param {string} a previous element of array
 * @param {string} b next element of array
 * @param {string} sorter attribute of object to use in sorting
 */
export function Asort(a, b, sorter) {
    return a[sorter] === b[sorter] ? 0 : a[sorter] < b[sorter] ? -1 : 1;
}

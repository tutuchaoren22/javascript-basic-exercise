export default function flattenArray(array) {
    // This function flattens a nested array into a sequence.
    //
    // Your target:
    //
    // * Please implement this function and pass all the tests in flatten_array_spec.js.
    // * Please do NOT modify the signature of the function.

    if (Array.isArray(array)) {
        let flattenedArray = [];
        for (let i in array) {
            if (Array.isArray(array[i])) {
                flattenedArray.push(...array[i]);
            } else {
                flattenedArray.push(array[i]);
            }
        }
        return flattenedArray;
    } else {
        throw new Error('Flatten undefined or null array');
    }
}
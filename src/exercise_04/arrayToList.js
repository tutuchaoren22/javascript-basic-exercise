export default function arrayToList(array) {
    // This function creates a linked list from an array.
    //
    // Your target:
    //
    // * Please implement this function and pass all the tests in array_to_list_spec.js.
    // * Please do NOT modify the signature of the function.
    if (!array) {
        throw new Error('Creating list from undefined array');
    } else if (array.length == 0) {
        throw new Error('Creating list from empty array');
    } else {
        return genList(array);
    }

    function genList(array) {
        return (array.length > 1) ? { value: array[0], next: genList(array.slice(1)) } : { value: array[0], next: null };
    }
}
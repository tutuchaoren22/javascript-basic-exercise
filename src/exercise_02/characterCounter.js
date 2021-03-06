export default function countCharacter(string, prediction) {
    // This function will count the character number in a string which satisfies specific prediction.
    //
    // Your target:
    //
    // * Please implement this function and pass all the tests in character_counter_spec.js.
    // * Please do NOT modify the signature of the function.
    if (string) {
        return (prediction) ? string.split('').filter(prediction).length : string.length;
    } else {
        return 0;
    }

}
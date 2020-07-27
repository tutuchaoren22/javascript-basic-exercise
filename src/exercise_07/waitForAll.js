export default function waitForAll(...promises) {
    // This function returns a promise which will be triggered when all the `promises` are completed.
    //
    // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
    // if one of the `promises` is rejected, then the returned promise will be rejected.
    //
    // Your target:
    //
    // * Please implement this function and pass all the tests in wait_for_all_spec.js.
    // * Please do NOT modify the signature of the function.

    for (let i of promises) {
        if (!(i instanceof Promise)) {
            throw new Error('Not all elements are promises.');
        }
    }

    return Promise.allSettled(promises)
        .then(allPromises => allPromises.filter(p => p.status === 'rejected'))
        .then(resPromises => (resPromises.length > 0 ? Promise.reject() : Promise.resolve()));
}
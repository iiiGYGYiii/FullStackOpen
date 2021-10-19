async function tryPromise(promiseFunction) {
  try {
    const data = await promiseFunction();
    return [data, null];
  } catch ({ message }) {
    return [null, message];
  }
}

module.exports = {
  tryPromise,
};

const PromiseCount = async promises => {

  promises.forEach((promise, i) => {
    if (!(promise instanceof Promise)) {
      throw Error(`Argument ${i + 1} is not a promise`)
    }
  })

  const results = [];

  const successHandler = value => results.push({
      success: true,
      value,
  });

  const errorHandler = value => results.push({
      success: false,
      value,
  });

  return Promise.all(promises.map(p => (
      p.then(successHandler).catch(errorHandler)
  ))).then(() => results);
}

module.exports = PromiseCount;

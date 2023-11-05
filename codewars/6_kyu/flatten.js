function flatten() {
  let result = [];
  let args = Array.from(arguments);
  let hasArray = true;

  while (hasArray) {
    hasArray = false;

    for (const element of args) {
      if (Array.isArray(element)) {
        hasArray = true;

        for (const el of element) {
          result.push(el);
        }
      } else {
        result.push(element);
      }
    }

    if (hasArray) {
      args = result;
      result = [];
    }
  }

  return result;
}

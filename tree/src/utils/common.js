// get amount of nested objects in object
export function getNestedItemsCount(obj) {
  if (!obj || typeof obj !== 'object') {
    return 0;
  }

  let nestedItemsCount = 1;
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    if (val && typeof val === 'object') {
      nestedItemsCount += getNestedItemsCount(val);
    }
  });
  return nestedItemsCount;
}

/**
 * Recursively searches a deeply nested object to find a specific key and returns its associated value.
 * @param {object} obj - The nested object to search through.
 * @param {string} targetKey - The key to search for.
 * @returns {*} The value associated with the target key, or a message if not found.
 */

const findValueOfTheKey = (
  nestedObject: Record<string, any>,
  targetKey: string,
): any => {
  for (const key in nestedObject) {
    if (nestedObject.hasOwnProperty(key)) {
      if (key === targetKey) return nestedObject[key];

      if (typeof nestedObject[key] === 'object' && nestedObject[key] !== null) {
        const result = findValueOfTheKey(nestedObject[key], targetKey);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }

  return `Value with key "${targetKey}" does not exist`;
};

export default findValueOfTheKey;

# findValueOfTheKey

A utility function to recursively search through a deeply nested object and find the value associated with a specific key.

## Installation

```bash
npm install find-value-of-the-key

const findValueOfTheKey = require('find-value-of-the-key');

const nestedObject = {
  a: {
    b: {
      c: {
        d: 'target value'
      }
    },
    e: {
      f: 'another value'
    }
  }
};

const targetKey = 'd';
const value = findValueOfTheKey(nestedObject, targetKey);
console.log(value); // Output: 'target value'

```

Contributions to this utility are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/aleksandarLazic1998/findValueOfTheKey).

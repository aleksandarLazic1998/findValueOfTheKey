import findValueOfTheKey from '.';

describe('findValueOfTheKey function', () => {
  const nestedObject = {
    a: {
      b: {
        c: {
          d: 'target value',
        },
      },
      e: {
        f: 'another value',
      },
    },
  };

  it('should find the value for an existing key', () => {
    const targetKey = 'd';
    const value = findValueOfTheKey(nestedObject, targetKey);
    expect(value).toEqual('target value');
  });

  it('should return a message for a non-existing key', () => {
    const targetKey = 'nonexistent';
    const result = findValueOfTheKey(nestedObject, targetKey);
    expect(result).toEqual(`Value with key "${targetKey}" does not exist`);
  });

  it('should work with nested objects', () => {
    const targetKey = 'f';
    const value = findValueOfTheKey(nestedObject, targetKey);
    expect(value).toEqual(`Value with key "${targetKey}" does not exist`);
  });

  it('should handle null and undefined values', () => {
    const testObject = {
      a: null,
      b: {
        c: undefined,
      },
    };
    const targetKey = 'c';
    const result = findValueOfTheKey(testObject, targetKey);
    expect(result).toEqual(`Value with key "${targetKey}" does not exist`);
  });
});

// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  return (typeof str[index] === 'string' && checkIfChar(str[index])) ? str[index] : undefined;
}

function checkIfChar(c) {
  return (c >= "a" && c <= "z" || c >= "A" && c <= "Z") ? true : false;
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('rodeo', 6), undefined);
expect(getLetterAtIndex('', 0), undefined);
expect(getLetterAtIndex(1234, 2), undefined);
expect(getLetterAtIndex('rodeo', -1), undefined);
expect(getLetterAtIndex('my little pony', 9), undefined);
expect(getLetterAtIndex("cowboy's hat", 6), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}

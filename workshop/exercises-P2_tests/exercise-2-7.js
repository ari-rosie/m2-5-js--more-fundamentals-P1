// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr[0] === 'string' && typeof arr[1] === 'number') {
    let str = '';
    if (arr[1] > 0) {
      str = arr[0];
      for (let i = 1; i < arr[1]; i++)
        str = str.concat(arr[0]);
    }
    return str;
  }  
  else
    return undefined;
}
// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(["BOUM", 3]), "BOUMBOUMBOUM");
expect(repeat(["BOUM", 0]), "");
expect(repeat(["BOUM", -4]), "");
expect(repeat([3000, 2]), undefined);
expect(repeat(["BOUM", "a"]), undefined);
expect(repeat(["", 5]), "");
expect(repeat([" ", 5]), "     ");

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

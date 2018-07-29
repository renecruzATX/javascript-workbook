'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  //create vowelArray so I can check first letter of word agains this array
  const vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  //this function will check if the input is a valid string. Single words only.
  const isWordValid = (word) => {
    return typeof word == 'string' && !(word.includes(" "));
  }

  //This function takes the first letter of the string and checks it against the vowelArray to see if the word begins with a vowel or not
  const isFirstCharAVowel = (word) => {
    const firstChar = word.substring(0, 1);
    return vowelArray.includes(firstChar);
  }

  //check if input is a valid string with a function  isWordValid() single word pig latin only
  if (isWordValid(word)) {
    //if input is valid then check to see if the first letter of the word is a vowel
    if (isFirstCharAVowel(word)) {
      //If the first letter of a word is a vowel then output that word plus 'yay' at the end
      return (word + 'yay').toLowerCase();
    } else {
      //If the first letter of a word is a consonant the output the last part of the word plus the first letter and 'ay'
      return (word.substring(1) + word.substring(0, 1) + 'ay').toLowerCase();
    }

  } else {
    //Tell the user to only input a single English word to turn into Pig Latin.  We aren't in the Advanced class yet!

    return 'Please enter a single English word to get a word in Pig Latin. Thank you. L33t speak is 0K as well.';
  }

}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
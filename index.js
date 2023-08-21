const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// i looked online to find a way to access each word individually and one way was to use the .split method 
// so we got the code to seperate the words and then capitalize the first word of every word now we have to make it so that they are all together rather than in an array 

const titleCased = () => {
  return tutorials.map((strings) => {
      let seperateWords = strings.split(" ");
      return seperateWords.map((words) => {
        const firstLetterUpperCase = words[0].toUpperCase();
        const restOfTheWords = words.slice(1);
        let combinedStrings = firstLetterUpperCase.concat(restOfTheWords);
        return combinedStrings;
    }).join(" ");
  });
}
// currently all the words are seperated and the first letters are capitalized
// so we access the inside of the arrays again and then combined the words again

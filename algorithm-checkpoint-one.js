const sentence = document.getElementById("practice-sentence").textContent;
const result = checkSentence(sentence);

function checkSentence(sentence) {
  // Initialize counters
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelsCount = 0;
  const vowels = "aeiou";

  // Loop through each character of the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();
    sentenceLength++;

    // Check if character is a vowel
    if (vowels.includes(char)) {
      vowelsCount++;
    }

    // Check if the character is a space and the next character is not a space
    if (char === " " && i < sentence.length - 1 && sentence[i + 1] !== " ") {
      wordCount++;
    }
  }

  // Add 1 to wordCount to account for the last word
  if (sentence.length > 0) {
    wordCount++;
  }

  // Return or output the results
  return {
    length: sentenceLength,
    words: wordCount,
    vowels: vowelsCount,
  };
}

console.log(result);

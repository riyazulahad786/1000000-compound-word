// Function to check if a word is compound
function CompoundWord(word, wordSet) {
    if (wordSet.has(word)) return true;
    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);
      if (wordSet.has(prefix) && CompoundWord(suffix, wordSet)) {
        return true;
      }
    }
    return false;
  }
  
  // Finding the longest and second longest compounded words
  function findLongestCompounds(words) {
    const wordSet = new Set(words);
    let longest = '';
    let secondLongest = '';
    for (const word of words) {
      if (word.length > longest.length && CompoundWord(word, wordSet)) {
        secondLongest = longest;
        longest = word;
      } else if (word.length > secondLongest.length && CompoundWord(word, wordSet)) {
        secondLongest = word;
      }
    }
    return { longest, secondLongest };
  }
  
  // Measure the time taken to process the input file
  const inputWords = [
    "aa",
    "aah",
    "aahed",
    "aahing",
    "aahs",
    "aal",
    "aalii",
    "aaliis",
    "aals",
    "aardvark",
    "aardvarks",
    "aardwolf",
    "aardwolves",
    "aargh",
    "aarrgh",
    "aarrghh",
    "aas",
    "aasvogel",
    "aasvogels",
    "ab",
    "aba",
    "abaca",
    "abacas",
    "abaci",
    "aback",
    "abacterial",
    "abacus",
    "abacuses",
    "abaft",
    "abaka",
    "abakas",
    "abalone",
    "abalones",
    "abamp",
    "abampere",
    "abamperes",
    "abamps",
    "abandon",
    "abandoned",
    "abandoner",
    "abandoners",
    "abandoning",
    "abandonment",
    "abandonments",
    "abandons",
    "abapical",
    "abas",
    "abase",
    "abased",
    "abasedly",
    "abasement",
    "abasements",
    "abaser",
    "abasers",
    "abases",
    "abash",
    "abashed",
    "abashes",
    "abashing",
    "abashment",
    "abashments",
    "abasia",
    "abasias",
    "abasing",
    "abatable",
    "abate",
    "abated",
    "abatement",
    "abatements",
    "abater",
    "abaters",
    "abates",
    "abating",
    "abatis",
    "abatises",
    "abator",
    "abators",
    "abattis",
    "abattises",
    "abattoir",
    "abattoirs",
    "abaxial",
    "abaxile",
    "abba",
    "abbacies",
    "abbacy",
    "abbas",
    "abbatial",
    "abbe",
    "abbes",
    "abbess",
    "abbesses",
    "abbey",
    "abbeys",
    "abbot",
    "abbotcies",
    "abbotcy",
    "abbots",
    "abbreviate",
    "abbreviated",
    "abbreviates",
    "abbreviating",
    "abbreviation",
    "abbreviations",
    "abbreviator",
    "abbreviators",
    "abdicable",
    "abdicate",
    "abdicated",
    "abdicates",
    "abdicating",
    "abdication",
    "abdications",
    "abdicator",
    "abdicators",
    "abdomen",
    "abdomens",
    "abdomina",
    "abdominal",
    "abdominally",
    "abduce",
    "abduced",
    "abducens",
    "abducent",
    "abducentes",
    "abduces",
    "abducing",
    "abduct",
  ];
  
  const startTime = performance.now(); // Start measuring time


  const { longest, secondLongest } = findLongestCompounds(inputWords);
  const endTime = performance.now(); // Stop measuring time
  
  console.log('Input Words:', inputWords);
  console.log('Unique Longest Compounded Word:', longest);
  console.log('Unique Second Longest Compounded Word:', secondLongest);
  console.log('Time taken (in milliseconds):', endTime - startTime);
//   -------------------------------------------------------------------------------------/

 //this below code for printing 100,00000+ list longest compound word



// Function to check if a word is compound
// function CompoundWord(word, wordTrie, memo = new Map()) {
//     if (memo.has(word)) return memo.get(word);
//     if (wordTrie.has(word)) {
//       memo.set(word, true);
//       return true;
//     }
  
//     for (let i = 1; i < word.length; i++) {
//       const prefix = word.slice(0, i);
//       const suffix = word.slice(i);
//       if (wordTrie.has(prefix) && CompoundWord(suffix, wordTrie, memo)) {
//         memo.set(word, true);
//         return true;
//       }
//     }
//     memo.set(word, false);
//     return false;
//   }
  
//   // Finding the longest and second longest compounded words
//   function findLongestCompounds(words) {
//     // Sort words by length in descending order
//     words.sort((a, b) => b.length - a.length);
  
//     const wordTrie = new Trie();
//     for (const word of words) {
//       wordTrie.insert(word);
//     }
  
//     let longest = '';
//     let secondLongest = '';
  
//     for (const word of words) {
//       if (word.length <= secondLongest.length) break; // No need to check shorter words
//       if (CompoundWord(word, wordTrie)) {
//         if (word.length > longest.length) {
//           secondLongest = longest;
//           longest = word;
//         } else if (word.length > secondLongest.length) {
//           secondLongest = word;
//         }
//       }
//     }
  
//     return { longest, secondLongest };
//   }
  
//   class TrieNode {
//     constructor() {
//       this.children = new Map();
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
//     }
  
//     insert(word) {
//       let node = this.root;
//       for (const char of word) {
//         if (!node.children.has(char)) {
//           node.children.set(char, new TrieNode());
//         }
//         node = node.children.get(char);
//       }
//       node.isEndOfWord = true;
//     }
  
//     has(word) {
//       let node = this.root;
//       for (const char of word) {
//         if (!node.children.has(char)) {
//           return false;
//         }
//         node = node.children.get(char);
//       }
//       return node.isEndOfWord;
//     }
//   }
  
//   // Measure the time taken to process the input file
//   const inputWords = [/* Your array of words here */];
//   const startTime = performance.now(); // Start measuring time
  
//   const { longest, secondLongest } = findLongestCompounds(inputWords);
//   const endTime = performance.now(); // Stop measuring time
  
//   console.log('Input Words:', inputWords.length, 'words');
//   console.log('Unique Longest Compounded Word:', longest);
//   console.log('Unique Second Longest Compounded Word:', secondLongest);
//   console.log('Time taken (in milliseconds):', endTime - startTime);
  
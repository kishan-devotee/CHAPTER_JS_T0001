const str = "Hello world! Hello bye bye";

function charCount(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    return count;
}

function wordCount(str) {
    return str.split(" ").length;
}

function Freq(string) {
    var words = string.split(" ")
    var freqMap = [];
    words.forEach(function(word) {
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
    
    return freqMap;
}



//Text Analysis Tool

console.log("Character Count ----->",charCount(str));
console.log("Word Count ----->",wordCount(str));
console.log("Word Frequency ----->",Freq(str));






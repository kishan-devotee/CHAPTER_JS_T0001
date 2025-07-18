document.getElementById('analyze-button').addEventListener('click', analyzeText);

function analyzeText() {
    const text = document.getElementById('text-input').value;

    const words = text.toLowerCase()
        .split(/\s+/)
        .map(word => word.replace(/[^a-z0-9]/g, ''))
        .filter(word => word.length > 0);

    const wordCount = words.length;

    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageWordLength = wordCount === 0 ? 0 : totalLength / wordCount;

    const wordFrequency = words.reduce((freq, word) => {
        freq[word] = (freq[word] || 0) + 1;
        return freq;
    }, {});

    const mostCommonWords = Object.entries(wordFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([word, count]) => `${word} (${count})`)
        .join(', ');

    document.getElementById('word-count').textContent = `Word Count: ${wordCount}`;
    document.getElementById('average-word-length').textContent = `Average Word Length: ${averageWordLength.toFixed(2)}`;
    document.getElementById('most-common-words').textContent = `Most Common Words: ${mostCommonWords}`;
}

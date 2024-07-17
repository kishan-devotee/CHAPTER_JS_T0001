const API_URI = "https://dummyjson.com/quotes";

const Data = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.quotes;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

let counter = 0;

const getQuote = () => {
  let data = Data(API_URI);
  data.then((quote) => {
    document.getElementById("quote").innerText = quote[counter].quote;
    document.getElementById(
      "author"
    ).innerText = `Author : ${quote[counter].author}`;
    counter++;
  });
  data.catch((error) => {
    document.getElementById("quote").textContent =
      "Error fetching quote, please try again later.";
  });
};

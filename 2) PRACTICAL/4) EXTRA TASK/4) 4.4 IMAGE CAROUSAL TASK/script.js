const img = [
  "https://images.unsplash.com/photo-1720491591781-93404ad84f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720509082729-93715401b9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720494322848-e6b14d968848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720449916410-c99d41dce18e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1714919216957-2ca4c1300887?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
];

const imgTag = document.querySelector("img");

let randomIndex = 0;
const ShowImage = () => {
  let main = document.querySelector(".cara");
  let ImgSlide = `
     <img src="${img[randomIndex]}" alt=" ${randomIndex + 1}" loading="lazy" />
    `;
  main.innerHTML = ImgSlide;
};

const left = () => {
  if (randomIndex <= 0) {
    randomIndex = img.length - 1;
    console.log(randomIndex);
  } else {
    randomIndex--;
    ShowImage();
  }
};

const right = () => {
  if (randomIndex >= img.length - 1) {
    randomIndex = 1;
    console.log(randomIndex);
  } else {
    randomIndex++;
    ShowImage();
  }
};

setInterval(() => {
  if (randomIndex >= img.length - 1) {
    randomIndex = 0;
    ShowImage();
  } else {
    randomIndex++;
    ShowImage();
  }
}, 5000);

ShowImage();

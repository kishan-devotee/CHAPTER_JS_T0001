let btn = document.getElementById("Get-Locate");
let areaMap = document.querySelector(".main");

console.log(areaMap);

const Succ = (currPossition) => {
  console.log(
    "Latitude ----> ",
    currPossition.coords.latitude,
    "Longitude ----> ",
    currPossition.coords.longitude
  );
  
  let latitude = currPossition.coords.latitude;
  let longitude = currPossition.coords.longitude;

  let iframeHTML = `<iframe 
  width="100%" 
  height="100%" 
  frameborder="0" 
  scrolling="no" 
  marginheight="0" 
  marginwidth="0" 
  src="https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=14&amp;output=embed"
 >
 </iframe>`;

  areaMap.innerHTML = iframeHTML;
};

const Fail = () => {
  console.log("Fail to get location");
};

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(Succ, Fail);
});

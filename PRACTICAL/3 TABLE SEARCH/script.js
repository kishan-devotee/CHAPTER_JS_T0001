const API_URI = "https://jsonplaceholder.typicode.com/users";
let row = document.querySelector("#tableBody");

const Getdata = async (url) => {
  let data = await fetch(url);
  data = await data.json();
  return data;
};

const Formsubmit = (event) => {
  event.preventDefault();
  let Data = Getdata(API_URI);
  let SearchText = document.getElementById("SearchName").value;
  Data.then((data) => {
    let filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(SearchText.toLowerCase())
    );
    row.innerHTML = "";
    if (filteredData.length === 0) {
      row.innerHTML = `<tr><td colspan='4'>No Data Found</td></tr>`;
      console.log("No Data Found");
    } else {
      filteredData.map((value) => {
        row.innerHTML += `
              <tr>
                <td>${value.id}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.address.street}, ${value.address.city}, ${value.address.zipcode}</td>
              </tr>
            `;
        document.getElementById("dataTable").appendChild(row);
      });
      document.getElementById("SearchName").value = "";
      console.log("Filtered Data:", filteredData);
    }
  }).catch((err) => {
    console.error("Error:", err);
  });
};

const showData = (data) => {
  data
    ?.then((data) => {
      data.map((value) => {
        row.innerHTML += `
          <tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.email}</td>
            <td>${value.address.street}, ${value.address.city}, ${value.address.zipcode}</td>
          </tr>
        `;
        document.getElementById("dataTable").appendChild(row);
      });
    })
    .catch((err) => {
      console.log("Error From Show Data:", err);
    });
};

let data = Getdata(API_URI);
showData(data);

const res = () => {
  window.location.reload();
};

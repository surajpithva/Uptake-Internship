const productsContainer = document.querySelector(".products");
const productContainer = document.querySelector(".prod");
const getProductsData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      data.map((number, index) => {
        const html = `<div class="col-md-3 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product">
              <img src="${data[index].image}" alt=""/>
            </div>
            <div class="title pt-4 pb-1">${data[index].category}</div>
            <div class="price">${data[index].price}</div>
            
            <button type="button" class="btn btn-primary" onclick="openModal(${data[index].id})">Open Modal</button>




        `;
        productsContainer.insertAdjacentHTML("beforeend", html);
      });
    });
};

getProductsData();
function openModal(id) {
  document.querySelector(".myModal").style.display = "block";
  console.log(id);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data.price);
      const html = `
      
        <img src="${data.image}" alt=""/>
     
      <div class="title pt-4 pb-1">${data.category}</div>
      <div class="price">${data.price}</div>




  `;

      productContainer.insertAdjacentHTML("beforeend", html);
    });
}

function closeModal() {
  document.querySelector(".myModal").style.display = "none";
}
// function openmodel() {
//   document.getElementById("exampleModal").style.display = "block";
// }
// const fetchDataBtn = document.querySelector("#fetchdata");
// const result = document.querySelector("#result");

// // gets data from API and sets the content of #result div
// const getData = function () {
//   result.innerText = "Loading....";
//   fetch("https:///fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       result.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch((error) => console.log(error));
// };

// // add event listener for #fetchdata button
// fetchDataBtn.addEventListener("click", getData);

// const fullDataSummery = () => {
//   fetch(`https://fakestoreapi.com/products`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.map((number, index) => {
//         const htmlone = `
//       <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#aboutUs">
//       More Details /button>
//       `;
//       });

//       productsContainer.insertAdjacentHTML("beforeend", htmlone);
//     });
// };
// fullDataSummery();

//     <div
//       class="modal fade"
//       id="aboutUs"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabindex="-1"
//       aria-labelledby="aboutUsLabel"
//       aria-hidden="true"
//     >
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h1 class="modal-title fs-5" id="aboutUsLabel">
//               GFG | About Us
//             </h1>
//             <button
//               type="button"
//               class="btn-close"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//           </div>
//           <div class="modal-body">
//             millions of programmers. <br />
//             <h5 class="mt-3">What we offer</h5>

//             Experts, Internship opportunities and Job Opportunities.
//           </div>
//           <div class="modal-footer">
//             <button
//               type="button"
//               class="btn btn-secondary"
//               data-bs-dismiss="modal"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

const getProducts = document.querySelector(".product");
const countriesContainer = document.querySelector(".products");

const getProductsData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        const html = `
       
    
          <div
            class="col-md-3 d-flex flex-column align-items-center justify-content-center product-item my-3"
         >
            <div class="product">
              <img
                src="${data[i].image}"
                alt=""
              />
            </div>
            <div class="title pt-4 pb-1">${data[i].category}</div>

            <div class="price">${data[i].price}</div>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" id="myBtn">More Details</button>`;
        countriesContainer.insertAdjacentHTML("beforeend", html);
      }
      document.getElementById("myBtn").addEventListener("click", function () {
        alert("hello");
        countriesContainer.innerHTML = htmlone;
      });
    });
};
getProductsData();

const productsContainer = document.querySelector(".products");
const productContainer = document.querySelector(".prod");

const getProductsData = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((number, index) => {
        const html = `<div class="col-md-3 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div class="product">
              <img src="${data[index].image}" alt=""/>
            </div>
            <div class="title pt-4 pb-1">${data[index].category}</div>
            <div class="price">${data[index].price}$</div>

            <button type="button" class="btn btn-primary" onclick="openModal(${data[index].id})">More Details</button>
        `;
        productsContainer.insertAdjacentHTML("beforeend", html);
      });
    });
};

getProductsData();

const openModal = function (id) {
  document.querySelector(".myModal").style.display = "block";
  const title = document.getElementById("title");
  const image = document.getElementById("myImage");
  const desc = document.getElementById("description");
  const category = document.getElementById("category");
  const price = document.getElementById("price");
  const rate = document.getElementById("rate");
  const readMore = document.getElementById("readMore");
  // const dots = document.getElementById("dots");
  // const moreText = document.getElementById("more");
  // const btnText = document.getElementById("myBtn");

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      image.src = data.image;
      title.innerHTML = data.title;
      desc.innerHTML = data.description.slice(0, 90);
      if (data.description.trim() > 90) {
      }

      console.log(data.description);
      // console.log(data.description.slice(0, 100), "...");

      // if (data.description.trim() > 100) {
      //   const hello = `<a href="">...read more${data.description}</a> `;
      // } else {
      //   desc.innerHTML = data.description;
      // }

      category.innerHTML = data.category;
      price.innerHTML = data.price;
      rate.innerHTML = data.rating.rate;
    });
};

// if(data.description > )
// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }
function closeModal() {
  document.querySelector(".myModal").style.display = "none";
}

// const looterticket = new Promise(function (resolve, reject) {
//   console.log("there is drawing happping");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("you will win");
//     } else {
//       reject(new Error("you lost your money"));
//     }
//   }, 2000);
// });
// looterticket.then((res) => console.log(res)).catch((err) => console.error(err));

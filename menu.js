var buttons = document.querySelectorAll("#card-btn");
var cart = document.querySelector("#offcanvasRight");

for (let btn of buttons) btn.addEventListener("click", addToCart);

function addToCart(e) {


  let card = e.currentTarget.parentElement.parentElement.parentElement;

  let item_id = card.parentElement.getAttribute("id");
  let img = card.querySelector("img").src;
  let name = card.querySelector("h1").innerText;
  let price = card.querySelector(".price span").innerText;

  let item = {
    name,
    img,
    price,
  };

  e.currentTarget.innerText = "Added";
  e.currentTarget.removeEventListener("click", addToCart);
  localStorage.setItem(item_id, JSON.stringify(item));

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Item added successfully!",
    showConfirmButton: false,
    timer: 1500,
  });


  cart.insertAdjacentHTML(
    "beforeend",
    `<div class="cart__item container border border-dark">
      <div class="row">
        <div class="col-6 img-fluid d-flex justify-content-center align-items-center">
          <img src="${img}" height="50">
        </div>
        <div class="col-6">
          <h6>${name}</h6>
          <span style="color: red;">Rs. ${price}</span>
        </div>
      </div>
    </div>
      `
  );



}

function putCartItems() {
  items = [];
  for (i = 0; i < localStorage.length; i++)
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

  items.forEach((v) => {
    cart.insertAdjacentHTML(
      "beforeend",
      `<div class="cart__item container border border-dark">
        <div class="row">
          <div class="col-6 img-fluid d-flex justify-content-center align-items-center">
            <img src="${v.img}" height="50">
          </div>
          <div class="col-6">
            <h6>${v.name}</h6>
            <span style="color: red;">Rs. ${v.price}</span>
          </div>
        </div>
      </div>
        `
    );
  });
}

const subtotalPrice = document.getElementById('subtotal-price')
const unitPrice = 3
const cartNumber = document.getElementById('cart-number')
cartItemsString = localStorage.getItem("cartItems")

function changeGlazing(elmnt) {
    const none=document.getElementById('none');
    const sugar=document.getElementById('sugar');
    const vanilla=document.getElementById('vanilla');
    const chocolate=document.getElementById('chocolate');
    const bigPic=document.getElementById('big');
    for ( let flavor of [none, sugar, vanilla, chocolate]) {
        flavor.style.background = "white";
        flavor.style.color = "#907359";
        if (flavor.id == elmnt.id) {
            flavor.style.background = "#907359";
            flavor.style.color = "white";
            bigPic.src='images/'+flavor.id+'.png';// change picture based on user's choosen glazing
            glazingFlavor=flavor.id
        }
        else {}
    }
        
} 

function changeQuantity(elmnt) {
    const one=document.getElementById('1');
    const three=document.getElementById('3');
    const six=document.getElementById('6');
    const twelve=document.getElementById('12');
    for ( let quantity of [one, three, six, twelve]) {
        quantity.style.background = "white";
        quantity.style.color = "#907359";
        if (quantity.id == elmnt.id) {
            console.log(quantity.id+"quantity")
            console.log(elmnt.id+"elmnt") 
            console.log(elmnt.id==quantity.id)
            quantity.style.background = "#907359";
            quantity.style.color = "white";
            totalQuantity = quantity.id
        }
        else {}
    }
}


// shopping cart functions

// function that removes a particular item (obj) from the shopping cart
function removeItem(obj) {
    console.log(obj)
    var cartItemsString = localStorage.getItem("cartItems")
    if (cartItemsString !== null) {
      var cartItems = JSON.parse(cartItemsString) 
      var ind = cartItems.findIndex(function (item) {
        return item.id === obj.id 
      })
      console.log("ind " + ind)
      console.log(cartItems)
      localStorage.setItem("cartItems", JSON.stringify(cartItems))

      if (ind !== -1) {
        // remove item from the list
        cartItems.splice(ind, 1)
        // update the stored value
        console.log(cartItems)
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        console.log(localStorage.getItem("cartItems"))
        // re-render the page to reflect changes
        location.reload()
        updateCart()
        console.log("remove display")
      }
    }
}
  

// ad the currently selected product to the local storage data
function addItem() {
    // get stored value of cart items
    var cartItemsString = localStorage.getItem("cartItems")
    // check if item exists in storage
    if (cartItemsString === null) { 
      var cartItems = []
    } else { 
      var cartItems = JSON.parse(cartItemsString)
      console.log(cartItems)
    }
    var tempId = cartItems.length
    var itemObject = {glaze: glazingFlavor, quantity: totalQuantity, id:tempId}
    // add new item to the cart
    cartItems.push(itemObject)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    updateBasketPopUP()
    window.alert(itemObject.quantity+" items have been added to your cart")
} 

function calculatePrice () {
    var cartItemsString = localStorage.getItem("cartItems")
    var cartItems = JSON.parse(cartItemsString)
    let total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        total += unitPrice*cartItem.quantity
    }
    subtotalPrice.innerHTML = "$ "+total;
}

//add quantity pop-up icon in navbar 
function updateBasketPopUP() {
    var cartItemsString = localStorage.getItem("cartItems")
    var cartItems = JSON.parse(cartItemsString)
    var elem = document.getElementById("basket-icon-quantity");
    elem.innerHTML = cartItems.length
    elem.style.display = "block";
}

function updateCart() {
    // get value of local storage
    var cartItemsString = localStorage.getItem("cartItems")
    console.log(cartItemsString)
    // check if value exists in local storage
    if (cartItemsString !== null) {
        var cartItems = JSON.parse(cartItemsString) // converting stored string to object
        var cartList = document.getElementById("cart-list")
        if (cartItems.length === 0) {
            console.log("none")
        } 
        else {
            calculatePrice()
            updateBasketPopUP()
            console.log(subtotalPrice)
            cartNumber.innerHTML = cartItems.length;
            for (var i = 0; i < cartItems.length; i++) {
                // iterate through cart and for each item, add it to the list
                const basketItemTemplate = document.getElementById("item-template");
                const basketItems = document.getElementById("cart-list");
                const productElement = basketItemTemplate.cloneNode(true);
                productElement.class = "item-template";
                var cartItem = cartItems[i];
                productElement.id = cartItem.id;
                const imageElement = productElement.getElementsByClassName("item-pic")[0];
                imageElement.src = 'images/' + cartItem.glaze + '.png';
                const glazeElement = productElement.getElementsByClassName("item-glaze")[0];
                glazeElement.innerHTML = cartItem.glaze;
                const quantityElement = productElement.getElementsByClassName("item-quantity")[0];
                quantityElement.innerHTML = cartItem.quantity;
                const priceElement = productElement.getElementsByClassName("item-price")[0];
                priceElement.innerHTML = '$' + unitPrice*cartItem.quantity;
                
               var removeBtn = productElement.getElementsByClassName("remove-button")[0];
               //removeBtn.onclick = removeItem(cartItem)
               removeBtn.onclick = (function (cartItem) {
                  return function() {
                    removeItem(cartItem)
                    }
                }(cartItem))
                cartList.appendChild(productElement);
                updateBasketPopUP()

            }
        }
    }
}

updateBasketPopUP()
console.log('popup')
updateCart()
updateBasketPopUP()
console.log('popup')









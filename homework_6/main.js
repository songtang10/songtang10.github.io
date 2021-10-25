var glazingFlavor = "none"
var totalQuantity = 1

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
            // console.log(flavor.id+"flavor")
            // console.log(elmnt.id+"elmnt") 
            // console.log(elmnt.id==flavor.id)
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

// add quantity pop-up icon in navbar 
function updateBasket() {
    var quantityCircle = document.getElementById("basket-icon-quantity");
    quantityCircle.style.display = "block";
}


function minusBun() {
    var bunQuantity = getElementById("basket-quantity")
}









// Failed attempts at updated buttoon selection, might come back and use them later 

//document.getElementById("add-button").addEventListener("click", updateBasket());

// flavorBtns.forEach((flavorbtn) => {
//     flavrbtn.addEventListener('click', () => {
//     removeClasses();
//     addClasses(btn);
    
//   });
// });

// function removeClasses(target) {
//     flavorBtns.forEach((flavorbtn) => {
//       if(flavorbtn == target) { btn.classList.add("active"); }
//       else { flavorbtn.classList.remove("active"); }
//     });
//   }

// function addClasses(btn) {
//   btn.classList.add("active");
// }

// function changeButtonColor(elmnt) {
//    elmnt.style.background = "#907359";
//    elmnt.style.color = "white";
//    elmnt.clicked =true;
// }

// const glazing = document.getElementsByClassName("glazing-flavor")
// const quantity = document.getElementsByClassName("quantity-selection")

// function removeClasses(target) {
//     btns.forEach((btn) => {
//       if(btn == target) { btn.classList.add("active"); }
//       else { btn.classList.remove("active"); }
//     });
//   }

// function selectOnlyOne(glazing) {
//     for (element in glazing) {
//         element.clicked = false 
//     }
// }

// 
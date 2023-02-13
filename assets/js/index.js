let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-btn");
let foodContainer = document.getElementById("food-container");
let updated = document.getElementById("alert-message");
let success = document.getElementById("succesful");
let nolistEl = document.getElementById("no-list");
let foodListStatistics = document.getElementById("food-list-statistics");

const handleInputFood = () => {
  let newFoodItemEl = document.createElement("li");
  var divItem = document.createElement("div");
  var divRemoveBtn = document.createElement("div");
  divRemoveBtn.innerHTML = `<i class="fa fa-xmark"></i>`;
  newFoodItemEl.append(divItem, divRemoveBtn);
  // console.log(divRemoveBtn.parentElement);

  divRemoveBtn.parentElement.setAttribute("onclick", "removeItem(event)");
  divItem.textContent = inputFood.value;
  newFoodItemEl.className = "food-item";

  newFoodItemEl.append(divItem);
  newFoodItemEl.append(divRemoveBtn);
  // foodContainer.append(newFoodItemEl);

  if (inputFood.value == "") {
    alert("Please enter your food name");
  }
  if (inputFood.value !== "") {
    updated.style.display = "block";
  }
  if (inputFood.value !== "") {
    foodContainer.append(newFoodItemEl);
  }
  if(inputFood.value !== "" ){
     inputFood.value = ""
  }

  //set local storage

  localStorage.setItem("foodItems", "my value")
  refreshUI();
};

inputBtn.addEventListener("click", handleInputFood);

inputFood.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleInputFood();
  } else if (event.key === "keyZ") {
    //undo operarions
    inputFood.value = "";
  }
});

function removeAlert() {
  if ((updated.style.display = "inline-block")) {
    updated.style.display = "none";
  }
}

function removeItem(event) {
  let existingList = event.target.parentNode.parentNode;
  existingList.remove();

  refreshUI();
}

function refreshUI() {
  // if (foodContainer.children.length > 0) {
  //   //  childern exist so dont show " no-list" div
  //   nolistEl.hidden = true;
    foodListStatistics.innerText = ` You have ${foodContainer.children.length} lists`;
  // } else {
  //   // childres not exist . show " no-list " div
  //   nolistEl.hidden = false;
  // }


// we can use terinary operator for above code


  foodContainer.children.length > 0 
? ((nolistEl.hidden = true),(foodListStatistics.hidden = false)) 
: ((nolistEl.hidden = false),(foodListStatistics.hidden = true)) 

}


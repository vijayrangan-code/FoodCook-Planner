// const listEl = document.querySelectorAll("form li");
// listEl.forEach(li=>{
//     li.addEventListener("click",()=>{
//         console.log("clicked" , li.textContent);
//     })
// })

// console.log(listEl);

const tableEl = document.querySelector("table");
let selectedID;

tableEl.addEventListener("click", (event) => {
  const target = event.target;

  const closestTr = target.closest("tr");

  closestTr.classList.add("active"); // adding styling class
  selectedID = closestTr;

  if (selectedID != undefined) {
    selectedID.classList.remove("active"); // removing styling class
  }
  if (target.tagName === "TH") {
    //ignoring table TH element
    return;
  }
   

  alert(`Hello ${closestTr.children[0].textContent}`)
});


document.addEventListener("click",(event)=>{
    // console.log(event.target.dataset.toggleId);
        const id = event.target.dataset.toggleId
        console.log(event.target.dataset.toggleId);

        if(!id){  // ignore all unwanted elements
            return;
        }
        const idEl = document.getElementById(id)
        idEl.hidden = !idEl.hidden

})


const formEl = document.querySelector("#donate-form");

formEl.addEventListener("submit", (event) => {

    event.preventDefault();
    const inputVal = event.target.querySelector("input").value

    alert(`Thank You for donating ₹${inputVal}.`)
})

// const inputTxt = document.getElementById('inputTxt')
// const btn = document.querySelector(".btn")

// btn.addEventListener("click",()=>{

    
//     // event.preventDefault()
//    if(inputTxt.value == ""){
//     alert("Enter donation Amount")
//    }
//    if(inputTxt.value!=""){
//     console.log(inputTxt.value);
//     alert("thanks for the donation")
//    }
// })




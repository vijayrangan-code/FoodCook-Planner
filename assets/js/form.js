
const feedbackEl = document.forms.feedback; 


     
const handleSubmit = (event) => {
  event.preventDefault();


  
  const formData = new FormData(feedbackEl);
  
};




feedbackEl.addEventListener("submit", handleSubmit);







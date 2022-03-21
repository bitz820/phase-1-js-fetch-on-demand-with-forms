const init = () => {
  const form = document.querySelector("form")
  // Add Event Listener to a form
  form.addEventListener('submit', (e) => {
      e.preventDefault()
      const input = e.target.searchByID.value
      // const input = document.querySelector('input#searchByID')
  
  
  // set up a fetch request
  fetch(`http://localhost:3000/movies/${input}`)
  .then(res => res.json())
  .then(data => {
    const title = document.querySelector('section#movieDetails h4')
    const summary = document.querySelector('section#movieDetails p')
    title.innerText = data.title
    summary.innerText = data.summary
  })
  
  })

};


document.addEventListener('DOMContentLoaded', init);


// const init = () => {
//     const form = document.querySelector("form")
//     form.addEventListener('submit', inputListener,
    
//     // set up a fetch request
//     fetch(`http://localhost:3000/movies/${input}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
    
//   )};
  
  
//   document.addEventListener('DOMContentLoaded', init);
  
//   // Add Event Listener to a form
//   function inputListener (e) {
//       e.preventDefault()
//       const input = e.target.searchByID.value
//       // const input = document.querySelector('input#searchByID')
//   }
  
// Get references to the button and output elements
const button = document.getElementById('myButton');
const output = document.getElementById('output');

if(button){ 
// Add event listener to the button
button.addEventListener('click', () => {
  // Change the text content of the output div
  if(output){
    output.textContent = 'You clicked the button!';
    console.log('is this working...')
  }
});
}
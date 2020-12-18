const translatesBtn = document.querySelector('#translate');
const textAreaInp = document.querySelector('#textarea-input');
const textAreaOut = document.querySelector('#textarea-output')
translatesBtn.addEventListener('click',()=>{
    textAreaOut.innerText = textAreaInp.value;
    
})
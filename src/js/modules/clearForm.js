const clearForm = () =>{
    const title = document.querySelector('.quiz__header'),
    question = document.querySelectorAll('.auiz__answer span');
    title.textContent = '';
    question.forEach(item => {
        item.textContent = ""; 
    });
}

export default clearForm;
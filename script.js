const UserForm = document.querySelector('form');
const EmailInput = document.querySelector("#email");
const Btn = document.querySelector('button');



function InputEmailValidation() {

    EmailInput.addEventListener("keyup", () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(.ge|.ge)$/;
        let trimfunction = EmailInput.value.trim();
    
        if(EmailInput.value === ""){
            
        }
        else if(!(trimfunction.toLowerCase().match(validRegex))){
            EmailInput.style = 'border:1px solid red;'
            return;
        }
        else{
            EmailInput.style = 'border:1px solid green;'
        }
    
    })
    
}


InputEmailValidation()


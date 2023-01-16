const UserForm = document.querySelector('form');
const EmailInput = document.querySelector("#email");
const Selectbox = document.querySelector(".SelectCountry");
const City = document.querySelector("#city");
const Zip = document.querySelector("#Zip");

UserForm.addEventListener('submit', e => {
  e.preventDefault();
  Validation() 
});





// ============================EROOR ADD AND REMOVE ==============================//

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const eroorbox = inputControl.querySelector('.errorbox');
    eroorbox.innerText = message;
}


const setSuccess = element => {
    const inputControl = element.parentElement;
    const eroorbox = inputControl.querySelector('.errorbox');
    eroorbox.innerText = '';
};

// ============================EROOR ADD AND REMOVE ==============================//

// ============================VALIDATION==============================//
function Validation() {
    
// // ============================EMAIL VALIDATION==============================//


    EmailInput.addEventListener("keyup", () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(.ge|.ge)$/;
        let trimfunction = EmailInput.value.trim(); 

        if(EmailInput.value === ""){
            setError(EmailInput, 'ZIP CODE is required');
            return false;
        }
        else if(!(trimfunction.toLowerCase().match(validRegex))){
            EmailInput.style = 'border:1px solid red;'
            setError(EmailInput, 'Example : youremail@domain.ge - ge domain is mandatory');
            return false;
        }
        else{
            EmailInput.style = 'border:1px solid green;' 
            setSuccess(EmailInput);
            return true;
        }
    
    })
    

// ============================EMAIL VALIDATION==============================//

// ============================Select VALIDATION==============================//

    const SelectCountry = document.querySelector("#SelectCountry");
    SelectCountry.addEventListener("click", () => {    
        if(SelectCountry.value == ""){
            setError(Selectbox, 'Select is required');
            SelectCountry.style = 'border:1px solid red;'
            return false;
        }else{
            SelectCountry.style = 'border:1px solid green;' 
            setSuccess(Selectbox);
            return true;
        }
    
    })


// ============================Select VALIDATION==============================//

// ============================CITY VALIDATION==============================//
    City.addEventListener("keyup", () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]$/;
        let trimfunction = City.value.trim(); 

        if(City.value === ""){
            City.style = 'border:1px solid red;'
            setError(City, 'City is required');
            return false;
        }else{
            City.style = 'border:1px solid green;' 
            setSuccess(City);
            return true;
        }
    
    })

// ============================CITY VALIDATION==============================//

// ============================ZIPCODE VALIDATION==============================//
    Zip.addEventListener("keyup", () => {
        let validNumberRegex = /^[0-9]+$/;
        let trimfunction = Zip.value.trim(); 

        if(Zip.value === ""){
            Zip.style = 'border:1px solid red;'
            setError(Zip, 'City is required');
            return false;
        }  
        else if(!(trimfunction.match(validNumberRegex))){
            Zip.style = 'border:1px solid red;'
            setError(Zip, 'Zip Code includs just Numbers');
            return false;
        }
        else{
            Zip.style = 'border:1px solid green;' 
            setSuccess(Zip);
            return true;
        }
    
    })
// ============================ZIPCODE VALIDATION==============================//

}
// ============================VALIDATION==============================//

Validation() 
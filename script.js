const UserForm = document.querySelector('#form');
const EmailInput = document.querySelector("#email");
const Selectbox = document.querySelector(".SelectCountry");
const City = document.querySelector("#city");
const Zip = document.querySelector("#Zip");



UserForm.addEventListener('submit', e => {
  e.preventDefault()
  Validation();

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
function Validation(){
    
// // ============================EMAIL VALIDATION==============================//

    const EmailValid = () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(.ge|.ge)$/;
        let trimfunction = EmailInput.value.trim(); 

        if(EmailInput.value === ""){
            setError(EmailInput, 'Email is required');
            EmailInput.style = 'border:1px solid red;'
        }
        else if(!(trimfunction.toLowerCase().match(validRegex))){
            EmailInput.style = 'border:1px solid red;'
            setError(EmailInput, 'Example : youremail@domain.ge - ge domain is mandatory');
        }
        else{
            EmailInput.style = 'border:1px solid green;' 
            setSuccess(EmailInput);
            return true;
        }
    }



    EmailInput.addEventListener("keyup", () => {
        EmailValid();
    })
        EmailValid();

// ============================EMAIL VALIDATION==============================//

// ============================Select VALIDATION==============================//

    const SelectCountry = document.querySelector("#SelectCountry");
    
    const selcectValid = () =>{
        if(SelectCountry.value == ""){
            setError(Selectbox, 'Select is required');
            SelectCountry.style = 'border:1px solid red;'
        }else{
            SelectCountry.style = 'border:1px solid green;' 
            setSuccess(Selectbox);
            return true;
        }
    }

    SelectCountry.addEventListener("click", () => {    
        selcectValid();
    })

    selcectValid();
    

// ============================Select VALIDATION==============================//

// ============================CITY VALIDATION==============================//
    const CityValid = () =>{
        if(City.value === ""){
            City.style = 'border:1px solid red;'
            setError(City, 'City is required');
        }else{
            City.style = 'border:1px solid green;' 
            setSuccess(City);
            return true;
        }
    
    }

    City.addEventListener("keyup", () => {
        CityValid();
    })

    CityValid();

// ============================CITY VALIDATION==============================//

// ============================ZIPCODE VALIDATION==============================//
const ZipValid = () =>{
    let validNumberRegex = /^[0-9]+$/;
        let trimfunction = Zip.value.trim(); 

        if(Zip.value === ""){
            Zip.style = 'border:1px solid red;'
            setError(Zip, 'Zip is required');
        }  
        else if(!(trimfunction.match(validNumberRegex))){
            Zip.style = 'border:1px solid red;'
            setError(Zip, 'Zip Code includs just Numbers');
        }
        else{
            Zip.style = 'border:1px solid green;' 
            setSuccess(Zip);
            return true;
        }
}

    Zip.addEventListener("keyup", () => {
        ZipValid();
    })

    ZipValid();
// ============================ZIPCODE VALIDATION==============================//


// ============================If Form is validable==============================//

const logValues = {
    email: EmailInput.value , 
    Country: SelectCountry.value ,
    city: City.value , 
    zip : Zip.value
}

const allvalidInpit = () =>{
    if (ZipValid() && CityValid() && selcectValid() && EmailValid()  === true) {
        console.log(logValues);
    }else{
        return false;
    }
}
allvalidInpit();

}
// ============================If Form is validable==============================//

document.addEventListener("DOMContentLoaded", function () {

const apiURL = "https://run.mocky.io/v3/41d16796-d350-4f19-a2ca-07d4104cf2e5"; 
      
    fetch(apiURL)
          .then(response => response.json())
          .then(data => {
              const companyDropdown = document.getElementById("company");
              const subjectDropdown = document.getElementById("subject");
  
              
              data.companies.forEach(company => {
                  const option = document.createElement("option");
                  option.value = company;
                  option.textContent = company;
                  companyDropdown.appendChild(option);
              });
  
              
              data.subjects.forEach(subject => {
                  const option = document.createElement("option");
                  option.value = subject;
                  option.textContent = subject;
                  subjectDropdown.appendChild(option);
              });
          })
          .catch(error => console.error("Error fetching data:", error));
          

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
        const areaCodeDropdown = document.getElementById("area-code"); 

        data.forEach(country => {
        if (country.idd && country.idd.root && country.idd.suffixes) {
            const code = country.idd.root + country.idd.suffixes[0];
            const name = country.name.common;

            const option = document.createElement("option");
            option.value = code;
            option.textContent = `${name} (${code})`;
            areaCodeDropdown.appendChild(option);
        }
    });
})
   .catch(error => console.error('Error fetching country codes:', error));



    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
 
        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset(); 
        } else {
            alert("Please fix the errors in the form.");
        }
    });
});



$(document).ready(function () {
     $("form").on("submit", function (event) {
        event.preventDefault(); 

        if (validateForm()) {
            alert("Form submitted successfully!");
            $(this).trigger("reset");
            window.location.href = "submitted.html";
        }
    });
    

    function validateForm() {
        let isValid = true; 
        const emailField = $("#email");
        if (!validateEmail(emailField.val())) {
            isValid = false;
            emailField.css("border-color", "red");
            alert("Please enter a valid email address in the format example@example.com.");
        } else {
            emailField.css("border-color", "#ccc");
        }



        const areaCodeField = $("#area-code");
        const phoneField = $("#phone-number");

        if (areaCodeField.val() !== "+90") {
            isValid = false;
            areaCodeField.css("border-color", "red");
            alert("Please select the correct area code for Turkey: +90.");
        } else {
            areaCodeField.css("border-color", "#ccc");
        }

        if (!validatePhoneNumber(phoneField.val())) {
            isValid = false;
            phoneField.css("border-color", "red");
            alert("Please enter a valid Turkish phone number with 10 digits after the area code.");
        } else {
            phoneField.css("border-color", "#ccc");
        }

        return isValid;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email); 
    }

    function validatePhoneNumber(phone) {
        const phonePattern = /^\d{10}$/; 
        return phonePattern.test(phone); 
    }
});

function closeAd(event, adId) {
    event.stopPropagation(); 
    event.preventDefault(); 

    const adElement = document.getElementById(adId);
    if (adElement) {
        adElement.style.display = 'none'; 
    }
}

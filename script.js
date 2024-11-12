document.addEventListener("DOMContentLoaded", function () {

     
      const apiURL = "https://run.mocky.io/v3/dbe41654-4846-4f97-95ab-9edc0de62f6e"; 

      // Company ve Subject dropdownlarını doldurma
      fetch(apiURL)
          .then(response => response.json())
          .then(data => {
              const companyDropdown = document.getElementById("company");
              const subjectDropdown = document.getElementById("subject");
  
              // Şirket listesi ekleme
              data.companies.forEach(company => {
                  const option = document.createElement("option");
                  option.value = company;
                  option.textContent = company;
                  companyDropdown.appendChild(option);
              });
  
              // Konu listesi ekleme
              data.subjects.forEach(subject => {
                  const option = document.createElement("option");
                  option.value = subject;
                  option.textContent = subject;
                  subjectDropdown.appendChild(option);
              });
          })
          .catch(error => console.error("Error fetching data:", error));
          // Alan kodlarını "Area Code" açılır listesine eklemek için güncellenmiş kod
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
    const areaCodeDropdown = document.getElementById("area-code"); // Area code dropdown'u seçiyoruz

    data.forEach(country => {
        if (country.idd && country.idd.root && country.idd.suffixes) {
            const code = country.idd.root + country.idd.suffixes[0];
            const name = country.name.common;

            // Yeni bir <option> öğesi oluşturup açılır listeye ekliyoruz
            const option = document.createElement("option");
            option.value = code;
            option.textContent = `${name} (${code})`;
            areaCodeDropdown.appendChild(option);
        }
    });
})
   .catch(error => console.error('Error fetching country codes:', error));

    // Form öğesini seçiyoruz
    const form = document.querySelector("form");

    // Form gönderiminde doğrulama yapacak işlevi ekliyoruz
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Formun varsayılan gönderimini engeller

        // Doğrulama işlemini başlatıyoruz
        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset(); // Formu sıfırlar
        } else {
            alert("Please fix the errors in the form.");
        }
    });
});

$(document).ready(function () {
    // Form gönderiminde doğrulama yapacak işlev
    $("form").on("submit", function (event) {
        event.preventDefault(); // Formun varsayılan gönderimini engeller

        // Doğrulama işlemini başlatma
        if (validateForm()) {
            alert("Form submitted successfully!");
            $(this).trigger("reset"); // Formu sıfırlar
            window.location.href = "submitted.html";
        }
    });
     // Form doğrulama işlevi
    function validateForm() {
        let isValid = true; 
        // E-posta doğrulaması
        const emailField = $("#email");
        if (!validateEmail(emailField.val())) {
            isValid = false;
            emailField.css("border-color", "red");
            alert("Please enter a valid email address in the format example@example.com.");
        } else {
            emailField.css("border-color", "#ccc");
        }

        // Telefon doğrulaması
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

    // E-posta doğrulama fonksiyonu
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email); // E-posta formatını kontrol eder
    }

    // Telefon doğrulama fonksiyonu
    function validatePhoneNumber(phone) {
        const phonePattern = /^\d{10}$/; // Sadece 10 haneli sayı olmalı
        return phonePattern.test(phone); // Türkiye telefon numarasını kontrol eder
    }
});

function closeAd(event, adId) {
    event.stopPropagation(); // Tıklamanın bağlantıya geçmesini engeller
    event.preventDefault(); // Varsayılan davranışı durdurur

    const adElement = document.getElementById(adId);
    if (adElement) {
        adElement.style.display = 'none'; // Reklam alanını gizler
    }
}

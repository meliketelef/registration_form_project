document.addEventListener("DOMContentLoaded", function () {

    const apiURL = "https://run.mocky.io/v3/1ef6214a-ef6e-421a-b66a-3178fadbbf9b";

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


    const form = document.querySelector("form");

     form.addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        if (validateForm()) {
            alert("Form başarıyla gönderildi!");
            form.reset(); 
            window.location.href = "submitted.html"; 
        } else {
            alert("Lütfen formdaki hataları düzeltin.");
        }
    });

    
    function validateForm() {
        let isValid = true;
        const emailField = $("#email");
        const areaCodeField = $("#area-code");
        const phoneField = $("#phone-number");

        if (!validateEmail(emailField.val())) {
            isValid = false;
            emailField.css("border-color", "red");
            alert("Lütfen geçerli bir e-posta adresi girin (örnek@example.com).");
        } else {
            emailField.css("border-color", "#ccc");
        }

       
        if (areaCodeField.val() !== "+90") {
            isValid = false;
            areaCodeField.css("border-color", "red");
            alert("Lütfen Türkiye alan kodunu seçin: +90.");
        } else {
            areaCodeField.css("border-color", "#ccc");
        }

        if (!validatePhoneNumber(phoneField.val())) {
            isValid = false;
            phoneField.css("border-color", "red");
            alert("Lütfen alan kodundan sonra 10 haneli bir Türk telefonu girin.");
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
    
    const turkeyAreaCodes = {
        "Adana": "322",
        "Adıyaman": "416",
        "Afyon": "272",
        "Ağrı": "472",
        "Aksaray": "382",
        "Amasya": "358",
        "Ankara": "312",
        "Antalya": "242",
        "Ardahan": "478",
        "Artvin": "466",
        "Aydın": "256",
        "Balıkesir": "266",
        "Bartın": "378",
        "Batman": "488",
        "Bayburt": "458",
        "Bilecik": "228",
        "Bingöl": "426",
        "Bitlis": "434",
        "Bolu": "374",
        "Burdur": "248",
        "Bursa": "224",
        "Çanakkale": "286",
        "Çankırı": "376",
        "Çorum": "364",
        "Denizli": "258",
        "Diyarbakır": "412",
        "Düzce": "380",
        "Edirne": "284",
        "Elazığ": "424",
        "Erzincan": "446",
        "Erzurum": "442",
        "Eskişehir": "222",
        "Gaziantep": "342",
        "Giresun": "454",
        "Gümüşhane": "456",
        "Hakkari": "438",
        "Hatay": "326",
        "Iğdır": "476",
        "Isparta": "246",
        "İçel (Mersin)": "324",
        "İstanbul Avrupa Yakası": "212",
        "İstanbul Anadolu Yakası": "216",
        "İzmir": "232",
        "Kahramanmaraş": "344",
        "Karabük": "370",
        "Karaman": "338",
        "Kars": "474",
        "Kastamonu": "366",
        "Kayseri": "352",
        "Kırıkkale": "318",
        "Kırklareli": "288",
        "Kırşehir": "386",
        "Kilis": "348",
        "Kocaeli": "262",
        "Konya": "332",
        "Kütahya": "274",
        "Malatya": "422",
        "Manisa": "236",
        "Mardin": "482",
        "Muğla": "252",
        "Muş": "436",
        "Nevşehir": "384",
        "Niğde": "388",
        "Ordu": "452",
        "Osmaniye": "328",
        "Rize": "464",
        "Sakarya": "264",
        "Samsun": "362",
        "Siirt": "484",
        "Sinop": "368",
        "Sivas": "346",
        "Şanlıurfa": "414",
        "Şırnak": "486",
        "Tekirdağ": "282",
        "Tokat": "356",
        "Trabzon": "462",
        "Tunceli": "428",
        "Uşak": "276",
        "Van": "432",
        "Yalova": "226",
        "Yozgat": "354",
        "Zonguldak": "372"
    };

    const areaCodeDropdown = document.getElementById("area-code");
    for (const city in turkeyAreaCodes) {
        const option = document.createElement("option");
        option.value = turkeyAreaCodes[city];
        option.textContent = `${city} (${turkeyAreaCodes[city]})`;
        areaCodeDropdown.appendChild(option);
    }
});

function closeAd(event, adId) {
    event.stopPropagation(); 
    event.preventDefault(); 

    const adElement = document.getElementById(adId);
    if (adElement) {
        adElement.style.display = "none"; 
    }
}

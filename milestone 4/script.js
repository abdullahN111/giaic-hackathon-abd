//hiding hobbies section
var _a;
var toggleButton = document.getElementById("toggle-hobbies");
var hobbiesSection = document.getElementById("hobbies-section");
toggleButton.addEventListener("click", function () {
    if (hobbiesSection.style.display === "none") {
        hobbiesSection.style.display = "block";
        toggleButton.textContent = "Hide Hobbies";
    }
    else {
        hobbiesSection.style.display = "none";
        toggleButton.textContent = "Show Hobbies";
    }
});
//____________________________________________________________________________
//listing elements for generating resume
(_a = document.querySelector("#resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion to elements
    var nameElement = document.querySelector("#name");
    var emailElement = document.querySelector("#email");
    var phoneElement = document.querySelector("#phone");
    var educationElement = document.querySelector("#education");
    var experienceElement = document.querySelector("#experience");
    var expertiseElement = document.querySelector("#expertise");
    var hobbiesElement = document.querySelector("#hobbies");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        expertiseElement &&
        hobbiesElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var expertise = expertiseElement.value;
        var hobbies = hobbiesElement.value;
        //Generating output
        var createResume = "\n  <div class=\"resume-created\">\n      <h1> Your Resume </h2>\n    <h2> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></h2>\n    <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n    \n    <fieldset>\n      <legend>Education</legend>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    </fieldset>\n  \n    <fieldset>\n      <legend>Experience</legend>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    </fieldset>\n  \n    <fieldset>\n      <legend>Expertise</legend>\n      <p id=\"edit-expertise\" class=\"editable\">").concat(expertise, "</p>\n    </fieldset>\n  \n    ").concat(hobbies
            ? "<fieldset>\n      <legend>Hobbies</legend>\n      <p id=\"edit-hobbies\" class=\"editable\">".concat(hobbies, "</p>\n    </fieldset>")
            : "", "\n  \n  </div>\n  ");
        // Insert the generated resume into the DOM
        var resumeElement = document.querySelector(".resume-created");
        if (resumeElement) {
            resumeElement.innerHTML = createResume;
            makeEditable();
        }
    }
    else {
        console.error("one or more elements are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //editing content of resume
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

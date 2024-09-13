//hiding hobbies section

const toggleButton = document.getElementById(
  "toggle-hobbies"
) as HTMLButtonElement;
const hobbiesSection = document.getElementById(
  "hobbies-section"
) as HTMLElement;

toggleButton.addEventListener("click", () => {
  if (hobbiesSection.style.display === "none") {
    hobbiesSection.style.display = "block";
    toggleButton.textContent = "Hide Hobbies";
  } else {
    hobbiesSection.style.display = "none";
    toggleButton.textContent = "Show Hobbies";
  }
});

//____________________________________________________________________________

//listing elements for generating resume

document.querySelector("#resume-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  //type assertion to elements
  const nameElement = document.querySelector("#name") as HTMLInputElement;
  const emailElement = document.querySelector("#email") as HTMLInputElement;
  const phoneElement = document.querySelector("#phone") as HTMLInputElement;
  const educationElement = document.querySelector(
    "#education"
  ) as HTMLInputElement;
  const experienceElement = document.querySelector(
    "#experience"
  ) as HTMLInputElement;
  const expertiseElement = document.querySelector(
    "#expertise"
  ) as HTMLInputElement;
  const hobbiesElement = document.querySelector("#hobbies") as HTMLInputElement;

  if (
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    expertiseElement &&
    hobbiesElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const expertise = expertiseElement.value;
    const hobbies = hobbiesElement.value;

    //Generating output

    const createResume = `
  <div class="resume-created">
      <h1> Your Resume </h2>
    <h2> <span id="edit-name" class="editable">${name}</span></h2>
    <p><strong>Email:</strong><span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Phone:</strong><span id="edit-phone" class="editable"> ${phone}</span></p>
    
    <fieldset>
      <legend>Education</legend>
      <p id="edit-education" class="editable">${education}</p>
    </fieldset>
  
    <fieldset>
      <legend>Experience</legend>
      <p id="edit-experience" class="editable">${experience}</p>
    </fieldset>
  
    <fieldset>
      <legend>Expertise</legend>
      <p id="edit-expertise" class="editable">${expertise}</p>
    </fieldset>
  
    ${
      hobbies
        ? `<fieldset>
      <legend>Hobbies</legend>
      <p id="edit-hobbies" class="editable">${hobbies}</p>
    </fieldset>`
        : ""
    }
  
  </div>
  `;

    // Insert the generated resume into the DOM
    const resumeElement = document.querySelector(".resume-created");
    if (resumeElement) {
      resumeElement.innerHTML = createResume;
      makeEditable();
    }
  } else {
    console.error("one or more elements are missing");
  }
});

function makeEditable() {
  const editableElement = document.querySelectorAll(".editable");
  editableElement.forEach((element) => {
    element.addEventListener("click", () => {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      //editing content of resume
      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')

        input.addEventListener('blur', () => {
          currentElement.textContent = input.value
          currentElement.style.display = 'inline'
          input.remove()
        })

        currentElement.style.display = 'none'
        currentElement.parentNode?.insertBefore(input, currentElement)
        input.focus()
      }
    });
  });
}

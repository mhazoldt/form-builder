// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "fontAwesome/css/font-awesome.min.css";
document.styleSheets[0].insertRule(`
  .wrapper .fields {
    padding: 25px;
  }`, 5);

document.styleSheets[0].insertRule(`
  .wrapper .fields div
   {
    border: 2px solid #CCD1D4;
    border-radius: 3px;
    margin: 10px;
    padding-left: 15px;
    color: #CCD1D4;

  }`, 5);

document.styleSheets[0].insertRule(`
  .wrapper .fields input,
  .wrapper .fields textarea,
  .wrapper .fields select
   {
    padding-left: 10px;
    width: 500px;
    height: 35px;
    border: 0px solid #CCD1D4;
    border-radius: 3px;
    margin: 10px;
    margin-left: 0px;
    font-size: 15px;
  }`, 5);

  document.styleSheets[0].insertRule(`
    .wrapper .fields textarea
     {
      padding-left: 0px;
      margin: 0px;

    }`, 5);

document.styleSheets[0].insertRule(`
  .wrapper .fields textarea {
    height: 125px;
    padding: 15px;
  }`, 5);

document.querySelector("head").appendChild(fontAwesomeLink);



let fieldsContainer = document.getElementById("fields");


function buildForm(formInputData) {

  let nextFormInput;

  if(formInputData.type === "select"){
    let nextFormInput = document.createElement("select");
    let borderDiv = document.createElement("div");

    nextFormInput.type = formInputData.type;
    nextFormInput.id = formInputData.id;
    nextFormInput.setAttribute("placeholder", formInputData.label);

    formInputData.options.forEach(function(selectOption) {
      let nextSelectOption = document.createElement("option");
      nextSelectOption.label = selectOption.label;
      nextSelectOption.innerText = selectOption.label;
      nextSelectOption.value = selectOption.value;

      nextFormInput.appendChild(nextSelectOption);


    });

    borderDiv.appendChild(nextFormInput);

    fieldsContainer.appendChild(borderDiv);


  } else if (formInputData.type === "textarea") {

    let nextFormInput = document.createElement("textarea");
    let borderDiv = document.createElement("div");

    let inputIcon = document.createElement("i");

    inputIcon.className = "fa " + formInputData.icon;
    inputIcon.setAttribute("aria-hidden", "true");

    nextFormInput.type = formInputData.type;
    nextFormInput.id = formInputData.id;
    //nextFormInput.style.float = "right";
    //nextFormInput.id = formInputData.name;
    nextFormInput.setAttribute("placeholder", formInputData.label);
    inputIcon.style.float = "left";
    inputIcon.style.margin = "15px 15px 0px 0px";
    // borderDiv.style.position = "relative";
    // inputIcon.style.position = "absolute";
    // inputIcon.style.top = "5px";

    borderDiv.appendChild(inputIcon);
    borderDiv.appendChild(nextFormInput);
    fieldsContainer.appendChild(borderDiv);

  } else {

    let nextFormInput = document.createElement("input");
    let borderDiv = document.createElement("div");
    let inputIcon = document.createElement("i");

    inputIcon.className = "fa " + formInputData.icon;
    inputIcon.setAttribute("aria-hidden", "true");

    nextFormInput.type = formInputData.type;
    nextFormInput.id = formInputData.id;
    //nextFormInput.id = formInputData.name;
    nextFormInput.setAttribute("placeholder", formInputData.label);

    borderDiv.appendChild(inputIcon);
    borderDiv.appendChild(nextFormInput);
    fieldsContainer.appendChild(borderDiv);

  }


}


formData.forEach(buildForm, fieldsContainer);

const contactBtn = document.querySelector(".contact_btn");
const contactForm = document.querySelector("#form");
const formButton = document.querySelector("#contact");
const solutionForm = document.querySelector("#solutionForm");

//buttonss lead

const leadFormbutton1 = document.querySelector("#leadFormbutton1");
const leadFormbutton2 = document.querySelector("#leadFormButton2");
const leadFormbuttonBack = document.querySelector("#leadFormbuttonBack");
const summaryBackBtn = document.querySelector("#summaryBackBtn");

//
const leadForm1 = document.querySelector("#leadForm1");
const leadForm2 = document.querySelector("#leadForm2");
const summaryBtn = document.querySelector("#summaryBtn");
const leadFormLast = document.querySelector("#leadFormLast");
const leadFormWrap = document.querySelector("#leadFormWrap");

const summaryLeads = document.querySelector("#summaryLeads");

const driverInput = document.querySelector("#Drivers");

driverInput.addEventListener("change", function (e) {
  const drivers = e.target.value;
  const price = parseFloat(drivers) * 5;
  document.querySelector("#Leads").value = `${price} Leads`;
});

function generateUniqueId() {
  // Create a timestamp-based ID
  const timestamp = new Date().getTime();

  // Generate a random number and convert it to a hexadecimal string
  const random = Math.floor(Math.random() * 1000000).toString(16);

  // Concatenate the timestamp and random number to create a unique ID
  const uniqueId = timestamp + random;

  return uniqueId;
}

const id = generateUniqueId();

const appUrl22 =
  "https://script.google.com/macros/s/AKfycbzvKZXHWjcJ3fEhnbFAHkMptwZpF2dCW83OTmADhMuVAeJvAy_AQfyCHw5zd0wq1gCi/exec";

const appUrl =
  "https://script.google.com/macros/s/AKfycbx60PcbraRkhoqUoNlOfjLxDWrvLjoow4-ckVDtwXzJJDN9fXglVUJMMee2u25unPuA/exec";

const appUrl2 =
  "https://script.google.com/macros/s/AKfycbz2yKrpK2D9g2QU9nOwkwzZ3Iv-rD2QkGnKBnXY_o2WVachTzBw1qeMDC7Qa5EUtgjO/exec";

const appUrl3Old =
  "https://script.google.com/macros/s/AKfycbyVQqK4rUQYxyPx5hmAcAHrgy3d7SzEaDV2GzkPvv_-jYrbKy3_3YhcmP_LZAnI65m6/exec";

const appUrl3 =
  "https://script.google.com/macros/s/AKfycbzDEuxLCLgkAUvD3fDwXbwgAdMPdjyit54Rv-wYQ67VYPpfH4smZlxy9TsX1liZA-ZU/exec";

// const appUrl3 =
//   "https://script.google.com/macros/s/AKfycbxM7SPouEjeBjsNOczRSN91xqPjTulSMC_M4b1CmoaNhn5s6SMlPqu46baH80B4GU77/exec";

contactBtn?.addEventListener("click", function () {
  document.body.style.overflow = "hidden";

  document.querySelector(".sc_modal_wrapper").classList.toggle("is_visible");
});

window.addEventListener("click", function (e) {
  e.stopPropagation();

  if (e.target.classList.contains("sc_modal_wrapper")) {
    document.body.style.overflow = "auto";

    document.querySelector(".sc_modal_wrapper").classList.toggle("is_visible");
  }
});

function formSubmit(e) {
  e.preventDefault();

  const newForm = new FormData(e.target);

  newForm.append("page", window.location.pathname);
  newForm.append("sheet", "contact");
  newForm.append("id", id);
  document.querySelector(".sc_button_blue").textContent = "Sending...";

  fetch(appUrl3, {
    method: "POST",
    body: newForm,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      document
        .querySelector(".sc_modal_wrapper")
        ?.classList.toggle("is_visible");
      document.querySelector(".sc_button_blue").textContent = "Contact Sales";

      e.target.reset();
    });
}

function leadFormSubmit(e) {
  e.preventDefault();
  leadFormbutton1.textContent = "Sending...";
  const leadFormStart = new FormData(leadForm1);
  const leadFormEnd = new FormData(leadForm2);

  const leads = leadFormStart.get("Leads");

  console.log(leads);

  document.querySelector("#leadFormLeads").textContent = parseFloat(leads);
  document.querySelector("#priceSummary").textContent = `${
    parseFloat(leads) * 35
  }£`;

  leadFormStart.append("sheet", "leads");
  leadFormStart.append("id", id);

  for (let pair of leadFormEnd.entries()) {
    leadFormStart.append(pair[0], pair[1]);
  }

  fetch(appUrl3, {
    method: "POST",
    body: leadFormStart,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      leadForm1.classList.add("is_hidden");
      leadForm2.classList.remove("is_hidden");
      leadFormbutton1.textContent = "Continue";
      document.querySelector(".sc_solution_type_form_content").scrollIntoView({
        top: 0,
        behavior: "smooth",
      });
    });
}

function leadFormSubmit2(e) {
  e.preventDefault();
  const leadFormStart = new FormData(leadForm1);
  const leadFormEnd = new FormData(leadForm2);
  leadFormbutton2.textContent = "Sending...";

  leadFormStart.append("sheet", "leads");

  leadFormStart.append("id", id);

  for (let pair of leadFormEnd.entries()) {
    leadFormStart.append(pair[0], pair[1]);
  }

  fetch(appUrl3, {
    method: "POST",
    body: leadFormStart,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      leadForm2.classList.add("is_hidden");
      summaryLeads.classList.remove("is_hidden");
      // leadFormWrap.classList.add("success_message");
      leadFormbutton2.textContent = " Let’s go";
      document.querySelector(".sc_solution_type_form_content").scrollIntoView({
        top: 0,
        behavior: "smooth",
      });
    });
}

function leadFormSubmit3(e) {
  e.preventDefault();

  const leadFormStart = new FormData(leadForm1);
  const leadFormEnd = new FormData(leadForm2);

  leadFormStart.append("sheet", "leads");

  leadFormStart.append("id", id);

  leadFormStart.append("Accept", "Accepted");

  for (let pair of leadFormEnd.entries()) {
    leadFormStart.append(pair[0], pair[1]);
  }

  fetch(appUrl3, {
    method: "POST",
    body: leadFormStart,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      summaryLeads.classList.add("is_hidden");
      leadFormLast.classList.remove("is_hidden");
      leadFormWrap.classList.add("success_message");
      // leadFormbutton2.textContent = " Let’s go";
      document.querySelector(".sc_solution_type_form_content").scrollIntoView({
        top: 0,
        behavior: "smooth",
      });
    });
}

contactForm?.addEventListener("submit", formSubmit);

solutionForm?.addEventListener("submit", formSubmit);

leadForm1?.addEventListener("submit", leadFormSubmit);

leadForm2?.addEventListener("submit", leadFormSubmit2);

summaryBtn?.addEventListener("click", leadFormSubmit3);

formButton?.addEventListener("click", function () {
  document.querySelector(".sc_solution_type_form_content").scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
});

leadFormbuttonBack?.addEventListener("click", function (e) {
  e.preventDefault();
  leadForm1.classList.remove("is_hidden");
  leadForm2.classList.add("is_hidden");
});

summaryBackBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  leadForm2.classList.remove("is_hidden");
  summaryLeads.classList.add("is_hidden");
});

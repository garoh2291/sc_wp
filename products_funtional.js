const contactBtn = document.querySelector(".contact_btn");
const contactForm = document.querySelector("#form");
const formButton = document.querySelector("#contact");
const solutionForm = document.querySelector("#solutionForm");

//buttonss lead

const leadFormbutton1 = document.querySelector("#leadFormbutton1");
const leadFormbutton2 = document.querySelector("#leadFormButton2");
const leadFormbuttonBack = document.querySelector("#leadFormbuttonBack");

//
const leadForm1 = document.querySelector("#leadForm1");
const leadForm2 = document.querySelector("#leadForm2");
const leadForm3 = document.querySelector("#leadForm3");
const leadFormWrap = document.querySelector("#leadFormWrap");

const appUrl =
  "https://script.google.com/macros/s/AKfycbzvKZXHWjcJ3fEhnbFAHkMptwZpF2dCW83OTmADhMuVAeJvAy_AQfyCHw5zd0wq1gCi/exec";

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

  fetch(appUrl, {
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
      e.target.reset();
    });
}

contactForm?.addEventListener("submit", formSubmit);

solutionForm?.addEventListener("submit", formSubmit);

formButton?.addEventListener("click", function () {
  // scroll to top with smooth
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

leadFormbutton1?.addEventListener("click", function (e) {
  e.preventDefault();
  leadForm1.classList.add("is_hidden");
  leadForm2.classList.remove("is_hidden");
});

leadFormbutton2?.addEventListener("click", function (e) {
  e.preventDefault();
  leadForm2.classList.add("is_hidden");
  leadForm3.classList.remove("is_hidden");
  leadFormWrap.classList.add("success_message");
});

leadFormbuttonBack?.addEventListener("click", function (e) {
  e.preventDefault();
  leadForm1.classList.remove("is_hidden");
  leadForm2.classList.add("is_hidden");
});

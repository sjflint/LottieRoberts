const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const form = document.getElementById("contact-form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Please include your name");
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
  } else {
    messages.push("Please include a valid email");
  }

  if (/^(?=.*\d)[\d ]+$/.test(number.value) && number.value.length >= 11) {
  } else {
    messages.push("Please include a valid phone number");
  }

  if (message.value === "" || message.value == null) {
    messages.push("Please include your message");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join("\n ");
  }
});

const modalForm = document.getElementById("modal-form");
const modalError = document.getElementById("modalerror");
const modalname = document.getElementById("modalname");
const modalemail = document.getElementById("modalemail");
const modalnumber = document.getElementById("modalnumber");
const modalmessage = document.getElementById("modalmessage");

modalForm.addEventListener("submit", (e) => {
  let modalmessages = [];
  if (modalname.value === "" || modalname.value == null) {
    modalmessages.push("Please include your name");
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(modalemail.value)) {
  } else {
    modalmessages.push("Please include a valid email");
  }

  if (
    /^(?=.*\d)[\d ]+$/.test(modalnumber.value) &&
    modalnumber.value.length >= 11
  ) {
  } else {
    modalmessages.push("Please include a valid phone number");
  }

  if (modalmessage.value === "" || modalmessage.value == null) {
    modalmessages.push("Please include your message");
  }

  if (modalmessages.length > 0) {
    e.preventDefault();
    modalError.innerText = modalmessages.join("\n ");
  }
});

const newsletterForm = document.getElementById("newsletter-form");
const newslettername = document.getElementById("newslettername");
const newsletteremail = document.getElementById("newsletteremail");
const newsletterError = document.getElementById("newslettererror");

newsletterForm.addEventListener("submit", (e) => {
  let newslettermessages = [];
  if (newslettername.value === "" || newslettername.value == null) {
    newslettermessages.push("Please include your name");
  }

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newsletteremail.value)
  ) {
  } else {
    newslettermessages.push("Please include a valid email");
  }

  if (newslettermessages.length > 0) {
    e.preventDefault();
    newsletterError.innerText = newslettermessages.join("\n ");
  }
});

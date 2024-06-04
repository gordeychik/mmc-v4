const openCallbacks = document.querySelectorAll(".open-callback");
const modal = document.querySelector(".modal_callback");

openCallbacks.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.visibility = "visible";
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", (e) => {
  let target = e.target;
  if (
    target &&
    modal.classList.contains("show") &&
    (target.classList.contains("modal_callback") ||
      target.classList.contains("modal-close"))
  ) {
    modal.style.visibility = "hidden";
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// отпрпавка в телегу

const TELEGRAM_BOT_TOKEN = "7026854610:AAGv3CbHLa7XWJmKzhJOHuian3hvHyIph_Q";
const TELEGRAM_CHAT_ID = "@MedCenterTg";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

async function sendEmailTelegram(event) {
  event.preventDefault();
  const form = event.target;
  const result = form.querySelector(".form_callback-result");

  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  const { name, phone, email } = Object.fromEntries(
    new FormData(form).entries()
  );
  const text = `Имя ${name}\nТелефон ${phone}\nПочта ${email}`;

  try {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });
    if (response.ok) {
      result.textContent = "Ваша заявка успешно отправлена";
      result.style.color = "#65ff65";
      form.reset();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    result.textContent = "Не удалось отправить заявку";
    result.style.color = "red";
  } finally {
    setTimeout(() => {
      result.textContent = "";
    }, 5000);
  }
}

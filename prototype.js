const buttons = document.querySelectorAll(".step");
const screens = document.querySelectorAll(".screen");
const copyButton = document.getElementById("copyFeedback");
const copyStatus = document.getElementById("copyStatus");

function showView(viewId) {
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === viewId);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

copyButton?.addEventListener("click", async () => {
  const text = [
    "OTT Renew prototype feedback:",
    "- What felt strong?",
    "- What felt unclear?",
    "- What should change next?"
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Feedback prompt copied. Paste it into email, Notes, or WhatsApp.";
  } catch {
    copyStatus.textContent = "Copy not available in this browser. Please use the email button instead.";
  }
});

showView("intro");

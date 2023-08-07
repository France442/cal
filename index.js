const box = document.querySelector(".box");
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.value;

    if (btnValue === "=") {
      try {
        box.value = eval(box.value.replace("%", "/100"));
      } catch (error) {
        box.value = "Error";
      }
    } else if (btnValue === "C") {
      box.value = "";
    } else if (btnValue === "DEL") {
      box.value = box.value.slice(0, -1);
    } else {
      box.value += btnValue;
    }
  });
});

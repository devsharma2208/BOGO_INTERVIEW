const prices = {
  1: 10,
  2: 18,
  3: 24,
};

function selectPlan(n) {
  document
    .querySelectorAll(".plan-box")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".details")
    .forEach((d) => d.classList.remove("active"));
  document
    .querySelectorAll("input[name='plan']")
    .forEach((r) => (r.checked = false));

  document.getElementById("box" + n).classList.add("active");
  document.getElementById("details" + n).classList.add("active");
  document.querySelector(`#box${n} input[name='plan']`).checked = true;

  document.querySelector(".total").textContent = `Total: $${prices[n]}.00 USD`;
}

window.onload = function () {
  selectPlan(2);
};

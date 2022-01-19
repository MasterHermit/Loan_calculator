document.getElementById("loan-form").addEventListener("submit", (e) => {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "block";
  setTimeout(calculateRes, 2000);
  e.preventDefault();
});

function calculateRes() {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const time = document.getElementById("years");
  const mPayment = document.getElementById("monthly-payment");
  const tPayment = document.getElementById("total-payment");
  const tInterset = document.getElementById("total-interest");

  const pAmount = parseFloat(amount.value);
  const pTime = parseFloat(time.value) * 12;
  const pInterest = parseFloat(interest.value / 100 / 12);

  const x = Math.pow(1 + pInterest, pTime);
  const monthly = (pAmount * x * pInterest) / (x - 1);

  if (isFinite(monthly)) {
    mPayment.value = monthly.toFixed(2);
    tPayment.value = (monthly * pTime).toFixed(2);
    tInterset.value = (monthly * pTime - pAmount).toFixed(2);
    document.querySelector("#results").style.display = "block";
    document.querySelector("#loading").style.display = "none";
  } else {
    errorf("please check your amounts");
  }
}

  
function errorf(mes) {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";
  const err = document.createElement("div");
  err.id = "loading";
  err.className = "alert alert-danger";
  err.textContent = mes;
  // err.innerHTML='<img src="img/loading.gif" alt="">';

  const card = document.querySelector(".card");
  const head = document.querySelector(".heading");

  card.insertBefore(err, head);
  setTimeout(tout, 3000);
}
function tout() {
  document.querySelector(".alert").remove();
}

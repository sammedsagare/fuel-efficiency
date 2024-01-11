function calculateMileage() {
  let current = parseFloat(document.getElementById("current").value);
  let previous = parseFloat(document.getElementById("previous").value);
  let fuel = parseFloat(document.getElementById("fuel").value);

  let mileage = [current - previous] / fuel;

  document.getElementById("result").innerHTML =
    "Mileage: " + mileage.toFixed(2);
}

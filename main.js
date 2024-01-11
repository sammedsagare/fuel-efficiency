function calculateMileage() {
  let current = parseFloat(document.getElementById("current").value);
  let previous = parseFloat(document.getElementById("previous").value);
  let fuel = parseFloat(document.getElementById("fuel").value);

  let mileage1 = [current - previous] / fuel;

  if (isNaN(current) || isNaN(previous) || isNaN(fuel)) {
    alert("Please enter valid numeric values for all inputs.");
    return;
  }
  if (fuel <= 0) {
    alert("Fuel consumed must be a positive value.");
    return;
  }
  if (current <= previous) {
    alert("Current odometer value must be greater than the previous value.");
    return;
  }

  document.getElementById("result").innerHTML =
    "Mileage: " + mileage1.toFixed(2) + "km/l";
}

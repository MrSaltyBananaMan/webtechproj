var images = ["s21.png", "s212.png", "s213.png"];
var currentImage = 0;

function changeImage() {
    var image = document.getElementById("s21pics");
    image.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
}

function toggleContent() {
    var button = document.getElementById("myButton");
    button.style.display = "none";

    var content = document.getElementById("hiddenContent");
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  function updateTotal() {
    var colorSelector = document.getElementById("colorSelector");
  var colorValue = colorSelector.value;
  var conditionSelector = document.getElementById("conditionSelector");
  var conditionValue = conditionSelector.value;
  var baseTotal = 500;
  var total = document.getElementById("totalPrice");
    total.innerHTML = "Total Price: &euro;" + (parseInt(colorValue)+baseTotal+parseInt(conditionValue));
  }

  function buynowPopup() {
    window.alert("Congratulations! You just bought a Samsung S21!");
  }
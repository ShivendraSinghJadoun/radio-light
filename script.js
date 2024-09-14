const lightBulb = document.getElementById('light-bulb');
const radioButtons = document.querySelectorAll('input[type=radio][name="light"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    lightBulb.style.backgroundColor = this.value;
  });
});

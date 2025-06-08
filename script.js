var textarea = document.getElementById('message');
var counter = document.getElementById('counter');
var warning = document.getElementById('warning');
var maxChars = 200;

textarea.addEventListener('input', function () {
  var currentLength = textarea.value.length;

  // Trim the content if it exceeds maxChars
  if (currentLength > maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    currentLength = maxChars;
  }

  // Update the counter
  counter.textContent = currentLength + ' / ' + maxChars + ' characters';

  // Show warning if limit is reached
  if (currentLength >= maxChars) {
    warning.classList.remove('hidden');
    warning.textContent = "⚠ You have reached the maximum character limit!";
  } else {
    warning.classList.add('hidden');
  }
});
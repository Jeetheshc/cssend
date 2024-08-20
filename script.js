document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.checkbox');
    const body = document.body;
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        body.classList.add('dark-theme');
      } else {
        body.classList.remove('dark-theme');
      }
    });
  });
  
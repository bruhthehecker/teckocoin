window.addEventListener('scroll', function() {
  var element = document.querySelector('.your-element-class');
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.add('text-pop-up-top', 'class2', 'class3'); // Add more classes as needed
  } else {
    element.classList.remove('text-pop-up-top', 'class2', 'class3'); // Remove the same classes
  }
});

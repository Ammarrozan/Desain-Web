const myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/bg2.png') {
    myImage.setAttribute('src', 'images/bg1.png');
  } else {
    myImage.setAttribute('src', 'images/bg2.png');
  }
}

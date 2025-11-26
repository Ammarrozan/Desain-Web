// Ambil elemen yang dibutuhkan
const myImage = document.querySelector('img');
const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

// Fitur ubah gambar
myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/bg1.png') {
    myImage.setAttribute('src', 'images/bg2.png');
  } else {
    myImage.setAttribute('src', 'images/bg1.png');
  }
}

// Fungsi untuk set nama pengguna
function setUserName() {
  const myName = prompt('Masukkan nama Anda:');
  if (!myName) {
    // Jika user menekan Cancel atau kosong, ulangi prompt
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Selamat datang, ' + myName + '!';
  }
}

// Mengecek apakah nama sudah tersimpan di localStorage
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Selamat datang, ' + storedName + '!';
}

// Tombol untuk ubah pengguna
myButton.onclick = function() {
  setUserName();
}

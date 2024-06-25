// Get the comic reader container and buttons
const comicReader = document.getElementById('comic-reader');
const minimizeBtn = document.getElementById('minimize-btn');
const maximizeBtn = document.getElementById('maximize-btn');

// Add event listeners to the buttons
minimizeBtn.addEventListener('click', minimizeComicReader);
maximizeBtn.addEventListener('click', maximizeComicReader);

// Function to minimize the comic reader
function minimizeComicReader() {
  comicReader.style.width = '200px'; // adjust to your desired minimized width
  comicReader.style.height = '150px'; // adjust to your desired minimized height
}

// Function to maximize the comic reader
function maximizeComicReader() {
  comicReader.style.width = '100%'; // set to full width
  comicReader.style.height = '100%'; // set to full height
}

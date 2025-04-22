const text = "I'm Duc Long ";
const speed = 100;
let i = 0;
let isDeleting = false;

function typeWriter() {
  const element = document.getElementById("typewriter");

  if (!element) return; // Kiểm tra xem phần tử có tồn tại không

  if (isDeleting) {
    element.innerHTML = text.substring(0, i--);
  } else {
    element.innerHTML = text.substring(0, i++);
  }

  let currentSpeed = speed;

  if (!isDeleting && i === text.length) {
    currentSpeed = 1000;
    isDeleting = true;
  } else if (isDeleting && i === 0) {
    isDeleting = false;
    currentSpeed = 500;
  }

  setTimeout(typeWriter, currentSpeed);
}

// Đảm bảo chạy sau khi DOM đã load
window.onload = typeWriter;

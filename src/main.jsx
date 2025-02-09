import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close");

  btn.addEventListener("click", () => {
      modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal2 = document.getElementById("myModal2");
  const btn2 = document.getElementById("openModal2");
  const closeBtn2 = document.querySelector(".close2");

  btn2.addEventListener("click", () => {
      modal2.style.display = "block";
  });

  closeBtn2.addEventListener("click", () => {
      modal2.style.display = "none";
  });

  window.addEventListener("click", (e) => {
      if (e.target === modal2) {
          modal2.style.display = "none";
      }
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

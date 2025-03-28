const slider = document.getElementById("slider");
const imageWidth = 325;
const images = slider.querySelectorAll("img");
const totalImages = images.length;
const maxScroll = imageWidth * (totalImages - 4); // only 4 shown at a time

function scroll(direction) {
  const currentScroll = slider.scrollLeft;
  let newScroll = direction === "right"
    ? currentScroll + imageWidth
    : currentScroll - imageWidth;

  // Loop to start or end
  if (newScroll > maxScroll) newScroll = 0;
  if (newScroll < 0) newScroll = maxScroll;

  slider.scrollTo({ left: newScroll, behavior: "smooth" });
}

document.getElementById("right-button").addEventListener("click", () => scroll("right"));
document.getElementById("left-button").addEventListener("click", () => scroll("left"));


// Like button functionality
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let count = 0;
  
    likeBtn.addEventListener('click', () => {
      count++;
      likeCount.textContent = count;
      likeBtn.classList.add('clicked');
  
      // Optional: pop effect reset
      setTimeout(() => {
        likeBtn.classList.remove('clicked');
      }, 300);
    });
  });
  
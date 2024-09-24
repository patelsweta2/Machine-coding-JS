const popoverBtn = document.getElementById("pop-btn");
const popover = document.getElementById("popover");

// Toggle popover on button click
popoverBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Stop the click from propagating to document
  if (popover.style.display === "block") {
    popover.style.display = "none";
  } else {
    popover.style.display = "block";
  }
});

// Hide popover when clicking outside
document.addEventListener("click", (e) => {
  if (!popover.contains(e.target) && !popoverBtn.contains(e.target)) {
    popover.style.display = "none";
  }
});

document.body.addEventListener("click", (e) => {
    if (!e.target.matches("#program")) return;
    document.querySelector(".pic img" ).src = e.target.dataset.src;
  
    document
      .querySelectorAll("#program")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  });
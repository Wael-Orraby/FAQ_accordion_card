let allLis = document.querySelectorAll("ul li");
allLis.forEach((ele) => {
  ele.onclick = function () {
    allLis.forEach((li) => {
      if (li !== ele) {
        li.querySelector(".answer").style.display = "none";
        li.querySelector("img").style.transform = "rotate(0deg)";
        li.querySelector("div p").style.fontWeight = "normal";
      }
    });
    ele.querySelector(".answer").style.display =
      ele.querySelector(".answer").style.display === "none" ? "block" : "none";
    ele.querySelector("img").style.transform =
      ele.querySelector("img").style.transform === "rotate(0deg)"
        ? "rotate(180deg)"
        : "rotate(0deg)";
    ele.querySelector("div p").style.fontWeight =
      ele.querySelector("div p").style.fontWeight === "700" ? "normal" : "700";
  };
});

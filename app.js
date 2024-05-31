let divcard = document.getElementById("card1");
let front = document.getElementById("front");
let back = document.getElementById("back");

divcard.addEventListener("mouseover", function() {
    front.style.display = "none";
    back.style.display = "block";
});

divcard.addEventListener("mouseout", function() {
    front.style.display = "block";
    back.style.display = "none";
});

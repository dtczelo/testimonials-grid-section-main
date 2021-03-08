window.onload = function() {
    document.querySelectorAll(".card").forEach((item => item.classList.add("onload")));
    document.getElementById("signature").classList.add("onload");
}

signature.addEventListener("click", () => {
    document.getElementById("signature").classList.toggle("signature-active")
})

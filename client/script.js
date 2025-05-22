document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add").addEventListener("click", () => {
        const p = document.createElement("p");
        p.textContent = "This is a new paragraph!";
        document.getElementById("container").appendChild(p);
    });
});
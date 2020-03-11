document.body.addEventListener("append", function (e) {
    if (e.child.id === "canvas") {
        $("#p").innerText = gram;
        $("#q").innerText = step;
    }
});

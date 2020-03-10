document.body.addEventListener("append", function (e) {
    if (e.child.id === "canvas") {
        $("#name").innerText = `{${gram}/${step}}`;
    }
});
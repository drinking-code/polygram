$('input[name="x"]').addEventListener("input", function() {
    update($("#d-1"));
});

update($("#d-1"));

function update(elm) {
    const a = $('input[name="x"]').value;
    const t = a * circleRadius;
    elm.style.left = t + "px";
    elm.style.top = Math.sqrt(Math.pow(t, 2) - Math.pow(circleRadius, 2)) + "px";

    addOffset(elm)
}

function updatePoints() {
    $$(".dot").forEach(point => {
        update(point);
    })
}

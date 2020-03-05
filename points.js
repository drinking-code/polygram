$('input[name="angle"]').addEventListener("input", function() {
    update($("#d-1"));
});

update($("#d-1"));

function update(elm) {
    const angle = $('input[name="angle"]').value;
    const a = Math.cos(Math.rad(angle));
    const t = a * circleRadius;
    elm.style.left = t + "px";
    let elmX = Math.sqrt(Math.pow(circleRadius, 2) - Math.pow(t, 2));
    if (angle > 180) {
        elmX = -elmX;
    }
    elm.style.top = elmX + "px";

    addOffset(elm);
}

function updatePoints() {
    $$(".dot").forEach(point => {
        update(point);
    })
}

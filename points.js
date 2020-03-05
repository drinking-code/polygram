let gram;
getNGram();
$('input[name="n"]').addEventListener("input", getNGram);
function getNGram() {
    gram = $('input[name="n"]').value;
    setPoints();
}

function setPoints() {
    $$(".dot").forEach(elm => {
        elm.remove();
    });
    for (let i = 0; gram > i; i++) {
        canvas.addChild("div", {class: "dot", id: "d-" + i});
    }
    updatePoints()
}

function update(elm, index) {
    console.log(index, gram);
    const angle = index / gram * 360;
    console.log(angle);
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
    $$(".dot").forEach((point, index) => {
        console.log(index)
        update(point, index);
    })
}

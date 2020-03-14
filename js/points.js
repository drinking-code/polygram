let gram;
getNGram();
$('input[name="n"]').addEventListener("input", getNGram);
function getNGram(stpSet) {
    if (!$('input[name="n"]').value) {return}
    gram = $('input[name="n"]').value;
    $("#p").innerText = gram.toString();
    if (stpSet !== true) {stpSet = false}
    setSteps(stpSet);
    setPoints();
    drawLines();
}

function setPoints() {
    $$(".dot").forEach(elm => {
        elm.remove();
    });
    for (let i = 0; gram > i; i++) {
        scribble.addChild("div", {class: "dot", id: "d-" + i});
    }
    updatePoints()
}

function update(elm, index) {
    const angle = index / gram * 360;
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
        update(point, index);
    })
}

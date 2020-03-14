//adaptive scaling
const sizeSlider = $('input[name="size"]');
$('input[name="n"]').addEventListener("input", setScalingRange);
$('input[name="n"]').addEventListener("input", function () {
    if (!$('input[name="n"]').value) {return}
    $("#q").innerText = Math.round(gram / 2 - 1).toString();
    step = Number($("#q").innerText);
});

function setScalingRange() {
    const capSize = 11000;
    const sizingFactor = 0.00001;
    const n = $('input[name="n"]').value;
    const maxSize = capSize / (1 + Math.pow(Math.E, -1 * sizingFactor * capSize * (n - 3)) * (capSize / 350 - 1));
    sizeSlider.setAttribute("max", maxSize.toString());
    //set slider to correct position
    sizeSlider.setAttribute("value", Math.min(sizeSlider.value, sizeSlider.max).toString());
    sizeSlider.trigger("change");
    setRadius();
}

$$("#name span").forEach(elm => {
    elm.addEventListener("focus", function (e) {
        elm.parentElement.classList.add("focus");
        /*if (e.relatedTarget) {
            //empty span: bug here
            elm.innerText = "";
        }*/
    });
    elm.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            elm.blur();
        }
    });
    elm.addEventListener("input", function () {
        if (!elm.innerText.isNumeric()) {
            elm.innerText = elm.innerText.replace(/([^0-9])/g, "");
        }
        elm.children.forEach(elm => {
            if (typeof elm !== "object") {
                return
            }
            elm.remove();
        });
    });
    elm.addEventListener("blur", function () {
        if (!elm.innerText) {
            elm.innerText = "1";
        }
        elm.parentElement.classList.remove("focus");
        setTimeout(function() {
            getNGram(true);
        },10);
    });
});

$("#p").addEventListener("blur", function (e) {
    if (e.target.innerText > 100) {
        e.target.innerText = "100";
    }
    gram = Math.max(Number(e.target.innerText), 1);
    $('input[name="n"]').value = gram;
});

$("#q").addEventListener("blur", function (e) {
    //clip to biggest sane step
    if (e.target.innerText > Math.round(gram / 2 - 1)) {
        e.target.innerText = Math.round(gram / 2 - 1).toString();
    }
    step = Number(e.target.innerText);
});

//adaptive scaling
const sizeSlider = $('input[name="size"]');
$('input[name="n"]').addEventListener("input", setScalingRange);
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

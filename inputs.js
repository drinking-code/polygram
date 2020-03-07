//adaptive scaling
const sizeSlider = $('input[name="size"]');
$('input[name="n"]').addEventListener("input", setScalingRange);
function setScalingRange() {
    const maxSize = 17 * Math.pow($('input[name="n"]').value - 3, 2) + 350;
    sizeSlider.setAttribute("max", maxSize);
    //set slider to correct position
    sizeSlider.setAttribute("value", Math.min(sizeSlider.value, sizeSlider.max).toString());
    sizeSlider.trigger("change");
    setRadius();
}

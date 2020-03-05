function drawLines() {
    let canvas = $("#canvas");
    if (canvas) {
        canvas.remove();
        console.log(
            "canvas removed"
        )
    }
    canvas = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    canvas.id = "canvas";
    $$(".dot").forEach(elm => {
        const thisID = Number(elm.id.replace("d-", ""));
        //get position of this point and #+2 point
        const p1x = elm.style.left.replace("px", "");
        const p1y = elm.style.top.replace("px", "") - 200;
        let nextID;
        if (thisID + 2 > gram - 1) {
            nextID = thisID + 2 - gram;
        } else {
            nextID = thisID + 2;
        }
        const p2 = $("#d-" + nextID);
        const p2x = p2.style.left.replace("px", "");
        const p2y = p2.style.top.replace("px", "") - 200;

        let line = document.createElementNS('http://www.w3.org/2000/svg', "line");
        const data = {x1: p1x, x2: p2x, y1: p1y, y2: p2y};
        data.forEach((value, attr) => {
            attr = attr.replace(/([A-Z])/g, function (word) {
                return "-" + word;
            }).toLowerCase();
            line.setAttribute(attr, value);
        });
        canvas.appendChild(line);
    });
    document.body.appendChild(canvas);
}

drawLines();

function updateLines() {

}

let step = 1;

function setSteps(stpSet) {
    const q = $("#q");
    if (q.innerText < Math.round(gram / 2 - 1) && stpSet) {
        step = Math.max(Number(q.innerText), 1);
    } else {
        step = Math.max(Math.round(gram / 2 - 1), 1);
    }
}

function getCoords(id) {
    const thisID = id;
    const p1 = $("#d-" + thisID);
    const p1x = p1.style.left.replace("px", "");
    const p1y = p1.style.top.replace("px", "") - 200;

    let nextID;
    if (thisID + step > gram - 1) {
        nextID = thisID + step - gram;
    } else {
        nextID = thisID + step;
    }
    const p2 = $("#d-" + nextID);
    const p2x = p2.style.left.replace("px", "");
    const p2y = p2.style.top.replace("px", "") - 200;

    return [p1x, p1y, p2x, p2y]
}

function drawLines() {
    let canvas = $("#canvas");
    if (canvas) {
        canvas.remove();
    }
    canvas = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    canvas.id = "canvas";
    $$(".dot").forEach(elm => {
        const thisID = Number(elm.id.replace("d-", ""));
        //get position of this point and #+2 point
        const c = getCoords(thisID);

        let line = document.createElementNS('http://www.w3.org/2000/svg', "line");
        const data = {x1: c[0], x2: c[2], y1: c[1], y2: c[3], id: "l-" + thisID};
        data.forEach((value, attr) => {
            line.setAttribute(attr, value);
        });
        canvas.appendChild(line);
    });
    document.body.add(canvas);
}

setTimeout(drawLines, 10);

function updateLines() {
    $$("#canvas line").forEach(elm => {
        const thisID = Number(elm.id.replace("l-", ""));
        //get position of this point and #+2 point
        const c = getCoords(thisID);

        const data = {x1: c[0], x2: c[2], y1: c[1], y2: c[3]};
        data.forEach((value, attr) => {
            elm.setAttribute(attr, value);
        });
    });
}

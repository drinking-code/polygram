let step = 1;

function setSteps() {
    step = Math.round(gram / 2 - 1);
}

function drawLines() {
    setSteps();
    let canvas = $("#canvas");
    if (canvas) {
        canvas.remove();
    }
    canvas = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    canvas.id = "canvas";
    $$(".dot").forEach(elm => {
        const thisID = Number(elm.id.replace("d-", ""));
        //get position of this point and #+2 point
        const p1x = elm.style.left.replace("px", "");
        const p1y = elm.style.top.replace("px", "") - 200;
        let nextID;
        if (thisID + step > gram - 1) {
            nextID = thisID + step - gram;
        } else {
            nextID = thisID + step;
        }
        const p2 = $("#d-" + nextID);
        const p2x = p2.style.left.replace("px", "");
        const p2y = p2.style.top.replace("px", "") - 200;

        let line = document.createElementNS('http://www.w3.org/2000/svg', "line");
        const data = {x1: p1x, x2: p2x, y1: p1y, y2: p2y, id: "l-" + thisID};
        data.forEach((value, attr) => {
            line.setAttribute(attr, value);
        });
        canvas.appendChild(line);
    });
    document.body.appendChild(canvas);
}

setTimeout(drawLines, 10);

function updateLines() {
    setSteps();
    $$("#canvas line").forEach(elm => {
        const thisID = Number(elm.id.replace("l-", ""));
        //get position of this point and #+2 point
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

        const data = {x1: p1x, x2: p2x, y1: p1y, y2: p2y};

        data.forEach((value, attr) => {
            elm.setAttribute(attr, value);
        });
    });
}

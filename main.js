$ = selector => document.querySelector(selector);
$$ = selector => document.querySelectorAll(selector);

const canvas = $("#canvas");

//set offset according to viewport size
let offsetX = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2,
    offsetY = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 200) / 2;

//forEach function also for non-array objects
Object.prototype.forEach = function (func) {
    //for every element in this object
    for (let n in this) {
        //...that is not a function
        if (typeof this[n] === "function") {
            continue
        }
        func(this[n], n);
    }
};

HTMLElement.prototype.addChild = function (tag, attributes, position) {
    //create node
    let elm = document.createElement(tag);
    //add given attributes to node
    if (attributes) {
        attributes.forEach((value, attr) => {
            attr = attr.replace(/([A-Z])/g, function (word) {
                return "-" + word;
            }).toLowerCase();
            if (attr === "text") { //set inner text
                elm.innerHTML = value;
                return
            }
            elm.setAttribute(attr, value);
        });
    }
    //set sizing and position
    if (position) {
        position.forEach((value, attr) => {
            if (attr === "x") {
                elm.style.left = value;
            } else if (attr === "y") {
                elm.style.top = value;
            }
        });
    }
    if (!elm.style.left) {
        elm.style.left = "0px"
    }
    if (!elm.style.top) {
        elm.style.top = "0px"
    }
    //append child
    this.appendChild(elm);
};

canvas.addChild("div", {class: "circle"});
canvas.addChild("div", {class: "dot"});


//set offset for every canvas child element
{
    const canvasChildren = canvas.childNodes;
    console.log(canvasChildren);
    canvasChildren.forEach(child => {
        //check if child is a HTML element
        if (!child.addChild) {return}
        child.style.left = (Number(child.style.left.replace("px", "")) + offsetX) + "px";
        child.style.top = (Number(child.style.top.replace("px", "")) + offsetY + 200) + "px";
    })
}

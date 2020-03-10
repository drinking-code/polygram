$ = selector => document.querySelector(selector);
$$ = selector => document.querySelectorAll(selector);

const append = new CustomEvent("append");
Node.prototype.add = function (child) {
    append.child = this.appendChild(child);
    this.dispatchEvent(append);
};

Math.rad = function(degrees) {
    return degrees * Math.PI / 180;
};

Node.prototype.trigger = function(event) {
    let evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, false, true);
    this.dispatchEvent(evt);
};

HTMLElement.prototype.remove = function () {
    this.parentNode.removeChild(this)
};

"use strict";
class Food {
    constructor(_type) {
        this.type = _type;
        this.stock = Math.floor(Math.random() * 20 + 20);
        this.critical = false;
    }
    report(_element) {
        const para = document.createElement("p");
        para.innerHTML = "There are " + this.stock + "kgs of " + this.type + " left.";
        _element.appendChild(para);
        if (this.stock < 20) {
            this.critical = true;
        }
    }
    restock(_element) {
        if (this.critical) {
            const boughtAmount = Math.floor(Math.random() * 10 + 20);
            this.stock += boughtAmount;
            const para = document.createElement("p");
            para.innerHTML = "Old MacDonald has bought " + boughtAmount + "kgs of " + this.type + ".";
            _element.appendChild(para);
            this.critical = false;
        }
    }
}

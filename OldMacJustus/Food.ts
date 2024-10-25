class Food {
    type: string;
    stock: number;
    critical: boolean;

    constructor(_type: string) {
        this.type = _type;
        this.stock = Math.floor(Math.random() * 20 + 20);
        this.critical = false;
    }

    report(_element: HTMLElement): void {
        const para: HTMLParagraphElement = document.createElement("p");
        para.innerHTML = "There are " + this.stock + "kgs of " + this.type + " left."
        _element.appendChild(para);
        if (this.stock < 20) {
            this.critical = true;
        }
    }

    restock(_element: HTMLElement): void {
        if (this.critical) {
            const boughtAmount: number = Math.floor(Math.random() * 10 + 20);
            this.stock += boughtAmount;
            const para: HTMLParagraphElement = document.createElement("p");
            para.innerHTML = "Old MacDonald has bought " + boughtAmount + "kgs of " + this.type + "."
            _element.appendChild(para);
            this.critical = false;
        }
    }
}
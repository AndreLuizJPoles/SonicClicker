class Ability {
    constructor(name, description, imageURL, purchaseValue, productionValue) {
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.purchaseValue = purchaseValue;
        this.productionValue = productionValue;
        this.toProduce = productionValue;
        this.upgradeMultiplier = 1;
        this.totalProduced = 0;
    }

    produce() {
        let aux = calcProductionValue();
        this.totalProduced += aux;
        return aux;
    }

    calcProductionValue() {
        return this.toProduce * this.upgradeMultiplier;
    }

    buyNewAbility(total) {
        if (total >= this.purchaseValue) {
            this.toProduce += this.productionValue;
            purchaseValue *= 1.1;
        }
    }

    createHtml(parent) {
        const abilityBox = document.createElement('div');
        abilityBox.classList.add('abilityBox');
        abilityBox.setAttribute('onclick', 'buyNewAbility()');

        const img = document.createElement('img');
        img.src = this.imageURL;
        img.alt = this.name;
        img.classList.add('icon');

        const h4 = document.createElement('h4');
        h4.textContent = this.name;

        const h5 = document.createElement('h5');
        h5.textContent = `${this.purchaseValue} Rings`;

        const p = document.createElement('p');
        p.textContent = this.description;

        abilityBox.appendChild(img);
        abilityBox.appendChild(h4);
        abilityBox.appendChild(h5);
        abilityBox.appendChild(p);

        parent.appendChild(abilityBox);
    }
}

export default Ability;
import { t, Selector } from "testcafe"

class emptyPracticePage {
    constructor() {

        this.cartButton = Selector(".shopping_cart a");

    }

    clickButtonCart = async () => {
        await t.hover(this.cartButton)
            .click(this.cartButton);
    }
}

export default new emptyPracticePage()
import { t, Selector } from "testcafe"

class emptyPracticePage {
    constructor() {

        this.cartButton = Selector(".shopping_cart a");
        this.alertMessage = Selector("p.alert.alert-warning");
    }

    clickButtonCart = async () => {
        await t.hover(this.cartButton)
            .click(this.cartButton);
    }
    hoverAlertMessage =  async () => {
        await t.hover(this.alertMessage);
    }
}

export default new emptyPracticePage()
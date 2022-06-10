import { t, Selector } from "testcafe"

class gridPracticePage {
    constructor() {
        //a title Dresses
        this.dressButton = Selector('#block_top_menu ul')
            .child('li')
            .nth(1);

        this.gridButton = Selector('#grid');


        this.addCartButton = Selector("[title='Add to cart']").nth(1);

    }

    clickButtonDress = async () => {
        await t.hover(this.dressButton)
            .click(this.dressButton);
    }

    clickButtonGrid = async () => {
        await t.click(this.gridButton);
    }
 
    clickButtonAddCart = async () => {
        await t.hover(this.addCartButton)
            .click(this.addCartButton);
    }
}

export default new gridPracticePage()
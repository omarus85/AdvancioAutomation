import { t, Selector } from "testcafe"

class gridPracticePage {
    constructor() {
        //a title Dresses
        this.dressButton = Selector('#block_top_menu ul')
            .child('li')
            .nth(1);

        this.gridButton = Selector('#grid');

        this.addCartButton = Selector("[title='Add to cart']").nth(1);

        this.addedCartLabel = Selector("#layer_cart_product_title");

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

    hoverAddCartLabel = async() =>{
        await t.hover(this.addedCartLabel);
    }
}

export default new gridPracticePage()
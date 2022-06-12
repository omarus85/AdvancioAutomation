import { t, Selector } from "testcafe"

class listPracticePage {
    constructor() {
        //a title Dresses
        this.dressButton = Selector('#block_top_menu ul')
            .child('li')
            .nth(1);
        this.listButton = Selector('#list');
        this.addCartButton = Selector("[title='Add to cart']").nth(1);
        this.addedCartLabel = Selector("#layer_cart_product_title");


    }

    clickButtonDress = async () => {
        await t.hover(this.dressButton)
            .click(this.dressButton);
    }
    clickButtonList = async () => {
        await t.click(this.listButton);
    }
    clickButtonAddCart = async () => {
        await t.click(this.addCartButton);
    }
    hoverAddCartLabel = async() =>{
        await t.hover(this.addedCartLabel);
    }
}

export default new listPracticePage()
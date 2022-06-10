import { t, Selector } from "testcafe"

class removeShoppingPracticePage {
    constructor() {

        this.dressButton = Selector('#block_top_menu ul')
            .child('li')
            .nth(1);

        this.addCartButton1 = Selector("[title='Add to cart']").nth(1);
        this.addCartButton2 = Selector("[title='Add to cart']").nth(2);

        this.gridButton = Selector('#grid');
        this.closeButton = Selector("[title='Close window']");
        this.cartButton = Selector(".shopping_cart a");

        this.removeCartButton = Selector(".remove_link").nth(1);
        //.remove_link a[title='remove this product from my cart']
    }

    clickButtonDress = async () => {
        await t.hover(this.dressButton)
            .click(this.dressButton);
    }

    clickButtonGrid = async () => {
        await t.click(this.gridButton);
    }

    clickButtonAddCart1 = async () => {
        await t.hover(this.addCartButton1)
            .click(this.addCartButton1);
    }
    clickButtonAddCart2 = async () => {
        await t.hover(this.addCartButton2)
            .click(this.addCartButton2);
    }
    clickButtonClose = async () => {
        await t.hover(this.closeButton)
            .click(this.closeButton);
    }
    hoverButtonCart = async () => {
        await t.hover(this.cartButton);
    }
    removeButtonCart = async () => {
        await t.click(this.removeCartButton);
    }
}

export default new removeShoppingPracticePage()
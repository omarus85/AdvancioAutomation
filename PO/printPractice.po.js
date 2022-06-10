import { t, Selector } from "testcafe"

class gridPracticePage {
    constructor() {

        this.searchBox = Selector("#search_query_top");

        this.resultSearch = Selector(".ac_results ul li")
            .withText("Summer Dresses > Printed Summer Dress");
    }

    typeSearchBox = async (text) => {
        await t.hover(this.searchBox)
            .typeText(this.searchBox, text);
    }

    selectSummerDress = async () => {
        await t.click(this.resultSearch);
    }

}

export default new gridPracticePage()
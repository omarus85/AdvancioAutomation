import { t } from 'testcafe'
import gridPracticePage from '../PO/gridPractice.po'

fixture `Main page`
    .page `http://automationpractice.com/`
    .disablePageCaching;

test('Grid page test', async t =>{
    await t.navigateTo('http://automationpractice.com/')
    await gridPracticePage.clickButtonDress();
    await gridPracticePage.clickButtonGrid();
    await gridPracticePage.clickButtonAddCart();
    await t.debug();
})
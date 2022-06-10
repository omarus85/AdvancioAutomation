import { t } from 'testcafe'
import removeShoppingPracticePage from '../PO/removeShoppingPractice.po'

fixture`Main page`
    .page`http://automationpractice.com/`
    .disablePageCaching;

test('empty page test', async t => {
    await t.navigateTo('http://automationpractice.com/')
    await removeShoppingPracticePage.clickButtonDress();

    await removeShoppingPracticePage.clickButtonAddCart1();
    await removeShoppingPracticePage.clickButtonClose();

    await removeShoppingPracticePage.clickButtonAddCart2();
    await removeShoppingPracticePage.clickButtonClose();

    await removeShoppingPracticePage.hoverButtonCart();
    await removeShoppingPracticePage.removeButtonCart();
    await t.debug();
})
import { t } from 'testcafe'
import listPracticePage from '../PO/listPractice.po'

fixture `Main page`
    .page `http://automationpractice.com/`
    .disablePageCaching;

test('List page test', async t =>{
    await t.navigateTo('http://automationpractice.com/')
    await listPracticePage.clickButtonDress();
    await listPracticePage.clickButtonList();
    await listPracticePage.clickButtonAddCart();
    await t.debug();
})
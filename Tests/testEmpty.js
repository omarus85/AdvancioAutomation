import { t } from 'testcafe'
import emptyPracticePage from '../PO/emptyPractice.po'

fixture `Main page`
    .page `http://automationpractice.com/`
    .disablePageCaching;

test('empty page test', async t =>{
    await t.navigateTo('http://automationpractice.com/')
    await emptyPracticePage.clickButtonCart();
    await t.debug();
})
import { t } from 'testcafe'
import printPracticePage from '../PO/printPractice.po'

fixture `Main page`
    .page `http://automationpractice.com/`
    .disablePageCaching;

test('print page test', async t =>{
    await t.navigateTo('http://automationpractice.com/')
    await printPracticePage.typeSearchBox('printed');
    await printPracticePage.selectSummerDress();
    await t.debug();
})
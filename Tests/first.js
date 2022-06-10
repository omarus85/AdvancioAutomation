import { t } from 'testcafe'
import mainPage from '../PO/automationpractice.po.js'

fixture `Main page`
    .page `http://automationpractice.com/`
    .disablePageCaching;

test('Main page test', async t =>{
    await t.navigateTo('http://automationpractice.com/')
    await mainPage.clickButtonDress();
    await mainPage.clickButtonGrid();
    // await mainPage.clickButtonList();
    await mainPage.clickButtonAddCart();
    //await t.debug()
    // const cnnWindow = await t.getCurrentWindow();

    // await t.closeWindow(cnnWindow);
})
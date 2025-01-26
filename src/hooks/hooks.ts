import { chromium, Page, Browser, BrowserContext } from '@playwright/test'
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber'
import { pageFixture } from './pageFixture';
import { invokeBrowser } from '../utils/browsers';
let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {

    browser = await invokeBrowser()
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = await page;
    const response = await pageFixture.page.request.get("https://www.udacity.com/_next/data/6d8450b2-32e3-4f29-8ba1-0747c9a6de21_31ddfec1/default/catalog/all/any-price/any-school/Automation%20testing/any-difficulty/any-duration/any-type/most-popular/page-1.json");
    //   await sp.populateSkillSearch(searchString);
    console.log(response.body);
})

Before(async function ({ pickle }) {
    let scenarioName = pickle.name + pickle.id;
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = await page;
})

AfterAll(async function () {
    await pageFixture.page.close()
    await context.close()
})

After(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED) {
        const images = await pageFixture.page.screenshot({ path: `./test-result/screenshot/${pickle.name}.png`, type: 'png' })
        await this.attach(images, "image/png")
    }
})
import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import SearchPage from '../../pages/seachPg';
import {pageFixture} from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2); //2 mins
//const sp = new SearchPage(pageFixture.page);
Given('the application is loaded successfully', async function () {
    console.log()
    await pageFixture.page.goto('https://www.udacity.com/catalog');
});
When('user search for {string} in Skill Dropdown', async function (searchString) {
    await pageFixture.page.locator("//*[@id='accordion-button-:Riqksrlajl5t6:']").click();

    await pageFixture.page.locator("//*[@id=':R1bliqksrlajl5t6:']").fill(searchString);
    await pageFixture.page.locator("//*[@id=':R1bliqksrlajl5t6:']").press('Enter');
   
});

Then('user sees results matching the search term', async function () {
    console.log("Then");
});

Then('user fetch search results from the API', async function () {
    console.log("Then");
});



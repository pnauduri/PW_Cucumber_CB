import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import SearchPage from '../../pages/seachPg';
import {pageFixture} from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2); //2 mins
let  sp : SearchPage;
Given('the application is loaded successfully', async function () {
    console.log()
    await pageFixture.page.goto('https://www.udacity.com/catalog');
     sp = new SearchPage(pageFixture.page);
});
When('user search for {string} in Skill Dropdown', async function (searchString) {
   
    sp.populateSkillSearch(searchString);
   
});

Then('user sees results matching the search term', async function () {
    console.log("Then");
});

Then('user fetch search results from the API', async function () {
    console.log("Then");
});



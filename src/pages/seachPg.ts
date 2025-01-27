import { expect, Page } from "@playwright/test";
import PageWrapper from "../wrapper/PageWrapper";

export default class SearchPage {
    private base: PageWrapper;
    constructor(private page: Page) {
        this.base = new PageWrapper(page);
    }
    private Elements = {
        skillButton_loc: "//*[@id='accordion-button-:Riqksrlajl5t6:']",
        skillButton_label:"Skill",
        skillTextPanel_loc: "//*[@id='accordion-panel-:Riqksrlajl5t6:']/div/div/div[1]/div[2]",
        searchBox_loc: ""
    }

  
    async populateSkillSearch(searchTerm: string) {
       /* await this.page.getByLabel(this.Elements.skillButton_label).click();
        this.page.locator(this.Elements.skillButton_loc).fill(searchTerm);*/
     


         await this.page.locator("//*[@id='accordion-button-:Riqksrlajl5t6:']").click();
        
            await this.page.locator("//*[@id=':R1bliqksrlajl5t6:']").fill(searchTerm);
            await this.page.locator("//*[@id=':R1bliqksrlajl5t6:']").press('Enter');
            console.log("populating skill search box");
    }
}
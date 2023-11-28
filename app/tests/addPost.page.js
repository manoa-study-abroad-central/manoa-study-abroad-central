import { Selector } from 'testcafe';

class AddPostPage {
  constructor() {
    this.pageId = '#addpost-page';
    this.pageSelector = Selector(this.pageId);
    this.titleInput = Selector('#addpost-title');
    this.nameInput = Selector('#addpost-name');
    this.programSelect = Selector('#addpost-program');
    this.countryRegionSelect = Selector('#addpost-countryRegion');
    this.descriptionInput = Selector('#addpost-description');
    this.submitButton = Selector('#addpost-submit');
  }

  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async fillAndSubmitForm(testController, title, name, program, countryRegion, description) {
    await testController
      .typeText(this.titleInput, title)
      .typeText(this.nameInput, name)
      .click(this.programSelect)
      .click(Selector('option').withText(program))
      .click(this.countryRegionSelect)
      .click(Selector('option').withText(countryRegion))
      .typeText(this.descriptionInput, description)
      .click(this.submitButton);
  }
}

export const addPostPage = new AddPostPage();

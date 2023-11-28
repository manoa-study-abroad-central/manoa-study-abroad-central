import { Selector } from 'testcafe';

class ListProgramsPage {
  constructor() {
    this.pageId = '#listPrograms-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listProgramsPage = new ListProgramsPage();

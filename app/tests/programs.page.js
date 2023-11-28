import { Selector } from 'testcafe';

class ProgramsPage {
  constructor() {
    this.pageId = '#programs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const programsPage = new ProgramsPage();

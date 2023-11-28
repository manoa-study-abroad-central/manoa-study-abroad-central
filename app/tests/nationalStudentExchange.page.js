import { Selector } from 'testcafe';

class NationalStudentExchangePage {
  constructor() {
    this.pageId = '#national-student-exchange-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const nationalStudentExchangePage = new NationalStudentExchangePage();

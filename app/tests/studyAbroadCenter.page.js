import { Selector } from 'testcafe';

class StudyAbroadCenterPage {
  constructor() {
    this.pageId = '#study-abroad-center-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const studyAbroadCenterPage = new StudyAbroadCenterPage();

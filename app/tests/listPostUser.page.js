import { Selector } from 'testcafe';

class ListPostUserPage {
  constructor() {
    this.pageId = '#listPostUser-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const listPostUserPage = new ListPostUserPage();

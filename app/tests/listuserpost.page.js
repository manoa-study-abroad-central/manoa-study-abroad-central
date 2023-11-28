import { Selector } from 'testcafe';

class ListUserPage {
  constructor() {
    this.pageId = '#user-post-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Asserts that this page has at least 1 rows of stuff. */
  async hasTable(testController) {
    const rowCount = Selector('.card').count;
    await testController.expect(rowCount).gte(1); // greater than or equal to 1
  }
}

export const listUserPost = new ListUserPage();

import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#login-button');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#signup-button');
  }

  async gotoAddPostPage(testController) {
    await testController.click('#add-stuff-nav');
  }

  async gotoAdminHomePage(testController) {
    await testController.click('#admin-home-nav');
  }

  async gotoProgramsPage(testController) {
    await testController.click('#programs-nav');
  }

  async gotoListPostUserPage(testController) {
    await testController.click('#testimonials-nav');
  }

  async gotoUserPost(testController) {
    await testController.click('#testimonials-nav');
  }

  async gotoAdminPost(testController) {
    await testController.click('#admin-post-nav');
  }

  async gotoListProgramsPage(testController) {
    await testController.click('#list-programs-nav');
  }
}

export const navBar = new NavBar();

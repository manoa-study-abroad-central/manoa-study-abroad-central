import { Selector } from 'testcafe';
import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addPostPage } from './addPost.page';
import { adminHomePage } from './homePageAdmin.page';
import { programsPage } from './programs.page';
// eslint-disable-next-line no-unused-vars
import { nationalStudentExchangePage } from './nationalStudentExchange.page';
// eslint-disable-next-line no-unused-vars
import { studyAbroadCenterPage } from './studyAbroadCenter.page';
import { listAdminPost } from './listadminpost.page';
// eslint-disable-next-line no-unused-vars
import { listUserPost } from './listuserpost.page';
import { listProgramsPage } from './listPrograms.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the AddPost page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoAddPostPage(testController);
  await testController.expect(Selector('#addpost-page').exists).ok();
  await addPostPage.fillAndSubmitForm(
    testController,
    'Sample Title',
    'Sample Name',
    'Manoa International Exchange (MIX)',
    'Australia',
    'Sample Description',
  );
});

test('Test Programs page functionality', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoProgramsPage(testController);
  await programsPage.isDisplayed(testController);
  const programTypeSelect = Selector('#program-type-select');
  await testController.click(programTypeSelect);
  await testController.click(programTypeSelect.find('option').withText('Program'));
  const programSelect = Selector('#program-selection-select');
  await testController.click(programSelect);
  await testController.click(programSelect.find('option').withText('Study Abroad Center'));
  await testController.click('#search-programs-button');
});

test('Test that AdminHome page shows up', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(testController, adminCredentials.username);
  await navBar.gotoAdminHomePage(testController);
  await adminHomePage.isDisplayed(testController);
});

test('Test the UserPost page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoListPostUserPage(testController);
  await testController.expect(Selector('#listPostUser-page').exists).ok();
});

/*
 test('Test National Student Exchange page availability', async (testController) => {
  await testController.navigateTo('/NationalStudentExchange'); // Replace with the correct route
  await nationalStudentExchangePage.isDisplayed(testController);
});

test('Test Study Abroad Center page availability', async (testController) => {
  await testController.navigateTo('/StudyAbroadCenter');
  await studyAbroadCenterPage.isDisplayed(testController);
}); */

/* test('Test the UserPost page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoUserPost(testController);
  await listUserPost.isDisplayed(testController);
  await listUserPost.hasTable(testController);
}); */

test('Test the AdminPost page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoAdminPost(testController);
  await listAdminPost.isDisplayed(testController);
  await listAdminPost.hasTable(testController);
});

test('Test the ListPrograms page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.gotoListProgramsPage(testController);
  await listProgramsPage.isDisplayed(testController);
});

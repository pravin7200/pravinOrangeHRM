const { test: base } = require('@playwright/test');
const LoginPage = require('../Pages/loginPage').default;
const PIMPage = require('../Pages/PIMPage').default;

exports.test = base.extend({
 loginPage: async ({ page }, use) => {
   const loginPage = new LoginPage(page);
   await use(loginPage);
 },

 pimPage: async ({ page }, use) => {
  const pimPage = new PIMPage(page);
  await use(pimPage);
},



});
const { test } = require('../fixture/baseFixture');

test('User should add a new employee successfully', async ({ loginPage, pimPage }) => {
  await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await pimPage.navigateToAddEmployee();
  await pimPage.addEmployee('POU', 'CENA', 'MO');
});   

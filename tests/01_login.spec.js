
const { test} = require('../fixture/baseFixture');


test('User should login successfully', async ({ loginPage }) => {
 await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await loginPage.login('Admin', 'admin123');
 
});

const BasePage = require('../Pages/BasePage'); 
const { expect } = require('@playwright/test');

class LoginPage extends BasePage{
  constructor(page) {
    super();
    this.page = page;

    this.UsernameInput= '//input[@name="username"]';
    this.passwordInput='//input[@name="password"]';
    this.signInButton = '//button[@type="submit"]';
    this.loginSuccess ='https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  }
  async login(username,password){
  await this.type(this.UsernameInput,username);
  await this.type(this.passwordInput,password)
  await this.click(this.signInButton);
  await expect(this.page).toHaveURL(this.loginSuccess);
 
  }
}

export default LoginPage;
// Pages/PIMPage.js
class PIMPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('input[name="firstName"]');
      this.middleNameInput = page.locator('input[name="middleName"]');
      this.lastNameInput = page.locator('input[name="lastName"]');
      //this.employeeIdInput = page.locator('input[name="employeeId"]');
      this.createLoginDetailsToggle = page.locator('.oxd-switch-input'); 
      this.saveButton = page.locator('button:has-text("Save")');
      this.cancelButton = page.locator('button:has-text("Cancel")');
    }
  
    async addEmployee(firstName, middleName, lastName) {
      await this.firstNameInput.fill(firstName);
      await this.middleNameInput.fill(middleName);
      await this.lastNameInput.fill(lastName);
    
      await this.saveButton.click();
    }
    async navigateToAddEmployee() {
        await this.page.click('text=PIM');
        await this.page.click('text=Add Employee');
      }
      
  }
  
  export default PIMPage;
  
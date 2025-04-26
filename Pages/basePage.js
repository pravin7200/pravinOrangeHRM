
class BasePage {
       constructor(page){
        this.page=page;
       }

       async navigate(url){
        await this.page.goto(url)
       }

       async click(selector){
        await this.page.click(selector)
       }
       
       async type(selector,text){
       await this.page.fill(selector,text)

       }
}

module.exports= BasePage;
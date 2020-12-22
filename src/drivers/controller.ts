import { Builder, ThenableWebDriver, WebElement, By, WebElementPromise, WebDriver, until } from 'selenium-webdriver';
const chromeDriver = require("../drivers/chrome");
export class Browser {
  private driver: ThenableWebDriver;
  public constructor(private browserName: string) {
    jest.setTimeout(60000);
    this.driver = chromeDriver();//new Builder().forBrowser(browserName).build();
  }

  public async navigate(url: string): Promise<void> {
    await this.driver.navigate().to(url);
  }

  private async findElement(locator: By) {
    await this.driver.wait(until.elementsLocated(locator), 30000);
    return await this.driver.findElement(locator);
  }

  private async findElements(locator: By): Promise<WebElement[]> {
    await this.driver.wait(until.elementLocated(locator), 30000);
    return await this.driver.findElements(locator);
  }

  public async getCountOfElements(locator: By): Promise<Number> {
    let num:Number;
    await this.driver.wait(until.elementsLocated(locator), 30000)
    .then((elements)=>{
      if(elements === undefined){
        num =  0;
      } else{
        num = elements.length;
      }
    }, 
    (error)=>{
        num = 0
    });
    return num;
    // return await this.findElements(locator).then((elements)=> {
    //   return elements.length
    // });
  }

  public async getText(locator: By) {
    let str:string;
    str = "";
    await this.findElement(locator).then(async (element)=>{
      await element.getText().then((text)=>{
        console.log('TEXT received: '+ text);
        str = text;
      });
    });
    return str;
  }

  public async click(locator: By) {
    return await this.findElement(locator).then(async (element) => {
      await element.click();
    });
  }

  public async type(locator: By, input: string) {
    return await this.findElement(locator).then(async (element) => {
      await element.sendKeys(input);
    });
  }

  public async quit(): Promise<void> {
    await this.driver.quit();
  }

  public async getTitle() {
    return await this.driver.getTitle();
  }


}
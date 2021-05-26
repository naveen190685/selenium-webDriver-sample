import { Browser } from "../drivers/controller";
const { WebDriver, By } = require("selenium-webdriver");
const chromeDriver = require("../drivers/chrome");
import { Login } from "../pages/login";
import { ACCOUNT_FORM } from "../pages/createAccountForm";
import { UTIL } from "../util/util"
import { error } from "selenium-webdriver";
describe("SELENIUM_TYPESCRIPT_SAMPLE - Create User Account Tests", () => {
  let I;
  beforeAll(() => {
    I = new Browser('chrome');
  });

  afterAll(async () => {
    await I.quit();
  });

  test("it loads authentication page", async (done) => {
    await I.navigate(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    await I.getTitle().then(async (title) => {
      await expect(title).toBe("Login - My Store");
    });
    done();
  });

  test("Check invalid Email", async (done) => {
    await I.click(Login.CREATE_ACCOUNT).then(async () => {
      await I.getCountOfElements(ACCOUNT_FORM.TITLE_MR).then(async (num) => {
        expect(await I.getText(Login.ERROR_CREATE_ACCOUNT) === "Invalid email address.")
          .toBeTruthy();
      })
    });
    done();
  });

  test("Create Account", async (done) => {
    await I.type(Login.EMAIL_ACCOUNT_CREATION, UTIL.makeid());
    await I.click(Login.CREATE_ACCOUNT).then(async () => {
      await I.getCountOfElements(ACCOUNT_FORM.TITLE_MR).then(async (num) => {
        expect(Number(num)).toBeGreaterThan(0);
      })
    });
    done();
  });

  test("Check create account error with form without some fields missed", async (done) => {
    await I.click(ACCOUNT_FORM.TITLE_MR);
    await I.type(ACCOUNT_FORM.FIRST_NAME, "naveen");
    await I.type(ACCOUNT_FORM.LAST_NAME, 'kumar');
    await I.type(ACCOUNT_FORM.PASSWORD, 'abcde@344#');
    await I.type(ACCOUNT_FORM.DAYS_DOB, '5');
    await I.type(ACCOUNT_FORM.MONTH_DOB, 'May');
    await I.type(ACCOUNT_FORM.COUNTRY, 'united states');
    await I.type(ACCOUNT_FORM.ADDITIONAL_INFORMATION, 'additional info');
    await I.type(ACCOUNT_FORM.PHONE_NO, '8564637986');
    await I.type(ACCOUNT_FORM.MOBILE_NO, '6644772957');
    await I.type(ACCOUNT_FORM.ALIAS_ADDRESS, 'My alias');
    await I.click(ACCOUNT_FORM.REGISTER).then(async () => {
      await I.getCountOfElements(ACCOUNT_FORM.ERROR).then(async (num) => {
        expect(Number(num)).toBeGreaterThan(0);
        console.log(await I.getText(ACCOUNT_FORM.ERROR));

      })
    })
    done();
  });

  test("Check create account with errors rectified", async (done) => {
    await I.type(ACCOUNT_FORM.YEAR_DOB, '1992');
    await I.click(ACCOUNT_FORM.NEWS_LETTER_YES);
    await I.click(ACCOUNT_FORM.RECEIVE_SPECIAL_OFFER);
    await I.type(ACCOUNT_FORM.FIRST_NAME, 'Nav');
    await I.type(ACCOUNT_FORM.LAST_NAME, 'Kum');
    await I.type(ACCOUNT_FORM.COMPANY_ADDRESS, 'Boriwali gaon');
    await I.type(ACCOUNT_FORM.ADDRESS_1, 'address 1');
    await I.type(ACCOUNT_FORM.PASSWORD, 'abcde@344#');
    await I.type(ACCOUNT_FORM.CITY, 'Noida');
    await I.type(ACCOUNT_FORM.STATE, 'Virginia');
    await I.type(ACCOUNT_FORM.ZIPCODE, '65449')
    await I.click(ACCOUNT_FORM.REGISTER).then(async () => {
      await I.getCountOfElements(ACCOUNT_FORM.ERROR).then(async (num) => {
        expect(Number(num) === 0).toBeTruthy();
        console.log('Form submitted successfully');

      })
    })
    done();
  });
});

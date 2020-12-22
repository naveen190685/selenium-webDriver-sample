import {By} from 'selenium-webdriver';

export class ACCOUNT_FORM{
    static TITLE_MR = By.id('id_gender1');
    static TITLE_MRS = By.id('id_gender2');
    static FIRST_NAME = By.id("customer_firstname");
    static LAST_NAME =  By.id("customer_lastname");
    static EMAIL_ID = By.id("email");
    static PASSWORD = By.id("passwd");
    static ERROR_CREATE_ACCOUNT = By.id("create_account_error");
    static DAYS_DOB = By.id("days");
    static MONTH_DOB = By.id("months");
    static YEAR_DOB = By.id("years");
    static NEWS_LETTER_YES = By.id('newsletter');
    static RECEIVE_SPECIAL_OFFER = By.id('optin');
    static FIRST_NAME_ADDRESS = By.id('firstname');
    static LAST_NAME_ADDRESS = By.id('lastname');
    static COMPANY_ADDRESS = By.id('company');
    static ADDRESS_1 = By.id('address1');
    static ADDRESS_2 = By.id('address2');
    static CITY = By.id('city');
    static STATE = By.id('id_state');
    static ZIPCODE = By.id('postcode');
    static COUNTRY = By.id("id_country");
    static ADDITIONAL_INFORMATION = By.id('other');
    static PHONE_NO = By.id('phone');
    static MOBILE_NO = By.id('phone_mobile');
    static ALIAS_ADDRESS = By.id('alias');
    static REGISTER = By.id('submitAccount');
    static ERROR = By.xpath("//div[@class = 'alert alert-danger']");
}
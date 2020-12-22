import {By} from 'selenium-webdriver';

export class Login{
    static EMAIL = By.id('email');
    static PASSWORD = By.id('passwd');
    static SUBMIT = By.id("SubmitLogin");

    static EMAIL_ACCOUNT_CREATION = By.id("email_create");
    static CREATE_ACCOUNT = By.id("SubmitCreate");
    static ERROR_CREATE_ACCOUNT = By.id("create_account_error");
}
import faker from "faker";
import puppeteer from "puppeteer";

const APP = "https://www.int.simplycreditinc.com/staging/manage/#signup";
const CREDS = require('../creds');

let page;
let browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  });
  afterAll(() => {
    browser.close();
  });

  describe("Signup form", () => {
    test("lead can submit a signup request", async () => {
    await (page.goto(APP,{
        timeout: 0
    }));
    const INVITE_CODE_SELECTOR = '#invite_code';
    const EMAIL_SELECTOR = '#email' 
    const CONFIRM_EMAIL_SELECTOR = '#confirm-email'
    const PASSWORD_SELECTOR = '#password'
    const CONFIRM_PASSWORD_SELECTOR = '#confirm-password'
    const FIRST_NAME_SELECTOR = '#first-name'
    const LAST_NAME_SELECTOR = '#last-name'
    const PHONE_SELECTOR = '#phone'
    const STREET_SELECTOR = '#street'
    const CITY_SELECTOR = '#city'
    const STATE_SELECTOR = '#state'
    const ZIP_SELECTOR = '#zip'
    const SSN_SELECTOR = '#ssn'
    const DOB_MONTH_SELECTOR = '#dob-month'
    const DOB_DAY_SELECTOR = '#dob-day'
    const DOB_YEAR_SELECTOR = '#dob-year'
    const INCOME_SELECTOR = '#income'
    const MORTGAGE_SELECTOR = '#mortgage'
    const CHECK_BOX_SELECTOR = '#terms'
    const BUTTON_SELECTOR = '#signup-submit'
    const FORM_SELECTOR = '#signup-form'

    await (page.click(INVITE_CODE_SELECTOR));
    await (page.keyboard.type(CREDS.invite_code));

    await (page.click(EMAIL_SELECTOR));
    await (page.keyboard.type(CREDS.email));

    await (page.click(CONFIRM_EMAIL_SELECTOR));
    await (page.keyboard.type(CREDS.email));

    await (page.click(PASSWORD_SELECTOR));
    await (page.keyboard.type(CREDS.password));

    await (page.click(CONFIRM_PASSWORD_SELECTOR));
    await (page.keyboard.type(CREDS.password));

    await (page.click(FIRST_NAME_SELECTOR));
    await (page.keyboard.type(CREDS.first_name));

    await (page.click(LAST_NAME_SELECTOR));
    await (page.keyboard.type(CREDS.last_name));
    
    await (page.click(PHONE_SELECTOR));
    await (page.keyboard.type(CREDS.phone));
    
    await (page.click(STREET_SELECTOR));
    await (page.keyboard.type(CREDS.street));

    await (page.click(CITY_SELECTOR));
    await (page.keyboard.type(CREDS.city));

    await (page.click(STATE_SELECTOR));
    await (page.keyboard.type(CREDS.state));

    await (page.click(ZIP_SELECTOR));
    await (page.keyboard.type(CREDS.zip));
    
    await (page.click(SSN_SELECTOR));
    await (page.keyboard.type(CREDS.ssn));
    
    await (page.click(DOB_MONTH_SELECTOR));
    await (page.keyboard.type(CREDS.dob_month));

    await (page.click(DOB_DAY_SELECTOR));
    await (page.keyboard.type(CREDS.dob_day));

    await (page.click(DOB_YEAR_SELECTOR));
    await (page.keyboard.type(CREDS.dob_year));

    await (page.click(INCOME_SELECTOR));
    await (page.keyboard.type(CREDS.income));
    
    await (page.click(MORTGAGE_SELECTOR));
    await (page.keyboard.type(CREDS.mortgage));

    await (page.click(CHECK_BOX_SELECTOR));

    await (page.click(BUTTON_SELECTOR));
    
    await page.waitForSelector(".alert");
    }, 1600000);

    describe("Testing the frontend", () => {
      test("assert that title is correct", async () => {
        const title = await page.title();
        expect(title).toBe(
          "SimplyCredit, Inc."
        );
      });
    });
  });
const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_5 = async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  var email = "qoobi786@gmail.com";
  var password = "123456789";

  try {
    await driver.get("http://localhost:3000/login");
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[2]/div/div/input`)
      )
      .sendKeys(email, Key.RETURN);
    await driver
      .findElement(By.xpath(`//*[@id="outlined-adornment-password"]`))
      .sendKeys(password, Key.RETURN);
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[4]/button/span[1]`)
      )
      .click();
    await driver.wait(
      until.elementLocated(By.xpath(`//*[@id="root"]/div/div[2]/div/div/h2`)),
      10000
    );

    // To Click My Job....
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[1]/header/div/button[3]/span[1]`)
      )
      .click();

    await driver.sleep(5000);
    // To Click View Application
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/button/span[1]`
        )
      )
      .click();
    await driver.sleep(5000);
    // To Click Confirm Shortlist Employee
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[3]/div/div/div/div[3]/div[2]/div[1]/button/span[1]`
        )
      )
      .click();
    console.log("Test Case-5 (Employee Shortlisted) Passed.");
  } catch (error) {
    console.log("Error : ", error);
    console.log("Test Case-5 (Employee Shortlisted) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase_5 };

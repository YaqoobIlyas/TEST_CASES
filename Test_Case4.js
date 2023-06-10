const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_4 = async () => {
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
    // To Click Delete Job
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div/div[2]/div[3]/button/span[1]`
        )
      )
      .click();
    await driver.sleep(5000);
    // To Click Confirm Delete Job
    await driver
      .findElement(
        By.xpath(`/html/body/div[2]/div[3]/div/div[1]/button/span[1]`)
      )
      .click();
    console.log("Test Case-4 (JOB Deleted) Passed.");
  } catch (error) {
    console.log("Error : ", error);
    console.log("Test Case-4 (JOB Deleted) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase_4 };

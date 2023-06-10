const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_1 = async () => {
  var email = "qoobi786@gmail.com";
  var password = "123456789";
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
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
    console.log("Test Case-1 (LOGIN) passed.");
  } catch (error) {
    console.log("Test Case-1 (LOGIN) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase_1 };

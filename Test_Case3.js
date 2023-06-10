const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_3 = async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  var email = "qoobi786@gmail.com";
  var password = "123456789";
  var title = "Mern developer";
  var skill = "Mern";
  var salary = "1000";
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
    // To Click add Job....
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[1]/header/div/button[2]/span[1]`)
      )
      .click();

    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div/input`
        )
      )
      .sendKeys(title, Key.RETURN);
    // setting skill
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[2]/div/div/div/div[2]/div/div/div/input`
        )
      )
      .sendKeys(skill, Key.RETURN);
    // setting salary
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div[2]/div/div/div/div[5]/div/div/input`
        )
      )
      .sendKeys(salary, Key.RETURN);
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div[2]/div/div/button/span[1]`)
      )
      .click();
    console.log("Test Case-3 (ADD JOBS) Passed.");
  } catch (error) {
    console.log("Test Case-3 (ADD JOBS) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase_3 };

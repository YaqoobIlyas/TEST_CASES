const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase_2 = async () => {
  var username = "Ali";
  var email = "ali@gmail.com";
  var password = "123456789";
  var boi = "comsats";
  var start = "2019";
  var end = "2023";
  var skill = "mern ";
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get("http://localhost:3000/signup");
    await driver.findElement(
      By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[2]/div/div/div`)
    );
    //await driver.sleep(5000);
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[3]/div/div/input`)
      )
      .sendKeys(username, Key.RETURN);
    console.log("hi2");
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[4]/div/div/input`)
      )
      .sendKeys(email, Key.RETURN);
    console.log("hi3");
    await driver
      .findElement(By.xpath(`//*[@id="outlined-adornment-password"]`))
      .sendKeys(password, Key.RETURN);
    console.log("hi4");
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div/div[6]/div[1]/div/div/input`
        )
      )
      .sendKeys(boi, Key.RETURN);
    console.log("hi5");
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div/div[6]/div[2]/div/div/input`
        )
      )
      .sendKeys(start, Key.RETURN);
    console.log("hi6");
    await driver
      .findElement(
        By.xpath(
          `//*[@id="root"]/div/div[2]/div/div/div[6]/div[3]/div/div/input`
        )
      )
      .sendKeys(end, Key.RETURN);

    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[8]/div/div/div/input`)
      )
      .sendKeys(skill, Key.RETURN);
    console.log("hi6");
    await driver
      .findElement(
        By.xpath(`//*[@id="root"]/div/div[2]/div/div/div[11]/button/span[1]`)
      )
      .click();
    console.log("hi7");
    await driver.wait(
      until.elementLocated(By.xpath(`//*[@id="root"]/div/div[2]/div/div/h2`)),
      10000
    );
    console.log("Test Case-2 (REGISTER) passed.");
  } catch (error) {
    console.log("Error: ", error);
    console.log("Test Case-2 (REGISTER) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase_2 };

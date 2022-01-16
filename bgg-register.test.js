const { Builder, Capabilities, By } = require("selenium-webdriver") 

jest.setTimeout(30000)

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("https://boardgamegeek.com")
   
})
describe ("Boardgame Geek Tests", () => {

    it("Can sign up" , async () => {

        let joinButtonBox = await driver.findElement(By.xpath("/html/body/gg-app/div/gg-header/header/nav/div/div[1]/div/div[2]/gg-menu-nav-nouser/ul/li[2]/a"))

        await joinButtonBox.click()

        let usernameBox = await driver.findElement(By.xpath('/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/div/form/div[1]/input'))

        await usernameBox.sendKeys("John_Q_Tester")

        let emailBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/div/form/div[2]/input"))

        await emailBox.sendKeys("james.m.proctor+bgg01@gmail.com")

        let passwordBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/div/form/div[3]/input"))

        await passwordBox.sendKeys("JJJ.pass.2222")

        let createAccountBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/div/form/button"))

        await createAccountBox.click()

        //let firstnameBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/gg-join-settings/form/div[1]/div/div[1]/input"))

        // await firstnameBox.sendKeys("Test")

        // let secondnameBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/gg-join-settings/form/div[1]/div/div[2]/input"))

        // await secondnameBox.sendKeys("Tester")

        // let saveSettingsBox = await driver.findElement(By.xpath("/html/body/gg-app/div/main/div/div/gg-join-container/gg-join/div/gg-join-settings/form/footer/div/button[2]"))

        // await saveSettingsBox.click()
    })   

        
})
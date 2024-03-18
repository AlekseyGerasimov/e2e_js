import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('https://lala.bet/');
  await page.goto('https://lala.bet/?tab=sport');
  // Check Title
  await expect(page).toHaveTitle(/Lala/);
  // Check Cookies notice
  await expect(page.locator('div.t-cookies-modal')).toBeVisible();
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('alex.ger+' + Date.now().toString() + '@truelabel.io');
  await page.locator('input[type="email"]').press('Tab');
  await page.locator('input[type="password"]').fill('Check211');
  await page.getByText('Currency BRL').click();
  await page.getByText('EUR Euro').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox').first().fill('A');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Aaaa');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Bbbb');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Brazilia');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Street 13');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('.t-date-dropdown__wrapper > div > .t-select__choose').first().click();
  await page.locator('.t-dropdown__item-option').first().click();
  await page.locator('div:nth-child(2) > .t-select__choose').click();
  await page.locator('.t-dropdown__item-option').first().click();
  await page.locator('div:nth-child(3) > .t-select__choose').click();
  await page.locator('.t-dropdown__item-option').first().click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('+55-75-78392-93999');
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();
  await page.waitForTimeout(5000);
  const signupButton = await page.$('text=Sign up');
  // check SignUp button still showed
  await signupButton?.waitForElementState("enabled");
});
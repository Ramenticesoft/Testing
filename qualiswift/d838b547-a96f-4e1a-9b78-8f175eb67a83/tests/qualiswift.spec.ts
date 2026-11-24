import { test, expect, Page } from '@playwright/test';

class TextBoxPage {
  readonly page: Page;
  readonly fullNameInput = '#userName';
  readonly emailInput = '#userEmail';
  readonly currentAddressInput = '#currentAddress';
  readonly permanentAddressInput = '#permanentAddress';
  readonly submitButton = '#submit';
  readonly outputSection = '#output';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/text-box');
  }

  async fillFullName(name: string) {
    await this.page.fill(this.fullNameInput, name);
  }

  async fillEmail(email: string) {
    await this.page.fill(this.emailInput, email);
  }

  async fillCurrentAddress(address: string) {
    await this.page.fill(this.currentAddressInput, address);
  }

  async fillPermanentAddress(address: string) {
    await this.page.fill(this.permanentAddressInput, address);
  }

  async submit() {
    // Using click with force in case button is covered or off screen
    await this.page.click(this.submitButton, { force: true });
  }

  async getOutputText() {
    await this.page.waitForSelector(this.outputSection, { state: 'visible' });
    return this.page.textContent(this.outputSection);
  }
}

test.describe('1. Verify form submission on Text Box page', () => {
  test('1. Verify form submission on Text Box page', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);

    // Preconditions: User is on the Text Box page
    await textBoxPage.navigate();

    // Enter valid data
    const fullName = 'John Doe';
    const email = 'john.doe@example.com';
    const currentAddress = '123 Main St';
    const permanentAddress = '456 Park Ave';

    await textBoxPage.fillFullName(fullName);
    await textBoxPage.fillEmail(email);
    await textBoxPage.fillCurrentAddress(currentAddress);
    await textBoxPage.fillPermanentAddress(permanentAddress);

    // Submit the form
    await textBoxPage.submit();

    // Verify output
    const outputText = await textBoxPage.getOutputText();
    expect(outputText).toContain(fullName);
    expect(outputText).toContain(email);
    expect(outputText).toContain(currentAddress);
    expect(outputText).toContain(permanentAddress);
  });
});

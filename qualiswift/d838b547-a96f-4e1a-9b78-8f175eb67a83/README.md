# Qualiswift Playwright TypeScript Tests

This test suite validates the Text Box form submission on the Demo QA website.

## Setup

1. Ensure Node.js is installed.
2. Run `npm install` to install dependencies including Playwright.

## Running tests

Set the environment variable `BASE_URL` to the base URL of the application under test if different from default.

Run tests with:
```
npx playwright test
```

Artifacts such as screenshots, videos, and traces are collected only on test failure.

## Structure

- `tests/qualiswift.spec.ts`: Contains the test and the Page Object Model (POM) for the Text Box page.
- `playwright.config.ts`: Playwright configuration with baseURL from env `BASE_URL` and failure artifact retention.

## Notes
- Tests use environment variable aliases for credentials and do not hardcode sensitive data.
- The test currently covers the form submission case `TC-001` from the approved plan.
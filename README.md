=======
🚀 **Automated testing suite and QA framework for the Conduit (RealWorld) application.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Test Automation](https://img.shields.io/badge/tests-automated-success.svg)]()

## Overview & Features

The **Conduit Test Project** is a comprehensive test automation framework built to validate the core functionalities of the Conduit application (a Medium.com clone). It ensures quality and reliability across the platform through structured automated tests.

- **End-to-End (E2E) Testing:** Automated UI flows for user registration, article creation, commenting, and profile management.
- **API Validation:** Direct endpoint testing for CRUD operations, authentication, and data integrity.
- **Page Object Model (POM):** Clean, maintainable, and reusable testing architecture.
- **Detailed Reporting:** Generates comprehensive test execution reports for quick debugging and QA sign-offs.

## Tech Stack

- **Automation Framework:** Playwright / Selenium _(Update based on your exact implementation)_
- **Language:** JavaScript / TypeScript
- **Test Runner:** Mocha / Jest / Playwright Test
- **API Testing:** Supertest / Axios
- **Reporting:** Allure / HTML Reporter

## Architecture

```text
├── src/
│   ├── pages/          # Page Object Model (POM) classes
│   ├── api/            # API helper functions and endpoint definitions
│   ├── tests/          # E2E and API test suites
│   ├── utils/          # Helper utilities and data generators
├── .env.example        # Environment variable template
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Jernickjoshi/Conduit-test-project.git
    cd Conduit-test-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    ```bash
    cp .env.example .env
    ```
    _Open `.env` and add your target Conduit application URL and test user credentials._

## Usage & Testing

Run the automated test suites using the following commands:

**Run all tests:**

```bash
npm test
```

**Run UI / E2E tests only:**

```bash
npm run test:e2e
```

**Run API tests only:**

```bash
npm run test:api
```

**View Test Report:**

```bash
npm run report
```

## API / Configuration Reference

Key environment variables required in the `.env` file:

| Variable             | Description                             | Default                                  |
| :------------------- | :-------------------------------------- | :--------------------------------------- |
| `BASE_URL`           | The base URL of the Conduit application | `https://conduit.productionready.io`     |
| `API_URL`            | The base URL for the backend API        | `https://conduit.productionready.io/api` |
| `TEST_USER_EMAIL`    | Valid email for login tests             | `test@example.com`                       |
| `TEST_USER_PASSWORD` | Password for the test user              | `password123`                            |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-test-suite`)
3. Commit your changes (`git commit -m 'Add tests for article pagination'`)
4. Push to the branch (`git push origin feature/new-test-suite`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

> > > > > > > dbace02da6d0863bb00da59084b38795d994a5ac

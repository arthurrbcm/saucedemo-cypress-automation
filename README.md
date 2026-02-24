## 🚀 SauceDemo – Test Automation Framework

End-to-end test automation framework for the SauceDemo web application built with Cypress, following scalable engineering practices and modern test automation principles.

## 📌 Project Overview

This project was designed to simulate a real-world QA automation scenario, focusing on:

Test reliability

Maintainability

Scalability

Clear separation of concerns

Readable and reusable code structure

The framework follows the Page Object Model (POM) pattern and applies clean architecture principles to ensure long-term maintainability.

## 🏗 Architecture & Design Decisions
🔹 Why Page Object Model?

The Page Object Model was chosen to:

Isolate UI selectors

Improve test readability

Reduce duplication

Simplify maintenance

Encourage single responsibility

🔹 Folder Structure
cypress/
├── e2e/            → Test specifications
├── pages/          → Page Objects (UI abstraction layer)
├── fixtures/       → Test data
├── support/        → Custom commands and global configuration
🔹 Design Principles Applied

Separation of concerns

Reusability

Clear test scenarios

Independent test execution

Scalable structure for future expansion

## 🧪 Test Strategy

The test suite covers core business flows of the application.

## 🔐 Authentication

Valid login

Invalid login

Error message validation

URL and state validation after login

## 🛒 Inventory & Cart

Product listing validation

Add product to cart

Remove product from cart

Cart state persistence validation

## 🔎 Validation Strategy

Tests validate:

DOM elements visibility and content

Business rules (cart behavior)

URL changes

Application state consistency

Assertions are designed to ensure functional correctness rather than only visual validation.

## 🛠 Tech Stack

Cypress

JavaScript (ES6+)

Page Object Model (POM)

## ▶️ How to Run the Project

Install dependencies:

```bash
npm install
npx cypress open


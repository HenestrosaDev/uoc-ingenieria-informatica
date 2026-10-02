# Testplan Plugin

[<img src="https://allurereport.org/public/img/allure-report.svg" height="85px" alt="Allure Report logo" align="right" />](https://allurereport.org "Allure Report")

- Learn more about Allure Report at https://allurereport.org
- 📚 [Documentation](https://allurereport.org/docs/) – discover official documentation for Allure Report
- ❓ [Questions and Support](https://github.com/orgs/allure-framework/discussions/categories/questions-support) – get help from the team and community
- 📢 [Official announcements](https://github.com/orgs/allure-framework/discussions/categories/announcements) – be in touch with the latest updates
- 💬 [General Discussion ](https://github.com/orgs/allure-framework/discussions/categories/general-discussion) – engage in casual conversations, share insights and ideas with the community

---

## Overview

The plugin generates Allure Testplan file which can be used by Allure integrations to define which tests should be executed.

## Install

Use your favorite package manager to install the package:

```shell
npm add @allurereport/plugin-testplan
yarn add @allurereport/plugin-testplan
pnpm add @allurereport/plugin-testplan
```

Then, add the plugin to the Allure configuration file:

```diff
import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
+    testplan: {
+      options: {
+      },
+    },
  },
});
```

## Options

The plugin accepts the following options:

| Option     | Description                                                            | Type                              | Default                                    |
|------------|------------------------------------------------------------------------|-----------------------------------|--------------------------------------------|
| `fileName` | Testplan filename                                                      | `string`                          | `testplan.json`                            |
| `filter`   | Function that filters which Test Results should be present in the file | `(result: TestResult) => boolean` | Only unsuccessful tests appear in the file |

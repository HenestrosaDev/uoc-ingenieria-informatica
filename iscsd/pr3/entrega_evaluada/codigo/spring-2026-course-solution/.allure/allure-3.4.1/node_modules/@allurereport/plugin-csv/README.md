# CSV Plugin

[<img src="https://allurereport.org/public/img/allure-report.svg" height="85px" alt="Allure Report logo" align="right" />](https://allurereport.org "Allure Report")

- Learn more about Allure Report at https://allurereport.org
- 📚 [Documentation](https://allurereport.org/docs/) – discover official documentation for Allure Report
- ❓ [Questions and Support](https://github.com/orgs/allure-framework/discussions/categories/questions-support) – get help from the team and community
- 📢 [Official announcements](https://github.com/orgs/allure-framework/discussions/categories/announcements) – be in touch with the latest updates
- 💬 [General Discussion ](https://github.com/orgs/allure-framework/discussions/categories/general-discussion) – engage in casual conversations, share insights and ideas with the community

---

## Overview

This plugin generates the Allure Report in CSV file format.

## Install

Use your favorite package manager to install the package:

```shell
npm add @allurereport/plugin-csv
yarn add @allurereport/plugin-csv
pnpm add @allurereport/plugin-csv
```

Then, add the plugin to the Allure configuration file:

```diff
import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
+    csv: {
+      options: {
+        fileName: "my-report.csv",
+      },
+    },
  },
});
```

## Options

The plugin accepts the following options:

| Option     | Description                     | Type                                                                              | Default             |
|------------|---------------------------------|-----------------------------------------------------------------------------------|---------------------|
| `fileName` | Name of the report file         | `string`                                                                          | `allure-report.csv` |
| `fields`   | Fields to include in the report | `{ header: string; accessor: keyof T \| ((result: T) => string \| undefined) }[]` | All fields          |
| `sort`     | Sorting function                | `(a: T, b: T) => number`                                                          | Default order       |
| `filter`   | Filtering function              | `(a: T) => boolean`                                                               | No filtering        |


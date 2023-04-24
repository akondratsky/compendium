# Compendium 

Welcome to Compendium!

This project is an attempt-in-progress to collect and systematize the most popular boilerplates and code generators which may speed up front-end developers. The website is deployed on GitHub pages:

https://akondratsky.github.io/compendium/

Just a few templates were added, but much more will be there soon! 

## How to Contribute

All the data is hardcoded and placed two files under `src/data` folder:

- `technologies.csv` contains list of technologies and used to create filtering options. Has two headers, unique ID and label which is visible value to be rendered in filter dropdown.
- `boilerplates.csv` contains list of boilerplates. Has a few columns: unique name, description, usage, website and git (links) and technologies

Editing of CSV files might be convenient with any table processors or any other tools like [Edit CSV](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv) extension for vscode.


### Rules for technologies record

Next rules are forced by tests and must be followed:

1. Name should be non-empty
2. Name should be unique
3. Name should be in lowercase
4. Label is optional (if label is empty, name is used)

### Rules for boilerplate record

Each boilerplate record:

1. Contains at least one technology
2. Contains only technologies out of the `technologies.csv` file
3. Has unique description. _It is important to have good description, please follow this rule._
4. Has non-empty name
5. Has unique combination of name and version
6. Must have version if its name is not unique
7. Contains non-empty `description` and `usage` columns
8. Contains valid URLs in `website` and `git` columns, or contains nothing


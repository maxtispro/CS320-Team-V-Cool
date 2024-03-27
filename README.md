# CS320-Team-V-Cool
A Cool Team

# Contents
1. [Setup Environment](#setup-environment)
2. [Installing Modules](#installing-modules)


# Setup Environment
After cloning this repository, there are a few things to do before the code-base will run:
1. Run `npm install` or `npm i` to install required modules
2. Run `npm test` or `npm t` to run all test suites
3. Run `npm start` to run everything
**Note:** To run additional scripts you must use the format `npm run <script-name>`
**Note 2:** `npm run start:2` is a script using the *ts-node/esm* loader but it spits out an annoying "experimental loader warning" which I tried to fix but there is **NO Fix**. Only use this script if things start breaking with the original start script.
Additional scripts can be found in the "package.json" file of the root project directory.


# Installing Modules
Make sure to install new modules using the format `npm i -D <module-name>` or similarly `npm i --save-dev <module-name>`. This just makes sure the module is recorded in the "package.json" file since locally installed modules are ignored by Git. Also make sure to run `npm i` after merges and pull requests in case someone else has added a new module to the repo.
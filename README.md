# CSE 110 Group 24 - Bullet Journal Project

## Table of Contents

[Overview](#overview)  
[Toki Journal](#toki-journal)  
[Local Development](#local-development)  
[Build and Deployment](#build-and-deployment)  
[Testing](#testing)  
[Linter](#linter)   
[Documentation](#documentation)  

## Overview

[Team Page](./admin/team.md)

Bullet journaling organizes scheduling, reminders, to-do lists, brainstorming, and other organizational tasks into a single notebook.

The core utilities of bullet journals are:
- an **index** (points to where information on different topics is located)
- **rapid logging** (using symbols to simplify, abbreviate and organize information)
- **logs** (to-do lists)
- **collections** (organizing information by content)
- **migration** (periodically updating lists to new lists)

## Toki Journal

Our product, Toki Journal, took these core features and developed an application for students focused around the theme of personalization. Further details on the features and functionality of our product can be found [here](admin/onboard.md).

You can also see more about our product and process here!  
[Public Video](https://youtu.be/2hDC1_sDXZk)  
[Private Video](https://youtu.be/zZewBgmfkIs)  

## Local Development

Clone the repo with

```
git clone https://github.com/cse110-sp21-group24/cse110-sp21-group24
```

Install or update npm packages.

```
npm install
```

Install the LiveServer extension and open `index.html` with LiveServer to test locally.

Alternatively:

Install the Firebase CLI [here](https://firebase.google.com/docs/cli#install_the_firebase_cli).

All website files will be located in the `public` directory. To test locally, run:

```
firebase serve
```

Website will then run at http://localhost:5000

## Build and Deployment

To build:

Create a pull request with your changes (on a new branch). A build script will automatically be run and generate a preview that can be viewed before deploying. Code quality, testing, and document generation will also be run automatically. More details about the CI/CD pipeline can be viewed [here](admin/cipipeline/updated-phase1.md).

Once the changes are merged to main, deployment will then be updated at https://team-24-gme-bujo.firebaseapp.com/

## Testing

To test locally run

```
npm test
```

All tests will automatically be run after making a push to the repository.

## Linter

Run the following command to lint files before pushing to the repository:

```
npx eslint yourfile.js
```

## Documentation

Documentation of all code written can be found in the **\out** folder.  

Internal team documentation can be found under **\admin** and **\specs**. **\admin** contains notes on team meetings (including sprint reviews and retrospectives), standups, and the CI/CD pipeline. **\specs** contains artifacts from brainstorming sessions, development of the design, and ADRs.

[Documentation](/out/global.html)
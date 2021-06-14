# Onboarding

## Setting Up Local Development

Clone the repo with

```
git clone https://github.com/cse110-sp21-group24/cse110-sp21-group24
```

From the top level directory, install or update npm packages.

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

## Developing

Checkout a new branch with the appropriate name and commit your changes there.

```
git checkout -b branch-name-here
```

If new changes are merged into main from another branch, pull the changes from main and resolve any merge conflicts before creating a PR request for your branch and merging into main. 

```
git pull origin main
```

You can see the files affected by merge conflicts.

```
git status
```

Use VSCode or your favorite text editor to accept incoming changes, accept current changes, or accept both changes. Add or stage your changes, commit the resolved changes, and push to the repository.

```
git add .
git commit -m "Resovled merge conflicts"
git push
```

Create a pull request with your changes (on a new branch). In the description, document what changes you made in the branch so that it is easier for reviewers to look over the PR.

<strong>Example PR Description</strong>

> <strong>Changes Made</strong>
> * Fixed CSS on daily log view
> * Changed log fonts to Montserrat on all the pages
> * Fixed scrolling in log boxes

Request 2 reviewers from the team to look over your code, and fix any requested changes. If both reviewers approve the pull request, you are free to merge the branch to main.

## Build and Deployment

 When a pull request is created, a build script will automatically run and generate a website preview that can be viewed before deploying. Code quality, testing, and document generation will also be run automatically. More details about the CI/CD pipeline can be viewed [here](admin/cipipeline/updated-phase1.md).

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

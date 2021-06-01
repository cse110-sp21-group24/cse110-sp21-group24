# CI Pipeline Status Phase 1


## Linting/Code Style Enforcement:
**Functionality:** 
- At this moment, we are doing linting via ESLint. This is not automatic, but should be run by the programmer by running the command: 
  
  ``` npx eslint yourfile.js ```

- This will allow the programmer to make sure that they are following the coding style before they push to the repository.
---

## Code Quality Checks:
**Functionality:**
- For code quality checks, we are using Codeclimate. Codeclimate is set up so that whenever there is a pull request into the main branch, it will run the code to check for technical debt, like a file with too many lines or functions with too many arguments, and to check for similar code in different places.
- Automatically run during pull requests to main.

**Plans**
- We plan on changing exactly what Codeclimate should check for instead of just having all of the defaults being checked. Right now, the program is just basing the quality checks off of the default settings, so we plan on changing exactly what Codeclimate checks so that it will be able to check the quality based on what we want it to be.
---
## Code Quality via Human Review:
**Functionality**
- For code quality checks via Human Review, we have a rule where 2 other people need to approve the pull request before we can merge the branch. Since the repository is free and private, we cannot make it so that we automatically need 2 reviewers before we can merge. This makes it so that we have to manually select someone to review it, wait for them to review it, and then select another person, since only one person can be selected to review at one time.

**Plans**
- We plan on trying to make it more efficient for human checks instead of having one person have to wait for another person to review it before we can merge it.
---
## Unit Testing via Automation:
**Functionality**
- For unit testing, we have setup jest to run on pushes. At this time, we only have experimental code and tests to see how jest works. 

**Plans**
- We plan on making our own tests for our Bullet Journal when we get to that stage. We don't have much to test yet so we need to write out all of the tests that jest will run for our program.
  
---

## Documentation Generation:
**Functionality**
- For documentation generation, we are using JSDocs. At this time, we have it so JSDocs will run on pushes to the main branch. 
- JSDocs is not working correctly at this moment. There is issues with saving the data that JSDocs generates when run through GitHub Actions. For it to work correctly, we need to do some things beforehand, like deleting the previous documentation file since Github Actions will run into a merge error if it is not deleted. Also, if the merge fails, GitHub Actions fails to delete the temporary branch it makes to push the documentation that JSDocs creates, and if that branch already exists when the documentation generation is run, then Github Actions will run into a push error.
- If there is no documentation to overwrite and the temporary branch does not exists, then JSDocs correctly created documentation for the .js files in the /public/scripts folder. This is also hard to access since JSDocs generates the documentation to be viewed as an html file, which we cannot access very easily since we cannot publish a site to Github Pages.  

**Plans**
- We plan on making it so the documentation can be generated automatically without having someone need to do things before hand to generate the documatation. It would be easier if the documentation was automatic, and the documentation would probably be better since it will not miss out on different pushes, since it could right now.

## Deployment
**Functionality**
- Right now, we are using FireBase to deploy our application and we have it so on pull requests, Github Actions will build a preview and deploy it to a test site to check how it works. 
- Automatically run on all Pull Requests made.


---

![CI PipeLine Diagram](phase1.drawio.png)

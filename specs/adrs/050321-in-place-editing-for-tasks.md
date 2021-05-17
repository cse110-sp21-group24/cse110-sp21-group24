# Minimize Number of Clicks and Have In-Place Adding and Editing 

* Date: 05/03/21

## Context and Problem Statement
Initially, we had an “add” and “edit” button that users would have to click on to make changes to the logs. It would bring up a pop-up form that inconveniences the user by having them input too much into the website. How should we minimize the number of clicks on each page to make logging easier and quicker for the users?

## Considered Options
Adding a task:
* A toggle that would allow users to add a new task bullet by pressing right and left
* A dropdown that would allow users to choose a specific task bullet from the list
* An “add” icon that would allow bring up a pop-up for users to click on to make changes

Editing a task:
* An “edit” icon that would allow users to click on to make changes
* An in-place editing feature that would allow users to double click the text and make changes directly

## Decision Outcome
* Chosen: Bullet dropdown for adding new tasks and in-place editing feature to edit tasks

## Positive Consequences
* Having a bullet dropdown instead of a pop-up form to add new tasks reduces the number of clicks from 4 (clicking on add button, choosing bullet type, inputting in text, and clicking submit) to 2 or 3 depending on if the user changes the bullet type instead of selecting the first one in the dropdown which does not require an additional click
* With a dropdown, the user can add a new task without leaving the log pages. Having things be done in place makes it easier for the user to navigate around
* Having in-place editing has less buttons on screen making it less overwhelming and for the user
* In-place editing involves less total clicks to add a task, reducing the friction to use the application
* In-place editing can be more intuitive for the user because of similar to existing applications that they are already familiar with

## Negative Consequences
* It may be hard to implement these new features within a relatively short period of time. 
* When the users want to edit text for the first time, they may not know they need to double click it.

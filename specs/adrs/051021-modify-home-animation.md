# Modify home animation

* Date: 05/10/21

## Context and Problem Statement
The original design was to have a home page with a journal cover, which on hover would flip open and display the index. This became problematic because that would limit the space of the index to one page, which wouldn't make much sense. Additionally, containing a component within an animation was leading to unnecessary complexity.

## Considered Options
* Continue with the original design
* Remove all animations entirely from the home page, just have a journal cover
* Change the home page to just be the index
* Have a modified animation with journal cover

## Decision Outcome
* Chosen: Have a modified animation
    - Instead of flipping the book open, it will instead just rotate the book slightly
    - Index will be moved to a seperate page

## Positive Consequences
* Keeping a journal cover that could be customized supports our ultimate design goal of increased personalization 
* Having this modified animation would greatly decrease the potential complexity of the code by reducing unnecessary interactions with other components like the index
* Having a small animation in the home page can attract the user's interest in the product

## Negative Consequences
* Having any animation component could potentially increase the complexity of the code, and it turn bugs.
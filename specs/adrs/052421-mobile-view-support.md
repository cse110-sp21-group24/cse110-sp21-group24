# Supporting mobile view

* Date: 05/25/21

## Context and Problem Statement
Our current application has primarily been developed for use on a laptop or computer. This means that some elements such as the calendar are not optimized for mobile devices. Should we support mobile view?

## Considered Options
* Refactor current code and build future code to support mobile view
* Do not support mobile view

## Decision Outcome
* Chosen: Do not support mobile view

## Positive Consequences
* Our user base, students, typically have access to a laptop and use it for the majority of their work, so it will have limited impact on their ability to use our application.
* Allows for developers to focus on the functionality of the application rather than specific UI elements.
* Current code will not have to be refactored.

## Negative Consequences
* Users will not be able to easily access their bullet journal on their phone
* It may be more inconvenient to have to use a laptop or computer to use the bullet journal application
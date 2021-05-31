# Using local storage

* Date: 05/29/21

## Context and Problem Statement
Our current application has multiple log components with entries that need to be stored. How should we store this information?

## Considered Options
* Local storage
* MongoDB
* Firestore

## Decision Outcome
* Chosen: Local storage

## Positive Consequences
* Don't have to worry about third parties accessing potentially sensitive information
* From the team's current research, it seems like it will be fairly straightforward to implement
* The data can be accessed offline

## Negative Consequences
* Users will not be able to access the stored information through different browsers or devices
* It can only store string data
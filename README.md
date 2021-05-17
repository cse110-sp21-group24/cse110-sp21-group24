# CSE 110 Group 24 - Bullet Journal Project

[Team Page](./admin/team.md)

Bullet journaling organizes scheduling, reminders, to-do lists, brainstorming, and other organizational tasks into a single notebook.

The core utilities of bullet journals are:
- an **index** (points to where information on different topics is located)
- **rapid logging** (using symbols to simplify, abbreviate and organize information)
- **logs** (to-do lists)
- **collections** (organizing information by content)
- **migration** (periodically updating lists to new lists)

## Local Development

First, install the Firebase CLI [here](https://firebase.google.com/docs/cli#install_the_firebase_cli).

All website files will be located in the `public` directory. To test locally, run:

```
firebase serve
```

Website will then run at http://localhost:5000

## Deployment

To deploy:

```
firebase deploy
```

Deployment will then be updated at https://team-24-gme-bujo.firebaseapp.com/


## Linter
```
npx eslint yourfile.js
```

# Project1

<!-- ![App hero image](./client/public/assets/img/readme/app.png) -->

## Description

If efficiency is how you play then you're at the right place! I often find myself spending more time preparing to play Destiny rather than playing it. There is so much to do and so little time 😞.

&NewLine;
&NewLine;

## How To Use

## Table of Contents

- [New Project](#new-project)
  - [Description](#description)
  - [How To Use](#how-to-use)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Technology Overview](#technology-overview)
    - [Dependencies/Packages](#dependenciespackages)
      - [Dev Dependencies](#dev-dependencies)
    - [Client](#client)
      - [Persisting User Data](#persisting-user-data)
      - [Setting and Updating State](#setting-and-updating-state)
    - [Bugs](#bugs)
    - [Future Development](#future-development)
    - [Resources](#resources)
    - [Contact](#contact)
    - [Support](#support)
    - [License](#license)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3, Bootstrap Navbar
Backend – Node, Express, MongoDB
```

&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

<!-- This is how you make a table -->

|                                                  |                                                    |                                                                    |
| ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------ |
| [express](https://www.npmjs.com/package/express) | [mongoose](https://www.npmjs.com/package/mongoose) | [react-router-dom](https://www.npmjs.com/package/react-router-dom) |

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

|                                                |                                                  |
| ---------------------------------------------- | ------------------------------------------------ |
| [eslint](https://www.npmjs.com/package/eslint) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#development) || [Back To Table of Contents](#table-of-contents)

### Client

Here you can describe what creates your front end (react using Vite) and highlight bits of code you're proud of [future build](#future-development).

&NewLine;
&NewLine;

#### Feature I Like

Why I liked it an how it works

<!-- this is how you make coding snippets -->

```js
const localSeasonalChallenges = seasonalChallenges.map((week) => {
  // * Set weekName to be JSON and LocalStorage Friendly
  const weekName = week.name.replaceAll(" ", "-");
  // * If a Given Week is Not In Local Storage, Save to LocalStorage
  if (localStorage.getItem(weekName) === null) {
    localStorage.setItem(weekName, JSON.stringify(week.challenges));
  }
  // * If a Challenges are Added to As Week, add Them To LocalStorage without Deleting User Data
  const localData = JSON.parse(localStorage.getItem(weekName));
  const serverData = week.challenges;
  // ** Checks if Server has new data by comparing the it's length to LocalStorage
  if (serverData.length > localData.length) {
    // *** Start Loop with the length of LocalStorage, since we would already have those indexes saved with user data and we do not want to overwrite them with default values
    //  // Loop through the length of the server data and push any new data at index [i]
    for (let i = localData.length; i < serverData.length; i++) {
      localData.push(serverData[i]);
    }
    // *** Save Updated Data to Local Storage
    localStorage.setItem(weekName, JSON.stringify(localData));
  }

  // * For a Given Week, map() Through Each Challenge, Programmatically Create Data, and Sync Data In Local Storage
  week.challenges.map((challenge, challengeIndex) => {
    // *** Create belongsTo string
    challenge.belongsTo = weekName;
    // *** Create challengeIndex Number
    challenge.challengeIndex = challengeIndex;
    // *** Use getLocal to Sync Completed Data
    challenge.completed = getLocal(weekName, challengeIndex, true);
    // ** For a Given Challenge, map() Through Each Objective and Sync Data in Local Storage
    challenge.objectives.map((objective, objectiveIndex) => {
      // *** Use getLocal to Sync Data
      objective.completed = getLocal(
        weekName,
        challengeIndex,
        false,
        objectiveIndex,
        true
      );
      objective.progress = getLocal(
        weekName,
        challengeIndex,
        false,
        objectiveIndex,
        false
      );
      // *** Return Updated Data
      return objective;
    });
    // *** Return Updated Data
    return challenge;
  });
  // console.log({week});
  localStorage.setItem(weekName, JSON.stringify(week.challenges));
  // *** Return Updated Data
  return week;
});
```

> [Back To Client](#client) || [Back To Development](#development)

### Bugs

We're all learning! You can list any issues the app may have, why you think it's happening, and how you might fix it

### Future Development

You can list anything you want to add! (or didn't have time for 😅)

### Resources

If you use any 3rd party resources, list them here

### Contact

If you have any feedback our questions, please reach me by [email](example@outlook.com), [GitHub](https://github.com/MyUserName), or [LinkedIn](https://www.linkedin.com/)!

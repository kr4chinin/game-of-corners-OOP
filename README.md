# Game Of Corners ♟

## Introduction

This is a browser game which was made with **OOP approach** and which has a lot of interesting features to **improve** user experience. Try this app live on GitHub Pages [here](https://kr4chinin.github.io/game-of-corners-OOP/).

![gameplay](https://user-images.githubusercontent.com/103210607/185084656-ceb838e7-e0cf-4981-a7b5-231d441d62f3.gif)

### Functionality

Below you can see a **pseudo-schema** which shows how classes and objects interact:

<img width="700" alt="class schema" src="https://user-images.githubusercontent.com/103210607/185076228-53e5d46e-2888-488c-9ff0-e89ab5014c7d.png">

In this application i've implemented:

- Unit movement logic from scratch
- DnD functionality. Player can use **Drag & Drop mechanic** to move his units or he can manually select them and choose where to go by clicking on the preferred square
- Squares where user can go with selected unit are dynamically highlighted
- **Movements log** with timestamps at the sidebar and "whose turn now" indicator
- Modals with win messages and game rules, smooth animations

### View

When user enters the app **for the first time** he will see this message with game rules:

<img width="700" alt="welcoming message" src="https://user-images.githubusercontent.com/103210607/185078265-b2e0355a-42ab-4b43-b18a-15533153e717.png">

This is the **main screen** of the game:

<img width="700" alt="main screen" src="https://user-images.githubusercontent.com/103210607/185078640-c43adebd-394f-41da-82ba-877dbdc81bba.png">

And this is how it will look like after you've played the game a little bit:

<img width="700" alt="game process" src="https://user-images.githubusercontent.com/103210607/185079041-ebb6656c-50cd-4cca-a7dc-004cea8b8625.png">

Win message:

<img width="700" alt="win message" src="https://user-images.githubusercontent.com/103210607/185080078-31dcfff4-a011-474f-954d-f70287a2921c.png">

### Tech stack

- React + TypeScript
- SCSS
- Auto-animate

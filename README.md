# Trellis

This is a simple Trello clone for me to tinker with in my free time.

## Pardon my dust
This is just a free time project that I work on for enjoyment and is not 100% complete.... only like 90% complete! There are still some styles and Jest tests to be added, but the basic feature set is there.

## Tech
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [React Router](https://github.com/ReactTraining/react-router)
- [Emotion](https://github.com/emotion-js/emotion) (Let's me keep CSS in the same file as the React component and use actual CSS syntax. I really love this library!)
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) (Another awesome library)

## Usage
When you first load Trellis you are presented with the board list with one default board. You can enter a name into the input at the top to add a new board.
The edit button of the board will allow you to change the board's background (custom solid colors coming soon, sorry!) and also change the board's name and delete it.
To see the board, click on its banner.

In the board you can add a list by clicking the `+` symbol in the top right and entering a name for your new list.
A list can be deleted by clicking the trashcan icon in the top right and confirming the delete.
You can rerrange the order of the lists with the mouse by dragging the list by its title bar and dropping it somewhere else on the board. Or you can also achieve the same thing with keyboard by giving the title bar of the list focus, pressing space to lift the list, using the arrow keys to shift it, and the spacebar to drop it in its new position. (Thanks React Beautiful DnD!)

You can add a new card to a list by clicking the `Add a card` button at the top of the list and entering in a name and description for the card.
You can "done" a card by clicking the checkmark in the bottom left.
To delete a card, click the trashcan icon in the bottom right.
You can rearrange the cards in a similar fashion to lists by using the mouse or keyboard. You can put the card in a new position in the same list, or transfer it to another list in the board.

## Development
To develop with Trellis just download the repo install the Yarn packages:
```bash
$ yarn
```

To start a live reload Webpack dev server run:
```bash
$ yarn start
```

To build the production version of Trellis which gets outputted to the `docs` directory (for GitHub Pages) run:
```bash
$ yarn build
```

It helps to develop components with Storybook and a live Storybook server can be started with:
```bash
$ yarn storybook
```

Tests can be run with:
```bash
$ yarn test
```
or to run the tests after a change:
```bash
$ yarn test:watch
```

# Trellis

This is a simple Trello clone for me to tinker with in my free time.

## Tech
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [React Router](https://github.com/ReactTraining/react-router)
- [Emotion](https://github.com/emotion-js/emotion) (Let's me keep CSS in the same file as the React component and use actual CSS syntax. I really love this library!)
- [Lodash](https://github.com/lodash/lodash) (Just a little)

## TODO
Since this is just something I tinker with in my free time, there is still a lot to do, and I'm excited to see how it will turn out in the end when everything is pieced together.
- Board IDs
  - Since you can route directly to a board, they need a typeable ID. Might just use their name as the ID and enforce a uniqueness constraint on board names.
- Styling
  - It's ugly right now. It's all gray/white and there are no animations. It's just at a place that it isn't a pain to work with.
- Drag 'n' Drop
  - Will be using ReactDnD for this. Haven't used it yet for any project yet, but am excited to get my hand on it! Should be able to drag cards from list to list.
- Fully offline
  - To use the [Ionicons font](http://ionicons.com/), I just link to its CDN resource in `index.html` because it was quick and easy and I wanted that trash icon! But, really, I should pull the style sheet directly into the project so Trellis can be used offline.
- Progressive Web App (PWA)
  - Not much use for it to be a PWA, but, eh, what the hell? They're a cool concept and it won't hurt anything so let's do it!

## Usage
You can create/delete boards with a name. Within those boards you can create/delete lists with a name. Within those lists you can create/delete cards.

You can route directly to a board by using the `/#/board/:boardid` route.

Names and descriptions can be changed by clicking on them. Submitting the input (Enter) or clicking outside of the input will save them.

Submitting the input or clicking outside of the input will save it.

Click the checkmark on a card to mark/unmark the card as done. This doesn't really do anything for now. It will most likely just put a strikethrough through the name and description, though.

Click the trash icon on a card to delete it. There's no confirmation, as of now, so make sure you definitely want to delete it!

Click the trash icon on a list to delete it. There's no confirmation, as of now, so make sure you definitely want to delete it!
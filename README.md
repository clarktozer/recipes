# Recipes

## Installation

```bash
git clone the repo
yarn
```

## Tests

```bash
yarn test
```

## Getting Started

First, run the development server:

```bash
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thoughts

I have added redux with one action that wasnt part of the brief just to show how it would work which is the toggling of whether a recipe is favourited or not. I also added a test for that action/reducer to check the state is changed correctly. If the array of recipes was larger there would be a consideration to normalise the data to avoid traversal.

The ui is using Material UI, which has its own responsive styling system.

If there was more time/requirements in the brief I would add a view/page of each recipe, which could possibly be an extra route to which would show the tags, authors.

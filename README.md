# Beginner React Challenges

# What is it?

This is a project for beginners who are learning React and Tailwind CSS.

Each branch of the project contains a different challenge:

1. Counter
2. Handling form input
3. ToDo app

You can switch between branches easily using the command-line, or an application like (GitHub Desktop)[https://desktop.github.com/].

# Getting Started with Create React App and Tailwind CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It also comes with a basic [Tailwind CSS](https://tailwindcss.com/) installation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## The challenges

### 1. Counter

Can you update the component code so that clicking the 'Add' button makes the number on screen increment by one every time?

**HINT**: you can use the (useState)[https://beta.reactjs.org/reference/react/useState#reference] hook to solve this. Look at a usage example (here)[https://beta.reactjs.org/reference/react/useState#usage].

If you are REALLY stuck, take a look at a counter example from the React docs page (here)[https://beta.reactjs.org/reference/react/useState#examples-basic].

### 2. Handling User Input

1. Update the code so that when the user types into the input field, their writing will replace the three question marks in the green box below.

2. When the user clicks the 'Clear Text' button, the text in the input box and the 'You typed:' area should clear.

So the finished behaviour will look like this...

![Finished input handling challenge](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)

**HINT**: Take a look at the text field example (second tab along) from the React docs page (here)[https://beta.reactjs.org/reference/react/useState#examples-basic].

#### **EXTRA CREDIT 1 (optional)**

If the input box is empty, can you give it a red background-colour and print a message beneath reading 'This field is required', like that shown below?

![Extra credit 1 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674378802/react-introduction/2023-01-22_09-11-57_1_b78mv3.gif)

#### **EXTRA CREDIT 2 (optional)**

Hmmm. Now, the input field is already styled red with a warning when the component first renders and before the user has even typed anything.

Can you use the [usePrevious custom hook](https://usehooks.com/usePrevious/) to only make the warning styles show _AFTER_ the user has typed into the input field and then cleared it? See the example below:

![Extra credit 2 finished example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674377447/react-introduction/2023-01-22_08-48-42_1_uxd5wg.gif)

### 3. ToDo List Challenge

This will bring all of your knowledge together. Create a ToDo list app that will allow the user to:

1. Create a ToDo
2. Delete a ToDo
3. Extension (optional): Edit a Todo

Take a look at the example below to get an idea of what it might look like, but don't feel like you have to copy it exactly. Make it your own!

![Finish ToDo app example](https://res.cloudinary.com/dptdx8zuv/image/upload/v1674474087/react-introduction/2023-01-23_11-37-47_1_n7lt3y.gif)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://beta.reactjs.org/).

For Tailwind, visit their [documentation page](https://tailwindcss.com/docs/installation).

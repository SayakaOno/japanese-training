# Japanese speaking training
![japanese-speaking-training](https://user-images.githubusercontent.com/33141219/57587732-8a098a00-74be-11e9-827c-62d5d04ebf60.gif)
Japanese speaking training is a web application that helps Japanese learners improve their speaking skills.<br/>
(The database information is not in this repository.)<br/>
[DEMO](https://english-speaking-training.herokuapp.com/)

## How to use
- Select the list of the sentences that you want to practice
- Press "Start" button
- Translate the English sentence which shows up on your screen into Japanese and say it
- Evaluate your confidence about the sentence by choosing the button
- The list of sentences that you are not comfortable with is shown at the end

## Features
- The order of the quizzes can be changed.
- The number of the quizzes and the duration can be chosen.
- You can track study time within the App.
- Keyboard operation is supported for desktop users.

## Upcoming Features
- User authentication
- Customize sentences

## Project Structure
    .
    ├── client                   
    └── server                    
		   
## Data Architecture
    .
    ├── categories
    |     ├── _id
    |     └── name
    ├── subCategories
    |     ├── _id
    |     ├── catId
    |     └── name
    └── quizzes
          ├── _id
          ├── catId
          ├── subCatId
          ├── answer
          └── translation

## Specification
Create React App<br/>
Libraries:
- Redux
- Express.js
- Axios
- Redux form
- Lodash<br/>

database: MongoDB<br/>
css: Semantic UI

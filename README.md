# FoodSave
Save the world and share happiness by sharing your extra or leftover food with the people around you!

## Inspiration

According to Towards Zero Waste, "Food waste is one of the biggest waste streams in Singapore and the amount of food waste generated has grown by around 20% over the last 10 years.". This statistic is very shocking and actions have to be taken to reduce as much food waste as we can. Hence, our team decided to come up with Food Save to let Singaporeans share their extra food with other people, instead of throwing them away.

## What it does

Food Save is a cross-platform mobile app that users can share extra/leftover food with people around them. By posting their contact details and food onto this app, other users can check them out and contact the people who posted the food items if they wish to claim the food. This app aims to cut food waste and also benefit and give food to people who need it.

## How we built it

This app is built using React Native, with json-server as the backend server. Expo is used to build the app.

## Setup

Ensure you have `node`, `json-server` and `expo-cli` installed globally before running the application.

### Frontend Setup

Clone the repository

`git clone git@github.com:venuslimm/FoodSave.git`

Go to the FoodSave directory and install all the required dependencies

`npm install`

Run the application

`npm run start` 

#### Using Expo Go App to run the application

Once run, you will see a QR code generated. Download the Expo Go app in your device and scan the QR code to view the application.

### Backend Setup (use another terminal)

We are using a fake server called [JSON Server](https://www.npmjs.com/package/json-server) to run as the backend. The APIs will be automatically set up.

`json-server --watch db.json`

## What's next for Food Save
1. Add register and login authentication feature

- User to be given an option to use the app as a guest or to sign in.
- If user is signed in, PIN is not required to edit/delete their post.
- If user is in guest mode, they need their PIN to carry out these actions.

2. Sort the posts in home page

- By quantity, time posted, closest food nearby, etc.

3. Allow user to tag a type of cuisine to their food when posting the food item.

4. Classify the posts into categories

- By location, type of cuisine, etc

5. Allow user to bookmark the food they are interested in

6. Search food item using the name of the food

7. Add specific location where the food item is at

8. Change the backend server for production

# FoodSave
Save the world and share happiness by sharing your extra or leftover food with the people around you!

# Setup

Ensure you have `node`, `json-server` and `expo-cli` installed globally before running the application.

## Frontend Setup

Clone the repository

`git clone git@github.com:venuslimm/FoodSave.git`

Go to the FoodSave directory and install all the required dependencies

`npm install`

Run the application

`npm run start` 

### Using Expo Go App to run the application

Once run, you will see a QR code generated. Download the Expo Go app in your device and scan the QR code to view the application.

## Backend Setup (use another terminal)

We are using a fake server called [JSON Server](https://www.npmjs.com/package/json-server) to run as the backend. The APIs will be automatically set up.

`json-server --watch db.json`

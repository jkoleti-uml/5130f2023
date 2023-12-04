# README

## Description
This is a Progressive Web Application(PWA) of the same application that i built during the last IWS lab on 2023-11-13 which demonstrates basic SignUp and SignIn features that works on the 3000 port.

## Features
- Validate proper email ID.
- Validates password constraints.
- Creates USER profile in database(JSON file onto disk).
- Displays user location - city, longitude, latitude.
- Displays weather at user's location.
- Displays few facts such as local currency and it's units.
- Hashed passwords using the crypto library - sha256.

## Prerequisites
- Node.js installed (https://nodejs.org/)

## Installation and Deployment steps
1. install dependencies
```
cd ~/5130f2023/2023-11-27-lab/server/
npm install
```
2. Start the nodeJS server
```
node server.js
```
3. Open localhost:3000 in Google Chrome browser.
4. We can see the a PWA downloadable app button in the URL bar. 
5. Screenshots of this PWA are in the folder
```
~/5130f2023/2023-11-27-lab/screenshots
```
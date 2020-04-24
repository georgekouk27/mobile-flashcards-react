# Mobile Flashcards project

This is the mobile flashcards project for the Udacity React Scholarship. 

## Basic Functionality
* Study playing quiz.
* View results
* Add new study decks
* Add new questions for study

## TL;DR

To get started developing right away:

* git clone https://github.com/georgekouk27/mobile-flashcards-react.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

(`npm` can be replaced with `yarn`)

## Database

This project uses the local storage of the device to keep the data. For this reason there is an api with the following functions.

* `getData()`
* `getDecks()`
* `getDeck(id)`
* `saveDeckTitleAS(title)`
* `removeDeckAS(key)`
* `addCardToDeckAS(title, card)`


## Devices

This app was tested on Android emulator and device.

## Screens

<img src="/screens/screen1.png" width="500">

<img src="/screens/screen2.png" width="500">

<img src="/screens/screen3.png" width="500">

<img src="/screens/screen4.png" width="500">

<img src="/screens/screen5.png" width="500">

<img src="/screens/screen6.png" width="500">

<img src="/screens/screen7.png" width="500">



### Resources and Documentation:
* [Create-react-app Documentation](https://github.com/facebook/create-react-app)
* [Redux Documentation](https://redux.js.org)
* [React Router Documentation](http://knowbody.github.io/react-router-docs/)
* [Official Semantic UI React Integration](https://react.semantic-ui.com/introduction)
* [Project starter template](https://github.com/udacity/reactnd-project-would-you-rather-starter)
* [Royalty Free Photos - Pexels](https://www.pexels.com)
* [Marc Collado's Project Readme.md](https://github.com/MarcCollado/would-you-rather/blob/master/README.md)
* [React colors](https://casesandberg.github.io/react-color/)
* [Expo](https://expo.io/)



## License:
MIT License

Copyright (c) 2020 Udacity, George Koukouris

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

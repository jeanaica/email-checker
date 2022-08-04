## Email Checker

This app would validate an email for Cyber Breaches.

This app is also deployed in [https://email-checker.web.app/](https://email-checker.web.app/) to view it in the browser. (Make sure that CORS is disabled)

### How to run Chrome without CORS

- ##### On MacOS
  `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`
- #### On Windows
  `"[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp`
- #### On Linux
  `google-chrome --disable-web-security`

### How to run

Pre-requisites:

- Node
- npm/Yarn

1. git clone repository and cd ./email-checker
2. run `yarn` or `npm install`
3. run `yarn start` or `npm run start`
4. go to `localhost:3000` on Chrome without CORS

#### Libraries used:

Tailwind CSS - CSS styling for fast development
React Router - For routing
Axios - For API calls
Typescript - For typing
Firebase - For deployment

#### Notes

Used Context - it is already built in react and the app is small that is why the use of redux might be too much.

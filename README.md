# Portfolio
David Sundland Portfolio

## Background

I built this app to provide a quick overview of my coding background and skills.  Live site available at: http://www.fullstackdeveloper.pro/

## User Story
This app gives users a short bio about myself and a summary of my coding skills and recent apps.  It provides links to some of my larger projects, including links to live versions of the apps and the underlying code.

As a user, I want to land on the website and quickly gain an understanding of David Sundland.

The main page:
* The site is a simple, single-page app.  Navigation links jump to different sections of the page.
* The user sees a navigation bar, a hero image and slogan, an "About Me" section, a "Skills" section, and a "Projects" section, with a footer that includes contact links.
* Coding skills are listed both in the "Skills" section and, as pertinent, under each project.
* The "Projects" section includes screenshots of each app, an overview of the app, a list of skills used, and links to the code and a demo.
* The footer provides links to e-mail and my accounts on GitHub, LinkedIn, AngelList, and CodeWars.
![live site](http://www.fullstackdeveloper.pro/)

%%%%%%%%%%%%%%%%%%%%%%%%% MARK MARK MARK - ADD SCREENSHOT %%%%%%%%%%%%%%%%%%%%





## Working Prototye
A live example of the project can be found at https://davidsundland.github.io/whats-up-news-events-weather-api-capstone/
![landing page](https://github.com/DavidSundland/whats-up-news-events-weather-api-capstone/blob/master/github-images/landing_page_screenshot.png?raw=true)
![results page](https://github.com/DavidSundland/whats-up-news-events-weather-api-capstone/blob/master/github-images/primary_page_screenshot.png?raw=true)
![results page after user interaction](https://github.com/DavidSundland/whats-up-news-events-weather-api-capstone/blob/master/github-images/screenshot_after_user_interaction.png?raw=true)


## Functionality
This app's functionality includes:
* Automatically determines user's location and country code, and provides results based on that location.
* User can opt to see results for a different location.
* Searches for the day's most popular articles about news, sports, business, and entertainment.
* Ability for user to enter a keyword for article and event searches.
* To reduce page clutter while showing large numbers of results, only a portion of results is initially shown, and user can unlock or lock scrolling for those results.
* Buttons for previous and next results only appear if previous or next results have actually been retrieved.
* Events which have no title or subject are skipped, events which have a subject but no title use the subject as the title.
* Results for events are cleaned up - excessive spaces, hyphens, and underscores are removed, user-created tags are removed, and excessive use of CAPS are converted to title case or sentence case.
* Units (metric or Imperial) and date format (m d, y vs d m y) are based on country code.
* Error handling has been provided for contingencies such as unsuccessful geolocation, no results found, error in displaying an image, or submission of erroneous address.

## Technology
* HTML
* CSS

* The app uses the JavaScript getCurrentPosition method to determine user's location, and passes coordinates to <a href="https://maps.googleapis.com">Google Maps</a> to get the country code.  The Google Maps API is also used to obtain coordinates from a user-entered address.
* The app uses AJAX JSON calls to the <a href="https://newsapi.org">News API</a> to return news results.
* The app uses AJAX JSON calls to the <a href="http://api.eventful.com/">Eventful</a> API to return a list of events.
* The app uses AJAX JSON calls to the <a href="http://api.openweathermap.org/">Open Weather Map</a> APIs to get weather information.

## Responsive
App is built to be responsive across mobile, tablet, laptop, and desktop screen resolutions.

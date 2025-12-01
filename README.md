# IP Address Search

#### Mid-point full stack project using HTML, CSS, JavaScript, and API calls
<img src="./src/images/p6khgutnfr78zbs9kje7.jpg" alt="Banner"/>

## Description
A website that allows you to search the location of an IP address on an integrated GPS map.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Deployed App](#deployment)
* [About the Author](#author)
* [Reflection](#reflection)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML
* CSS
* Bootstrap
* API methods such as fetch()
* Leaflet map API
* Geo Ipify API


## Features
Interactable map showing the location of the IP address entered

## Trello Planning
* https://trello.com/b/bkakZpER/gabes-ip-tracker-project

## <a name="design"></a>Design
* Bootstrap CSS for its excellent grid system
* Bootstrap CSS for input form CSS
* Frontend mentor provided background image and other nice things
* Leaflet API comes with several CSS things to shape its map

## <a name="deployment"></a>Deployed Link
* [GitHub Pages](https://jimenezkgabriel.github.io/ip-tracker-project/)

* [Github Repository](https://github.com/Gr8ness21/Connect-4)
* If unable to view please go live locally through VS Code

## <a name="author"></a>About The Author
Per Scholas student just trying to learn the foundations of the MERN stack. Bottom text.
    
## Works Cited:
* [Per Scholas Project Overview](https://ps-lms.vercel.app/curriculum/se/414)
* [Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
* [IP Address API](https://geo.ipify.org/docs)
* [Leaflet Geo Map API](https://leafletjs.com/index.html)
* [ARIA refresher stuff](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)

## <a name="reflection"></a>Reflection
Development Process:
* This project was well drafted to simulate a complete software development lifecycle. It has requirements in the form of the project overview found in the Per Scholas lessons site, it has wireframing as a requirement that I worked on in Figma, it has a Trello board that I had to create tasks to do and actively dragged and dropped those cards in each of the categories: To Do, Doing, Done, as well as additional categories; it has the actual development from everything we've learned so far, it needs to include documentation in the form of this readme, and it even has deployment, just like a development lifecycle. Not part of the requirements, I decided to have a little fun with a feature that randomly generates an IP address if the search bar is left blank and the user clicks the button

Challenges faced:
* The project required that the user can search a domain and it'll give the location. The API does take an input for the domain but one of the challenges was that some domains types worked while others didn't. I had issues with the provided background image not responding as expected with resizing the view. I had an issue with utilizing modules to compartmentalize my code into different folders. The map lost its interactivity at one point.

Solutions implemented:
* Due to limitations, I decided to just have an IP address as the only working input. The background image is left as is as it works just fine for now. I couldn't import and export modules but quickly figured out to set the script tag in the HTML as a module type. The map div not being interactable as expected was funky but I got help from Tyler to suggest that it may have to do with the CSS aspect of it. I didn't dismiss that solution because as I was viewing the map component in the browser devtools, I noticed the div contained a lot of generated CSS classes from the API. I messed around with my custom CSS for the map div and it was due to setting the z-index of that div all the way at the bottom of the document, which messed up the layer of interactivity. I fixed that and the way the results bar works by just upping the z-index of the search bar to lay neatly on top of the map.

Potential improvements:
* If given more time, I would adjust the background image to work the way I wanted to. I would improve the IP search bar to properly check for domains, maybe using RegEx. The map API has a lot of methods and other neat stuff that I could have added.
Ethereal Sedona

Made by: Delmar Schrock, Samuel Mun, and Ryan McDowell


Tools: HTML5, CSS3, JavaScript, JSON (JavaScript Object Notation), Bootstrap5, GitHub, Canva, Google Maps.


Design:
    -Color scheme is white and pink with black and white text contrast.

    -Application is simple and user friendly.

    -Color Psychology: White and pink both represent calmness and purity keeping in mind people want to relax while traveling.

    -Designed for users with disabilities by making sure each image has text alternatives (alt text).

    -Images to enhance the experience and content of the page.

    -Logo designed by Samuel Mun to be unique yet simple and allows the user to easily understand what this website is.

    -Pictures used were taken by us using Google Maps as our source.


Functionality:
    -When the page loads the user is greeted by a nav bar of tabs.

    -Each of the tabs is a category of attraction such as Things To Do, Food, Gas, Hotels, and Shopping.

    -In the body of each of the tabs there are cards with a picture of where the attraction is on the map, and the name of the attraction.

    -The user can click on any of the cards which will display the Bootstrap modal with more information about the attraction.

    -The information about the modal is an embedded Google Map, address, name, general information about the attraction, hours, and website.

    -Each category of attractions has 9-12 items.

    -As an added bonus the website loads quite quickly with minimal delay.

    -The user can click the button with a speech bubble icon to toggle a chat box which will allow the user to ask any questions they may have  about anything. The chat box only downloads a txt file containing the information from the form however in practice it would send an email with the form data to a business email address so it can be responded to (Sending it to an email address was not put into practice for security concerns).

    -The website DOES NOT save user information.


HTML:
    -Header with a logo, name, and mission statement “Explore With Us”.

    -Nav bar used for the Bootstrap tabbing filters.

    -Tab body is where all the content is, which are cards for each of the attractions.

    -Bootstrap Modal that pops up when  the user clicks on one of the cards.

    -Footer with our names, West-MEC program, site logo, and competition submission.

    -The index.html HTML file validates with no issue.


CSS: 
    -Transitions using the after pseudo elements to give each card a flare whenever the user hovers over the card.

    -Open Sans font used throughout the page.
    
    -CSS box model such as flexbox, margin, and padding used whenever needed.

    -Creating a responsive Embedded map in our Bootstrap Modal.

    -Most of the front end was designed using Bootstrap5 classes added to each of the HTML5 elements.

    -The responsiveness of the website so that it even works on mobile was done with Bootstrap5 because of the multiple options that it gives to create responsive designs.

    -Navigation tabs, cards, modal, and footer were all made with Bootstrap5.

    -The style.css CSS file validates with no issue.


JavaScript:
    -Made with vanilla JavaScript and JSON (JavaScript Object Notation).

    -Used Data Types,  Variables, Arrays, Loops, Functions, JavaScript Fetch API, Template Literals, Asynchronous Functions, Event Listeners,  and Promises.

    -First the program declares multiple variables to save data for later use.

    -The JavaScript Fetch API is simpler and cleaner by using promises to deliver more flexible features to make requests to servers. The fetch() method only requires one parameter which is the URL of the resource desired.

    -The data is fetched using the JavaScript Fetch API to make an asynchronous HTTP (HyperText Transfer Protocol) request and then stores the data in a previously declared variable.

    -Once data is retrieved from the places.json file it creates HTML elements for each attraction and stores them in an array which then renders the data on the HTML document using <div> tags and the querySelectorAll() method in cards.

    -Then every card has an event listener attached to it which detects whenever the user clicks on the card.

    -When the card is clicked a Bootstrap modal will popup and dynamically update the information inside by going back to the variable that stored the places.json data and using some data attributes attached to each card, finds the object with the information of that card.

    -When the user submits the chat box form, the data from the form is retrieved and put inside a blob object which is promptly downloaded as a .txt file to the user’s computer.


JSON (JavaScript Object Notation):
    -JSON was used for data storage which held the information about every attraction on our list.

    -JSON adds data structure to all our information. In this case the data was structured in a 2 dimensional array, the first dimension being which of the 5 categories of attraction, and the second dimension being an object for each of the attractions in that category.

    -Each attraction’s object had essential data like the name, source of the map embed, address, general info about the attraction, hours, website, image path, and which category the attraction fell under.

    -The data is stored in a local places.json file which is hosted on GitHub.

    -All the information for each attraction was entered by hand. Google Maps was a source of information for things like address, map embed, hours, websites, and general information.

    -We have a total of 57 locations in Sedona Arizona.

    -The places.json JSON file validates with no issue.


File Hierarchy:
	index.html
 
	README.md

	assets - [

		CSS - [
			style.css
		]

		Images - [
			adventures - [
				airport-mesa.png
				bell-rock.png
				broken-arrow.png
				cathedral-rock.png 
				chapel-of-the-holy-cross.png
				chicken-point.png
				devil’s-bridge.png
				pink-jeep-tours.png
				red-rock-byway.png
				slide-rock.png
				snoopy-rock.png
				west-fork.png
			]

			food - [
				coffee-pot.png
				cowboy-club.png
				creekside-american-bistro.png
				dahl-and-diluca.png
				elote-cafe.png
				maripose-latin.png
				pisa-lisa.png
				rene.png
				tamaliza-cafe.png
                the-golden-goose.png
                the-hudson.png
                tii-gavo.png	
			]

			gas - [
				76.png
				ampm.png
				arco.png
				chevron.png
				circle-K-179.png
				circle-K-89.png
				conoco.png
				shell.png
				speedway.png
			]
 
			hotels - [
				amara-resort.png
				bell-rock-inn.png
				best-western.png
				courtyard-marriott.png
				element-sedona.png
				enchantment-sedona.png
				hampton-inn.png
				hilton-sedona.png
				holiday-inn.png
				matterhorn-inn.png
				muyawki-inn.png
				sedona-pines.png
			]

			shop - [
				bell-rock-plaza.png
				clear-creek.png
				creekside.png
				hillside-shopping.png
				hummingbird-house.png
				oak-creek.png
				red-stone-center.png
				sedona-crystal-vortex.png
				sedona-original-uptown-mall.png
				sedona-village.png
				sinagua-plaza.png
				tlaquepaque.png
			]

			site - [
				logo-text.svg
				logo.svg
			]

		]

		JSON - [
			places.json
		]

		JavaScript - [
			script.js
		]

]

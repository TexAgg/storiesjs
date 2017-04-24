import {Stories} from "./stories";
import * as request from "superagent";
require("../main.css");

// Get the data and then create a StoryBook.
let obj;
let arr = new Array();
// Determine roughly how many stories to get.
let numStories = Math.floor(Math.max(10, windowWidth()/80));

// Get random profiles from api.
request.get("https://randomuser.me/api/")
.query({include: ["name", "picture"], results: numStories})
.then(function(res)
{
	obj = res.body['results'];
	for (let i = 0; i < obj.length; i++)
	{
		arr.push(
			{
				"name": obj[i].name.first + " " + obj[i].name.last, 
				"url": obj[i].picture.thumbnail
			}
		);
	}
	let storybook = new Stories.StoryBook(arr);
	storybook.displayStories();
});

/**
 * Get the width of the page.
 * http://stackoverflow.com/a/11744120/5415895
 * 
 * @returns {number} 
 */
function windowWidth(): number
{
	let w = window;
	let d = document;
	let e = d.documentElement;
	let g = d.getElementsByTagName('body')[0];
	return w.innerWidth || e.clientWidth || g.clientWidth;
}
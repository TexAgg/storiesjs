import {Stories} from "./stories";
import * as request from "superagent";
require("../main.css");

// Get the data and then create a StoryBook.
let obj;
let arr = new Array();
request.get("https://randomuser.me/api/")
.query({include: ["name", "picture"], results: 10})
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
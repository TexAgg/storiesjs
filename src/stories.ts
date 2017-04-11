export namespace Stories
{	
	/**
	 * A collection of stories.
	 * 
	 * @export
	 * @class StoryBook
	 */
	export class StoryBook
	{
		private stories: Array<StoryObject>;
		private ul: HTMLUListElement;
		private isAttached: boolean;

		/**
		 * Creates an instance of StoryBook.
		 * @param {Array<StoryObject>} stories 
		 * 
		 * @memberOf StoryBook
		 */
		constructor(stories: Array<StoryObject>)
		{
			this.stories = stories;
			this.ul = document.createElement("ul");
			this.ul.classList.add("stories");

			this.createStories();
			this.isAttached = false;
		}

		private createStories(): void
		{
			for (let i = 0; i < this.stories.length; i++)
			{
				let story = new Story(this.stories[i]);
				this.ul.appendChild(story.getLi());
			}
		}

		/**
		 * Display the stories.
		 */
		public displayStories(): void
		{
			if (!this.isAttached)
			{
				document.body.insertBefore(this.ul, document.body.firstChild);
				this.isAttached = true;
			}
		}

		public hideStories(): void
		{
			// TODO
		}
	}

	/**
	 * A StoryObject has a name and a url of an image.
	 * 
	 * @export
	 * @interface StoryObject
	 */
	export interface StoryObject 
	{
		name: string;
		url: string;
	}
	
	/**
	 * Class for creating the HTML for an individual story.
	 * 
	 * @class Story
	 */
	class Story
	{
		private li: HTMLLIElement;
		private name: string;
		private image: HTMLImageElement;
		
		constructor(obj: StoryObject)
		{
			this.name = obj.name;
			this.image = new Image();
			this.image.src = obj.url;
			this.image.classList.add("story-image");
			this.li = document.createElement("li");
			this.li.classList.add("story-item");
			this.li.appendChild(this.image);
			this.li.innerHTML += "<span class='story-name'>" + this.name + "</span>";
		}

		/**
		 * Getter function for the li element.
		 * 
		 * @returns {HTMLLIElement} 
		 * 
		 * @memberOf Story
		 */
		public getLi(): HTMLLIElement
		{
			return this.li;
		}
	}
}
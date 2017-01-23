// establish an object array to hold data to populate the biography cards
var famousPeople = [
	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed \
	  	many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{
		title: "President",
		name: "George Washington",
		bio: "George Washington was a leader of the Continental Army in the American Revolution, and was the first to \
			become U.S. president.",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_\
		Portrait_of_George_Washington.jpg/1024px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
		lifespan: {
			birth: 1732,
			death: 1799
		}
	},
	{
		title: "Professor",
		name: "Charles Babbage",
		bio: "A mathematician, philosopher, inventor and mechanical engineer, Babbage is best remembered for originating \
			the concept of a programmable computer.",
		image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Charles_Babbage_-_1860.jpg",
		lifespan: {
			birth: 1791,
			death: 1871
		}
	},
	{
		title: "Professor",
		name: "Claude Shannon",
		bio: "An American mathematician, electrical engineer, and cryptographer, Shannon is known as the father of \
			information theory.",	
		image: "https://upload.wikimedia.org/wikipedia/commons/9/99/ClaudeShannon_MFO3807.jpg",	
		lifespan: {
			birth: 1916,
			death: 2001
		}
	},
	{
		title: "Professor",
		name: "John Tukey",
		bio: "Tukey was an American mathematician best known for development of the FFT algorithm and box plot.",	
		image: "https://upload.wikimedia.org/wikipedia/en/e/e9/John_Tukey.jpg",	
		lifespan: {
			birth: 1915,
			death: 2000
		}
	},
	{
		title: "Professor",
		name: "Edward Tufte",
		bio: "Tufte is noted for his writings on information design and as a pioneer in the field of data visualization.",	
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Edward_Tufte_-_cropped.jpg/1024px-Edward_\
			Tufte_-_cropped.jpg",	
		lifespan: {
			birth: 1942,
			death: "Still Living"
		}
	}
]

// initiate global variables to make the code more efficient below
var cardSection = document.getElementById("cardSection");
var cardSectionArticle = document.getElementsByClassName("cardSectionArticle");
var input = document.getElementById("input");
var bioSection = document.getElementsByClassName("bioSection");

// populate individual cards with biographical data and add each to the DOM
for (var i = 0; i < famousPeople.length; i++) {
	var currentTitle = famousPeople[i].title;
	var currentName = famousPeople[i].name;
	var currentBio = famousPeople[i].bio;
	var currentImage = famousPeople[i].image;
	var currentBirth = famousPeople[i].lifespan.birth;
	var currentDeath = famousPeople[i].lifespan.death;
	var card = `<article class="cardSectionArticle">
		<header>
			<h2 id=card${[i]}>${currentTitle}</h2>
			<h3>${currentName}</h3>
		</header>
		<section class="bioSection">
			<p>${currentBio}</p>
			<img src="${currentImage}" alt="picture of ${currentName}" height="100px" width="100px">
		</section>
		<footer>
			<p>Born: ${currentBirth} Died: ${currentDeath}
		<footer>
	</article>`;
	cardSection.innerHTML += card;
}

// add two event listeners on the cardSectionArticle elements with a loop to account for grabbing elements by class
for (var j = 0; j < famousPeople.length; j++) {
	cardSectionArticle[j].addEventListener("click", border);
	cardSectionArticle[j].addEventListener("click", focus);
}
// remove border classes from elements and reset the input text box before adding a border to the clicked card 
	// in order to make sure users can edit only one card at a time
function border(event) {
	for (var k = 0; k < famousPeople.length; k++) {
		cardSectionArticle[k].classList.remove("border");
	}
	input.value = "";
	this.classList.toggle("border");
}
// highlight the text field to signal to the user where to input new text for the biography
function focus(event){
	input.focus();
}

// add an event listener to the text input field to capture what the user enters
input.addEventListener("keyup", edit);
// loop through each article to determine whether it has a border. if so, connect its biography section to the text 
	// input field to allow the user to edit the biography field. reset the input field when the user presses the enter 
	// key (keyCode 13).
function edit(event) {
	for (var l = 0; l < famousPeople.length; l++) {
		if (cardSectionArticle[l].classList.contains("border")) {
			bioSection[l].childNodes[1].innerHTML = document.getElementById("input").value;
		}
	}
	if (event.keyCode == 13) {
		input.value = "";
	}
}
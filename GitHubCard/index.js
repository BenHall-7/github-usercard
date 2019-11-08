/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let myData = axios.get("https://api.github.com/users/BenHall-7");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

// this is from step 3
function createCard(data) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardInfo = document.createElement("div");

  card.classList.add("card");
  img.setAttribute("src", data["avatar_url"]);
  cardInfo.classList.add("card-info");

  let name = document.createElement("h3");
  let username = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  name.classList.add("name");
  name.textContent = data["name"];
  username.classList.add("username");
  username.textContent = data["login"];
  location.textContent = "Location: " + data["location"];
  let profileLink = document.createElement("a");
  profileLink.setAttribute("src", data["html_url"]);
  profileLink.textContent = data["html_url"];
  profile.append("Profile: ", profileLink);
  followers.textContent = "Followers: " + data["followers"];
  following.textContent = "Following: " + data["following"];
  bio.textContent = "Bio: " + data["bio"];

  cardInfo.append(name, username, location, profile, followers, following, bio);

  card.append(img, cardInfo);
  return card;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

let cards = document.querySelector(".cards");

myData
  .then(response => {
    myCard = createCard(response.data);
    cards.append(myCard);
    return axios.get(response.data["followers_url"]);
  })
  .then(response => {
    console.log("here");
    console.log(response);
    cards.append(...response.data.map(follower => createCard(follower)));
  })
  .catch(rejection => {
    console.log(rejection);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// THIS STEP COMPLETED ABOVE IN THE PROMISE CHAIN

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
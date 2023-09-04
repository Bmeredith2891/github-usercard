import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "Bmeredith2891",
];

followersArray.forEach(follower => {
  const URL = `https://api.github.com/users/${follower}`;

const grabData = () => {
  axios.get(URL)
  .then(res => {
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.appendChild(createCard(res.data));
    console.log(cardsDiv); 
  })
  .catch(err => {
    console.log(err);
  });
}
grabData()
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function createCard(data) {
  const cardDiv = document.createElement("div");
  const userImg = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const nameHeader = document.createElement("h3");
  const userNameP = document.createElement("p");
  const userLocationP = document.createElement("p");
  const profileP = document.createElement("p");
  const githubAddressLink = document.createElement("a");
  const followersP = document.createElement("p");
  const followingP = document.createElement("p");
  const bioP = document.createElement("p");
  
  cardDiv.classList.add("card");
  userImg.src = data.avatar_url;
  cardInfoDiv.classList.add("card-info");
  nameHeader.classList.add("name");
  nameHeader.textContent = data.name;
  userNameP.classList.add("username");
  userNameP.textContent = data.login;
  userLocationP.textContent = data.location;
  profileP.textContent = `Profile: `;
  githubAddressLink.href = "https://api.github.com/users/Bmeredith2891";
  followersP.textContent = `Followers: ${followersArray.length}`;
  followingP.textContent = `Following: ${data.following}`;
  bioP.textContent = `Bio: ${data.bio}`;

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameHeader);
  cardInfoDiv.appendChild(userNameP);
  cardInfoDiv.appendChild(userLocationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  profileP.appendChild(githubAddressLink);

  return cardDiv;
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

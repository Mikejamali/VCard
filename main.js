let data =
  {
    "login": "Mikejamali",
    "id": 30128246,
    "avatar_url": "https://avatars2.githubusercontent.com/u/30128246?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Mikejamali",
    "html_url": "https://github.com/Mikejamali",
    "followers_url": "https://api.github.com/users/Mikejamali/followers",
    "following_url": "https://api.github.com/users/Mikejamali/following{/other_user}",
    "gists_url": "https://api.github.com/users/Mikejamali/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Mikejamali/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Mikejamali/subscriptions",
    "organizations_url": "https://api.github.com/users/Mikejamali/orgs",
    "repos_url": "https://api.github.com/users/Mikejamali/repos",
    "events_url": "https://api.github.com/users/Mikejamali/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Mikejamali/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Mike Jamali",
    "company": "github",
    "blog": "",
    "location": null,
    "email": "michaeljamali@gmail.com",
    "hireable": null,
    "bio": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2017-07-12T19:50:48Z",
    "updated_at": "2017-07-14T17:35:10Z"
  }
let the_basics = document.querySelector(".the_basics");
let the_story = document.querySelector(".the_story");
let picbox = document.querySelector(".pic");

let request = new XMLHttpRequest();
request.addEventListener("load", displayCharacters);
request.open('GET', 'https://api.github.com/users/Mikejamali');
request.send();

console.log(data);
function displayCharacters () {
  let data = JSON.parse(this.responseText);
}

let templateLiteral = `${data.name}`
let list = `
<h2>The Basics</h2>

  <div> ${data.name}
  </div>
  <div> ${data.url}
  </div>
  <div> ${data.email}
  </div>
  <div> ${data.company}
  </div>
  <div> ${data.repos_url}
  </div>

`;
let story = `<h2>The Story</h2>
<h4>Blah blah blah and stuff with things of more <br> stuff with stuff and more blah and things <br> with stuff. Can we please learn Jquery?</h4>
`;
let pic = `<img src="https://avatars2.githubusercontent.com/u/30128246?v=4" alt="githubavatar">`;



the_basics.innerHTML = list;
the_story.innerHTML = story;
picbox.innerHTML = pic;

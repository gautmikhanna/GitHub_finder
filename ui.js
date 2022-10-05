class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  //display profile & ui
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
        <div class="card card-body mb-3 bg-secondary">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary bg-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-success bg-primary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-primary bg-primary">Followers: ${user.followers}</span>
        <span class="badge badge-info bg-primary">Following: ${user.following}</span>
        <br><br>
        <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li 
        class="list-group-item">Website/Blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
  }
  //show profile
  showRepos(repos) {
    let output = '';
    repos.forEach(function(repo) {
      output +=`
        <div class="card card-body mb-2">
         <div class="row">
        <div class="col-mb-6">
        <a href="${repo.html_url}" taget="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary bg-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-success bg-primary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-primary bg-primary">Forks: ${repo.forms_count}</span>
        </div>
        </div>
        </div>
        `;
    });
    document.getElementById("repos").innerHTML = output;
  }
  //show alert mssg
  showAlert(message, className) {
    this.clearAlert();
    //creat div
    const div = document.createElement("div");
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);
    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

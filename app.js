const github = new GitHub();
const ui = new UI();
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //show alert
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .then();
  } else {
    //clear profile
    ui.clearProfile();
  }
});

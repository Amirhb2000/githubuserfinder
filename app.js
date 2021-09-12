// Init Github
const github = new Github();

// Search input
const searchUser = document.getElementById("searchUser");

// Search User Event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  //   Check if user is not empty
  if (userText !== "") {
    //   Make Http Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
      } else {
        // Show Profile
      }
    });
  } else {
    //   Clear Profile
  }
});

const links = {
  github: "guialves96",
  youtube: "channel/UCYtjt4H1OSKuojdR8dKvhyw",
  facebook: "profile.php?id=100069126086287",
  instagram: "gui.alvesofc",
  twitter: "GuilhermeA_L"
}

function changeLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class")

    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

changeLinks()

function getApiGitHub() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLink.children[1].textContent = data.login
    })
}

getApiGitHub()
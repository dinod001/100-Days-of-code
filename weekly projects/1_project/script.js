document.getElementById("search").addEventListener("click", async () => {
    const username = document.getElementById("username").value;

    // Clear previous data
    const profileList = document.getElementById("profile");
    const reposList = document.getElementById("repos");
    profileList.innerHTML = "";
    reposList.innerHTML = "";
    const image = document.getElementById("image");
    image.style.display = "none";

    try {
        const data = await getProfile(username);

        // Display profile
        profileList.textContent = "Github Profile";
        image.src = data.avatar_url;
        image.style.display = "block";

        for (let key in data) {
            if (key !== "avatar_url") {
                const item = document.createElement("li");
                item.textContent = key + ": " + data[key];
                profileList.appendChild(item);
            }
        }

        // Display repositories
        const repos = await displayRepos(username);
        if (repos != undefined) {
            repos.map(d => {
                const item = document.createElement("li");
                item.textContent = d.name;
                reposList.appendChild(item);
            });
        }

    } catch (error) {
        // Display error to user
        const heading = document.createElement("h1");
        heading.textContent = error.message;
        heading.style.color = "red";
        heading.style.fontSize = "20px";
        heading.style.marginTop = "20px";

        // Append error to the body or a container
        document.body.appendChild(heading);
    }
});

async function getProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
        throw new Error("User not found"); // Important: throw Error object
    }

    const data = await response.json();
    return {
        name: data.name,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        avatar_url: data.avatar_url
    };
}

async function displayRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
        throw new Error("User not found");
    }

    const data = await response.json();
    return data;
}

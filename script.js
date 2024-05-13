// Team Member Data

const teamMembers = [
  {
    name: "Scar",
    age: "40",
    movie: "Lion King",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/scar.png" 


  },
  {
    name: "Maleficent",
    age: "40",
    movie: "Maleficent",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/maleficent.jpeg" 
  },
  {
    name: "Jafar",
    age: "40",
    movie: "Lion King",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/scar.png" 
  },
  {
    name: "Ursula",
    age: "40",
    movie: "Lion King",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/scar.png" 
  },
  {
    name: "Evil Queen",
    age: "40",
    movie: "Lion King",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/scar.jpeg" 
  },
  {
    name: "Captain Hook",
    name: "Scar",
    age: "40",
    movie: "Lion King",
    strengths: "Scar is intelligent",
    weaknesses: "Scar has an ego and jealousy that drive him to do horrible things",
    characterTraits: ["Dribbling", "Shooting", "Passing"],
    biography:
      "Lionel Messi is considered one of the greatest football players of all time...",
      imageURL: "imgs/scar.png" 
  },


];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    //style the BGColor of my card based on pos

    switch (member.movie.toLowerCase()) {
      case "lion king":
        backgroundColor = "orange";
        break;
      case "maleficent":
        backgroundColor = "purple";
        break;
      case "defender":
        backgroundColor = "blue";
        break;
      default:
        backgroundColor = "gray";
    }

    card.innerHTML = `
              <div class="card">
                  <div class = "card-header">
                      ${member.name}
                  </div>
                  <img src="${member.imageURL}" class="image-fluid">
                  <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                      <p><strong>Age:</strong> ${member.age}</p>
                      <p><strong>Movie Known For :</strong> ${member.movie}</p>
                      <p><strong>Position:</strong> ${member.movie}</p>
                      <p><strong>Position:</strong> ${member.movie}</p>
                      <p><strong>Position:</strong> ${member.movie}</p>
                      <p><strong>Position:</strong> ${member.movie}</p>
                      <p><strong>Position:</strong> ${member.movie}</p>
                  </div>
              </div>
          `;
    //will update the BG style on each child of the card
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor;
    }
 
    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards();

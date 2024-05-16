const teamMembers = [
  {
      name: "Scar",
      age: "52",
      movie: "Lion King",
      strengths: "Intelligence, Manipulation",
      weaknesses: "Ego, Jealousy",
      traits: ["Mysterious", "Determined", "Complex"],
      biography: "Scar is the main antagonist in Disney's 'The Lion King.' He is the brother of Mufasa and the uncle of Simba.",
      imageURL: "imgs/scar.png"
  },
  {
      name: "Maleficent",
      age: "41",
      movie: "Maleficent",
      strengths: "Magic, Cunning",
      weaknesses: "Vengeful, Isolation",
      traits: ["Determined", "Powerful", "Resilient"],
      biography: "Maleficent is the main character in Disney's 'Maleficent.' She is portrayed as the protector of the Moors but is betrayed, leading to her transformation into the iconic Disney villain.",
      imageURL: "imgs/Maleficent.webp"
  },
  {
      name: "Jafar",
      age: "Mid 30s",
      movie: "Aladdin",
      strengths: "Sorcery, Manipulation",
      weaknesses: "Ambition, Arrogance",
      traits: ["Cunning", "Ambitious", "Manipulative"],
      biography: "Jafar is the main antagonist in Disney's 'Aladdin.' He is the Grand Vizier of Agrabah who seeks to gain control of the kingdom using dark magic.",
      imageURL: "imgs/jafar.webp"
  },
  {
      name: "Ursula",
      age: "95",
      movie: "Little Mermaid",
      strengths: "Magic, Charisma",
      weaknesses: "Greed, Vanity",
      traits: ["Charismatic", "Deceptive", "Power-hungry"],
      biography: "Ursula is the main antagonist in Disney's 'The Little Mermaid.' She is a sea witch who offers Ariel a deal to become human in exchange for her voice.",
      imageURL: "imgs/ursula.png"
  },
  {
      name: "Evil Queen",
      age: "Late 40s",
      movie: "Snow White",
      strengths: "Magic, Vanity",
      weaknesses: "Jealousy, Vanity",
      traits: ["Vain", "Jealous", "Cruel"],
      biography: "The Evil Queen is the main antagonist in Disney's 'Snow White and the Seven Dwarfs.' She is jealous of Snow White's beauty and plots to have her killed.",
      imageURL: "imgs/evilqueen.png"
  },
  {
      name: "Captain Hook",
      age: "Early 50s",
      movie: "Peter Pan",
      strengths: "Swordsmanship, Leadership",
      weaknesses: "Fear of Crocodiles, Obsession with Revenge",
      traits: ["Arrogant", "Cowardly", "Vengeful"],
      biography: "Captain Hook is the main antagonist in 'Peter Pan.' He is the leader of the pirates and is obsessed with getting revenge on Peter Pan for cutting off his hand and feeding it to a crocodile.",
      imageURL: "imgs/captainhook.png"
  },
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");

      // Style the BGColor of my card based on pos
      let backgroundColor;
      switch (member.movie.toLowerCase()) {
          case "lion king":
              backgroundColor = "rgb(216,139,10)";
              break;
          case "maleficent":
              backgroundColor = "rgb(46,15,80)";
              break;
          case "aladdin":
              backgroundColor = "rgb(138, 43, 226)";
              break;
          case "little mermaid":
              backgroundColor = "rgb(145,77,168)";
              break;
          case "snow white":
              backgroundColor = "rgb(29,30,43)";
              break;
          case "peter pan":
              backgroundColor = "rgb(16,66,29)";
              break;
          default:
              backgroundColor = "gray";
      }

      card.innerHTML = `
          <div class="card">
              <div class="card-header">
                  ${member.name}
              </div>
              <img src="${member.imageURL}" class="image-fluid">
              <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
                  <p><strong>Age:</strong> ${member.age}</p>
                  <p><strong>Movie Known For:</strong> ${member.movie}</p>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Character Traits:</strong> ${member.traits.join(", ")}</p>
                  <p><strong>Biography:</strong> ${member.biography}</p>
              </div>
          </div>
      `;

      // Will update the BG style on each child of the card
      for (let i = 0; i < card.children.length; i++) {
          card.children[i].style.backgroundColor = backgroundColor;
      }

      teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards;
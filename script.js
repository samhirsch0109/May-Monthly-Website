const teamMembers = [
  {
      name: "Scar",
      age: "52",
      movie: "Lion King",
      strengths: "Intelligence, Manipulation",
      weaknesses: "Ego, Jealousy",
      traits: ["Mysterious", "Determined", "Complex"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],

      imageURL: "imgs/scar.png"
  },
  {
      name: "Maleficent",
      age: "41",
      movie: "Maleficent",
      strengths: "Magic, Cunning",
      weaknesses: "Vengeful, Isolation",
      traits: ["Determined", "Powerful", "Resilient"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],
      imageURL: "imgs/Maleficent.webp"
  },
  {
      name: "Jafar",
      age: "Mid 30s",
      movie: "Aladdin",
      strengths: "Sorcery, Manipulation",
      weaknesses: "Ambition, Arrogance",
      traits: ["Cunning", "Ambitious", "Manipulative"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],
      imageURL: "imgs/jafar.webp"
  },
  {
      name: "Ursula",
      age: "95",
      movie: "Little Mermaid",
      strengths: "Magic, Charisma",
      weaknesses: "Greed, Vanity",
      traits: ["Charismatic", "Deceptive", "Power-hungry"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],
      imageURL: "imgs/ursula.png"
  },
  {
      name: "Evil Queen",
      age: "Late 40s",
      movie: "Snow White",
      strengths: "Magic, Vanity",
      weaknesses: "Jealousy, Vanity",
      traits: ["Vain", "Jealous", "Cruel"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],
      imageURL: "imgs/evilqueen.png"
  },
  {
      name: "Captain Hook",
      age: "Early 50s",
      movie: "Peter Pan",
      strengths: "Swordsmanship, Leadership",
      weaknesses: "Fear of Crocodiles, Obsession with Revenge",
      traits: ["Arrogant", "Cowardly", "Vengeful"],
      skills: ["Manipulation", "Strategic Thinking", "Deception"],
      imageURL: "imgs/captainhook.png"
  },
  {
    name: "Gaston",
    age: "Late 20s or early 30s",
    movie: "Beauty and the Beast",
    strengths: "Physical Strength, Charisma",
    weaknesses: "Arrogance, Hubris",
    traits: ["Narcissistic, Competitive, Boastful"],
    skills: ["Manipulation", "Strategic Thinking", "Deception"],
    biography: "Gaston is the arrogant antagonist of Beauty and the Beast, driven by his jealousy of the Beast and obsession with marrying Belle.",
    imageURL: "imgs/gaston.png"
},
{
    name: "Cruella de Vil",
    age: "Late 40s",
    movie: "Snow White",
    strengths: "Magic, Vanity",
    weaknesses: "Jealousy, Vanity",
    traits: ["Vain", "Jealous", "Cruel"],
    skills: ["Manipulation", "Strategic Thinking", "Deception"],
    biography: "Cruella de Vil, the villain in 101 Dalmatians, is a ruthless fashionista who obsesses over capturing dalmatian puppies for fur coats.",
    imageURL: "imgs/evilqueen.png"
},
{
    name: "Hades",
    age: "Early 50s",
    movie: "Peter Pan",
    strengths: "Swordsmanship, Leadership",
    weaknesses: "Fear of Crocodiles, Obsession with Revenge",
    traits: ["Arrogant", "Cowardly", "Vengeful"],
    skills: ["Manipulation", "Strategic Thinking", "Deception"],
    biography: "Hades, the scheming ruler of the Underworld in Hercules, is sarcastic and power-hungry, constantly plotting to overthrow Zeus.",
    imageURL: "imgs/captainhook.png"
},
{
    name: "Queen of Hearts",
    age: "Early 50s",
    movie: "Peter Pan",
    strengths: "Swordsmanship, Leadership",
    weaknesses: "Fear of Crocodiles, Obsession with Revenge",
    traits: ["Arrogant", "Cowardly", "Vengeful"],
    skills: ["Manipulation", "Strategic Thinking", "Deception"],
    biography: "The tyrannical Queen of Hearts from Alice in Wonderland rules with an iron fist, quick to anger and prone to ordering executions.",
    imageURL: "imgs/captainhook.png"
},
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", 'mb-4');

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
            case "beauty and the beast":
            backgroundColor = "rgb(184,169,22)";
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
                  <p><strong>Skills:</strong> ${member.skills.join(", ")}</p>
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
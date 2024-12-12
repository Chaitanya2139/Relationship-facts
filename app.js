const factsData = {
    
        "relationshipPsychologyFacts": [
          {
            "id": 1,
            "fact": "The 'Mere Exposure Effect' suggests that people tend to develop preferences for things simply because they are familiar with them, which explains why we often feel attracted to people we frequently encounter.",
            "category": "attraction",
            "image": "https://example.com/path-to-image.jpg"
          },
          {
            "id": 2,
            "fact": "According to research, couples who laugh together frequently have stronger relationships and stay together longer.",
            "category": "bonding"
          },
          {
            "id": 3,
            "fact": "The 'Gottman Method' suggests that for a relationship to be stable, there needs to be a 5:1 ratio of positive to negative interactions.",
            "category": "relationship_maintenance"
          },
          {
            "id": 4,
            "fact": "Physical touch releases oxytocin, often called the 'love hormone,' which helps in building trust and emotional bonds between partners.",
            "category": "biochemistry"
          },
          {
            "id": 5,
            "fact": "Partners who actively celebrate each other's successes have stronger relationships than those who only provide support during difficult times.",
            "category": "support"
          },
          {
            "id": 6,
            "fact": "The 'Romeo and Juliet Effect' suggests that opposition to a relationship from outside sources can actually intensify romantic feelings.",
            "category": "attraction"
          },
          {
            "id": 7,
            "fact": "Couples who maintain their own individual interests and friendships typically have healthier relationships than those who become overly dependent on each other.",
            "category": "independence"
          },
          {
            "id": 8,
            "fact": "The way couples handle conflicts in the first two years of their relationship typically predicts their long-term relationship success.",
            "category": "conflict_resolution"
          },
          {
            "id": 9,
            "fact": "Couples who share household responsibilities equally report higher relationship satisfaction and better intimate lives.",
            "category": "domestic_life"
          },
          {
            "id": 10,
            "fact": "The 'Proximity Effect' shows that physical closeness is one of the strongest predictors of attraction and relationship formation.",
            "category": "attraction"
          },
          {
            "id": 11,
            "fact": "Partners who text frequently tend to report greater relationship satisfaction, but only when the messages express affection rather than logistics.",
            "category": "communication"
          },
          {
            "id": 12,
            "fact": "Couples who regularly try new activities together maintain higher levels of relationship satisfaction over time.",
            "category": "bonding"
          },
          {
            "id": 13,
            "fact": "The 'Attachment Theory' suggests that early childhood relationships with caregivers significantly influence adult romantic relationships.",
            "category": "psychology"
          },
          {
            "id": 14,
            "fact": "Relationships where partners respond enthusiastically to each other's good news are more likely to last than those where partners respond passively.",
            "category": "communication"
          },
          {
            "id": 15,
            "fact": "Couples who wait at least six months before making major decisions about their relationship have a higher chance of long-term success.",
            "category": "commitment"
          },
          {
            "id": 16,
            "fact": "The 'Misattribution of Arousal' theory suggests that people can mistake physiological arousal (like from exercise) for romantic attraction.",
            "category": "attraction"
          },
          {
            "id": 17,
            "fact": "Partners who go to bed at the same time report higher relationship satisfaction and better communication.",
            "category": "habits"
          },
          {
            "id": 18,
            "fact": "Successful long-term couples typically have a ratio of 87% positive interactions during conflict discussions.",
            "category": "conflict_resolution"
          },
          {
            "id": 19,
            "fact": "Couples who express gratitude towards each other regularly experience increased relationship satisfaction and commitment.",
            "category": "appreciation"
          },
          {
            "id": 20,
            "fact": "The 'Social Exchange Theory' suggests that people evaluate relationships by comparing their costs and benefits to alternative relationships.",
            "category": "psychology"
          }
        ]
      };
      
  
  
  // Rest of your existing app.js code remains the same
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const factsContainer = document.getElementById('facts-container');
      const categoryFilter = document.getElementById('category-filter');
      
      // Get unique categories and populate filter dropdown
      const categories = [...new Set(factsData.relationshipPsychologyFacts.map(fact => fact.category))];
      categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category;
          option.textContent = category.replace('_', ' ');
          categoryFilter.appendChild(option);
      });
  
      // Display facts function
      // In app.js, modify the displayFacts function
function displayFacts(filter = 'all') {
    factsContainer.innerHTML = '';
    factsData.relationshipPsychologyFacts
        .filter(fact => filter === 'all' || fact.category === filter)
        .forEach(fact => {
            const factCard = document.createElement('div');
            factCard.className = 'fact-card';
            factCard.innerHTML = `
                ${fact.image ? `<img src="${fact.image}" alt="Fact illustration" class="fact-image">` : ''}
                <div class="fact-category">Category: ${fact.category.replace('_', ' ')}</div>
                <div class="fact-text">${fact.fact}</div>
            `;
            factsContainer.appendChild(factCard);
        });
}

  
      // Initial display
      displayFacts();
  
      // Filter change event listener
      categoryFilter.addEventListener('change', (e) => {
          displayFacts(e.target.value);
      });
  });
  

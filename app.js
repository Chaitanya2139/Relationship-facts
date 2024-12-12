    // app.js
const factsData = {
    "relationshipPsychologyFacts": [
      {
        "id": 1,
        "fact": "The 'Mere Exposure Effect' suggests that people tend to develop preferences for things simply because they are familiar with them, which explains why we often feel attracted to people we frequently encounter.",
        "category": "attraction"
      },
      {
        "id": 2,
        "fact": "According to research, couples who laugh together frequently have stronger relationships and stay together longer.",
        "category": "bonding"
      },
      // ... remaining facts from 3-20 as shown in the previous JSON
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
      function displayFacts(filter = 'all') {
          factsContainer.innerHTML = '';
          factsData.relationshipPsychologyFacts
              .filter(fact => filter === 'all' || fact.category === filter)
              .forEach(fact => {
                  const factCard = document.createElement('div');
                  factCard.className = 'fact-card';
                  factCard.innerHTML = `
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
  

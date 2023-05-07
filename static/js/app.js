const url = 'https://fakerapi.it/api/v1/images?_quantity=20&_type=kittens&_height=300&'


fetch(url)
  .then(response => response.json())
  .then(data => {
    data.data.forEach(item => {
    
    const cardHeader = item.title;
    const imageUrl = item.url;
    const cardText = item.description;
    const cardContainer = document.createElement('div');
    cardContainer.innerHTML = `
    <div class="card">
      <h2>${cardHeader}</h2>
      <img src="${imageUrl}" alt="cat-img" />
      <p>${cardText}</p>
    </div>
    `;
    const cardCnt = document.querySelector(".card-container")
    cardCnt.appendChild(cardContainer);
  })
})
.catch(err => {
  const p = document.createElement('p');
  p.textContent = err;
  p.style.color = 'red';
  p.style.fontSize = "30px"
  document.body.appendChild(p);
}) 

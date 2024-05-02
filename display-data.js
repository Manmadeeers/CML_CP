let goods = [];
let WAY = "";
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            goods = Array.from(data.querySelectorAll('good')).map(goods => {
                return {
                    name: goods.querySelector('name').textContent,
                    price: goods.querySelector('price').textContent,
                    image: goods.querySelector('image').textContent,
                };
            });
            return goods;
        });
}
function addItemsToDOM(goods) {
    const goodsList = document.querySelector('.goods');
    // Очищаем список перед добавлением новых элементов
    // goodsList.innerHTML = '';
    goods.forEach(good => {
        console.log(good);
        const goodDiv = document.createElement('div');
        goodDiv.className = 'good';
        goodDiv.innerHTML = `
            <img src="${good.image}">
            <p>${good.name}</p>
            <p> ${good.price}</p>
        `;
        // Добавляем обработчик событий onclick
        goodDiv.onclick = function() {
            loadItemDetails(WAY, good.name);
        };
        goodsList.appendChild(goodDiv);
    });
}
function getID(){
    const params = new URLSearchParams(window.location.search);
    const pathURL =params.get('path');
    WAY = "data/"+pathURL+".xml";
    console.log(WAY);
    return WAY;
}

document.addEventListener('DOMContentLoaded', function() {
    let got = getID();
    loadXML(got).then(() => {
    console.log(goods.name); 
    addItemsToDOM(goods);
    })
    .catch(error => console.error('Error fetching XML:', error));
})
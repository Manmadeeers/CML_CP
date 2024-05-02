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
        // console.log(good);
        const goodDiv = document.createElement('div');
        goodDiv.className = 'good-div';
        goodDiv.innerHTML = `
            <img src="${good.image}">
            <p>${good.name}</p>
            <p> ${good.price}</p>
        `;
        // Добавляем обработчик событий onclick
        goodDiv.onclick = function () {
            loadItemDetails(WAY, good.name);
        };
        goodsList.appendChild(goodDiv);
    });
}
function loadItemDetails(xmlPath, itemName) {
    const params = new URLSearchParams(window.location.search);
    const pathURL = params.get('path');
    window.location.href = `info.html?itemName=${itemName}&path=${pathURL}`;

}
function getID() {
    const params = new URLSearchParams(window.location.search);
    const pathURL = params.get('path');
    WAY = "data/" + pathURL + ".xml";
    console.log(WAY);
    return WAY;
}
function setWay(currentPath) {
    let name;
    if (currentPath === "data/data.xml") {
        name = "Одежда";
    }
    else if (currentPath === "data/shoe.xml") {
        name = "Обувь";
    }
    else if (currentPath === "data/equip.xml") {
        name = "Экипировка";
    }
    return name;
}
function getButton(currentPath) {
    let id;
    if (currentPath === "data/data.xml") {
        id = "wear-button";
    }
    else if (currentPath === "data/shoe.xml") {
        id = "shoe-button";
    }
    else if (currentPath === "data/equip.xml") {
        id = "equip-button";
    }
    return id;
}

document.addEventListener('DOMContentLoaded', function () {

    let got = getID();
    let NAME = setWay(got);
    let changeBG = getButton(got);
    loadXML(got).then(() => {
        document.getElementById('good-name').textContent = NAME;
        document.getElementById(changeBG).style.backgroundColor = "#171A5B";
        document.getElementById(changeBG).style.color = "white";
        console.log(goods.name);
        addItemsToDOM(goods);
    })
        .catch(error => console.error('Error fetching XML:', error));
})
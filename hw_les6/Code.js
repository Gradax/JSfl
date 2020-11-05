//   Каталог + глобальные переменные
var j = 1,
    sum = 0,
    catalog = [
        {
            name: "Уныние",
            smallSrc: "img_small/upset.jpg",
            bigSrc: "img_big/upset.jpg",
            description: "Переписал весь код, потому что он не работал, и в конце понял, что просто пропустил запятую",
            price: 999,
            unit: "нервных клеток"
},
        {
            name: "Злость",
            smallSrc: "img_small/angry.jpeg",
            bigSrc: "img_big/angry.jpg",
            description: "Когда узнал, что проблема, которую решал 2 дня, решается одной строкой",
            price: 666,
            unit: "нервных клеток"
},
        {
            name: "Радость",
            smallSrc: "img_small/happy.jpg",
            bigSrc: "",
            description: "Нервные клетки не восстанавливаются.",
            price: 0,
            unit: "нервных клеток"
}
];

// Функции
function constructing() {
    var divcatalog = document.getElementsByClassName("catalog")[0];
    var i, item;
    for (i = 0; i < catalog.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "div_item" + " " + "div_" + i);
        item.style.position = "relative";
        item.style.border = "1px solid gray";
        item.style.minHeight = "570px";
        item.style.width = "400px";

        itemTitle = document.createElement("span");
        itemTitle.textContent = (catalog[i].name);
        item.appendChild(itemTitle);

        itemImg = document.createElement("img");
        itemImg.src = catalog[i].smallSrc;
        itemImg.style.display = "block";
        itemImg.style.height = "240px";
        itemImg.style.width = "320px";
        itemImg.setAttribute("id", "img_" + i);
        itemImg.onclick = function imgClick(e) {
            //            Не работает
            /* var allItems = document.querySelectorAll('.div_item');            
             for (var z = 0; z <= allItems.length; z++) {
                 allItems[z].style.border = "1px solid green";
             }*/
            var numberTarget = e.target.id.split('_')[1];
            var selectedDiv = document.querySelector('.div_' + numberTarget);
            selectedDiv.style.border = "1px solid yellow";
            var bigImg = document.getElementById('bigImg');
            bigImg.src = catalog[numberTarget].bigSrc;
        }
        item.appendChild(itemImg);

        itemDesc = document.createElement("p");
        itemDesc.textContent = (catalog[i].description);
        itemDesc.style.fontSize = "28px";
        item.appendChild(itemDesc);


        itemPrice = document.createElement("span");
        itemPrice.textContent = ("Цена: " + catalog[i].price + '\n' + catalog[i].unit);
        itemPrice.style.fontSize = "28px";
        itemPrice.style.fontWeight = 'bold';
        item.appendChild(itemPrice);

        itemBtn = document.createElement("button");
        itemBtn.textContent = "Дайте !";
        itemBtn.setAttribute("id", "btn_" + i);
        itemBtn.onclick = addToBasket;
        item.appendChild(itemBtn);

        divcatalog.appendChild(item);
    }
}

function addToBasket(e) {
    var selectedItem = catalog[e.target.id.split('_')[1]];
    var selectedItems = document.querySelectorAll(".selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.style.textAlign = "center";
    td.style.width = "100px";
    td.appendChild(document.createTextNode("    " + selectedItem.price));

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Итого: " + sum + " " + selectedItem.unit;
    document.getElementsByClassName("ps")[0].textContent = "P/S: В суммарном количестве программирование на данный момент - это куча потраченных нервов и немного радости =)";
}

function left() { //Когда время будет, попробую реализовать, чтоб оно понимало, на какой картинке оно сейчас находится, сравнив путь файла из массива с текущим, и от него уже начинало отсчет;
    var bigImg = document.getElementById('bigImg');
    //    bigImg.src = '';
    j--;
    if (j == -1) {
        j = catalog.length - 1;
    }
    bigImg.src = catalog[j].bigSrc;

}

function right() { //Когда время будет, попробую реализовать, чтоб оно понимало, на какой картинке оно сейчас находится, сравнив путь файла из массива с текущим, и от него уже начинало отсчет;
    var bigImg = document.getElementById('bigImg');
    //    bigImg.src = '';
    j++;
    if (j >= catalog.length) {
        j = 0;
    }
    bigImg.src = catalog[j].bigSrc;

}

// Тело

window.onload = constructing;
//window.onload = document.getElementById("img_0").click(); //не работает ( ?

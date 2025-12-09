async function getResponce() {
    let responce = await fetch("shop.json") //Загрузка файла
    let content = await responce.text() //Получение текста из файла
    console.log(content)   // Вывод сырого текста в консоль для отладки
    content = JSON.parse(content)     // Парсинг JSON строки в JavaScript объект, метод в JavaScript, который преобразует строку в формате JSON в объект JavaScript
    content = content.splice(0, 8)
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title) //Вывод id и названия каждого товара
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px;" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-subtitle mt-1">${content[key].title}</h5>
        <p class="card-text"> Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                `
    }


}
getResponce()

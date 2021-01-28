var request = new XMLHttpRequest();
request.open(
    'GET', 
    'http://learn.api.axenov-it.com/users'); // отправляем запрос
request.send();
var container_div = document.querySelector('.container'); // доступ к блоку в который вставляем шаблон из js


function data() {  // функция которая сработает после загрузки данных с сервера
    function insert() {
        users = JSON.parse(request.response); // преобразование строки в объекты
        var html = ''; // переменная для шаблона
        var num = 1; // счетчик для порядка элементов
        for (var user of users) { // функция для хтмл скилета
            html += `<div class="container__hide">
               <span class="container__short__num">${num}</span>
               <span "container__short__name">${user.name}</span>
               <button id="btn" class="container__short__btn">show</button>
               </div>
               <div class="hide">
                    <div class="container__img">
                        <img src="./в проект.jpeg" alt="" class="img">
                     </div>
                    <div class='container__general'>
                    <h3 class="show__name">${user.name}</h3>
                    <div class="show__info">
                        <div class="show__general">
                            <div class="show__age">
                            <b>age:</b> ${user.age}
                            </div>
                            <div class="show__gender">
                            <b>Gender:</b> ${user.gender}
                            </div>
                            <div class="show__city">
                            <b>City:</b> ${user.city}
                            </div>
                            <div class="show__adress">
                            <b>address:</b> ${user.address}
                            </div>
                            <div class='show__email'>
                            <b>email:</b> ${user.email}
                            </div>
                        </div>
                        <div class="show__phones">
                        <b>phones:</b> 
                        <p>${user.phones[0]}
                        </p>
                        <p>${user.phones[1]}
                        </p>
                        <p>${user.phones[2]}
                        </p>
                        </div>
                    </div>
                    
               <div class="companies">
               <b>Companies:  </b>
                   <p>
                   ${user.companies[0].name},${user.companies[0].address}
                   </p> 
                   <p>
                   ${user.companies[1].name},${user.companies[0].address}
                   </p> 
                   <p>
                   ${user.companies[2].name},${user.companies[0].address}
                   </p> 
               </div>    
               </div>
               </div>`;
            num++;
        }
        
        container_div.innerHTML = html; // вставляем скилет в хтмл страницу
    }
    insert();

    var container_btn = document.querySelectorAll('.container__short__btn'); // доступ  к кнопе

    for (getBtn of container_btn) { // повесить функцию на каждую кнопку
        getBtn.onclick = btns;
        }

        function btns () { // функция на онклик

            var parent = this.parentElement; // доступ к родительскому элементу
            var nextElement = parent.nextElementSibling; // доступ к следующему элументу после 
                                                        //родителя (блок который нужно вывести)
            if (nextElement.className=='hide'){ // при нажатии сравнение класса и изменение 
                                                //его на противоположный (показать / скрыть)
                nextElement.className='show';
            }
            else {
                nextElement.className='hide';
            }
            if (this.innerText == 'show'){ // замена текста кнопки
                this.innerText = 'hide';
                parent.className ='container__hide__color';
            }
            else {
                this.innerText = 'show';
                parent.className ='container__hide';
            }
            
        }

        
    }

request.onload = data;
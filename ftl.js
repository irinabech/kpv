window.onload = function(){
    let button = document.getElementById('startButton');
    let games = document.getElementById('games')
    let colors = ["red","yellow", "Teal", "cyan", "orange", "DeepPink", "magenta", "beige", "Aqua", "Lime"];
    let array = [];
    let lett = document.getElementById('letter');
    let point = document.getElementById('point');
    let still = document.getElementById('still');
    let found = document.getElementById('found');
    let information = document.getElementById('information');
    let counter = {};
    let find_number = 0;
    let points = 0
    let j = 0;
    let chips = []
    
    button.onclick = function(){
      let x = 1150;
      let y = 550;

      //Рандомные 10 букв
      for(let i =0; i<10; i++) {
        let chr = String.fromCharCode(Math.floor(Math.random()*31)+1072);
        while(array.indexOf(chr) != -1)
          chr = String.fromCharCode(Math.floor(Math.random()*31)+1072);
        array.push(chr);
        counter[chr] = 0;
      }
      console.log(array);

      startButton.parentNode.removeChild(startButton)//удаление кнопки "Начать"

      for(let i=0; i<100;i++) {
        let fichka = document.createElement("span");
        fichka.className = 'fich';
        let x_i = Math.floor(Math.random()*(x/10-60)) + (i%10)*x/10;
        fichka.style.left = x_i + "px";
        let y_i = Math.floor(Math.random()*(y/10-60)) + (i/10)*y/10;
        fichka.style.top = y_i + "px";
        let color = Math.floor(Math.random() * colors.length); 
        fichka.style.backgroundColor = colors[color];
        let chr = array[Math.floor(Math.random()*10)];
        fichka.innerHTML =  chr;
        counter[chr]++
        //console.log(fichka);
        games.appendChild(fichka);

        fichka.onclick = function() {
          if(chr == array[find_number]) {
            fichka.parentNode.removeChild(fichka);
            points++;
            counter[chr]--;
            j++;
            if(counter[chr] == 0) {
              find_number++;
            }
            chips.pop(fichka);
          }
          else {
            points--;
          }
          if(chips.length > 0) {
            lett.innerHTML = "Найди букву: "+ array[find_number];
            point.innerHTML = "Баллов: "+ points;
            still.innerHTML = "Осталось найти " + counter[array[find_number]] + ' фишек с "' + array[find_number] + '"';
            found.innerHTML = "Найдено: " + j;
          }
          else {
            //вывести сообщение о победе
            information.parentNode.removeChild(information);
            info.innerHTML = "Вы победили!";
          }
        }
        chips.push(fichka);
      }//фишки
      
      //Ищем букву...
      lett.innerHTML = "Найди букву: "+ array[find_number];
      point.innerHTML = "Баллов: "+ points;
      still.innerHTML = "Осталось найти " + counter[array[find_number]] + ' фишек с "' + array[find_number] + '"'
      found.innerHTML = "Найдено: 0";
    }//onclick
}//onload
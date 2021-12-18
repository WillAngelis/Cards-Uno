const green = document.querySelector('.buttons--green')
const blue = document.querySelector('.buttons--blue')
const red = document.querySelector('.buttons--red')
const yellow = document.querySelector('.buttons--yellow')
const black = document.querySelector('.buttons--black')
const card = document.querySelector('.card__container')
let btns = [green,blue,red,yellow,black]
 
btns.forEach(function(i,value,array){
  i.addEventListener('click',(e)=>{ 
    const cardname = (`card__${[value]}`)
    card.classList = ''
    card.classList.add('card__container')
    card.classList.add(`${cardname}`)
   })
})
//Selecionando botões
const green = document.querySelector('.buttons--green')
const blue = document.querySelector('.buttons--blue')
const red = document.querySelector('.buttons--red')
const yellow = document.querySelector('.buttons--yellow')
const black = document.querySelector('.buttons--black')
const card = document.querySelector('.card__container')

//Array com botões
let btns = [green,blue,red,yellow,black]
 
btns.forEach(function(i,value,array){
  i.addEventListener('click',(e)=>{ // Ao clicar no botão dispara a função
    const cardname = (`card__${[value]}`)  // Pega o número do botão que corresponde no array // Exemplo botão green é 0
    card.classList = '' // Remove todas as classes da carta
    card.classList.add('card__container') // Adiciona a classe principal da carta
    card.classList.add(`${cardname}`); // Adiciona classe que contém o background usando a variavel cardname

    /*Exemplo caso o botão selecionado seja o green a variavel cardname recebe o valor card__0 onde zero corresponde ao 
    valor do botão no array btns */  
  })
})
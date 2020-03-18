// Данные городов

const cities = [
   'Москва', 'Санкт-Петербург', 'Минск', 'Караганда',
   'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Днепропетровск',
   'Ектаринбург', 'Одесса', 'Ухань', 'Шымкен', 'Нижний Новгород',
   'Калининград', 'Вроцлав', 'Росов-на-дону'
]

//Получение элемента (querySelector)
const formSearch = document.querySelector('.form-search')
    , inputCitiesFrom = formSearch.querySelector('.input__cities-from')
    , dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from')
    , inputCitiesTo = formSearch.querySelector('.input__cities-to')
    , dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to')
    , inputDateDepart = formSearch.querySelector('.input__date-depart')
    , buttonSearch = formSearch.querySelector('.button__search')


// Функции

renderResult = (cities, domElement) => {
   domElement.textContent = ``
   cities.forEach((city) => {
      const li = document.createElement('li')
      li.classList.add('dropdown__city')
      li.textContent = city
      domElement.append(li)
   })
}

hideHandle = function(renderDomElement){
   renderDomElement.textContent = ''
}

showHandle = function(domElement, renderDomElement){
   if (domElement.value !== '') {
      const filterCities = cities.filter((item) => {
         lowItem = item.toLowerCase()
         lowValue = domElement.value.toLowerCase()
         return lowItem.includes(lowValue)
      })
      renderResult(filterCities, renderDomElement)
   }else{
      hideHandle(renderDomElement)
   }
}

copyContent = function(domElementFrom, domElementTo){
   domElementTo.value = domElementFrom.textContent
}


// События
// Инпут откуда
inputCitiesFrom.addEventListener('input', function(){
   showHandle(this, dropdownCitiesFrom)
})
// при потере фокуса - вырубаем комбо
// inputCitiesFrom.addEventListener('blur', function(){
//    hideHandle(dropdownCitiesFrom)
// })
dropdownCitiesFrom.addEventListener('click',function(){
   if(event.target.tagName.toLowerCase() === 'li'){
      copyContent(event.target, inputCitiesFrom)
   }
   hideHandle(this)
})
// Инпут куда
inputCitiesTo.addEventListener('input', function () {
   showHandle(this, dropdownCitiesTo)
})
// при потере фокуса - вырубаем комбо
// inputCitiesTo.addEventListener('blur', function(){
//    hideHandle(dropdownCitiesTo)
// })
// при клике на дропдаун
dropdownCitiesTo.addEventListener('click',function(){
   if(event.target.tagName.toLowerCase() === 'li'){
      copyContent(event.target, inputCitiesTo)
   }
   hideHandle(this)
})

// Остальной код
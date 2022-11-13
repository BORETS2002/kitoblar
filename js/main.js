const ElList = document.querySelector(".list")
const Form = document.querySelector(".form")
const inputSearch = document.querySelector(".input-search")


function RenderArray(books ,  ElList) {
  ElList.innerHTML = ""
  const Frag = new DocumentFragment()
books.forEach(item => {
  const elTemp = document.querySelector(".templat").content.cloneNode(true)
  
  elTemp.querySelector(".imgs").src = item.imageLink
elTemp.querySelector(".title").textContent = item.title
elTemp.querySelector(".autor").textContent = item.author
elTemp.querySelector(".time ").textContent = item.year 
elTemp.querySelector(".page").textContent = item.pages 
elTemp.querySelector(".language").textContent = item.language
elTemp.querySelector(".wiki").href = item.link
elTemp.querySelector(".citi").textContent = item.country

 
  Frag.appendChild(elTemp)

})
ElList.appendChild(Frag)
}
RenderArray(books ,ElList )


Form.addEventListener("submit" , evt => {
  evt.preventDefault()
  
const elSearchValue = inputSearch.value

const elREgekt = new RegExp(elSearchValue , "gi")

const FindOption = books.filter(item => {
 return item.title.match(elREgekt)

})
console.log(FindOption);


if (  FindOption.length > 0  ) {
RenderArray(FindOption ,ElList )
  console.log("aaaa");
} else{
  ElList.innerHTML = "not Fount"
}

})

// if(fiterPoke.length > 0){
//   pokeSort(fiterPoke , elsort.value)
//   domDrew(fiterPoke , Lists)
// }
// else{
//   Lists.innerHTML = "Not Found"
// }
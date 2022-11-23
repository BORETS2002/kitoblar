const ElList = document.querySelector(".list")
const Form = document.querySelector(".form")
const inputSearch = document.querySelector(".input-search")
const inputAfter = document.querySelector(".search-after")
const inputYear = document.querySelector(".choose-year")
const  elSelect  = document.querySelector(".choose")
const  elSort  = document.querySelector(".choose-sort")


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



// Select
const geners = []

books.forEach(itm => {
 
      // if (! geners.includes(itm.language)) {
        geners.push(itm.language)
      // }
    
      
})

const netSet = new Set(geners)

const selectQop = new DocumentFragment()
netSet.forEach(item => {
  const Option = document.createElement("option");
Option.value =item;
Option.textContent = item;
selectQop.appendChild(Option)
})
elSelect.appendChild(selectQop)

// Select end



function FunkSort (arr,item){
 console.log(item);
  if (item == "A-Z"  ) {
    arr.sort((a,b)=>{
      if ( a.title < b.title ) {
        return -1 
      }
      else if (a.title > b.title){
        return 1
       
      }
      
    })
  }

  if (item == "Z-A"  ) {
    arr.sort((a,b)=>{
      
      if ( a.title < b.title ) {
        return 1
      }
      else if (a.title > b.title){
        return -1
      }
      
    })
    
  }
 if(item == "min-max"){
  arr.sort((a,b) => a.pages - b.pages ) 
 } 
 if(item == "max-min"){
  arr.sort((a,b) => b.pages - a.pages ) 
 } 

}




Form.addEventListener("submit" , evt => {
  evt.preventDefault()
  const afterValue = inputAfter.value
  // const yearValue = Number(inputYear.value)
  
  const elREgekt = new RegExp( inputSearch.value , "gi")
  const elSelectValue = elSelect.value
  const selectRegek = new RegExp (elSelectValue , "gi")
  const FindOption = books.filter(item => {
    
    
    const selectRegek = new RegExp (elSelectValue , "gi")
    return item.title.match(elREgekt) && (item.author.match(afterValue) || afterValue == "" ) && (item.year >= Number(inputYear.value) && (elSelect.value == "All" || item.language.match(selectRegek) ) )


  })
  
  
  
  if (  FindOption.length > 0  ) {
    RenderArray(FindOption ,ElList )
  
     
    FunkSort(books , elSort.value )
  } else{
    ElList.innerHTML = "not Fount"
  }
})


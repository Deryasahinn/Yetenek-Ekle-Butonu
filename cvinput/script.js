var kutu=document.getElementById('kutu')



function dilekle(){
  //ana div
  var diller=document.getElementById("diller")

  var dilrowlar=document.getElementsByClassName("dilrow")
  var dilrowsay=dilrowlar.length

 if(dilrowsay<5){
  // dil satırı
  var dilrow=document.createElement("div")
  dilrow.className="dilrow"
  diller.appendChild(dilrow)

  // dilunput
  var dilinput=document.createElement("input")
  dilinput.type="text"
  dilinput.className="input"
  dilinput.placeholder="Programlama Dili"

  dilrow.appendChild(dilinput)

  // ikon

  var ikon=document.createElement("i")
  ikon.className="fa-solid fa-trash-can kirmizi"
  ikon.setAttribute("onclick","sil(this)")
  dilrow.appendChild(ikon)

 }else{
  alert("Maksimum 5 Adet Ekleyebilirsiniz veya PRO üyelik Satın Alın")
 }
  

  

}

function sil(e){
  var div=e.parentNode
  div.remove()
}

function azalt(){
  var diller=document.getElementById('diller')
  var son=diller.lastChild
  son.remove()
}
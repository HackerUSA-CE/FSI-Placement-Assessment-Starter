console.log('I load in first')

let yourName = "Daniel Eastwood"  

document.getElementById('credit').textContent = `Created by ${yourName}`

let sugar = 0
let gb = 0
let cc = 0
let gbtotal = document.getElementById('qty-gb')
let cctotal= document.getElementById('qty-cc')
let sugartotal= document.getElementById('qty-sugar')
let total=document.getElementById('qty-total')
let img1= document.getElementById('first')
let img2= document.getElementById('second')
let img3= document.getElementById('third')

document.getElementById('add-gb').addEventListener('click', function() {   
    gb++
        gbtotal.textContent=gb 
        total.textContent=sugar+gb+cc
        img1.style.transform= 'rotate(360deg)'
        console.log('higb')
})
        
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0)
    gb--;
    else;
    gbtotal.textContent=gb
    total.textContent=sugar+gb+cc
    console.log('byegb')
    img1.style.transform= 'rotate(180deg)'
    if(gb<0)
    gbtotal.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    cctotal.textContent=cc
    total.textContent=sugar+gb+cc
    img2.style.transform= 'rotate(360deg)'
    console.log('hicc')
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0)
    cc--;
    else;
    cctotal.textContent=cc
    total.textContent=sugar+gb+cc
    console.log('byecc')
    img2.style.transform= 'rotate(180deg)'
    if(cc<0)
    cctotal.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    sugartotal.textContent=sugar
    total.textContent=sugar+gb+cc
    console.log('hisugar')
    img3.style.transform= 'rotate(360deg)'

})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0)
    sugar--;
    else;
    sugartotal.textContent=sugar
    total.textContent=sugar+gb+cc
    console.log('byesugar')
    img3.style.transform= 'rotate(180deg)'
    if(sugar<0)
    sugartotal.textContent=0;
    if(gb+cc+sugar<0)
    total.textContent=0;
})

function topbar(){
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".nav-bar").style.backgroundColor = "white"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.color = "blue"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.border = "2px solid blue"
        document.querySelector(".nav-bar a:nth-child(9)>button").style.backgroundColor="blue"
    } else {
        document.querySelector(".nav-bar").style = "none"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.color = "black"
        document.querySelector(".nav-bar a:nth-child(8)>button").style.border = "2px solid black"
        document.querySelector(".nav-bar a:nth-child(9)>button").style.backgroundColor="black"

      
    }
}
var images =[
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-sales_sm.jpg')",
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-customers_sm.jpg')",
    "url('https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/landing-page-convert-more-leads_sm.jpg')"
]
function changeBackground(){
    document.querySelector('.header').style.backgroundImage =images[0]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More Sales"
}
function changeBackground_1(){
    document.querySelector('.header').style.backgroundImage =images[1]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More Customers"
}
function changeBackground_2(){
    document.querySelector('.header').style.backgroundImage =images[2]
    document.querySelector('.inside_cont_text > p').innerHTML ="Convert More leads"
}
setInterval(changeBackground,2000)
setInterval(changeBackground_1,4000)
setInterval(changeBackground_2,6000)

document.addEventListener('scroll',topbar)
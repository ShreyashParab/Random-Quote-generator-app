let toggle = document.querySelector('.toggleBtn')
let loader = document.getElementById('loader')

let toggleImg = document.getElementById('toggleImg')
let container = document.querySelector('.container')
let quoteNumber = document.querySelector('.quoteNumber')

let quote = document.getElementById('quote') 
let author = document.getElementById('author')
let divider = document.querySelector('.divider')
let btns = document.getElementsByClassName('btn')

let likeBtn = document.getElementById('likeBtn')
let speakerBtn = document.getElementById('speakerBtn')
let copyBtn = document.getElementById('copyBtn')

let diceBtn = document.getElementById('diceBtn')
let svgImg = document.querySelector('.svgImg')


// Theme changer
let flag = 'dark'
toggle.addEventListener('click',()=>{
    if(flag == 'dark')
    {
        toggleImg.src = 'icons/sun.png'
        document.body.style.backgroundColor = 'hsl(0, 0%, 95%)'
        document.body.style.color = 'black'
        container.style.backgroundColor = 'hsl(217, 19%, 80%)'
        quoteNumber.style.color = 'hsl(150, 100%, 30%)'
        divider.style.opacity = '1'

        for(let i=0;i<btns.length;i++)
        {
            btns[i].style.color = 'hsl(150, 100%, 30%)'
            btns[i].style.border = '1px solid hsl(150, 100%, 30%)'
            
            btns[i].addEventListener('mouseover',()=>{
                btns[i].style.backgroundColor = 'hsl(150, 100%, 30%)'
                btns[i].style.color = 'white'
            })

            btns[i].addEventListener('mouseout',()=>{
                btns[i].style.color = 'hsl(150, 100%, 30%)'
                btns[i].style.border = '1px solid hsl(150, 100%, 30%)'
                btns[i].style.backgroundColor = 'inherit'
            })
        }

        diceBtn.style.backgroundColor = 'hsl(150, 100%, 30%)'
        svgImg.style.color = 'white'

        flag = 'light'
    }else{
        toggleImg.src = 'icons/moon.png'
        document.body.style.backgroundColor = 'hsl(218, 23%, 16%)'
        document.body.style.color = 'white'
        container.style.backgroundColor = 'hsl(217, 19%, 24%)'
        quoteNumber.style.color = 'hsl(150, 100%, 66%)'
        divider.style.opacity = '0.5'

        for(let i=0;i<btns.length;i++)
        {
            btns[i].style.color = 'hsl(150, 100%, 66%)'
            btns[i].style.border = '1px solid hsl(150, 100%, 66%)'
            
            btns[i].addEventListener('mouseover',()=>{
                btns[i].style.backgroundColor = 'hsl(150, 100%, 66%)'
                btns[i].style.color = 'white'
            })

            btns[i].addEventListener('mouseout',()=>{
                btns[i].style.color = 'hsl(150, 100%, 66%)'
                btns[i].style.border = '1px solid hsl(150, 100%, 66%)'
                btns[i].style.backgroundColor = 'inherit'
            })
        }

        diceBtn.style.backgroundColor = 'hsl(150, 100%, 66%)'
        svgImg.style.color = 'black'

        flag = 'dark'
    }
    
})

// load API
diceBtn.addEventListener('click',()=>{
    loader.classList.remove('hide')
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data =>{
        quote.innerHTML = `❝ ${data.content} ❞`
        author.innerHTML = `${data.author}`
        loader.classList.add('hide')
    })

    // random quote number
    function generateRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 200) + 1;
        var paddedNumber = String(randomNumber).padStart(3, '0');
        return paddedNumber;
    }
    
    var randomNum = generateRandomNumber();
    quoteNumber.innerHTML = `Quote  #${randomNum}`
})

// like button
let isLiked = false
likeBtn.addEventListener('click',()=>{
    
    if(isLiked==false)
    {
        likeBtn.style.color = 'red'
        likeBtn.style.border = '1px solid red'
        likeBtn.style.backgroundColor = 'inherit'
        isLiked = true
    }
    else{
        likeBtn.style.color = 'hsl(150, 100%, 66%)'
        likeBtn.style.border = '1px solid hsl(150, 100%, 66%)'
        likeBtn.style.backgroundColor = 'inherit'
        isLiked = false
    }
    
})

speakerBtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML} `);
    speechSynthesis.speak(utterance)
})

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quote.innerText)
})





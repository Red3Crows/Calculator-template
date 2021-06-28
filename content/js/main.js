const $ = document ;
const buttons = [ $.querySelectorAll('.calculator-box button'), $.querySelectorAll('.main-buttons') ]
const screen = $.querySelector('.screen')
const equalBtn = $.querySelector('.equal-btn')
const clearBtn = $.querySelector('.clearBtn')

let opeActive = false ;

//! add number in screen
buttons[0].forEach(btn => {
    btn.addEventListener('click' , (e) => {
        if (!isNaN(btn.innerHTML)) {
            screen.value += btn.innerHTML 
        }
    })
})
//! add ope in screen 
buttons[1].forEach(btn => {
    btn.addEventListener('click' , (e) => {
        if (!opeActive) {
            screen.value += btn.innerHTML 
            opeActive = true
        }else {
            alert('شما عملگر خود را انتخاب کرده اید')
        }
    })
})

//! equal function
equalBtn.addEventListener('click' , () => {
    if (screen.value) {
        anime({
            targets : screen , 
            duration : 1000 ,
            easing : 'linear' ,
            value : eval(screen.value)
        })
        opeActive = false 
    }else {
        alert('چیزی ننوشتید')
    }
})

//! clear function 
clearBtn.addEventListener('click' , () => {
    anime({
        targets : screen ,
        keyframes : [
            { scale : 1 } , 
            { scale : 0 } , 
            { scale : 1 } , 
        ],
        duration : 3000
    })
    setTimeout(() => {
        screen.value = ''
    } , 2000);
    
    opeActive = false
})
// ! ---------------------------------- anime --------------------------------- ! //
window.onload = () => {
    //! warp box
    anime({
        targets : '.warp-box' ,
        top : ['-500px' , '0'] , 
        opacity : ['0' , '100%'] ,
        duration : 1000 ,
        easing : 'easeInOutExpo'
    })

    //! img calculator
    anime({
        targets : '.img-box' ,
        left : ['-100px' , '0'] ,
        opacity : ['0' , '100%'] ,
        duration : 2000 ,
        easing : 'easeInOutExpo' , 
    })

    //! calculator box
    anime({
        targets : '.calculator-box' ,
        right : ['-500px' , '0'] ,
        duration : 2000 , 
        easing : 'easeInOutExpo'
    })

    //! ope buttons
    anime({
        targets : '.buttons-box button' ,
        translateX : ['30000' , '0'] ,
        delay: function(el, i, l) {
            return i * 200 
        }
    })
}
const br = new lib({
    0:{
        min:false,
        in:()=>{document.body.innerHTML = '0-600'}
    },
    600:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '600-700'}
    },
    700:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '700-960'}
    },
    960:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '960-1280'}
    },
    1280:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '1280-1440'}
    },
    1440:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '1440-1600'}
    },
    1600:{
        max:true,
        min:false,
        in:()=>{document.body.innerHTML = '1600-max'}
    }
});


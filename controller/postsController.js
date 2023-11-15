function home(req, res){
    res.format({
        html:()=>{
            res.send('<h1>home</h1>')
        }
    })
}


function index(req, res){
    //throw new Error('prova errore');
    res.format({
        html:()=>{
            res.send('<h1>index</h1>')
        }
    })
}

function show(req, res){
    res.format({
        html:()=>{
            res.send('<h1>show</h1>')
        }
    })
}

module.exports ={
    index,
    home,
    show
}
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {// 21 savage its property of rappers 
        'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper': {// chance the rapper its property of rappers 
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': { // property of rappers 
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')// __dirname tells where to start looking for a file
}) //app.get-comes with express

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()// if its there a text after /api with this line of code you can grab parameters
   //console.log(rappers[rapperName].birthName) it will show a birth name
    if( rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go Catch It!`)
})
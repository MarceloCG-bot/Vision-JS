function transicao(){
    Image.snap(function(data_uri){
        document.getElementById('transicao').innerHTML = 
        '<img src="'+ data_uri +'">'
    })
}
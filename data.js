


$(document).ready(function(){
 $("data").tableHTMLExport({
    
data:{Name,Email},

    type:'json',
filename:'output.json'
})

});

function clicked(){
    alert("Insert Data First");
}

output= document.getElementById('output')
btn.addEventListener('click', function(){
    output.innerHTML="Output will show here...";
})



/*
function clicked() {
    var i = document.getElementById("I").value
    var xhr = new XMLHttpRequest();
    xhr.open("GET" ,"http://65.2.128.88/cgi-bin/code.py?x=" + i , true);
    xhr.send();
    xhr.onload = function(){
    var output = xhr.responseText;
    document.getElementById("out").innerHTML = output;
    }
    }

    */
var sock = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
sock.onmessage = function(event){
    document.getElementById("trade").innerHTML = JSON.parse(event.data).p;
    //message = document.createTextNode(JSON.parse(event.data).p + "\n");
    //p = document.createElement('p');
    //p.setAttribute('id', 'j');
    //p.appendChild(message);
    //document.getElementById("list").appendChild(p);
    
}
function fakeNetworkCall(productKey, cb) {
    setTimeout(function () {
        cb("Info for product " + productKey);
    }, 750);
}

function getInfo() {
    var randomProduct = Math.floor(Math.random() * 100);
    
    fakeNetworkCall(randomProduct, function (result) {
        document.getElementById("results").innerHTML +=
            result + "<br>";
    });
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}
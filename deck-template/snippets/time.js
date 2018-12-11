// Lancement du chrono
console.time([label])

// Fin du chrono
console.timeEnd([label])

function exemple_time() {
    console.time('traitement complet')
    
    console.time('initialisation tableau')
    var arr = new Array(100000)
    console.timeEnd('initialisation tableau')
    
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Object()
    }

    console.timeEnd('traitement complet')
}
update = function(target){
  file = fetch("./FullSummary.json")
  console.log(file)
}

generate = function(){
  var graphs = document.getElementsByClassName("graphs");
  alert(graphs.lenghth)
  for(var i = 0; i<graphs.length; i++) {
    update(graphs.item(i))
  }
}

initialize = function(){
  var graphs = document.getElementsByClassName("graphs");
  for(var i = 0; i<graphs.length; i++) {
    const ctx = graphs.item(i);
    labels = []
    if (graphs.item(i).parentNode.id == "roles"){
      labels = ["enchanters", "adc", "apc", "assassin", "meleeCarries", "bruiser", "tanks"]
    } else if (graphs.item(i).parentNode.id == "players") {
      labels = ["PartyMagier", "PartyBJ", "G2 PENGU Nr1", "FNC Gilchrist", "Alyna3", "G2 Fischbrötchen", "G0ttlob", "G2 Kellerbier", "Trainer Ludwig", "G2 Brausewasser", "TheShackledOne"]
    } else {
      alert("ERROR")
    }
    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: ctx.id,
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        barckgroundColor: ["red", "blue", "orange", "green", "purple", "yellow"]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
}
      

const file = fetch("./FullSummary.json")
  .then((response) => response.json())
  .then((result) => return result;
});
  
update = function(target){
  while(typeof target.chart.data.datasets[0].data[0] != "undefined"){
        target.chart.data.datasets[0].data.pop();
  };
  if(target.parentNode.id == "roles"){
    role = document.getElementById("roleSelection").value;
    for(key in file.roleSummaries){
      if(key === role){
        for(player in file.roleSummaries[key]){
          if (target.id === "games") {
            target.chart.data.datasets[0].data.push(file.roleSummaries[key][player].wins+file.roleSummaries[key][player].losses)
            continue;
          } else if((target.id === "kda")){
            target.chart.data.datasets[0].data.push((file.roleSummaries[key][player].kills+file.roleSummaries[key][player].assists)/file.roleSummaries[key][player].deathsByEnemyChamps)
            continue;
          }
          for(datapoint in file.roleSummaries[key][player]){
            if(datapoint === target.id){
              target.chart.data.datasets[0].data.push(file.roleSummaries[key][player][datapoint])
            }
          }
        }
      }
    }
  }else if(target.parentNode.id == "players"){
    player = document.getElementById("playerSelection").value;
    for(key in file.playerSummaries){
      if(key === player){
        for(role in file.playerSummaries[key]){
          if (target.id === "games") {
            target.chart.data.datasets[0].data.push(file.playerSummaries[key][role].wins+file.playerSummaries[key][role].losses)
            continue;
          } else if((target.id === "kda")){
            target.chart.data.datasets[0].data.push((file.playerSummaries[key][role].kills+file.playerSummaries[key][role].assists)/file.playerSummaries[key][role].deathsByEnemyChamps)
            continue;
          }
          for(datapoint in file.playerSummaries[key][role]){
            if(datapoint === target.id){
              target.chart.data.datasets[0].data.push(file.playerSummaries[key][role][datapoint])
            }
          }
        }
      }
    }
  }else{
    alert("ERROR2");
  }
  target.chart.update();
}

generate = function(){
  var graphs = document.getElementsByClassName("graphs");
  for(var i = 0; i<graphs.length; i++) {
    update(graphs.item(i))
  }
}

ini_initialize = asyn(){
  console.log("Initializing")
  var graphs = document.getElementsByClassName("graphs");
  for(var i = 0; i<graphs.length; i++) {
    const graphcontainer = graphs.item(i);
    labels = []
    if (graphs.item(i).parentNode.id == "roles"){
      labels = ['TheShackledOne', 'PartyBJ', 'Alyna3', 'FNC Gilchrist', 'G0ttlob', 'G2 Brausewasser', 'G2 Fischbrötchen', 'Kellerbier', 'PartyMagier', 'G2 PENGU Nr1', 'Trainer Ludwig']
    } else if (graphs.item(i).parentNode.id == "players") {
      labels = ['adc', 'apc', 'assassin', 'enchanter', 'tank', 'bruiser', 'meleeCarries']
    } else {
      alert("ERROR1")
    }
    graphcontainer.chart = new Chart(graphcontainer, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: graphcontainer.id,
        data: [0,1,2,3,4,5],
        borderWidth: 1,
        backgroundColor: ["red", "blue", "black", "orange" , "pink", "green", "grey", "purple", "yellow", "chocolate", "aqua"]
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
    await file;
    update(graphcontainer)
  }
}   

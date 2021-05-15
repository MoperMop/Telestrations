function updateState(){
    db.ref('state').on("value", (data)=>{state = data.val();});
}
function changeState(value){
    db.ref('/').update({state: value});
}


function updatePlayers(){
    db.ref('players').on("value", (data)=>{playerInfo = data.val();});
}

function addSelf(){
    //db.ref('players.player'+index).update({players:});
}
function updateState(){
    db.ref('state').on("value", (data)=>{state = data});
}
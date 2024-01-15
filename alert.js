function show_alert() {
    alert("Submitted");
}
window.alert=function(message,timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText ='OK';
    alert.classList.add('alert');
    alert.setAttribute('style','position:fixed;top:50%;left:50%;padding:20px;border-radius:10px;box-shadow:0 0 5px black;display:flex;flex-direction:column;background-color:white;justify-content:center;text-align:center;transform:translateX(-50%)');
    alertButton.setAttribute('style','border:1px solid #333;background:white;border-radius:15px;padding:5px')
    alert.innerHTML = '<span style="padding:10px">'+message+'</span>';
    alert.appendChild(alertButton);
    alertButton.addEventListener('click',()=>{
        alert.remove();
    })
    if(timeout!=null){
        setTimeout(()=>{
            alert.remove();
        },Number(timeout))
    }
    document.body.appendChild(alert);
}
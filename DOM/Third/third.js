onOff = ()=>{
    var get_caption = document.getElementById('btn').innerText

    if(get_caption=="ON"){
        document.getElementById('btn').innerText="OFF"
        document.querySelector('#bulb').src="https://prabhatmallik.com.np/dom/image/ON.jpg"
        
        
    }
    else{
        document.querySelector('#btn').innerText="ON"
        document.querySelector('#bulb').src="https://prabhatmallik.com.np/dom/image/OFF.jpg"

       
    }

    document.querySelector('#btn').classList.toggle('change-off')
}
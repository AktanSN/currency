document.getElementById("change").addEventListener("click",change);

            
function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangerate.host/latest",true);
    
    xhr.onload = function(){
        

        if(this.status === 200){

            
            const response = JSON.parse(this.responseText);
            const rateTr = response.rates.TRY ;
            const rateEur = response.rates.EUR ;

            const amount = Number(document.getElementById("amount").value);
            document.getElementById("turkishliras").value = amount * rateTr;

            document.getElementById("liveRateEur").textContent = rateEur;
            document.getElementById("liveRateTr").textContent = rateTr;
            
            

        }
    }

    xhr.send();
}
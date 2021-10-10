document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=5423b321b37db81cfe3a3d9cba6fb003&format=1",true);

    xhr.onload = function(){
        

        if(this.status === 200){

            
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY ;
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
            

        }
    }

    xhr.send();
}
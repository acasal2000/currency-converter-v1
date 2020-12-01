

    let comboConvertFrom = document.getElementById("convert-from");
    let comboConvertTo = document.getElementById("convert-to");
            
    let divCoinIcon = document.getElementById("convert-coin");
    let divCoinIcon2 = document.getElementById("convert-coin2");
    
    let coinType1H2 = document.createElement("h2");
    coinType1H2.setAttribute("id", "coinType1H2");

    let coinType2H2 = document.createElement("h2");
    coinType2H2.setAttribute("id", "coinType2H2");


    coinType1H2.innerHTML = "€";
    coinType2H2.innerHTML = "€";

    

    let img = document.createElement("img");
    img.setAttribute("id", "flag-coin-img");

    let img2 = document.createElement("img");
    img2.setAttribute("id", "flag-coin-img");

    let imgDiv = document.getElementById("container-flag");
    let imgDiv2 = document.getElementById("container-flag2");


    divCoinIcon.appendChild(coinType1H2);
    divCoinIcon2.appendChild(coinType2H2);

    img2.src = "img/euro.png"
    img.src = "img/euro.png"

    imgDiv.appendChild(img);
    imgDiv2.appendChild(img2);

function convertCurrency(){

    //EURO TAX CONVERTION VALUES

    let tax_eur_usd = 1.19;
    let tax_eur_gbp = 0.90;
    let tax_eur_aud = 1.6;
    let tax_eur_cad = 1.55;
    let tax_eur_inr = 88.49;


    //USD TAX CONVERTION VALUES

    let tax_usd_eur = 0.84;
    let tax_usd_gbp = 0.75;
    let tax_usd_aud = 1.35;
    let tax_usd_cad = 1.30;
    let tax_usd_inr = 73.96;


    //GBP TAX CONVERTION VALUES  

    let tax_gbp_eur = 1.11;
    let tax_gbp_usd = 1.33;
    let tax_gbp_aud = 1.80;
    let tax_gbp_cad = 1.73;
    let tax_gbp_inr = 98.42;


    //AUD TAX CONVERTION VALUES  

    let tax_aud_eur = 0.62;
    let tax_aud_usd = 0.74;
    let tax_aud_cad = 0.96;
    let tax_aud_gbp = 0.56;
    let tax_aud_inr = 54.62;

    
    //CAD TAX CONVERTION VALUES  

    let tax_cad_eur = 0.64;
    let tax_cad_usd = 0.77;
    let tax_cad_aud = 1.04;
    let tax_cad_gbp = 0.58;
    let tax_cad_inr = 56.93;


    //INR TAX CONVERTION VALUES  

    let tax_inr_eur = 0.011;
    let tax_inr_usd = 0.014;
    let tax_inr_gbp = 0.010;
    let tax_inr_cad = 0.018;
    let tax_inr_aud = 0.018;


    let resultContainer = document.getElementById("result-container");
    let convertFrom = document.getElementById("convert-from-textarea").value;
    let convertionResultText = document.getElementById("convertion-result");


    let resultH2 = document.createElement("h2");
    resultH2.setAttribute("id", "convertion-result");



    


    // CONVERT FROM EURO TO

    let convert_eur_usd = convertFrom * tax_eur_usd;   
    let convert_eur_gbp = convertFrom * tax_eur_gbp;
    let convert_eur_aud = convertFrom * tax_eur_aud;
    let convert_eur_cad = convertFrom * tax_eur_cad;
    let convert_eur_inr = convertFrom * tax_eur_inr;



    // CONVERT FROM USD TO

    let convert_usd_eur = convertFrom * tax_usd_eur;
    let convert_usd_cad = convertFrom * tax_usd_cad;
    let convert_usd_aud = convertFrom * tax_usd_aud;
    let convert_usd_gbp = convertFrom * tax_usd_gbp;
    let convert_usd_inr = convertFrom * tax_usd_inr;

    

    // CONVERT FROM AUD TO

    let convert_aud_eur = convertFrom * tax_aud_eur;
    let convert_aud_usd = convertFrom * tax_aud_usd;
    let convert_aud_cad = convertFrom * tax_aud_cad;
    let convert_aud_gbp = convertFrom * tax_aud_gbp;
    let convert_aud_inr = convertFrom * tax_aud_inr;



    // CONVERT FROM CAD TO

    let convert_cad_eur = convertFrom * tax_cad_eur;
    let convert_cad_usd = convertFrom * tax_cad_usd;
    let convert_cad_aud = convertFrom * tax_cad_aud;
    let convert_cad_gbp = convertFrom * tax_cad_gbp;
    let convert_cad_inr = convertFrom * tax_cad_inr;



    // CONVERT FROM GBP TO

    let convert_gbp_eur = convertFrom * tax_gbp_eur;
    let convert_gbp_usd = convertFrom * tax_gbp_usd;
    let convert_gbp_cad = convertFrom * tax_gbp_cad;
    let convert_gbp_aud = convertFrom * tax_gbp_aud;
    let convert_gbp_inr = convertFrom * tax_gbp_inr;



    // CONVERT FROM INR TO

    let convert_inr_eur = convertFrom * tax_inr_eur;
    let convert_inr_usd = convertFrom * tax_inr_usd;
    let convert_inr_aud = convertFrom * tax_inr_aud;
    let convert_inr_cad = convertFrom * tax_inr_cad;
    let convert_inr_gbp = convertFrom * tax_inr_gbp;


    let comboConvertFrom = document.getElementById("convert-from");
    let comboConvertTo = document.getElementById("convert-to");
    

    if(convertFrom != "" && isNaN(convertFrom) == false){
        if(comboConvertFrom.value == "eur"){ // CONVERT FROM EUR TO


            if(comboConvertTo.value == "usd"){           
                //convertionResultText.innerHTML = convert_eur_usd;
                //resultH2.innerHTML = "You converted " + convertFrom + " euros to " + Math.round(convert_eur_usd * 100 + Number.EPSILON ) / 100 + " american dollars";
                convertionResultText.value = Math.round(convert_eur_usd * 100 + Number.EPSILON ) / 100;
                
            }
            else if(comboConvertTo.value == "gbp"){
                //resultH2.innerHTML = "You converted " + convertFrom + " euros to " + Math.round(convert_eur_gbp * 100 + Number.EPSILON ) / 100 + " british pounds";
                convertionResultText.value = Math.round(convert_eur_gbp * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "aud"){
                //resultH2.innerHTML = "You converted " + convertFrom + " euros to " + Math.round(convert_eur_aud * 100 + Number.EPSILON ) / 100 + " australian dollars";
                convertionResultText.value = Math.round(convert_eur_aud * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "cad"){
                //resultH2.innerHTML = "You converted " + convertFrom + " euros to " + Math.round(convert_eur_cad * 100 + Number.EPSILON ) / 100 + " canadian dollars";
                convertionResultText.value = Math.round(convert_eur_cad * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "inr"){
                //resultH2.innerHTML = "You converted " + convertFrom + " euros to " + Math.round(convert_eur_inr * 100 + Number.EPSILON ) / 100 + " indian rupees";
                convertionResultText.value = Math.round(convert_eur_inr * 100 + Number.EPSILON ) / 100;
            }
            else{
                alert("You cannot convert to the same unit!");
            }

           
            
    
        }
        else if (comboConvertFrom.value == "usd"){ // CONVERT FROM USD TO
    
            if(comboConvertTo.value == "eur"){           
                //resultH2.innerHTML = "You converted " + convertFrom + " american dollars to " + Math.round(convert_usd_eur * 100 + Number.EPSILON ) / 100 + " euros";
                convertionResultText.value = Math.round(convert_usd_eur * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "gbp"){
                //resultH2.innerHTML = "You converted " + convertFrom + " american dollars to " + Math.round(convert_usd_gbp * 100 + Number.EPSILON ) / 100 + " british pounds";
                convertionResultText.value = Math.round(convert_usd_gbp * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "aud"){
                //resultH2.innerHTML = "You converted " + convertFrom + " american dollars to " + Math.round(convert_usd_aud * 100 + Number.EPSILON ) / 100 + " australian dollars";
                convertionResultText.value = Math.round(convert_usd_aud * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "cad"){
                //resultH2.innerHTML = "You converted " + convertFrom + " american dollars to " + Math.round(convert_usd_cad * 100 + Number.EPSILON ) / 100 + " canadian dollars";
                convertionResultText.value = Math.round(convert_usd_cad * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "inr"){
                //resultH2.innerHTML = "You converted " + convertFrom + " american dollars to " + Math.round(convert_usd_inr * 100 + Number.EPSILON ) / 100 + " indian rupees";
                convertionResultText.value = Math.round(convert_usd_inr * 100 + Number.EPSILON ) / 100;
            }        
            else{
                alert("You cannot convert to the same unit!");
            }

            
    
        }
        else if (comboConvertFrom.value == "gbp"){ // CONVERT FROM GBP TO
    
            if(comboConvertTo.value == "eur"){           
                //resultH2.innerHTML = "You converted " + convertFrom + " british pounds to " + Math.round(convert_gbp_eur * 100 + Number.EPSILON ) / 100 + " euros";
                convertionResultText.value = Math.round(convert_gbp_eur * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "usd"){
                //resultH2.innerHTML = "You converted " + convertFrom + " british pounds to " + Math.round(convert_gbp_usd * 100 + Number.EPSILON ) / 100 + " american dollars";
                convertionResultText.value = Math.round(convert_gbp_usd * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "aud"){
                //resultH2.innerHTML = "You converted " + convertFrom + " british pounds to " + Math.round(convert_gbp_aud * 100 + Number.EPSILON ) / 100 + " australian dollars";
                convertionResultText.value = Math.round(convert_gbp_aud * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "cad"){
                //resultH2.innerHTML = "You converted " + convertFrom + " british pounds to " + Math.round(convert_gbp_cad * 100 + Number.EPSILON ) / 100 + " canadian dollars";
                convertionResultText.value = Math.round(convert_gbp_cad * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "inr"){
                //resultH2.innerHTML = "You converted " + convertFrom + " british pounds to " + Math.round(convert_gbp_inr * 100 + Number.EPSILON ) / 100 + " indian rupees";
                convertionResultText.value = Math.round(convert_gbp_inr * 100 + Number.EPSILON ) / 100;
            }        
            else{
                alert("You cannot convert to the same unit!");
            }

           
    
        }
        else if (comboConvertFrom.value == "cad"){ // CONVERT FROM CAD TO
    
            if(comboConvertTo.value == "eur"){           
                //resultH2.innerHTML = "You converted " + convertFrom + " canadian dollars to " + Math.round(convert_cad_eur * 100 + Number.EPSILON ) / 100 + " euros";
                convertionResultText.value = Math.round(convert_cad_eur * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "gbp"){
                //resultH2.innerHTML = "You converted " + convertFrom + " canadian dollars to " + Math.round(convert_cad_gbp * 100 + Number.EPSILON ) / 100 + " british pounds";
                convertionResultText.value =  Math.round(convert_cad_gbp * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "aud"){
                //resultH2.innerHTML = "You converted " + convertFrom + " canadian dollars to " + Math.round(convert_cad_aud * 100 + Number.EPSILON ) / 100 + " australian dollars";
                convertionResultText.value = Math.round(convert_cad_aud * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "usd"){
                //resultH2.innerHTML = "You converted " + convertFrom + " canadian dollars to " + Math.round(convert_cad_usd * 100 + Number.EPSILON ) / 100 + " american dollars";
                convertionResultText.value = Math.round(convert_cad_usd * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "inr"){
                //resultH2.innerHTML = "You converted " + convertFrom + " canadian dollars to " + Math.round(convert_cad_inr * 100 + Number.EPSILON ) / 100 + " indian rupees";
                convertionResultText.value = Math.round(convert_cad_inr * 100 + Number.EPSILON ) / 100;
            }        
            else{
                alert("You cannot convert to the same unit!");
            }

            
    
        }
    
        else if (comboConvertFrom.value == "aud"){ // CONVERT FROM AUD TO
    
            if(comboConvertTo.value == "eur"){           
                //resultH2.innerHTML = "You converted " + convertFrom + " australian dollars to " + Math.round(convert_aud_eur * 100 + Number.EPSILON ) / 100 + " euros";
                convertionResultText.value = Math.round(convert_aud_eur * 100 + Number.EPSILON );
            }
            else if(comboConvertTo.value == "gbp"){
                //resultH2.innerHTML = "You converted " + convertFrom + " australian dollars to " + Math.round(convert_aud_gbp * 100 + Number.EPSILON ) / 100 + " british pounds";
                convertionResultText.value = Math.round(convert_aud_gbp * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "usd"){
                //resultH2.innerHTML = "You converted " + convertFrom + " australian dollars to " + Math.round(convert_aud_usd * 100 + Number.EPSILON ) / 100 + " american dollars";
                convertionResultText.value = Math.round(convert_aud_usd * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "cad"){
                //resultH2.innerHTML = "You converted " + convertFrom + " australian dollars to " + Math.round(convert_aud_cad * 100 + Number.EPSILON ) / 100 + " canadian dollars";
                convertionResultText.value = Math.round(convert_aud_cad * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "inr"){
                //resultH2.innerHTML = "You converted " + convertFrom + " australian dollars to " + Math.round(convert_aud_inr * 100 + Number.EPSILON ) / 100 + " indian rupees";
                convertionResultText.value = Math.round(convert_aud_inr * 100 + Number.EPSILON ) / 100;
            }        
            else{
                alert("You cannot convert to the same unit!");
            }

            
    
        }
    
        else if (comboConvertFrom.value == "inr"){ // CONVERT FROM INR TO
    
            if(comboConvertTo.value == "eur"){           
                //resultH2.innerHTML = "You converted " + convertFrom + " indian rupees to " + Math.round(convert_inr_eur * 100 + Number.EPSILON ) / 100 + " euros";
                convertionResultText.value = Math.round(convert_inr_eur * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "gbp"){
                //resultH2.innerHTML = "You converted " + convertFrom + " indian rupees to " + Math.round(convert_inr_gbp * 100 + Number.EPSILON ) / 100 + " british pounds";
                convertionResultText.value = Math.round(convert_inr_gbp * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "aud"){
                //resultH2.innerHTML = "You converted " + convertFrom + " indian rupees to " + Math.round(convert_inr_aud * 100 + Number.EPSILON ) / 100 + " australian dollars";
                convertionResultText.value = Math.round(convert_inr_aud * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "cad"){
                //resultH2.innerHTML = "You converted " + convertFrom + " indian rupees to " + Math.round(convert_inr_cad * 100 + Number.EPSILON ) / 100 + " canadian dollars";
                convertionResultText.value = Math.round(convert_inr_cad * 100 + Number.EPSILON ) / 100;
            }
            else if(comboConvertTo.value == "usd"){
                //resultH2.innerHTML = "You converted " + convertFrom + " indian rupees to " + Math.round(convert_inr_usd * 100 + Number.EPSILON ) / 100 + " american dollars";
                convertionResultText.value = Math.round(convert_inr_usd * 100 + Number.EPSILON ) / 100;
            }        
            else{
                alert("You cannot convert to the same unit!");
            }

           
    
        }
         
        
       
        resultContainer.appendChild(resultH2);   
        
    }
    else{
        alert("The value is empty or have non numeric characters!");
    }

    

}

function coinIconsChange(){


                 
    while(divCoinIcon.firstChild) { 
        divCoinIcon.removeChild(divCoinIcon.firstChild); 
    } 

    while(divCoinIcon2.firstChild) { 
        divCoinIcon2.removeChild(divCoinIcon2.firstChild); 
    } 

    while(imgDiv.firstChild) { 
        imgDiv.removeChild(imgDiv.firstChild); 
    } 

    while(imgDiv2.firstChild) { 
        imgDiv2.removeChild(imgDiv2.firstChild); 
    } 

    if(comboConvertFrom.value == "usd"){
        coinType1H2.innerHTML = "$";
        img.src = "img/dolar.jpg"
    }
    else if(comboConvertFrom.value == "eur"){
        coinType1H2.innerHTML = "€";
        img.src = "img/euro.png"
       
    }
    else if(comboConvertFrom.value == "gbp"){
        coinType1H2.innerHTML = "£";
        img.src = "img/gbp.png"
    }
    else if(comboConvertFrom.value == "cad"){
        coinType1H2.innerHTML = "¢";
        img.src = "img/cad.jpg"
    }
    else if(comboConvertFrom.value == "aud"){
        coinType1H2.innerHTML = "A$";
        img.src = "img/aud.png"
    }
    else if(comboConvertFrom.value == "inr"){
        coinType1H2.innerHTML = "₹";
        img.src = "img/inr.jpg"
    }

   

    if(comboConvertTo.value == "usd"){
        coinType2H2.innerHTML = "$";
        img2.src = "img/dolar.jpg"
    }
    else if(comboConvertTo.value == "eur"){
        coinType2H2.innerHTML = "€";
        img2.src = "img/euro.png"
    }
    else if(comboConvertTo.value == "gbp"){
        coinType2H2.innerHTML = "£";
        img2.src = "img/gbp.png"
    }
    else if(comboConvertTo.value == "cad"){
        coinType2H2.innerHTML = "¢";
        img2.src = "img/cad.jpg"
    }
    else if(comboConvertTo.value == "aud"){
        coinType2H2.innerHTML = "A$";
        img2.src = "img/aud.png"
    }
    else if(comboConvertTo.value == "inr"){
        coinType2H2.innerHTML = "₹";
        img2.src = "img/inr.jpg"
    }
    imgDiv.appendChild(img);
    imgDiv2.appendChild(img2);
    
    divCoinIcon.appendChild(coinType1H2);
    divCoinIcon2.appendChild(coinType2H2);
    
            
}


///// COISAS A CORRIGIR /////

/*

1. Corrigir o facto de aparecerem múltiplos valores.
    objetivo: apenas mostrar 1 resultado de cada vez.

2. Alterar o design do website

*/
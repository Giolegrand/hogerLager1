window.onload=execute;

/*Hou van je, Pleh*/

/******************************/
/* Definier canvas            */
/******************************/
var canvas;
/******************************/
/* inzet verkrijgen           */
/* inzet[0] = inzet verhogen  */
/* inzet[1] = all-in          */
/* inzet[2] = inzet verlagen  */
/******************************/
var inzet = document.getElementsByClassName('inzet');
/******************************/
/* Buttons verkrijgen         */
/* button[0] = computer gooien*/
/* button[1] = speler gooien  */
/******************************/
var button = document.getElementsByTagName('button');

/******************************/
/* Definier bedrag            */
/* Definier inzet             */
/******************************/
var saldo = 1000;
var inzet = 0;

/******************************/
/* Definier verwachting       */
/******************************/
var verwachting = "hoger";

/******************************/
/* Definier ComputerTotaal    */
/* Definier SpelerTotaal      */
/******************************/
var computerTotaal = 0;
var spelerTotaal = 0;

/******************************/
/* Definier Melding           */
/******************************/
var melding = "Welkom bij Hoger Lager Deluxe";

/******************************/
/* Definier beurt             */
/******************************/
var beurt = "computer";

function execute()
{
    canvas = document.getElementsByTagName('canvas')[0];
    canvas = canvas.getContext('2d');

    tekenSpeelveld();
    tekenMelding();
}

function tekenSpeelveld()
{
    
    /*****************/
    /* Lijn breedte  */
    /*    Aangeven   */
    /*****************/
    canvas.lineWidth = 5;
    
    /*****************/
    /* Stroke kleur  */
    /*    Aangeven   */
    /*****************/
    canvas.strokeStyle = "black";
    
    /*****************/
    /*   Fill kleur  */
    /*    Aangeven   */
    /*****************/
    canvas.fillStyle= "white";
    
    /*****************/
    /* Eerste dobbel */
    /*    Computer   */
    /*****************/
    canvas.fillRect(50,50,100,100);
    canvas.strokeRect(50,50,100,100);
    
    /*****************/
    /* tweede dobbel */
    /*    Computer   */
    /*****************/
    canvas.fillRect(200,50,100,100);
    canvas.strokeRect(200,50,100,100);
    
    /*****************/
    /* Eerste dobbel */
    /*     Speler    */
    /*****************/
    canvas.fillRect(500,50,100,100);
    canvas.strokeRect(500,50,100,100);
    
    /*****************/
    /* Tweede dobbel */
    /*     Speler    */
    /*****************/
    canvas.fillRect(650,50,100,100);
    canvas.strokeRect(650,50,100,100);
    
    tekenInzet();
    tekenSaldo();
}

function tekenScoreComputer()
{
    canvas.clearRect(90,154,20,30);
    canvas.fillStyle = "black";
    canvas.font = "30px Arial"
    if(computerTotaal > 0)
    {
        canvas.fillText(computerTotaal,90,180);
    }
}

function tekenScoreSpeler()
{
    canvas.clearRect(710,154,20,30);
    canvas.fillStyle = "black";
    canvas.font = "30px Arial"
    if(spelerTotaal > 0)
    {
        canvas.fillText(spelerTotaal,710,180);
    }
}

function leegScoreSpeler()
{
    canvas.clearRect(710,154,20,30);
}
function tekenMelding()
{
    canvas.clearRect(200,154,450,60);
    canvas.fillStyle = "black";
    canvas.font = "30px Arial"
    canvas.fillText(melding,200,180);
}
function reageerKlikOpComputer()
{
    if(beurt === "computer")
    {
        melding = "Speler moet gooien";
        tekenMelding();
        beurt = "speler";
        tekenSpeelveld();

        var randomGetal1 = Math.floor(Math.random()*6)+1;
        var randomGetal2 = Math.floor(Math.random()*6)+1;

        computerTotaal= randomGetal1+randomGetal2;
        tekenScoreComputer();
        leegScoreSpeler();
        switch(randomGetal1)
        {
            case 1:
                canvas.beginPath();
                canvas.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 2:
                canvas.beginPath();
                canvas.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen

                canvas.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                canvas.closePath();

                canvas.fill();
                break;

            case 3:
                canvas.beginPath();
                canvas.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                canvas.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                canvas.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 4:
                canvas.beginPath();
                canvas.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                canvas.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                canvas.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                canvas.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 5:
                canvas.beginPath();
                canvas.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                canvas.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                canvas.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                canvas.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                canvas.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 6:
                canvas.beginPath();
                canvas.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                canvas.arc(70,100,10,0,2*Math.PI); //links midden 1e dobbelsteen
                canvas.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                canvas.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                canvas.arc(130,100,10,0,2*Math.PI); //rechts midden 1e dobbelsteen
                canvas.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;
        }
        switch(randomGetal2)
        {
            case 1:
                canvas.beginPath();
                canvas.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 2:
                canvas.beginPath();
                canvas.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen

                canvas.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 3:
                canvas.beginPath();
                canvas.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen

                canvas.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen

                canvas.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 4:
                canvas.beginPath();
                canvas.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                canvas.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                canvas.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                canvas.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 5:
                canvas.beginPath();
                canvas.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                canvas.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                canvas.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen
                canvas.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                canvas.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;

            case 6:
                canvas.beginPath();
                canvas.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                canvas.arc(220,100,10,0,2*Math.PI); //links midden 2e dobbelsteen
                canvas.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                canvas.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                canvas.arc(280,100,10,0,2*Math.PI); //rechts midden 2e dobbelsteen
                canvas.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                canvas.closePath();
                canvas.fill();
                break;
        }
    }
    else
    {
        melding = "Speler moet gooien";
        tekenMelding();
    }
}

function reageerKlikOpSpeler()
{
    if(beurt === "speler")
    {
        if(inzet > 0)
        {
            beurt = "computer";
            var randomGetal1 = 3;//Math.floor(Math.random()*6)+1;
            var randomGetal2 = 3;//Math.floor(Math.random()*6)+1;

            spelerTotaal= randomGetal1+randomGetal2;
            tekenScoreSpeler();
            switch(randomGetal1)
            {
                case 1:
                    canvas.beginPath();
                    canvas.arc(550,100,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 2:
                    canvas.beginPath();
                    canvas.arc(520,70,10,0,2*Math.PI);

                    canvas.arc(580,130,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 3:
                    canvas.beginPath();
                    canvas.arc(520,70,10,0,2*Math.PI);
                    canvas.arc(550,100,10,0,2*Math.PI);
                    canvas.arc(580,130,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 4:

                    break;

                case 5:

                    break;

                case 6:

                    break; 
            }
            switch(randomGetal2)
            {
                case 1:
                    canvas.beginPath();
                    canvas.arc(700,100,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 2:
                    canvas.beginPath();
                    canvas.arc(670,70,10,0,2*Math.PI);
                    canvas.arc(730,130,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 3:
                    canvas.beginPath();
                    canvas.arc(670,70,10,0,2*Math.PI);
                    canvas.arc(700,100,10,0,2*Math.PI);
                    canvas.arc(730,130,10,0,2*Math.PI);
                    canvas.closePath();
                    canvas.fill();
                    break;

                case 4:

                    break;

                case 5:

                    break;

                case 6:

                    break; 
            }
            
            if(verwachting === "hoger")
            {
                if(computerTotaal < spelerTotaal)
                {
                    melding = "Gefeliciteerd goed geraden";
                    tekenMelding();
                    
                    saldo = saldo+(inzet*2);
                    inzet = 0;
                    tekenInzet();
                    tekenSaldo();
                }
                else
                {
                    melding = "Jammer probeer het nog eens";
                    tekenMelding();
                    inzet=0;
                    tekenInzet();
                }
            }
            else
            {
                if(computerTotaal > spelerTotaal)
                {
                 melding = "Gefeliciteerd goed geraden";
                    tekenMelding();
                    
                    saldo = saldo+(inzet*2);
                    inzet = 0;
                    tekenInzet();
                    tekenSaldo();
                }
                else
                {
                    melding = "Jammer probeer het nog eens";
                    tekenMelding();
                    inzet=0;
                    tekenInzet();
                }
            }
        }
        else
        {
            melding = "inzet moet meer dan 0 zijn";
            tekenMelding();
        }
    }
    else
    {
        melding = "Computer moet gooien";
        tekenMelding();
    }
}

function clearDobbelsteen()
{
    switch(i)
    {
        case 0:
            canvas.fillStyle= "green";
            break;
        case 1:
            canvas.fillStyle= "blue";
            break;
        case 2:
            canvas.fillStyle= "red";
            break;
    }
    console.log(i);
    i++;
    
    if(i === 3)
    {
        i=0;
    }
    /*****************/
    /* Eerste dobbel */
    /*    Computer   */
    /*****************/
    canvas.clearRect(53,53,94,94);
    
    /*****************/
    /* tweede dobbel */
    /*    Computer   */
    /*****************/
    canvas.clearRect(203,53,94,94);
    
    /*****************/
    /* Eerste dobbel */
    /*     Speler    */
    /*****************/
    canvas.clearRect(503,53,94,94);
    
    /*****************/
    /* Tweede dobbel */
    /*     Speler    */
    /*****************/
    canvas.clearRect(653,53,94,94);
}
function reageerOpInzetVerhogen()
{
    if(saldo>=100)
    {
        inzet = inzet + 100;
        saldo = saldo - 100;
        tekenInzet();
        tekenSaldo();
    }
}

function reageerOpInzetAllIn()
{
    inzet = inzet + saldo;
    saldo = 0;
    tekenInzet();
    tekenSaldo();
}

function reageerOpInzetVerlagen()
{
    if(inzet >= 100)
    {
        inzet = inzet - 100;
        saldo = saldo + 100;
        tekenInzet();
        tekenSaldo();
    }
}

function tekenInzet()
{
    canvas.clearRect(350,260,180,60);
    canvas.fillStyle = "black";
    canvas.font = "30px Arial"
    canvas.fillText('Inzet: '+inzet,350,300);
}

function tekenSaldo()
{
    canvas.clearRect(350,310,180,60);
    canvas.fillStyle = "black";
    canvas.font = "30px Arial"
    canvas.fillText('Saldo: '+saldo,350,350);
}

function reageerKlikOpHoger()
{
    verwachting = "hoger";
}

function reageerKlikOpLager()
{
    verwachting = "lager";
}
/*function reageerOpButtonKlik(cButton)
{
    var geklikteButton = krijgGeklikteButton(cButton);
    if(geklikteButton === 0)
    {
        window.alert('Geklikt op: Computer Gooien');
    }
    else
    {
        window.alert('Geklikt op: Speler Gooien');
    }
}

function krijgGeklikteButton(id)
{
    for(var i=0;i<button.length;i++)
    {
        if(id === button[i])
        {
            return i;
        }
    }
}*/

/*function anim(dob)
{
    var aantal = Math.floor(Math.random()*6)+1;
    tekenogen(dob,'1'aantal);
}

function refresh()
{
    canvas.clearRect(0,0,800,400);
    drawDobbelstenen();
}*/


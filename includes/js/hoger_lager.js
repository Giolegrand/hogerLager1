window.onload=execute;

/******************************/
/* Definier canvas            */
/* Definier pen               */
/******************************/
var canvas;
var pan;
/******************************/
/* inzet verkrijgen           */
/* inzet[0] = inzet verhogen  */
/* inzet[1] = all-in          */
/* inzet[2] = inzet verlagen  */
/******************************/
var inzet = document.getElementById('inzet');
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
    pen = canvas.getContext('2d');

    tekenSpeelveld();
    tekenMelding();
}

function tekenSpeelveld()
{
    
    /*****************/
    /* Lijn breedte  */
    /*    Aangeven   */
    /*****************/
    pen.lineWidth = 5;
    
    /*****************/
    /* Stroke kleur  */
    /*    Aangeven   */
    /*****************/
    pen.strokeStyle = "black";
    
    /*****************/
    /*   Fill kleur  */
    /*    Aangeven   */
    /*****************/
    pen.fillStyle= "white";
    
    /*****************/
    /* Eerste dobbel */
    /*    Computer   */
    /*****************/
    pen.fillRect(50,50,100,100);
    pen.strokeRect(50,50,100,100);
    
    /*****************/
    /* tweede dobbel */
    /*    Computer   */
    /*****************/
    pen.fillRect(200,50,100,100);
    pen.strokeRect(200,50,100,100);
    
    /*****************/
    /* Eerste dobbel */
    /*     Speler    */
    /*****************/
    pen.fillRect(500,50,100,100);
    pen.strokeRect(500,50,100,100);
    
    /*****************/
    /* Tweede dobbel */
    /*     Speler    */
    /*****************/
    pen.fillRect(650,50,100,100);
    pen.strokeRect(650,50,100,100);
    
    tekenInzet();
    tekenSaldo();
}

function tekenScoreComputer()
{
    pen.clearRect(90,154,40,30);
    pen.fillStyle = "black";
    pen.font = "30px Arial";
    if(computerTotaal > 0)
    {
        pen.fillText(computerTotaal,90,180);
    }
}

function tekenScoreSpeler()
{
    pen.clearRect(710,154,40,30);
    pen.fillStyle = "black";
    pen.font = "30px Arial";
    if(spelerTotaal > 0)
    {
        pen.fillText(spelerTotaal,710,180);
    }
}

function leegScoreSpeler()
{
    pen.clearRect(710,154,20,30);
}
function tekenMelding()
{
    pen.clearRect(200,154,450,60);
    pen.fillStyle = "black";
    pen.font = "30px Arial";
    pen.fillText(melding,200,180);
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
                pen.beginPath();
                pen.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 2:
                pen.beginPath();
                pen.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                pen.moveTo(130,130);
                pen.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                pen.closePath();

                pen.fill();
                break;

            case 3:
                pen.beginPath();
                pen.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                pen.moveTo(100,100);
                pen.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                pen.moveTo(130,130);
                pen.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 4:
                pen.beginPath();
                pen.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                pen.moveTo(70,130);
                pen.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                pen.moveTo(130,70);
                pen.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                pen.moveTo(130,130);
                pen.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 5:
                pen.beginPath();
                pen.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                pen.moveTo(70,130);
                pen.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                pen.moveTo(100,100);
                pen.arc(100,100,10,0,2*Math.PI); //middelste stip 1e dobbelsteen
                pen.moveTo(130,70);
                pen.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                pen.moveTo(130,130);
                pen.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 6:
                pen.beginPath();
                pen.arc(70,70,10,0,2*Math.PI); //links boven 1e dobbelsteen
                pen.moveTo(70,100);
                pen.arc(70,100,10,0,2*Math.PI); //links midden 1e dobbelsteen
                pen.moveTo(70,130);
                pen.arc(70,130,10,0,2*Math.PI); //link onder 1e dobbelsteen
                pen.moveTo(130,70);
                pen.arc(130,70,10,0,2*Math.PI); //rechts boven 1e dobbelsteen
                pen.moveTo(130,100);
                pen.arc(130,100,10,0,2*Math.PI); //rechts midden 1e dobbelsteen
                pen.moveTo(130,130);
                pen.arc(130,130,10,0,2*Math.PI); //rechts onder 1e dobbelsteen
                pen.closePath();
                pen.fill();
                break;
        }
        switch(randomGetal2)
        {
            case 1:
                pen.beginPath();
                pen.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 2:
                pen.beginPath();
                pen.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                pen.moveTo(280,130);
                pen.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 3:
                pen.beginPath();
                pen.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                pen.moveTo(250,100);
                pen.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen
                pen.moveTo(280,130);
                pen.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 4:
                pen.beginPath();
                pen.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                pen.moveTo(220,70);
                pen.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                pen.moveTo(280,70);
                pen.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                pen.moveTo(280,130);
                pen.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 5:
                pen.beginPath();
                pen.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                pen.moveTo(220,130);
                pen.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                pen.moveTo(250,100);
                pen.arc(250,100,10,0,2*Math.PI); //middelste stip 2e dobbelsteen
                pen.moveTo(280,70);
                pen.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                pen.moveTo(280,130);
                pen.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                pen.closePath();
                pen.fill();
                break;

            case 6:
                pen.beginPath();
                pen.arc(220,70,10,0,2*Math.PI); //links boven 2e dobbelsteen
                pen.moveTo(220,100);
                pen.arc(220,100,10,0,2*Math.PI); //links midden 2e dobbelsteen
                pen.moveTo(220,130);
                pen.arc(220,130,10,0,2*Math.PI); //links onder 2e dobbelsteen
                pen.moveTo(280,70);
                pen.arc(280,70,10,0,2*Math.PI); //rechts boven 2e dobbelsteen
                pen.moveTo(280,100);
                pen.arc(280,100,10,0,2*Math.PI); //rechts midden 2e dobbelsteen
                pen.moveTo(280,130);
                pen.arc(280,130,10,0,2*Math.PI); //rechts onder 2e dobbelsteen
                pen.closePath();
                pen.fill();
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
            var randomGetal1 = Math.floor(Math.random()*6)+1;
            var randomGetal2 = Math.floor(Math.random()*6)+1;

            spelerTotaal= randomGetal1+randomGetal2;
            tekenScoreSpeler();
            switch(randomGetal1)
            {
                case 1:
                    pen.beginPath();
                    pen.arc(550,100,10,0,2*Math.PI); //middelste stip 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 2:
                    pen.beginPath();
                    pen.arc(520,70,10,0,2*Math.PI); //links boven 3e dobbelsteen
                    pen.moveTo(580,130);
                    pen.arc(580,130,10,0,2*Math.PI); //rechts onder 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 3:
                    pen.beginPath();
                    pen.arc(520,70,10,0,2*Math.PI); //links boven 3e dobbelsteen
                    pen.moveTo(550,100);
                    pen.arc(550,100,10,0,2*Math.PI); //middelste stip 3e dobbelsteen
                    pen.moveTo(580,130);
                    pen.arc(580,130,10,0,2*Math.PI); //rechts onder 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 4:
                    pen.beginPath();
                    pen.arc(520,70,10,0,2*Math.PI); //links boven 3e dobbelsteen
                    pen.moveTo(520,70);
                    pen.arc(520,130,10,0,2*Math.PI); //links onder 3e dobbelsteen
                    pen.moveTo(580,70);
                    pen.arc(580,70,10,0,2*Math.PI); //rechts boven 3e dobbelsteen
                    pen.moveTo(580,130);
                    pen.arc(580,130,10,0,2*Math.PI); //rechts onder 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 5:
                    pen.beginPath();
                    pen.arc(520,70,10,0,2*Math.PI); //links boven 3e dobbelsteen
                    pen.moveTo(520,70);
                    pen.arc(520,130,10,0,2*Math.PI); //links onder 3e dobbelsteen
                    pen.moveTo(550,100);
                    pen.arc(550,100,10,0,2*Math.PI); //middelste stip 3e dobbelsteen
                    pen.moveTo(580,70);
                    pen.arc(580,70,10,0,2*Math.PI); //rechts boven 3e dobbelsteen
                    pen.moveTo(580,130);
                    pen.arc(580,130,10,0,2*Math.PI); //rechts onder 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 6:
                    pen.beginPath();
                    pen.arc(520,70,10,0,2*Math.PI); //links boven 3e dobbelsteen
                    pen.moveTo(520,100);
                    pen.arc(520,100,10,0,2*Math.PI); //links midden 3e dobbelsteen
                    pen.moveTo(520,130);
                    pen.arc(520,130,10,0,2*Math.PI); //links onder 3e dobbelsteen
                    pen.moveTo(580,70);
                    pen.arc(580,70,10,0,2*Math.PI); //rechts boven 3e dobbelsteen
                    pen.moveTo(580,100);
                    pen.arc(580,100,10,0,2*Math.PI); //rechts midden 3e dobbelsteen
                    pen.moveTo(580,130);
                    pen.arc(580,130,10,0,2*Math.PI); //rechts onder 3e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break; 
            }
            switch(randomGetal2)
            {
                case 1:
                    pen.beginPath();
                    pen.arc(700,100,10,0,2*Math.PI); //middelste stip 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 2:
                    pen.beginPath();
                    pen.arc(670,70,10,0,2*Math.PI); //links boven 4e dobbelsteen
                    pen.arc(730,130,10,0,2*Math.PI); //rechts onder 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 3:
                    pen.beginPath();
                    pen.arc(670,70,10,0,2*Math.PI); //links boven 4e dobbelsteen
                    pen.moveTo(700,100);
                    pen.arc(700,100,10,0,2*Math.PI); //middelste stip 4e dobbelsteen
                    pen.moveTo(730,130);
                    pen.arc(730,130,10,0,2*Math.PI); //rechts onder 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 4:
                    pen.beginPath();
                    pen.arc(670,70,10,0,2*Math.PI); //links boven 4e dobbelsteen
                    pen.moveTo(520,70);
                    pen.arc(670,130,10,0,2*Math.PI); //links onder 4e dobbelsteen
                    pen.moveTo(730,70);
                    pen.arc(730,70,10,0,2*Math.PI); //rechts boven 4e dobbelsteen
                    pen.moveTo(730,130);
                    pen.arc(730,130,10,0,2*Math.PI); //rechts onder 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 5:
                    pen.beginPath();
                    pen.arc(670,70,10,0,2*Math.PI); //links boven 4e dobbelsteen
                    pen.moveTo(520,70);
                    pen.arc(670,130,10,0,2*Math.PI); //links onder 4e dobbelsteen
                    pen.moveTo(700,100);
                    pen.arc(700,100,10,0,2*Math.PI); //middelste stip 4e dobbelsteen
                    pen.moveTo(730,70);
                    pen.arc(730,70,10,0,2*Math.PI); //rechts boven 4e dobbelsteen
                    pen.moveTo(730,130);
                    pen.arc(730,130,10,0,2*Math.PI); //rechts onder 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
                    break;

                case 6:
                    pen.beginPath();
                    pen.arc(670,70,10,0,2*Math.PI); //links boven 4e dobbelsteen
                    pen.moveTo(520,70);
                    pen.arc(670,130,10,0,2*Math.PI); //links onder 4e dobbelsteen
                    pen.moveTo(670,100);
                    pen.arc(670,100,10,0,2*Math.PI); //links midden 3e dobbelsteen
                    pen.moveTo(730,70);
                    pen.arc(730,70,10,0,2*Math.PI); //rechts boven 4e dobbelsteen
                    pen.moveTo(730,100);
                    pen.arc(730,100,10,0,2*Math.PI); //rechts midden 3e dobbelsteen
                    pen.moveTo(730,130);
                    pen.arc(730,130,10,0,2*Math.PI); //rechts onder 4e dobbelsteen
                    pen.closePath();
                    pen.fill();
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
    pen.clearRect(350,260,180,60);
    pen.fillStyle = "black";
    pen.font = "30px Arial";
    pen.fillText('Inzet: '+inzet,350,300);
}

function tekenSaldo()
{
    pen.clearRect(350,310,180,60);
    pen.fillStyle = "black";
    pen.font = "30px Arial";
    pen.fillText('Saldo: '+saldo,350,350);
}

function reageerKlikOpHoger()
{
    verwachting = "hoger";
}

function reageerKlikOpLager()
{
    verwachting = "lager";
}
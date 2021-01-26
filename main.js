    let amount = '';    
    let svgbeer90 = document.getElementById('beer90');
    let beerForm = document.getElementById('addBeer');
    let beerFormId = document.getElementById('formId');
    let beer80 = document.getElementById('beer80');
    let beer70 = document.getElementById('beer70');
    let beer60 = document.getElementById('beer60');
    let beer50 = document.getElementById('beer50');
    let beer40 = document.getElementById('beer40');
    let beer30 = document.getElementById('beer30');
    let beer20 = document.getElementById('beer20');
    let beer10 = document.getElementById('beer10');
    let beer0 = document.getElementById('beer0');
    let cashBut = document.getElementById('cash');
    let liList = document.querySelectorAll('#liClass');
    let beerParam = document.getElementsByClassName("company");
    let closeList = document.getElementById('closeList');
    let v = document.getElementsByClassName("company");
    let compSelect = document.querySelector(".company");
    let drinkInput = 0;
    let drinkListModal = document.getElementById('listTotal');
    let display = document.querySelectorAll(".company");
    let getForm = document.getElementById('addBeer');
    let posButt = document.querySelectorAll('.posBut')
    let tapAttrb = document.querySelectorAll("li");
    let addBeer = document.getElementById('addBut');
    let tapAttrbArray = [tapAttrb];
    let addBeerSubmit = document.getElementById("formId");
    const apiUrl = 'https://api.punkapi.com/v2/beers/';
    const mainContainer = document.getElementById("myData");
    let currentBeer = ' ';
    let menu = document.getElementById('modalList');
    let beerArray = [0];
    let active = true;
    let digitInput = document.querySelector('.posGrid');
    let enteredDigit = 0;
    let drinkQuantity = document.getElementById('drinkQuantity');
    let saleModal = document.getElementById('saleModal');



console.log(display)
           

    // Get Beer API
    function getBeer() {

        document.getElementById("displayPosBeer2").innerHTML = currentBeer;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                let output = '';
                data.forEach(function (user) {
                    let randomPrice = Math.floor(Math.random() * 3) + 4;
                    data.splice(2, 0)
                    output += `
               
                <li class = 'apiBeer' id= 'drop'> ${user.name}</li> 
                <li class="tapname" value= ></li>
                <span>IBU</span>
                <li class="tapattrb" id="IBU" > ${user.ibu}</li>
                <span>ABV</span>
                <li class="tapattrb"> ${user.abv}</li>
                <span>PRICE</span>
                <li class="tapattrb" id="price5"> ${randomPrice}    </li>
                <br><br>
                    `
                })
                document.getElementById('beerNav').innerHTML = output;
                document.getElementById('beerNav2').innerHTML = output;
                let navArr = [];
                navArr.push(output);

            }).catch((error) => {
                console.log('failed');
            });
    }
    getBeer()
    closeList.addEventListener('click', function (e) {
        document.getElementById("beerNav").style.display = "none";
        document.getElementById("drop").style.display = "none";
        document.getElementById("toggleBeer").style.display = "block";

    });

    function openNav() {
        document.getElementById("toggleBeer").style.display = "none";
        document.getElementById("beerNav").style.display = "inline-block";
        document.getElementById("closeList").style.display = "";
    }

    //Switch to next tap page
    function getNextPage(click) {
        document.getElementById('gridcontain1').style.display = "none";
        document.getElementById('gridcontain2').style.display = "grid";
       alert("Multi page tap list coming soon. Click left arrow to go back.")
    }

    function getLastPage(click) {
        document.getElementById('gridcontain1').style.display = "grid";
        document.getElementById('gridcontain2').style.display = "none";
    }

    // Get the button that opens the modal
    const posModal = document.getElementsByClassName("company");
    const posModal2 = document.getElementById("beer90");
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalCt = document.getElementById("myModalCocktails");
    let modalContent = document.getElementById("modal-content");

    // Close Modal
    var span = document.getElementsByClassName("close")[0];
    var spanCt = document.getElementsByClassName("closeCt")[0];
    var spanSale = document.getElementsByClassName("closeRep")[0];
    // When the user clicks on the button, open the modal

    let name = 'name';
    style = 'style'
    id = '';

    var beer = {
        name,
        style,
        id,
        fullName: function () {
            return this.name + " rtt" + this.style;
        }
    };

    function getName(ele) {
        for (var i = 0; i < posModal.length; i++) {
            let currentBeer = ele;
            document.getElementById("displayPosBeer2").innerHTML = currentBeer;
            console.log(ele)
            posModal[i].addEventListener('click', function () {
                menu.innerHTML = '';
                modal.style.display = "block";
                beerArray.splice(0, 1, this.innerHTML, this.nextSibling.nextSibling.nextSibling.nextSibling.
                    nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.
                    nextSibling.nextSibling.innerHTML);
                               }
            )
        }
    }
    getName(v);
 

    //Native BeerArray

    function beerConstruct(id, name, style, IBU, ABV, price, keg) {
        this.name = name;
        this.id = id;
        this.style = style;
        this.IBU = IBU;
        this.ABV = ABV;
        this.price = price;
        this.keg = keg;

        this.hi = function () {
            console.log(`Hi! My name is ${this.name} ${this.style} , my bitterness is ${this.IBU} IBU, my strength is ${this.ABV}% abv, and I cost $${this.price}`);
        }
    }

//Beer Constructor
    let beer1 = new beerConstruct(1, 'Murphys Irish Stout', ' Irish Stout', 34, 4, 5, 90);
    let beer2 = new beerConstruct(2, 'PBR', 'American Lager', 10, 4.74, 3, 90);
    let beer3 = new beerConstruct(3, 'Dustys', 'PeanutButter Stout', 20, 10, 5, 90);
    let beer4 = new beerConstruct(4, 'Great Lakes', 'Edmund Fitzgerald Porter', 37, 6, 5);
    let beer5 = new beerConstruct(5, 'Barvarianhaus ', ' Oktoberfest', 25, 6, 5);
    let beer6 = new beerConstruct(6, 'Buzz Beer', 'Coffee Porter', 10, 4.74, 3);
    let beer7 = new beerConstruct(7, 'Corgi Brew Co Little Long Dog IPA', ' Irish Stout', 34, 6.2, 6);
    let beer8 = new beerConstruct(8, 'Strong Boi', 'Bourbon Barrel Aged Ale', 10, 9.2, 8);
    let beer9 = new beerConstruct(9, 'Big Belly Dark as Night ', 'Porter', 30, 6, 5);
    let beerten = new beerConstruct(10, 'Wonka Beer Co Hopstoppa', 'English IPA', 75, 6, 5);
    let beer11 = new beerConstruct(11, 'End of Days Blood ', ' Red Ale', 44, 6.5, 6.5);
    let beer12 = new beerConstruct(12, 'Smueckls Lager', 'American Lager', 19, 5.74, 3);

    beerArr = [beer1, beer2, beer3, beer4];

    console.log(beerArr)
    for (var i = 0; i < tapAttrbArray.length; i++) {
        if (beer1.id = 1 && tapAttrb[2].id == 'ibu1') {
            {
                document.getElementById('ibu1').innerHTML = beer1.IBU;
                document.getElementById('abv1').innerHTML = beer1.ABV;
                document.getElementById('price1').innerHTML = beer1.price;
            }

            if (beer2.id = 2 && tapAttrb[7].id == 'ibu2') {
                {
                    document.getElementById('ibu2').innerHTML = beer2.IBU;
                    document.getElementById('abv2').innerHTML = beer2.ABV;
                    document.getElementById('price2').innerHTML = beer2.price;
                }
                if (beer.id = 3 && tapAttrb[12].id == 'ibu3') {
                    {
                        document.getElementById('ibu3').innerHTML = beer3.IBU;
                        document.getElementById('abv3').innerHTML = beer3.ABV;
                        document.getElementById('price3').innerHTML = beer3.price;
                    }
                }
                if (beer.id = 4 && tapAttrb[17].id == 'ibu4') {
                    {
                        document.getElementById('ibu4').innerHTML = beer4.IBU;
                        document.getElementById('abv4').innerHTML = beer4.ABV;
                        document.getElementById('price4').innerHTML = beer4.price;
                    }
                }

                if (beer.id = 5 && tapAttrb[22].id == 'ibu5') {
                    {
                        document.getElementById('ibu5').innerHTML = beer5.IBU;
                        document.getElementById('abv5').innerHTML = beer5.ABV;
                        document.getElementById('price5').innerHTML = beer5.price;
                    }
                }

                if (beer.id = 6 && tapAttrb[27].id == 'ibu6') {
                    {
                        document.getElementById('ibu6').innerHTML = beer6.IBU;
                        document.getElementById('abv6').innerHTML = beer6.ABV;
                        document.getElementById('price6').innerHTML = beer6.price;
                    }
                }
                if (beer.id = 7 && tapAttrb[32].id == 'ibu7') {
                    {
                        document.getElementById('ibu7').innerHTML = beer7.IBU;
                        document.getElementById('abv7').innerHTML = beer7.ABV;
                        document.getElementById('price7').innerHTML = beer7.price;
                    }
                }
                if (beer.id = 8 && tapAttrb[37].id == 'ibu8') {
                    {
                        document.getElementById('ibu8').innerHTML = beer8.IBU;
                        document.getElementById('abv8').innerHTML = beer8.ABV;
                        document.getElementById('price8').innerHTML = beer8.price;
                    }
                }
                if (beer.id = 9 && tapAttrb[42].id == 'ibu9') {
                    console.log(beer1.id); {
                        document.getElementById('ibu9').innerHTML = beer9.IBU;
                        document.getElementById('abv9').innerHTML = beer9.ABV;
                        document.getElementById('price9').innerHTML = beer9.price;
                    }
                }

                if (beer.id = 10 && tapAttrb[47].id == 'ibu = 10') {
                    console.log(beer1.id); {
                        document.getElementById('ibu10').innerHTML = beer10.IBU;
                        document.getElementById('abv10').innerHTML = beer10.ABV;
                        document.getElementById('price10').innerHTML = beer10.price;
                    }
                }
                if (beer.id = 11 && tapAttrb[52].id == 'ibu1') {
                    console.log(beer1.id); {
                        document.getElementById('ibu11').innerHTML = beer11.IBU;
                        document.getElementById('abv11').innerHTML = beer11.ABV;
                        document.getElementById('price11').innerHTML = beer11.price;
                    }
                }
                if (beer.id = 12 && tapAttrb[57].id == 'ibu12') {
                    console.log(beer1.id); {
                        document.getElementById('ibu12').innerHTML = beer12.IBU;
                        document.getElementById('abv12').innerHTML = beer12.ABV;
                        document.getElementById('price12').innerHTML = beer12.price;
                    }
                }

            }
        }
    }



    //Add Beer Button
    addBeer.addEventListener("click", function newBeerBut() {
        document.getElementById('addBeerForms').style.display = "block";
    })


    function clic(element) {
        alert("Clicked on " + element.name);
    }

    function formSubmit() {
        preventDefault();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
           
        }
    }

    //Pos Modal Buttons
    let beerQuant = document.querySelector('.company').value;
    let tqrr = document.getElementById("totalQuantity");
    let tqrra = document.getElementById("totalQuantity").innerHTML;
    tqrr.innerText = 0;


// Keypad for Beer List
digitInput.addEventListener('click', e => {
    if (e.target.matches('.posBut')) {
        const key = e.target
        console.log(e.target.innerHTML)
        enteredDigit = e.target.innerHTML;
        drinkQuantity.innerHTML += `${enteredDigit}`;
    }
})
const kegI = document.querySelectorAll('.beerContain');
let kegClickVal = '';
kegI.forEach(function(el){
  el.addEventListener('click', function () {
   console.log(el.firstChild.nextSibling.value)
   kegClickVal = el.firstChild.nextSibling.value;
  });
});

//Enter Button and Event
let sum = '';
    document.getElementById("Enter").addEventListener("click", function getEnt(event) {

        for (i = 1; i <= enteredDigit; i++) {

            let node = document.createElement("LI");
            node.id = "liClass";
            let beerp = document.getElementById("displayPosBeer2").innerHTML;
            let textnode = document.createTextNode(beerp);
            node.appendChild(textnode);
            document.getElementById("modalList").appendChild(node);
            const cln = node.cloneNode(true);
            drinkListModal.appendChild(cln); 
            console.log(beerArray);
            drinkListModal.innerHTML += `<li id="priceTotal">  ${beerArray[1]} </li>`;
            const listItems = [].slice.call(document.querySelectorAll("#priceTotal"));
            let sum = listItems.reduce(function (sum, el) {
                return sum + parseFloat(el.innerText);
            }, 0);
            document.getElementById('salesTotal').innerHTML = ` $${sum}`;
        }
        


        let meter1 = document.getElementById('BeerMeter1');
        let meter2 = document.getElementById('BeerMeter2');
        let meter3 = document.getElementById('BeerMeter3');
        let meter4 = document.getElementById('BeerMeter4');
        let meter5 = document.getElementById('BeerMeter5');
        let meter6 = document.getElementById('BeerMeter6');
        enteredDigit = 0;
        drinkQuantity.innerHTML = ` Drink Quantity `;
        let company1 = document.getElementById('compa1')
        let company2 = document.getElementById('compa2')
        let company3 = document.getElementById('compa3')
        let company4 = document.getElementById('compa4')
        let company5 = document.getElementById('compa5')
        let company6 = document.getElementById('compa6')
        let getList = document.getElementById('liClass');
        let tapVal = v.value;


        console.log(compSelect.value)
                //Update Keg Level
                switch (kegClickVal) {
                    case 1:
                     meter1.value = meter1.value - .1;
                      break;
                    case 2:
                      meter2.value = meter2.value - .1;      
                      break;
                    case 3:
                     meter3.value = meter3.value - .1;   
                      break;
                    case 4:
                     meter4.value = meter4.value - .1;   
                      break;
                    case 5:
                    meter5.value = meter5.value - .1;   
                      break;
                    case 6:
                    meter6.value = meter6.value - .1;   
                      break;
               
                  }
                  console.log(v[0].value)


    })


    //ADD A DRINK 
    document.getElementById("plusOne").addEventListener("click", function getPlusOne(event) {

        let node = document.createElement("LI");
        node.id = "liClass";
        let beerp = document.getElementById("displayPosBeer2").innerHTML;
        let textnode = document.createTextNode(beerp);
        node.appendChild(textnode);
        document.getElementById("modalList").appendChild(node);
        const cln = node.cloneNode(true);
        drinkListModal.appendChild(cln);

        drinkListModal.innerHTML += `<li id="priceTotal">  ${beerArray[1]} </li>`;
        const listItems = [].slice.call(document.querySelectorAll("#priceTotal"));
        let sum = listItems.reduce(function (sum, el) {
            return sum + parseFloat(el.innerText);
        }, 0);
        document.getElementById('salesTotal').innerHTML = ` $${sum}`;

    });

    document.getElementById("clear").addEventListener("click", function getClear() {
        document.getElementById("drinkQuantity").innerHTML = 0;
    });

    document.getElementById("Done").addEventListener("click", function getDone() {
        modal.style.display = "none";
   
    });

    let fpMenu = document.getElementById('listTotal');
    //Delete Drink From Modal List
    document.getElementById("negateOne").addEventListener("click", function getnegateone(event) {
        console.log('del');

        menu.removeChild(menu.lastElementChild);
        fpMenu.removeChild(fpMenu.lastElementChild);
        fpMenu.removeChild(fpMenu.lastElementChild);

    });

    //Mark List Item for deletion

    let liDel = document.getElementById('listTotal');
    liDel.addEventListener('click', e => {
        fpMenu.removeChild(fpMenu.lastElementChild);
        fpMenu.removeChild(fpMenu.lastElementChild);
    });

        //Cash Out and Add Total Sales
        let totalArr = [];
        let hehe = null;
        cashBut.addEventListener('click', function addTotalSales (){
        totalArr.push(document.getElementById("salesTotal").innerHTML);
        console.log(totalArr);
        
        let saleReport = "";

        saleReport = totalArr.reduce(
            (accumulator, currentValue) => accumulator + currentValue
       
        );
 
         totalArr = [];
         document.getElementById('salesTotal').innerHTML = ` $${sum}`;
         document.getElementById('listTotal').innerHTML = '';
document.getElementById('report');
report.addEventListener('click', () =>{
    console.log('h')
saleModal.style.display ="block";
const tableSales= `<table>
<tr>
  <td>  ${new Date}  </td><td> ${saleReport}  </td>
</tr>
</table>`

document.getElementById('myTable').innerHTML += tableSales;
totalArr = [];
})
})

    //COCKTAIL BUTTON
    let ctBtn = document.getElementById('cocktailsBut');
    let ctModal = document.getElementById('myModalCocktails');
    ctBtn.addEventListener('click', function (e) {
        ctModal.style.display = "block";

    })
  

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
     
    }
    spanCt.onclick = function () {
        ctModal.style.display = "none";
      
    }

    spanSale.onclick = function () {
     console.log('taa')
        saleModal.style.display = "none";
    }
 

    function cocktailConstruct(id, name, price, info) {
        this.name = name;
        this.id = id;
        this.info = info;
        this.price = price;

    }

    let cocktail0 = new cocktailConstruct(0, 'Manhattan', 5, "Stirred over ice, strained into a chilled glass, garnished, and served up.");
    let cocktail1 = new cocktailConstruct(1, 'Gin and Tonic', 5, "In a highball glass, combine the gin, tonic, and lime juice. Stir and garnish with lime slice.");
    let cocktail2 = new cocktailConstruct(2, 'Moscow Mule', 5, "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.");
    let cocktail3 = new cocktailConstruct(3, 'White Russian', 5, "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.");
    let cocktail4 = new cocktailConstruct(4, 'Margarita', 5, "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. Shake the other ingredients with ice, then carefully pour into the glass.");
    let cocktail5 = new cocktailConstruct(5, 'Old Fashioned', 5, "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry.");
    let cocktail6 = new cocktailConstruct(6, 'House Martini', 5, "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.");
    let cocktail7 = new cocktailConstruct(7, 'Bloody Mary', 5, "Pour all ingredients,vodka, tomato juice, horseradish, pepper, lemon juice, hot sauce,celery salt into highball glass.Shake. Garnish with olive, lemon, celery.");
    let cocktail8 = new cocktailConstruct(8, 'Mojito', 5, "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.");
    let cocktail9 = new cocktailConstruct(9, 'Whiskey Sour', 5, "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.");


    let zeroCt = document.getElementById('zeroCt');
    zeroCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail0.info;

    });


    let oneCt = document.getElementById('oneCt');
    oneCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail1.info;

    });
    let twoCt = document.getElementById('twoCt');
    twoCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail2.info;

    });
    let threeCt = document.getElementById('threeCt');
    threeCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail3.info;

    });

    let fourCt = document.getElementById('fourCt');
    fourCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail4.info;

    });

    let fiveCt = document.getElementById('fiveCt');
    fiveCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail5.info;

    });
    let sixCt = document.getElementById('sixCt');
    sixCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail6.info;

    });
    let sevenCt = document.getElementById('sevenCt');
    sevenCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail7.info;

    });
    let eightCt = document.getElementById('eightCt');
    eightCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail8.info;

    });
    let nineCt = document.getElementById('nineCt');
    nineCt.addEventListener('mouseover', function () {
        document.getElementById("displayCt").innerHTML = cocktail9.info;

    })

    //append li to cocktail list
    const ctLi = document.querySelectorAll('.posButCt');

    ctLi.forEach((el) =>
        el.addEventListener("click", (event) => {
            let ctClick = event.target.innerHTML;
            document.getElementById("displayPosCt").innerHTML = ctClick;
            let node = document.createElement("LI");
            node.id = "liClass";
            let ctp = document.getElementById("displayPosCt").innerHTML;
            let textnode = document.createTextNode(ctp);
            node.appendChild(textnode);
            document.getElementById("modalListCt").appendChild(node);
            let liList = document.querySelectorAll("#liClass");
            var cln = node.cloneNode(true);
            drinkListModal.appendChild(cln);
            drinkListModal.innerHTML += `<li id="priceTotal">  7 </li>`;
            const listItems = [].slice.call(document.querySelectorAll("#priceTotal"));
           let sum = listItems.reduce(function (sum, el) {
                return sum + parseFloat(el.innerText);
            }, 0);
            document.getElementById("salesTotal").innerHTML = ` $${sum}`;
        })
    );

    document.getElementById("clearCt").addEventListener("click", function getClear() {
        document.getElementById("modalListCt").innerHTML = 0;
    });


    document.getElementById("enterCt").addEventListener("click", function getEnter() {
        console.log('ent');
        let liList = document.querySelectorAll('#liClass');
        modalCt.style.display = "none";

    });


    let formObj = [{
        "name": "",
        "style": "",
        "IBU": "",
        "ABV": "",
        "Price": ""
    }]

    //Add Beer Form
    let addBeerSub = document.getElementById('formButId');
    let beerName = document.getElementById('beer-info1');
    let beerIBU = document.getElementById('beer-info3');
    let beerABV = document.getElementById('beer-info4');
    let beerPrice = document.getElementById('beer-info5');

    let clearFields = document.querySelector('#addBeerForms');
    clearFields.addEventListener("click", e => {
        (e.target.matches('.beer-info'))
        console.log(e.target)
        e.target.value = "";

    })


    digitInput.addEventListener('click', e => {
        if (e.target.matches('.posBut')) {
            const key = e.target
            console.log(e.target.innerHTML)
            enteredDigit = e.target.innerHTML;
            drinkQuantity.innerHTML = `${enteredDigit}`;
        }
    })


    addBeerSub.addEventListener("click", function submitBeer() {

        formObj.push({
            'name': beerName.value
        });
        let beerNav = document.getElementById('beerNav');
        beerNav.innerHTML += `<li class = 'apiBeer' id= 'drop'> ${beerName.value}</li> 
        <li class="tapname" value= ></li>
        <span>IBU</span>
        <li class="tapattrb" id="IBU" > ${beerIBU.value}</li>
        <span>ABV</span>
        <li class="tapattrb"> ${beerABV.value}</li>
        <span>PRICE</span>
        <li class="tapattrb" id="price5"> ${beerPrice.value}    </li>
        <br><br>
    `
        document.getElementById('addBeerForms').style.display = 'none';

    })

    let cancelForm = document.getElementById('formCancelId');
    cancelForm.addEventListener('click', e => {
        addBeerForms.style.display = 'none'
    })
    let newInfo = [];
    const appp = document.querySelector("#beerNav");
    const tapBut = document.getElementById("formId");
    let targetBeer = "";
    appp.addEventListener("click", e => {
        if (e.target.classList.contains("apiBeer")) {
            console.log(e.target);
            newInfo.push(e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
            newInfo.push(e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
            newInfo.push(e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
            e.target.style.color = "red";
            targetBeer = e.target.innerHTML;
            console.log(targetBeer)
            return targetBeer;

        }
        e.target.style.color = "white";
    });
   

    tapBut.addEventListener("click", (e) => {
        var tId = document.getElementById("tId");
        var strUser = tId.value;
        let tapLength = document.querySelectorAll('.tapname');


        if (confirm(`Replace  With ${targetBeer} at Tap ${strUser}`)) {
            txt = "You pressed OK!";
            let xx = function () {
                for (i = 0; i < tapLength.length; i++) {
                    if (tapLength[i].value == strUser) {
                        console.log(tapLength[i])
                        let foundBeerVal = tapLength[i];
                        foundBeerVal.previousSibling.previousSibling.innerHTML = targetBeer;
                        foundBeerVal.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = newInfo[0];
                        foundBeerVal.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = newInfo[1];
                        foundBeerVal.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.
                        nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = newInfo[2];
                        newInfo = [];
                    }
                }
            }
            xx();

        } else {
            txt = "Cancel Beer Switch";
        }



    })
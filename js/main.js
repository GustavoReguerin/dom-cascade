import info from './data.js';

// MAIN VARS
let select_1 = document.getElementById("select1");
let select_2 = document.getElementById("select2");
let option_1, option_2;

// FUNCTION CALLED WHEN AN ITEM IS SELECTED ON SELECT_1
function updateSelect2(objSel){

    console.log("Select 1 Subitems: " + objSel.subitems); 

    // SELECT 2 - EMPTY SELECT
    select_2.innerHTML = "";

    // SELECT 2 - CREATE OPTION -1
    option_2 = document.createElement("option");

    option_2.text   = "-Select subitem-";
    option_2.value  = "-1";
    select_2.add(option_2);

    // SELECT 2 - FILL ITEMS
    if('subitems' in objSel)
    {
        let itemsCount = objSel.subitems.length;
    
        for(let i=0; i<itemsCount; i++)
        {                
            let subItemValue = objSel.subitems[i];
            console.log('Select 2 Subitem: '+i+ ' - ' + subItemValue);

            option_2 = document.createElement("option");
            
            option_2.text   = subItemValue;
            option_2.value  = subItemValue;        
            select_2.add(option_2);
        }
    }
}

// SELECT 1 - FILL MAIN ITEMS 
info.forEach((elementObj)=>{

    let itemValue = elementObj.item;

    // SELECT 1 - ADD OPTIONS INTO SELECT
    option_1 = document.createElement("option");

    option_1.text   = itemValue;
    option_1.value  = itemValue;
    select_1.add(option_1);

    console.log('Select 1 Item: '+elementObj.item);
});

// SELECT 1 - LISTENER -> CHANGE
select_1.addEventListener('change',(ev)=> {

    // LOG: VALUES RELATED WITH THE LISTENER/SELECT_1
    console.log('Select 1 - info - target, tags: '+ev.target, select_1);
    console.log('Select 1 - info - selectedIndex: '+select_1.selectedIndex, select_1.value);
    console.log('Select 1 - info - textContent: '+select_1.options[select_1.selectedIndex].textContent);

    // FILL SELECT 2 WITH ITEMS RELATED
    let optionSelected = select_1.selectedIndex;
    let itemSelected = info[optionSelected-1];

    console.log("Select 1 - event change - index: " + optionSelected);
    console.log("Select 1 - event change - value: " + info[optionSelected-1].item);

    updateSelect2(itemSelected);
});

// SELECT 2 - LISTENER -> CHANGE
select_2.addEventListener('change',(ev)=> {
    console.log('Select 2 - event change - value: ' + select_2.value);
});
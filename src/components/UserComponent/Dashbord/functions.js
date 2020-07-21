import React,{useEffect} from 'react';


var tab = [];
export const addtobasket = (name,price) => {
   
    tab.push({plan:name,price:price});
    document.getElementById('icon').style.color="tomato";
    return {
        count : tab.length,
        tab : tab
    }
}

export const cleartable = () => {
tab=[];
}

export const getitems=()=>{
    return tab;
}


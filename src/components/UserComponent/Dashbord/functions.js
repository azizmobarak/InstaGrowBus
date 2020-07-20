import React,{useEffect} from 'react';

var tab = [];
export const addtobasket = (name, e) => {
    tab.push(name);
    document.getElementById('icon').style.color="tomato";
    return tab.length;
}

export const cleartable = () => {
tab=[];
}

export const getitems=()=>{
    return tab;
}


import React , {useState, useEffect} from 'react';
import Info from'./info';
import {useParams} from 'react-router-dom';
import axios from 'axios';
const Billing =() =>{
const{userid} = useParams();
return(
    <Info 
    userid={userid}
    />
)

}
export default Billing;
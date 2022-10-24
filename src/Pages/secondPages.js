import React from "react";
import Routes from '../routes/index';
import CoreLayout from "../common/layouts/CoreLayout";
import '../styles/_main.scss';
// import { Link } from "react-router-dom";

function SecondPage (){
    return (
    <CoreLayout>
        <Routes />
    </CoreLayout>
        )
}
export default SecondPage;
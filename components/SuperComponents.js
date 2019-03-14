import React from 'react'
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends React.Component{
    constructor(){
        super();
        this.someVariables = 'just some variable';
    }

    alertName(title){
        alert(title)
    }
    render(){
        return(
            <BaseLayout>
             <h1>i'm muteki</h1>   
            </BaseLayout>
        )
    }
}

export default SuperComponent
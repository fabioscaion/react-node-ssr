import React from 'react'
import reactDom from 'react-dom/server'
import AppComponent from '.'
import Home from './Pages/Home'

export default function Routes(app){
    
    app.get('/', (req, res)=>{
        res.send(reactDom.renderToString(
            <AppComponent
                title="Model SSR - Home"
                bodyClass="home"
            >
                <Home />
            </AppComponent>
        ))
    })

}
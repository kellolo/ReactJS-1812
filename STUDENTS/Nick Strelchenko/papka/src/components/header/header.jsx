import React from 'react'
class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="w-100 text-center bg-primary p-1 text-white" >
                    <h2>Здравствуй User твой чат активен!</h2>
                </div>
            </React.Fragment>
            
        )
    }
}
export default Header
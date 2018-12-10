import React from 'react';
import '../index.css';

class Header extends React.Component {

constructor(){

    super();
    this.state = {
        bookstoreName: "Black Books",
       clicked: true

    }
}
/*
f = () => {
    this.setState({
        clicked: false
    })
}
    */

changeColor = () => {

if(this.state.clicked) {

    this.setState({
        bookstoreName: "Red Books"
    })
} else {
    this.setState({
        bookstoreName: "Black Books"
    })
}

    this.setState({
        clicked: !this.state.clicked
    })

}




    render() {
        return (
            <div class="row header col-xs-12">
             <button onClick={this.changeColor}>Click</button>   <h1>{this.state.bookstoreName}</h1>
            </div>

        ) 
    }
}


export default Header;
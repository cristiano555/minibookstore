import React from 'react';


export default class OrderView extends React.Compoment {


    render() {

        return (

            <div>
                <b>{this.props.book.name}</b><br/>
                <button onClick={ (event) => this.props.removeFromOrder(this.props.book.name) }>Usuń z koszyka</button>
            </div>


        )

    }




}

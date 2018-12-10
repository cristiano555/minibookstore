import React from "react";


export default class BookView extends React.Component {

    render() {

        return (
            <div>
            <b>{this.props.book.name}</b><br/>
            <b>{this.props.book.author}</b><br/>
            <img src="{this.props.book.image}" alt="{this.props.book.name}" width="75" height="100"/><br/>
            <button onClick={ (event) => this.props.addToOrder(this.props.book) }>Dodaj do koszyka</button>
            </div>
        );
    }






}
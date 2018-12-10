import React, { Component } from 'react';
import Header from './Header';
import AdminPanel from './AdminPanel';
import Order from './Order';
import Inventory from './Inventory';
import '../index.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      books : [],
      order : []
    }

  }

  addNewBook = (book) => {
    let NewBooks = [...this.state.books];
    NewBooks.push(book);

    this.setState({
      books : NewBooks
    });

  }

  addToOrder = (book) => {
    this.setState({
      order : [...this.state.order, book]
    })
    
  }

  removeFromOrder = (title) => {
    this.setState({
      order : this.state.order.filter( book => title!==book.name )
    })
  }

  render() {
    return (
      <div className="app container" >
        <Header />
        <div className="row">
          <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
          <Inventory books={this.state.books} addToOrder={this.addToOrder}  />
          <AdminPanel books={this.state.books} addBook={this.addNewBook} />
        </div>
      </div>
    );
  }
}

export default App;

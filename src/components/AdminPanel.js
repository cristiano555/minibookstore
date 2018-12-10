import React from 'react';
import '../index.css';

class AdminPanel extends React.Component {


    constructor() {

        super();

        this.state = {
            book: {
                name: "",
                author: '',
                description: '',
                onStock: true,
                image: ''

            }
        }
    };


    handleChange = (event) => {

        let newBook;

        if (event.target.name === "onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            }
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };

        }



        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {

        event.preventDefault();

        let newBook = {...this.state.book};

        this.props.addBook(newBook)

        this.setState({
            book: {
                name: "",
                author: '',
                description: '',
                onStock: true,
                image: ''
            }
        });

    }

    render() {


        return (
            <div className="adminPanel col-lg-4" >
                <form onSubmit={this.addNewBook}>
                    <div form-group>
                        <input type="text" className="form-control" placeholder="Nazwa książki" name="name" id="bookName" onChange={this.handleChange} value={this.state.book.name} />
                    </div>
                    <div form-group>
                        <input type="text" className="form-control" placeholder="Autor książki" name="author" id="bookAuthor" onChange={this.handleChange} value={this.state.book.author} />
                    </div>
                    <div form-group>
                        <textarea type="text" className="form-control" placeholder="Opis książki" name="description" id="bookDescription" onChange={this.handleChange} value={this.state.book.description} />
                    </div>
                    <div form-group>
                        <input type="checkbox" className="form-check-input" name="OnStock" id="bookOnStock" onChange={this.handleChange} value={this.state.book.onStock} />
                    </div>
                    <label htmlFor="bookOnStock" className="form-check-label">Sprawdź dostępność</label>
                    <div form-group>
                        <textarea type="text" className="form-control" placeholder="Obrazek książki" name="image" id="bookImage" onChange={this.handleChange} value={this.state.book.image} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}


export default AdminPanel;
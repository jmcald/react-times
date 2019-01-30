import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron;"
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookContainer } from "../components/BookContainer";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.showBooks();
    }

    showBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                }
                )
            )
            .catch(err => console.log(err));
    };

    deleteBooks = id => {
        API.deleteBook(id).then(res => this.showBooks());
    };

    render() {
        return (
            <Container fluid>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>(React) Google Books Search</h1>
                        <h3>Search for and Save Books of Interest</h3>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <p>Saved books</p>
                <Col size="md-12">
                    <Card title="Saved Books">
                    {this.state.books.length ? (
                        <BookContainer>
                            {this.state.books.map(book => (
                                <Book key={book._id}
                                title={book.title}
                                subtitle={book.subtitle}
                                link={book.link}
                                authors={book.authors.join(", ")}
                                description={book.description}
                                image={book.image}
                                Button={() => (
                                    <button
                                    onClick={() => this.deleteBooks(book._id)}
                                    className="btn btn-danger ml-2"
                                    >Delete</button>
                                    )
                                }
                                />
                            ))}
                        </BookContainer>
                    ) : (
                        <h3>No Results to Display</h3>
                    )}
                    </Card>
                </Col>
            </Row>
            <Footer />
            </Container>
        )
    }
}

export default Saved;
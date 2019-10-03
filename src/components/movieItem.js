import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {
    render() {
        return (
            <div>
                {//<h4>{this.props.movie.Title}</h4>
                   // <p>{this.props.movie.Year}</p>
                   /* <img src={this.props.movie.Poster}></img>*/}

                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <h4>{this.props.movie.Title}</h4>
                            <footer>
                                <p>{this.props.movie.Year}</p>
                            </footer>
                            <img src={this.props.movie.Poster}></img>}
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MovieItem;
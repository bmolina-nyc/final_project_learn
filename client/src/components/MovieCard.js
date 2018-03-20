import React from 'react';
import { connect } from 'react-redux';
import Client from './Client'

// want a button here to add to your favorites via a reducer

export default class MovieCard extends React.Component{
    state = {
      clicked: false, 
      genre: '',
      actors: '',
      director: '',
      plot: '',
    }

    handleOnClick = (imdbID) => {
        Client.searchMovie(imdbID, (result)=>{
            this.setState({
                clicked: true,
                genre: result.Genre,
                actors: result.Actors,
                director: result.Director,
                plot: result.Plot
            })
        })
    }

    render(){
        return(
            <div>
                <p>Title: {this.props.props.Title}</p>
                <p>Release Date:  {this.props.props.Year}</p>
                {<img 
                    width="320" 
                    height="375" 
                    alt="Not Available" 
                    src={this.props.props.Poster === "N/A" ? "https://media.giphy.com/media/5QZnClQar0Im32pFlz/giphy.gif" : this.props.props.Poster} />}
                <button onClick={()=>this.handleOnClick(this.props.props.imdbID)}>More Information</button>
            
                  {this.state.clicked &&
                    <table>
                        <tbody>
                        <tr>
                            <td>Genre: {this.state.genre}</td>
                        </tr>
                        <tr>
                            <td>Actors: {this.state.actors}</td>
                        </tr>
                        <tr>
                            <td>Director: {this.state.director}</td>
                        </tr>
                        <tr>
                            <td>Plot: {this.state.plot}</td>
                        </tr>
                        </tbody> 
                    </table>
                  }
             <hr/>
            </div> 
        )
    }
} 

import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const state = location.state;
      return (
        <div className="movie__detail">
          <img src={state.poster} alt={state.title} title={state.title}></img>
          <div className="movie__data">
            <h3 className="movie__title">{state.title}</h3>
            <h5 className="movie__year">{state.year}</h5>
            <p className="movie__summary">{state.summary}</p>
            <ul className="genres">
              {state.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;

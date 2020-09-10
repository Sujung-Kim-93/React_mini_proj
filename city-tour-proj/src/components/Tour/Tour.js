import React from "react";
import "./tour.scss";

class Tour extends React.Component {
  state = {
    isMore: false,
  };

  moreClick = () => {
    this.setState(() => {
      return { isMore: !this.state.isMore };
    });
  };

  render() {
    const { id, img, city, name, info } = this.props.item;
    const { isMore } = this.state;
    const { deleteItem } = this.props;
    // console.log(item);
    return (
      <article>
        <img src={img} alt={city} />
        <div className="description">
          <h2>{city}</h2>
          <h3>{name}</h3>
          <button onClick={this.moreClick} className="more">
            more&nbsp;
            {isMore === false ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
          {isMore && <p>{info}</p>}
        </div>
        <button
          className="delete"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </article>
    );
  }
}

export default Tour;

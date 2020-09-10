import React from "react";
import Tour from "../Tour/Tour";
import { tourData } from "../../tourData";
import "./tourlist.scss";
class Tourlist extends React.Component {
  state = {
    tourData: tourData,
  };

  deleteItem = (id) => {
    this.setState(({ tourData }) => {
      tourData = tourData.filter((item) => item.id !== id);
      return { tourData };
    });
  };

  render() {
    const { tourData } = this.state;
    return (
      <div>
        {tourData.map((item) => {
          return (
            <Tour key={item.id} item={item} deleteItem={this.deleteItem} />
          );
        })}
      </div>
    );
  }
}

export default Tourlist;

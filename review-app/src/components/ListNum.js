import React from "react";
import { Link } from "react-router-dom";

class ListNum extends React.Component {
  render() {
    const num = [];
    //console.log(this.props.num);
    for (let i = 1; i <= this.props.num; i++) {
      num.push(i);
    }
    return (
      <div className="listNum">
        {num.map((item) => {
          return (
            <Link
              key={item}
              to={{ pathname: `/?page=${item}`, num: item }}
              className="list"
            >
              {item}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ListNum;

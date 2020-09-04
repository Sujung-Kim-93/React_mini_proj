import React from "react";

const ShowPhoto = ({ link, alt_des, img, name, price, etc, color }) => {
  return (
    <div className="item">
      <div className="img">
        <a href={link} title={alt_des}>
          <img src={img} alt={alt_des} />
        </a>
      </div>
      <div className="name">
        <a href={link} title={alt_des}>
          <span>{name}</span>
        </a>
      </div>
      <div className="price">
        {price.map((ele, idx) => (
          <span key={idx}>{ele}</span>
        ))}
      </div>
      <div className="etc">
        {etc.map((ele) => (
          <img key={ele} src={"http://black-up.kr" + ele} alt={name} />
        ))}
      </div>
      <div className="color">
        {color.map((ele, idx) => (
          <div key={idx} style={{ background: ele }}></div>
        ))}
      </div>
    </div>
  );
};

export default ShowPhoto;

import React from "react";
import "./List.css";
import WebScrape from "../components/WebScrape";
import ShowPhoto from "../components/ShowPhoto";

class List extends React.Component {
  // scrapestack api 사용해서 html 가져욤
  pageNum = this.props.location.num === undefined ? 1 : this.props.location.num;

  // http://black-up.kr/category/new-rising-item/303/
  // http://black-up.kr/category/pants/26/
  //http://black-up.kr/category/best50/31/
  url =
    "http://api.scrapestack.com/scrape/?access_key=e0a3dbce51a163a527db8cba3bcdbc25&url=http://black-up.kr/category/pants/26/?page=" +
    this.pageNum;

  state = {
    products: {},
    loaded: false,
  };
  // receiving data

  // 크롤링한 결과 가져와서 state에 반영
  async componentDidMount() {
    let products = {};
    console.log("mount");
    console.log(this.url);
    const dataList = await WebScrape(this.url);
    products = dataList;
    this.setState({ products });
    this.setState({ loaded: true });
  }

  render() {
    if (this.state.loaded === true) {
      const { products } = this.state;
      //console.log(products);

      return (
        <div className="container">
          <h1>Blackup Pants</h1>
          <div className="item-container">
            {products.map((item) => {
              return (
                <ShowPhoto
                  key={item.link}
                  link={item.link}
                  alt_des={item.alt_des}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  etc={item.etcArr}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <span>loading..</span>
        </div>
      );
    }
  }
}

export default List;

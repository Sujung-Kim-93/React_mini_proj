import axios from "axios";
import { JSDOM } from "jsdom";

const WebScrape = async (url) => {
  // axios 오류 방지
  try {
    // html 데이터 가져오기
    const { data } = await axios.get(url);
    // 파싱
    const dom = new JSDOM(data);
    const { document } = dom.window;
    const ul = document.querySelector(".grid4");
    const liList = ul.children;
    const dataList = [];
    const ol = document.querySelector("ol").children.length;

    // item이 존재하지 않을 때 오류 방지, 비워서 넘김
    const ignoreError = (func) => {
      try {
        func();
      } catch (e) {
        console.log(e);
      }
    };
    for (let i = 0; i < liList.length; i++) {
      let link = "";
      let img = "";
      let alt_des = "";
      let des = "";
      let name = "";
      let price = ["", "", ""];
      let color = [];
      let etcArr = [];

      ignoreError(() => {
        link = liList[i].querySelector(".thumbnail > a").href;
      });
      ignoreError(() => {
        img = liList[i].querySelector(".thumbnail > a").children[1].src;
      });
      ignoreError(() => {
        alt_des = liList[i].querySelector(".thumbnail > a").children[1].alt;
      });
      ignoreError(() => {
        des = liList[i].querySelector(".description");
      });
      ignoreError(() => {
        name = des.querySelector("a").children[1].textContent;
      });
      ignoreError(() => {
        // price 데이터 순서대로 처리하면 오류 많아 검사
        const priceLi = des.querySelector("ul").getElementsByTagName("li");
        for (let i = 0; i < priceLi.length; i++) {
          const txt = priceLi[i].children[1].textContent;
          if (txt.includes("won")) {
            if (txt.includes("할인")) {
              price[0] = txt;
            } else {
              price[1] = txt;
            }
          } else {
            price[2] = txt;
          }
        }
      });
      ignoreError(() => {
        for (let i = 0; i < des.querySelector(".color").children.length; i++) {
          color.push(des.querySelector(".color").children[i].title);
        }
      });
      ignoreError(() => {
        const etcLi = des.querySelector(".icon .promotion").children;
        for (let i = 0; i < etcLi.length; i++) {
          etcArr.push(etcLi[i].src);
        }
      });

      dataList.push({ ol, link, img, alt_des, name, price, color, etcArr });
    }
    //console.log(dataList);

    return dataList;
  } catch (error) {
    console.log(error);
  }
};

export default WebScrape;

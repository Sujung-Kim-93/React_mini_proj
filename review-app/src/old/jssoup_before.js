/*
const soup = new JSSoup(data);
  const ul = soup.findAll("ul", "prdList");
  let liList = [];
  let li = "";
  while (li === "" || li.nextSibling !== undefined) {
    //console.log(ul[0].nextElement);
    if (li === "") {
      li = ul[0].nextElement;
    } else {
      li = li.nextSibling;
    }
    if (li.contents[1] !== undefined) {

      try {
        let link = li.contents[1].contents[0];
        const img = link.contents[1].attrs.src;
        const alt_des = link.contents[1].attrs.alt;
        link = link.attrs.href;
        const des = li.contents[2];
        const name = des.contents[0].contents[0].contents[1].contents[0]._text;
        console.log(des.contents[1].contents[0].contents[2]);
        const price = [
          des.contents[1].contents[0].contents[1].text,

          des.contents[1].contents[1].contents[1].text,
        ];
        let color = [];

        if (des.contents[1].contents[2] !== undefined) {
          const colorArr = des.contents[1].contents[2].contents[1].contents;
          for (let i = 0; i < colorArr.length; i++) {
            color.push(colorArr[i].attrs.title);
          }
        }
        const etcArr = des.contents[2].contents[0].contents;
        let etc = [];
        for (let i = 0; i < etcArr.length; i++) {
          etc.push(etcArr[i].attrs.src);
        }

        liList.push({ link, img, alt_des, name, price, color, etc });
      } catch (e) {
        console.log(e);
      }
    }
  }
  return liList;


*/

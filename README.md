# GETLINKCHUA - Cách đơn giản để "chôm" link video một trang web


## Cài đặt

Install from NPM: `npm install getlinkchua`


[![npm package](https://nodei.co/npm/getlinkchua.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/getlinkchua/)


## Cách Sử dụng

```js
"use strict"
const getlinkchua = require('getlinkchua');

async function sync() {
    var url = 'http://phimbathu.com/xem-phim/hanh-vi-pham-toi-criminal-minds-2017-tap-2-7667_e76633.html';
    var arrLink = await getlinkchua.getlinkphimbathu(url);
    console.log(arrLink)
}
sync();
//[ 'https://openload.co/embed/DzjQsHK47fU',
//  'https://streamango.com/embed/qdtrfmpanofablnn',
//  'https://drive.google.com/file/d/0BxOgwGj4jhCuR3hpaGQzcGk3eWs/preview',
//  'https://drive.google.com/file/d/0BxOgwGj4jhCubGNmYlMxWVV4bmc/preview' ]
```

## Lưu ý
Phiên bản hỗ trợ: node > 7.6
# `react-google-oauth` DEMO

* [react-google-oauth](https://github.com/CyrilSiman/react-google-oauth#1--inject-and-init-google-api-script)
* [Parcelを使って`react-google-oauth`のDEMOをやってみる](http://simoothie-cafe.hatenablog.com/entry/2017/12/11/102638)

## Get started

```
$ git clone https://github.com/simochee/react-google-oauth.git
$ cd react-google-oauth
$ yarn && parcel app/index.html
```

Server listening at http://localhost:1234

## Tips

### ログインしているアカウントの情報を取得

```javascript
import { googleGetBasicProfil } from 'react-google-oauth';

console.log(googleGetBasicProfil());
```

ログインしていればユーザー情報のObjectが、ログインしていなければ空のObjectが返る

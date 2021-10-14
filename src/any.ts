import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  // レスポンスのデータ構造は予測できないので、型推論はanyになる
  // 良い状況ではない
  // let data: any = response.data;
  // ↓
  // dataについて
  // 配列型である、要素はオブジェクトである
  // let data: object[] = response.data;
  // ↓ objectが空でもエラーにならない
  // interfaceでオブジェクトの型を定義する
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = response.data;
  // interface通りの型のオブジェクトなので下記は受け入れられる
  data = [
    {
      id: 1,
      title: 'title',
      description: 'description',
    },
  ];
  // interfaceの型通りでないのでオブジェクトなので下記は受け入れられない
  // data = [
  //   {
  //     id: 1,
  //     description: 'description',
  //   },
  // ];
  // any型やobject[]を設定しているとエラーにならない
  console.log(data);
});

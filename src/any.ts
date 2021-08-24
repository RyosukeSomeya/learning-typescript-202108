import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then((response) => {
    // 新たなObjectの型を定義
    interface Article {
        id: number;
        title: string;
        description: string;
    };
    // let data: object[]; これだとからのObjectでもOKになる。
    // Objectの中身の型までは見ない。
    // ↓
    let data: Article[];
    data = response.data;
    console.log(data);
});

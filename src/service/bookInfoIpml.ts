interface BookInfoIpml{
    GetBookDetail(articleID:number):Object;
    // 分类、book开始，获取多少个
    GetBook(type:string,start:number,len:number):Array<any>;
    //hot 按热度或最新获取
    // GetBook(type:string,hot:boolean,start:number,len:number):Array<any>;
    SearchBook(searchWord:string):Array<object>;
}
export default BookInfoIpml;
class Book {
    get bookname(): string | undefined {
        return this._bookname;
    }

    set bookname(value: string | undefined) {
        this._bookname = value;
    }

    get auther(): string | undefined {
        return this._auther;
    }

    set auther(value: string | undefined) {
        this._auther = value;
    }

    get imgUrl(): string | undefined {
        return this._imgUrl;
    }

    set imgUrl(value: string | undefined) {
        this._imgUrl = value;
    }

    get price(): number | undefined {
        return this._price;
    }

    set price(value: number | undefined) {
        this._price = value;
    }

    get chassis(): string | undefined {
        return this._chassis;
    }

    set chassis(value: string | undefined) {
        this._chassis = value;
    }

    get Summary(): string | undefined {
        return this._Summary;
    }

    set Summary(value: string | undefined) {
        this._Summary = value;
    }

    get articleID(): number | undefined {
        return this._articleID;
    }

    set articleID(value: number | undefined) {
        this._articleID = value;
    }

    get readAmount(): number | undefined {
        return this._readAmount;
    }

    set readAmount(value: number | undefined) {
        this._readAmount = value;
    }
    private _bookname: string | undefined;
    private _auther: string | undefined;
    private _imgUrl: string | undefined;
    private _price: number | undefined;
    private _chassis: string | undefined;
    private _Summary: string | undefined;
    private _articleID: number | undefined;
    private _readAmount: number | undefined;

}
export default Book;
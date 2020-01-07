export class Frase{
    public fraseEng:string
    public  frasePtbr:string

    constructor (fraseEng:string, frasePtbr){
        this.fraseEng=fraseEng
        this.frasePtbr=frasePtbr
    }
}

/* OU SOMENTE ASSIM:

export class frase{
    constructor(public fraseEng:string,public frasePtbr:string){

    }

}*/
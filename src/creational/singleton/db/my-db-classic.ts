
export class MyDbClassic{
    private static instance:MyDbClassic | null = null

    private constructor(){}

    public static getInstance():MyDbClassic{
        if(MyDbClassic.instance === null) 
            MyDbClassic.instance = new MyDbClassic()
        return MyDbClassic.instance
    }
}

const db1 = MyDbClassic.getInstance()
const db2 = MyDbClassic.getInstance()

if( db1 === db2 ) console.log('success',db1,db2)
else console.log('error', db1, db2)

console.log(db1)
console.log(db2)

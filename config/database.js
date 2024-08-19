import mysql from 'mysql';

class Database{
    constructor(){
        this.connection=mysql.createConnection({
            host:'localhost',
            database:'PROJECT',
            user:'root',
            password:''
        })
        this.connect();
    }
    connect(){
        this.connection.connect((err)=>{
            if(err){
                console.log("Erreur",err);
                return;
            }
            console.log('Connexion réussi à la base de donnée')
        });
    }
    query(sql,val){
       return new Promise((res,rej)=>{
        this.connection.query(sql,val,(err,results)=>{
            if(err){
                return rej(err);
            }
            res(results);
        });
       });
    }
    close(){
        return new Promise((res,rej)=>{
            this.connection.end(err=>{
                if(err){
                    return rej(err);
                }
                res();
            });
        });
    }
}

export default new Database();
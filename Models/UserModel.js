import db from '../config/database.js';
import bcrypt from 'bcryptjs';

class User{
    constructor(pseudos,passe){
        this.pseudos=pseudos;
        this.passe=passe;
    }

    async save(){
        const hash=await bcrypt.hash(this.passe,2);
        const query='INSERT INTO USER(pseudos,passe) VALUES (?,?)';
        return db.query(query,[this.pseudos,hash]);
    }

    static async findByPseudos(id){
        const query='SELECT * FROM USER WHERE id=?';
        const results=await db.query(query,[id]);
        return results[0];
    }

    static findUser(){
        const query='SELECT * FROM USER';
        const results=db.query(query);
        return results;
    }
    
    static async Update(id,newPseudos,newPasse){
        const query='UPDATE USER SET pseudos=?,passe=? WHERE id=?';
        return db.query(query,[newPseudos,newPasse,id]);
    }
    static async delete(id){
        const query='DELETE FROM `USER` WHERE id=?';
        return db.query(query,[id]);
    }
}

export default User;
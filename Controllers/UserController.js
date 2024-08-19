import User from "../Models/UserModel.js";

class UserController{
    static async createUser(req,res){
        const {pseudos,passe}=req.body;
        const user=new User(pseudos,passe);
        await user.save();
        res.status(201).send("Utilisateur crée");
    }
    static async getUser(req,res){
        const {id}=req.params;
        const user= await User.findByPseudos(id);
        if(!user) return res.status(404).send("Utilisateur non trouvé");
        res.json(user);
    }
    static async Connect(req,res){
        const {pseudos,passe}=req.body;
        const user=new User(pseudos,passe)
        await user.Login(pseudos,passe);
        if(!user) return res.status(404).send("Mot de passe ou Email Incorrect");
        res.status(404).send("Mety eh");
    }
    static async getAll(req,res){
        const users=await User.findUser();
        res.status(200).send(JSON.stringify(users));
    }
    static async updateUser(req,res){
        const {id}=req.params;
        const {pseudos,passe}=req.body;
        await User.Update(id,pseudos,passe);
        res.send('Utilisateur Modifié');
    }
    static async deleteUser(req,res){
        const {id}=req.params;
        await User.delete(id);
        res.send('Utilisateur effacé');
    }}

export default UserController;
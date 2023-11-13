import mongoose from 'mongoose';


const DBConnection = async () => {
    const DB_URL = `mongodb://Arslaan:Filesharing@ac-zwhhf4i-shard-00-00.tkoew3s.mongodb.net:27017,ac-zwhhf4i-shard-00-01.tkoew3s.mongodb.net:27017,ac-zwhhf4i-shard-00-02.tkoew3s.mongodb.net:27017/?ssl=true&replicaSet=atlas-13phvy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(DB_URL, { useNewUrlParser: true});
        console.log('Databse ke saath jud chuke hain!!');
    } catch (error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;
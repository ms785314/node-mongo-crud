const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

// using middleware

//user: dbuser1
// pass: mgO0wZrJvSovmDs8


const uri = "mongodb+srv://dbuser1:mgO0wZrJvSovmDs8@cluster0.r5oyq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");
        const user = {name: 'mahiya mahi',email:'mahi@gmail.com'}
        const result = await userCollection.insertOne(user);
        console.log(`user inserted with id:${result.insertedId}`);
    }
    finally{
        await client.close();
    }
}
run().catch(console.dir)



app.use(cors())
app.get('/', (req, res) => {
    res.send('Running my node Crud served ok');   
})

app.listen(port, ()=>{
    console.log('Crud server is running');
})
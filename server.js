const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nicholasjames:WFhOVXxs63vR2liK@cluster0.yqrkicd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const app = express();
app.use(express.json());


app.get('/', (req,res) => {
    res.send("Welcome to the Home Page!")
});

app.get('/api/users', (req, res) => {
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        collection.find().toArray((error, documents) => {
            if(error){
                throw error;
            }
            res.send(documents)

        client.close();

        });

        
      });
   
    
});


app.post('/api/users', (req,res) => {
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        collection.insertOne(req.body, (error, result) => {

            if(error){
                throw error
            }
            res.send(result.insertedId);
        client.close();
        });
        

    });
    

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Hi");
});


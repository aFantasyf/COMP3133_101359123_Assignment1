const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const mongoose = require('mongoose')
const cors = require('cors')

//import apollo server 
const {ApolloServer, gql} = require("apollo-server-express") 

const schema = require('./schemas/userSchema')
const resolver = require('./resolvers/userResolver')

console.log("Starting MongoDB connection..."); // 👈 Add this
const connect = async () => {
    try {
      await mongoose.connect("mongodb+srv://aayanf3942:0WjMilgntC4hP6yy@cluster0.yl1rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("MongoDB connected");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  };
connect();
console.log("didntconnect")

const server = new ApolloServer({ 
    typeDefs: schema, 
    resolvers: resolver 
});


const app = express();
app.use(express.json())
app.use('*', cors())

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
  
    app.listen({ port: 4000 }, () => {
      console.log(`Server running on http://localhost:4000${server.graphqlPath}`);
    });
  }
  
startServer().catch(err => console.error(err));

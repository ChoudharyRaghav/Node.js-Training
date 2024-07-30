import graphql, { GraphQLSchema } from "graphql"
const {GraphQLObjectType, GraphQLString, GraphQLInt} = graphql
import _ from "lodash"
import axios from "axios"

const user = [
    {
        id: "1",
        firstName: "Anita",
        age: 22
    },
    {
        id: "2",
        firstName: "Raghav",
        age: 26
    },
    {
        id: "3",
        firstName: "Ankush",
        age: 25
    },
    {
        id: "4",
        firstName: "Dhanashree",
        age: 23
    }
]

//create user object
const userType = new GraphQLObjectType({
    name: "user",
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

//define root query
const rootQuery = new GraphQLObjectType({
    name: "rootQueryType",
    fields: {
        user :{
            type: userType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args){
                //return _.find(user, {id: args.id})
                return axios.get(`http://localhost:9088/user/${args.id}`)
                .then((response) => response.data)
            }

        }
    }
})

//addUser => insert and delete
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNewUser :{
            type: userType,
            args: {
                firstName : {type:GraphQLString},
                age : {type:GraphQLInt}
            },
            resolve(parentValue, args){
                const {firstName, age} = args
                return axios.post(`http://localhost:9088/user`, {firstName, age})
                .then(response => response.data)
                .catch(err => {throw new Error(err)})
            }

        }
    }
})

const schema =  new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
})

export {schema}
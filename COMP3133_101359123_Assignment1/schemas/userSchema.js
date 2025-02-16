const {gql} = require('apollo-server-express')

const userSchema = gql`
    type User {
    id: ID!
    userName: String!
    email: String!
    password: String!  
    }

    type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    designation: String!
    salary: Float!
    department: String!
    employee_photo: String
    }

    type Query {
        login(email: String!, password: String!): User
        getEmployee(id: ID!): Employee
        getEmployees: [Employee]
        getEmployeeByDep(department: String, designation: String): [Employee]
    }

    type Mutation{
        signup(userName: String!, email: String!, password: String!): User
        createEmployee(first_name: String!, last_name: String!, email: String!, gender: String, designation: String!, salary: Float!
                        department: String!, employee_photo: String): Employee

        updateEmployee(id: ID!, first_name: String!, last_name: String!, email: String!, gender: String, designation: String!, salary: Float!
                        department: String!): Employee
        
        deleteEmployee(id: ID!): Employee
        
        
        
    }
`

module.exports = userSchema;
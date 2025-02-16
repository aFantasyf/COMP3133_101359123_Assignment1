const userModel = require('../models/userMong')
const empModel = require('../models/empMong')

const resolver = {
    Query: {
        login: async (_, { email, password }) => {
            return await userModel.findOne({ email, password });
          },
        getEmployee: async (_, {id}) =>{
            const employee = await empModel.findById(id)
            return employee
        },
        getEmployees: async (_, args) =>{
            return await empModel.find({})
        }, 
        getEmployeeByDep: async(_, args) =>{ 
            let {designation, department} = args
            return await empModel.find({designation, department})
        }
    },
    Mutation:{
        signup: async (_, { userName, email, password }) => {
            const user = new userModel({ userName, email, password });
            return await user.save();
          },

        createEmployee: async(_, args) => {
            const emp = new empModel({
                first_name: args.first_name,
                last_name: args.last_name,
                email: args.email,
                gender: args.gender,
                designation: args.designation,
                salary: args.salary,
                department: args.department,
                employee_photo: args.employee_photo
            })
            const newEmp = await emp.save()
            return newEmp
        },

        updateEmployee: async(_, {id, first_name, last_name, email, gender, designation, salary, department, employee_photo}) =>{
            const newEmp = await empModel.findOne({_id : id})
            if(!newEmp) return null

            if(first_name) newEmp.first_name = first_name
            if(last_name) newEmp.last_name = last_name
            if(email) newEmp.email = email
            if(gender) newEmp.gender = gender
            if(designation) newEmp.designation = designation
            if(salary) newEmp.salary = salary
            if(department) newEmp.department = department
            if(employee_photo) newEmp.employee_photo = employee_photo

            const updatedEmp = await newEmp.save()
            return updatedEmp
        },
        deleteEmployee: async(_, {id}) =>{
            const emp = await empModel.findByIdAndDelete({_id: id})
            if (!emp) return null
            return emp
        }
    }
}

module.exports = resolver
import { Schema } from "mongoose";


const studentSchema = new Schema<Istudent, StudentModel>({

    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            },
        },
        required: true
    },
    guardian: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    }
})
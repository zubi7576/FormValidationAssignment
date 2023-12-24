import * as yup from "yup"

export const userSchema = yup.object
(

    {
        name:yup.string().min(3).max(50).required(),
        email:yup.string().email().required(),
        password:yup.string().min(5).max(20).required(),
        phone:yup.string().min(10).max(15).required(),
        address:yup.string().required(),
        comments:yup.string().nonNullable()
    }


).required()


export type UserSchemaType = yup.InferType<typeof userSchema>
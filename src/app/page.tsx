"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema, UserSchemaType } from "./validations/userSchema";
//import { userSchema, userSchemaType } from "./validations/userSchema";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (data: UserSchemaType) => console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="Fname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="name"
              //name="name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter First Name"
              {...register("name")}
              //required=""
            />
            <span className="text-red-400">{errors.name?.message}</span>
          </div>
         
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter Email"
              {...register("email")}
              ////required=""
            />
            <span className="text-red-400">{errors.email?.message}</span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              {...register("phone")}
              // //required=""
            />
            <span className="text-red-400">{errors.phone?.message}</span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="Address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              {...register("address")}
              // //required=""
            />
            <span className="text-red-400">{errors.address?.message}</span>
          </div>
          {/* Repeat the following block for additional fields */}
          {/* Example: Field 5 */}
          
          {/* End of additional field block */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

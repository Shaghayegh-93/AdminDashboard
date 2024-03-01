"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectTodb } from "./utils";
import { redirect } from "next/dist/server/api-utils";
import bcrypt from "bcrypt";


export const addUser = async (formData) => {
  console.log("formdata", formData);
  const data = Object.fromEntries(formData);
  try {
    connectTodb();
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);
    const newUser = new User({ ...data, password: hashPassword });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  console.log("formdata", formData);
  const { id } = Object.fromEntries(formData);
  try {
    connectTodb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
};

export const addProduct = async (formData) => {
  console.log("formdata", formData);
  const data = Object.fromEntries(formData);
  try {
    connectTodb();

    const newProduct = new Product(data);

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
  //   toast.success("successs");
};

export const deleteProduct = async (formData) => {
  console.log("formdata", formData);
  const { id } = Object.fromEntries(formData);
  try {
    connectTodb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/products");
};

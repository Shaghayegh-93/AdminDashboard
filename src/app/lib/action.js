"use server";
import { revalidatePath } from "next/cache";
import { User } from "./models";
import { connectTodb } from "./utils";
import { redirect } from "next/dist/server/api-utils";
// import { ToastContainer, toast } from "react-toastify";

export const addUser = async (formData) => {
  console.log("formdata", formData);
  const data = Object.fromEntries(formData);
  try {
    connectTodb();
    const newUser = new User(data);

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
  //   toast.success("successs");
};

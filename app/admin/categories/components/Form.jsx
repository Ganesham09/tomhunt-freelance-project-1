"use client";
import createNewCategory from "@/lib/firestore/categories/write";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Form() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const handleData = (key, value) => {
    setData((preData) => {
      return {
        ...(preData ?? {}),
        [key]: value,
      };
    });
  };

  const handleCreate = async () => {
    try {
      await createNewCategory({ data: data, image: image });
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-6 shadow-md w-full md:w-[400px]">
      <h1 className="font-semibold">Create Category</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
        className="flex flex-col gap-3"
      >
        <div className=" flex flex-col gap-2">
          <label htmlFor="category-name" className="text-gray-600 text-sm">
            Image
            <span className="text-red-600">*</span>
          </label>
          <div className="flex justify-center items-center  ">
            {image && (
              <img
                className="h-20"
                src={URL.createObjectURL(image)}
                alt="category"
              />
            )}
          </div>
          <input
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            id="category-image"
            name="category-image"
            type="file"
            className="border px-4 py-2 rounded-lg w-full focus:outline-none "
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="category-name" className="text-gray-600 text-sm">
            Name
            <span className="text-red-600">*</span>
          </label>
          <input
            id="category-name"
            name="category-name"
            type="text"
            placeholder="Enter Name"
            value={data?.name ?? ""}
            onChange={(e) => handleData("name", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none "
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="category-slug" className="text-gray-600 text-sm">
            Slug
            <span className="text-red-600">*</span>
          </label>
          <input
            id="category-slug"
            name="category-slug"
            type="text"
            placeholder="Enter Slug"
            value={data?.slug ?? ""}
            onChange={(e) => handleData("slug", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus:outline-none "
          />
        </div>
        <Button color="primary" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

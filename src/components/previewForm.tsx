import React, {useState, useRef, useEffect} from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Picture.module.css";
import background from "../../public/background.png";
import Image from 'next/image'
import ImagePreview from "./ImagePreview";

function PreviewForm() {
  const [renderImg, setRenderImg] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      id: "",
      slug: "",
      categories: "",
      createdAt: "",
      cover_img_url: ""
    }
  });
  
  return (
    <div className="grid place-items-center h-screen">
      {renderImg && 
       <ImagePreview createdAt={getValues('createdAt')} id={getValues('id')}  slug={getValues('slug')} categories={getValues('categories')} cover_img_url={getValues('cover_img_url')}></ImagePreview>}
      <form className="w-full max-w-sm" onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
        setRenderImg(true)
      })}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Author
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Dwight Schrute" {...register("id",{ required: true })}/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-slug">
              Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-categories" type="text" placeholder="What kind of bear is best?" {...register("slug",{ required: true })}/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-article-categories">
              Categories
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-categories" type="text" placeholder="bears,beets,battlestar-galactica" {...register("categories",{ required: true })} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-createdAt">
              Created At
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-createdAt" type="text" placeholder="26 April 2007" {...register("createdAt",{ required: true })} />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="cover-img-url">
              Cover Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-coverImgUrl" type="text" placeholder="https://en.wikipedia.org/wiki/Dwight_Schrute#/media/File:Dwight_Schrute.jpg" {...register("cover_img_url",{ required: true })} />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Create Image
            </button>
          </div>
        </div>
        {(errors.id && errors.slug && errors.categories && errors.createdAt && errors.cover_img_url) && <p>All fields are required</p>}
      </form >
    </div>
  );
}

export default PreviewForm;
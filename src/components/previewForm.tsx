import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Picture.module.css";
import background from "../../public/background.png";
import Image from 'next/image'

// const PreviewForm = () => {
//   return (
    // <article className={styles.article}>
    //   <picture className={styles.picture}>
    //     <source media="(min-width: 0px)" srcSet={background} />
    //     <Image src={background} alt="background" />
    //   </picture>
    //   <h1 className={styles.header}>React Is Awesome</h1>
    // </article>
//   );
// };

// export default PreviewForm;

function PreviewForm() {
  // type NewsletterPost = {
  //   id: string,
  //   slug: string,
  //   categories: string[],
  //   createdAt: string,
  //   cover_img_url: string,
  // }
  // const initialPost: NewsletterPost = {
  //   id: "",
  //   slug: "",
  //   categories: [],
  //   createdAt: "",
  //   cover_img_url: '',
  // }
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors }
  // } = useForm<NewsletterPost>();

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

  console.log(watch("id")); // you can watch individual input by pass the name of the input
  return (
    
    <div className="grid place-items-center h-screen">


      
        <article className={styles.article}>
          <picture className={styles.picture}>
            <source media="(min-width: 0px)" srcSet={background} />
            <Image src={background} alt="background" />
          </picture>
          {/* <h1 className={styles.header}>{getValues('id')}</h1> */}
          {/* <h2>{getValues('createdAt')}</h2> */}
          {/* <Image src={getValues('cover_img_url')}  width="50px" height = "50px" alt="background" /> */}
          {/* <Image src={'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg'}  width="50px" height = "50px" alt="background" /> */}


          <h1 className={styles.cover_img_url}>
          <Image src={'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg'}  width="50px" height = "50px" alt="background" />
          </h1>

          {/* <h1 className={styles.header}>
          <Image src='https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg'  width="50px" height = "50px" alt="background" />
          </h1> */}
          <h1 className={styles.createdAt}>31 Oct 2021</h1>
          <h1 className={styles.id}>Vitalik Posted</h1>

          <h1 className={styles.slug}>Crypto Cities</h1>
          <h1 className={styles.categories}>#futurism, #governance, #crypto</h1>


          {/* {(getValues('cover_img_url').includes('wikimedia.org')) &&    <h1 className={styles.header}>
          <Image src={getValues('cover_img_url')}  width="50px" height = "50px" alt="background" />
          </h1>} */}

        </article>
      <form className="w-full max-w-sm" onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
        console.log(getValues("slug"))
        console.log('cover img url', errors.cover_img_url)
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
            {errors.slug && <p>This field is required</p>}

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
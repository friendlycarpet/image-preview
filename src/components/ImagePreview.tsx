import React, {useState, useRef, useEffect} from "react";
import styles from "../styles/Picture.module.css";
import background from "../../public/background.png";
import Image from 'next/image'
import domtoimage from 'dom-to-image';

const ImagePreview = (props) => {
    let [previewPic, setPreviewPic] = useState(null);

    const container = useRef(null);
    // function exportToPng(dom) {
    //     domtoimage
    //       .toPng(dom)
    //       .then(function (dataUrl) {
    //         image.onload = function () {
    //           resolve(image);
    //       };
    //       image.onerror = reject;
    //       image.src = encodeURI(uri);
    //         document.body.appendChild(img);
    //       })
    //       .catch(function (error) {
    //         console.error("oops, something went wrong!", error);
    //       });
    //   }

      function exportToPng(dom) {
        previewPic = React.cloneElement(dom)
        // domtoimage
        //   .toPng(dom)
        //   .then(function (dataUrl) {
        //     image.onload = function () {
        //       resolve(image);
        //   };
        //   image.onerror = reject;
        //   image.src = encodeURI(uri);
        //     document.body.appendChild(img);
        //   })
        //   .catch(function (error) {
        //     console.error("oops, something went wrong!", error);
        //   });
      }
      function exportToBlob(dom) {
        previewPic = React.cloneElement(dom)

        // domtoimage
        //   .toPng(dom)
        //   .then(function (dataUrl) {
        //     image.onload = function () {
        //       resolve(image);
        //   };
        //   image.onerror = reject;
        //   image.src = encodeURI(uri);
        //     document.body.appendChild(img);
        //   })
        //   .catch(function (error) {
        //     console.error("oops, something went wrong!", error);
        //   });
      }
        // useEffect(function mount() {
        //   function onScroll() {
        //     console.log("scroll!");
        //   }
      
        //   window.addEventListener("scroll", onScroll);
      
        //   return function unMount() {
        //     window.removeEventListener("scroll", onScroll);
        //   };
        // });      

        useEffect(() => {
            // domtoimage
            //     .toJpeg(previewPic, { quality: 0.95 })
            //     .then(function (dataUrl) {
            //     link = document.createElement("a");
            //     link.download = "my-image-name.jpeg";
            //     link.href = dataUrl;
            //     link.click();
            //     });
            domtoimage
            .toPng(previewPic)
            .then(function (dataUrl) {
              image.onload = function () {
                resolve(image);
            };
            image.onerror = reject;
            image.src = encodeURI(uri);
              document.body.appendChild(img);
            })
            .catch(function (error) {
              console.error("oops, something went wrong!", error);
            });
        }, [previewPic])

    return (
        <div>
        <article className={styles.article} ref={container}>
          {/* {console.log('container current', container.current)}
          {console.log('article', document.getElementById('Picture_article__737IL'))}
          {console.log('articles', Array.from(document.querySelectorAll("article")))} */}
           <button onClick={() => exportToBlob(container.current)}>export</button>

          <picture className={styles.picture}>
            <source media="(min-width: 0px)" srcSet={background} />
            <Image src={background} alt="background" />
          </picture>
          
          {(props.cover_img_url.includes('wikimedia.org') || props.cover_img_url.includes('as1.ftcdn.net')) &&    <h1 className={styles.cover_img_url}>
          <Image src={props.cover_img_url}  width="300px" height = "300px" alt="background" />
          </h1>}
          <h1 className={styles.createdAt}>{props.createdAt}</h1>
          <h1 className={styles.id}>{props.id}</h1>
          <h1 className={styles.slug}><i>{props.slug}</i></h1>
          <h1 className={styles.categories}>{props.categories}</h1>
        </article>
        </div>
    );
}

export default ImagePreview;
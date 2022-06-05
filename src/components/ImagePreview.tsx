import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Picture.module.css';
import background from '../../public/background.png';

function ImagePreview(props) {
  return (
    <div>
      <article className={styles.article}>
        <picture className={styles.picture}>
          <source media="(min-width: 0px)" srcSet={background} />
          <Image src={background} alt="background" />
        </picture>
        {props.cover_img_url.includes('.') && (
        <h1 className={styles.cover_img_url}>
          <Image src={props.cover_img_url} width="300px" height="300px" alt="background" />
        </h1>
        )}
        <h1 className={styles.createdAt}>{props.createdAt}</h1>
        <h1 className={styles.id}>{props.id}</h1>
        <h1 className={styles.slug}><i>{props.slug}</i></h1>
        <h1 className={styles.categories}>{props.categories}</h1>
      </article>
    </div>
  );
}

export default ImagePreview;

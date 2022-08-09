import React from 'react';
import styles from './post.module.css';
import Image from 'next/image';


const PostComponent = (porps) =>{
    return (
        <div className={styles.postGeneral}>
        <Image className={styles.postImage}
        ></Image>
        <h3 className={styles.postTitle}>title</h3>
        <span className={styles.postDate}>dd/mm/yy hh:mm</span>
        <p>description</p>
        <Image className={styles.UserImg}></Image>
        </div>
    )
}

export default PostComponent;
import Link from "next/link";
import styles from "../styles/BlogPage.module.css";
function BlogPage(props) {
  return (
    <div className={styles["main__div"]}>
      <img
        className={styles["blog__img"]}
        src={props.blog_image.url}
        alt={props.blog_image.title}
      />
      <Link href={`/blogs/${props.uid}`}>
        <h2 className={styles["blog__title"]}>{props.blog_heading}</h2>
      </Link>
    </div>
  );
}

export default BlogPage;

import Link from "next/link";
import styles from "../styles/SingleBlog.module.css";
function SingleBlog({
  blog_image: { url, title },
  blog_heading,
  blog_content_description,
  links,
}) {
  let id;
  return (
    <div className={styles["Blog_main_content"]}>
      <div className={styles["Blog_content_section"]}>
        <img className={styles["Blog_img"]} src={url} alt={title} />
        <h1 className={styles["Blog_title"]}>{blog_heading}</h1>
        <p className={styles["Blog_description"]}>{blog_content_description}</p>
      </div>
      <div className={styles["Blog_related_links"]}>
        <h1 className={styles["Blog_related_links_title"]}>Related Blogs</h1>
        {links.map(
          (link, index) => (
            (id = link.related_links[0].uid),
            (
              <Link key={index} href={`/blogs/${id}`}>
                <p className={styles["Blog_related_links_content"]}>
                  {link.link_title}
                </p>
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
}

export default SingleBlog;

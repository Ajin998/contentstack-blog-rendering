import React from "react";
import fetchData from "../services/fetchData";
import BlogPage from "../components/BlogPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.css";
function index(props) {
  return (
    <div className={styles["main__div"]}>
      <Header />
      {props.blogs.map((blog) => (
        <BlogPage key={blog.uid} {...blog} />
      ))}
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    let blogs = await fetchData("contentstack_blog_rendering");
    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (err) {
    console.log("Error in data fetching", err);
    return err;
  }
};
export default index;

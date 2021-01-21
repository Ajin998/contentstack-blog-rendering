import SingleBlog from "../../components/SingleBlog";
import fetchData from "../../services/fetchData";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/blog.module.css";

function Blog(props) {
  return (
    <div className={styles["blog__section__main__div"]}>
      <Header />
      <SingleBlog {...props.blog} />
      <Footer />
    </div>
  );
}
//For dynamic routing context is used for retreiving params.id
export const getStaticProps = async (context) => {
  let result = await fetchData(
    "contentstack_blog_rendering",
    context.params.id
  );
  return {
    props: {
      blog: result,
    },
  };
};

export const getStaticPaths = async () => {
  let blogs = await fetchData("contentstack_blog_rendering");
  let paths = blogs.map((blog) => {
    return {
      params: {
        id: `${blog.uid}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Blog;

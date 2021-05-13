import "./Blog.styles.css";

const Blog = ({ author, title }) =>(
  <div className="blog-card">
    <h2> {title} </h2>
    <hr/>
    <h3> {author} </h3>
  </div>
);

export default Blog;

import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8000/api/posts");
    setPosts(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8000/api/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  // Detect when the posts section is in the viewport
  const handleScroll = () => {
    const postsSection = document.getElementById("posts");
    const rect = postsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
    
      {/* Hero Section */}
      <section className="hero text-white text-center py-5" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "auto", backgroundColor: "#1c3d60" }}>
        <div className="container">
          <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn" style={{ color: "#f0f8ff" }}>Welcome to TechTales</h1>
          <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s" style={{ color: "#d0e7f0" }}>Explore the latest posts, get insights on various topics, and stay updated!</p>
          <Link to="/#posts" className="btn btn-light btn-lg animate__animated animate__fadeIn animate__delay-2s">
            Explore Posts
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container text-center">
          <h2 className="display-4 mb-4" style={{ color: "#1c3d60" }}>About TechTales</h2>
          <p className="lead mb-5" style={{ color: "#555" }}>
            TechTales is a platform where technology and stories meet. Explore informative and engaging articles about the latest trends, tech innovations, and more!
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="posts" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <h2 className="display-4 mb-4 text-center" style={{ color: "#1c3d60" }}>Latest Posts</h2>
          <div className="row">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div className={`col-md-4 mb-4 ${isVisible ? 'slide-in' : ''}`} key={post._id}>
                  <Post post={post} />
                </div>
              ))
            ) : (
              <h4>No posts available</h4>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-5" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="container">
          <h2 className="display-4 mb-4 text-center" style={{ color: "#1c3d60" }}>Categories</h2>
          <div className="row">
            {categories.length > 0 ? (
              categories.map((category) => (
                <div className="col-md-4 mb-4" key={category._id}>
                  <div className="card shadow-sm border-light" style={{ borderColor: "#d0e7f0" }}>
                    <div className="card-body text-center" style={{ backgroundColor: "#f9f9f9" }}>
                      <h5 className="card-title" style={{ color: "#1c3d60" }}>{category.name}</h5>
                      <Link to={`/posts/category/${category._id}`} className="btn btn-outline-primary" style={{ color: "#1c3d60", borderColor: "#1c3d60" }}>
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>No categories available</h4>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

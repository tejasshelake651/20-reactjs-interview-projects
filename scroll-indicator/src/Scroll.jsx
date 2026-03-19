import { useEffect, useState } from "react";
import "./Scroll.css";

function Scroll({ url = "https://jsonplaceholder.typicode.com/posts?_limit=20" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(getUrl);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Scroll progress indicator
  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="scroll-container">
      <h1>Custom Scroll Indicator</h1>
      
      {/* Top Progress Bar */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="data-container">
        {loading && <div className="loading">Loading...</div>}
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="post">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          !loading && <div>No data</div>
        )}
        {/* Spacer for scrolling */}
        <div style={{ height: "200vh", background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)" }}>
          <p>Scroll to see progress bar in action!</p>
        </div>
      </div>
    </div>
  );
}

export default Scroll;


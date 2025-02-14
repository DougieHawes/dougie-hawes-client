import axios from "axios";

import { useState, useEffect } from "react";

import { Card1 } from "../../utils/cards";
import { Route1 } from "../../utils/routes";

const Work = () => {
  const [workItems, setWorkItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWork = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/work`
        );

        setWorkItems(response.data);
      } catch (err) {
        console.error("Error fetching work items:", err);
        setError("Failed to load work items.");
      } finally {
        setLoading(false);
      }
    };

    getWork();
  }, []);

  return (
    <Route1
      content={
        <div>
          {loading && <p>Loading work items...</p>}
          {error && <p className="error">{error}</p>}
          <div className="work-grid">
            {workItems.map((item) => (
              <Card1
                key={item._id}
                description={item.description}
                githubLink={item.codeLink}
                id={item._id}
                image={`${process.env.REACT_APP_SERVER_URL}${item.image1}`}
                siteLink={item.siteLink}
                title={item.title}
              />
            ))}
          </div>
        </div>
      }
      title="work"
    />
  );
};

export default Work;

import axios from "axios";

import { useState, useEffect } from "react";

import { Card1 } from "../../utils/cards";

const Work = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    const getWork = async () => {
      try {
        const response = await axios.get("http://localhost:5000/work");

        setWorkItems(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getWork();
  }, []);

  return (
    <div>
      {workItems.map((w) => (
        <Card1
          key={w._id}
          codeLink={w.codeLink}
          description={w.description}
          siteLink={w.siteLink}
          title={w.title}
        />
      ))}
    </div>
  );
};

export default Work;

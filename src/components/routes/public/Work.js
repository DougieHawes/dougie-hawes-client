import axios from "axios";

import { useState, useEffect } from "react";

import { Card1 } from "../../utils/cards";

const Work = () => {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    const getWork = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/work`
        );

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
          id={w._id}
          // image={`${process.env.REACT_APP_SERVER_URL}/${w.images[0]}`}
          siteLink={w.siteLink}
          title={w.title}
        />
      ))}
    </div>
  );
};

export default Work;

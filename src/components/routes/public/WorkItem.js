import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Route1 } from "../../utils/routes";

import "./style.scss";

const WorkItem = ({ darkmode }) => {
  const [workItem, setWorkItem] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    const getWorkItem = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/work/${params.workid}`
        );
        setWorkItem(response.data);
      } catch (error) {
        console.error("Error fetching work item:", error);
      }
    };

    getWorkItem();
  }, [params.workid]);

  if (!workItem) {
    return <div>Loading...</div>;
  }

  // Store images in an array
  const images = [workItem.image1, workItem.image2, workItem.image3].filter(
    Boolean
  );

  return (
    <Route1
      content={
        <div className="work-item">
          <div className="work-item-column">
            {images.length > 0 && (
              <div className="work-item-image">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}${images[mainImageIndex]}`}
                  alt={`Main Image ${mainImageIndex + 1}`}
                  className="work-item-main-image"
                />
              </div>
            )}
            <div className="work-item-thumbnails">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={`${process.env.REACT_APP_SERVER_URL}${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="work-item-thumbnail"
                  onClick={() => setMainImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="work-item-column">
            <h3 className="work-item-title">{workItem.title}</h3>
            <div className="work-item-links">
              <a
                className="work-item-link work-item-link-site"
                href={workItem.siteLink}
                target="_blank"
              >
                site
              </a>
              <a
                className="work-item-link work-item-link-code"
                href={workItem.codeLink}
                target="_blank"
              >
                code{workItem.codeLinkAux && "-client"}
              </a>
              {workItem.codeLinkAux && (
                <a
                  className="work-item-link work-item-link-code"
                  href={workItem.codeLinkAux}
                  target="_blank"
                >
                  code-server
                </a>
              )}
            </div>
            <p
              className="work-item-description"
              dangerouslySetInnerHTML={{ __html: workItem.description }}
            ></p>
          </div>
        </div>
      }
    />
  );
};

export default WorkItem;

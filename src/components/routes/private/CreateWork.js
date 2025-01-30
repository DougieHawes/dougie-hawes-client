import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Route2 } from "../../utils/routes";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.scss";

const CreateWork = () => {
  const [title, setTitle] = useState("LaaDeeDaa");
  const [itemImage, setItemImage] = useState(null);
  const [siteLink, setSiteLink] = useState("http://laadeedaa.uk");
  const [codeLink, setCodeLink] = useState("http://github.com");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec magna nec velit tristique ultrices. Sed vitae orci non metus viverra convallis. Fusce convallis magna in felis volutpat, id bibendum justo vulputate. Pellentesque dictum, sapien non pharetra auctor, mauris felis laoreet erat, vel tristique elit lorem ac purus. Cras non massa eget arcu aliquet lacinia. Etiam suscipit nisi in odio feugiat, nec malesuada erat tincidunt. Suspendisse vehicula tincidunt libero, sit amet cursus elit posuere ut. Integer vehicula arcu non ex scelerisque, sed facilisis augue dapibus. Proin rhoncus lacus a erat tincidunt tincidunt. Quisque scelerisque, magna nec bibendum hendrerit, enim ligula faucibus arcu, ut tincidunt mi purus ac augue. Fusce malesuada libero sit amet sapien malesuada, nec congue nunc facilisis."
  );

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", itemImage);
    formData.append("siteLink", siteLink);
    formData.append("codeLink", codeLink);
    formData.append("description", description);

    try {
      const response = await axios.post(
        "http://localhost:5000/work/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(response.data.message);
      setTitle("");
      // setImage(null);
      setSiteLink("");
      setCodeLink("");
      setDescription("");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <Route2
      content={
        <>
          {loading ? (
            <div>loading...</div>
          ) : (
            <>
              <p className="sign-out" onClick={handleSignOut}>
                SIGN-OUT
              </p>
              <form className="form">
                <Input1
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="enter title..."
                />
                {/* <input
                  type="file"
                  value={itemImage}
                  accept="image/*"
                  onChange={(e) => setItemImage(e.target.files[0])}
                  required
                /> */}
                <Input1
                  value={siteLink}
                  onChange={(e) => setSiteLink(e.target.value)}
                  placeholder="enter siteLink..."
                />
                <Input1
                  value={codeLink}
                  onChange={(e) => setCodeLink(e.target.value)}
                  placeholder="enter codeLink..."
                />
                <Input2
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="enter description..."
                />
                <Button1 onClick={handleSubmit} text="submit" />
              </form>
            </>
          )}
        </>
      }
    />
  );
};

export default CreateWork;

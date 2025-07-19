import { useState } from "react";
import axios from "axios";
export const QueryForm = () => {
  const [url, setUrl] = useState(
    "https://my.alfred.edu/zoom/_images/foster-lake.jpg"
  );
  const [prompt, setPrompt] = useState("");
  const [author, setAuthor] = useState("");
  const [loader, setLoader] = useState(false);

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImage = async (e) => {
    setLoader(true);
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/image/generate-image",
        {
          author,
          prompt,
        }
      );
      console.log(res);
      setUrl(res?.data?.image?.url);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }

    setAuthor("");
    setPrompt("");
    // setUrl("");
    setLoader(false);
  };

  return (
    <>
      <div className="query-form">
        <form className="form" onSubmit={generateImage}>
          <input
            type="text"
            id="name"
            name="author"
            placeholder="Author name..."
            onChange={handleAuthorChange}
            value={author}
            required
            className="capitalize"
          />

          <textarea
            type="text"
            id="prompt"
            name="prompt"
            placeholder="Prompt..."
            onChange={handlePromptChange}
            value={prompt}
            required
          />

          <div>
            {loader ? (
              <button className="capitalize">submitting...</button>
            ) : (
              <button className="capitalize">submit</button>
            )}
          </div>
        </form>

        <div className="image-container">
          <img src={url} alt="generated here" className="w-full h-full object-cover"/>
        </div>
      </div>
    </>
  );
};

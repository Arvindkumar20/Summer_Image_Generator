import { useState } from "react";

export const QueryForm = () => {
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [author, setAuthor] = useState("");
  const [loader, setLoader] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImage = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(url);
    console.log(author);
    console.log(prompt);

    setAuthor("");
    setPrompt("");
    setUrl("");
    // setLoader(false);
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
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            required
            placeholder="Enter your url..."
            onChange={handleUrlChange}
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
          <img
            src={url||"https://my.alfred.edu/zoom/_images/foster-lake.jpg"}
            alt="generated here"
          />
        </div>
      </div>
    </>
  );
};

export const QueryForm = () => {

  
  return (
    <>
      <div className="query-form">
        <form className="form">
          <input type="text" id="name" name="name" placeholder="Author name..." />

          <textarea
            type="text"
            id="prompt"
            name="prompt"
            placeholder="Prompt..."
          />

          <div>
            <button className="capitalize">submit</button>
          </div>
        </form>


        <div className="image-container">
          <img src="https://my.alfred.edu/zoom/_images/foster-lake.jpg" alt="generated here" />
        </div>
      </div>
    </>
  );
};

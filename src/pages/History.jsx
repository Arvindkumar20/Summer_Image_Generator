import React from "react";
import { IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export default function History() {
  return (
    <div>
      <section className="history">
        <h1>Generated images</h1>
        <div className="search-form">
          <button>
         <CiSearch size={23}/>

          </button>
          <input type="text" placeholder="Search" />
        </div>
      </section>

      <section className="image-container-prt">
        <div className="image-container">
          <img
            src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
            alt="generated here"
          />
        </div>
        <div className="image-container">
          <img
            src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
            alt="generated here"
          />
        </div>
        <div className="image-container">
          <img
            src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
            alt="generated here"
          />
        </div>
        <div className="image-container">
          <img
            src="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
            alt="generated here"
          />
        </div>
      </section>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { IoPlayForward, IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import { MdDownloadForOffline } from "react-icons/md";
import { history } from "../data/data";
export default function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const [FiltredHistory, setFilteredHistory] = useState(history);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm !== "" && searchTerm !== null) {
      const applyFilter =
        history.length > 0
          ? history.filter(
              (img) =>
                img.prompt
                  .toLowerCase()
                  .includes(searchTerm.trim().toLowerCase()) ||
                img.author
                  .toLowerCase()
                  .includes(searchTerm.trim().toLowerCase()) ||
                img.date.toLowerCase().includes(searchTerm.trim().toLowerCase())
            )
          : history;
      setFilteredHistory(applyFilter);
    }
  }, [searchTerm]);

  return (
    <div>
      <section className="history">
        <h1>Generated images</h1>
        <div className="search-form">
          <button>
            <CiSearch size={23} />
          </button>
          <input type="text" placeholder="Search" onChange={handleChange} />
        </div>
      </section>

      <section className="image-container-prt">
        {FiltredHistory.map((image) => {
          return (
            <section className="image-container card">
              <img src={image.url} alt="" />
              <span className="image-details">
                <h3 className="author">{image.author}</h3>
                <h3 className="date">{image.date}</h3>
              </span>
              <span className="image-details">
                <h3 className="prompt">{image.prompt}</h3>
                <h3 className="download">
                  {<MdDownloadForOffline size={20} />}
                </h3>
              </span>
            </section>
          );
        })}
      </section>
    </div>
  );
}

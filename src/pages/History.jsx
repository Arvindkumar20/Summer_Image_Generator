import React, { useEffect, useState } from "react";
import { IoPlayForward, IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { MdDownloadForOffline } from "react-icons/md";
import { history } from "../data/data";
export default function History() {
  const [searchTerm, setSearchTerm] = useState("");

  const [FiltredHistory, setFilteredHistory] = useState(history);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // utils/download.js

  const downloadImage = (url, filename = "image.jpg") => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const handleDownload = (url) => {
    downloadImage(url, "image.jpg");
  };

  const loadImages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/image/get-history"
      );
      console.log(res.data);
      setFilteredHistory(res.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className="mx-2">
      <section className="history">
        <h1>Generated images</h1>

        <div className="flex items-center justify-start gap-2 bg-white p-2 rounded-xl border-2 border-gray-300 text-black sm:w-1/2 w-full">
          <button>
            <CiSearch size={23} />
          </button>
          <div className="outline-none border-none w-full  items-start">
            <input
              type="text"
              className="outline-none border-none w-full p-2 text-black"
              placeholder="Search"
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      <section className="image-container-prt">
        {FiltredHistory.map((image) => {
          return (
            <section className="image-container card">
              <img src={image.url} alt={image.prompt} />
              <span className="image-details">
                <h3 className="author">{image.author}</h3>
                <h3 className="date">
                  {image?.createdAt?.split("T")[0]?.split("-")?.reverse()?.join("-")}
                </h3>
              </span>
              <span className="image-details">
                <h3 className="prompt">{image.prompt}</h3>
                <h3 className="download">
                  {
                    <MdDownloadForOffline
                      size={20}
                      onClick={() => handleDownload(image.url)}
                    />
                  }
                </h3>
              </span>
            </section>
          );
        })}
      </section>
    </div>
  );
}

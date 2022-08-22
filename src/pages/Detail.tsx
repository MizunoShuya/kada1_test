import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
// @ts-ignore
import noImage from "../utils/c_1576280077848.png";
import "../styles/Detail.css";

const Detail = () => {
// @ts-ignore
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail("");
  }, []);

  return (
    <div className="detail-container">
      <div className="poster">
        {selectedMovie.Poster === "N/A" ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className="info">
        <div className="field">
          <div className="label">タイトル</div>
          <div>{selectedMovie.Title}</div>
        </div>
        <div className="field">
          <div className="label">公開日</div>
          <div>{selectedMovie.Released}</div>
        </div>
        <div className="field">
          <div className="label">視聴時間</div>
          <div>{selectedMovie.Runtime}</div>
        </div>
        <div className="field">
          <div className="label">ジャンル</div>
          <div>{selectedMovie.Genre}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
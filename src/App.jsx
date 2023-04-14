import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [topAnime, setTopAnime] = useState([]);
  const fetchTopAnime = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime");
    const { data } = await response.json();
    setTopAnime(data);
  };
  useEffect(() => {
    fetchTopAnime();
  }, []);
  return (
    <>
      <h1>Top 100 Anime</h1>
      {topAnime.map((anime) => {
        console.log(anime);
        return (
          <div>
            <h2 key={anime.mal_id}>Title: {anime.title}</h2>
            <h4>Rank: {anime.rank}</h4>
            <h4>Rating: {anime.score}</h4>
            <h6>
              <a href={anime.url}>
                <strong>Source</strong>
              </a>
            </h6>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>
            <img src={anime.images.jpg.image_url} alt="" />
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default App;

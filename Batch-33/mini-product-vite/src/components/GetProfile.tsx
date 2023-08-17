import React, { useEffect, useState } from "react";
import axios from "axios";

interface dataType {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
}

const GetProfile = () => {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8",
        },
      })
      .then((response) => {
        console.log("GetProfile", response.data.results);
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>GetProfile</h2>
      {data.length > 0 ? (
        <div>
          <img src={data[0].poster_path} alt="" />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GetProfile;

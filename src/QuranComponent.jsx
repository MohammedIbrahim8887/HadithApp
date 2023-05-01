import React, { useState, useEffect } from "react";
import { QuranService } from "m3o/quran";

const QuranComponent = () => {
  const [chapterSummary, setChapterSummary] = useState();
  const [currentHadithIndex, setCurrentHadithIndex] = useState(0);

  useEffect(() => {
    async function fetchChapterSummary() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-bukhari.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.hadiths);
          setChapterSummary(result.hadiths);
        })
        .catch((error) => console.log("error", error));
    }
    fetchChapterSummary();
  }, []);

  const handleNextHadith = () => {
    const randomHadith = Math.floor(Math.random() * chapterSummary.length);
    console.log(randomHadith);
    setCurrentHadithIndex(randomHadith);
  };

  return (
    <div>
      {chapterSummary ? (
        <div className="flex flex-col gap-6">
          <p className="text-3xl">Hadith:</p>
          <p>{chapterSummary[currentHadithIndex].text}</p>
          <button onClick={handleNextHadith} className="flex w-fit m-auto">
            Next Hadith
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuranComponent;

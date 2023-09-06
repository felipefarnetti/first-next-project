import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Mot(props) {
  // console.log(props);

  useEffect(() => {
    newWord;
  }, []);

  const [state, setState] = useState(false);

  const newWord = () => {
    fetch("/api/vocapi")
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }
  const capitalizedRandomWord = randomWord
    ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1)
    : "";
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mot au Hasard</title>
      </Head>
      <div>
        <h1 className={styles.titre}>Mot au Hasard</h1>
        {/* <table className={styles.tableau}>
          <tbody>
            {props.array.map((el) => (
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <button onClick={newWord} className="btn btn-primary d-block m-auto">
          Get Random Words
        </button>
        <h2 className="text-center m-3">{capitalizedRandomWord}</h2>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;
  return {
    props: { array },
  };
}

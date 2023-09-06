import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";

export default function Index(props) {
  const router = useRouter();

  const handleButtonClick = (itemName) => {
    router.push(`/listes/${itemName}`);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Les listes de vocabulaire</title>
      </Head>
      <div className="container">
        <h1 className="my-4 text-center">Les listes de vocabulaire</h1>
        <ul className="my-4 ">
          {props.array.map((item) => (
            <li key={uuidv4()} className="list-group-item text-center h5">
              <button
                className="btn btn-primary"
                onClick={() => handleButtonClick(item.name)}
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`/data/listes.json`);
  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}

import React from "react";
import Head from "next/head";

export default function Contact(props) {
  // console.log(props);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reflexions</title>
      </Head>
      <h1 className="text-center m-4">{props.data.content}</h1>
      <h3 className="text-center">{props.data.author}</h3>
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch("https://api.quotable.io/random");
  const data = await quote.json();
  return {
    props: { data },
    revalidate: 20,
  };
}

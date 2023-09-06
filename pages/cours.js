import React from "react";
import Head from "next/head";

export default function Cours(props) {
  //   console.log(props);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cours du Bitcoin</title>
      </Head>
      <h1 className="text-center my-4">
        Le Bitcoin est à : {props.results.bpi.EUR.rate} €
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const results = await data.json();

  return {
    props: {
      results,
    },
  };
}

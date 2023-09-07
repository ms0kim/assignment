import Head from 'next/head'
import Card from './component/Card'
import Subscribe from './component/Subscribe'
import axios from 'axios'
import { useEffect, useState } from 'react'

let cachedImageUrl = '';

export async function getServerSideProps() {
  try {
    if (!cachedImageUrl) {
      const res = await axios.get('https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM');
      cachedImageUrl = res.data.urls.full;
    }

    return{
      props: {
        imageUrl: cachedImageUrl,
      },
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    return {
      props: {imageUrl: []}
    };
  }
}
export default function Home({imageUrl}: {imageUrl: any}) {
  return (
    <>
      <Head>
        <title>kimminsong</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card />
      <Subscribe imageUrl={imageUrl}
      />
    </>
  )
}
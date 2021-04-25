import Head from 'next/head';
import styled from 'styled-components';
import {Campaign} from '../components/campaign'
import {Contact} from '../components/Contact'
// import {Sample} from '../components/Sample'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Campaign/>
      {/* <Sample /> */}
      <Contact />
    </div>
  );
}

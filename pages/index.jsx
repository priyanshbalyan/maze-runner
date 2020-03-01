/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import Head from 'next/head';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import Board from '../components/board';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DndProvider backend={Backend}>
      <Board />
    </DndProvider>
  </div>
);

export default Home;

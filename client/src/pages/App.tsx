import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SabbedList } from '../components/SabbedList';

function App() {
  return (
    <div css={{
      textAlign: 'center',
    }}>
      <h1>Today I Sabbed</h1>
      <h2>삽질 공유 기록 서비스</h2>
      <SabbedList />
    </div>
  );
}

export default App;

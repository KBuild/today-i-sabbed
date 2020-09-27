import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';

export const SabbedList = () => {
  const [result] = useQuery({ query: gql`
    {
      sabbedList {
        id
        title
        body
        createdAt
        updatedAt
      }
    }
  `});

  const { data, fetching, error } = result;

  if (fetching) return <div>Fetching...</div>
  if (error) return <div>Error :P</div>

  const sabbed: [any] = data.sabbedList;

  return (
    <div>
      {sabbed.map(sab => <div key={sab.id}>{sab.title} / {sab.body}</div>)}
    </div>
  )
}
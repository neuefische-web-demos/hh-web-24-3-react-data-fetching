import { useState } from 'react';
import useSWR from 'swr';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  //const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  // const { data, isLoading, error } = useSWR('url', fetcher);

  const {
    data: joke,
    isLoading,
    error,
  } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`, fetcher);

  console.log('DATA SWR', joke);
  console.log('isLoading', isLoading);

  // useEffect(() => {
  //   async function startFetching() {
  //     const response = await fetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  //     const joke = await response.json();

  //     setJoke(joke);
  //   }

  //   startFetching();
  // }, [id]);

  if (error || !joke) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{joke.joke}</h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}

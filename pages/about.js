import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function AboutPage() {
  const { data: jokes, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes`,
    fetcher
  );

  console.log('DATA SWR', jokes);

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>HEY, HEY</h1>
    </>
  );
}

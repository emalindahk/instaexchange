import useSWR from 'swr';

const CurrencyTable = () => {
  const { data, error } = useSWR(process.env.PUBLIC_API_URL);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data)

  return (
    <table>

    </table>
  );
};

export default CurrencyTable;

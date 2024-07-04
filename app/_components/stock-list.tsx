async function getStockData() {
  const stockData = await fetch(
    "https://api.api-ninjas.com/v1/stockprice?ticker=AAPL",
    {
      headers: {
        "X-Api-Key": `${process.env.API_KEY}`,
      },
      next: { revalidate: 9999999999 },
    }
  );

  if (!stockData.ok) {
    throw new Error("Failed to fetch data");
  }

  return stockData.json();
}

export default async function StockList() {
  const { ticker, name, price, exchange, updated } = await getStockData();
  const formattedUpdatedTime = new Date(updated * 1000).toLocaleString();

  return (
      <table className="table table-md table-fixed table-pin-rows overflow-hidden mt-10 rounded-md shadow-md truncate-all">
        <thead>
          <tr className="bg-white text-black text-center border-b-black">
            <td className="overflow-x-auto">Ticker</td>
            <td className="overflow-x-auto">Company Name</td>
            <td className="overflow-x-auto">Price</td>
            <td className="overflow-x-auto">Exchange</td>
            <td className="overflow-x-auto">Updated</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-gray-400 text-center">
            <td className="border-l border-r border-b border-gray-400 border-opacity-40">
              {ticker}
            </td>
            <td className="border-l border-r border-b border-gray-400 border-opacity-40">
              {name}
            </td>
            <td className="border-l border-r border-b border-gray-400 border-opacity-40">
              {price}
            </td>
            <td className="border-l border-r border-b border-gray-400 border-opacity-40">
              {exchange}
            </td>
            <td className="border-l border-r border-b border-gray-400 border-opacity-40">
              {formattedUpdatedTime}
            </td>
          </tr>
        </tbody>
      </table>
  );
}

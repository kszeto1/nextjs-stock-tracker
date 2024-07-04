// 'use client'
import StockListContainer from "./stock-list-container";
import TickerSearch from "@/app/_components/ticker-search";

export default function Page() {
  return (
    <main className="w-11/12 mx-auto">
      <StockListContainer />
    </main>
  );
}

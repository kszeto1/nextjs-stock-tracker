'use client';

export default function TickerSearch() {
    let searchStr = '';
    const handleSearch = (e: string) => {
        e.length > 0 ? searchStr = e : searchStr = '';
    }

    const handleSubmit = (e: string) => {
        // e.preventDefault();
        console.log(searchStr);
    }

  return (
    <label className="bg-white input input-bordered input-primary flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} onSubmit={e => handleSubmit(searchStr)}/>    
      {/* <kbd className="kbd kbd-sm bg-white">⌘</kbd>
        <kbd className="kbd kbd-sm bg-white">K</kbd> */}
    </label>
  );
}

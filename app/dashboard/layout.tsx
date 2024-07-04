'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";
import TickerSearch from "../_components/ticker-search";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().split('/').pop();

  const formattedPathname = pathname!.charAt(0).toUpperCase() + pathname!.slice(1);
  
  return (
    <main>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-white w-screen lg:relative z-10">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link href="/dashboard" className="btn bg-black mx-2 px-2 lg:hidden">Stock It Up</Link>
            <div className="mx-2 px-2 lg:hidden">{formattedPathname}</div>

            <div className="mx-2 flex-1 px-2 lg:block hidden">{formattedPathname}</div>

            {(formattedPathname == 'Watchlist') && <TickerSearch />}
          </div>
          {/* Page content here */}
          <div className="pt-16 lg:pt-0">{children}</div>
        </div>
        <div className="drawer-side flex lg:relative">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu flex flex-col h-screen bg-base-200 text-white w-80 p-4">
            {/* Sidebar content here */}
            <Link href="/dashboard" className="bg-base-200 text-white text-center px-2 my-2">
              Stock It Up
            </Link>
            <li>
              <a>Market Overview</a>
            </li>
            <li>
              <Link href="/dashboard/watchlist">Watchlist</Link>
            </li>
            <li>
              <a>Macro Indicators</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

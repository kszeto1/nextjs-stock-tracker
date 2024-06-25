export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-white w-full lg:relative z-10">
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
            <div className="mx-2 flex-1 px-2 lg:hidden">Stock It Up</div>
            <div className="mx-2 flex-1 px-2 lg:block hidden">Dashboard</div>
          </div>
          {/* Page content here */}
          <div className="pt-16 lg:pt-0">Content</div>
        </div>
        <div className="drawer-side flex lg:relative">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu flex flex-col h-screen bg-base-200 text-white w-80 p-4">
            {/* Sidebar content here */}
            <div className="bg-base-200 text-white text-center px-2 my-2">
              Stock It Up
            </div>
            <li>
              <a>Market Overview</a>
            </li>
            <li>
              <a>Watchlist</a>
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

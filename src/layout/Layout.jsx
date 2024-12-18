const Layout = () => {
  return (
    <div>
      <div className="navbar bg-[#431a63]  fixed z-50 text-white font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>MENU</a>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Chef Table</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>MENU</a>
            </li>
            <li>
              <a href="/about">ABOUT </a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
        
        <div className="navbar-end">
        <button className="btn btn-ghost">
          Inbox
          <div className="badge badge-secondary">+99</div>
        </button>
          <a className="btn btn-ghost">LogIn/Register</a>
          
        </div>
      </div>
    </div>
  );
};

export default Layout;

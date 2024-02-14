import { NavLink, Outlet } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="root-layout">
      <header>
        <section className="header-text"></section>

        <section>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <div id="header-circle">
                <NavLink id="circle-text">Oskar Johansson</NavLink>
              </div>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="experience">Experience</NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default HeaderComponent;

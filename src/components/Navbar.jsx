import { useEffect, useState } from "react";
import uidata from "../uidata.json";
import { subscriptionImages } from "../Assets";

const CollapsibleExample = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-transparent fixed-top d-flex flex-column ${
          isPageScrolled ? "nav-background-blur" : ""
        }`}
      >
        <div className="container-fluid row col-10">
          <div
            className="collapse navbar-collapse flex-column"
            id="navbarSupportedContent"
          >
            {uidata && uidata?.navlinks && (
              <ul className="navbar-nav w-100 mb-2 mb-lg-0 border-bottom border-secondary align-items-end justify-content-end">
                {uidata?.navlinks.map((navlink) => (
                  <li className="nav-item dropdown p-2">
                    <a
                      className="nav-link dropdown-toggle text-white font10 text-uppercase fs-6 fw-medium"
                      href="/"
                    >
                      {navlink.name}
                    </a>
                    {navlink?.dropdownItems && (
                      <ul className="dropdown-menu">
                        {navlink?.dropdownItems.map((dropdown) => (
                          <li>
                            <a className="dropdown-item" href="/">
                              {dropdown.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="nav-item p-2">
                  <button
                    type="button"
                    className="btn text-white font1 text-uppercase border-white rounded-5 fs-6 fw-medium"
                  >
                    sign in
                  </button>
                </li>
              </ul>
            )}
            {uidata?.subnavlinks && (
              <div className="d-flex text-white ms-auto">
                {uidata?.subnavlinks.map((subnavlink) => (
                  <div className="p-2 fs-6">{subnavlink.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      <nav className="d-lg-none bg-black position-relative">
        <img
          className="position-absolute end-0 top-0 p-4 z-2"
          src={subscriptionImages.home}
          alt="home"
        />
        <img
          className="position-absolute start-0 top-0 p-4 z-2 text-white"
          src={subscriptionImages.menu}
          alt="menu"
        />
      </nav>
    </>
  );
};

export default CollapsibleExample;

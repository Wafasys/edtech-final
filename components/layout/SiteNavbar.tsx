import Link from "next/link";

export default function SiteNavbar() {
  return (
    <header className="buttonsecondary-parent">
      <div className="buttonsecondary"></div>
      <div className="explorer-mopingo">
        <div className="frame-group">
          <div className="image-2-parent">
            <img
              className="image-2-icon"
              loading="lazy"
              alt=""
              src="/home/image-2@2x.png"
            />

            <div className="input-field">
              <div className="input-field-base">
                <div className="input-with-label">
                  <div className="label">Email</div>
                  <div className="input navbar-search-shell">
                    <div className="content">
                      <img
                        className="search-icon"
                        alt=""
                        src="/home/search.svg"
                      />

                      <input
                        className="navbar-search-input"
                        placeholder="Want to learn?"
                        type="search"
                      />
                      <button type="button" className="button navbar-search-button">
                        <div className="button-base">
                          <span className="navbar-search-label">Explore</span>
                          <img
                            className="chevron-down-icon"
                            alt=""
                            src="/home/chevron-down.svg"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="home-parent">
            <Link href="/" className="home">
              Home
            </Link>
            <Link href="/" className="about-us">
              About us
            </Link>
            <Link href="#programs" className="about-us">
              Courses
            </Link>
            <Link href="#footer" className="about-us">
              Contact us
            </Link>
            <Link href="#footer" className="about-us">
              FAQ&apos;s
            </Link>
          </nav>
        </div>
        <div className="tag">
          <div className="menu">
            <div className="sign-in">Sign in</div>
          </div>
          <div className="button2">
            <div className="button-base2">
              <div className="buttonsecondary2">Create free account</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

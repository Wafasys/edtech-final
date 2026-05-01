"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <header className="buttonsecondary-parent">
      <div className="buttonsecondary"></div>

      <div className="navbar-mobile-bar">
        <img
          className="navbar-mobile-logo"
          alt=""
          src="/home/image-2@2x.png"
        />
        <button
          type="button"
          className="navbar-hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

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
          <Link href="/login" className="menu">
            <div className="sign-in">Sign in</div>
          </Link>
          <Link href="/signup" className="button2">
            <div className="button-base2">
              <div className="buttonsecondary2">Create free account</div>
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`mobile-drawer-backdrop${open ? " is-open" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      ></div>

      <aside
        className={`mobile-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-header">
          <img
            className="mobile-drawer-logo"
            alt=""
            src="/home/image-2@2x.png"
          />
          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="mobile-drawer-search">
          <div className="input navbar-search-shell">
            <div className="content">
              <img className="search-icon" alt="" src="/home/search.svg" />
              <input
                className="navbar-search-input"
                placeholder="Want to learn?"
                type="search"
              />
            </div>
          </div>
        </div>

        <nav className="mobile-drawer-nav">
          <Link href="/" className="mobile-drawer-link is-active" onClick={closeDrawer}>
            Home
          </Link>
          <Link href="/" className="mobile-drawer-link" onClick={closeDrawer}>
            About us
          </Link>
          <Link href="#programs" className="mobile-drawer-link" onClick={closeDrawer}>
            Courses
          </Link>
          <Link href="/login" className="mobile-drawer-link" onClick={closeDrawer}>
            Login
          </Link>
          <Link href="/signup" className="mobile-drawer-link" onClick={closeDrawer}>
            Sign up
          </Link>
          <Link href="#footer" className="mobile-drawer-link" onClick={closeDrawer}>
            Contact us
          </Link>
          <Link href="#footer" className="mobile-drawer-link" onClick={closeDrawer}>
            FAQ&apos;s
          </Link>
        </nav>

        <div className="mobile-drawer-cta">
          <Link href="/login" className="mobile-drawer-signin" onClick={closeDrawer} style={{ textAlign: "center" }}>
            Sign in
          </Link>
          <Link href="/signup" className="mobile-drawer-primary" onClick={closeDrawer} style={{ textAlign: "center" }}>
            Create free account
          </Link>
        </div>
      </aside>
    </header>
  );
}

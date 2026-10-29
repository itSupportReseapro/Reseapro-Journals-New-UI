"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const defaultItems = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    menu: [
      { label: "For Authors", href: "/services#authors" },
      { label: "For Editors", href: "/services#editors" },
      { label: "For Reviewers", href: "/services#reviewers" },
    ],
  },
  { label: "Publication Ethics", href: "/publication-ethics" },
  {
    label: "Journals",
    href: "/journals",
    menu: [
      { label: "Browse Journals", href: "/journals" },
      { label: "Find a Journal", href: "/search" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

function BrandLogo({ mobile = false, href = "/" }) {
  const asset = (name) => `/header/${mobile ? `mobile-${name}` : name}`;
  return (
    <a className={mobile ? "editorial-header-mobileBrand" : "editorial-header-brand"} href={href} aria-label="Reseapro Journals home">
      <Image className={"editorial-header-logoTop"} src={asset("logo-word-top.svg")} width={mobile ? 101 : 123} height={mobile ? 14 : 16} alt="" priority />
      <Image className={"editorial-header-logoBottom"} src={asset("logo-word-bottom.svg")} width={mobile ? 138 : 167} height={mobile ? 18 : 22} alt="" priority />
      <Image className={"editorial-header-logoMark"} src={asset("logo-mark.svg")} width={mobile ? 22 : 27} height={mobile ? 32 : 39} alt="" priority />
    </a>
  );
}

function ArrowIcon({ mobile = false }) {
  return <Image src={mobile ? "/header/mobile-arrow.svg" : "/header/arrow-up-right.svg"} width={20} height={20} alt="" />;
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m17.5 17.5-3.6166-3.6166M15.8333 9.1667a6.6666 6.6666 0 1 1-13.3333 0 6.6666 6.6666 0 0 1 13.3333 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccountActions({ mobile = false, loginHref, submitHref, labels }) {
  return (
    <div className={mobile ? "editorial-header-mobileActions" : "editorial-header-actions"}>
      <Button
        variant="outline"
        size="md"
        className={mobile ? "editorial-header-mobileLogin" : "editorial-header-login"}
        href={loginHref}
        startIcon={<Image src={mobile ? "/header/mobile-user.svg" : "/header/login-user.svg"} width={20} height={20} alt="" />}
      >
        {labels.login}
      </Button>
      <Button
        variant="primary"
        size="manuscript"
        className={mobile ? "editorial-header-mobileSubmit" : "editorial-header-submit"}
        href={submitHref}
        arrowAnimation
        endIcon={<ArrowIcon mobile={mobile} />}
      >
        {labels.submit}
      </Button>
    </div>
  );
}

function NavItems({ items, mobile, openMenu, setOpenMenu, activeHref }) {
  return items.map((item) => {
    const hasMenu = Array.isArray(item.menu) && item.menu.length > 0;
    const isOpen = openMenu === item.label;
    const isActive = activeHref === item.href;
    const menuId = `header-menu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    return (
      <div className={`${"editorial-header-navItem"} ${mobile ? "editorial-header-mobileNavItem" : ""}`} key={item.label}>
        <Button
          variant="text"
          size="sm"
          className={`${"editorial-header-navLink"} ${isOpen || isActive ? "editorial-header-navLinkActive" : ""}`}
          aria-current={isActive ? "page" : undefined}
          href={hasMenu ? undefined : item.href}
          aria-expanded={hasMenu ? isOpen : undefined}
          aria-controls={hasMenu ? menuId : undefined}
          onClick={hasMenu ? () => setOpenMenu(isOpen ? null : item.label) : undefined}
          arrowAnimation={false}
          endIcon={item.menu ? <Image className={`${"editorial-header-chevron"} ${isOpen ? "editorial-header-chevronOpen" : ""}`} src={mobile ? "/header/mobile-chevron.svg" : "/header/chevron-down.svg"} width={mobile ? 20 : 14} height={mobile ? 20 : 14} alt="" /> : undefined}
        >
          {item.label}
        </Button>
        {hasMenu && (
          <div
            className={`${"editorial-header-dropdown"} ${isOpen ? "editorial-header-dropdownOpen" : ""} ${mobile ? "editorial-header-mobileDropdown" : ""}`}
            id={menuId}
            aria-hidden={!isOpen}
            inert={!isOpen}
          >
            {item.menu.map((entry) => (
              <Button key={entry.label} variant="text" size="sm" className={"editorial-header-dropdownLink"} href={entry.href}>
                {entry.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  });
}

/** Responsive editorial header. Supply menu entries when dropdown links are needed. */
export function Header({
  variant = "Default",
  items = defaultItems,
  loginHref = "/login",
  submitHref = "/submit-manuscript",
  searchHref = "/search",
  searchQuery = "",
  activeHref,
  logoHref = "/",
  labels = { login: "Log-in/Sign-in", submit: "Submit Manuscript" },
  className = "",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const isSearchVariant = ["Variant2", "variant2", "search"].includes(variant);
  const [searchOpen, setSearchOpen] = useState(isSearchVariant);
  const headerRef = useRef(null);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  useEffect(() => {
    if (!openMenu && !mobileOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen, openMenu]);

  return (
    <header ref={headerRef} className={`${"editorial-header-header"} ${className}`.trim()}>
      <div className={"editorial-header-masthead"}>
        <div className={"editorial-header-brandGroup"}>
          <BrandLogo href={logoHref} />
          <span className={"editorial-header-identityDivider"} aria-hidden="true" />
          <p className={"editorial-header-promise"}>Knowledge, without boundaries.</p>
        </div>
        <AccountActions loginHref={loginHref} submitHref={submitHref} labels={labels} />
        <div className={"editorial-header-mobileTop"}>
          <BrandLogo mobile href={logoHref} />
          <Button
            variant="ghost"
            size="md"
            iconOnly
            className={"editorial-header-menuToggle"}
            aria-label="Navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            icon={<span className={"editorial-header-menuDots"} aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</span>}
          >
            Menu
          </Button>
        </div>
      </div>

      <div className={`${"editorial-header-navStage"} ${searchOpen ? "editorial-header-navStageSearchOpen" : ""} ${isSearchVariant ? "editorial-header-navStageVariant" : ""}`}>
      <nav className={"editorial-header-desktopNav"} aria-label="Main navigation" aria-hidden={searchOpen} inert={searchOpen}>
            <div className={"editorial-header-navLinks"}>
              <NavItems items={items} mobile={false} openMenu={openMenu} setOpenMenu={setOpenMenu} activeHref={activeHref} />
            </div>
            <span className={"editorial-header-searchDivider"} aria-hidden="true" />
            <Button variant="text" size="sm" className={"editorial-header-searchLink"} onClick={openSearch} startIcon={<SearchIcon />}>
              Search
            </Button>
      </nav>

      <section className={"editorial-header-searchPanel"} aria-label="Journal search" aria-hidden={!searchOpen} inert={!searchOpen}>
          <form className={"editorial-header-searchControls"} action={searchHref} method="get" role="search">
            <div className={"editorial-header-searchField"}>
              <input key={searchQuery} name="q" defaultValue={searchQuery} placeholder="Search here..." aria-label="Search journals" />
            </div>
            <Button type="submit" variant="primary" size="md" iconOnly icon={<Image src="/header/variant2-search.svg" width={20} height={20} alt="" />} aria-label="Search" />
            <Button type="submit" name="mode" value="advanced" variant="outline" size="sm" className={"editorial-header-advanceSearch"} startIcon={<Image src="/header/variant2-advance-search.svg" width={20} height={20} alt="" />}>
              Advance Search
            </Button>
          </form>
          <Button variant="ghost" size="md" iconOnly className={"editorial-header-closeSearch"} aria-label="Close search" onClick={closeSearch} icon={<Image src="/header/search-close.svg" width={16} height={16} alt="" />} />
      </section>
      </div>

      {mobileOpen && (
        <div className={"editorial-header-mobileMenu"}>
          <div className={"editorial-header-mobileMenuHeading"}>
            <h2>Menu</h2>
            <Button variant="ghost" size="sm" iconOnly icon={<Image src="/header/mobile-close.svg" width={24} height={24} alt="" />} className={"editorial-header-closeMenu"} aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} />
          </div>
          <p className={"editorial-header-mobilePromise"}>Knowledge, without boundaries.</p>
          <nav className={"editorial-header-mobileNav"} aria-label="Mobile navigation">
            <NavItems items={items} mobile openMenu={openMenu} setOpenMenu={setOpenMenu} activeHref={activeHref} />
            <Button variant="text" size="sm" className={"editorial-header-mobileSearchLink"} onClick={() => { openSearch(); setMobileOpen(false); }} arrowAnimation={false} endIcon={<SearchIcon />}>
              Search
            </Button>
          </nav>
          <AccountActions mobile loginHref={loginHref} submitHref={submitHref} labels={labels} />
        </div>
      )}
    </header>
  );
}

export { Header as EditorialHeader };
export function ReseaproJournalsEditorialHeaderVariant2(props) {
  return <Header {...props} variant="Variant2" />;
}
export default Header;

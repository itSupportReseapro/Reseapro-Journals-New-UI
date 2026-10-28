"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import styles from "./Header.module.css";

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
    <a className={mobile ? styles.mobileBrand : styles.brand} href={href} aria-label="Reseapro Journals home">
      <Image className={styles.logoTop} src={asset("logo-word-top.svg")} width={mobile ? 101 : 123} height={mobile ? 14 : 16} alt="" priority />
      <Image className={styles.logoBottom} src={asset("logo-word-bottom.svg")} width={mobile ? 138 : 167} height={mobile ? 18 : 22} alt="" priority />
      <Image className={styles.logoMark} src={asset("logo-mark.svg")} width={mobile ? 22 : 27} height={mobile ? 32 : 39} alt="" priority />
    </a>
  );
}

function ArrowIcon({ mobile = false }) {
  return <Image className={styles.arrowIconGraphic} src={mobile ? "/header/mobile-arrow.svg" : "/header/arrow-up-right.svg"} width={20} height={20} alt="" />;
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
    <div className={mobile ? styles.mobileActions : styles.actions}>
      <Button
        variant="outline"
        size="md"
        className={mobile ? styles.mobileLogin : styles.login}
        href={loginHref}
        startIcon={<Image src={mobile ? "/header/mobile-user.svg" : "/header/login-user.svg"} width={20} height={20} alt="" />}
      >
        {labels.login}
      </Button>
      <Button
        variant="primary"
        size="manuscript"
        className={mobile ? styles.mobileSubmit : styles.submit}
        href={submitHref}
        endIcon={<ArrowIcon mobile={mobile} />}
      >
        {labels.submit}
      </Button>
    </div>
  );
}

function NavItems({ items, mobile, openMenu, setOpenMenu }) {
  return items.map((item) => {
    const hasMenu = Array.isArray(item.menu) && item.menu.length > 0;
    const isOpen = openMenu === item.label;
    const menuId = `header-menu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    return (
      <div className={`${styles.navItem} ${mobile ? styles.mobileNavItem : ""}`} key={item.label}>
        <Button
          variant="text"
          size="sm"
          className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ""}`}
          href={hasMenu ? undefined : item.href}
          aria-expanded={hasMenu ? isOpen : undefined}
          aria-controls={hasMenu ? menuId : undefined}
          onClick={hasMenu ? () => setOpenMenu(isOpen ? null : item.label) : undefined}
          endIcon={item.menu ? <Image className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} src={mobile ? "/header/mobile-chevron.svg" : "/header/chevron-down.svg"} width={mobile ? 20 : 14} height={mobile ? 20 : 14} alt="" /> : undefined}
        >
          {item.label}
        </Button>
        {hasMenu && (
          <div
            className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""} ${mobile ? styles.mobileDropdown : ""}`}
            id={menuId}
            aria-hidden={!isOpen}
            inert={!isOpen}
          >
            {item.menu.map((entry) => (
              <Button key={entry.label} variant="text" size="sm" className={styles.dropdownLink} href={entry.href}>
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
    <header ref={headerRef} className={`${styles.header} ${className}`.trim()}>
      <div className={styles.masthead}>
        <div className={styles.brandGroup}>
          <BrandLogo href={logoHref} />
          <span className={styles.identityDivider} aria-hidden="true" />
          <p className={styles.promise}>Knowledge, without boundaries.</p>
        </div>
        <AccountActions loginHref={loginHref} submitHref={submitHref} labels={labels} />
        <div className={styles.mobileTop}>
          <BrandLogo mobile href={logoHref} />
          <Button
            variant="ghost"
            size="md"
            iconOnly
            className={styles.menuToggle}
            aria-label="Navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            icon={<span className={styles.menuDots} aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</span>}
          >
            Menu
          </Button>
        </div>
      </div>

      <div className={`${styles.navStage} ${searchOpen ? styles.navStageSearchOpen : ""} ${isSearchVariant ? styles.navStageVariant : ""}`}>
      <nav className={styles.desktopNav} aria-label="Main navigation" aria-hidden={searchOpen} inert={searchOpen}>
            <div className={styles.navLinks}>
              <NavItems items={items} mobile={false} openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
            <span className={styles.searchDivider} aria-hidden="true" />
            <Button variant="text" size="sm" className={styles.searchLink} onClick={openSearch} startIcon={<SearchIcon />}>
              Search
            </Button>
      </nav>

      <section className={styles.searchPanel} aria-label="Journal search" aria-hidden={!searchOpen} inert={!searchOpen}>
          <form className={styles.searchControls} action={searchHref} method="get" role="search">
            <div className={styles.searchField}>
              <input key={searchQuery} name="q" defaultValue={searchQuery} placeholder="Search here..." aria-label="Search journals" />
            </div>
            <Button type="submit" variant="primary" size="md" iconOnly icon={<Image src="/header/variant2-search.svg" width={20} height={20} alt="" />} aria-label="Search" />
            <Button type="submit" name="mode" value="advanced" variant="outline" size="sm" className={styles.advanceSearch} startIcon={<Image src="/header/variant2-advance-search.svg" width={20} height={20} alt="" />}>
              Advance Search
            </Button>
          </form>
          <Button variant="ghost" size="md" iconOnly className={styles.closeSearch} aria-label="Close search" onClick={closeSearch} icon={<Image src="/header/search-close.svg" width={16} height={16} alt="" />} />
      </section>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeading}>
            <h2>Menu</h2>
            <Button variant="ghost" size="sm" iconOnly icon={<Image src="/header/mobile-close.svg" width={24} height={24} alt="" />} className={styles.closeMenu} aria-label="Close navigation menu" onClick={() => setMobileOpen(false)} />
          </div>
          <p className={styles.mobilePromise}>Knowledge, without boundaries.</p>
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <NavItems items={items} mobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Button variant="text" size="sm" className={styles.mobileSearchLink} onClick={() => { openSearch(); setMobileOpen(false); }} endIcon={<SearchIcon />}>
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

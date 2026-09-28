import styles from "./hero.module.css";

export function HeroOrnament() {
  return (
    <svg
      className={styles.ornament}
      viewBox="0 0 1100 700"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M340 646C521 627 436 483 570 401S951 371 980 184C997 77 926 31 857 51" />
      <path d="M824 41C726 2 635 55 621 133" />
      <path d="M958 441C1021 384 1054 286 1029 222" />
      <path d="M339 646C321 641 317 625 319 615C333 620 342 630 339 646Z" />
    </svg>
  );
}

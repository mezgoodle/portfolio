import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div>{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}

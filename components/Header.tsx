import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3 fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Моє портфоліо
        </Link>
      </div>
    </header>
  );
};

export default Header;

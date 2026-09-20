import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="metal">Page not found</h1>
        <p>That route is not part of the Superhuman system.</p>
        <Link className="btn btn-solid" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}

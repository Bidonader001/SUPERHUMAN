export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const q = await searchParams;
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 420 }}>
        <h1 className="metal">Admin</h1>
        <p className="muted">Private area for Omar. Default password is in PUBLISH.md — change it before launch.</p>
        {q.error ? <p className="error">Wrong password.</p> : null}
        <form className="form" action="/api/admin/login" method="post">
          <label>
            Password
            <input name="password" type="password" required />
          </label>
          <button className="btn btn-solid" type="submit">
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}

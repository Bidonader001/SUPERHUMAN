import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import { listApplications, listLeads, listPayments } from "@/lib/store";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  const [apps, pays, leads] = await Promise.all([listApplications(), listPayments(), listLeads()]);

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Private</p>
        <h1 className="metal">Administrator</h1>
        <p>
          Edit public copy, prices, and contact numbers in <code>src/lib/site.ts</code> and{" "}
          <code>src/lib/programs.ts</code>. Hide a program by setting <code>hidden: true</code>. This dashboard stores
          applications, payments, and newsletter leads on the server.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Applications</h3>
            <p>{apps.length}</p>
          </div>
          <div className="card">
            <h3>Payments</h3>
            <p>{pays.length}</p>
          </div>
          <div className="card">
            <h3>Leads</h3>
            <p>{leads.length}</p>
          </div>
        </div>

        <h2>Contact currently published</h2>
        <p>
          WhatsApp {site.whatsappDisplay} · InstaPay {site.instapayDisplay} · {site.email}
        </p>

        <h2>Client applications</h2>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>When</th>
                <th>Name</th>
                <th>WhatsApp</th>
                <th>Program</th>
                <th>Goal</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((a) => (
                <tr key={a.id}>
                  <td>{a.createdAt.slice(0, 16)}</td>
                  <td>{a.fullName}</td>
                  <td>{a.whatsapp}</td>
                  <td>{a.program}</td>
                  <td>{a.mainGoal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Payment confirmations</h2>
        {pays.map((p) => (
          <form className="card" key={p.id} action="/api/admin/payment" method="post" style={{ marginBottom: "0.75rem" }}>
            <input type="hidden" name="id" value={p.id} />
            <p>
              <b>{p.fullName}</b> · {p.program} · {p.amount} · {p.status}
              <br />
              Ref {p.reference} · {p.whatsapp} · file {p.fileName}
            </p>
            <div className="btn-row">
              <button className="btn" name="status" value="pending" type="submit">
                Pending
              </button>
              <button className="btn btn-solid" name="status" value="confirmed" type="submit">
                Confirmed
              </button>
              <button className="btn" name="status" value="rejected" type="submit">
                Rejected
              </button>
            </div>
          </form>
        ))}

        <h2>Newsletter leads</h2>
        <ul>
          {leads.map((l) => (
            <li key={l.id}>
              {l.name} — {l.email} — {l.goal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

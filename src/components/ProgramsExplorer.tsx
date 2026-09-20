"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { programs } from "@/lib/programs";

export function ProgramsExplorer() {
  const [goal, setGoal] = useState("all");
  const [level, setLevel] = useState("all");
  const [days, setDays] = useState("all");
  const [location, setLocation] = useState("all");
  const [sport, setSport] = useState("all");
  const [coaching, setCoaching] = useState("all");

  const list = useMemo(
    () =>
      programs.filter((p) => {
        if (p.hidden) return false;
        if (goal !== "all" && !p.filters.goal.includes(goal)) return false;
        if (level !== "all" && !p.filters.level.includes(level)) return false;
        if (days !== "all" && !p.filters.days.includes(days)) return false;
        if (location !== "all" && !p.filters.location.includes(location)) return false;
        if (sport !== "all" && !p.filters.sport.includes(sport)) return false;
        if (coaching === "yes" && !p.filters.coaching) return false;
        if (coaching === "no" && p.filters.coaching) return false;
        return true;
      }),
    [goal, level, days, location, sport, coaching],
  );

  return (
    <>
      <div className="filters">
        <select value={goal} onChange={(e) => setGoal(e.target.value)} aria-label="Goal">
          <option value="all">Goal</option>
          <option value="fat-loss">Fat loss</option>
          <option value="muscle">Muscle</option>
          <option value="performance">Performance</option>
          <option value="hybrid">Hybrid</option>
          <option value="race">Race</option>
        </select>
        <select value={level} onChange={(e) => setLevel(e.target.value)} aria-label="Experience level">
          <option value="all">Experience level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <select value={days} onChange={(e) => setDays(e.target.value)} aria-label="Training days">
          <option value="all">Training days</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Training location">
          <option value="all">Training location</option>
          <option value="gym">Gym</option>
          <option value="home">Home</option>
          <option value="outdoor">Outdoor</option>
          <option value="pool">Pool</option>
          <option value="open-water">Open water</option>
        </select>
        <select value={sport} onChange={(e) => setSport(e.target.value)} aria-label="Sport">
          <option value="all">Sport</option>
          <option value="hybrid">Hybrid</option>
          <option value="hyrox">HYROX</option>
          <option value="running">Running</option>
          <option value="swimming">Swimming</option>
          <option value="calisthenics">Calisthenics</option>
          <option value="finswimming">Finswimming</option>
          <option value="combat">Combat</option>
          <option value="football">Football</option>
          <option value="general">General</option>
        </select>
        <select value={coaching} onChange={(e) => setCoaching(e.target.value)} aria-label="Online coaching">
          <option value="all">Online coaching availability</option>
          <option value="yes">Coaching support included</option>
          <option value="no">Plan-first</option>
        </select>
      </div>
      <div className="grid-3 grid-programs">
        {list.map((p) => (
          <article className="card" key={p.slug}>
            <div className="photo-frame" style={{ minHeight: 190, marginBottom: "0.9rem" }}>
              <img className="photo" src={p.image} alt="" />
            </div>
            <h3>{p.shortName}</h3>
            <p>{p.description}</p>
            <div className="program-meta">
              <div>
                <span>Goal</span>
                <b>{p.goal}</b>
              </div>
              <div>
                <span>Duration</span>
                <b>{p.duration}</b>
              </div>
              <div>
                <span>Level</span>
                <b>{p.level}</b>
              </div>
              <div>
                <span>Days</span>
                <b>{p.days}</b>
              </div>
              <div>
                <span>Locations</span>
                <b>{p.locations}</b>
              </div>
              <div>
                <span>Coaching</span>
                <b>{p.coaching}</b>
              </div>
            </div>
            <div className="btn-row">
              <Link className="btn" href={`/programs/${p.slug}`}>
                View Program
              </Link>
              <Link className="btn btn-solid" href={`/start?program=${p.slug}`}>
                Start This Program
              </Link>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && <p className="notice">No programs match these filters. Clear a filter or use the quiz.</p>}
    </>
  );
}

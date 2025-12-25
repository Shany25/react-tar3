// src/App.jsx
// 1. Imports and renders <UserSearch />
// 2. Implements show/hide mechanism for <Timer /> to verify cleanup.
//----------------------------



import { useState } from "react";
import UserSearch from "./components/UserSearch.jsx";
import Timer from "./components/Timer.jsx";


export default function App() {
  // Required: boolean state to toggle Timer mount/unmount.
  const [showTimer, setShowTimer] = useState(true);

  return (
    <main className="app">
      <section className="panel">
        <header className="panel_header">
          <h1 className="panel_title">React Tar3 Assignment</h1>
        </header>

        <section className="card">
          <h2 className="card_title">User Search</h2>
          <UserSearch />
        </section>

        <section className="card">
          <div className="card_row">
            <h2 className="card_title">Timer</h2>

            {/* Required: a button that toggles showTimer */}
            <button
              type="button"
              className="btn"
              onClick={() => setShowTimer((prev) => !prev)}
            >
              {showTimer ? "Hide Timer" : "Show Timer"}
            </button>
          </div>

          {/* Required: conditional rendering */}
          {showTimer && <Timer />}
        </section>
      </section>
    </main>
  );
}
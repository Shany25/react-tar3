// src/components/UserSearch.jsx
// Loads users once on mount, supports filtering by name.
// -----------------------------



import { useEffect, useMemo, useState } from "react";

export default function UserSearch() {
    // Required state variables:
    const [users, setUsers] = useState([]);     // initial: []
    const [search, setSearch] = useState("");   // initial: ""
    const [loading, setLoading] = useState(true); // initial: true

    useEffect(() => {
        // Required: fetch users once when component mounts.
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data = await res.json();

                setTimeout(() => {
                    setUsers(data);
                    setLoading(false);
                }, 350);
            } catch (err) {
                console.error("Failed to fetch users:", err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Required: filter users by the search substring.
    const filteredUsers = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return users;
        return users.filter((u) => u.name.toLowerCase().includes(q));
    }, [users, search]);

    return (
        <div className="user-search">
            <label className="field">
                <span className="field_label">Search by name</span>

                {/* Required: input that updates "search" state */}
                <input
                    className="field_input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a name..."
                />
            </label>

            {/* Required: show loading message while loading is true */}
            {loading ? (
                <p className="muted">טוען נתונים...</p>
            ) : (
                // Required: show names inside a <ul>
                <ul className="list">
                    {filteredUsers.map((u) => (
                        <li key={u.id} className="list_item">
                            {u.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
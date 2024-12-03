"use client";

import { useState } from "react";

export const Weather = () => {
    const [state, setState] = useState("Nothing to show here...");
    return (
        <div className="weather">
            <button
                onClick={async () => {
                    setState("Please wait for a second...");
                    const resp = await fetch("/api");
                    const jsonResp = await resp.json();
                    setState(jsonResp);
                }}
            >
                CLICK ME !
            </button>
            <section>
                <code>
                    <pre>{JSON.stringify(state, null, 2)}</pre>
                </code>
            </section>
        </div>
    );
};

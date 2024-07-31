"use client";

export default function Home() {
    const apple = (item) => {
        alert(item);
    };
    return (
        <main>
            <h1>Hello guys welcome to my channel</h1>
            <button onClick={() => apple("hellocutie")}>click me...</button>
        </main>
    );
}

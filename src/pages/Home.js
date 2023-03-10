import { useState, useEffect } from "react";

function Home() {
  const [list, setList] = useState([
    { id: 1, title: "Gio", description: "Smartest coder" },
    { id: 2, title: "Gita", description: "Cutest adventurer" },
    { id: 3, title: "Marco", description: "Best filmamker" },
  ]);

  return (
    <div>
      <div className="">
        {list.map((item) => (
          <div className="" key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

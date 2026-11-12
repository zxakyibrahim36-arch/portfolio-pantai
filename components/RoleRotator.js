"use client";

import { useEffect, useState } from "react";

export default function RoleRotator({ roles }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <span className="role-rotator" key={i}>
      {roles[i]}
    </span>
  );
}

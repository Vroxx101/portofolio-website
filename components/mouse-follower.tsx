'use client';

import { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="hidden"> {/* Menghapus mouse follower untuk kinerja optimal */}
      <div className="w-full h-full rounded-full border border-white" />
    </div>
  );
};

export default MouseFollower;
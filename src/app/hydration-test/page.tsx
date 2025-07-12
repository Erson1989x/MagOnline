"use client";

import { useEffect } from 'react';

export default function HydrationTestPage() {
  useEffect(() => {
    console.log('✅ HYDRATION TEST: useEffect fired - client side working!');
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hydration Test</h1>
      <p>This is a simple test to verify client-side hydration works.</p>
      <p>Check the console for the success message.</p>
    </div>
  );
}

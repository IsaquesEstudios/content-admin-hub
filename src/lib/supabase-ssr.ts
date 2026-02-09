import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('[SSG] Supabase env vars not found. SSG data fetching may fail.');
}

/**
 * SSR/SSG-safe Supabase client.
 * Uses a mock storage to avoid localStorage dependency in Node.js.
 * Used exclusively by route loaders during build-time SSG.
 */
export const supabaseSSR = createClient<Database>(
  supabaseUrl || 'https://fuagnnrpnjpnrvudmtie.supabase.co',
  supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YWdubnJwbmpwbnJ2dWRtdGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNzI5MTYsImV4cCI6MjA4MDY0ODkxNn0.gh57n4labSNQ_k3IbLMKwaVuftsxEIBgL8ymURwf4-k',
  {
    auth: {
      storage: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      },
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

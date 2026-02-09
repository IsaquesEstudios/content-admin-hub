import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = 'https://fuagnnrpnjpnrvudmtie.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YWdubnJwbmpwbnJ2dWRtdGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNzI5MTYsImV4cCI6MjA4MDY0ODkxNn0.gh57n4labSNQ_k3IbLMKwaVuftsxEIBgL8ymURwf4-k';

/**
 * SSR/SSG-safe Supabase client.
 * Uses a mock storage to avoid localStorage dependency in Node.js.
 * Used exclusively by route loaders during build-time SSG.
 */
export const supabaseSSR = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
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

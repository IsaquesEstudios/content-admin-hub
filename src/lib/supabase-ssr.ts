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
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key',
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

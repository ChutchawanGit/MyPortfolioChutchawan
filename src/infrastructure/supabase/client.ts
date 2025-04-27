import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';

// Environment variables would be better in production
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient<Database>(supabaseUrl, supabaseAnonKey);

// This allows us to swap out the database provider without changing the application code
export default supabaseClient;
// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'
const NEXT_PUBLIC_SUPABASE_URL='https://vdsqroecqmexmbtmwinc.supabase.co'
const NEXT_PUBLIC_SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkc3Fyb2VjcW1leG1idG13aW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NTksImV4cCI6MjA2MzQwODg1OX0.-U_JxdZlBlO9AQlTc0NrScDh64ps1XGU1nvUpx1YTtc'

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
)

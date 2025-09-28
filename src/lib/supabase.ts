import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lovable.app'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdmFibGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwNjc4Mjc5MywiZXhwIjoyMDIyMzU4NzkzfQ.GRkQBTvqGJPT3vMjRYrLHGNkz2hQy7PV9FEKZrGovgQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
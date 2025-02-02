import { createClient } from "@supabase/supabase-js"
import { Database } from "./__generated__/supabase"

const supabaseUrl =
  process.env.SUPABASE_PROJECT_URL || "https://jmxrqchbqtadpzvjasgo.supabase.co"
const supabaseKey =
  process.env.SUPABASE_API_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpteHJxY2hicXRhZHB6dmphc2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwMjYyODgsImV4cCI6MTk4NTYwMjI4OH0.2pKL9ibMpCrZw37fzUQbIKIR436-XU37NWtbiLVZlzU"

const getSupabase = () => {
  const supabase = createClient<Database>(supabaseUrl!, supabaseKey!)
  return supabase
}

export default getSupabase

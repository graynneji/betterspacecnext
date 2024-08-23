import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rphtmxqpaizsbbxnygrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwaHRteHFwYWl6c2JieG55Z3JzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDUwMDQyNSwiZXhwIjoyMDMwMDc2NDI1fQ.uV98JtcDGF4TqRWjT15nTm3n0phnq4R1kPDmAyb1UVQ";

export const supabase = createClient(supabaseUrl, supabaseKey);

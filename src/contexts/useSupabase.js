import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pwyhhvyzfiusedjucwbf.supabase.co";

const supabaseKey =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3eWhodnl6Zml1c2VkanVjd2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MDMxMTAsImV4cCI6MjAzMzQ3OTExMH0.yK0eYWlWaX6gap01K1LkGegTTtxkFJDm5caEQgUBHkg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

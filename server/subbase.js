
// import { createClient } from '@supabase/supabase-js'
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jqjdwkaoijkqrichkzaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxamR3a2FvaWprcXJpY2hremF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMDU0MDMsImV4cCI6MjAxODU4MTQwM30.weAT-Nuc1TazAPp8ixHci2wFjYGJvsYeBKAT91lxQq8'

const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase
module.exports = supabase;
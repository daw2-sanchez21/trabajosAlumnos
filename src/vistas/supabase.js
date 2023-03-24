import { createClient } from '@supabase/supabase-js'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZ25yZmRrdHBxdG1zcnlpY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2NDYsImV4cCI6MTk5Mjc1MjY0Nn0.elSJPfs8I0ClHECe-DCIOyN-JboW1dgQCufDF5_QRfA'
const supabaseUrl = 'https://ofgnrfdktpqtmsryicuz.supabase.co'
export const supabase = createClient(supabaseUrl, supabaseKey)

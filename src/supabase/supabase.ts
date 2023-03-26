import { createClient } from '@supabase/supabase-js'

const supabase_config : any = {
    url : import.meta.env.VITE_SUPABASE_URL,
    key : import.meta.env.VITE_SUPABASE_KEY
}

const supabase = createClient(supabase_config.url, supabase_config.key)

export default supabase
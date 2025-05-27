import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export const CurrentUserDebug = () => {
  const [username, setUsername] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()

      const userId = user?.id
      if (userId) {
        const { data, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', userId)
          .single()

        if (!error && data) {
          setUsername(data.username)
        }
      }

      setLoading(false)
    }

    fetchUser()
  }, [])

  if (loading) return <p>Loading user...</p>
  return <p>Logged in as: {username ?? 'Not logged in'}</p>
}

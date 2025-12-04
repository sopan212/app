import { supabase } from '../lib/supabase'

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) throw error
    return { user: data.user, session: data.session, error: null }
  } catch (error) {
    console.error('Error signing in:', error)
    return { user: null, session: null, error: error.message }
  }
}

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error signing out:', error)
    return { error: error.message }
  }
}

// Get current session
export const getSession = async () => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) throw error
    return { session, error: null }
  } catch (error) {
    console.error('Error getting session:', error)
    return { session: null, error: error.message }
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) throw error
    return { user, error: null }
  } catch (error) {
    console.error('Error getting user:', error)
    return { user: null, error: error.message }
  }
}

// Listen to auth state changes
export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback)
}

import { supabase } from '../lib/supabase'

// Get all books
export const getAllBooks = async () => {
  try {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

// Get single book by ID
export const getBookById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('books')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Error fetching book:', error)
    return null
  }
}

// Create new book
export const createBook = async (bookData) => {
  try {
    const { data, error } = await supabase
      .from('books')
      .insert([bookData])
      .select()
      .single()
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error creating book:', error)
    return { data: null, error: error.message }
  }
}

// Update book
export const updateBook = async (id, bookData) => {
  try {
    const { data, error } = await supabase
      .from('books')
      .update({ ...bookData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating book:', error)
    return { data: null, error: error.message }
  }
}

// Delete book
export const deleteBook = async (id) => {
  try {
    const { error } = await supabase
      .from('books')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error deleting book:', error)
    return { error: error.message }
  }
}

// Upload image to Supabase Storage
export const uploadBookImage = async (file) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { data, error } = await supabase.storage
      .from('book-covers')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('book-covers')
      .getPublicUrl(filePath)

    return { url: publicUrl, error: null }
  } catch (error) {
    console.error('Error uploading image:', error)
    return { url: null, error: error.message }
  }
}

// Delete image from Supabase Storage
export const deleteBookImage = async (imageUrl) => {
  try {
    // Extract file path from URL
    const urlParts = imageUrl.split('/book-covers/')
    if (urlParts.length < 2) return { error: null }
    
    const filePath = urlParts[1]

    const { error } = await supabase.storage
      .from('book-covers')
      .remove([filePath])

    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Error deleting image:', error)
    return { error: error.message }
  }
}

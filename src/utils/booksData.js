import DefaultData from "../Data"

// Function to get books data (from localStorage or default)
export const getBooksData = () => {
  if (typeof window !== 'undefined') {
    const savedBooks = localStorage.getItem("booksData")
    if (savedBooks) {
      return JSON.parse(savedBooks)
    }
  }
  return DefaultData
}

// Function to save books data to localStorage
export const saveBooksData = (books) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("booksData", JSON.stringify(books))
  }
}

// Function to reset to default data
export const resetToDefaultData = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("booksData")
  }
  return DefaultData
}

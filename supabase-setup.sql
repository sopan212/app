-- Create books table
CREATE TABLE IF NOT EXISTS books (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  judul TEXT NOT NULL,
  penulis TEXT NOT NULL,
  penerbit TEXT NOT NULL,
  halaman TEXT,
  ukuran TEXT,
  isbn TEXT NOT NULL,
  harga TEXT NOT NULL,
  image_url TEXT,
  deskripsi TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE books ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON books
  FOR SELECT
  TO public
  USING (true);

-- Create policy to allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON books
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create policy to allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON books
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON books
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for book images
INSERT INTO storage.buckets (id, name, public)
VALUES ('book-covers', 'book-covers', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy for storage bucket (public read)
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'book-covers');

-- Create policy for storage bucket (authenticated upload)
CREATE POLICY "Authenticated upload" ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'book-covers');

-- Create policy for storage bucket (authenticated delete)
CREATE POLICY "Authenticated delete" ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'book-covers');

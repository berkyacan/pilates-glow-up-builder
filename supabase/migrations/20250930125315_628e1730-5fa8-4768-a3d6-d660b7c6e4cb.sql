-- Create table for storing pilates lead form submissions
CREATE TABLE public.pilates_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  current_weight numeric NOT NULL,
  height numeric NOT NULL,
  goal_weight numeric NOT NULL,
  diet_preference text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.pilates_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a lead magnet form)
CREATE POLICY "Anyone can submit lead form"
  ON public.pilates_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow public read access (so you can view submissions)
CREATE POLICY "Anyone can view leads"
  ON public.pilates_leads
  FOR SELECT
  TO anon
  USING (true);

-- Create index for better performance
CREATE INDEX idx_pilates_leads_created_at ON public.pilates_leads(created_at DESC);
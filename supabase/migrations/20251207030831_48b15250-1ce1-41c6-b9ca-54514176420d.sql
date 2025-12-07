-- Fix the trigger to use correct email
CREATE OR REPLACE FUNCTION public.assign_admin_on_signup()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.email = 'admin@isaquesestudios.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
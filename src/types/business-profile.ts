export interface BusinessProfile {
  name: string;
  phone_primary: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  channels: string[];

  // Identificadores internos usados pelo painel novo/Supabase.
  company_id?: string;
  location_id?: string;
  user_id?: string;

  // Identificadores externos usados por integrações.
  external_id?: string;
  google_location_id?: string;
  google_place_id?: string;
  facebook_page_id?: string;

  phone_whatsapp?: string;
  website?: string;
  email?: string;
  description?: string;
  business_hours?: string;
  address_number?: string;
  address_complement?: string;
  address_neighborhood?: string;
  categories?: string[];
}

export interface ChannelResult {
  status: 'pending' | 'syncing' | 'success' | 'sent' | 'error';
  message?: string;
  statusCode?: number;
  durationMs?: number;
}

export interface SyncResponse {
  success: boolean;
  sync_id: string;
  timestamp: string;
  results: Record<string, ChannelResult>;
}

export type DirectorySubmissionType = 'api' | 'email' | 'form' | 'manual' | 'partner' | 'reference';

export interface DirectoryChannel {
  id: string;
  code: string;
  name: string;
  description?: string;
  icon?: string;
  is_active: boolean;
  requires_approval: boolean;
  categories: string[];

  // Metadados de diretório/integração. Podem vir nulos em bancos antigos.
  country?: string | null;
  region?: string | null;
  segment?: string | null;
  submission_type?: DirectorySubmissionType | string | null;
  email_to?: string | null;
  website_url?: string | null;
  api_available?: boolean | null;
  api_type?: string | null;
  requires_login?: boolean | null;
  requires_manual_review?: boolean | null;
  requires_paid_plan?: boolean | null;
  priority?: number | null;
  last_checked_at?: string | null;
  last_check_status?: 'active' | 'inactive' | 'warning' | 'unknown' | string | null;
  last_check_http_status?: number | null;
  last_check_message?: string | null;
  notes?: string | null;
}


export type BusinessType =
  | 'general'
  | 'restaurants'
  | 'healthcare'
  | 'real_estate'
  | 'services'
  | 'hotels';

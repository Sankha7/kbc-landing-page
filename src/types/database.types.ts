export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number;
          created_at: string;
          first_name: string;
          last_name: string;
          email: string;
          company: string;
          business_type: string;
          about: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          first_name: string;
          last_name: string;
          email: string;
          company: string;
          business_type: string;
          about: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          company?: string;
          business_type?: string;
          about?: string;
        };
      };
    };
  };
}

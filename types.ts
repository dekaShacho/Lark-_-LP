export interface StepData {
  title: string;
  subtitle: string;
  desc: string;
  point: string;
  icon: string;
}

export interface CaseStudy {
  name: string;
  role: string;
  industry: 'marketing' | 'consulting' | 'finance' | 'other';
  before: string;
  after: string;
  quote: string;
  youtubeId: string;
}

export interface PlanPrice {
  full: string;
  installment: string;
  fullRaw: number;
}

export interface Plan {
  name: string;
  target: string;
  price: PlanPrice;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonStyle: 'primary' | 'outline' | 'secondary';
  note?: string;
}

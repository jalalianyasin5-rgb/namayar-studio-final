import { Icon3DVariant } from '../components/ui/Icon3D';

export type ProductCategory =
  | 'all'
  | 'footwear'
  | 'home_decor';

export interface TeaserSceneBreakdown {
  timecode: string;
  title: string;
  description: string;
  technique: string;
}

export interface TeaserPortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProductCategory, 'all'>;
  categoryLabel: string;
  duration: string;
  aspectRatioLabel: string;
  aiCapabilities: string;
  summary: string;
  visualDirectionNotes: string;
  imageUrl: string;
  videoUrl: string;
  featured?: boolean;
  scenes: TeaserSceneBreakdown[];
}

export interface StudioServiceItem {
  id: string;
  index: string;
  icon: Icon3DVariant;
  title: string;
  subtitle: string;
  description: string;
  categoriesCovered: string;
  deliverables: string[];
  bentoSpan: 'large' | 'regular';
  imagePreview?: string;
}

export interface ProcessStepItem {
  id: string;
  stepNumber: string;
  icon: Icon3DVariant;
  title: string;
  subtitle: string;
  summary: string;
  deliverableOutcome: string;
  aiFocus: string;
}

export interface ProductDomainGroup {
  id: string;
  title: string;
  examples: string;
  icon: Icon3DVariant;
}

export interface PricingPlanItem {
  id: string;
  planLabel: string;
  title: string;
  price: string;
  currency: string;
  icon: Icon3DVariant;
  features: string[];
  featured?: boolean;
}

export interface MessagingChannelItem {
  id: 'bale' | 'eitaa';
  name: string;
  subtitle: string;
  icon: Icon3DVariant;
  url: string;
}


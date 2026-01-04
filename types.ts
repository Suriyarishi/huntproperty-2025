
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  tags: string[];
  description: string;
  category?: string;
  postedDate?: string;
  ownershipType?: string;
  locality?: string;
  isOwner?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface AIImageResponse {
  imageUrl?: string;
  text?: string;
}

export type AspectRatio = "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "9:16" | "16:9";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  text: string;
}

export interface Insight {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  content?: string; // Added content field
  author?: {
      name: string;
      avatar: string;
      role: string;
  }
}

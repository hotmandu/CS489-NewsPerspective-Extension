
export interface Article {
  title: string,
  content: string,
}

// This is taken from the backend code.
export interface ApiAnalyzeResult {
  status: 'success' | 'error';
  analysis: {
    bias_indicators: {
      extreme_language: string[];
      generalizations: string[];
      hedging: string[];
      opinion_statements: string[];
      unsubstantiated_claims: string[];
    };
    emotional_language: Array<{
      intensity: number; // Range: -1 to 1, where -1 is very negative, 1 is very positive
      text: string;
    }>;
    overall_bias_score: number; // Range: 0 to 4, where 0 is unbiased, 4 is extremely biased
    sentiment_scores: {
      compound: number;   // Range: -1 to 1, overall sentiment
      neg: number;        // Range: 0 to 1, proportion of negative sentiment
      neu: number;        // Range: 0 to 1, proportion of neutral sentiment
      pos: number;        // Range: 0 to 1, proportion of positive sentiment
    };
    subjectivity_score: number; // Range: 0 to 1, where 0 is objective, 1 is subjective
  };
  keywords: string[];
  political_analysis: {
    leaning: string;
    left_percentage: number;  // Range: 0 to 100
    right_percentage: number; // Range: 0 to 100
    evidence: {
      left_indicators: string[];
      right_indicators: string[];
    };
  };
  related_articles: Array<{
    author: string | null;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: string | null;
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string | null;
  }>;
}
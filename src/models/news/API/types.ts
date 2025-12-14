export type HighlightField = {
  matchLevel: 'none' | 'partial' | 'full';
  matchedWords: string[];
  value: string;
  fullyHighlighted?: boolean;
};

export type HighlightResult = {
  author?: HighlightField;
  title?: HighlightField;
  url?: HighlightField;
  story_text?: HighlightField;
  story_title?: HighlightField;
  story_url?: HighlightField;
  comment_text?: HighlightField;
  [key: string]: HighlightField | undefined;
};

export type HackerNew = {
  _highlightResult: HighlightResult;
  _tags: string[];

  author: string;
  created_at: string;
  created_at_i: number;
  objectID: string;
  updated_at: string;

  title?: string;
  url?: string;
  story_text?: string;
  story_id?: number;
  num_comments?: number;
  points?: number;

  comment_text?: string;
  parent_id?: number;
  story_title?: string;
  story_url?: string;
  children?: number[];
};

export type ProcessingTimings = {
  _request: {
    roundTrip: number;
  };
  afterFetch?: {
    format?: {
      total: number;
    };
    [key: string]: unknown;
  };
  fetch: {
    query: number;
    total: number;
  };
  total: number;
  [key: string]: unknown;
};

export type HackerNewsAPIType = {
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;

  hits: HackerNew[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimings;
  query: string;
  serverTimeMS: number;
};

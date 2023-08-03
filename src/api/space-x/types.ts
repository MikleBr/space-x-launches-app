export type GetLaunchesRequestBody = {
  sort?: {
    date_utc: 'asc' | 'desc';
  };
  page?: number;
  limit?: number;
};

type LaunchDoc = {
  id: string;
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string | null;
      launch: string | null;
      media: string | null;
      recovery: string | null;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string | null;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: [];
  details: string;
  crew: [];
  ships: string[];
  capsules: [];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: [
    {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: boolean;
      landing_type: string;
      landpad: string;
    }
  ];
};

export type GetLaunchesResponse = {
  docs: LaunchDoc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type GetLaunchResponse = LaunchDoc;

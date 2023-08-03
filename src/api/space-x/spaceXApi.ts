import {
  GetLaunchResponse,
  GetLaunchesRequestBody,
  GetLaunchesResponse,
} from './types';

const BASE_URL = 'https://api.spacexdata.com/v5';

export const spaceXApi = {
  getLaunches: async (
    body: GetLaunchesRequestBody
  ): Promise<GetLaunchesResponse> => {
    const response = await fetch(BASE_URL + '/launches/query', {
      method: 'POST',
      body: JSON.stringify({
        query: {
          date_utc: {
            $gte: '2015-01-01T00:00:00.000Z',
            $lte: '2020-01-01T00:00:00.000Z',
          },
        },
        options: body,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await response.json()) as unknown as GetLaunchesResponse;
  },
  getLaunch: async (id: string) => {
    try {
      const response = await fetch(`${BASE_URL}/launches/${id}`, {
        method: 'GET',
      });
      return response as unknown as GetLaunchResponse;
    } catch (error) {
      return error;
    }
  },
};

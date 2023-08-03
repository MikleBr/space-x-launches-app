import { useEffect, useState } from 'react';

import './App.css';
import { spaceXApi } from './api/space-x/spaceXApi';
import { GetLaunchesResponse } from './api/space-x/types';
import { LaunchCard } from './components/LaunchCard';
import { Pager } from './components/Pager';

function App() {
  const url = new URL(window.location.href);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(
    +(url.searchParams.get('page') || 1)
  );

  const [launchesData, setLaunchesData] = useState<GetLaunchesResponse | null>(
    null
  );

  useEffect(() => {
    url.searchParams.set('page', String(page));
    window.history.replaceState(null, '', url);

    if (isInitialLoading) {
      setLoading(true);
      setIsInitialLoading(false);
    }

    spaceXApi
      .getLaunches({
        limit: 9,
        page: page,
        sort: {
          date_utc: 'asc',
        },
      })
      .then(response => setLaunchesData(response))
      .catch(() => setError('Произошла ошибка при загрузке данных'))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <Pager
        className="mb-4"
        page={page}
        totalPages={launchesData?.totalPages}
        prevPage={launchesData?.prevPage}
        nextPage={launchesData?.nextPage}
        hasNextPage={launchesData?.hasNextPage}
        hasPrevPage={launchesData?.hasPrevPage}
        onPrevPage={page => setPage(page)}
        onNextPage={page => setPage(page)}
      />
      <div className="grid grid-cols-3 gap-4">
        {loading && <p>Загрузка....</p>}
        {!loading && error && <p>{error}</p>}
        {!loading &&
          launchesData?.docs.map(launch => (
            <LaunchCard
              key={launch.id}
              title={launch.name}
              description={launch.details}
              date={launch.date_utc}
            />
          ))}
        {!loading && launchesData?.docs.length === 0 && (
          <p>Список запусков пуст</p>
        )}
      </div>
    </div>
  );
}

export default App;

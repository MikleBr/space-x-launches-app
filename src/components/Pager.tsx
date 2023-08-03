type Props = {
  className?: string;
  page: number;
  totalPages?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
  onNextPage?: (nextPage: number) => void;
  onPrevPage?: (prevPage: number) => void;
};

export function Pager({
  className = '',
  page,
  totalPages,
  prevPage,
  nextPage,
  onPrevPage,
  onNextPage,
  hasPrevPage,
  hasNextPage,
}: Props) {
  return (
    <div className={`${className} flex items-center gap-4`}>
      <button
        type="button"
        disabled={!hasPrevPage || !prevPage}
        onClick={() =>
          hasPrevPage && prevPage ? onPrevPage?.(prevPage) : undefined
        }
        className="text-white"
      >
        Prev
      </button>
      <div className="text-white">
        {page}/{totalPages}
      </div>
      <button
        type="button"
        disabled={!hasNextPage || !nextPage}
        onClick={() =>
          hasNextPage && nextPage ? onNextPage?.(nextPage) : undefined
        }
        className="text-white"
      >
        Next
      </button>
    </div>
  );
}

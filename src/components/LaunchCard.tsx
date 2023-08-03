type Props = {
  title: string;
  description: string;
  date: string;
};

export function LaunchCard({ title, date, description }: Props) {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {});
  return (
    <div className="max-w-sm rounded flex flex-col hover:scale-105 transition-all items-start justify-between bg-white overflow-hidden shadow-lg">
      <div className="w-full px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-gray-700 text-base overflow-hidden text-ellipsis line-clamp-5">
          {description}
        </div>
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}

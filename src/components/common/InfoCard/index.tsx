interface InfoCardProps {
  title: string;
  date: number;
  count: number;
  Icon: React.FC;
  color: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  color,
  count,
  date,
  Icon,
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white px-7 py-5 shadow-info-card">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold" style={{ color }}>
          {title}
        </p>
        <p className="text-xs text-black">
          {date}
          {"روز گذشته"}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold text-black">
          {count.toLocaleString()}
        </p>
        <Icon />
      </div>
    </div>
  );
};

export default InfoCard;

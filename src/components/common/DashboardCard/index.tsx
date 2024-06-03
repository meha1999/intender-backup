interface DashboardCardProps {
  Icon?: React.ReactNode;
  label: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ Icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-black px-14 py-14 shadow-sm shadow-brand">
      {Icon}
      {label}
    </div>
  );
};

export default DashboardCard;

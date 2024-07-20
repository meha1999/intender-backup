interface DashboardCardProps {
  Icon?: React.ReactNode;
  label: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ Icon, label }) => {
  return (
    <div className="flex h-44 w-44 flex-col items-center justify-center rounded-3xl bg-black shadow-sm text-white shadow-brand">
      {Icon}
      {label}
    </div>
  );
};

export default DashboardCard;

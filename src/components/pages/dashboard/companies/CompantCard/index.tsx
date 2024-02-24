interface CompanyCardProps {
  id: string;
  name: string;
  desc: string;
  product: string;
}
const CompanyCard: React.FC<CompanyCardProps> = ({
  id,
  desc,
  name,
  product,
}) => {
  return <div>CompanyCard</div>;
};

export default CompanyCard;

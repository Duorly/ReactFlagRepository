import FlagList from "./FlagList";

interface FlagCardProps {
  searchTerm: string;
  selectedColors: string[];
}

function FlagCard({ searchTerm, selectedColors }: FlagCardProps) {
    return <>
        <FlagList searchTerm={searchTerm} selectedColors={selectedColors} />
    </>;
}
export default FlagCard;
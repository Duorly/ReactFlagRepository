import FlagList from "./FlagList";

interface FlagCardProps {
  searchTerm: string;
}

function FlagCard({ searchTerm }: FlagCardProps) {
    return <>
        <FlagList searchTerm={searchTerm} />
    </>;
}
export default FlagCard;
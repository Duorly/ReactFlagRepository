import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
  }

  return (
    <>
      <div className="relative grow flex items-center mb-4  ">
        <span className="left-3 top-1/2 -translate-y-1/2 absolute text-gray-400">
          <Search className="w-3 h-3" />
        </span>
        <input
          id="search"
          type="text"
          placeholder="Recherche un pays..."
          value={value}
          autoComplete="off"
          name="search"
          onChange={handleInputChange}
          className="pl-8 p-3 focus:shadow-lg focus:shadow-blue-500/10 text-gray-400 text-xs rounded-lg focus:ring-gray-500 w-full bg-white outline-none"
        />
      </div>
    </>
  );
}

export default SearchBar;
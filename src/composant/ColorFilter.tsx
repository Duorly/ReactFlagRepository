import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import SelectedColor from './SelectedColor';
import DeleteButton from './DeleteButton';
import { availableColors } from './constants/colors';

interface ColorFilterProps {
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
}

function ColorFilter({ selectedColors, onColorsChange }: ColorFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer la liste quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleColor = (colorValue: string): void => {
    if (selectedColors.includes(colorValue)) {
      onColorsChange(selectedColors.filter(c => c !== colorValue));
    } else {
      onColorsChange([...selectedColors, colorValue]);
    }
  };

  const clearSelection = (): void => {
    onColorsChange([]);
  };

  return (
    <div >
      <div className="relative w-50" ref={dropdownRef}>
        {/* Bouton principal */}
        <button
          className="bg-white p-4 rounded-lg shadow-md shadow-blue-500/10 w-50 flex items-center justify-between hover:bg-gray-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-gray-700">
            Couleurs {selectedColors.length > 0 && `(${selectedColors.length})`}
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Liste déroulante */}
        {isOpen && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <div className="p-2 max-h-64 overflow-y-auto">
              {availableColors.map((color) => (
                <div
                  key={color.value}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  onClick={() => toggleColor(color.value)}
                >
                  {/* Pastille de couleur */}
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  
                  {/* Nom de la couleur */}
                  <span className="flex-grow text-gray-700">{color.name}</span>
                  
                  {/* Icône de sélection */}
                  {selectedColors.includes(color.value) && (
                    <Check className="w-5 h-5 text-green-600" />
                  )}
                </div>
              ))}
            </div>

            {/* Bouton pour effacer la sélection */}
            <DeleteButton selectedColors={selectedColors} clearSelection={clearSelection} />
          </div>
        )}
      </div>

      {/* Affichage des couleurs sélectionnées */}
    <SelectedColor selectedColors={selectedColors} />
     
    </div>
  );
}

export default ColorFilter;
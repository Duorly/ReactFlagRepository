import { availableColors } from './constants/colors';

function SelectedColor({ selectedColors }: { selectedColors: string[] }) {
    return (
    <>
    {selectedColors.length > 0 && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Couleurs sélectionnées :
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedColors.map((colorValue: string) => {
              const color = availableColors.find((c) => c.value === colorValue);
              return color ? (
                <div
                  key={colorValue}
                  className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-sm text-gray-700">{color.name}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
        )}
    </>
    );
}

export default SelectedColor;
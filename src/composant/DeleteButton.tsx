interface DeleteButtonProps {
  selectedColors: string[];
  clearSelection: () => void;
}

function DeleteButton({ selectedColors, clearSelection }: DeleteButtonProps) {
    return <>
            {selectedColors.length > 0 && (
              <div className="border-t border-gray-200 p-2">
                <button
                  className="w-full text-sm text-red-600 hover:text-red-700 py-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelection();
                  }}
                >
                  Effacer
                </button>
              </div>
            )}
    </>
}

export default DeleteButton;
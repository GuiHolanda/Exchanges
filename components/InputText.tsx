import React from 'react';

export default function InputText({
  onInputChange,
}: {
  onInputChange: (text: string) => void;
}) {
  function handleInputChange(event: any) {
    if (onInputChange) {
      const filterText = event.currentTarget.value;
      onInputChange(filterText);
    }
  }

  return (
    <div>
      <input
        type="text"
        id="nameFilter"
        placeholder="Filtre por nome"
        onChange={handleInputChange}
        className="rounded-lg focus:border-none"
      />
    </div>
  );
}

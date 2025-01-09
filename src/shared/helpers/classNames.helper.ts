export const classNames = (baseClass: string, modifiers: { [key: string]: boolean | undefined }): string => {
  const modifierClasses = Object.keys(modifiers)
    .filter((key) => modifiers[key]) // Выбираем только активные модификаторы
    .join(' ');
  
  return `${baseClass} ${modifierClasses}`.trim();
};
export const separateAndSortByRating = (data, limit) => {
  const maleCategories = data.filter((category) => category.gender === "e");
  const femaleCategories = data.filter((category) => category.gender === "k");

  maleCategories.sort((a, b) => b.rating - a.rating);
  femaleCategories.sort((a, b) => b.rating - a.rating);

  return [
    limit ? maleCategories.slice(0, limit) : maleCategories,
    limit ? femaleCategories.slice(0, limit) : femaleCategories,
  ];
};

  export const turkishToEnglish = (str) => {
    const mapping = {
      'ç': 'c',
      'Ç': 'C',
      'ğ': 'g',
      'Ğ': 'G',
      'ı': 'i',
      'İ': 'I',
      'ö': 'o',
      'Ö': 'O',
      'ş': 's',
      'Ş': 'S',
      'ü': 'u',
      'Ü': 'U'
    };
  
    return str
      .replace(/[^a-zA-Z0-9]/g, (char) => mapping[char] || char)
      .toLowerCase();
  };
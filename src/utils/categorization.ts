const categoryKeywords: Record<string, string[]> = {
  Food: ['pizza', 'burger', 'restaurant', 'food', 'lunch', 'dinner', 'breakfast', 'cafe', 'coffee', 'meal', 'snack', 'grocery'],
  Travel: ['bus', 'taxi', 'uber', 'lyft', 'train', 'flight', 'gas', 'fuel', 'parking', 'metro', 'subway'],
  Bills: ['electricity', 'water', 'internet', 'phone', 'rent', 'utility', 'subscription', 'netflix', 'spotify'],
  Shopping: ['clothes', 'shoes', 'amazon', 'shopping', 'mall', 'store', 'retail'],
  Entertainment: ['movie', 'cinema', 'game', 'concert', 'show', 'theater', 'sports', 'gym'],
  Healthcare: ['doctor', 'hospital', 'medicine', 'pharmacy', 'health', 'clinic', 'dental'],
  Education: ['book', 'course', 'tuition', 'school', 'college', 'university', 'class'],
};

export const categorizeExpense = (title: string): string => {
  const lowerTitle = title.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerTitle.includes(keyword))) {
      return category;
    }
  }
  
  return 'Other';
};

export const categories = ['Food', 'Travel', 'Bills', 'Shopping', 'Entertainment', 'Healthcare', 'Education', 'Other'];

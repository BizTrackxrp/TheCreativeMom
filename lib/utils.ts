export function getCurrentDate(): string {
  return new Date().toLocaleDateString('en-US', { 
    day: 'numeric',
    month: 'long', 
    year: 'numeric' 
  });
}

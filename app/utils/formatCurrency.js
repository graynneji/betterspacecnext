export const formatCurrency = (amount) => {
  // Format the number with commas and decimal places
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  // Add the Naira symbol manually
  return `₦${formattedNumber}`;
};

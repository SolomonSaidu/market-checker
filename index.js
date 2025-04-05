// Logic for calculating the market days
const marketDays = ['Monday', 'Thursday']; // Market days in Lokoja

// Function to get the next market day
function getNextMarketDay() {
  const today = new Date();
  let nextMarketDay = new Date(today);
  
  // Loop through the days of the week to find the next market day
  while (true) {
    nextMarketDay.setDate(nextMarketDay.getDate() + 1);
    const dayName = nextMarketDay.toLocaleString('en-US', { weekday: 'long' });
    if (marketDays.includes(dayName)) {
      return nextMarketDay;
    }
  }
}

// Function to get the last market day
function getLastMarketDay() {
  const today = new Date();
  let lastMarketDay = new Date(today);
  
  // Loop through the days of the week to find the last market day
  while (true) {
    lastMarketDay.setDate(lastMarketDay.getDate() - 1);
    const dayName = lastMarketDay.toLocaleString('en-US', { weekday: 'long' });
    if (marketDays.includes(dayName)) {
      return lastMarketDay;
    }
  }
}

// Function to format date
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Function to update the page with market days
function updateMarketDays() {
  const nextMarketDay = getNextMarketDay();
  const lastMarketDay = getLastMarketDay();

  document.getElementById('next-market-day').textContent = formatDate(nextMarketDay);
  document.getElementById('last-market-day').textContent = formatDate(lastMarketDay);
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateMarketDays);

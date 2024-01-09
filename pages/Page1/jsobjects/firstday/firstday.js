export default {
    setDefaultDate() {
        // Get today's date
        const today = new Date();
        
        // Calculate the first day of the current month
        const firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // Calculate the first day of the last month
        const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);

        // Set the date in the format YYYY-MM-DD (adjust month + 1 as JavaScript months are zero-based)
        const lastMonthFirstDate = `${firstDayOfLastMonth.getFullYear()}-${(firstDayOfLastMonth.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-01`;

        return lastMonthFirstDate;
    }


	
}
export default {
    setDefaultDate() {
        // Get today's date
        const today = new Date();
        
        // Calculate the first day of the current month
        const firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // Calculate the last day of the last month
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

        // Set the date in the format YYYY-MM-DD (adjust month + 1 as JavaScript months are zero-based)
        const lastMonthLastDate = `${lastDayOfLastMonth.getFullYear()}-${(lastDayOfLastMonth.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${lastDayOfLastMonth.getDate()}`;

        return lastMonthLastDate;
    }


}
export default {
    setDefaultDate() {
        // Get today's date
        const today = new Date();
        
        // Subtract one day to get yesterday's date
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        // Set the date in the format YYYY-MM-DD
        const yesterdayDate = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${yesterday.getDate().toString().padStart(2, '0')}`;

        return yesterdayDate;
    }
}

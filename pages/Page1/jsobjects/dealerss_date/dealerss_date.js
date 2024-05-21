export default {
    setDefaultDate() {
        // Get today's date
        const today = new Date();

        // Calculate yesterday's date
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        // Calculate the last 7th day from the current date
        const last7thDay = new Date(today);
        last7thDay.setDate(today.getDate() - 7);

        // Set the dates in the format YYYY-MM-DD (adjust month + 1 as JavaScript months are zero-based)
        const yesterdayDate = `${yesterday.getFullYear()}-${(yesterday.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${yesterday.getDate()}`;

        const last7thDayDate = `${last7thDay.getFullYear()}-${(last7thDay.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${last7thDay.getDate()}`;

        return { yesterdayDate, last7thDayDate };
    }
}

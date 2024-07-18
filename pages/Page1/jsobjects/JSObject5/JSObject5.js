export default {
  loadQueries: async () => {
    await Query14.run();
    await Query15.run();
    if (Query14.data && Query15.data) {
      dealer_wise_lead.run({
        startDate: Query14.data,
        endDate: Query15.data
      });
    }
  }
}
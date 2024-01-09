export default {
  fetchData() {
    const inputData = Query1.data;

    const dates = [];
    const totalUsers = [];
    const newUsers = [];

    // Populate arrays with data
    inputData.forEach((item) => {
      dates.push(item.date);
      totalUsers.push(Number(item.total_users));
      newUsers.push(Number(item.new_users));
    });

    const transformedData = {
      dates: dates,
      total_users: totalUsers,
      new_users: newUsers
    };

    return transformedData;
  },
	option : {
  title: {
    text: 'Last Seven Days Trend'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Total Users','New Users']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '7%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: this.fetchData().dates
  },
  yAxis: {
    type: 'value'
		 // axisLabel: {
      // show: true // Set to true to display labels on the axis
      // // You can add more formatting options here if needed
    // }
		
  },
  series: [
    {
      name: 'New Users',
      type: 'line',
      // stack: 'Total',
      data: this.fetchData().new_users,
			label: {
      show: true,
       position: 'top' // You can adjust the position as needed
   }
    },
    {
      name: 'Total Users',
      type: 'line',
      // stack: 'Total',
      data: this.fetchData().total_users,
			label: {
      show: true,
       position: 'top' // You can adjust the position as needed
   }
    }
  ]
}
}
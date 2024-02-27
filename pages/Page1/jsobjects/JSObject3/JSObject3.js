export default {
  fetchData() {
    const inputData = Query1.data;

    const dates = [];
    const totalUsers = [];
    const newUsers = [];

    // Populate arrays with data
    inputData.forEach((item) => {
      dates.push(item.x);
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
  option: {
    title: {
      text: 'Last Seven Days Trend',
      left: 'center', // Center the title horizontally
      top: '0%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Total Users', 'New Users'],
      orient: 'vertical', // Set the orientation to vertical
      right: '5%', // Adjust the right distance as needed
      top: 'top'
    },
    grid: {
      left: '3%',
      right: '9%',
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
      name: 'Date',
      nameTextStyle: {
        fontSize: 20, // Adjust the font size for the x-axis title
        fontWeight: 'bold' // Make the x-axis title bold
      },
      data: this.fetchData().dates,
      axisLabel: {
        show: true,
        position: 'top',
        fontSize: 16,
        fontWeight: 'bold'
        // You can adjust the position as needed
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Count',
        nameTextStyle: {
          fontSize: 20, // Adjust the font size for the y-axis title
          fontWeight: 'bold' // Make the y-axis title bold
        },
        axisLabel: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold',
          position: 'insideLeft' // Place the title inside the left of the axis labels
          // You can adjust the position as needed
        }
      },
      {
        type: 'category',
        name: 'Category Axis',
        nameTextStyle: {
          fontSize: 20, // Adjust the font size for the y-axis title
          fontWeight: 'bold' // Make the y-axis title bold
        },
        axisLabel: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold',
          position: 'insideRight' // Place the title inside the right of the axis labels
          // You can adjust the position as needed
        },
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'] // Add your category data here
      }
    ],
    series: [
      {
        name: 'New Users',
        type: 'line',
        // stack: 'Total',
        data: this.fetchData().new_users,
        label: {
          show: true,
          position: 'top',
          fontSize: 16,
          fontWeight: 'bold'
          // You can adjust the position as needed
        }
      },
      {
        name: 'Total Users',
        type: 'line',
        // stack: 'Total',
        data: this.fetchData().total_users,
        label: {
          show: true,
          position: 'top',
          fontSize: 16,
          fontWeight: 'bold'
          // You can adjust the position as needed
        }
      }
    ]
  }
};

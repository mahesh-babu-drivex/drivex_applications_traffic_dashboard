export default {
  fetchData() {
    const inputData = last7days_buy.data;

    const dates = [];
    const daily_count = [];
   

    // Populate arrays with data
    inputData.forEach((item) => {
      dates.push(item.date);
      daily_count.push(Number(item.daily_count));
    });

    const transformedData = {
      date: dates,
      daily: daily_count
    };

    return transformedData;
  },
	option : {
  title: {
    text: 'Last Seven Days Trend',
     left: 'center', // Center the title horizontally
    top: '0%'

  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Inspections Count'],
		 orient: 'vertical', // Set the orientation to vertical
    right: '5%',        // Adjust the right distance as needed
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
		name:'Date',
		nameTextStyle: {
      fontSize: 20, // Adjust the font size for the x-axis title
      fontWeight: 'bold' // Make the x-axis title bold
    },
    data: this.fetchData().date,
				axisLabel: {
      show: true,
       position: 'top' ,
				fontSize:16,
				      fontWeight: 'bold' 
// You can adjust the position as needed
   }
  },
  yAxis: {
    type: 'value',
		name:'Count',
		nameTextStyle: {
      fontSize: 20, // Adjust the font size for the x-axis title
      fontWeight: 'bold' // Make the x-axis title bold
    },
				axisLabel: {
      show: true,
				fontSize:16,
				      fontWeight: 'bold' ,
					      position: 'insideLeft'// Place the title inside the left of the axis labels

// You can adjust the position as needed
   }
		 // axisLabel: {
      // show: true // Set to true to display labels on the axis
      // // You can add more formatting options here if needed
    // }
		
  },
  series: [
    {
      name: 'Inspections Count',
      type: 'line',
      // stack: 'Total',
      data: this.fetchData().daily,
					label: {
      show: true,
       position: 'top' ,
				fontSize:16,
				      fontWeight: 'bold' 
// You can adjust the position as needed
   }
    }
    
  ]
}
}
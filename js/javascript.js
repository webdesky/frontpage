// chart colors
var colors = ['#04def2','#00a0e9','#333333','#f3b180','#dc3545','#6c757d'];



$(function () {
    $( function() {
        $( ".datepicker" ).datepicker();
    } );
});


$(document).ready(function () {

    //your click code
    jQuery("#menutoggle").click(function(){

        if(jQuery("#menutoggle").hasClass("closebtn")){
            jQuery("#navsidebar").show(); 
            jQuery(this).removeClass("closebtn");
        }
        else{
            jQuery("#navsidebar").hide(); 
            jQuery(this).addClass("closebtn");
        }
    });


    /* bar chart */
    var chBar = document.getElementById("chBar");
    if (chBar) {
      new Chart(chBar, {
      type: 'bar',
      data: {
        labels: ["07-08", "07-09", "07-10", "07-11", "07-12", "07-13", "07-14"],
        datasets: [{
          data: [50, 100, 45, 80, 41, 82, 60],
          backgroundColor: colors[0]
        },
        {
          data: [100, 85, 90, 82, 85, 60, 62],
          backgroundColor: colors[1]
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 0.7
          }]
        }
      }
      });
    }

    /*Line Chat*/
    var chLine = document.getElementById("chLine");
    var chartData = {
      labels: ["","07-05", "07-10", "07-15", "07-20", "07-25", "07-30", ""],
      datasets: [{
        data: [20, 62, 20, 100, 5, 107, 40, 80],
        backgroundColor: 'transparent',
        borderColor: colors[3],
        borderWidth: 4,
        pointBackgroundColor: colors[0]
      }]
    };
    if (chLine) {
      new Chart(chLine, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true
      }
      });
    }

    /*Line Chat*/
    var chLine5 = document.getElementById("chLine5");
    var chartData5 = {
      labels: ["","2019-05", "", "2019-06", "", "2019-07", "", ""],
      datasets: [{
        data: [2, 6, 3, 8, 6, 8, 3, 12],
        backgroundColor: 'transparent',
        borderColor: colors[1],
        borderWidth: 4,
      }]
    };
    if (chLine5) {
      new Chart(chLine5, {
      type: 'line',
      data: chartData5,
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true
      }
      });
    }
});
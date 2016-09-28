jQuery(document).ready(function () {

  var body = jQuery('body');

  // upload file
  $(".images-upload").on("change", function() {
    var filenameUploaded = $("input[type=file]").val().split("\\").pop();
  
    $(".module-upload").append("<div class='alert-upload pull-left'>"+
      "<a href='#' class='close pull-right' data-dismiss='alert' aria-label='close'><i class='pull-right fa fa-close'></i></a>"+
      "<span class='name-file pull-left'>"+filenameUploaded+"</span>"+
    "</div>");
  });
  
  // fixed footer in bottom
  $(window).on("resize load", function(){
    var FooterHeight = $("#footer").outerHeight();   
    $("body").css({
      "padding-bottom" : FooterHeight
    });
  });

  // Isotop
  var isotopSelect = jQuery('body').find('.isotop-wrap');
  if (jQuery(isotopSelect).length > 0) {
    jQuery(isotopSelect).each(function () {
      jQuery(this).isotope({
        // options
        itemSelector: '.isotop-item'
      });
    });
  }

  // Toggle content
  jQuery('.title-content .button-toggle').click(function () {
    jQuery(this).parent().next().slideToggle("800");
    jQuery(this).toggleClass("active");
  });
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop()) {
      jQuery('#toTop').fadeIn();
    } else {
      jQuery('#toTop').fadeOut();
    }
  });

  // Back to top
  jQuery('#toTop').click(function () {
    jQuery('html, body').animate({scrollTop: 0}, 500);
  });

  // Select
  jQuery('.select-box').each(function () {
    jQuery(this).selectBox({
      topPositionCorrelation: 75
    });
  });

  // Gallery
  var gallery = body.find('.box-gallery');
  if (gallery.length > 0) {
    jQuery(gallery).each(function () {
      var gallery_thumb = jQuery(this).find('.box-gallery-thumb li'),
        gallery_image = jQuery(this).find('.gallery-image img');
      jQuery(gallery_thumb).click(function () {
        var data_image = jQuery(this).data('image');
        gallery_thumb.removeClass('active');
        jQuery(this).addClass('active');
        jQuery(gallery_image).attr('src', data_image);
      });
    });
  }

  // Fixed Header
  var tab_wrap = body.find('.lg-tab-content-wrap');
  if (tab_wrap.length > 0) {
    jQuery(tab_wrap).each(function () {
      var tab_title = jQuery(this).find('.lg-tab-title .tab-title-item'),
        tab_content = jQuery(this).find('.lg-tab-content .lg-tab-panel');
      jQuery(tab_title).click(function (e) {
        e.preventDefault();
        var data_content = jQuery(this).attr('href');
        jQuery(tab_title).removeClass('active');
        jQuery(tab_content).removeClass('active');
        jQuery(this).addClass('active');
        jQuery(this).closest('.lg-tab-content-wrap').find(data_content).addClass('active');
      });
    });
  }

  // Datepicker Jquery UI

  if ($(".datepicker").length > 0) {
    $(".datepicker").datepicker();
  }

  // Link-Category

  $(".legal-edit-category").on("click", "li", function () {
    $(".legal-edit-category li").removeClass("active");
    $(this).addClass("active");
  });
  if ($(".delete-image").length > 0) {
    $(".delete-image").click(function () {
      $(this).parent().remove();
    });
  }
  if ($(".carousel").length > 0) {
    $(".carousel").flickity({
      wrapAround: true
    });
  }

  // Hight Chart
  Highcharts.setOptions({
    colors: ['#2a8ce0']
  });
  jQuery('.lg-chart-1').highcharts({
    data: {
      table: 'datatable',
      switchRowsAndColumns: true
    },
    chart: {
      type: 'column',
    },
    title: {
      text: ''
    },
    exporting: false,
    legend: {
      enabled: false,
    },
    yAxis: {
      allowDecimals: false,
      lineWidth: 1,
      lineColor: '#d4d4d4',
      title: {
        text: ''
      },
      labels: {
        style: {"fontSize": "14px", "fontWeight": "bold", "color": "#212b39"},
      },
    },
    xAxis: {
      tickLength: 0,
      allowDecimals: true,
      offset: 15,
      lineWidth: 0,
      labels: {
        style: {"color": "#212b39", "fontWeight": "bold", "fontSize": "14px"}
      }
    },
    plotOptions: {
      series: {
        pointWidth: 30,
        borderRadius: 2,
      }
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderWidth: 0,
      shadow: false,
      borderRadius: 10,
      style: {
        color: "#fff"
      },
      formatter: function () {
        return '<span style="font-size: 14px;">' + this.series.name.toUpperCase() + '</span><br /><span style="font-size: 16px; font-weight: bold;">' + this.point.y + '</span>';
      }
    },
    credits: {
      enabled: false
    },
  });

  // Chart 2
  Highcharts.setOptions({
    colors: ['#dd6897', '#9450a3', '#51569b']
  });
  jQuery('.lg-chart-2').highcharts({
    data: {
      table: 'datatable-2',
      switchRowsAndColumns: true
    },
    chart: {
      type: 'column',
    },
    title: {
      text: ''
    },
    exporting: false,
    legend: {
      symbolHeight: 20,
      symbolWidth: 20,
      padding: 30,
      itemStyle: {"color": "#686868"},
    },
    yAxis: {
      allowDecimals: false,
      lineWidth: 1,
      lineColor: '#d4d4d4',
      title: {
        text: ''
      },
      labels: {
        style: {"fontSize": "14px", "fontWeight": "bold", "color": "#212b39"},
      },
    },
    xAxis: {
      tickLength: 0,
      allowDecimals: true,
      offset: 15,
      lineWidth: 0,
      labels: {
        style: {"color": "#212b39", "fontWeight": "bold", "fontSize": "14px"}
      }
    },
    plotOptions: {
      series: {
        pointWidth: 30,
        borderRadius: 2,
      }
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderWidth: 0,
      shadow: false,
      borderRadius: 10,
      style: {
        color: "#fff"
      },
      formatter: function () {
        return '<span style="font-size: 14px;">' + this.series.name.toUpperCase() + '</span><br /><span style="font-size: 16px; font-weight: bold;">' + this.point.y + '</span>';
      }
    },
    credits: {
      enabled: false
    },
  });

  // Chart 3
  Highcharts.setOptions({
    colors: ['#f15f4c', '#51569b']
  });
  jQuery('.lg-chart-3').highcharts({
    data: {
      table: 'datatable-3',
      switchRowsAndColumns: true
    },
    chart: {
      type: 'column',
    },
    title: {
      text: ''
    },
    exporting: false,
    legend: {
      symbolHeight: 20,
      symbolWidth: 20,
      padding: 30,
      itemStyle: {"color": "#686868"},
    },
    yAxis: {
      allowDecimals: false,
      lineWidth: 1,
      lineColor: '#d4d4d4',
      title: {
        text: ''
      },
      labels: {
        style: {"fontSize": "14px", "fontWeight": "bold", "color": "#212b39"},
      },
    },
    xAxis: {
      tickLength: 0,
      allowDecimals: true,
      offset: 15,
      lineWidth: 0,
      labels: {
        style: {"color": "#212b39", "fontWeight": "bold", "fontSize": "14px"}
      }
    },
    plotOptions: {
      series: {
        pointWidth: 30,
        borderRadius: 2,
      },
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderWidth: 0,
      shadow: false,
      borderRadius: 10,
      style: {
        color: "#fff"
      },
      formatter: function () {
        return '<span style="font-size: 14px;">' + this.series.name.toUpperCase() + '</span><br /><span style="font-size: 16px; font-weight: bold;">' + this.point.y + '</span>';
      }
    },
    credits: {
      enabled: false
    },
  });

  // Chart 4
  Highcharts.setOptions({
    colors: ['#f15f4c', '#51569b']
  });
  jQuery('.lg-chart-4').highcharts({
    data: {
      table: 'datatable-4',
      switchRowsAndColumns: true
    },
    chart: {
      type: 'column',
    },
    title: {
      text: ''
    },
    exporting: false,
    legend: {
      symbolHeight: 20,
      symbolWidth: 20,
      padding: 30,
      itemStyle: {"color": "#686868"},
    },
    yAxis: {
      allowDecimals: false,
      lineWidth: 1,
      lineColor: '#d4d4d4',
      title: {
        text: ''
      },
      labels: {
        style: {"fontSize": "14px", "fontWeight": "bold", "color": "#212b39"},
      },
    },
    xAxis: {
      tickLength: 0,
      allowDecimals: true,
      offset: 15,
      lineWidth: 0,
      labels: {
        style: {"color": "#212b39", "fontWeight": "bold", "fontSize": "14px"}
      }
    },
    plotOptions: {
      series: {
        pointWidth: 30,
        borderRadius: 2,
      }
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      borderWidth: 0,
      shadow: false,
      borderRadius: 10,
      style: {
        color: "#fff"
      },
      formatter: function () {
        return '<span style="font-size: 14px;">' + this.series.name.toUpperCase() + '</span><br /><span style="font-size: 16px; font-weight: bold;">' + this.point.y + '</span>';
      }
    },
    credits: {
      enabled: false
    },
  });
});

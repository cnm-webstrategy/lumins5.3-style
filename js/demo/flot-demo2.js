//Flot Pie Chart Devices
$(function() {

    var data = [{
        label: "iPhone",
        data: 21,
        color: "#dcddde",
    }, {
        label: "Samsung",
        data: 3,
        color: "#414042",
    }, {
        label: "Windows",
        data: 15,
        color: "#4f2460",
    }, {
        label: "Blackberry",
        data: 52,
        color: "#642673",
    }];

    var plotObj = $.plot($("#flot-pie-chart-devices"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Browsers
$(function() {

    var data = [{
        label: "Chrome",
        data: 21,
        color: "#dcddde",
    }, {
        label: "Firefox",
        data: 3,
        color: "#414042",
    }, {
        label: "IE",
        data: 15,
        color: "#4f2460",
    }, {
        label: "Safari",
        data: 52,
        color: "#642673",
    }];

    var plotObj = $.plot($("#flot-pie-chart-browsers"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Sources
$(function() {

    var data = [{
        label: "Client 1",
        data: 21,
        color: "#dcddde",
    }, {
        label: "Client 2",
        data: 3,
        color: "#414042",
    }, {
        label: "Client 3",
        data: 15,
        color: "#4f2460",
    }, {
        label: "Client 4",
        data: 52,
        color: "#642673",
    }];

    var plotObj = $.plot($("#flot-pie-chart-sources"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});


//Flot Pie Chart Carriers
$(function() {

    var data = [{
        label: "Carriers 1",
        data: 21,
        color: "#dcddde",
    }, {
        label: "Carriers 2",
        data: 3,
        color: "#414042",
    }, {
        label: "Carriers 3",
        data: 15,
        color: "#4f2460",
    }, {
        label: "Carriers 4",
        data: 52,
        color: "#642673",
    }];

    var plotObj = $.plot($("#flot-pie-chart-carriers"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Gender
$(function() {

    var data = [{
        label: "Male",
        data: 50,
        color: "#dcddde",
    },{
        label: "Female",
        data: 50,
        color: "#642673",
    }];

    var plotObj = $.plot($("#flot-pie-chart-gender"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Age groups
$(function() {

    var data = [{
        label: "18/24",
        data: 21,
        color: "#dcddde",
    }, {
        label: "24/34",
        data: 3,
        color: "#414042",
    }, {
        label: "35/44",
        data: 15,
        color: "#4f2460",
    }, {
        label: "45/54",
        data: 37,
        color: "#642673",
    }, {
        label: ">55",
        data: 15,
        color: "#4f2460",
    }];

    var plotObj = $.plot($("#flot-pie-chart-age-groups"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Spending power
$(function() {

    var data = [{
        label: "High",
        data: 20,
        color: "#dcddde",
    }, {
        label: "Medium",
        data: 40,
        color: "#642673",
    }, {
        label: "Low",
        data: 40,
        color: "#4f2460",
    }];

    var plotObj = $.plot($("#flot-pie-chart-spending-power"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart User type
$(function() {

    var data = [{
        label: "Business",
        data: 60,
        color: "#642673",
    }, {
        label: "Private",
        data: 40,
        color: "#4f2460",
    }];

    var plotObj = $.plot($("#flot-pie-chart-user-type"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});

//Flot Pie Chart Interest
$(function() {

    var data = [{
        label: "Auto",
        data: 21,
        color: "#dcddde",
    }, {
        label: "Sports",
        data: 3,
        color: "#414042",
    }, {
        label: "Health",
        data: 15,
        color: "#4f2460",
    }, {
        label: "Education",
        data: 37,
        color: "#642673",
    }, {
        label: "Other",
        data: 15,
        color: "#4f2460",
    }];

    var plotObj = $.plot($("#flot-pie-chart-interest"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});



// JavaScript Document
$(document).ready(function () {
	
	/* Determines where, in terms of screensize, Advanced Search Options button should appear */
	
	var breakpoint = 700;
	
    /* Appending Show Search Options */

    $('#pmmVehicleSearch .pmm-yui-t1 #yui-main + .yui-b').insertBefore('#pmmVehicleSearch .pmm-yui-t1 #yui-main');
    var advSrchToggleText = '<a id="advSrchToggle">Show Search Options</a>';
    $("div.searchBar").append(advSrchToggleText);
    $('#advSrchToggle').on('click', function () {
        if ($("#searchForm + div.yui-b").css("display") === "none") {
            $("#advSrchToggle").text('Hide Search Options');
        } else if ($("#searchForm + div.yui-b").css("display") === "block") {
            $("#advSrchToggle").text('Show Search Options');
        }
            $('#searchForm + div.yui-b').slideToggle("fast");
    });

    /* Hiding and Showing Advanced Search Options depending on viewport size */

    if ($(window).width() < breakpoint) {
        $("#advSrchToggle").show();
        $('#searchForm + div.yui-b').hide();
    } else if ($(window).width() > breakpoint) {
        $("#advSrchToggle").hide();
        $('#searchForm + div.yui-b').show();
    }

    $(window).resize(function () {

        if ($("#searchForm + div.yui-b").css("display") === "none") {
            $("#advSrchToggle").text('Show Search Options');
        } else if ($("#searchForm + div.yui-b").css("display") === "block") {
            $("#advSrchToggle").text('Hide Search Options');
        }

        if ($(window).width() > breakpoint) {
            $("#advSrchToggle").hide();
            $('#searchForm + div.yui-b').show();
        } else if ($(window).width() < breakpoint) {
            $("#advSrchToggle").show();
            $('#searchForm + div.yui-b').hide();
        }
    });

    /* Hiding Advanced Search Options when selecting inventory options (i.e. make, model, */
	
	 $(".refineLst a").on('click', function () {
        $('#searchForm + div.yui-b').hide();
		$("#advSrchToggle").text('Show Search Options');
    });
	
});
//
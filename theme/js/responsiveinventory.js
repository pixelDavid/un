

/* Determines where, in terms of screensize, Advanced Search Options button should appear */
var breakpoint = 767;
// The new "Show Search Options" cta 
var advSrchToggleText = '<a id="advSrchToggle">Show Search Options</a>';
// The new "Go To Details" cta (for vehicle details pages)
var viewDetails = '<a id="viewDetails" href="#details">Vehicle Details</a>';
// Details anchor string
var detailsAnchor = '<a name="details">&nbsp;</a>';
// Search Options Button Id
var searchOptionsBtn = '#advSrchToggle';
// Advanced Search HTML
var searchForm = '#searchForm + div.yui-b';
// Back to Top/CTA links
var backUp = "<div id='backup' style='width:100%; background-color:#000000; height:50px; line-height:48px; position:fixed; bottom:0px; left:0px; z-index:9999; display:none;'><a href='#r1' style='color:#ffffff; font-family:sans-serif; display:block; height:100%; width:100%; text-decoration:none;'>Back to Top</a></div>";
// Grabbing the image area
var ib = $('#pg-vspecs div.c1 #viewer');
// Grabbing the area the images should go into
var ib2 = $('#pg-vspecs .vehicle_pricing');

// This activates the Google Map on mobile after clicking it, eliminating issue where user would scroll until getting to map, and then be stuck scrolling the map itself instead of the actual page.
function mapClickActivate() {
$('.location_map .widget-header').click(function() {
	$(this).css('pointerEvents', 'none');
});
}

// Hijacking Overlay href to be regular link for mobile
function getOverlayLink() {
    var moreinfo = $('.c2 a.contact').attr('href');
    var linksplit = [];
    linksplit = moreinfo.split(',');
	//removing apostrophes at beginning and end
    linksplit[1] = linksplit[1].substring(1, linksplit[1].length - 1);
    $('.c2 a.contact').attr('href', linksplit[1]);
	$('.c2 a.contact').attr('target', '_blank');
}

// Bringing images to top for mobile viewport view
function imagesAtTop() {
    ib.show().insertBefore(ib2);
}

// show the Search Options button and hide the Advanced Search for smaller screens
function showSearchOptionsBtn() {
    $(searchOptionsBtn).show();
    $(searchForm).hide();
}

// hide the Search Options button and show the Advanced Search for bigger screens
function hideSearchOptionsBtn() {
    $(searchOptionsBtn).hide();
    $(searchForm).show();
}

// toggle the Search Options Title Name
function toggleSearchOptionsTitle() {
    if ($(searchForm).css("display") === "none") {
        $(searchOptionsBtn).text('Hide Search Options');
    } else {
        $(searchOptionsBtn).text('Show Search Options');
    }
}

// toggle the Search Options button on click
function toggleSearchOptions() {
    $(searchOptionsBtn).on('click', function () {
        toggleSearchOptionsTitle();
        $(searchForm).slideToggle("fast");
    });
}


// hide the Advanced Search
function hideAdvancedSearch() {
    $(searchForm).hide();
    $(searchOptionsBtn).text('Show Search Options');
}



function scrollTop() {
    window.scrollTo(0, $("#doNewSearch").offset().top);
}

// load a small slider for the mobile devices
function loadSmallSlider() {
    // remove the big slider
    //$('#viewer .viewer-tabs').remove();
    //$('#viewer .viewer-panes').remove();
    // get all the data for the small slider
    getSmallSliderData();
    // create the bxSlider
    createSmallSlider();
}

// get the data for the small slider
function getSmallSliderData() {
    // get the data from the viewer data role
    var pmVehicleViewerMedia = $('#viewer').data('media');
    if (!pmVehicleViewerMedia) {
        return;
    } else {
        addSmallSlider();
        // check for the Dealer Images
        if (pmVehicleViewerMedia.image.dealer.length > 0) {
            addImagestoSmallSlider(pmVehicleViewerMedia.image.dealer);
        }
        // check for the Studio Images
        if (pmVehicleViewerMedia.image.studio.length > 0) {
            addImagestoSmallSlider(pmVehicleViewerMedia.image.studio);
        }
        // check for the Manufacturer Images
        if (pmVehicleViewerMedia.image.oem.length > 0) {
            addImagestoSmallSlider(pmVehicleViewerMedia.image.oem);
        }
    }
}

// add the images to the small slider
function addImagestoSmallSlider(viewerData) {
    for (var i = 0; i < viewerData.length; i++) {
        $('.smallSlider').append('<li class="small-slider-image small-slider-image-' + i + '" data-img-num="' + i + '"><img src="' + viewerData[i] + '" /></li>');
    }
}

// create a <ul> for the small slider images
function addSmallSlider() {
    $('#r1').append("<ul class='smallSlider'></ul>");
}

// create the small slider 
function createSmallSlider() {
	if ( $("ul.smallSlider li.small-slider-image").length > 0 ) {
    $('.smallSlider').bxSlider({
        auto: false, // do not start automatically
        pager: false, // no page on the bottom
        adaptiveHeight: true
    });
	}
}

function clickHide() {
    /* Hiding Advanced Search Options when selecting inventory options (i.e. make, model, etc.) */
    $(".refineLst a").live('click', function () {
        hideAdvancedSearch();
        scrollTop();
    });

    $(".results-stats a").live('click', function () {
        hideAdvancedSearch();
        scrollTop();
    });
}

hideSearchOptionsBtn();
    /* Hiding and Showing Advanced Search Options depending on viewport size */
$(window).load(function() {
    if ($(window).width() < breakpoint) {
		mapClickActivate();
        $('#r1 .bx-wrapper').show();
		showSearchOptionsBtn();
        clickHide();
        getOverlayLink();
    } else if ($(window).width() > breakpoint) {
        $('#r1 .bx-wrapper').hide();
        hideSearchOptionsBtn();
    }
});

    $(window).resize(function () {
        if ($(window).width() > breakpoint) {
            $('#r1 .bx-wrapper').hide();
            hideSearchOptionsBtn();
        } else if ($(window).width() < breakpoint) {
            $(searchOptionsBtn).text('Show Search Options');
            $('#r1 .bx-wrapper').show();
            clickHide();
			showSearchOptionsBtn();
        }
    });

    /* Hiding and Showing Back to Top link */
    if ($(window).width() < breakpoint) if ($(this).scrollTop() < 800) {
        $('#backup').fadeOut();
    } else if ($(this).scrollTop() > 800) {
        $('#backup').fadeIn();
    }

    $(window).scroll(function () {

        if ($(this).scrollTop() < 800) {
            $('#backup').hide();
        } else if ($(this).scrollTop() > 800) {
            $('#backup').show();
			 
        }
    });
	


    // Place the Advance Search HTML before the Content
    $('#pmmVehicleSearch .pmm-yui-t1 #yui-main + .yui-b').insertBefore('#pmmVehicleSearch .pmm-yui-t1 #yui-main');
    /* Appending Show Search Options */
    $("div.searchBar").append(advSrchToggleText);
    $(".toolbar.nav").prepend(viewDetails);
    $(".vehicle_info_w_mpg").prepend(detailsAnchor);
    $("#pg-vspecs").append(backUp);
    toggleSearchOptions();
    loadSmallSlider();
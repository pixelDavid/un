/* Determines where, in terms of screensize, Advanced Search Options button should appear */	
var breakpoint = 700;
// The new "Show Search Options" cta 
var advSrchToggleText = '<a id="advSrchToggle">Show Search Options</a>';
// Search Options Button Id
var searchOptionsBtn = '#advSrchToggle';
// Advanced Search HTML
var searchForm = '#searchForm + div.yui-b';


// Grabbing the image area
var ib = $('#pg-vspecs div.c1 #viewer');
// Grabbing the area the images should go into
//var ib2 = $('.vsearch-results-price-list.vsrch_pricing');
var ib2 = $('#pg-vspecs .vehicle_pricing');

// Bringing images to top for mobile viewport view
function imagesAtTop() {
	ib.show().insertBefore(ib2);	
}

// show the Search Options button and hide the Advanced Search for smaller screens
function showSearchOptionsBtn()
{	
	$(searchOptionsBtn).show();	
    $(searchForm).hide();
}

// hide the Search Options button and show the Advanced Search for bigger screens
function hideSearchOptionsBtn()
{	
	$(searchOptionsBtn).hide();	
    $(searchForm).show();
}

// toggle the Search Options Title Name
function toggleSearchOptionsTitle()
{
	if ($(searchForm).css("display") === "none") {
		$(searchOptionsBtn).text('Hide Search Options');
    } 
	else {
    	$(searchOptionsBtn).text('Show Search Options');
    }
}

// toggle the Search Options button on click
function toggleSearchOptions()
{
	$(searchOptionsBtn).on('click', function () {
        toggleSearchOptionsTitle();
        $(searchForm).slideToggle("fast");
    });
}

// hide the Advanced Search
function hideAdvancedSearch()
{
	$(searchForm).hide();
	$(searchOptionsBtn).text('Show Search Options');
}

function scrollTop() {
	window.scrollTo(0,$("#doNewSearch").offset().top);
}

// reload the first slider modified for a small screen
function loadSmallSlider() {
	pmmViewer.firstSlider.stopAuto();
	pmmViewer.firstSlider.reloadSlider({
	    	autoControls: false,                 
            auto: false,   
            slideWidth: 0,                    
            minSlides: 1,                      
            maxSlides: 1,                       
            moveSlides: 0,                      
            slideMargin: 0                   
	});
}

$(document).ready(function () { 
	// Place the Advance Search HTML before the Content
    $('#pmmVehicleSearch .pmm-yui-t1 #yui-main + .yui-b').insertBefore('#pmmVehicleSearch .pmm-yui-t1 #yui-main');
	/* Appending Show Search Options */
    $("div.searchBar").append(advSrchToggleText);

	// toggle the Search Options
	toggleSearchOptions();    

    /* Hiding and Showing Advanced Search Options depending on viewport size */
    if ($(window).width() < breakpoint) {
        showSearchOptionsBtn();
		imagesAtTop();
    } else if ($(window).width() > breakpoint) {
        hideSearchOptionsBtn();
    }

    $(window).resize(function () {		
		if ($(window).width() > breakpoint) {
            hideSearchOptionsBtn();
			//ib.hide();
        } else if ($(window).width() < breakpoint) {
            showSearchOptionsBtn();
			$(searchOptionsBtn).text('Show Search Options');
			imagesAtTop();
        }		
    });

    /* Hiding Advanced Search Options when selecting inventory options (i.e. make, model, etc.) */	
	$(".refineLst a").live('click', function () {
    	hideAdvancedSearch();  
		scrollTop();
    });	
	
	$(".results-stats a").live('click',function() {
		scrollTop();
	});
});
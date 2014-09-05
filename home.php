<?php
$popup = false; 	
?>
{HTML:DOCTYPE}
<head>
<link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow' rel='stylesheet' type='text/css'>
{PG:TITLE}
{PG:META}
{CSS:INIT}
{JS:HEAD}
{CSS:XTRA}
<!-- Syntax Highlighter -->
<link rel="stylesheet" href="/usr/flexslider2/css/shCore.css"  type="text/css" />
<link rel="stylesheet" href="/usr/flexslider2/css/shThemeDefault.css"  type="text/css" />
<link rel="stylesheet" href="/usr/flexslider2/css/flexslider.css" type="text/css" media="screen" />
</head>
<body id="{PG:ID}" class="{PG:CLASS} hp" data-site='[[!pmmSiteData]]'>
<?php if($popup) {
	include(UP . DS . "/_tpl_blk/popup.tpl.blk.html");
	}
?>
{ADMIN:START}
<div id="pmm-doc-995"> <!-- Start: Wrapper -->
<div id="header"><a name="Top" id="Top"></a></div>
{PG:INC:HEADER}
{PG:INC:NAV}{ADMIN:FLASH:EDIT}
<div class="container_12">
<div class="grid_12">
{BANNER}
</div>
<div class="clear"></div>
<div class="grid_12 margBtm70">
<div class="flex-scroll">
<ul class="slides">
<li><a href="/vehicle/search/new/Nissan/versa/"><img src="/usr/image/versa.png" alt="Versa Hatchback" /></a></li>
<li><a href="/vehicle/search/new/Nissan/versa/"><img src="/usr/image/versa_sedan.png" alt="Versa Sedan" /></a></li>
<li><a href="/vehicle/search/new/Nissan/sentra/"><img src="/usr/image/sentra.png" alt="Sentra" /></a></li>
<li><a href="/vehicle/search/new/Nissan/altima/"><img src="/usr/image/altima_coupe.png" alt="Altima Coupe" /></a></li>
<li><a href="/vehicle/search/new/Nissan/versa/"><img src="/usr/image/altima_sedan.png" alt="Altima Sedan" /></a></li>
<li><a href="/vehicle/search/new/Nissan/altima/"><img src="/usr/image/Cube.png" alt="Cube" /></a></li>
<li><a href="/vehicle/search/new/Nissan/leaf/"><img src="/usr/image/leaf.png" alt="LEAF" /></a></li>
<li><a href="/vehicle/search/new/Nissan/370z/"><img src="/usr/image/z_coupe.png" alt="Z Coupe" /></a></li>
<li><a href="/vehicle/search/new/Nissan/370z/"><img src="/usr/image/z_roadster.png" alt="Z Roadster" /></a></li>
<li><a href="/vehicle/search/new/Nissan/gt-r/"><img src="/usr/image/gtr.png" alt="GT-R" /></a></li>
<li><a href="/vehicle/search/new/Nissan/juke/"><img src="/usr/image/juke.png" alt="Juke" /></a></li>
<li><a href="/vehicle/search/new/Nissan/rogue/"><img src="/usr/image/rogue.png" alt="Rogue" /></a></li>
<li><a href="/vehicle/search/new/Nissan/murano/"><img src="/usr/image/murano.png" alt="Murano" /></a></li>
<li><a href="/vehicle/search/new/Nissan/murano/"><img src="/usr/image/mcc.png" alt="Murano CrossCabriolet" /></a></li>
<li><a href="/vehicle/search/new/Nissan/xterra/"><img src="/usr/image/xterra.png" alt="Xterra" /></a></li>
<li><a href="/vehicle/search/new/Nissan/pathfinder/"><img src="/usr/image/pathfinder.png" alt="Pathfinder" /></a></li>
<li><a href="/vehicle/search/new/Nissan/armada/"><img src="/usr/image/armada.png" alt="Armada" /></a></li>
<li><a href="/vehicle/search/new/Nissan/quest/"><img src="/usr/image/quest.png" alt="Quest" /></a></li>
<li><a href="/vehicle/search/new/Nissan/frontier/"><img src="/usr/image/frontier.png" alt="Frontier" /></a></li>
<li><a href="/vehicle/search/new/Nissan/titan/"><img src="/usr/image/titan.png" alt="Titan" /></a></li>
<li><a href="/vehicle/search/new/?tags=commercial"><img src="/usr/image/nv.png" alt="NV Passenger" /></a></li>
<li><a href="/vehicle/search/new/?tags=commercial"><img src="/usr/image/nvl.png" alt="NV Lineup" /></a></li>
</ul>
<ul class="customnav">
<li id="cars">Cars</li>
<li id="electric">Electric Cars/Sports</li>
<li id="sports">Crossovers &amp; SUVs</li>
<li id="cross">Trucks</li>
<li id="vans">Commercial</li>
</ul>
</div>
</div>
<div class="clear"></div>
<div class="grid_6 new_vehicles">
<a href="/vehicle/search/new/">
<p>Get Started<br>
<span>New Vehicles</span></p>
<img src="/usr/theme/image/begin_your_search.png"/>
</a>
</div>
<div class="grid_6 preowned_vehicles">
<a href="/vehicle/search/preowned/">
<p>Search Our Wide Selection of<br><span>Pre-Owned Vehicles</span></p><img src="/usr/theme/image/begin_your_search.png"/></a>
</div>
<div class="clear"></div>
<br>
<div class="grid_8 slides-lower">
<ul class="bx-slides-lower">
<li><img src="/usr/flash/images/slides-lower/2013_versa_gasmiser_small.jpg" /></li>
<li><img src="/usr/flash/images/slides-lower/2013_sentra_gasmiser_small.jpg" /></li>
<li><img src="/usr/flash/images/slides-lower/one_to_one_small.jpg" /></li>
</ul>
</div>
<div class="grid_4 service">
<div class="service-inside"><a href="/request/appointment/"><p>Schedule a<br><span>Service Appointment</span></p></a>
</div>
<div class="parts-inside margin-btm5"><a href="/parts/accessories/"><p>Quick and Simple<br><span>Order Parts</span></p></a>
</div>
</div>
<div class="clear"></div>
<br>
<div class="grid_4 redbox">
<p><span class="font18 myriadpro">UNITED NISSAN</span><br>
3025 E. Sahara Avenue <br>
Las Vegas, NV 89104 </p>
<p>
<b>Sales:</b> {DLR:SALES:PHONE}<br>
<b>Service:</b>  {DLR:SERVICE:PHONE}<br>
<b>Parts:</b>  {DLR:PARTS:PHONE}</p>
<p><span>SALES DEPARTMENT</span><br>
Monday- Saturday: 8:30am - 10:00pm<br>
Sunday: Closed<br>
<a href="/dealership/location/">See other departments</a></p>
</div><div class="grid_8">[[pmGMap]] 
</div>
<div class="clear"></div>
<br>
<br>
<div class="grid_12 lineup">
<ul class="cars">
<li><span>Cars</span></li>
<li><a href="/vehicle/search/new/Nissan/versa/">Versa</a></li>
<li><a href="/vehicle/search/new/Nissan/cube/">cube</a></li>
<li><a href="/vehicle/search/new/Nissan/sentra/">Sentra</a></li>
<li><a href="/vehicle/search/new/Nissan/altima/">Altima Sedan</a></li>
<li><a href="/vehicle/search/new/Nissan/altima/">Altima Coupe</a></li>
<li><a href="/vehicle/search/new/Nissan/maxima/">Maxima</a></li>
</ul>
<ul class="cross-suv">
<li><span>Crossover / SUVs</span></li>
<li><a href="/vehicle/search/new/Nissan/juke/">Juke</a></li>
<li><a href="/vehicle/search/new/Nissan/rogue/">Rogue</a></li>
<li><a href="/vehicle/search/new/Nissan/murano/">Murano</a></li>
<li><a href="/vehicle/search/new/Nissan/xterra/">Xterra</a></li>
<li><a href="/vehicle/search/new/Nissan/pathfinder/">Pathfinder</a></li>
<li><a href="/vehicle/search/new/Nissan/armada/">Armada</a></li>
</ul>
<ul class="sports">
<li><span>Sports Cars</span></li>
<li><a href="/vehicle/search/new/Nissan/370z/">370z Convertible</a></li>
<li><a href="/vehicle/search/new/Nissan/370z/">370z Coupe</a></li>
<li><a href="/vehicle/search/new/Nissan/370z/">370z Nismo</a></li>
<li><a href="/vehicle/search/new/Nissan/gtr/">GT-R</a></li>
</ul>
<ul class="trucks">
<li><span>Trucks / Commercial</span></li>
<li><a href="/vehicle/search/new/Nissan/frontier/">Frontier</a></li>
<li><a href="/vehicle/search/new/Nissan/titan/">Titan</a></li>
<li><a href="/vehicle/search/new/?tags=commercial">NV</a></li>
</ul>
<ul class="minivans">
<li><span>Minivans</span></li>
<li><a href="/vehicle/search/new/Nissan/quest/">Quest</a></li>
</ul>
<ul class="electrics">
<li><span>Electric / Hybrids</span></li>
<li><a href="/vehicle/search/new/Nissan/leaf/">LEAF</a></li>
<li><a href="/vehicle/search/new/Nissan/altima/">Altima Hybrid</a></li>
</ul>
</div>
<div class="clear"></div>
<div class="grid_12 grey font10 hp_foot">
<div style="width:470px; float:left;"><p>3025 E. Sahara Avenue Las Vegas, NV 89104</p></div><div style="width:470px; float:left;"><a href="http://www.nissanusa.com" target="_blank"><img style="float:right;" src="/usr/theme/image/nissan_logo.png"></a></div>
</div>
<div class="clear"></div>
</div>
</div>
<div>
	<a class="overlayPMPlayer" href="//www.youtube.com/embed/q1G5UL-mlnY"> <img alt="Service A Video" src="/usr/theme/image/serviceSpecialThumb/thumb-service-special-a.jpg"> </a>
</div>
{PG:INC:FOOTER}
</div><!-- End: Wrapper -->
{ADMIN:END}
<!-- PMM:ContentID = <?php echo $cmsContentId; ?> -->
<!-- PMM:RenderAsTemplate -->
<!-- PMM:UseGlobalTemplate -->
{JS:INIT}
{JS:EXT}
<!--Presence aware chat button link for Homepage placement.-->
<a style="position:absolute; top:0px; right:0px;" onClick="javascript:window.open('http://dm5.contactatonce.com/CaoClientContainer.aspx?MerchantId=215160&amp;Providerid=8852&amp;PlacementId=1&amp;OriginationUrl='+encodeURIComponent(location.href),'','resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=no,status=no,height=400,width=600');return false;" href="#"><img onerror="this.height=0;this.width=0" src="http://dm5.contactatonce.com/getagentstatusimage.aspx?MerchantId=215160&amp;ProviderId=8852&amp;PlacementId=1" border="0" /></a>
</body>
</html>

// if you want the banner off, just comment out the file 
var alphaBanner = document.getElementsByTagName('BODY')[0];
alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is in alpha</h2><div class="container"><small><span class="alpha-label">Alpha</span>&nbsp;&nbsp; This is an experimental version of Canada.ca for public testing.</small></div></section>');
//Feedback form version
// alphaBanner.insertAdjacentHTML('afterbegin', '<section class="experimental alpha-top" role="banner"><h2 class="wb-inv">This webpage is alpha and is looking for feedback</h2><div class="container mrgn-tp-sm mrgn-bttm-sm"><small>Provide feedback for this prototype web page</small>&nbsp;&nbsp;<a href="https://craepmd.optimalworkshop.com/questions/b4r456f3/questions/before" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Feedback form<span class="wb-inv"> opens in new window</span></a></div></section >');

//Renders search disabled
$('#wb-srch-sub').attr("disabled", true);

//Seperate script to null all canada.ca links to a 404 page (including GC menu) and redirect some in menu
//$( ".gcweb-menu" ).on( "wb-ready.gcweb-menu", function( event ) {
	//$("a[href='https://www.canada.ca/en/services/taxes.html']").attr("href", "https://cra-proto.github.io/eol/services/taxes.html").addClass("prototype");
	//$("a[href='https://www.canada.ca/en/services/taxes/income-tax.html']").attr("href", "https://cra-proto.github.io/eol/services/income-tax/index.html").addClass("prototype");
	//$("a[href='https://www.canada.ca/en/services/finance/manage.html']").attr("href", "https://cra-proto.github.io/eol/services/finance/manage.html").addClass("prototype");
	//$(".gcweb-menu a:not(.prototype)").attr("href", "https://cra-proto.github.io/eol/validation/404.html");	
	//$("a[href*='canada.ca']").attr("href", "https://cra-proto.github.io/eol/validation/404.html");
	//$("a[href*='.gc.ca/']").attr("href", "https://cra-proto.github.io/eol/validation/404.html");
//});

//Remove visited link design from 404 pages
var visited_link_styling = "<style> a[href='https://cra-proto.github.io/eol/validation/404.html']:visited{ color:#284162; } </style>"; $('head').append( visited_link_styling );
//Hiding menu and search from navigation
//$(".gcweb-menu>.container, #wb-srch").addClass("hidden");



/*------------------------------------*/
// TEMPLATE CONTENT CONFIGURATION
/*------------------------------------*/

// SITE TITLE. USED IN NAVIGATION AND PAGE TITLE
pmgConfig.siteTitle = "Map Gallery";

// SITE HEADING. USED ON HOME PAGE
pmgConfig.siteHeading = "Maps of the Natural Resources Conservation Academy";

// SITE INTRO TEXT. USED ON HOME PAGE
pmgConfig.siteIntro = "Click on any map below to open it.";

/*------------------------------------*/
// NAVIGATION AREA LINKS
/*------------------------------------*/

pmgConfig.showNavLinks = false; // SHOW NAVIGATION LINKS. Set to false to not display links in the top banner.
pmgConfig.navLinks = [ // NAVIGATION LINKS. 
	// LINK 1
	{
		title: "Nav Item 1",
		url: 'map.html?webmap=31075fa2763f43bba0c2163814cc44aa'
	}, // COMMA
	// LINK 2
	{
		title: "Nav Item 2",
		url: 'map.html?webmap=e66bb5dac376457b9f721b083572712c'
	}
	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

/*------------------------------------*/
// SIDE BAR
/*------------------------------------*/

pmgConfig.rightSideLinksTitle = 'More Maps';
pmgConfig.showRightSideLinks = false; // SHOW LINKS ON RIGHT SIDE?
pmgConfig.rightLinks = [
	// LINK 1
	{
		title: "Los Angeles County Farmers' Markets",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=1f09a12504a046f68e311ad1a9eadca8'
	},
	// LINK 2
	{
		title: "California Shipwrecks",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=a182011915884ca987b217294c30f6c1'
	},
	// LINK 3
	{
		title: "Palm Springs, California, Places To Go",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=88b187a860934d8491bdff591d0b1e1a'
	},
	// LINK 4
	{
		title: "Yosemite National Park",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=83e5fde80c0e4f5f89eca416e73f8c17'
	},
	// LINK 5
	{
		title: "California Fire History and Population",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=e939b8ec4a56446c94cb728a1c06a4a4'
	},
	// LINK 6
	{
		title: "California Quakes & Faults",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=10697cfd56374c9fb48b1059a80f14b1'
	},
	// LINK 7
	{
		title: "Southern California Surf Spots",
		url: 'http://www.arcgis.com/home/webmap/viewer.html?webmap=9a313c7ffecc401991eff1c442458b12'
	}
	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

// CONTENT ABOVE LINKS

pmgConfig.rightHeading = "Your Content";
pmgConfig.rightContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis dapibus odio a gravida. Proin orci libero, laoreet nec blandit nec, placerat non massa. Suspendisse nunc turpis, imperdiet id consequat vel, ornare eu lectus. In sit amet blandit justo.";

// ADDITIONAL CONTENT. BELOW LINKS

//EW pmgConfig.rightHeading2 = "Other"; // REMOVE TO NOT SHOW
//EW pmgConfig.rightContent2 = "Mauris suscipit dignissim elit vel eleifend."; // REMOVE TO NOT SHOW

/*------------------------------------*/
// BOTTOM FOOTER
/*------------------------------------*/

// FOOTER TITLE
pmgConfig.footerHeading = ""; // FOOTER TITLE

// FOOTER DESCRIPTION
pmgConfig.footerDescription = ""; // FOOTER TEXT

// FOOTER LOGO
pmgConfig.footerLogo = ''; // 200 pixels wide x 85 pixels high. Will scale if bigger.
 pmgConfig.footerLogoURL = ''; // URL to go to when the logo is clicked

// FOOTER EMAIL
pmgConfig.footerEmail = ''; // YOUR EMAIL
pmgConfig.footerEmailSubject = "";
pmgConfig.footerEmailBody = "";

// END

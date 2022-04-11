/*------------------------------------*/
// OPTIONAL CONFIGURATION
/*------------------------------------*/

// THEME OF THE TEMPLATE. 
// for your own style, you can modify "/styles/themes.css" and set values at the bottom for custom and then set this theme to 'custom'.
pmgConfig.theme = 'greenPMG'; // Theme values: 'redPMG', 'bluePMG', 'greenPMG', 'custom'. Default: 'redPMG'.

// DEFAULT LAYOUT MODE. values: 'grid' or 'list'. Default: 'grid'.
pmgConfig.defaultLayout = "grid";

// FIELD TO ORDER YOUR GROUP BY
pmgConfig.sortField = 'avgRating'; // SORTING COLUMN= The allowed field names are title, uploaded, type, owner, avgRating, numRatings, numComments and numViews. Default: 'uploaded'.

// ORDER WEBMAPS ARE DISPLAYED IN YOUR GROUP
pmgConfig.sortOrder = 'desc'; // SORTING ORDER: Values: 'asc' or 'desc'. Default: 'desc'.

// CHANGES THE MAP VIEWER TO USE 'simple' (map.html), 'explorer' (ArcGIS Explorer) or 'arcgis' (ArcGIS Javascript)
pmgConfig.mapViewer = 'simple'; // values: 'simple', 'explorer' or 'arcgis'. default: 'simple'.

// HOW MANY THUMBNAILS TO DISPLAY PER PAGE
pmgConfig.galleryPerPage = 9; // ONLY CHANGE IF YOU CAN CHANGE CSS AS WELL. Default: 9.

// HOW MANY ROWS PER PAGE
pmgConfig.galleryPerRow = 3; // ONLY CHANGE IF YOU CAN CHANGE CSS AS WELL Default: 3.

// SHOW BASEMAP GALLERY DIJIT. Default: true.
pmgConfig.showBasemapGallery = true;

// SHOW GROUP SEARCH. Default: true.
pmgConfig.showGroupSearch = true;

// ALLOW EMBEDDING OF MAPS FROM YOUR TEMPLATE. Default: true.
pmgConfig.showEmbedButton = true;

// SHOW LAYER TOGGLE IN ABOUT TAB ON MAP. Default: true.
pmgConfig.showLayerToggle = true;

// SHOW LAYOUT CHANGER. Default: true.
pmgConfig.showLayoutSwitch = true;

// SHOW OVERVIEW MAP. Default: true.
pmgConfig.showOverviewMap = true;

// SHOW MORE INFO UNDER ABOUT ON MAP.HTML PAGE. Default: true.
pmgConfig.showMoreInfo = true;

// USE ARCGIS iOS APP LINKS FOR USERS ON iOS DEVICES. Default: false.
pmgConfig.mobileAppLink = true;

// SHOW PAGINATION LINKS. Default: true.
pmgConfig.showPagination = true;

/*------------------------------------*/
// ADVANCED CONFIGURATION
/*------------------------------------*/

// IOS APP URL
pmgConfig.iosAppURL = "itms://itunes.apple.com/us/app/arcgis/id379687930?mt=8";

// ADDRESS LOCATOR URL
pmgConfig.locatorURL = 'http://tasks.arcgis.com/ArcGIS/rest/services/WorldLocator/GeocodeServer';

// ARCGIS PORTAL URL
pmgConfig.arcgisPortalURL = 'http://www.arcgis.com/';
pmgConfig.arcgisURL = pmgConfig.arcgisPortalURL + 'sharing/content/items';

// ARCGIS MOBILE CONTENT URL
pmgConfig.mobileArcgisURL = 'arcgis://www.arcgis.com/';

// PROXY URL
pmgConfig.proxyURL = '';

// Enter a title, if no title is specified, the webmap's title is used. This is used to override map titles. Default: ''.
pmgConfig.title = "";

//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used. This is used to override the maps subtitle. Default: ''.
pmgConfig.subtitle = "";

//By default the application will display the map's description in the sidebar. To define custom content set this value to custom. This will override the map's about info. Default: ''.
pmgConfig.sidebarContent = "";

// END
var title         = 'Dag 12 t_m 13';
var intro         = '';
var footer        = '© 2008 - Powered by Porta';
var nbImages      = 61;
var smallDir      = 'small';
var mediumDir     = 'medium';
var largeDir      = 'large';
var smallImages   = 1;
var largeImages   = 0;
var currentImage  = 0;
var imageFilename = new Array( '0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg', '0005.jpg', '0006.jpg', '0007.jpg', '0008.jpg', '0009.jpg', '0010.jpg', '0011.jpg', '0012.jpg', '0013.jpg', '0014.jpg', '0015.jpg', '0016.jpg', '0017.jpg', '0018.jpg', '0019.jpg', '0020.jpg', '0021.jpg', '0022.jpg', '0023.jpg', '0024.jpg', '0025.jpg', '0026.jpg', '0027.jpg', '0028.jpg', '0029.jpg', '0030.jpg', '0031.jpg', '0032.jpg', '0033.jpg', '0034.jpg', '0035.jpg', '0036.jpg', '0037.jpg', '0038.jpg', '0039.jpg', '0040.jpg', '0041.jpg', '0042.jpg', '0043.jpg', '0044.jpg', '0045.jpg', '0046.jpg', '0047.jpg', '0048.jpg', '0049.jpg', '0050.jpg', '0051.jpg', '0052.jpg', '0053.jpg', '0054.jpg', '0055.jpg', '0056.jpg', '0057.jpg', '0058.jpg', '0059.jpg', '0060.jpg', '0061.jpg' );
var smallWidth    = new Array( 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65 );
var smallHeight   = new Array( 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65 );
var minSmallW     = 65;
var minSmallH     = 65;
var maxSmallW     = 65;
var maxSmallH     = 65;
var mediumWidth   = new Array( 800, 800, 800, 536, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 536, 536, 800, 800, 800, 800, 536, 800, 800, 536, 800, 536, 800, 800, 800, 536, 800, 536, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800, 800 );
var mediumHeight  = new Array( 536, 536, 536, 800, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 800, 800, 536, 536, 536, 536, 800, 536, 536, 800, 536, 800, 536, 536, 536, 800, 536, 800, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536, 536 );
var minMediumW    = 536;
var minMediumH    = 536;
var maxMediumW    = 800;
var maxMediumH    = 800;
var majorCaption  = new Array( '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' );
var minorCaption  = new Array( '1/320 s, f/6.3, 200 mm', '1/40 s, f/6.3, 18 mm', '1/40 s, f/7.1, 18 mm', '1/125 s, f/5.6, 80 mm', '1/60 s, f/9, 18 mm', '1/320 s, f/6.3, 200 mm', '1/80 s, f/5.6, 70 mm', '1/50 s, f/4.5, 26 mm', '1/60 s, f/6.3, 160 mm', '1/160 s, f/5.6, 105 mm', '1/30 s, f/4, 18 mm', '1/40 s, f/4, 18 mm', '1/80 s, f/9, 24 mm', '1/125 s, f/8, 28 mm', '1/80 s, f/11, 30 mm', '1/100 s, f/8, 28 mm', '1/60 s, f/11, 18 mm', '1/60 s, f/11, 18 mm', '1/125 s, f/8, 70 mm', '1/80 s, f/10, 35 mm', '1/100 s, f/5, 60 mm', '1/100 s, f/8, 50 mm', '1/80 s, f/11, 18 mm', '1/125 s, f/5.6, 75 mm', '1/100 s, f/10, 28 mm', '1/160 s, f/9, 26 mm', '1/200 s, f/6.3, 130 mm', '1/160 s, f/10, 18 mm', '1/160 s, f/7.1, 40 mm', '1/60 s, f/11, 18 mm', '1/80 s, f/6.3, 40 mm', '1/320 s, f/6.3, 200 mm', '1/80 s, f/10, 18 mm', '1/80 s, f/11, 24 mm', '1/100 s, f/7.1, 50 mm', '1/80 s, f/11, 28 mm', '1/250 s, f/13, 50 mm', '1/100 s, f/10, 18 mm', '1/125 s, f/7.1, 60 mm', '1/160 s, f/11, 70 mm', '1/50 s, f/6.3, 24 mm', '1/160 s, f/9, 80 mm', '1/200 s, f/8, 28 mm', '1/125 s, f/7.1, 70 mm', '1/60 s, f/7.1, 24 mm', '1/60 s, f/5.6, 35 mm', '1/160 s, f/11, 26 mm', '1/80 s, f/11, 18 mm', '1/100 s, f/11, 18 mm', '1/100 s, f/11, 28 mm', '1/100 s, f/11, 18 mm', '1/125 s, f/10, 18 mm', '1/320 s, f/6.3, 200 mm', '1/320 s, f/9, 28 mm', '1/80 s, f/13, 35 mm', '1/200 s, f/11, 100 mm', '1/60 s, f/10, 18 mm', '1/40 s, f/7.1, 18 mm', '1/160 s, f/10, 20 mm', '1/50 s, f/8, 18 mm', '1/60 s, f/6.3, 24 mm' );
var smallPos      = 'top';
var clinks_href   = new Array();
var clinks_txt    = new Array();
var slink_href    = '';
var slink_txt     = '';

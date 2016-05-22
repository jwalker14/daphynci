/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */


window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Metrize-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-yen' : '&#xe000;',
			'icon-world' : '&#xe001;',
			'icon-wireframe-globe' : '&#xe002;',
			'icon-wind' : '&#xe003;',
			'icon-wifi' : '&#xe004;',
			'icon-waves' : '&#xe005;',
			'icon-viewport' : '&#xe006;',
			'icon-viewport-video' : '&#xe007;',
			'icon-user' : '&#xe008;',
			'icon-user-remove' : '&#xe009;',
			'icon-user-ban' : '&#xe00a;',
			'icon-user-add' : '&#xe00b;',
			'icon-upload' : '&#xe00c;',
			'icon-upload-selection' : '&#xe00d;',
			'icon-upload-selection-circle' : '&#xe00e;',
			'icon-underline' : '&#xe00f;',
			'icon-triple-points' : '&#xe010;',
			'icon-top-bottom' : '&#xe011;',
			'icon-three-points' : '&#xe012;',
			'icon-three-points-top' : '&#xe013;',
			'icon-three-points-bottom' : '&#xe014;',
			'icon-text-width' : '&#xe015;',
			'icon-text-size-upper' : '&#xe016;',
			'icon-text-size-reduce' : '&#xe017;',
			'icon-text-paragraph' : '&#xe018;',
			'icon-text-normal' : '&#xe019;',
			'icon-text-justify-right' : '&#xe01a;',
			'icon-text-justify-left' : '&#xe01b;',
			'icon-text-justify-center' : '&#xe01c;',
			'icon-text-height' : '&#xe01d;',
			'icon-text-center' : '&#xe01e;',
			'icon-text-bold' : '&#xe01f;',
			'icon-text-align-right' : '&#xe020;',
			'icon-text-align-left' : '&#xe021;',
			'icon-telephone' : '&#xe022;',
			'icon-sunshine' : '&#xe023;',
			'icon-sun' : '&#xe024;',
			'icon-stop' : '&#xe025;',
			'icon-star' : '&#xe026;',
			'icon-speed' : '&#xe027;',
			'icon-sound-on' : '&#xe028;',
			'icon-sound-off' : '&#xe029;',
			'icon-sos' : '&#xe02a;',
			'icon-social-zerply' : '&#xe02b;',
			'icon-social-youtube' : '&#xe02c;',
			'icon-social-yelp' : '&#xe02d;',
			'icon-social-yahoo' : '&#xe02e;',
			'icon-social-wordpress' : '&#xe02f;',
			'icon-social-virb' : '&#xe030;',
			'icon-social-vimeo' : '&#xe031;',
			'icon-social-viddler' : '&#xe032;',
			'icon-social-twitter' : '&#xe033;',
			'icon-social-tumblr' : '&#xe034;',
			'icon-social-stumbleupon' : '&#xe035;',
			'icon-social-soundcloud' : '&#xe036;',
			'icon-social-skype' : '&#xe037;',
			'icon-social-sharethis' : '&#xe038;',
			'icon-social-quora' : '&#xe039;',
			'icon-social-pinterest' : '&#xe03a;',
			'icon-social-photobucket' : '&#xe03b;',
			'icon-social-paypal' : '&#xe03c;',
			'icon-social-myspace' : '&#xe03d;',
			'icon-social-linkedin' : '&#xe03e;',
			'icon-social-last-fm' : '&#xe03f;',
			'icon-social-grooveshark' : '&#xe040;',
			'icon-social-google-plus' : '&#xe041;',
			'icon-social-github' : '&#xe042;',
			'icon-social-forrst' : '&#xe043;',
			'icon-social-flickr' : '&#xe044;',
			'icon-social-facebook' : '&#xe045;',
			'icon-social-evernote' : '&#xe046;',
			'icon-social-envato' : '&#xe047;',
			'icon-social-email' : '&#xe048;',
			'icon-social-dribbble' : '&#xe049;',
			'icon-social-digg' : '&#xe04a;',
			'icon-social-deviantart' : '&#xe04b;',
			'icon-social-blogger' : '&#xe04c;',
			'icon-social-behance' : '&#xe04d;',
			'icon-social-bebo' : '&#xe04e;',
			'icon-social-addthis' : '&#xe04f;',
			'icon-social-500px' : '&#xe050;',
			'icon-snow' : '&#xe051;',
			'icon-sliders' : '&#xe052;',
			'icon-sliders-vertical' : '&#xe053;',
			'icon-sign-male' : '&#xe054;',
			'icon-sign-female' : '&#xe055;',
			'icon-shield' : '&#xe056;',
			'icon-settings' : '&#xe057;',
			'icon-setting' : '&#xe058;',
			'icon-select-square' : '&#xe059;',
			'icon-select-circle' : '&#xe05a;',
			'icon-search' : '&#xe05b;',
			'icon-scale' : '&#xe05c;',
			'icon-rules' : '&#xe05d;',
			'icon-rss' : '&#xe05e;',
			'icon-retweet' : '&#xe05f;',
			'icon-report-comment' : '&#xe060;',
			'icon-refresh' : '&#xe061;',
			'icon-rec' : '&#xe062;',
			'icon-random' : '&#xe063;',
			'icon-quote' : '&#xe064;',
			'icon-question' : '&#xe065;',
			'icon-previous-fast-step' : '&#xe066;',
			'icon-prev-step' : '&#xe067;',
			'icon-pounds' : '&#xe068;',
			'icon-podcast' : '&#xe069;',
			'icon-plus' : '&#xe06a;',
			'icon-play' : '&#xe06b;',
			'icon-pin' : '&#xe06c;',
			'icon-pin-map' : '&#xe06d;',
			'icon-pig-money' : '&#xe06e;',
			'icon-pause' : '&#xe06f;',
			'icon-paperclip' : '&#xe070;',
			'icon-paperclip-oblique' : '&#xe071;',
			'icon-options-settings' : '&#xe072;',
			'icon-officine' : '&#xe073;',
			'icon-officine-2' : '&#xe074;',
			'icon-off' : '&#xe075;',
			'icon-number-zero' : '&#xe076;',
			'icon-number-two' : '&#xe077;',
			'icon-number-three' : '&#xe078;',
			'icon-number-six' : '&#xe079;',
			'icon-number-seven' : '&#xe07a;',
			'icon-number-one' : '&#xe07b;',
			'icon-number-nine' : '&#xe07c;',
			'icon-number-four' : '&#xe07d;',
			'icon-number-five' : '&#xe07e;',
			'icon-number-eight' : '&#xe07f;',
			'icon-next-step' : '&#xe080;',
			'icon-next-fast-step' : '&#xe081;',
			'icon-music' : '&#xe082;',
			'icon-multi-borders' : '&#xe083;',
			'icon-minus' : '&#xe084;',
			'icon-marker' : '&#xe085;',
			'icon-marker-points' : '&#xe086;',
			'icon-marker-minus' : '&#xe087;',
			'icon-marker-add' : '&#xe088;',
			'icon-map' : '&#xe089;',
			'icon-male-symbol' : '&#xe08a;',
			'icon-mailbox' : '&#xe08b;',
			'icon-mail' : '&#xe08c;',
			'icon-magnet' : '&#xe08d;',
			'icon-magic-wand' : '&#xe08e;',
			'icon-login-lock-refresh' : '&#xe08f;',
			'icon-locked' : '&#xe090;',
			'icon-location' : '&#xe091;',
			'icon-location-maps' : '&#xe092;',
			'icon-list-square' : '&#xe093;',
			'icon-list-circle' : '&#xe094;',
			'icon-link-url' : '&#xe095;',
			'icon-line-through' : '&#xe096;',
			'icon-limit-directions' : '&#xe097;',
			'icon-like-upload' : '&#xe098;',
			'icon-like-remove' : '&#xe099;',
			'icon-like-download' : '&#xe09a;',
			'icon-like-close' : '&#xe09b;',
			'icon-like-ban' : '&#xe09c;',
			'icon-like-add' : '&#xe09d;',
			'icon-left-right' : '&#xe09e;',
			'icon-leaf' : '&#xe09f;',
			'icon-layers' : '&#xe0a0;',
			'icon-landscape' : '&#xe0a1;',
			'icon-key' : '&#xe0a2;',
			'icon-italic' : '&#xe0a3;',
			'icon-info' : '&#xe0a4;',
			'icon-idea' : '&#xe0a5;',
			'icon-home-wifi' : '&#xe0a6;',
			'icon-heart' : '&#xe0a7;',
			'icon-hdd' : '&#xe0a8;',
			'icon-hdd-raid' : '&#xe0a9;',
			'icon-hdd-net' : '&#xe0aa;',
			'icon-grids' : '&#xe0ab;',
			'icon-grid-big' : '&#xe0ac;',
			'icon-graphs' : '&#xe0ad;',
			'icon-forward' : '&#xe0ae;',
			'icon-fire' : '&#xe0af;',
			'icon-female-symbol' : '&#xe0b0;',
			'icon-eye' : '&#xe0b1;',
			'icon-eye-disabled' : '&#xe0b2;',
			'icon-expand' : '&#xe0b3;',
			'icon-expand-vertical' : '&#xe0b4;',
			'icon-expand-horizontal' : '&#xe0b5;',
			'icon-expand-directions' : '&#xe0b6;',
			'icon-exclamation' : '&#xe0b7;',
			'icon-euro' : '&#xe0b8;',
			'icon-email-upload' : '&#xe0b9;',
			'icon-email-spam' : '&#xe0ba;',
			'icon-email-remove' : '&#xe0bb;',
			'icon-email-luminosity' : '&#xe0bc;',
			'icon-email-download' : '&#xe0bd;',
			'icon-email-close' : '&#xe0be;',
			'icon-email-add' : '&#xe0bf;',
			'icon-eject' : '&#xe0c0;',
			'icon-drops' : '&#xe0c1;',
			'icon-drop' : '&#xe0c2;',
			'icon-download' : '&#xe0c3;',
			'icon-download-selection' : '&#xe0c4;',
			'icon-download-selection-circle' : '&#xe0c5;',
			'icon-double-diamonds' : '&#xe0c6;',
			'icon-dot-square' : '&#xe0c7;',
			'icon-dot-line' : '&#xe0c8;',
			'icon-dot-circle' : '&#xe0c9;',
			'icon-dollar' : '&#xe0ca;',
			'icon-documents' : '&#xe0cb;',
			'icon-document' : '&#xe0cc;',
			'icon-document-fill' : '&#xe0cd;',
			'icon-directions' : '&#xe0ce;',
			'icon-cross' : '&#xe0cf;',
			'icon-credit-card' : '&#xe0d0;',
			'icon-copy-paste-document' : '&#xe0d1;',
			'icon-copy-document' : '&#xe0d2;',
			'icon-contract-vertical' : '&#xe0d3;',
			'icon-contract-horizontal' : '&#xe0d4;',
			'icon-contract-directions' : '&#xe0d5;',
			'icon-compass' : '&#xe0d6;',
			'icon-compass-2' : '&#xe0d7;',
			'icon-comments' : '&#xe0d8;',
			'icon-comment' : '&#xe0d9;',
			'icon-coins' : '&#xe0da;',
			'icon-cloud' : '&#xe0db;',
			'icon-cloud-upload' : '&#xe0dc;',
			'icon-cloud-remove' : '&#xe0dd;',
			'icon-cloud-download' : '&#xe0de;',
			'icon-cloud-add' : '&#xe0df;',
			'icon-clock' : '&#xe0e0;',
			'icon-circles' : '&#xe0e1;',
			'icon-check' : '&#xe0e2;',
			'icon-chat' : '&#xe0e3;',
			'icon-chart-down' : '&#xe0e4;',
			'icon-cd-dvd-rom' : '&#xe0e5;',
			'icon-camera' : '&#xe0e6;',
			'icon-button-question' : '&#xe0e7;',
			'icon-button-minus' : '&#xe0e8;',
			'icon-button-exclamation' : '&#xe0e9;',
			'icon-button-email' : '&#xe0ea;',
			'icon-button-close' : '&#xe0eb;',
			'icon-button-check' : '&#xe0ec;',
			'icon-button-add' : '&#xe0ed;',
			'icon-brush' : '&#xe0ee;',
			'icon-browser-sizes' : '&#xe0ef;',
			'icon-box-remove' : '&#xe0f0;',
			'icon-box-close' : '&#xe0f1;',
			'icon-box-blank' : '&#xe0f2;',
			'icon-box-add' : '&#xe0f3;',
			'icon-bolt' : '&#xe0f4;',
			'icon-block-menu' : '&#xe0f5;',
			'icon-blank' : '&#xe0f6;',
			'icon-bezier' : '&#xe0f7;',
			'icon-bars' : '&#xe0f8;',
			'icon-ban-circle' : '&#xe0f9;',
			'icon-bag' : '&#xe0fa;',
			'icon-backward' : '&#xe0fb;',
			'icon-axis-rules' : '&#xe0fc;',
			'icon-atom' : '&#xe0fd;',
			'icon-arrow-up' : '&#xe0fe;',
			'icon-arrow-up-thin' : '&#xe0ff;',
			'icon-arrow-up-light' : '&#xe100;',
			'icon-arrow-up-bold' : '&#xe101;',
			'icon-arrow-up-bold-round' : '&#xe102;',
			'icon-arrow-up-big' : '&#xe103;',
			'icon-arrow-right' : '&#xe104;',
			'icon-arrow-right-thin' : '&#xe105;',
			'icon-arrow-right-light' : '&#xe106;',
			'icon-arrow-right-bold' : '&#xe107;',
			'icon-arrow-right-bold-round' : '&#xe108;',
			'icon-arrow-right-big' : '&#xe109;',
			'icon-arrow-oblique-expand' : '&#xe10a;',
			'icon-arrow-oblique-expand-directions' : '&#xe10b;',
			'icon-arrow-oblique-contract' : '&#xe10c;',
			'icon-arrow-oblique-contract-directions' : '&#xe10d;',
			'icon-arrow-multi-line-up' : '&#xe10e;',
			'icon-arrow-multi-line-right' : '&#xe10f;',
			'icon-arrow-multi-line-left' : '&#xe110;',
			'icon-arrow-multi-line-down' : '&#xe111;',
			'icon-arrow-left' : '&#xe112;',
			'icon-arrow-left-thin' : '&#xe113;',
			'icon-arrow-left-light' : '&#xe114;',
			'icon-arrow-left-bold' : '&#xe115;',
			'icon-arrow-left-bold-round' : '&#xe116;',
			'icon-arrow-left-big' : '&#xe117;',
			'icon-arrow-fill-up' : '&#xe118;',
			'icon-arrow-fill-right' : '&#xe119;',
			'icon-arrow-fill-left' : '&#xe11a;',
			'icon-arrow-fill-down' : '&#xe11b;',
			'icon-arrow-down' : '&#xe11c;',
			'icon-arrow-down-thin' : '&#xe11d;',
			'icon-arrow-down-light' : '&#xe11e;',
			'icon-arrow-down-bold' : '&#xe11f;',
			'icon-arrow-down-bold-round' : '&#xe120;',
			'icon-arrow-down-big' : '&#xe121;',
			'icon-arrow-cycling' : '&#xe122;',
			'icon-arrow-cycle' : '&#xe123;',
			'icon-arrow-curve-right' : '&#xe124;',
			'icon-arrow-curve-recycle' : '&#xe125;',
			'icon-arrow-curve-left' : '&#xe126;',
			'icon-animal-footprint' : '&#xe127;',
			'icon-alarm-clock' : '&#xe128;',
			'icon-air-plane' : '&#xe129;',
			'icon-adjust' : '&#xe12a;',
			'icon-cube' : '&#xe12b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
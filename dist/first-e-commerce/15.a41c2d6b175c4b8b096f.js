(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5/bF":function(b,t,i){"use strict";i.r(t),i.d(t,"DashboardModule",function(){return S});var e=i("ofXK"),a=i("tyNb"),d=i("fXoL");const r=[{path:"",component:(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(t){return new(t||b)},b.\u0275cmp=d.Gb({type:b,selectors:[["app-admin-dashboard"]],decls:203,vars:0,consts:[[1,"content-header"],[1,"container-fluid"],[1,"row","mb-2"],[1,"col-sm-6"],[1,"m-0"],[1,"breadcrumb","float-sm-right"],[1,"breadcrumb-item"],["href","#"],[1,"breadcrumb-item","active"],[1,"content"],[1,"row"],[1,"col-lg-6"],[1,"card"],[1,"card-header","border-0"],[1,"d-flex","justify-content-between"],[1,"card-title"],["href","javascript:void(0);"],[1,"card-body"],[1,"d-flex"],[1,"d-flex","flex-column"],[1,"text-bold","text-lg"],[1,"ml-auto","d-flex","flex-column","text-right"],[1,"text-success"],[1,"fas","fa-arrow-up"],[1,"text-muted"],[1,"position-relative","mb-4"],[1,"chartjs-size-monitor"],[1,"chartjs-size-monitor-expand"],[1,""],[1,"chartjs-size-monitor-shrink"],["id","visitors-chart","height","200","width","885",1,"chartjs-render-monitor",2,"display","block","width","885px","height","200px"],[1,"d-flex","flex-row","justify-content-end"],[1,"mr-2"],[1,"fas","fa-square","text-primary"],[1,"fas","fa-square","text-gray"],[1,"card-tools"],["href","#",1,"btn","btn-tool","btn-sm"],[1,"fas","fa-download"],[1,"fas","fa-bars"],[1,"card-body","table-responsive","p-0"],[1,"table","table-striped","table-valign-middle"],["src","../../../../assets/admin/dist/img/default-150x150.png","alt","Product 1",1,"img-circle","img-size-32","mr-2"],[1,"text-success","mr-1"],["href","#",1,"text-muted"],[1,"fas","fa-search"],[1,"text-warning","mr-1"],[1,"fas","fa-arrow-down"],[1,"text-danger","mr-1"],[1,"badge","bg-danger"],["id","sales-chart","height","200","width","885",1,"chartjs-render-monitor",2,"display","block","width","885px","height","200px"],["href","#",1,"btn","btn-sm","btn-tool"],[1,"d-flex","justify-content-between","align-items-center","border-bottom","mb-3"],[1,"text-success","text-xl"],[1,"ion","ion-ios-refresh-empty"],[1,"d-flex","flex-column","text-right"],[1,"font-weight-bold"],[1,"ion","ion-android-arrow-up","text-success"],[1,"text-warning","text-xl"],[1,"ion","ion-ios-cart-outline"],[1,"ion","ion-android-arrow-up","text-warning"],[1,"d-flex","justify-content-between","align-items-center","mb-0"],[1,"text-danger","text-xl"],[1,"ion","ion-ios-people-outline"],[1,"ion","ion-android-arrow-down","text-danger"]],template:function(b,t){1&b&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h1",4),d.Jc(5,"Dashboard v3"),d.Rb(),d.Rb(),d.Sb(6,"div",3),d.Sb(7,"ol",5),d.Sb(8,"li",6),d.Sb(9,"a",7),d.Jc(10,"Home"),d.Rb(),d.Rb(),d.Sb(11,"li",8),d.Jc(12,"Dashboard v3"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(13,"div",9),d.Sb(14,"div",1),d.Sb(15,"div",10),d.Sb(16,"div",11),d.Sb(17,"div",12),d.Sb(18,"div",13),d.Sb(19,"div",14),d.Sb(20,"h3",15),d.Jc(21,"Online Store Visitors"),d.Rb(),d.Sb(22,"a",16),d.Jc(23,"View Report"),d.Rb(),d.Rb(),d.Rb(),d.Sb(24,"div",17),d.Sb(25,"div",18),d.Sb(26,"p",19),d.Sb(27,"span",20),d.Jc(28,"820"),d.Rb(),d.Sb(29,"span"),d.Jc(30,"Visitors Over Time"),d.Rb(),d.Rb(),d.Sb(31,"p",21),d.Sb(32,"span",22),d.Nb(33,"i",23),d.Jc(34," 12.5% "),d.Rb(),d.Sb(35,"span",24),d.Jc(36,"Since last week"),d.Rb(),d.Rb(),d.Rb(),d.Sb(37,"div",25),d.Sb(38,"div",26),d.Sb(39,"div",27),d.Nb(40,"div",28),d.Rb(),d.Sb(41,"div",29),d.Nb(42,"div",28),d.Rb(),d.Rb(),d.Nb(43,"canvas",30),d.Rb(),d.Sb(44,"div",31),d.Sb(45,"span",32),d.Nb(46,"i",33),d.Jc(47," This Week "),d.Rb(),d.Sb(48,"span"),d.Nb(49,"i",34),d.Jc(50," Last Week "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(51,"div",12),d.Sb(52,"div",13),d.Sb(53,"h3",15),d.Jc(54,"Products"),d.Rb(),d.Sb(55,"div",35),d.Sb(56,"a",36),d.Nb(57,"i",37),d.Rb(),d.Sb(58,"a",36),d.Nb(59,"i",38),d.Rb(),d.Rb(),d.Rb(),d.Sb(60,"div",39),d.Sb(61,"table",40),d.Sb(62,"thead"),d.Sb(63,"tr"),d.Sb(64,"th"),d.Jc(65,"Product"),d.Rb(),d.Sb(66,"th"),d.Jc(67,"Price"),d.Rb(),d.Sb(68,"th"),d.Jc(69,"Sales"),d.Rb(),d.Sb(70,"th"),d.Jc(71,"More"),d.Rb(),d.Rb(),d.Rb(),d.Sb(72,"tbody"),d.Sb(73,"tr"),d.Sb(74,"td"),d.Nb(75,"img",41),d.Jc(76," Some Product "),d.Rb(),d.Sb(77,"td"),d.Jc(78,"$13 USD"),d.Rb(),d.Sb(79,"td"),d.Sb(80,"small",42),d.Nb(81,"i",23),d.Jc(82," 12% "),d.Rb(),d.Jc(83," 12,000 Sold "),d.Rb(),d.Sb(84,"td"),d.Sb(85,"a",43),d.Nb(86,"i",44),d.Rb(),d.Rb(),d.Rb(),d.Sb(87,"tr"),d.Sb(88,"td"),d.Nb(89,"img",41),d.Jc(90," Another Product "),d.Rb(),d.Sb(91,"td"),d.Jc(92,"$29 USD"),d.Rb(),d.Sb(93,"td"),d.Sb(94,"small",45),d.Nb(95,"i",46),d.Jc(96," 0.5% "),d.Rb(),d.Jc(97," 123,234 Sold "),d.Rb(),d.Sb(98,"td"),d.Sb(99,"a",43),d.Nb(100,"i",44),d.Rb(),d.Rb(),d.Rb(),d.Sb(101,"tr"),d.Sb(102,"td"),d.Nb(103,"img",41),d.Jc(104," Amazing Product "),d.Rb(),d.Sb(105,"td"),d.Jc(106,"$1,230 USD"),d.Rb(),d.Sb(107,"td"),d.Sb(108,"small",47),d.Nb(109,"i",46),d.Jc(110," 3% "),d.Rb(),d.Jc(111," 198 Sold "),d.Rb(),d.Sb(112,"td"),d.Sb(113,"a",43),d.Nb(114,"i",44),d.Rb(),d.Rb(),d.Rb(),d.Sb(115,"tr"),d.Sb(116,"td"),d.Nb(117,"img",41),d.Jc(118," Perfect Item "),d.Sb(119,"span",48),d.Jc(120,"NEW"),d.Rb(),d.Rb(),d.Sb(121,"td"),d.Jc(122,"$199 USD"),d.Rb(),d.Sb(123,"td"),d.Sb(124,"small",42),d.Nb(125,"i",23),d.Jc(126," 63% "),d.Rb(),d.Jc(127," 87 Sold "),d.Rb(),d.Sb(128,"td"),d.Sb(129,"a",43),d.Nb(130,"i",44),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(131,"div",11),d.Sb(132,"div",12),d.Sb(133,"div",13),d.Sb(134,"div",14),d.Sb(135,"h3",15),d.Jc(136,"Sales"),d.Rb(),d.Sb(137,"a",16),d.Jc(138,"View Report"),d.Rb(),d.Rb(),d.Rb(),d.Sb(139,"div",17),d.Sb(140,"div",18),d.Sb(141,"p",19),d.Sb(142,"span",20),d.Jc(143,"$18,230.00"),d.Rb(),d.Sb(144,"span"),d.Jc(145,"Sales Over Time"),d.Rb(),d.Rb(),d.Sb(146,"p",21),d.Sb(147,"span",22),d.Nb(148,"i",23),d.Jc(149," 33.1% "),d.Rb(),d.Sb(150,"span",24),d.Jc(151,"Since last month"),d.Rb(),d.Rb(),d.Rb(),d.Sb(152,"div",25),d.Sb(153,"div",26),d.Sb(154,"div",27),d.Nb(155,"div",28),d.Rb(),d.Sb(156,"div",29),d.Nb(157,"div",28),d.Rb(),d.Rb(),d.Nb(158,"canvas",49),d.Rb(),d.Sb(159,"div",31),d.Sb(160,"span",32),d.Nb(161,"i",33),d.Jc(162," This year "),d.Rb(),d.Sb(163,"span"),d.Nb(164,"i",34),d.Jc(165," Last year "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(166,"div",12),d.Sb(167,"div",13),d.Sb(168,"h3",15),d.Jc(169,"Online Store Overview"),d.Rb(),d.Sb(170,"div",35),d.Sb(171,"a",50),d.Nb(172,"i",37),d.Rb(),d.Sb(173,"a",50),d.Nb(174,"i",38),d.Rb(),d.Rb(),d.Rb(),d.Sb(175,"div",17),d.Sb(176,"div",51),d.Sb(177,"p",52),d.Nb(178,"i",53),d.Rb(),d.Sb(179,"p",54),d.Sb(180,"span",55),d.Nb(181,"i",56),d.Jc(182," 12% "),d.Rb(),d.Sb(183,"span",24),d.Jc(184,"CONVERSION RATE"),d.Rb(),d.Rb(),d.Rb(),d.Sb(185,"div",51),d.Sb(186,"p",57),d.Nb(187,"i",58),d.Rb(),d.Sb(188,"p",54),d.Sb(189,"span",55),d.Nb(190,"i",59),d.Jc(191," 0.8% "),d.Rb(),d.Sb(192,"span",24),d.Jc(193,"SALES RATE"),d.Rb(),d.Rb(),d.Rb(),d.Sb(194,"div",60),d.Sb(195,"p",61),d.Nb(196,"i",62),d.Rb(),d.Sb(197,"p",54),d.Sb(198,"span",55),d.Nb(199,"i",63),d.Jc(200," 1% "),d.Rb(),d.Sb(201,"span",24),d.Jc(202,"REGISTRATION RATE"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb())},styles:[""]}),b})()}];let n=(()=>{class b{}return b.\u0275mod=d.Kb({type:b}),b.\u0275inj=d.Jb({factory:function(t){return new(t||b)},imports:[[a.g.forChild(r)],a.g]}),b})(),S=(()=>{class b{}return b.\u0275mod=d.Kb({type:b}),b.\u0275inj=d.Jb({factory:function(t){return new(t||b)},imports:[[e.c,n]]}),b})()}}]);
var p0 = ["Green", 0, 45];
var p1 = ["Yellow", 0, 45];
var p2 = ["Black", 0, 45];
var p3 = ["Blue", 0, 45];
var p4 = ["Red", 0, 45];
var activePlayerNum = 0;
var activePlayer = eval("p" + activePlayerNum);

$(document).ready(function() {
    $('map').imageMapResize();
	var color = '38ce21';

    $("map area").click(function(sender) {
        var raw = $(sender.target);
        var routenum = raw.attr("title");		
		var route = eval("r" + routenum);
		if (route[1]) {
			ClaimDoubleRoute(route, this);
		} else {
			ClaimSingleRoute(route, this);
		}
    });
	
	function ClaimSingleRoute(route, maparea){
		if (route[2] == -1) {
			var score = ScoreLookup(route[0]);
			route[2] = activePlayerNum;
			addScore(score);
			subtractTrains(route);
			$(maparea).data('maphilight', {alwaysOn:true, fillColor:color, strokeOpacity:0, strokeWidth:0}).trigger('alwaysOn.maphilight');
		} else if (route[2] == activePlayerNum){
			
		} else {
				
		}
	}
	
	function ClaimDoubleRoute(route, maparea) {
		if (route[2] == -1) {
			var score = ScoreLookup(route[0]);
			route[2] = activePlayerNum;
			addScore(score);
			subtractTrains(route);
			$(maparea).data('maphilight', {alwaysOn:true, fillColor:color, strokeOpacity:0, strokeWidth:0}).trigger('alwaysOn.maphilight');
		}
	}

    $('img[usemap]').maphilight({
        fillOpacity: 1,
        strokeOpacity: 0
    });

    $('.colorButton').click(function() {        
		if (!$(this).hasClass("selected")) {
			$(".colorButton").removeClass("selected");
			$(this).addClass("selected");
		}
        
        var lnkId = $(this).attr("id");

        switch (lnkId) {
            case "spnGreen":
                color = '38ce21';
				activePlayerNum = 0;
                break;
            case "spnYellow":
				color = 'fcf93a';
				activePlayerNum = 1;
                break;
            case "spnBlack":
				color = '000000';
				activePlayerNum = 2;
                break;
            case "spnBlue":
				color = '002eff';
				activePlayerNum = 3;
                break;
			case "spnRed":
				color = 'ff0000';
				activePlayerNum = 4;
                break;
        }
		activePlayer = eval("p" + activePlayerNum);
    });
});

//Var routeNumber = [routeLength, allowDoubleRoute,routeIsClaimedBy, routeisAlsoClaimedBy];
var r1 = [3, false, -1, -1];
var r2 = [6, false, -1, -1];
var r3 = [6, false, -1, -1];
var r4 = [5, false, -1, -1];
var r5 = [2, true, -1, -1];
var r6 = [1, true, -1, -1];
var r7 = [4, false, -1, -1];
var r8 = [4, false, -1, -1];
var r9 = [4, false, -1, -1];
var r10 = [4, false, -1, -1];
var r11 = [3, false, -1, -1];
var r12 = [2, false, -1, -1];
var r13 = [3, false, -1, -1];
var r14 = [3, false, -1, -1];
var r15 = [1, true, -1, -1];
var r16 = [6, false, -1, -1];
var r17 = [6, false, -1, -1];
var r18 = [6, false, -1, -1];
var r19 = [2, true, -1, -1];
var r20 = [5, true, -1, -1];
var r21 = [6, false, -1, -1];
var r22 = [3, false, -1, -1];
var r23 = [4, false, -1, -1];
var r24 = [5, false, -1, -1];
var r25 = [2, true, -1, -1];
var r26 = [3, false, -1, -1];
var r27 = [4, false, -1, -1];
var r28 = [2, false, -1, -1];
var r29 = [5, true, -1, -1];
var r30 = [3, true, -1, -1];
var r31 = [4, false, -1, -1];
var r32 = [4, false, -1, -1];
var r33 = [3, true, -1, -1];
var r34 = [2, true, -1, -1];
var r35 = [2, true, -1, -1];
var r36 = [3, true, -1, -1];
var r37 = [2, false, -1, -1];
var r38 = [3, false, -1, -1];
var r39 = [5, false, -1, -1];
var r40 = [2, false, -1, -1];
var r41 = [4, false, -1, -1];
var r42 = [4, true, -1, -1];
var r43 = [1, true, -1, -1];
var r44 = [2, true, -1, -1];
var r45 = [2, true, -1, -1];
var r46 = [5, false, -1, -1];
var r47 = [4, false, -1, -1];
var r48 = [2, false, -1, -1];
var r49 = [2, false, -1, -1];
var r50 = [3, false, -1, -1];
var r51 = [3, false, -1, -1];
var r52 = [3, false, -1, -1];
var r53 = [2, true, -1, -1];
var r54 = [2, false, -1, -1];
var r55 = [2, false, -1, -1];
var r56 = [3, false, -1, -1];
var r57 = [2, false, -1, -1];
var r58 = [1, false, -1, -1];
var r59 = [3, false, -1, -1];
var r60 = [2, true, -1, -1];
var r61 = [6, false, -1, -1];
var r62 = [3, false, -1, -1];
var r63 = [2, false, -1, -1];
var r64 = [5, false, -1, -1];
var r65 = [2, true, -1, -1];
var r66 = [2, false, -1, -1];
var r67 = [3, false, -1, -1];
var r68 = [4, true, -1, -1];
var r69 = [2, true, -1, -1];
var r70 = [2, false, -1, -1];
var r71 = [2, false, -1, -1];
var r72 = [6, false, -1, -1];
var r73 = [4, false, -1, -1];
var r74 = [1, true, -1, -1];
var r75 = [2, false, -1, -1];
var r76 = [6, false, -1, -1];
var r77 = [5, false, -1, -1];
var r78 = [4, false, -1, -1];

function ScoreLookup(rtLen) {
    switch (rtLen) {
        case (1):
            return 1;
        case (2):
            return 2;
        case (3):
            return 4;
        case (4):
            return 7;
        case (5):
            return 10;
        case (6):
            return 15;
    }
}

function addScore(score) {
    switch (activePlayerNum) {
        case 0:
            p0[1] += score;
            $("#spnGreen .txt").html(p0[1]);
            break;
        case 1:
            p1[1] += score;
            $("#spnYellow .txt").html(p1[1]);
            break;
        case 2:
            p2[1] += score;
            $("#spnBlack .txt").html(p2[1]);
            break;
        case 3:
            p3[1] += score;
            $("#spnBlue .txt").html(p3[1]);
            break;
        case 4:
            p4[1] += score;
            $("#spnRed .txt").html(p4[1]);
            break;
    }
}

function addTrains(route) {
	
}

function subtractTrains(route) {
	activePlayer[2] -= route[0];
	var sel = ".p" + activePlayerNum + " .rem";
	$(sel).html(activePlayer[2]);
}
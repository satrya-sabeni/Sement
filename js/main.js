$(document).ready(function(){
	/*functions*/

	/*hidden box*/
	$("#button").click(
		function(){
		alert ("test");
		});



	/*-------------------------------box 1 */
	$(".button_").hover(
	function(){
		$(".box").animate(
		{"height":"180px","width":"180px","top":"10px"},"fast");
	},
		function  () {
		$(".box").animate(
		{"height":"200px","width":"200px","top":"0px"},"fast");
	}
	);


	/*-------------------------------box 2 */

	$(".button_2").hover(function(){
		$(".box2").fadeIn(200);
	},
	function(){
		$(".box2").fadeOut();
	});

	/*---------------------------------box 3 */
	$(".button_3").hover(function(){
		$(".box3").animate({"width":"200px","top":"0px","height":"120px"},250);
	},
	function(){
		$(".box3").animate({"width":"180px","top":"10px","height":"180px"},250);
	}
	);


	$(".button_3").hover(function(){
		$(".box3 span.title").animate({
			bottom:"20px"
		},250);
	},
	function(){
		$(".box3 span.title").animate({
			bottom:"0px"
		},250);
	}	);

	$(".button_3").hover(function(){
		$(".box3 span.info").animate({
			bottom:"20px"
		},250);
	},
	function(){
		$(".box3 span.info").animate({
			bottom:"0px"
		},250);
	}	);

	/*$(".button_3").hover(function(){*/
    /* how select span: (".box3 span.info").fadeOut();*/
		/*$(".box3").animate({
            backgroundColor: jQuery.Color( "rgba(177, 156, 217, 0.5)" )
    }, 700 );
},
	function(){
	$(".box3").animate({
					backgroundColor: "#fff"
	}, 700 );}
);*/



			/*----------box4*/



 		$(".button_4").hover(
			function(){
				$(".box4").animate(
				{"height":"200px","width":"200px","top":"0px"},"fast");
			},
				function  () {
				$(".box4").animate(
				{"height":"180px","width":"180px","top":"10px"},"fast");
			}
			);


			/*----------box5*/
			$(".box5 span.description").hide();

			$(".button_5").hover(
			function(){
				$(".box5").animate(
				{"height":"200px","width":"200px","top":"0px"},"fast");
			},
				function  () {
				$(".box5").animate(
				{"height":"180px","width":"180px","top":"10px"},"fast");
			}
			);


			$(".button_5").hover(function () {
				$(".box5 span.description").fadeIn();
			},
			function () {
				$(".box5 span.description").fadeOut();
			});


			/*----------box6*/
			$(".button_6").hover(function(){
				$(".box6 span.info").show();
			});

			$(".button_6").hover(function(){
				$(".box6 span.info").animate({
					top:"20px"},
					"fast"
				);
			},
			function(){
				$(".box6 span.info").animate({
					top:"0px"},
					"fast"
				);
			}
			);


			$(".button_6").hover(function(){
				$(".box6 span.title").animate({
					bottom:"30px"},
					"fast"
				);
			},
			function(){
				$(".box6 span.title").animate({
					bottom:"0px"},
					"fast"
				);
			}
			);

			/*----------box7*/

			$(".button_7").hover(function(){
			$(".box7").slideToggle(400);
		});

			/*----------box7*/
			$(".button_8").hover(function(){
				$(".box8 span.info").blurText("to", { blur: 0, duration: 500 });
			}, function() {
				$(".box8 span.info").blurText("to", { blur: 10, duration: 500 });
			});


	/* end functions*/
});

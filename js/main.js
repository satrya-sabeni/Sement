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

	var countBox1 = new countUp("c1", 0, 15, 0, 2);

		countBox1.start();


		$(".box span.info").fadeIn();



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

			/*----------box9*/
			var countBox9 = new countUp("c9", 0, 15, 0, 2.2);


			$(".button_9").hover(function(){
				countBox9.start();
			});

			$(".button_9").hover(function(){
				$(".box9 span.info").fadeIn();
			});

			$(".button_9").hover(
			function(){
				$(".box9").animate(
				{"height":"200px","width":"200px","top":"0px"},"fast");
			},
				function  () {
				$(".box9").animate(
				{"height":"180px","width":"180px","top":"10px"},"fast");
			}
			);

			/*----------box10*/

			$(".button_10").hover(function(){
			$(".box10").slideToggle(400);
		});

			/*--------------box11*/

			$(".button_11").hover(
			function(){
				$(".box11").animate(
				{"height":"200px","width":"200px","top":"0px"},"fast");
			},
				function  () {
				$(".box11").animate(
				{"height":"180px","width":"180px","top":"10px"},"fast");
			}
			);


			$(".button_11").hover(function(){
				$(".box11 p.info").animo({animation: "fadeInLeft", duration: 0.5},function(){
				});
			},
			function(){
				$(".box11 p.info").animo({animation: "fadeOutLeft", duration: 0.5});
			}
			);

			$(".button_11").hover(function(){
				$(".box11 p.info").css("opacity","1");
			},
			function(){
				$(".box11 p.info").css("opacity","0");
			}
			);

			/*$(".button_11").hover(function(){
				$(".box11 span.description").css("opacity","1");
			},
			function(){
				$(".box11 span.description").css("opacity","0");
			}
		);*/




	/* end functions*/
});

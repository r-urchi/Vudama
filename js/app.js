const seccionesPagina = new fullpage('#fullpage', {

		autoScrolling: true, 
		fitToSection: false, 
		fitToSectionDelay: 300, 
		easing: 'easeInOutCubic', 
		scrollingSpeed: 700, 
		css3: true, 
		easingcss3: 'ease-out', 
		loopBottom: false, 
		navigation: true, 
		menu: '#menu', 
		anchors: ['inicio', 'news','stereotipos', 'fechas','redes'], 
		navigationTooltips: ['Inicio', 'Novedades','Stereotipos', 'Fechas', 'Redes'], 
		showActiveTooltip: false, 
		sectionsColor : ['#000','#000','#000','#000', '#000'], 
		verticalCentered: true, 
		controlArrows: true, 
		slidesNavigation: false
		
});
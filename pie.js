(function () {
    function PieChart() {
        return Reflect.construct(HTMLElement, [], this.constructor);
    }
    PieChart.prototype = Object.create(HTMLElement.prototype);
    PieChart.prototype.constructor = PieChart;
    Object.setPrototypeOf(PieChart, HTMLElement);
    PieChart.prototype.connectedCallback = function () {
        const dimensions = 100;
        const svgViewBoxDimensions = 100;
        const viewBox= `0 0 ${svgViewBoxDimensions} ${svgViewBoxDimensions}`;
        const strokeW= 10;
        var pieValue = this.getAttribute('value');
        var skill = this.getAttribute('skill');
        var radius = (svgViewBoxDimensions/2) - strokeW;
        var circumference = radius * 3.14159 * 2;
        this.innerHTML = `<svg height="${dimensions}" width="${dimensions}" viewBox="${viewBox}">
		<circle r="${radius}" cx="${svgViewBoxDimensions/2}" cy="${svgViewBoxDimensions/2}" fill="white" stroke="#dddddd" stroke-width="${strokeW}" />
		<circle r="${radius}" cx="${svgViewBoxDimensions/2}" cy="${svgViewBoxDimensions/2}" fill="transparent"
				stroke="#2ac1fd"
				stroke-width="${strokeW}"
				stroke-dasharray="calc((${pieValue}/10)*${circumference}) ${circumference}"
				transform="rotate(0deg)" />
                <text x="${svgViewBoxDimensions/2}"  y="-55" class="text large">${pieValue}</text>
				<text x="${svgViewBoxDimensions/2}" y="-40" class="text">${skill}</text>
	  </svg>`;
    }
    PieChart.prototype.disconnectedCallback = function () {
        this.innerHTML = "";
    }
    customElements.define('pie-chart', PieChart);
})();
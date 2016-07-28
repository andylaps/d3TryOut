var myStyles = [
   { 	width :200,
    	name : 'Jenson Button',
    	color: '#A57706'},
  	{	width :225,
  		name : 'Lewis Hamilton',
  		color: '#BD3613'},
	{	width :402,
		name : 'James Hunt',
		color: '#D11C24'},
	{	width :331,
		name : 'Graham Hill',
		color: '#C61C6F'},
	{	width :193,
		name : 'Martin Brundell',
		color: '#Cc661F'},
 	{	width :352,
 		name : 'Nigel Mansell',
 		color: '#595AB7'},
	{	width :272,
		name : 'Damon Hill',
		color: '#2176C7'}
]; 

d3.selectAll('#chart').selectAll('div')
	.data(myStyles)
	.enter().append('div')
	.classed('item', true)
	.text(function(d) {
		return d.name;
	})
	.style({
		'color' : 'white',
		'background' : function(d) {
			return d.color;
		},
		width : function(d) {
			return d.width + 'px'; 
		}
	}) .exit


// 2015-04-04 重写 html to react native dom 部分

var htmlparser = require("../vendor/htmlparser2");
var React = require('react-native');

var {
	Text,
	LinkingIOS
} = React;


var LINE_BREAK = '\n';
var PARAGRAPH_BREAK = '\n\n';

function HTMLToElem(html, opts, callback){
	function convertHTML2Reactify(dom, parent){
		if(!dom){
			return null;
		}

		return dom.map((node,index,list) => {
			if(node.type === 'text'){
				return (
					<Text key={index} style={parent ? null : null}>
						{node.data}
					</Text>
				);
			}

			if(node.type === 'tag'){
				var linkPressHandler = null
				if (node.name == 'a' && node.attribs && node.attribs.href) {
					linkPressHandler = () => opts.linkHandler(entities.decodeHTML(node.attribs.href))
				}

				return (
					<Text key={index} onPress={linkPressHandler}>
					{node.name == 'pre' ? LINE_BREAK : null}
					{convertHTML2Reactify(node.children, node)}
					{node.name == 'br' ? LINE_BREAK : null}
					{node.name == 'p' && index < list.length-1 ? PARAGRAPH_BREAK : null}
					</Text>
				)
			}
		});

    return dom.map((node, index, list) => {
      if (opts.customRenderer) {
        var rendered = opts.customRenderer(node, index, list)
        if (rendered || rendered === null) return rendered
      }

      if (node.type == 'text') {
        return (
          <Text key={index} style={parent ? opts.styles[parent.name] : null}>
            {entities.decodeHTML(node.data)}
          </Text>
        )
      }

      if (node.type == 'tag') {
        var linkPressHandler = null
        if (node.name == 'a' && node.attribs && node.attribs.href) {
          linkPressHandler = () => opts.linkHandler(entities.decodeHTML(node.attribs.href))
        }

        return (
          <Text key={index} onPress={linkPressHandler}>
            {node.name == 'pre' ? LINE_BREAK : null}
            {domToElement(node.children, node)}
            {node.name == 'br' ? LINE_BREAK : null}
            {node.name == 'p' && index < list.length-1 ? PARAGRAPH_BREAK : null}
          </Text>
        )
      }
    })
	}

	var handler = new htmlparser.DomHandler(function (error, dom) {
		if (error)
			callback(error);
		else
			callback(null,convertHTML2Reactify(dom));
	});
	var parser = new htmlparser.Parser(handler);
	parser.write(html);
	parser.done();
}



var HTMLText = React.createClass({
	getInitialState: function(){
		return {
			children: null
		};
	},
	getDefaultProps: function(){
		return {
			onPress: LinkingIOS.openURL
		};
	},
	componentDidMount: function(){
		this.renderHTML();
	},
	renderHTML: function(){
		if(!this.props.html){
			return true;
		}
		var _option = {
			linkHandler: this.props.onPress,
			styles: this.props.styleSheet
		};

		HTMLToElem(this.props.html,_option, (error, element)=>{
			var elements = (
					<Text>{'Error!!!'}</Text>
				);

			if(!error){
				elements = element;
			}
			if(this.isMounted()){
				this.setState({
					children: elements
				});
			}
		});

	},
	render: function(){
		if(this.state.children){
			return (<Text children={this.state.children} />);
		} else{
			return (<Text />);
		}
	}
})


module.exports = HTMLText;
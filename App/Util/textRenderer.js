
// !!! 这里使用了 eval !
// 作为一个会偷懒的人,这里使用 eval 来构建返回值

var React = require('react-native');

var {
	Text,
	TouchableHighlight,
	Image
} = React;

var REG_TAGSTART = /<([a-zA-Z]+)([^>]+)?(\/)?>/igm,
	REG_TAGEND = /<\/([a-zA-Z]+)>/igm,
	REG_TAG = /<([a-zA-Z]+)([^<>]+)?(\/)?>(([^<>]+)?<\/([a-zA-Z]+)>)?/igm;

	//example 

	/*
	<p>最近呢遇到情况，uber无法接触支付宝。<br>
到支付宝代扣设置，支付宝节约按钮是灰色还提示该协议不支持在支付宝解约,<br>
请联系商户进行解约。<br>
到uber节约提示至少保留一个支付方式，也是没法节约，相互踢皮球，那个绑定支付宝协议是很小的链接点击弹出小字体的pdf文档，我也没怎么看。<br>
<img src="http://ioschen.qiniudn.com/IMG_2910.PNG" alt="image"></p>

<p><img src="http://ioschen.qiniudn.com/IMG_2911.PNG" alt="image"></p>

<p>这个和阿里现在的开淘宝店设置二级域名一样<br>
设置二级域名必须开收费版旺铺专业版<br>
新开店又不给你交费开旺铺专业版，只能免费升级旺铺专业版，<br>
这网上说是死循环。</p>

<p>uber这个怎么接触支付宝？<br>
假设uber账户被盗岂不是任由别人坐车。</p>
*/

// function renderHTMLparser(renderedHTML,onClick){
// 	var res = 'var {Text,Image}=React; return [';

// 	console.log(renderedHTML);

// 	renderedHTML = '<p>'+renderedHTML+'</p>';

// 	var tempStr = '';
// 	var pScope = false;

// 	tempStr = renderedHTML.replace('\'','\\\'').replace('"','\\"');

// 	tempStr = tempStr.replace(REG_TAGSTART, function($, $1){
// 		// console.log(arguments);
// 		switch($1){
// 			case 'p':
// 				pScope = true;
// 				return 'React.createElement(Text,{},[React.createElement(Text,{},"';

// 				break;
// 			case 'br':
// 				if(pScope){
// 					return '\\r\\n';
// 				}
// 				return ',';
// 				break;
// 			case 'a':
// 				var href = $.match(/href\=([^>]+)/)[1];
// 				var res = 'React.createElement(Text,{},"';
// 				if(pScope){
// 					pScope = false;
// 					res = '"),'+res;
// 				}
// 				return res;
// 				break;
// 			case 'img':
// 				var src = $.match(/src\=([^>]+)/)[1].replace('\\"','"');
// 				return  '"),React.createElement(Image, {uri: '+src+'},"'; //'<Image source={{uri:'+src+'}}>';
// 				break;
// 		}
// 	});

// 	tempStr = tempStr.replace(REG_TAGEND, function($, $1){
// 		switch($1){
// 			case 'p':
// 				var res = ']),';
// 				if(pScope){
// 					pScope = false;
// 					res = '")'+res;
// 				}
// 				return  res//'</Text>,';
// 				break;
// 			case 'a':
// 				pScope = false;
// 				return  '"),' //'</Text></TouchableHighlight>';//'<TouchableHighlight onSelect={() => onClick('+href+')}><Text>';
// 				break;
// 			case 'img':
// 				pScope = false;
// 				return  '"),'//'</Image>,';
// 				break;
// 		}
// 	});

// 	// console.log(tempStr.replace(/\,(\,+)/g,','));

// 	console.log(tempStr.replace(/\,(\,+)/g,',').replace(/\,$/,''));

// 	res += tempStr.replace(/\,(\,+)/g,',').replace(/\,$/,'');

// 	res += '];'

// 	console.log(res);

// 	// return (new Function('React',res))(React);
// }

function renderHTMLparser(renderedHTML,onClick){
	var domArray = [],
		tmpHTML = renderedHTML.replace(/(<p>)|(<\/p>)/,''),
		tmpArray = [],
		res = [];

	tmpHTML = tmpHTML.replace('<br>','\r\n');
	tmpHTML = tmpHTML.replace(REG_TAG,function($){
		console.log(tmpHTML);
		domArray.push($);
		return '%{,}'
	});

	console.log('===========');

	tmpArray = tmpHTML.split('%{,}');

	tmpArray.forEach(function(v,i){
		v = v.replace('</p>','');
		res.push(<Text>{v}</Text>);
		if(domArray[i]){
			domArray[i].replace(REG_TAG,function($,$1,$2,$3,$4,$5){

				// console.log(arguments);
				switch($1){
					case 'a':
						res.push(<TouchableHighlight onSelect={()=>onClick($5)}><Text>{$5}</Text></TouchableHighlight>);
						break;
					case 'br':
						// res.push(<Text>{'\n'}</Text>);
						break;
					case 'img':
						console.log('IMG!!!!');
						// console.log(arguments);
						// var src ="";
						var src = $2.match(/src=\"([^\"]+)?\"/im)[1].replace('"','');
						console.log(src);
						res.push(<Image source={{uri:src}}></Image>);
						break;
					default:
						console.log('D:  '+($5||''));
						res.push(<Text>{($5||'')}</Text>);
				}
				return $;
			});
		}
	});

	return res;
}

module.exports = renderHTMLparser;
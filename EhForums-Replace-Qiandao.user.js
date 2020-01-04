// ==UserScript==
// @name         和谐掉eh forums的“签到”回复
// @namespace    https://github.com/Exsper/
// @version      0.1
// @description  将e-hentai论坛中的“签到”回复改成"我的脑子有病"
// @author       Exsper
// @match        https://forums.e-hentai.org/index.php?showtopic=*
// @grant        none
// ==/UserScript==

var posts = document.getElementsByClassName("postcolor");
for(var i=0;i<posts.length;i++){
	var postContent = posts[i].innerText;
	// 回复只有12个字以内，并且有“签到”字样
	if(postContent.length < 12) {
		//将“签到”替换为“我的脑子有病”
		if(postContent.indexOf("签到")>=0) posts[i].innerText=posts[i].innerText.replace("签到","我的脑子有病");
		if(postContent.indexOf("簽到")>=0) posts[i].innerText=posts[i].innerText.replace("簽到","我的腦子有病");
	}
}

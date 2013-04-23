/*
 * MojoMagnify 0.1.10 - JavaScript Image Magnifier
 * Copyright (c) 2008-2010 Jacob Seidelin, cupboy@gmail.com, http://blog.nihilogic.dk/
 * Licensed under the MPL License [http://www.nihilogic.dk/licenses/mpl-license.txt]
 * Modified  by Fran Mac�as 2013 for exelearning.net
 */
 /*
 optional css:
 .selectsizeglass{...}
 .selectzoomglass{...}
 .zoomglass{...}
 use:
 <img id="..." src="..." data-magnifysrc="..."  width="n" height="n" data-size="n"  data-zoom="n" />
 */
var MojoMagnify = (function () {
function withStyle(name){
        var  cssstyle,clcss;
		var valor=false;
        for( cssstyle=document.styleSheets.length-1; cssstyle>=0; cssstyle-- ){
            clcss= document.styleSheets[cssstyle].rules || document.styleSheets[cssstyle].cssRules;
            for(var t=0;t<clcss.length;t++) {if(clcss[t].selectorText===name) {valor=true}}
        }
        return valor;
    };
    var $ = function (id) {
        return document.getElementById(id);
    };
    var dc = function (tag) {
        return document.createElement(tag);
    };
    var isIE = !! document.all && !! window.attachEvent && !window.opera;
    var isIE9 = isIE && (navigator.userAgent.indexOf("Trident/5.0") > -1);
    var isIE9CompatibilityMode = isIE9 && (navigator.userAgent.indexOf("MSIE 7.0;") > -1);

    function addEvent(element, ev, handler) {
        if (element.addEventListener) {
            element.addEventListener(ev, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + ev, handler);
        }
    }

    function removeEvent(element, ev, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(ev, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + ev, handler);
        }
    }

    function getElementPos(element) {
        var x = element.offsetLeft;
        var y = element.offsetTop;
        var parent = element.offsetParent;
        while (parent) {
            x += parent.offsetLeft;
            y += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            x: x,
            y: y
        }
    }

    function getEventMousePos(element, e) {
        var scrollX = document.body.scrollLeft || document.documentElement.scrollLeft;
        var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
        if (e.currentTarget) {
            var pos = getElementPos(element);
            return {
                x: e.clientX - pos.x + scrollX,
                y: e.clientY - pos.y + scrollY
            }
        }
        return {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    function setZoomPos(img, x, y, pos) {
        var zoomImg = img.__mojoMagnifyImage;
        if (!zoomImg) return;
        var full = img.__mojoMagnifyOptions.full;
        img.__mojoMagnifyX = x;
        img.__mojoMagnifyY = y;
        img.__mojoMagnifyPos = pos;
        var zoom = img.__mojoMagnifyZoomer;
        var maskWidth = zoom.offsetWidth;
        var maskHeight = zoom.offsetHeight;
        var imgLeft = img.offsetLeft;
        var imgTop = img.offsetTop;
        var w = img.offsetWidth ? img.offsetWidth : img.naturalWidth;
        var h = img.offsetHeight ? img.offsetHeight : img.naturalHeight;
        if (full) {
            var fx = x / w;
            var fy = y / h;
            var dw = maskWidth - w;
            var dh = maskHeight - h;
            var left = -dw * fx;
            var top = -dh * fy;
        } else {
            var left = pos.x - maskWidth / 2;
            var top = pos.y - maskHeight / 2;
            if (!isIE) {
                left -= imgLeft;
                top -= imgTop;
            }
        }
        zoom.style.left = left + "px";
        zoom.style.top = top + "px";
        var zoomWidth = zoomImg.offsetWidth ? zoomImg.offsetWidth : zoomImg.naturalWidth;
        var zoomHeight = zoomImg.offsetHeight ? zoomImg.offsetHeight : zoomImg.naturalHeight;
        if (full) {
            var zx = 0;
            var zy = 0;
        } else {
            var zoomXRatio = zoomWidth / w;
            var zoomYRatio = zoomHeight / h;
            var zoomX = Math.round(x * zoomXRatio);
            var zoomY = Math.round(y * zoomYRatio);
            var zx = -zoomX + maskWidth / 2;
            var zy = -zoomY + maskHeight / 2;
        }
        zoomImg.style.left = zx + "px";
        zoomImg.style.top = zy + "px";
    }

    function startAnimation(img) {
        var options = img.__mojoMagnifyOptions;
        if (img.__mojoMagnifyAnimTimer) clearTimeout(img.__mojoMagnifyAnimTimer);
        var step = 1;
        var zoom = img.__mojoMagnifyZoomer;
        var zoomImg = img.__mojoMagnifyImage;
        var zoomBorder = img.__mojoMagnifyBorder;
        var imgWidth = img.offsetWidth ? img.offsetWidth : img.naturalWidth;
        var imgHeight = img.offsetHeight ? img.offsetHeight : img.naturalHeight;
        var dw = img.__mojoMagnifyWidth - imgWidth;
        var dh = img.__mojoMagnifyHeight - imgHeight;
        var next = function () {
            var w = imgWidth + dw * (step / 10);
            var h = imgHeight + dh * (step / 10);
            zoomBorder.style.width = w + "px";
            zoomBorder.style.height = h + "px";
            zoom.style.width = w + "px";
            zoom.style.height = h + "px";
            zoomImg.style.width = w + "px";
            zoomImg.style.height = h + "px";
            if (img.__mojoMagnifyPos) {
                setZoomPos(img, img.__mojoMagnifyX, img.__mojoMagnifyY, img.__mojoMagnifyPos);
            }
            if (step < 10) {
                step += 1;
                img.__mojoMagnifyAnimTimer = setTimeout(next, 60);
            } else {
                img.__mojoMagnifyAnimTimer = 0;
            }
        }
        next();
    }

    function makeMagnifiable(img, zoomSrc, opt, zSize, zZoom) {
        // just set the new zoom src if this img already has the Mojo structure setup
        if (img.__mojoMagnifyImage) {
            img.__mojoMagnifyImage.src = zoomSrc;
            return;
        }
        var options = opt || {};
        var zoSize = zSize || 100;
        var zoZoom = zZoom || 1;
        if (zoZoom > 99) zoZoom = zoZoom / 100;
        if (zoSize < 6) zoSize = zoSize * 50;
        img.__mojoMagnifyOptions = options;
        // make sure the image is loaded, if not then add an onload event and return
        if (!img.complete && !img.__mojoMagnifyQueued) {
            addEvent(img, "load", function () {
                img.__mojoMagnifyQueued = true;
                setTimeout(function () {
                    img.__mojoMagnifyImage.width = "3000px";
                    img.__mojoMagnifyImage.height = "3000px";
                    makeMagnifiable(img, zoomSrc);
                }, 1);
            });
            return;
        }
        var w = img.offsetWidth ? img.offsetWidth : img.naturalWidth;
        var h = img.offsetHeight ? img.offsetHeight : img.naturalHeight;
        var oldParent = img.parentNode;
        if (oldParent.nodeName.toLowerCase() != "a") {
            var linkParent = dc("a");
            oldParent.replaceChild(linkParent, img);
            linkParent.appendChild(img);
        } else {
            var linkParent = oldParent;
        }
        linkParent.style.position = "relative";
        linkParent.style.display = "block";
        linkParent.style.width = w + "px";
        linkParent.style.height = h + "px";
        linkParent.style.marginBottom = "40px"
        var imgLeft = img.offsetLeft;
        var imgTop = img.offsetTop;
        var zoom = dc("div");
        zoom.style.position = "absolute";
        zoom.style.width = zoSize + "px";
        zoom.style.height = zoSize + "px";
        zoom.style.overflow = "hidden";
		if (withStyle('.zoomglass')==false){
        zoom.style.cursor = "none";
        zoom.style.borderWidth = "2px";
        zoom.style.borderStyle = "solid";
        zoom.style.borderColor = "#cccccc";
		zoom.style.boxShadow="5px 5px 10px #333333";
        zoom.style.borderRadius = (zoSize / 2) + "px"
		}else{
        zoom.className = "zoomglass";
		}
        zoom.style.left = "-9999px";
        var parent = img.parentNode;
        var zoomImg = dc("img");
        zoomImg.style.position = "absolute";
        zoomImg.style.maxWidth = "none";
        zoomImg.style.maxHeight = "none";
            var imgW = img.offsetWidth * zoZoom;
            var imgH = img.offsetHeight * zoZoom;
            zoomImg.style.width = imgW + "px";
            zoomImg.style.height = imgH + "px";

        if (isIE) {
            var zoomLink = dc("a");
            zoomLink.setAttribute("href", linkParent.getAttribute("href"));
            zoomLink.style.position = "absolute";
            zoomLink.style.left = "0px";
            zoomLink.style.top = "0px";
            zoomLink.appendChild(zoomImg);
            zoom.appendChild(zoomLink);
        } else {
            zoom.appendChild(zoomImg);
        }
        var ctr = dc("div");
        with(ctr.style) {
            position = "absolute";
            left = imgLeft + "px";
            top = imgTop + "px";
            width = w + "px";
            height = h + "px";
            overflow = "hidden";
            display = "block";
        }
        ctr.appendChild(zoom);
        parent.appendChild(ctr);
        var zoomBorder = dc("div");
        zoomBorder.className = "mojomagnify_border";
        zoom.appendChild(zoomBorder);
        var zoomInput = parent;
        // clear old overlay
        if (img.__mojoMagnifyOverlay) parent.removeChild(img.__mojoMagnifyOverlay);
        img.__mojoMagnifyOverlay = ctr;
        // clear old high-res image
        if (img.__mojoMagnifyImage && img.__mojoMagnifyImage.parentNode) img.__mojoMagnifyImage.parentNode.removeChild(img.__mojoMagnifyImage);
        img.__mojoMagnifyImage = zoomImg;
        img.__mojoMagnifyZoomer = zoom;
        img.__mojoMagnifyBorder = zoomBorder;
        var isInImage = false;
        var dvselect = document.createElement("div");
        dvselect.style.border = "1px solid #cccccc";
        var modzoom = document.createElement("select");
        modzoom.onclick = changezoom;
		modzoom.className='selectzoomglass';
        var stZoom = new Array("x1", "x1.5", "x2", "x2.5", "x3", "x4", "x6");
        var valZoom = new Array( 1, 1.5, 2, 2.5, 3, 4, 6);
        
        for (var i = 0; i < valZoom.length; ++i) {
            modzoom[modzoom.length] = new Option(stZoom[i], valZoom[i]);
        }
		modzoom[modzoom.length] = new Option("x" + zoZoom, zoZoom,"defaultSelected");
        var sizeGlass = document.createElement("select");
        sizeGlass.onclick = changeglass;
		sizeGlass.className='selectsizeglass';
        var valGlass = new Array(50, 100, 150, 200, 250, 300, 400);
		var stzoSize=zoSize.toString();
        for (var i = 0; i < valGlass.length; ++i) {
		if (valGlass[i]==stzoSize){		
			sizeGlass[sizeGlass.length] = new Option(valGlass[i], valGlass[i],"defaultSelected");            
			}else{
			sizeGlass[sizeGlass.length] = new Option(valGlass[i], valGlass[i]);
			}
        }
        dvselect.appendChild(modzoom);
        dvselect.appendChild(sizeGlass);
        linkParent.appendChild(dvselect);

        function changezoom(e) {
            var imgW = img.offsetWidth * this.value;
            var imgH = img.offsetHeight * this.value;
            zoomImg.style.width = imgW + "px";
            zoomImg.style.height = imgH + "px";
        }

        function changeglass(e) {
            zoom.style.width = sizeGlass.value + "px";
            zoom.style.height = sizeGlass.value + "px";
        }

        function onMouseOut(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) return;
            if (target.nodeName != "DIV") return;
            var relTarget = e.relatedTarget || e.toElement;
            if (!relTarget) return;
            while (relTarget != target && relTarget.nodeName != "BODY" && relTarget.parentNode) {
                relTarget = relTarget.parentNode;
            }
            if (relTarget != target) {
                isInImage = false;
                ctr.style.display = "none";
            }
        };

        function onMouseMove(e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (isInImage && target.nodeName != 'IMG') {
                ctr.style.display = "none";
            } else {
                isInImage = true;
                ctr.style.display = "block";
                var pos = getEventMousePos(zoomInput, e);
                if (e.srcElement && isIE && (!isIE9 || isIE9CompatibilityMode)) {
                    if (e.srcElement == zoom) return;
                    if (e.srcElement != zoomInput) {
                        var zoomImgPos = getElementPos(e.srcElement);
                        var imgPos = getElementPos(img);
                        pos.x -= (imgPos.x - zoomImgPos.x);
                        pos.y -= (imgPos.y - zoomImgPos.y);
                    }
                }
                var x = e.clientX - (getElementPos(img).x - (document.body.scrollLeft || document.documentElement.scrollLeft));
                var y = e.clientY - (getElementPos(img).y - (document.body.scrollTop || document.documentElement.scrollTop));
                setZoomPos(img, x, y, pos);
            }
        }
        addEvent(zoomImg, "load", function () {
            addEvent(ctr, "mouseout", onMouseOut);
            addEvent(ctr, "mouseleave", onMouseOut);
            if (isIE) {
                addEvent(document.body, "mouseover",

                function (e) {
                    e = e || window.event;
                    if (isInImage && e.toElement != zoomImg) {
                        ctr.style.display = "none";
                    }
                });
            }
            // try removing the event first so we don't get multiple handlers firing
            removeEvent(zoomInput, "mousemove", onMouseMove);
            addEvent(zoomInput, "mousemove", onMouseMove);
            if (options.full) {
                var maskWidth = zoomImg.offsetWidth;
                var maskHeight = zoomImg.offsetHeight;
                img.__mojoMagnifyWidth = maskWidth;
                img.__mojoMagnifyHeight = maskHeight;
                zoomBorder.style.width = maskWidth + "px";
                zoomBorder.style.height = maskHeight + "px";
                zoom.style.width = maskWidth + "px";
                zoom.style.height = maskHeight + "px";
            }
            ctr.style.display = "none";
        });
        // I've no idea. Simply setting the src will make IE screw it self into a 100% CPU fest. In a timeout, it's ok.
        setTimeout(function () {
            zoomImg.src = zoomSrc;
        }, 1);
    }

    function setCoords(img, x, y) {
        if (!img.__mojoMagnifyOverlay) return;
        isInImage = true;
        img.__mojoMagnifyOverlay.style.display = "block";
        setZoomPos(img, x, y, {
            x: x,
            y: y
        });
    }

    function init() {
        var images = document.getElementsByTagName("img");
        var imgList = [];
        for (var i = 0; i < images.length; i++) {
            imgList.push(images[i]);
        }
        for (var i = 0; i < imgList.length; i++) {
            var img = imgList[i];
            var zoomSrc = img.getAttribute("data-magnifysrc");
            if (zoomSrc) {
                var opt = {
                    full: img.getAttribute("data-magnifyfull") === "true",
                    animate: img.getAttribute("data-magnifyanimate") === "true"
                };
                var zoomSize = img.getAttribute("data-size") || 100;
                var zoomZoom = img.getAttribute("data-zoom") || 1;
                makeMagnifiable(img, zoomSrc, opt, zoomSize, zoomZoom);
            }
        }
    }
    return {
        addEvent: addEvent,
        init: init,
        makeMagnifiable: makeMagnifiable,
        setCoords: setCoords
    };
})();
MojoMagnify.addEvent(window, "load", MojoMagnify.init);
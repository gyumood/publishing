jQuery.noConflict();
/**
 * flipsnap.js
 *
 * @version  0.6.2
 * @url http://pxgrid.github.com/js-flipsnap/
 *
 * Copyright 2011 PixelGrid, Inc.
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(window, document, undefined) {

var div = document.createElement('div');
var prefix = ['webkit', 'moz', 'o', 'ms'];
var saveProp = {};
var support = Flipsnap.support = {};
var gestureStart = false;

var DISTANCE_THRESHOLD = 5;
var ANGLE_THREHOLD = 55;

support.transform3d = hasProp([
  'perspectiveProperty',
  'WebkitPerspective',
  'MozPerspective',
  'OPerspective',
  'msPerspective'
]);

support.transform = hasProp([
  'transformProperty',
  'WebkitTransform',
  'MozTransform',
  'OTransform',
  'msTransform'
]);

support.transition = hasProp([
  'transitionProperty',
  'WebkitTransitionProperty',
  'MozTransitionProperty',
  'OTransitionProperty',
  'msTransitionProperty'
]);

support.addEventListener = 'addEventListener' in window;
support.mspointer = window.navigator.msPointerEnabled;

support.cssAnimation = (support.transform3d || support.transform) && support.transition;

var eventTypes = ['touch', 'mouse'];
var events = {
  start: {
    touch: 'touchstart',
    mouse: 'mousedown'
  },
  move: {
    touch: 'touchmove',
    mouse: 'mousemove'
  },
  end: {
    touch: 'touchend',
    mouse: 'mouseup'
  }
};

if (support.addEventListener) {
  document.addEventListener('gesturestart', function() {
    gestureStart = true;
  });

  document.addEventListener('gestureend', function() {
    gestureStart = false;
  });
}

function Flipsnap(element, opts) {
  return (this instanceof Flipsnap)
    ? this.init(element, opts)
    : new Flipsnap(element, opts);
}

Flipsnap.prototype.init = function(element, opts) {
  var self = this;

  // set element
  self.element = element;
  if (typeof element === 'string') {
    self.element = document.querySelector(element);
  }

  if (!self.element) {
    throw new Error('element not found');
  }

  if (support.mspointer) {
    self.element.style.msTouchAction = 'pan-y';
  }

  // set opts
  opts = opts || {};
  self.distance = opts.distance;
  self.maxPoint = opts.maxPoint;
  self.disableTouch = (opts.disableTouch === undefined) ? false : opts.disableTouch;
  self.disable3d = (opts.disable3d === undefined) ? false : opts.disable3d;
  self.transitionDuration = (opts.transitionDuration === undefined) ? '350ms' : opts.transitionDuration + 'ms';

  // set property
  self.currentPoint = 0;
  self.currentX = 0;
  self.animation = false;
  self.use3d = support.transform3d;
  if (self.disable3d === true) {
    self.use3d = false;
  }

  // set default style
  if (support.cssAnimation) {
    self._setStyle({
      transitionProperty: getCSSVal('transform'),
      transitionTimingFunction: 'cubic-bezier(0,0,0.25,1)',
      transitionDuration: '0ms',
      transform: self._getTranslate(0)
    });
  }
  else {
    self._setStyle({
      position: 'relative',
      left: '0px'
    });
  }

  // initilize
  self.refresh();

  eventTypes.forEach(function(type) {
    self.element.addEventListener(events.start[type], self, false);
  });

  return self;
};

Flipsnap.prototype.handleEvent = function(event) {
  var self = this;

  switch (event.type) {
    // start
    case events.start.touch: self._touchStart(event, 'touch'); break;
    case events.start.mouse: self._touchStart(event, 'mouse'); break;

    // move
    case events.move.touch: self._touchMove(event, 'touch'); break;
    case events.move.mouse: self._touchMove(event, 'mouse'); break;

    // end
    case events.end.touch: self._touchEnd(event, 'touch'); break;
    case events.end.mouse: self._touchEnd(event, 'mouse'); break;

    // click
    case 'click': self._click(event); break;
  }
};

Flipsnap.prototype.refresh = function() {
  var self = this;

  // setting max point
  self._maxPoint = (self.maxPoint === undefined) ? (function() {
    var childNodes = self.element.childNodes,
      itemLength = -1,
      i = 0,
      len = childNodes.length,
      node;
    for(; i < len; i++) {
      node = childNodes[i];
      if (node.nodeType === 1) {
        itemLength++;
      }
    }

    return itemLength;
  })() : self.maxPoint;

  // setting distance
  if (self.distance === undefined) {
    if (self._maxPoint < 0) {
      self._distance = 0;
    }
    else {
      self._distance = self.element.scrollWidth / (self._maxPoint + 1);
    }
  }
  else {
    self._distance = self.distance;
  }

  // setting maxX
  self._maxX = -self._distance * self._maxPoint;

  self.moveToPoint();
};

Flipsnap.prototype.hasNext = function() {
  var self = this;

  return self.currentPoint < self._maxPoint;
};

Flipsnap.prototype.hasPrev = function() {
  var self = this;

  return self.currentPoint > 0;
};

Flipsnap.prototype.toNext = function(transitionDuration) {
  var self = this;

  if (!self.hasNext()) {
    return;
  }

  self.moveToPoint(self.currentPoint + 1, transitionDuration);
};

Flipsnap.prototype.toPrev = function(transitionDuration) {
  var self = this;

  if (!self.hasPrev()) {
    return;
  }

  self.moveToPoint(self.currentPoint - 1, transitionDuration);
};

Flipsnap.prototype.moveToPoint = function(point, transitionDuration) {
  var self = this;
  
  transitionDuration = transitionDuration === undefined
    ? self.transitionDuration : transitionDuration + 'ms';

  var beforePoint = self.currentPoint;

  // not called from `refresh()`
  if (point === undefined) {
    point = self.currentPoint;
  }

  if (point < 0) {
    self.currentPoint = 0;
  }
  else if (point > self._maxPoint) {
    self.currentPoint = self._maxPoint;
  }
  else {
    self.currentPoint = parseInt(point, 10);
  }

  if (support.cssAnimation) {
    self._setStyle({ transitionDuration: transitionDuration });
  }
  else {
    self.animation = true;
  }
  self._setX(- self.currentPoint * self._distance, transitionDuration);

  if (beforePoint !== self.currentPoint) { // is move?
    // `fsmoveend` is deprecated
    // `fspointmove` is recommend.
    self._triggerEvent('fsmoveend', true, false);
    self._triggerEvent('fspointmove', true, false);
  }
};

Flipsnap.prototype._setX = function(x, transitionDuration) {
  var self = this;
  self.currentX = x;
  if (support.cssAnimation) {
    self.element.style[ saveProp.transform ] = self._getTranslate(x);
  }
  else {
    if (self.animation) {
      self._animate(x, transitionDuration || self.transitionDuration);
    }
    else {
      self.element.style.left = x + 'px';
    }
  }
};

Flipsnap.prototype._touchStart = function(event, type) {
  var self = this;

  if (self.disableTouch || self.scrolling || gestureStart) {
    return;
  }

  self.element.addEventListener(events.move[type], self, false);
  document.addEventListener(events.end[type], self, false);

  var tagName = event.target.tagName;
  if (type === 'mouse' && tagName !== 'SELECT' && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && tagName !== 'BUTTON') {
    event.preventDefault();
  }

  if (support.cssAnimation) {
    self._setStyle({ transitionDuration: '0ms' });
  }
  else {
    self.animation = false;
  }
  self.scrolling = true;
  self.moveReady = false;
  self.startPageX = getPage(event, 'pageX');
  self.startPageY = getPage(event, 'pageY');
  self.basePageX = self.startPageX;
  self.directionX = 0;
  self.startTime = event.timeStamp;
  self._triggerEvent('fstouchstart', true, false);
};

Flipsnap.prototype._touchMove = function(event, type) {
  var self = this;

  if (!self.scrolling || gestureStart) {
    return;
  }

  var pageX = getPage(event, 'pageX');
  var pageY = getPage(event, 'pageY');
  var distX;
  var newX;

  if (self.moveReady) {
    event.preventDefault();

    distX = pageX - self.basePageX;
    newX = self.currentX + distX;
    if (newX >= 0 || newX < self._maxX) {
      newX = Math.round(self.currentX + distX / 3);
    }

    // When distX is 0, use one previous value.
    // For android firefox. When touchend fired, touchmove also
    // fired and distX is certainly set to 0. 
    self.directionX =
      distX === 0 ? self.directionX :
      distX > 0 ? -1 : 1;

    // if they prevent us then stop it
    var isPrevent = !self._triggerEvent('fstouchmove', true, true, {
      delta: distX,
      direction: self.directionX
    });

    if (isPrevent) {
      self._touchAfter({
        moved: false,
        originalPoint: self.currentPoint,
        newPoint: self.currentPoint,
        cancelled: true
      });
    } else {
      self._setX(newX);
    }
  }
  else {
    // https://github.com/pxgrid/js-flipsnap/pull/36
    var triangle = getTriangleSide(self.startPageX, self.startPageY, pageX, pageY);
    if (triangle.z > DISTANCE_THRESHOLD) {
      if (getAngle(triangle) > ANGLE_THREHOLD) {
        event.preventDefault();
        self.moveReady = true;
        self.element.addEventListener('click', self, true);
      }
      else {
        self.scrolling = false;
      }
    }
  }

  self.basePageX = pageX;
};

Flipsnap.prototype._touchEnd = function(event, type) {
  var self = this;

  self.element.removeEventListener(events.move[type], self, false);
  document.removeEventListener(events.end[type], self, false);

  if (!self.scrolling) {
    return;
  }

  var newPoint = -self.currentX / self._distance;
  newPoint =
    (self.directionX > 0) ? Math.ceil(newPoint) :
    (self.directionX < 0) ? Math.floor(newPoint) :
    Math.round(newPoint);

  if (newPoint < 0) {
    newPoint = 0;
  }
  else if (newPoint > self._maxPoint) {
    newPoint = self._maxPoint;
  }

  self._touchAfter({
    moved: newPoint !== self.currentPoint,
    originalPoint: self.currentPoint,
    newPoint: newPoint,
    cancelled: false
  });

  self.moveToPoint(newPoint);
};

Flipsnap.prototype._click = function(event) {
  var self = this;

  event.stopPropagation();
  event.preventDefault();
};

Flipsnap.prototype._touchAfter = function(params) {
  var self = this;

  self.scrolling = false;
  self.moveReady = false;

  setTimeout(function() {
    self.element.removeEventListener('click', self, true);
  }, 200);

  self._triggerEvent('fstouchend', true, false, params);
};

Flipsnap.prototype._setStyle = function(styles) {
  var self = this;
  var style = self.element.style;

  for (var prop in styles) {
    setStyle(style, prop, styles[prop]);
  }
};

Flipsnap.prototype._animate = function(x, transitionDuration) {
  var self = this;

  var elem = self.element;
  var begin = +new Date();
  var from = parseInt(elem.style.left, 10);
  var to = x;
  var duration = parseInt(transitionDuration, 10);
  var easing = function(time, duration) {
    return -(time /= duration) * (time - 2);
  };
  var timer = setInterval(function() {
    var time = new Date() - begin;
    var pos, now;
    if (time > duration) {
      clearInterval(timer);
      now = to;
    }
    else {
      pos = easing(time, duration);
      now = pos * (to - from) + from;
    }
    elem.style.left = now + "px";
  }, 10);
};

Flipsnap.prototype.destroy = function() {
  var self = this;

  eventTypes.forEach(function(type) {
    self.element.removeEventListener(events.start[type], self, false);
  });
};

Flipsnap.prototype._getTranslate = function(x) {
  var self = this;

  return self.use3d
    ? 'translate3d(' + x + 'px, 0, 0)'
    : 'translate(' + x + 'px, 0)';
};

Flipsnap.prototype._triggerEvent = function(type, bubbles, cancelable, data) {
  var self = this;

  var ev = document.createEvent('Event');
  ev.initEvent(type, bubbles, cancelable);

  if (data) {
    for (var d in data) {
      if (data.hasOwnProperty(d)) {
        ev[d] = data[d];
      }
    }
  }

  return self.element.dispatchEvent(ev);
};

function getPage(event, page) {
  return event.changedTouches ? event.changedTouches[0][page] : event[page];
}

function hasProp(props) {
  return some(props, function(prop) {
    return div.style[ prop ] !== undefined;
  });
}

function setStyle(style, prop, val) {
  var _saveProp = saveProp[ prop ];
  if (_saveProp) {
    style[ _saveProp ] = val;
  }
  else if (style[ prop ] !== undefined) {
    saveProp[ prop ] = prop;
    style[ prop ] = val;
  }
  else {
    some(prefix, function(_prefix) {
      var _prop = ucFirst(_prefix) + ucFirst(prop);
      if (style[ _prop ] !== undefined) {
        saveProp[ prop ] = _prop;
        style[ _prop ] = val;
        return true;
      }
    });
  }
}

function getCSSVal(prop) {
  if (div.style[ prop ] !== undefined) {
    return prop;
  }
  else {
    var ret;
    some(prefix, function(_prefix) {
      var _prop = ucFirst(_prefix) + ucFirst(prop);
      if (div.style[ _prop ] !== undefined) {
        ret = '-' + _prefix + '-' + prop;
        return true;
      }
    });
    return ret;
  }
}

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function some(ary, callback) {
  for (var i = 0, len = ary.length; i < len; i++) {
    if (callback(ary[i], i)) {
      return true;
    }
  }
  return false;
}

function getTriangleSide(x1, y1, x2, y2) {
  var x = Math.abs(x1 - x2);
  var y = Math.abs(y1 - y2);
  var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  return {
    x: x,
    y: y,
    z: z
  };
}

function getAngle(triangle) {
  var cos = triangle.y / triangle.z;
  var radina = Math.acos(cos);

  return 180 / (Math.PI / radina);
}

window.Flipsnap = Flipsnap;

})(window, window.document);

//addon
function flipnapResponsive(obj,p){ //class명
  if(p==null) p={};
  var p,
    obj=obj,
    $obj=jQuery('#'+obj),
    objR=$obj.find('.flipsnap'),
    objW=$obj.width(),
    item=$obj.find('.item'),
    itemL=item.length,    
    loop=p.loop;
  if(p.max==null) p.max=itemL-1;
  (p.danView>1) ? p.max=Math.ceil(itemL/p.danView)-1 : p.danView=1;
  if(p.danDist==null) p.danDist=1;
  if(p.start==null) p.start=0;
  if(p.danListing==true){
    p.max=itemL-p.danView;
    dist=item.width();
  }else{
    dist=objW;
  };    
  if(loop==true){
	if(itemL > 1){/*[고] 추가 : item 갯수가 1개 이상일 때 loop실행*/
		var first=$obj.find('.item:first-child');
		var last=$obj.find('.item:last-child');
		first.clone().appendTo(objR).addClass('shadow');
		last.clone().prependTo(objR).addClass('shadow');
		p.max=itemL+1;
	}
  };
  //init
  var objFn=Flipsnap('#'+obj+' .flipsnap',{
    maxPoint:p.max,
    distance:dist,
    transitionDuration:p.speed
  });
  //start
  if(p.start!=0) objFn.moveToPoint(p.start,0);
  //paging
  (p.danView>1) ? pn=p.max : pn=itemL-1;
  if(p.paging){
	 if($obj.find(".pointer")){$obj.find(".pointer").remove();}/*[고] 추가 : pointer 있는 경우 기존 pointer 삭제*/
    jQuery('<div class="pointer"></div>').clone().appendTo($obj);
    var text,
      active=objFn.currentPoint;
    for(var i=0;i<pn+1;i++){
      (active==i) ? text='<span class="current">'+(i+1)+'</span>' : text='<span>'+(i+1)+'</span>';
      jQuery(text).clone().appendTo($obj.find('.pointer'));
    };
  };
  if(p.numbering){
	 if($obj.find(".numbering")){$obj.find(".numbering").remove();}/*[고] 추가 : numbering 있는 경우 기존 numbering 삭제*/
    var loop;
    jQuery('<div class="numbering"></div>').clone().appendTo($obj);
    var text='<em>'+(objFn.currentPoint+1)+'</em>/<span>'+(pn+1)+'</span>';
    jQuery(text).clone().appendTo(jQuery('#'+obj+' .numbering'));
    objFn.element.addEventListener('fspointmove', function(){
      var total=objR.find('.item').size()-1;
      if(loop&&objFn.currentPoint==0){
        var num=total-1;
      }else if(loop&&objFn.currentPoint==total){
        var num=1;
      }else if(loop){
        var num=objFn.currentPoint;
      }else{
        var num=objFn.currentPoint+1;
      }
      $obj.find('.numbering em').text(num);
    }, false);
  };
  var jQuerypointer=$obj.find('.pointer span');
  var loopNum=$obj.find('.shadow').length;//hidden item
  if(loop!=true){
    //defalut
    objFn.element.addEventListener('fspointmove', function(){
      jQuerypointer.filter('.current').removeClass('current');//active
      jQuerypointer.eq(objFn.currentPoint).addClass('current');
    }, false);
  }else{
    //loop
    objFn.moveToPoint(p.start+1,0);
    objFn.element.addEventListener('fstouchstart', function(){
      if(objFn.currentPoint==0){
        objFn.moveToPoint(p.max-1,0);
      }else if(objFn.currentPoint==itemL+1){
        objFn.moveToPoint(1,0);
      };
    }, false);
    objFn.element.addEventListener('fspointmove', function(){
      var total=objR.find('.item').size()-1;
      var item=jQuery('#'+obj+' .item');
      if(objFn.currentPoint==0){
        var num=total-2;
      }else if(objFn.currentPoint==total){
        var num=0;
      }else{
        var num=objFn.currentPoint-1;
      };
      //active
      item.removeClass('current');
      item.eq(objFn.currentPoint).addClass('current');
      //page
      jQuerypointer.filter('.current').removeClass('current');
      jQuerypointer.eq(num).addClass('current');
    }, false);
    item.eq(objFn.currentPoint-1).addClass('current'); //active   
  };
  //btn
  if(p.btnPrev&&p.btnNext){
    var jQuerynext = $obj.find('.'+p.btnNext).click(function(){
      (!loop) ? objFn.toNext() :  (objFn.currentPoint>p.max-2) ? objFn.moveToPoint(1) : objFn.toNext();
      return false;
    });
    var jQueryprev = $obj.find('.'+p.btnPrev).click(function(){
      (!loop) ? objFn.toPrev() :  (objFn.currentPoint==1) ? objFn.moveToPoint(itemL) : objFn.toPrev();
      return false;
    });
    if(!loop){
      objFn.element.addEventListener('fspointmove', function(){
        jQuerynext.prop('disabled', !objFn.hasNext());
        jQueryprev.prop('disabled', !objFn.hasPrev());
      }, false);
    };
  };
  //auto
  if(p.auto){
    var autoSpeed=p.auto;
    function changeFunc(){
      if(loop!=true){
        (p.danListing) ? total=pn : total=itemL;
        (total-1<objFn.currentPoint+1) ? objFn.moveToPoint(0) : objFn.toNext();
      }else{
        (p.max-1<objFn.currentPoint+1) ? objFn.moveToPoint(1) : objFn.toNext();       
      };
    };
    var autoRoll=setInterval(changeFunc,autoSpeed);
    $obj.bind('mouseenter touchstart',function(){
      clearTimeout(autoRoll);
    }).bind('mouseleave touchend',function(){
      autoRoll=setInterval(changeFunc,autoSpeed);
    });
  };
  //load images
  if(p.loadImage){
    var loadImage=p.loadImage;
    function loadImageFn(loadImage){
      var act=$obj.find('.current');
      var array=[act,act.next(),act.prev()];
      for(n=0;n<array.length;n++){
        var target=array[n].find('.'+loadImage);
        var datasrc=target.attr('data-src');
        if(datasrc){
		  if(p.noImage){/*[고] 추가 : image load 실패시 노출*/
			  var blank = p.noImage;
		  }else{
			  var blank = target.attr('src');
		  }
		  target.attr('src',datasrc).bind('load error', function(){/*[고] 추가 : image load error case 추가*/
			jQuery(this).removeAttr('data-src').removeClass(loadImage).parents('.item').addClass('loadingComplete');
		  }).bind('error', function(){
			jQuery(this).attr('src', blank);
		  });
        };
      };
    };
    loadImageFn(loadImage);
    objFn.element.addEventListener('fspointmove', function(){
      loadImageFn(loadImage);
    }, false);
  };
  jQuery('.flipsnap').addClass('flipsnapComplete');/*[고] 추가 : flipsnap loading 완료 체크 추가*/
  //responsive
  function flipsnapRe(loopNum){
    var objW=$obj.width();
    var itemW=objW/p.danView;
    $obj.find('.item').css({width:itemW});
    objR.css({width:itemW*(itemL+loopNum)});
    if(p.danListing==true){
      p.max=itemL;
      dist=item.width();
    }else{
      dist=objW;
    };
  	function loadCheck(){
  		var currentItemH = objR.find('.item').eq(objFn.currentPoint).height();
      objR.stop().animate({height:currentItemH},300,'swing');
  	};
  	var datasrc=objR.find('.item img:first-child:eq('+objFn.currentPoint+') ').attr('src');
  	objR.find('.item img:first-child:eq('+objFn.currentPoint+') ').attr('src',datasrc).bind('load', function(){
  		loadCheck();
  	});
  	objFn.element.addEventListener('fsmoveend', function(){
  		loadCheck();
  	}, false);
  	loadCheck();
    objFn.distance=dist;
    objFn.refresh();
  };
  jQuery(window).bind("resize", function(){
    flipsnapRe(loopNum);
  }).trigger("resize");
};



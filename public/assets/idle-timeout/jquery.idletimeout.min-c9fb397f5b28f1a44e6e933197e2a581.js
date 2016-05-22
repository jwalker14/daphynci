/*
 * jQuery Idle Timeout 1.2
 * Copyright (c) 2011 Eric Hynds
 * http://www.erichynds.com/jquery/a-new-and-improved-jquery-idle-timeout-plugin/
*/

(function(e,t){var n={init:function(n,r,i){var s=this,o;this.warning=o=e(n);this.resume=e(r);this.options=i;this.countdownOpen=false;this.failedRequests=i.failedRequests;this._startTimer();this.title=document.title;e.data(o[0],"idletimeout",this);e.idleTimer(i.idleAfter*1e3);e(document).bind("idle.idleTimer",function(){if(e.data(document,"idleTimer")==="idle"&&!s.countdownOpen){s._stopTimer();s.countdownOpen=true;s._idle()}});this.resume.bind("click",function(e){e.preventDefault();t.clearInterval(s.countdown);s.countdownOpen=false;s._startTimer();s._keepAlive(false);i.onResume.call(s.warning)})},_idle:function(){var e=this,n=this.options,r=this.warning[0],i=n.warningLength;n.onIdle.call(r);n.onCountdown.call(r,i);this.countdown=t.setInterval(function(){if(--i===0){window.clearInterval(e.countdown);n.onTimeout.call(r)}else{n.onCountdown.call(r,i);document.title=n.titleMessage.replace("%s",i)+e.title}},1e3)},_startTimer:function(){var e=this;this.timer=t.setTimeout(function(){e._keepAlive()},this.options.pollingInterval*1e3)},_stopTimer:function(){this.failedRequests=this.options.failedRequests;t.clearTimeout(this.timer)},_keepAlive:function(t){var n=this,r=this.options;document.title=n.title;if(typeof t==="undefined"){t=true}if(!this.failedRequests){this._stopTimer();r.onAbort.call(this.warning[0]);return}e.ajax({timeout:r.AJAXTimeout,url:r.keepAliveURL,error:function(){n.failedRequests--},success:function(t){if(e.trim(t)!==r.serverResponseEquals){n.failedRequests--}},complete:function(){if(t){n._startTimer()}}})}};e.idleTimeout=function(t,r,i){n.init(t,r,e.extend(e.idleTimeout.options,i));return this};e.idleTimeout.options={warningLength:30,keepAliveURL:"",serverResponseEquals:"OK",idleAfter:600,pollingInterval:60,failedRequests:5,AJAXTimeout:250,titleMessage:"Warning: %s seconds until log out | ",onTimeout:e.noop,onIdle:e.noop,onCountdown:e.noop,onResume:e.noop,onAbort:e.noop}})(jQuery,window)
;
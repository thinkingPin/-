// 创建实例函数
function Tab(tabId,active) {
	this.init(tabId,active)
}

// 初始化
Tab.prototype.init = function (tabId,active) {
	var elem = this.elem = document.querySelector(tabId);
	this.tabs = elem.querySelectorAll('.tab-head li');
	this.panels = elem.querySelectorAll('.tab-panel');
	console.log(this.tabs)
	
	active = active || 0;
	this.active(active);
	this.evens();
}


// 响应点击事件方法
Tab.prototype.active = function (index) {
	if(index === this.current){
		return
	}
	this.tabs[index].classList.add('active');
	this.panels[index].classList.add('active');
	if(typeof this.current === 'number'){
		this.tabs[this.current].classList.remove('active');
		this.panels[this.current].classList.remove('active');
	}
		
	this.current = index
}


// 事件函数
Tab.prototype.evens = function () {
	var tabs = this.tabs;
	var len = tabs.length;
	var that = this;
	
	for(let i = 0; i < len; i++) {
		tabs[i].addEventListener('click', function() {
			that.active.call(that,i)
		})
	}
}

new Tab('#tab1',1);
new Tab('#tab2');

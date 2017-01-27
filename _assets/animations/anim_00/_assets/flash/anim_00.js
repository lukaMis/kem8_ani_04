(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WaterTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1682FB").s().p("AAAHvQm3gIkiirQh8hJhEhYQhChVAAhOQAAhiBOhaQBLhYCIhDQEjiQGXAAQGYAAEiCQQCJBDBLBYQBNBaAABiQABBJg/BWQhDBdh3BLQkaCxmiAAIgngBg");
	this.shape.setTransform(98.8,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WaterTop, new cjs.Rectangle(0,0,197.5,99.2), null);


(lib.Water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1682FB").s().p("ArSN1QiLhUhNhxQhPh1AAiHIAAvEQAAgyAUg+QAUhCAbgYQBThkCnhQQEciJGhgKQAogBBwAJQBqAIArAHQE4AyDHCGQDNCJAACoIAAOrQAACHhSB7QhQB3iPBdQiQBbi4AzQi+A0jMAAQmnAAkiitg");
	this.shape.setTransform(101.8,91.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Water, new cjs.Rectangle(0,-14,203.6,211.6), null);


(lib.StiringLine2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1682FB").ss(6,1).p("Ai8hBQBuAIBRAZQBoAgBSBC");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.StiringLine2, new cjs.Rectangle(-21.9,-9.5,51.7,19.2), null);


(lib.StiringLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1682FB").ss(6,1).p("AD0A0Qh4ALh5gZQiBgch1hB");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.StiringLine, new cjs.Rectangle(-27.4,-8.5,57.7,21.6), null);


(lib.SpoonUpper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("A98DvQj6hMgEiNQgEiFDLhbQC7hSEDgJQDxgICzA4QDAA8AmBuQIXgaOKgcQPbgeH3gCQBIgBAYAXQATASgBAzIABAtQABAVgHAJQgQAWhZAAQtlgFpAgBQwwgDmtAKQgmBmifBLQisBRjqAIIgwABQjGAAi1g4gA3sjhQjgAHivBFQi2BIADBZQADBNDPBBQDOBADbgHQAvgCAhgEQCygRB/hRQB3hLgChJQgCgvg6grQg9guhkgVQiFgciWAAIg3ABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpoonUpper, new cjs.Rectangle(-217.1,-29.4,434.3,59), null);


(lib.SpoonLower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AASA2IgWAAIgoAAQAagrAkgwIAMgQQAbA0gWA3g");
	this.shape.setTransform(-90.8,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7C7C7").s().p("AkJCiQi9g/gDhPQAAgSAGgPQAahGCTg6QCvhFDfgIIAcAAIACAAQCZgDCJAbIASADIAAABIhgDLQg9B+gsBKQghAEgvABIg2ABQjVAAivg5g");
	this.shape_1.setTransform(-163.7,-12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBDBD").s().p("A/JCtQhRhFgyhRQgshEgCgqQAlgbAtgcQgGAQAAASQADBPC9A+QDFBAD2gIQAvgBAhgEQAshKA9h9IBgjMIAAgBQA0ALApASQCaA3AxBWQAHgEAJgDINTAJQOEAID9gDQDPgCDZgBQDjAABYACICLADQA4gBARgFQAOgFgHgbQgKgcAAgFQAAgVAQgOQAPgOAVAAQAkABgEA0QgIBzgXAbQgeAlh4AEUgBFAACgrugAJQgHAvgmA3QgvBGhTA9Qi/CNjiAHIgfAAQkcAAjQiwgAt5h9QglAxgbArIAoAAIAYABIAAgBIARAAQAVg4gag0IgMAQgA3OlbIAGgBQCXgFCFAeQiJgbiZADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpoonLower, new cjs.Rectangle(-217,-34.9,434.2,69.9), null);


(lib.SpoonFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AACAeIgWAAIgIAAQAXgdALgeIAXAAQACAdgMAeg");
	this.shape.setTransform(-89.2,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7C7C7").s().p("ABEDaQiggIibgwQjCg9gPhHIgBgKQAAgRAGgQQAahGCTg6QCvhEDfgIIAcAAIACAAIAmgBIARABIAQAAIADAAIAIAAIApACIAWABIAIABICCASIAEABIADAAIAJACIAJACIAAABIhgDLQg9B9gsBLQghAEgvABg");
	this.shape_1.setTransform(-163.7,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBDBD").s().p("A/JCeQhRhEgyhRQgshFgCgpIABAAQAOCDDvBJQDLA+DggHQDqgICshRQBug0A1hAIAHAAIAYAAIAAAAIARAAQAMgfgDgeQGygJQUADQJAABNlAFQBJAAAYgPQgIAfgKAMQgeAkh4AEUgBFAACgrugAJQgHAwgmA3QgvBFhTA+Qi/CMjiAHIgfABQkcAAjQixgAz6iBIBgjNIAAAAQA0ALApASQAnAQAdAWQA6ArACAvQACBKh3BLQh/BQiyARQAshJA9h9gEAhsgEOQARALgDAkIAAADQgBgigNgQg");
	this.shape_2.setTransform(0,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("A98DvQjvhJgOiEIgBgMQgEiFDLhbQC7hSEDgJQDxgICzA4QDAA8AmBuQIXgaOKgcQPbgeH3gCQBIgBAYAXIAEAFQANAQABAiIAAAOIABAtQABAVgHAJQgDAEgFADQgYAPhJAAQtlgFpAgBQwUgDmyAJIgXABQgMAfgWAdQg1BBhuA0QisBRjqAIIgwABQjGAAi1g4gA3sjhQjgAHivBFQiTA6gaBGQgGARAAAQIABAKQAPBHDCA9QCbAwChAIIBtABQAvgCAhgEQCygRB/hRQB3hLgChJQgCgvg6grQgdgWgngQQgpgSg0gLIgJgCIgJgCIgDAAIgEgBIiCgSIgIgBIgWgBIgpgCIgIAAIgDAAIgQgBIgRAAIgmAAIgCAAIgcABg");
	this.shape_3.setTransform(0,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpoonFull, new cjs.Rectangle(-217.1,-38.2,434.3,76.6), null);


(lib.SpoonFlipped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBDBD").s().p("AhAAdQi1icibhlQA+gnBVgXQBZgYBbAAQDJAACJBqQCIBoAACXQAAAugQAuQgdBZhSBCIgbAUQjUjGhjhXg");
	this.shape.setTransform(-138.7,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7C7C7").s().p("AkBDUQichsAAiSQAAgvAXg1QAUgsAigpQAqg0A9gmQCaBlC0CcQBlBWDUDHQhAAshRAYQhTAZhdAAQjGAAiYhqg");
	this.shape_1.setTransform(-155.4,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("A9rFOQiuiFAAjMQAAi4C3iLQC6iND/AAQDcAACfBpQCiBqAiCuQD/gHQGgnQPvgnIFgNQBKgCAhAfQAiAegCBGQgDBZgVAcQgcAmhZAAQnQAAvGgMQsdgJpEgLQgvC+isBsQibBijJAAQkTAAiviGgA5olQQhVAXg+AnQg9AmgqA0QgiApgUAsQgXA1AAAuQAACTCcBsQCYBqDHAAQBdAABTgZQBRgYBAgsIAbgUQBRhCAehaQAPgtAAgvQAAiWiHhoQiKhqjJAAQhcAAhYAYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpoonFlipped, new cjs.Rectangle(-207.4,-46.7,414.8,93.6), null);


(lib.Shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BFFFE").s().p("AhEDlQgegfAAgsQgHhMABhBQABh9AngfQA4gtBxhIIAAF8QAAA6geApQgeAqgqAAQgpAAgeggg");
	this.shape.setTransform(0,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9BFFFE").s().p("AhHBLQgegfAAgsQAAgrAegfQAegfApAAQArAAAdAfQAeAfAAArQAAAsgeAfQgdAfgrAAQgpAAgegfg");
	this.shape_1.setTransform(0.4,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shine, new cjs.Rectangle(-10.5,-42.3,21.1,84.6), null);


(lib.Salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.8,0,1).p("AAYgXIABA2IgMAGIgkgKIgBg1IAYgKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F7F7").s().p("AgXAbIgBg1IAYgKIAYANIABA2IgMAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Salt, new cjs.Rectangle(-3.5,-4.6,7,9.4), null);


(lib.PotEdgeUpper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7FFFE").s().p("AwnBfQBZhUCBhDQDChnEKg4QD/g3EGAAQCHAAB1APQFPAnDiCHQDxCPAJDAIhmAAQgLiOjKhyQjMh0kwglQhygNh+AAQkAAAj3A1Qj3A2izBdQhgAzhIA+QhHA8gpBAQgngEhOAGQAphbBahVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PotEdgeUpper, new cjs.Rectangle(-119.4,-27,239,54.2), null);


(lib.PotEdgeLower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7FFFE").s().p("ApsEAQiigwgNgFQhJgag1gpIlughQgJgcA9hQQBeh+AJgPQgNhSAuhmQBNgGAoAEQg6BbANBQIAGAkIgTAgQgaAsg7BBIDyAWIAXARQAlAcAwATQAfAMBYAaIBCATQEgBXE0AAQDnAADZgwQDXgwCuhaQCchPBahkQBahjAIhkQABgKgBgSIBmAAQABATgBARQgLCChrB6QhnB1iyBcQizBcjgAzQjpA1j4AAQlEAAkuhbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PotEdgeLower, new cjs.Rectangle(-128.9,-34.7,257.9,69.5), null);


(lib.PotBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47E8FD").s().p("ApiFsQh3hHhChdQhEhfAAhpQAAhnBEhgQBChcB3hHQD9iXFlAAQFmAAD9CXQB3BHBCBcQBEBgAABnQAABphEBfQhCBdh3BHQj9CWlmAAQllAAj9iWg");
	this.shape.setTransform(10.6,106.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87EBFE").s().p("AsUaIQichvhViNQhUiNAAiSIAA2hQhgj4hKnSQgGglBcgYQAKgmANgnQA9iXAAgRQAAhQBrhmQBrhmCyhbQC+hhDbg4QDzg+DrAAQHVAAFTCkQCTBHBSBXQBSBVAABRMAAAAogQAACehOCJQhOCKiXBmQlHDeo2AAQoNAAlcj3gAn4K8Qh4BHhBBcQhEBgAABoQAABpBEBfQBBBdB4BHQD8CWFlAAQFmAAD9iWQB4hHBBhdQBEhfAAhpQAAhohEhgQhBhch4hHQj9iXlmAAQlkAAj9CXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PotBg, new cjs.Rectangle(-128.4,-191.8,257,383.8), null);


(lib.SaltInWater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shine
	this.shine = new lib.Shine();
	this.shine.parent = this;
	this.shine.setTransform(207,306.9);
	this.shine.alpha = 0.898;
	this.shine.cache(-12,-44,25,89);

	this.timeline.addTween(cjs.Tween.get(this.shine).wait(100));

	// stiringLine
	this.stiringLine = new lib.StiringLine();
	this.stiringLine.parent = this;
	this.stiringLine.setTransform(107.1,320.3,1,1,0,0,0,1.4,2.2);
	this.stiringLine.alpha = 0.281;
	this.stiringLine.cache(-29,-10,62,26);

	this.timeline.addTween(cjs.Tween.get(this.stiringLine).wait(100));

	// stiringLine2
	this.stiringLine2 = new lib.StiringLine2();
	this.stiringLine2.parent = this;
	this.stiringLine2.setTransform(180.4,248.1,1,1,0,0,0,4,0);
	this.stiringLine2.alpha = 0.281;
	this.stiringLine2.cache(-24,-11,56,23);

	this.timeline.addTween(cjs.Tween.get(this.stiringLine2).wait(100));

	// potEdgeLower
	this.potEdgeLower = new lib.PotEdgeLower();
	this.potEdgeLower.parent = this;
	this.potEdgeLower.setTransform(129,124.6);
	this.potEdgeLower.cache(-131,-37,262,74);

	this.timeline.addTween(cjs.Tween.get(this.potEdgeLower).wait(100));

	// waterTop
	this.waterTop = new lib.WaterTop();
	this.waterTop.parent = this;
	this.waterTop.setTransform(138.8,245.2,1,1,0,0,0,98.8,49.6);
	this.waterTop.alpha = 0.199;
	this.waterTop.cache(-2,-2,202,103);

	this.timeline.addTween(cjs.Tween.get(this.waterTop).wait(100));

	// water
	this.water = new lib.Water();
	this.water.parent = this;
	this.water.setTransform(139,308.1,1,1,0,0,0,101.8,98.9);
	this.water.alpha = 0.281;
	this.water.cache(-2,-16,208,216);

	this.timeline.addTween(cjs.Tween.get(this.water).wait(100));

	// spoonUpper
	this.spoonUpper = new lib.SpoonUpper();
	this.spoonUpper.parent = this;
	this.spoonUpper.setTransform(292.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.spoonUpper).to({_off:true},9).wait(56).to({_off:false},0).wait(35));

	// salt
	this.salt = new lib.Salt();
	this.salt.parent = this;
	this.salt.setTransform(160,43.5);

	this.timeline.addTween(cjs.Tween.get(this.salt).wait(16).to({y:186.3},7,cjs.Ease.get(0.05)).to({y:349.5},23,cjs.Ease.get(-0.25)).to({x:148.5,y:305.5,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_1 = new lib.Salt();
	this.salt_1.parent = this;
	this.salt_1.setTransform(113.8,43.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_1).wait(16).to({y:186.3},7,cjs.Ease.get(0.05)).to({y:349.5},23,cjs.Ease.get(-0.25)).to({x:102.3,y:305.5,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_2 = new lib.Salt();
	this.salt_2.parent = this;
	this.salt_2.setTransform(113.3,43.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_2).wait(16).to({y:186.3},7,cjs.Ease.get(0.05)).to({y:349.5},23,cjs.Ease.get(-0.25)).to({x:101.8,y:305.5,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_3 = new lib.Salt();
	this.salt_3.parent = this;
	this.salt_3.setTransform(116,42.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_3).wait(16).to({y:185.1},7,cjs.Ease.get(0.05)).to({y:348.3},23,cjs.Ease.get(-0.25)).to({x:104.5,y:304.3,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_4 = new lib.Salt();
	this.salt_4.parent = this;
	this.salt_4.setTransform(169.5,44);

	this.timeline.addTween(cjs.Tween.get(this.salt_4).wait(16).to({y:186.8},7,cjs.Ease.get(0.05)).to({y:350},23,cjs.Ease.get(-0.25)).to({x:158,y:306,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_5 = new lib.Salt();
	this.salt_5.parent = this;
	this.salt_5.setTransform(150.5,43.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_5).wait(16).to({y:186.5},7,cjs.Ease.get(0.05)).to({y:349.7},23,cjs.Ease.get(-0.25)).to({x:139,y:305.7,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_6 = new lib.Salt();
	this.salt_6.parent = this;
	this.salt_6.setTransform(113.3,43.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_6).wait(16).to({y:186.5},7,cjs.Ease.get(0.05)).to({y:349.7},23,cjs.Ease.get(-0.25)).to({x:101.8,y:305.7,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_7 = new lib.Salt();
	this.salt_7.parent = this;
	this.salt_7.setTransform(109.3,45.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_7).wait(16).to({y:188.3},7,cjs.Ease.get(0.05)).to({y:351.5},23,cjs.Ease.get(-0.25)).to({x:97.8,y:307.5,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_8 = new lib.Salt();
	this.salt_8.parent = this;
	this.salt_8.setTransform(161.8,46.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_8).wait(16).to({y:189.6},7,cjs.Ease.get(0.05)).to({y:352.8},23,cjs.Ease.get(-0.25)).to({x:150.3,y:308.8,alpha:0},6).to({_off:true},1).wait(47));

	// salt
	this.salt_9 = new lib.Salt();
	this.salt_9.parent = this;
	this.salt_9.setTransform(123.3,43.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_9).wait(15).to({y:186.5},6,cjs.Ease.get(0.05)).to({y:349.7},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:201,y:293.9,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_10 = new lib.Salt();
	this.salt_10.parent = this;
	this.salt_10.setTransform(146.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_10).wait(15).to({y:188.3},6,cjs.Ease.get(0.05)).to({y:351.5},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:202.2,y:317.2,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_11 = new lib.Salt();
	this.salt_11.parent = this;
	this.salt_11.setTransform(156.8,41.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_11).wait(15).to({y:184.1},6,cjs.Ease.get(0.05)).to({y:347.3},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:207.6,y:326.8,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_12 = new lib.Salt();
	this.salt_12.parent = this;
	this.salt_12.setTransform(147.3,45.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_12).wait(15).to({y:188.3},6,cjs.Ease.get(0.05)).to({y:351.5},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:202.3,y:317.9,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_13 = new lib.Salt();
	this.salt_13.parent = this;
	this.salt_13.setTransform(116.8,45.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_13).wait(15).to({y:188.3},6,cjs.Ease.get(0.05)).to({y:351.5},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:198.4,y:287.6,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_14 = new lib.Salt();
	this.salt_14.parent = this;
	this.salt_14.setTransform(157.3,46.6);

	this.timeline.addTween(cjs.Tween.get(this.salt_14).wait(15).to({y:189.4},6,cjs.Ease.get(0.05)).to({y:352.6},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:202.4,y:328,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_15 = new lib.Salt();
	this.salt_15.parent = this;
	this.salt_15.setTransform(137.3,46.6);

	this.timeline.addTween(cjs.Tween.get(this.salt_15).wait(15).to({y:189.4},6,cjs.Ease.get(0.05)).to({y:352.6},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:199.9,y:308.1,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_16 = new lib.Salt();
	this.salt_16.parent = this;
	this.salt_16.setTransform(165,44.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_16).wait(15).to({y:187.3},6,cjs.Ease.get(0.05)).to({y:350.5},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:205.5,y:335.4,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_17 = new lib.Salt();
	this.salt_17.parent = this;
	this.salt_17.setTransform(128,47.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_17).wait(15).to({y:190.3},6,cjs.Ease.get(0.05)).to({y:353.5},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:197.8,y:299.1,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_18 = new lib.Salt();
	this.salt_18.parent = this;
	this.salt_18.setTransform(142.3,47.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_18).wait(15).to({y:190.1},6,cjs.Ease.get(0.05)).to({y:353.3},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:199.8,y:313.2,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_19 = new lib.Salt();
	this.salt_19.parent = this;
	this.salt_19.setTransform(161,47.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_19).wait(15).to({y:190.1},6,cjs.Ease.get(0.05)).to({y:353.3},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:202.2,y:331.8,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_20 = new lib.Salt();
	this.salt_20.parent = this;
	this.salt_20.setTransform(126,49.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_20).wait(15).to({y:192.7},6,cjs.Ease.get(0.05)).to({y:355.9},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:195.2,y:297.4,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_21 = new lib.Salt();
	this.salt_21.parent = this;
	this.salt_21.setTransform(138.8,49.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_21).wait(15).to({y:192.6},6,cjs.Ease.get(0.05)).to({y:355.8},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:196.9,y:310,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_22 = new lib.Salt();
	this.salt_22.parent = this;
	this.salt_22.setTransform(144.5,48.6);

	this.timeline.addTween(cjs.Tween.get(this.salt_22).wait(15).to({y:191.4},6,cjs.Ease.get(0.05)).to({y:354.6},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:198.8,y:315.6,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_23 = new lib.Salt();
	this.salt_23.parent = this;
	this.salt_23.setTransform(157.8,48.6);

	this.timeline.addTween(cjs.Tween.get(this.salt_23).wait(15).to({y:191.4},6,cjs.Ease.get(0.05)).to({y:354.6},24,cjs.Ease.get(-0.25)).to({rotation:82.7,x:200.5,y:328.7,alpha:0},6).to({_off:true},1).wait(48));

	// salt
	this.salt_24 = new lib.Salt();
	this.salt_24.parent = this;
	this.salt_24.setTransform(147.3,52.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_24).wait(14).to({y:195.7},7,cjs.Ease.get(0.05)).to({y:358.9},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:140.9,y:313.4,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_25 = new lib.Salt();
	this.salt_25.parent = this;
	this.salt_25.setTransform(166,52.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_25).wait(14).to({y:195.7},7,cjs.Ease.get(0.05)).to({y:358.9},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:157.2,y:322.7,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_26 = new lib.Salt();
	this.salt_26.parent = this;
	this.salt_26.setTransform(138.8,53);

	this.timeline.addTween(cjs.Tween.get(this.salt_26).wait(14).to({y:195.8},7,cjs.Ease.get(0.05)).to({y:359},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:133.4,y:309.3,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_27 = new lib.Salt();
	this.salt_27.parent = this;
	this.salt_27.setTransform(125,53.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_27).wait(14).to({y:196},7,cjs.Ease.get(0.05)).to({y:359.2},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:121.4,y:302.7,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_28 = new lib.Salt();
	this.salt_28.parent = this;
	this.salt_28.setTransform(129.5,58.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_28).wait(14).to({y:201},7,cjs.Ease.get(0.05)).to({y:364.2},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:122.8,y:309.2,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_29 = new lib.Salt();
	this.salt_29.parent = this;
	this.salt_29.setTransform(114.3,51);

	this.timeline.addTween(cjs.Tween.get(this.salt_29).wait(14).to({y:193.8},7,cjs.Ease.get(0.05)).to({y:357},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:113.1,y:295.4,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_30 = new lib.Salt();
	this.salt_30.parent = this;
	this.salt_30.setTransform(121,47.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_30).wait(14).to({y:190.7},7,cjs.Ease.get(0.05)).to({y:353.9},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:120.6,y:296.1,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_31 = new lib.Salt();
	this.salt_31.parent = this;
	this.salt_31.setTransform(108.8,52.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_31).wait(14).to({y:195.7},7,cjs.Ease.get(0.05)).to({y:358.9},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:107.4,y:294.3,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_32 = new lib.Salt();
	this.salt_32.parent = this;
	this.salt_32.setTransform(179.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_32).wait(14).to({y:190.3},7,cjs.Ease.get(0.05)).to({y:353.5},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:171.5,y:324.8,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_33 = new lib.Salt();
	this.salt_33.parent = this;
	this.salt_33.setTransform(162.8,54.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_33).wait(14).to({y:197},7,cjs.Ease.get(0.05)).to({y:360.2},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:153.7,y:322.2,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_34 = new lib.Salt();
	this.salt_34.parent = this;
	this.salt_34.setTransform(132.7,47.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_34).wait(14).to({y:190.7},7,cjs.Ease.get(0.05)).to({y:353.9},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:130.7,y:301.9,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_35 = new lib.Salt();
	this.salt_35.parent = this;
	this.salt_35.setTransform(151.5,51);

	this.timeline.addTween(cjs.Tween.get(this.salt_35).wait(14).to({y:193.8},7,cjs.Ease.get(0.05)).to({y:357},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:145.5,y:313.9,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_36 = new lib.Salt();
	this.salt_36.parent = this;
	this.salt_36.setTransform(133,53.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_36).wait(14).to({y:195.9},7,cjs.Ease.get(0.05)).to({y:359.1},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:128.4,y:306.5,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_37 = new lib.Salt();
	this.salt_37.parent = this;
	this.salt_37.setTransform(174.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_37).wait(14).to({y:192.3},7,cjs.Ease.get(0.05)).to({y:355.5},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:166.2,y:324,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_38 = new lib.Salt();
	this.salt_38.parent = this;
	this.salt_38.setTransform(161.8,51.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_38).wait(14).to({y:194.3},7,cjs.Ease.get(0.05)).to({y:357.5},23,cjs.Ease.get(-0.25)).to({rotation:29.7,x:154.1,y:319.4,alpha:0},6).to({_off:true},1).wait(49));

	// salt
	this.salt_39 = new lib.Salt();
	this.salt_39.parent = this;
	this.salt_39.setTransform(108.3,49.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_39).wait(13).to({y:192.7},7,cjs.Ease.get(0.05)).to({y:355.9},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:166.6,y:238.3,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_40 = new lib.Salt();
	this.salt_40.parent = this;
	this.salt_40.setTransform(142.8,48);

	this.timeline.addTween(cjs.Tween.get(this.salt_40).wait(13).to({y:190.8},7,cjs.Ease.get(0.05)).to({y:354},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:132,y:237.2,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_41 = new lib.Salt();
	this.salt_41.parent = this;
	this.salt_41.setTransform(152.3,51);

	this.timeline.addTween(cjs.Tween.get(this.salt_41).wait(13).to({y:193.8},7,cjs.Ease.get(0.05)).to({y:357},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:122.8,y:233.4,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_42 = new lib.Salt();
	this.salt_42.parent = this;
	this.salt_42.setTransform(106,51);

	this.timeline.addTween(cjs.Tween.get(this.salt_42).wait(13).to({y:193.8},7,cjs.Ease.get(0.05)).to({y:357},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:168.9,y:237.4,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_43 = new lib.Salt();
	this.salt_43.parent = this;
	this.salt_43.setTransform(174.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_43).wait(13).to({y:190.3},7,cjs.Ease.get(0.05)).to({y:353.5},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:100.4,y:234.9,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_44 = new lib.Salt();
	this.salt_44.parent = this;
	this.salt_44.setTransform(170,50.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_44).wait(13).to({y:192.9},7,cjs.Ease.get(0.05)).to({y:356.1},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:105.1,y:232.8,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_45 = new lib.Salt();
	this.salt_45.parent = this;
	this.salt_45.setTransform(170.5,51.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_45).wait(13).to({y:194.7},7,cjs.Ease.get(0.05)).to({y:357.9},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:104.7,y:230.9,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_46 = new lib.Salt();
	this.salt_46.parent = this;
	this.salt_46.setTransform(132.8,52.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_46).wait(13).to({y:195.5},7,cjs.Ease.get(0.05)).to({y:358.7},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:142.4,y:233.4,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_47 = new lib.Salt();
	this.salt_47.parent = this;
	this.salt_47.setTransform(148.3,52.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_47).wait(13).to({y:195.6},7,cjs.Ease.get(0.05)).to({y:358.8},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:127,y:231.9,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_48 = new lib.Salt();
	this.salt_48.parent = this;
	this.salt_48.setTransform(117.8,52.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_48).wait(13).to({y:195.6},7,cjs.Ease.get(0.05)).to({y:358.8},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:157.3,y:234.6,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_49 = new lib.Salt();
	this.salt_49.parent = this;
	this.salt_49.setTransform(119.5,49.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_49).wait(13).to({y:192.5},7,cjs.Ease.get(0.05)).to({y:355.7},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:155.3,y:237.5,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_50 = new lib.Salt();
	this.salt_50.parent = this;
	this.salt_50.setTransform(102,52.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_50).wait(13).to({y:195.6},7,cjs.Ease.get(0.05)).to({y:358.8},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:173,y:235.9,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_51 = new lib.Salt();
	this.salt_51.parent = this;
	this.salt_51.setTransform(179.5,53.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_51).wait(13).to({y:195.9},7,cjs.Ease.get(0.05)).to({y:359.1},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:95.9,y:229,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_52 = new lib.Salt();
	this.salt_52.parent = this;
	this.salt_52.setTransform(149.5,54.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_52).wait(13).to({y:197},7,cjs.Ease.get(0.05)).to({y:360.2},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:125.9,y:230.5,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_53 = new lib.Salt();
	this.salt_53.parent = this;
	this.salt_53.setTransform(166,51.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_53).wait(13).to({y:194.7},7,cjs.Ease.get(0.05)).to({y:357.9},23,cjs.Ease.get(-0.25)).to({rotation:-175,x:109.2,y:231.3,alpha:0},6).to({_off:true},1).wait(50));

	// salt
	this.salt_54 = new lib.Salt();
	this.salt_54.parent = this;
	this.salt_54.setTransform(160,53.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_54).wait(12).to({y:196.7},7,cjs.Ease.get(0.05)).to({y:359.9},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:161,y:264.1,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_55 = new lib.Salt();
	this.salt_55.parent = this;
	this.salt_55.setTransform(176.5,53);

	this.timeline.addTween(cjs.Tween.get(this.salt_55).wait(12).to({y:195.8},7,cjs.Ease.get(0.05)).to({y:359},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:176.3,y:270.4,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_56 = new lib.Salt();
	this.salt_56.parent = this;
	this.salt_56.setTransform(150,51.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_56).wait(12).to({y:194.1},7,cjs.Ease.get(0.05)).to({y:357.3},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:153.1,y:257.5,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_57 = new lib.Salt();
	this.salt_57.parent = this;
	this.salt_57.setTransform(97,57.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_57).wait(12).to({y:200.3},7,cjs.Ease.get(0.05)).to({y:363.5},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:102.6,y:240.3,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_58 = new lib.Salt();
	this.salt_58.parent = this;
	this.salt_58.setTransform(169.5,56.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_58).wait(12).to({y:199},7,cjs.Ease.get(0.05)).to({y:362.2},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:168.5,y:270.3,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_59 = new lib.Salt();
	this.salt_59.parent = this;
	this.salt_59.setTransform(138.8,57.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_59).wait(12).to({y:200.5},7,cjs.Ease.get(0.05)).to({y:363.7},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:140.2,y:258.4,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_60 = new lib.Salt();
	this.salt_60.parent = this;
	this.salt_60.setTransform(148.3,59.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_60).wait(12).to({y:202.3},7,cjs.Ease.get(0.05)).to({y:365.5},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:148,y:264.1,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_61 = new lib.Salt();
	this.salt_61.parent = this;
	this.salt_61.setTransform(142.3,55.7);

	this.timeline.addTween(cjs.Tween.get(this.salt_61).wait(12).to({y:198.5},7,cjs.Ease.get(0.05)).to({y:361.7},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:144.2,y:258.1,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_62 = new lib.Salt();
	this.salt_62.parent = this;
	this.salt_62.setTransform(111.5,55.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_62).wait(12).to({y:198.2},7,cjs.Ease.get(0.05)).to({y:361.4},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:116.5,y:244.6,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_63 = new lib.Salt();
	this.salt_63.parent = this;
	this.salt_63.setTransform(121,58.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_63).wait(12).to({y:201.2},7,cjs.Ease.get(0.05)).to({y:364.4},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:123.8,y:251.5,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_64 = new lib.Salt();
	this.salt_64.parent = this;
	this.salt_64.setTransform(181.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_64).wait(12).to({y:201.3},7,cjs.Ease.get(0.05)).to({y:364.5},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:178.4,y:277.5,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_65 = new lib.Salt();
	this.salt_65.parent = this;
	this.salt_65.setTransform(153.3,56.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_65).wait(12).to({y:199.7},7,cjs.Ease.get(0.05)).to({y:362.9},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:153.6,y:263.9,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_66 = new lib.Salt();
	this.salt_66.parent = this;
	this.salt_66.setTransform(143.8,63.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_66).wait(12).to({y:206.1},7,cjs.Ease.get(0.05)).to({y:369.3},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:142.3,y:265.6,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_67 = new lib.Salt();
	this.salt_67.parent = this;
	this.salt_67.setTransform(165,59.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_67).wait(12).to({y:202.3},7,cjs.Ease.get(0.05)).to({y:365.5},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:163.1,y:271.3,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_68 = new lib.Salt();
	this.salt_68.parent = this;
	this.salt_68.setTransform(175.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_68).wait(12).to({y:200.3},7,cjs.Ease.get(0.05)).to({y:363.5},23,cjs.Ease.get(-0.25)).to({rotation:25.5,x:173.4,y:274,alpha:0},6).to({_off:true},1).wait(51));

	// salt
	this.salt_69 = new lib.Salt();
	this.salt_69.parent = this;
	this.salt_69.setTransform(137.8,58.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_69).wait(11).to({y:201},7,cjs.Ease.get(0.05)).to({y:364.2},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:135.5,y:292.5,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_70 = new lib.Salt();
	this.salt_70.parent = this;
	this.salt_70.setTransform(147.3,61.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_70).wait(11).to({y:204},7,cjs.Ease.get(0.05)).to({y:367.2},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:145.3,y:290.4,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_71 = new lib.Salt();
	this.salt_71.parent = this;
	this.salt_71.setTransform(111,59.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_71).wait(11).to({y:202.3},7,cjs.Ease.get(0.05)).to({y:365.5},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:112.8,y:306.6,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_72 = new lib.Salt();
	this.salt_72.parent = this;
	this.salt_72.setTransform(168.8,60.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_72).wait(11).to({y:203.3},7,cjs.Ease.get(0.05)).to({y:366.5},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:163.7,y:279.3,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_73 = new lib.Salt();
	this.salt_73.parent = this;
	this.salt_73.setTransform(142.3,58.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_73).wait(11).to({y:201.7},7,cjs.Ease.get(0.05)).to({y:364.9},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:139.8,y:290.8,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_74 = new lib.Salt();
	this.salt_74.parent = this;
	this.salt_74.setTransform(116.8,60.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_74).wait(11).to({y:203},7,cjs.Ease.get(0.05)).to({y:366.2},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:118.2,y:304.5,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_75 = new lib.Salt();
	this.salt_75.parent = this;
	this.salt_75.setTransform(106,59.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_75).wait(11).to({y:202},7,cjs.Ease.get(0.05)).to({y:365.2},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:108.3,y:308.8,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_76 = new lib.Salt();
	this.salt_76.parent = this;
	this.salt_76.setTransform(101.5,53);

	this.timeline.addTween(cjs.Tween.get(this.salt_76).wait(11).to({y:195.8},7,cjs.Ease.get(0.05)).to({y:359},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:101.3,y:305.6,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_77 = new lib.Salt();
	this.salt_77.parent = this;
	this.salt_77.setTransform(96,54.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_77).wait(11).to({y:197.7},7,cjs.Ease.get(0.05)).to({y:360.9},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:97.4,y:309.9,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_78 = new lib.Salt();
	this.salt_78.parent = this;
	this.salt_78.setTransform(152.3,61.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_78).wait(11).to({y:204.3},7,cjs.Ease.get(0.05)).to({y:367.5},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:149.8,y:288.2,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_79 = new lib.Salt();
	this.salt_79.parent = this;
	this.salt_79.setTransform(162.8,59.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_79).wait(11).to({y:202.3},7,cjs.Ease.get(0.05)).to({y:365.5},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:157.9,y:281.3,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_80 = new lib.Salt();
	this.salt_80.parent = this;
	this.salt_80.setTransform(134.5,54.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_80).wait(11).to({y:197.7},7,cjs.Ease.get(0.05)).to({y:360.9},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:131,y:291.1,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_81 = new lib.Salt();
	this.salt_81.parent = this;
	this.salt_81.setTransform(153.3,54.9);

	this.timeline.addTween(cjs.Tween.get(this.salt_81).wait(11).to({y:197.7},7,cjs.Ease.get(0.05)).to({y:360.9},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:147.4,y:281.9,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_82 = new lib.Salt();
	this.salt_82.parent = this;
	this.salt_82.setTransform(125,60.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_82).wait(11).to({y:203},7,cjs.Ease.get(0.05)).to({y:366.2},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:125.4,y:300.4,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_83 = new lib.Salt();
	this.salt_83.parent = this;
	this.salt_83.setTransform(131,55.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_83).wait(11).to({y:198.2},7,cjs.Ease.get(0.05)).to({y:361.4},23,cjs.Ease.get(-0.25)).to({rotation:-29.2,x:128.3,y:293.3,alpha:0},6).to({_off:true},1).wait(52));

	// salt
	this.salt_84 = new lib.Salt();
	this.salt_84.parent = this;
	this.salt_84.setTransform(156.5,55.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_84).wait(10).to({y:198},7,cjs.Ease.get(0.05)).to({y:361.2},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:51.6,y:251},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:151.8,y:253.8},6,cjs.Ease.get(0.2)).to({rotation:0,x:170.2,y:358.1},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_85 = new lib.Salt();
	this.salt_85.parent = this;
	this.salt_85.setTransform(166.8,57.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_85).wait(10).to({y:199.9},7,cjs.Ease.get(0.05)).to({y:363.1},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:102.4,y:241.9},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:129.5,y:249.1},6,cjs.Ease.get(0.2)).to({rotation:0,x:165.2,y:350.8},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_86 = new lib.Salt();
	this.salt_86.parent = this;
	this.salt_86.setTransform(113.3,55.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_86).wait(10).to({y:198.2},7,cjs.Ease.get(0.05)).to({y:361.4},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:76.6,y:331.6},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:140.7,y:270.4},6,cjs.Ease.get(0.2)).to({rotation:0,x:127,y:360.4},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_87 = new lib.Salt();
	this.salt_87.parent = this;
	this.salt_87.setTransform(101,60.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_87).wait(10).to({y:203.2},7,cjs.Ease.get(0.05)).to({y:366.4},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:67.9,y:322.1},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:178.3,y:283.1},6,cjs.Ease.get(0.2)).to({rotation:0,x:114.7,y:367.8},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_88 = new lib.Salt();
	this.salt_88.parent = this;
	this.salt_88.setTransform(139.5,60.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_88).wait(10).to({y:203.2},7,cjs.Ease.get(0.05)).to({y:366.4},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:91.3,y:260.9},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:198.5,y:252.5},6,cjs.Ease.get(0.2)).to({rotation:0,x:148.8,y:351.5},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_89 = new lib.Salt();
	this.salt_89.parent = this;
	this.salt_89.setTransform(158.3,60.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_89).wait(10).to({y:203.2},7,cjs.Ease.get(0.05)).to({y:366.4},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:67.9,y:265.9},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:139.4,y:239.5},6,cjs.Ease.get(0.2)).to({rotation:0,x:153.8,y:359.1},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_90 = new lib.Salt();
	this.salt_90.parent = this;
	this.salt_90.setTransform(174.5,61.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_90).wait(10).to({y:204.6},7,cjs.Ease.get(0.05)).to({y:367.8},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:136.9,y:258.5},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:167.2,y:228.6},6,cjs.Ease.get(0.2)).to({rotation:0,x:119.9,y:359.9},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_91 = new lib.Salt();
	this.salt_91.parent = this;
	this.salt_91.setTransform(161.8,63.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_91).wait(10).to({y:206.6},7,cjs.Ease.get(0.05)).to({y:369.8},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:97.3,y:241.9},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:187.7,y:241.6},6,cjs.Ease.get(0.2)).to({rotation:0,x:156.3,y:371.6},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_92 = new lib.Salt();
	this.salt_92.parent = this;
	this.salt_92.setTransform(126,64);

	this.timeline.addTween(cjs.Tween.get(this.salt_92).wait(10).to({y:206.8},7,cjs.Ease.get(0.05)).to({y:370},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:106,y:333.2},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:137.9,y:221.9},6,cjs.Ease.get(0.2)).to({rotation:0,x:122,y:373.8},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_93 = new lib.Salt();
	this.salt_93.parent = this;
	this.salt_93.setTransform(134.5,63.2);

	this.timeline.addTween(cjs.Tween.get(this.salt_93).wait(10).to({y:206},7,cjs.Ease.get(0.05)).to({y:369.2},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:51.6,y:295.3},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:165.2,y:286.8},6,cjs.Ease.get(0.2)).to({rotation:0,x:157.8,y:345.1},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_94 = new lib.Salt();
	this.salt_94.parent = this;
	this.salt_94.setTransform(103.8,63);

	this.timeline.addTween(cjs.Tween.get(this.salt_94).wait(10).to({y:205.8},7,cjs.Ease.get(0.05)).to({y:369},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:77,y:298.4},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:120.9,y:270.2},6,cjs.Ease.get(0.2)).to({rotation:0,x:174.2,y:344.4},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_95 = new lib.Salt();
	this.salt_95.parent = this;
	this.salt_95.setTransform(140.5,67);

	this.timeline.addTween(cjs.Tween.get(this.salt_95).wait(10).to({y:209.8},7,cjs.Ease.get(0.05)).to({y:373},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:143.7,y:314.7},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:151.5,y:275.2},6,cjs.Ease.get(0.2)).to({rotation:0,x:145.1,y:365.1},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_96 = new lib.Salt();
	this.salt_96.parent = this;
	this.salt_96.setTransform(130,65.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_96).wait(10).to({y:208.6},7,cjs.Ease.get(0.05)).to({y:371.8},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:102.4,y:320},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:172.8,y:249.3},6,cjs.Ease.get(0.2)).to({rotation:0,x:139.6,y:372.2},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_97 = new lib.Salt();
	this.salt_97.parent = this;
	this.salt_97.setTransform(111,66.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_97).wait(10).to({y:208.9},7,cjs.Ease.get(0.05)).to({y:372.1},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:97.3,y:339},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:111.4,y:247.4},6,cjs.Ease.get(0.2)).to({rotation:0,x:136.1,y:360.4},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_98 = new lib.Salt();
	this.salt_98.parent = this;
	this.salt_98.setTransform(167.8,65);

	this.timeline.addTween(cjs.Tween.get(this.salt_98).wait(10).to({y:207.8},7,cjs.Ease.get(0.05)).to({y:371},23,cjs.Ease.get(-0.25)).to({rotation:-67.5,x:134.5,y:260.9},6,cjs.Ease.get(-0.5)).to({rotation:66.5,x:198.1,y:239.7},6,cjs.Ease.get(0.2)).to({rotation:0,x:160.6,y:364.9},21,cjs.Ease.get(0.65)).wait(27));

	// salt
	this.salt_99 = new lib.Salt();
	this.salt_99.parent = this;
	this.salt_99.setTransform(173.8,66.1);

	this.timeline.addTween(cjs.Tween.get(this.salt_99).wait(9).to({y:208.9},7,cjs.Ease.get(0.05)).to({y:372.1},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:107,y:298.8,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_100 = new lib.Salt();
	this.salt_100.parent = this;
	this.salt_100.setTransform(147.3,64.4);

	this.timeline.addTween(cjs.Tween.get(this.salt_100).wait(9).to({y:207.2},7,cjs.Ease.get(0.05)).to({y:370.4},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:91.3,y:320.2,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_101 = new lib.Salt();
	this.salt_101.parent = this;
	this.salt_101.setTransform(121.8,65.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_101).wait(9).to({y:208.6},7,cjs.Ease.get(0.05)).to({y:371.8},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:78.8,y:342.5,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_102 = new lib.Salt();
	this.salt_102.parent = this;
	this.salt_102.setTransform(131,65.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_102).wait(9).to({y:208.1},7,cjs.Ease.get(0.05)).to({y:371.3},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:83.3,y:334.4,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_103 = new lib.Salt();
	this.salt_103.parent = this;
	this.salt_103.setTransform(116,65.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_103).wait(9).to({y:208.6},7,cjs.Ease.get(0.05)).to({y:371.8},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:75.7,y:347.3,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_104 = new lib.Salt();
	this.salt_104.parent = this;
	this.salt_104.setTransform(113.3,66);

	this.timeline.addTween(cjs.Tween.get(this.salt_104).wait(9).to({y:208.8},7,cjs.Ease.get(0.05)).to({y:372},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:74.3,y:349.7,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_105 = new lib.Salt();
	this.salt_105.parent = this;
	this.salt_105.setTransform(146.5,67.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_105).wait(9).to({y:210.6},7,cjs.Ease.get(0.05)).to({y:373.8},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:93.7,y:322.6,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_106 = new lib.Salt();
	this.salt_106.parent = this;
	this.salt_106.setTransform(136,69.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_106).wait(9).to({y:212.6},7,cjs.Ease.get(0.05)).to({y:375.8},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:89.8,y:332.6,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_107 = new lib.Salt();
	this.salt_107.parent = this;
	this.salt_107.setTransform(145.5,71.6);

	this.timeline.addTween(cjs.Tween.get(this.salt_107).wait(9).to({y:214.4},7,cjs.Ease.get(0.05)).to({y:377.6},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:96.4,y:325.5,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_108 = new lib.Salt();
	this.salt_108.parent = this;
	this.salt_108.setTransform(139.5,68.8);

	this.timeline.addTween(cjs.Tween.get(this.salt_108).wait(9).to({y:211.6},7,cjs.Ease.get(0.05)).to({y:374.8},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:90.8,y:329.1,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_109 = new lib.Salt();
	this.salt_109.parent = this;
	this.salt_109.setTransform(108.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_109).wait(9).to({y:211.3},7,cjs.Ease.get(0.05)).to({y:374.5},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:74.1,y:354.9,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_110 = new lib.Salt();
	this.salt_110.parent = this;
	this.salt_110.setTransform(118.3,70.5);

	this.timeline.addTween(cjs.Tween.get(this.salt_110).wait(9).to({y:213.3},7,cjs.Ease.get(0.05)).to({y:376.5},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:80.9,y:348,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_111 = new lib.Salt();
	this.salt_111.parent = this;
	this.salt_111.setTransform(166.8,69.3);

	this.timeline.addTween(cjs.Tween.get(this.salt_111).wait(9).to({y:212.1},7,cjs.Ease.get(0.05)).to({y:375.3},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:106,y:306.4,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_112 = new lib.Salt();
	this.salt_112.parent = this;
	this.salt_112.setTransform(153.3,65);

	this.timeline.addTween(cjs.Tween.get(this.salt_112).wait(9).to({y:207.8},7,cjs.Ease.get(0.05)).to({y:371},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:95.1,y:315.5,alpha:0},6).to({_off:true},1).wait(54));

	// salt
	this.salt_113 = new lib.Salt();
	this.salt_113.parent = this;
	this.salt_113.setTransform(157.3,67);

	this.timeline.addTween(cjs.Tween.get(this.salt_113).wait(9).to({y:209.8},7,cjs.Ease.get(0.05)).to({y:373},23,cjs.Ease.get(-0.25)).to({rotation:-57.5,x:98.9,y:313.2,alpha:0},6).to({_off:true},1).wait(54));

	// spoonFlipped
	this.spoonFlipped = new lib.SpoonFlipped();
	this.spoonFlipped.parent = this;
	this.spoonFlipped.setTransform(289.6,46.8);
	this.spoonFlipped._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spoonFlipped).wait(9).to({_off:false},0).to({_off:true},15).wait(76));

	// spoonLower
	this.spoonLower = new lib.SpoonLower();
	this.spoonLower.parent = this;
	this.spoonLower.setTransform(292.2,59.6);

	this.timeline.addTween(cjs.Tween.get(this.spoonLower).to({_off:true},9).wait(56).to({_off:false},0).wait(35));

	// spoonStiring
	this.spoonFull = new lib.SpoonFull();
	this.spoonFull.parent = this;
	this.spoonFull.setTransform(292.2,56.3);
	this.spoonFull._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spoonFull).wait(24).to({_off:false},0).wait(2).to({rotation:-75.9,x:185.7,y:123.2},8,cjs.Ease.get(1)).wait(2).to({rotation:-80.2,x:207.5,y:159.2},3,cjs.Ease.get(1)).to({rotation:-83.4,x:178.4,y:180.3},3,cjs.Ease.get(1)).to({rotation:-75.9,x:134.5,y:140.3},3,cjs.Ease.get(1)).to({rotation:-82.6,x:155.4,y:113.3},3,cjs.Ease.get(1)).to({rotation:-80.1,x:207.5,y:159.2},3,cjs.Ease.get(1)).to({rotation:-75.9,x:178.4,y:180.3},3,cjs.Ease.get(1)).to({x:154.5,y:140.3},3,cjs.Ease.get(1)).to({rotation:0,x:292.2,y:56.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(35));

	// potEdgeUpper
	this.instance = new lib.PotEdgeUpper();
	this.instance.parent = this;
	this.instance.setTransform(138.4,64.5);
	this.instance.cache(-121,-29,243,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// potBg
	this.instance_1 = new lib.PotBg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.6,238.3);
	this.instance_1.cache(-130,-194,261,388);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18,509.4,412.2);


(lib.Step_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SaltInWater
	this.instance = new lib.SaltInWater();
	this.instance.parent = this;
	this.instance.setTransform(77.7,10.2,0.72,0.72,0,0,0,254.6,224.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Step_0, new cjs.Rectangle(-105.6,-138.1,366.7,296.7), null);


(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// step_0
	this.step_0 = new lib.Step_0();
	this.step_0.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.step_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.Animation, new cjs.Rectangle(-105.6,-138.1,366.7,296.7), null);


// stage content:
(lib.anim_00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.animation = new lib.Animation();
	this.animation.parent = this;
	this.animation.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(918.4,629.8,366.8,296.7);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
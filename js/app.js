
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var spriteBg = new cc.Sprite(res.bg, new cc.rect(0, 0, 1920, 1080));
        var spriteBgSize = {
            width : 1920,
            height : 1080
        };
        spriteBg.attr({
            width : size.width,
            height : size.height,
            scaleX : size.width / spriteBgSize.width,
            scaleY : size.height / spriteBgSize.height,
            anchorX : 0,
            anchorY : 0
        });
        this.addChild(spriteBg);
        var spriteToEva = new cc.Sprite(res.toeva, new cc.rect(0, 0, 150, 150));
        spriteToEva.attr({
            width : 150,
            height : 150,
            anchorX : 0,
            anchorY : 0,
            x : 100,
            y : size.height - 200
        });
        this.addChild(spriteToEva);
        var ToEvaOnClickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function (touch,event){
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos))return false;
                gplay.preloadGroups(['1'], function() {
                    cc.director.runScene(new EvaScene());
                });
            }
        });
        cc.eventManager.addListener(ToEvaOnClickListener.clone(), spriteToEva);
        var spriteToClannad = new cc.Sprite(res.toclannad, new cc.rect(0, 0, 150, 150));
        spriteToClannad.attr({
            width : 150,
            height : 150,
            anchorX : 0,
            anchorY : 0,
            x : 350,
            y : size.height - 200
        });
        this.addChild(spriteToClannad);
        var ToClannadOnClickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouch : true,
            onTouchBegan : function (touch, event){
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                gplay.preloadGroups(['2'], function() {
                    cc.director.runScene(new ClannadScene());
                });
            }
        });
        cc.eventManager.addListener(ToClannadOnClickListener.clone(), spriteToClannad);
        var spriteToCatchImg = new cc.Sprite(res.tocatchimg, new cc.rect(0, 0, 150, 150));
        spriteToCatchImg.attr({
            width : 150,
            height : 150,
            anchorX : 0,
            anchorY : 0,
            x : 600,
            y : size.height - 200
        });
        this.addChild(spriteToCatchImg);
        var ToCatchImgOnClickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouch : true,
            onTouchBegan : function (touch, event){
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                gplay.preloadGroups(['3'], function() {
                    cc.director.runScene(new CatchimgScene());
                });
            }
        });
        cc.eventManager.addListener(ToCatchImgOnClickListener.clone(), spriteToCatchImg);
        var spriteToCatchImg1 = new cc.Sprite(res.tocatchimg1, new cc.rect(0, 0, 500, 200));
        spriteToCatchImg1.attr({
            width : 500,
            height : 200,
            anchorX : 0,
            anchorY : 0,
            x : 100,
            y : size.height - 450
        });
        this.addChild(spriteToCatchImg1);
        var ToCatchImgOnClickListener1 = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouch : true,
            onTouchBegan : function (touch, event){
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                gplay.preloadGroups(['4'], function() {
                    cc.director.runScene(new CatchimgScene1());
                });
            }
        });
        cc.eventManager.addListener(ToCatchImgOnClickListener1.clone(), spriteToCatchImg1);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

//eva Scene
var EvaLayer = cc.Layer.extend({
    ctor : function () {
        this._super();
        var size = cc.winSize;
        var spriteBg = new cc.Sprite(res.bg, new cc.rect(0, 0, 1920, 1080));
        var spriteBgSize = {
            width : 1920,
            height : 1080
        };
        spriteBg.attr({
            width : size.width,
            height : size.height,
            scaleX : size.width / spriteBgSize.width,
            scaleY : size.height / spriteBgSize.height,
            anchorX : 0,
            anchorY : 0
        });
        this.addChild(spriteBg);
        var myChangeBgListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouched : true,
            onTouchBegan : function (touch ,event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                var random = Math.floor(Math.random() * 6.99);
                var fileName = {
                        0 : res.evaasuka,
                        1 : res.evakaoru,
                        2 : res.evamari,
                        3 : res.evamisato,
                        4 : res.evarei,
                        5 : res.evaritu,
                        6 : res.evayui,
                        7 : 123000}[random] || 123000;
                if (fileName == 123000) {
                    var transition = new cc.TransitionCrossFade(0.5, new HelloWorldScene());
                    cc.director.runScene(transition);
                    return false;
                }
                var texture = cc.textureCache.addImage(fileName);
                bgSprite.initWithTexture(texture);
                //bgSprite.initWithFile(fileName, null);
                bgSprite.attr({
                    anchorX : 0,
                    anchorY : 0,
                    x : 0,
                    y : 0
                });
                var rotate = new cc.RotateBy(1, 360);
                bgSprite.runAction(rotate);
            }
        });
        var bgSprite = new cc.Sprite(res.eva);
        bgSprite.attr({
            anchorX : 0,
            anchorY : 0,
            x : 0,
            y : 0
        });
        this.addChild(bgSprite);
        cc.eventManager.addListener(myChangeBgListener, bgSprite);
        var returnLabel = new cc.LabelTTF('返回首页', 'Arial', '40');
        returnLabel.attr({
            x : size.width - 150,
            y : 150,
            color : cc.color(0x00, 0x00, 0x00, 0xff)
        });
        this.addChild(returnLabel);
        var returnOnclickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                cc.director.runScene(new HelloWorldScene());
            }
        });
        cc.eventManager.addListener(returnOnclickListener, returnLabel);
    }
});
var EvaScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        var layer = new EvaLayer();
        this.addChild(layer);
    }
});

// clannad scene
var ClannadLayer = cc.Layer.extend({
    ctor : function () {
        this._super();
        var size = cc.winSize;
        var spriteBg = new cc.Sprite(res.bg, new cc.rect(0, 0, 1920, 1080));
        var spriteBgSize = {
            width : 1920,
            height : 1080
        };
        spriteBg.attr({
            width : size.width,
            height : size.height,
            scaleX : size.width / spriteBgSize.width,
            scaleY : size.height / spriteBgSize.height,
            anchorX : 0,
            anchorY : 0
        });
        this.addChild(spriteBg);
        var myChangeListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                var random = Math.floor(Math.random() * 5.99);
                var fileName = {
                        0 : res.clannadfuku,
                        1 : res.clannadnagisa,
                        2 : res.clannadsanae,
                        3 : res.clannadtomoya,
                        4 : res.clannadtomoyo,
                        5 : res.clannadtomoyo1,
                        6 : 123000}[random] || 123000;
                //changeSprite.initWithFile(fileName , null);
                var soundId = cc.audioEngine.playEffect(res.duduru, false);
                if (fileName == 123000) {
                    var transition = new cc.TransitionCrossFade(0.5, new HelloWorldScene());
                    cc.director.runScene(transition);
                    return false;
                }
                var texture = cc.textureCache.addImage(fileName);
                changeSprite.initWithTexture(texture);
                changeSprite.attr({
                    x : size.width / 2,
                    y : size.height / 2,
                    anchorX : 0.5,
                    anchorY : 0.5
                });
                var rotate = cc.rotateBy(1, 360);
                changeSprite.runAction(rotate);
            }
        });
        var changeSprite = new cc.Sprite(res.clannad);
        changeSprite.attr({
            x : size.width / 2,
            y : size.height / 2,
            anchorX : 0.5,
            anchorY : 0.5
        });
        this.addChild(changeSprite);
        var changeLabel = new cc.LabelTTF("返回首页", "Arial", "40");
        changeLabel.attr({
            x : size.width - 150,
            y : 150,
            color :cc.color(0x00, 0x00, 0x00, 0xff)
        });
        this.addChild(changeLabel);
        cc.eventManager.addListener(myChangeListener.clone(), changeSprite);
        var myChangeSceneListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : true,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                cc.audioEngine.stopMusic(res.nagisa);
                cc.director.runScene(new HelloWorldScene());
            }
        });
        cc.eventManager.addListener(myChangeSceneListener, changeLabel);
    }
});

var ClannadScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        var layer = new ClannadLayer();
        this.addChild(layer);
        cc.audioEngine.playMusic(res.nagisa, true);
    }
});

//catch img scene
var CatchimgLayer = cc.Layer.extend({
    ctor : function () {
        this._super();
        var size = cc.winSize;
        var spriteBg = new cc.Sprite(res.bg, new cc.rect(0, 0, 1920, 1080));
        var spriteBgSize = {
            width : 1920,
            height : 1080
        };
        spriteBg.attr({
            width : size.width,
            height : size.height,
            scaleX : size.width / spriteBgSize.width,
            scaleY : size.height / spriteBgSize.height,
            anchorX : 0,
            anchorY : 0
        });
        this.addChild(spriteBg);
        var changeSprite = new cc.Sprite(res.tocatchimg);
        changeSprite.attr({
            x : size.width / 2,
            y : size.height / 2,
            anchorX : 0.5,
            anchorY : 0.5
        });
        this.addChild(changeSprite);
        var ChangeSpriteOnClickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : false,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                var random = Math.floor(Math.random() * 123.99);
                eval('filename = res.CATCHIMG_' + random);
                var texture = cc.textureCache.addImage(filename);
                changeSprite.initWithTexture(texture);
                changeSprite.attr({
                    x : size.width / 2,
                    y : size.height / 2,
                    anchorX : 0.5,
                    anchorY : 0.5
                });
                var rotate = new cc.rotateBy(1, 360);
                changeSprite.runAction(rotate);
            }
        });
        cc.eventManager.addListener(ChangeSpriteOnClickListener.clone(), changeSprite);
        var returnLabel = new cc.LabelTTF('返回首页', 'Arial', '40');
        returnLabel.attr({
            x : size.width - 150,
            y : 150,
            color : cc.color(0x00, 0x00, 0x00, 0xff)
        });
        this.addChild(returnLabel);
        var returnOnclickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                cc.director.runScene(new HelloWorldScene());
            }
        });
        cc.eventManager.addListener(returnOnclickListener, returnLabel);
    }
});

var CatchimgScene = cc.Scene.extend({
    onEnter : function () {
        this._super();
        var layer = new CatchimgLayer();
        this.addChild(layer)
    }
});

//catch img scene 1
var CatchimgLayer1 = cc.Layer.extend({
    ctor : function () {
        this._super();
        var size = cc.winSize;
        var spriteBg = new cc.Sprite(res.bg, new cc.rect(0, 0, 1920, 1080));
        var spriteBgSize = {
            width : 1920,
            height : 1080
        };
        spriteBg.attr({
            width : size.width,
            height : size.height,
            scaleX : size.width / spriteBgSize.width,
            scaleY : size.height / spriteBgSize.height,
            anchorX : 0,
            anchorY : 0
        });
        this.addChild(spriteBg);
        var changeSprite = new cc.Sprite(res.tocatchimg1);
        changeSprite.attr({
            x : size.width / 2,
            y : size.height / 2,
            anchorX : 0.5,
            anchorY : 0.5
        });
        this.addChild(changeSprite);
        var ChangeSpriteOnClickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches : false,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if(!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                var random = Math.floor(Math.random() * 2526.99);
                eval('filename = res.CATCHIMG1_' + random);
                var texture = cc.textureCache.addImage(filename);
                changeSprite.initWithTexture(texture);
                changeSprite.attr({
                    x : size.width / 2,
                    y : size.height / 2,
                    anchorX : 0.5,
                    anchorY : 0.5
                });
                var rotate = new cc.rotateBy(1, 360);
                changeSprite.runAction(rotate);
            }
        });
        cc.eventManager.addListener(ChangeSpriteOnClickListener.clone(), changeSprite);
        var returnLabel = new cc.LabelTTF('返回首页', 'Arial', '40');
        returnLabel.attr({
            x : size.width - 150,
            y : 150,
            color : cc.color(0x00, 0x00, 0x00, 0xff)
        });
        this.addChild(returnLabel);
        var returnOnclickListener = cc.EventListener.create({
            event : cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan : function (touch, event) {
                var pos = touch.getLocation();
                var target = event.getCurrentTarget();
                if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false;
                cc.director.runScene(new HelloWorldScene());
            }
        });
        cc.eventManager.addListener(returnOnclickListener, returnLabel);
    }
});

var CatchimgScene1 = cc.Scene.extend({
    onEnter : function () {
        this._super();
        var layer = new CatchimgLayer1();
        this.addChild(layer)
    }
});
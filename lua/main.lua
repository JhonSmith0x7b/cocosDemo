
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("src/")
cc.FileUtils:getInstance():addSearchPath("res/")

require "config"
require "cocos.init"
require "Gplay"

local createEva = nil
local createScene = nil
local createClannad = nil
local createCatchImg = nil
local createCatchImg1 = nil
local function main()
    cc.Director:getInstance():runWithScene(createScene())
end
createScene = function()
    local size = cc.Director:getInstance():getWinSize()
    --baseScene
    local layerFarm = cc.Layer:create()
    local bg = cc.Sprite:create('bg.jpg')
    bg:setPosition(size.width /2, size.height / 2)
    layerFarm:addChild(bg)
    local toEvaSprite = cc.Sprite:create('toeva.jpg', cc.rect(0, 0, 200, 200))
    toEvaSprite:setPosition(100+ 100, size.height - 150)
    layerFarm:addChild(toEvaSprite)
    local function onTouchBegan(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createEva())
        end
    end
    -- touch
    local listener = cc.EventListenerTouchOneByOne:create()
    listener:setSwallowTouches(true)
    listener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, toEvaSprite)
    --
    local toClannadSprite = cc.Sprite:create('toclannad.jpg', cc.rect(0, 0, 200, 200))
    toClannadSprite:setPosition(100 + 100 + 200 + 50, size.height - 150)
    layerFarm:addChild(toClannadSprite)
    --touch 1
    local function onTouchBegan1(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createClannad())
            AudioEngine.playMusic('audio/nagisa.mp3')
        end
    end
    local listener1 = cc.EventListenerTouchOneByOne:create()
    listener1:setSwallowTouches(true)
    listener1:registerScriptHandler(onTouchBegan1,cc.Handler.EVENT_TOUCH_BEGAN )
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener1, toClannadSprite)
    --
    local toCatchImgSprite = cc.Sprite:create('tocatchimg.jpg', cc.rect(0, 0, 200, 200))
    toCatchImgSprite:setPosition(100 + 100 + 200 + 50 + 200 + 50, size.height - 150)
    layerFarm:addChild(toCatchImgSprite)
    --touch 2
    local function onTouchBegan2(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createCatchImg())
        end
    end
    local listener2 = cc.EventListenerTouchOneByOne:create()
    listener2:setSwallowTouches(true)
    listener2:registerScriptHandler(onTouchBegan2,cc.Handler.EVENT_TOUCH_BEGAN )
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener2, toCatchImgSprite)
    --
    local toCatchImg1Sprite = cc.Sprite:create('tocatchimg1.jpg', cc.rect(0, 0, 500, 200))
    toCatchImg1Sprite:setPosition(100 + 250 , size.height -150 - 100 -50 - 100)
    layerFarm:addChild(toCatchImg1Sprite)
    --touch 3
    local function onTouchBegan3(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createCatchImg1())
        end
    end
    local listener3 = cc.EventListenerTouchOneByOne:create()
    listener3:setSwallowTouches(true)
    listener3:registerScriptHandler(onTouchBegan3,cc.Handler.EVENT_TOUCH_BEGAN )
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener3, toCatchImg1Sprite)
    --
    local sceneGame = cc.Scene:create()
    sceneGame:addChild(layerFarm)
    return sceneGame
end
createEva = function ()
    local size = cc.Director:getInstance():getWinSize()
    local evaScene = cc.Scene:create()
    local evaLayer = cc.Layer:create()
    local bg = cc.Sprite:create('bg.jpg')
    bg:setPosition(size.width /2, size.height / 2)
    evaLayer:addChild(bg)
    local contentSprite = cc.Sprite:create('eva/eva.jpg')
    contentSprite:setPosition(500, size.height - 500)
    --touch
    local function onTouchBegan(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            local random = math.random(8)
            local resList = {
                [1] = 'eva.jpg',
                [2] = 'evaasuka.jpg',
                [3] = 'evakaoru.jpg',
                [4] = 'evamari.jpg',
                [5] = 'evamisato.jpg',
                [6] = 'evarei.jpg',
                [7] = 'evaritu.jpg',
                [8] = 'evayui.jpg'
            }
            local fileName = resList[random]
            local imgUri = 'eva/'..fileName
            local texture = cc.Director:getInstance():getTextureCache():addImage(imgUri)
            contentSprite:initWithTexture(texture);
            local actionBy = cc.RotateBy:create(1 , 360)
            contentSprite:runAction(actionBy)
        end
    end
    local listener = cc.EventListenerTouchOneByOne:create()
    listener:setSwallowTouches(true)
    listener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, contentSprite)
    --
    local label = cc.LabelTTF:create("返回首页", "Arial", 36)
    label:setPosition(500, size.height - 500)
    --touch1
    local function onTouchBegan1(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createScene())
        end
    end
    local listener1 = cc.EventListenerTouchOneByOne:create()
    listener1:setSwallowTouches(true)
    listener1:registerScriptHandler(onTouchBegan1,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener1, label)
    --
    evaLayer:addChild(contentSprite)
    evaLayer:addChild(label)
    evaScene:addChild(evaLayer)
    return evaScene
end
createClannad =function ()
    local size = cc.Director:getInstance():getWinSize()
    local clannadScene = cc.Scene:create()
    local clannadLayer = cc.Layer:create()
    local bg = cc.Sprite:create('bg.jpg')
    bg:setPosition(size.width /2, size.height / 2)
    clannadLayer:addChild(bg)
    local contentSprite = cc.Sprite:create('clannad/clannad.jpg')
    contentSprite:setPosition(500, size.height - 500)
    --touch
    local function onTouchBegan(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            local random = math.random(7)
            local resList = {
                [1] = 'clannad.jpg',
                [2] = 'clannadfuku.jpg',
                [3] = 'clannadnagisa.jpg',
                [4] = 'clannadsanae.jpg',
                [5] = 'clannadtomoya.jpg',
                [6] = 'clannadtomoyo.jpg',
                [7] = 'clannadtomoyo1.jpg',
            }
            local fileName = resList[random]
            local imgUri = 'clannad/'..fileName
            local texture = cc.Director:getInstance():getTextureCache():addImage(imgUri)
            contentSprite:initWithTexture(texture);
            local actionBy = cc.RotateBy:create(1 , 360)
            contentSprite:runAction(actionBy)
            AudioEngine.playEffect('audio/duduru.mp3')
        end
    end
    local listener = cc.EventListenerTouchOneByOne:create()
    listener:setSwallowTouches(true)
    listener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, contentSprite)
    --
    --
    local label = cc.LabelTTF:create("返回首页", "Arial", 36)
    label:setPosition(500, size.height - 200)
    --touch1
    local function onTouchBegan1(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createScene())
            AudioEngine.stopMusic()
        end
    end
    local listener1 = cc.EventListenerTouchOneByOne:create()
    listener1:setSwallowTouches(true)
    listener1:registerScriptHandler(onTouchBegan1,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener1, label)
    --
    clannadLayer:addChild(contentSprite)
    clannadLayer:addChild(label)
    clannadScene:addChild(clannadLayer)
    return clannadScene
end

createCatchImg = function ()
    local size = cc.Director:getInstance():getWinSize()
    local catchImgScene = cc.Scene:create()
    local catchImgLayer = cc.Layer:create()
    local bg = cc.Sprite:create('bg.jpg')
    bg:setPosition(size.width /2, size.height / 2)
    catchImgLayer:addChild(bg)
    local contentSprite = cc.Sprite:create('catchimg/33.jpg')
    contentSprite:setPosition(500, size.height - 300)
    --touch
    local function onTouchBegan(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            local random = math.random(102)
            local fileName = random..'.jpg'
            local imgUri = 'catchimg/'..fileName
            local texture = cc.Director:getInstance():getTextureCache():addImage(imgUri)
            contentSprite:initWithTexture(texture);
            local actionBy = cc.RotateBy:create(1 , 360)
            contentSprite:runAction(actionBy)
        end
    end
    local listener = cc.EventListenerTouchOneByOne:create()
    listener:setSwallowTouches(true)
    listener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, contentSprite)
    --
    local label = cc.LabelTTF:create("返回首页", "Arial", 36)
    label:setPosition(300, size.height - 500)
    --touch1
    local function onTouchBegan1(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createScene())
        end
    end
    local listener1 = cc.EventListenerTouchOneByOne:create()
    listener1:setSwallowTouches(true)
    listener1:registerScriptHandler(onTouchBegan1,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener1, label)
    --
    catchImgLayer:addChild(contentSprite)
    catchImgLayer:addChild(label)
    catchImgScene:addChild(catchImgLayer)
    return catchImgScene
end

createCatchImg1 = function ()
    local size = cc.Director:getInstance():getWinSize()
    local catchImg1Scene = cc.Scene:create()
    local catchImg1Layer = cc.Layer:create()
    local bg = cc.Sprite:create('bg.jpg')
    bg:setPosition(size.width /2, size.height / 2)
    catchImg1Layer:addChild(bg)
    local contentSprite = cc.Sprite:create('catchimg1/33.jpg')
    contentSprite:setPosition(500, size.height - 300)
    --touch
    local function onTouchBegan(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            local random = math.random(2489)
            local fileName = random..'.jpg'
            local imgUri = 'catchimg1/'..fileName
            local texture = cc.Director:getInstance():getTextureCache():addImage(imgUri)
            contentSprite:initWithTexture(texture);
            local actionBy = cc.RotateBy:create(1 , 360)
            contentSprite:runAction(actionBy)
        end
    end
    local listener = cc.EventListenerTouchOneByOne:create()
    listener:setSwallowTouches(true)
    listener:registerScriptHandler(onTouchBegan,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener, contentSprite)
    --
    local label = cc.LabelTTF:create("返回首页", "Arial", 36)
    label:setPosition(300, size.height - 100)
    --touch1
    local function onTouchBegan1(touch, event)
        local pos = touch:getLocation()
        local target = event:getCurrentTarget()
        local po = target:getBoundingBox()
        if cc.rectContainsPoint(po, pos) then
            cc.Director:getInstance():runWithScene(createScene())
        end
    end
    local listener1 = cc.EventListenerTouchOneByOne:create()
    listener1:setSwallowTouches(true)
    listener1:registerScriptHandler(onTouchBegan1,cc.Handler.EVENT_TOUCH_BEGAN )
    local eventDispatcher = cc.Director:getInstance():getEventDispatcher()
    eventDispatcher:addEventListenerWithSceneGraphPriority(listener1, label)
    --
    catchImg1Layer:addChild(contentSprite)
    catchImg1Layer:addChild(label)
    catchImg1Scene:addChild(catchImg1Layer)
    return catchImg1Scene
end

local status, msg = xpcall(main, __G__TRACKBACK__)
if not status then
    print(msg)
end

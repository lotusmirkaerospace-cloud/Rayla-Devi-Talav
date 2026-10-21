(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"watermark":false,"hash": "f16c8bc360bd8b276520f896124c789164d7a128e4c838582d04d64e81b798eb", "definitions": [{"vfov":180,"hfovMax":130,"data":{"label":"North 1 - Along Shoreline"},"hfov":360,"class":"Panorama","label":trans('panorama_5209EADC_5F62_8641_41CB_62F8D6A13037.label'),"id":"panorama_5209EADC_5F62_8641_41CB_62F8D6A13037","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":4096,"url":"media/panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_0/{face}/0/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","width":24576},{"rowCount":2,"tags":"ondemand","height":2048,"url":"media/panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_0/{face}/1/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","width":12288},{"rowCount":1,"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_0/{face}/2/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_t.webp"}],"thumbnailUrl":"media/panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_t.webp"},{"vfov":180,"hfovMax":130,"data":{"label":"South Final"},"hfov":360,"class":"Panorama","label":trans('panorama_53B07897_5F4E_F850_41D5_9818CE114EAE.label'),"id":"panorama_53B07897_5F4E_F850_41D5_9818CE114EAE","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":4096,"url":"media/panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_0/{face}/0/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","width":24576},{"rowCount":2,"tags":"ondemand","height":2048,"url":"media/panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_0/{face}/1/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","width":12288},{"rowCount":1,"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_0/{face}/2/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_t.webp"}],"thumbnailUrl":"media/panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_t.webp"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_50E43411_5F61_81C3_41D2_9C6390EEF160, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","label":trans('Button_4FA723BE_5F3F_5C62_41C3_F5F7CE2A499D.label'),"iconWidth":0,"paddingTop":3,"fontColor":"#000000","rollOverBackgroundColor":["#000000"],"id":"Button_4FA723BE_5F3F_5C62_41C3_F5F7CE2A499D","buttonGroup":"Buttons","rollOverShadow":false,"paddingBottom":0,"fontFamily":"Cinzel Bold","data":{"name":"north"},"backgroundColor":["#FFFFFF"],"fontSize":"33px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","minWidth":1,"rollOverBackgroundOpacity":0.7,"mode":"toggle","backgroundOpacity":0.7,"backgroundColorRatios":[0],"rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"width":130,"height":40,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingLeft":0,"borderColor":"#000000","pressedBackgroundOpacity":0.7,"paddingRight":0,"pressedFontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5209A8FC_5F61_8242_41C7_F0AA78DA97CA"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_50E46416_5F61_81C1_41C3_3F3A2D7488B1, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","label":trans('Button_42BF3FC5_52C5_E908_41BE_1CA601D82C05.label'),"iconWidth":0,"paddingTop":3,"fontColor":"#000000","rollOverBackgroundColor":["#000000"],"id":"Button_42BF3FC5_52C5_E908_41BE_1CA601D82C05","buttonGroup":"Buttons","rollOverShadow":false,"paddingBottom":0,"fontFamily":"Cinzel Bold","data":{"name":"west"},"backgroundColor":["#FFFFFF"],"fontSize":"33px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","minWidth":1,"rollOverBackgroundOpacity":0.7,"mode":"toggle","backgroundOpacity":0.7,"backgroundColorRatios":[0],"rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"width":130,"height":40,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingLeft":0,"borderColor":"#000000","pressedBackgroundOpacity":0.7,"paddingRight":0,"pressedFontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5209E8FC_5F61_8242_41CB_E7D41B012173"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_50E79416_5F61_81C1_41C7_3CEBF3FC3BD4, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('Button_5D7675A9_52CF_3918_41BE_A4F22FF499CD.label'),"iconWidth":0,"paddingTop":3,"fontColor":"#000000","rollOverBackgroundColor":["#000000"],"id":"Button_5D7675A9_52CF_3918_41BE_A4F22FF499CD","buttonGroup":"Buttons","rollOverShadow":false,"paddingBottom":0,"fontFamily":"Cinzel Bold","data":{"name":"South"},"backgroundColor":["#FFFFFF"],"fontSize":"33px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","minWidth":1,"rollOverBackgroundOpacity":0.7,"mode":"toggle","backgroundOpacity":0.7,"backgroundColorRatios":[0],"rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"width":130,"height":40,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingLeft":0,"borderColor":"#000000","pressedBackgroundOpacity":0.7,"paddingRight":0,"pressedFontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0},{"vfov":180,"hfovMax":130,"data":{"label":"East Final"},"hfov":360,"class":"Panorama","label":trans('panorama_520863D4_5F62_8641_41B3_B25B00940250.label'),"id":"panorama_520863D4_5F62_8641_41B3_B25B00940250","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":4096,"url":"media/panorama_520863D4_5F62_8641_41B3_B25B00940250_0/{face}/0/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","width":24576},{"rowCount":2,"tags":"ondemand","height":2048,"url":"media/panorama_520863D4_5F62_8641_41B3_B25B00940250_0/{face}/1/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","width":12288},{"rowCount":1,"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_520863D4_5F62_8641_41B3_B25B00940250_0/{face}/2/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_520863D4_5F62_8641_41B3_B25B00940250_t.webp"}],"thumbnailUrl":"media/panorama_520863D4_5F62_8641_41B3_B25B00940250_t.webp"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_50E7B416_5F61_81C1_41D5_F6E6D7E261BE, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)","label":trans('Button_42A7EEF6_52C5_EB0B_41BB_B038D4BAEC6B.label'),"iconWidth":0,"paddingTop":3,"fontColor":"#000000","rollOverBackgroundColor":["#000000"],"id":"Button_42A7EEF6_52C5_EB0B_41BB_B038D4BAEC6B","buttonGroup":"Buttons","rollOverShadow":false,"paddingBottom":0,"fontFamily":"Cinzel Bold","data":{"name":"east"},"backgroundColor":["#FFFFFF"],"fontSize":"33px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","minWidth":1,"rollOverBackgroundOpacity":0.7,"mode":"toggle","backgroundOpacity":0.7,"backgroundColorRatios":[0],"rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"width":130,"height":40,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingLeft":0,"borderColor":"#000000","pressedBackgroundOpacity":0.7,"paddingRight":0,"pressedFontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_50E41411_5F61_81C3_41CA_819B107E8481, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 4)","label":trans('Button_5196ED2E_5F61_83C1_41C1_84CBC09DB339.label'),"iconWidth":0,"paddingTop":3,"fontColor":"#000000","rollOverBackgroundColor":["#000000"],"id":"Button_5196ED2E_5F61_83C1_41C1_84CBC09DB339","buttonGroup":"Buttons","rollOverShadow":false,"paddingBottom":0,"fontFamily":"Cinzel Bold","data":{"name":"north"},"backgroundColor":["#FFFFFF"],"fontSize":"33px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","minWidth":1,"rollOverBackgroundOpacity":0.7,"mode":"toggle","backgroundOpacity":0.7,"backgroundColorRatios":[0],"rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[0],"class":"Button","tabIndex":0,"width":130,"height":40,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingLeft":0,"borderColor":"#000000","pressedBackgroundOpacity":0.7,"paddingRight":0,"pressedFontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0},{"vfov":180,"hfovMax":130,"data":{"label":"Amphitheatre Final"},"hfov":360,"class":"Panorama","label":trans('panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675.label'),"id":"panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":4096,"url":"media/panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_0/{face}/0/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","width":24576},{"rowCount":2,"tags":"ondemand","height":2048,"url":"media/panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_0/{face}/1/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","width":12288},{"rowCount":1,"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_0/{face}/2/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_t.webp"}],"thumbnailUrl":"media/panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_t.webp"},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_520931E5_5F61_8243_41C9_E129CB176792_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_520908FC_5F61_8242_418C_C64077F9AC87"},{"layout":"vertical","id":"Container_42A3A2CF_52C7_FB18_419B_DF144C5650D7","data":{"name":"Container"},"verticalAlign":"middle","minHeight":20,"gap":10,"minWidth":20,"backgroundOpacity":0,"scrollBarColor":"#000000","class":"Container","overflow":"scroll","width":"100%","height":"42.699%","paddingLeft":3,"children":["this.Button_4FA723BE_5F3F_5C62_41C3_F5F7CE2A499D","this.Button_5196ED2E_5F61_83C1_41C1_84CBC09DB339","this.Button_42BF3FC5_52C5_E908_41BE_1CA601D82C05","this.Button_42A7EEF6_52C5_EB0B_41BB_B038D4BAEC6B","this.Button_5D7675A9_52CF_3918_41BE_A4F22FF499CD"],"propagateClick":false,"scrollBarMargin":2},{"toolTipPaddingBottom":4,"surfaceReticleColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"firstTransitionDuration":0,"playbackBarProgressBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","progressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","progressBottom":10,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorRatios":[0],"id":"MainViewer","playbackBarHeadShadow":true,"subtitlesTextShadowOpacity":1,"toolTipTextShadowColor":"#000000","progressHeight":2,"minHeight":50,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","minWidth":100,"progressBorderSize":0,"toolTipPaddingTop":4,"toolTipShadowColor":"#333138","vrPointerSelectionTime":2000,"playbackBarBottom":5,"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"playbackBarHeadBorderRadius":0,"playbackBarHeight":10,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarBackgroundOpacity":1,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","vrThumbstickRotationStep":20,"progressBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","subtitlesFontSize":"3vmin","toolTipPaddingRight":6,"width":"100%","height":"100%","toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"propagateClick":false,"playbackBarProgressBorderSize":0,"progressBorderRadius":2},{"mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","aaEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_50E79416_5F61_81C1_41C7_3CEBF3FC3BD4","this.PanoramaPlayListItem_50E46416_5F61_81C1_41C3_3F3A2D7488B1","this.PanoramaPlayListItem_50E7B416_5F61_81C1_41D5_F6E6D7E261BE","this.PanoramaPlayListItem_50E43411_5F61_81C3_41D2_9C6390EEF160","this.PanoramaPlayListItem_50E41411_5F61_81C3_41CA_819B107E8481"],"class":"PlayList"},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5316AFEC_5F4E_F7F0_416F_F7B248F2F40A"},{"class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_520863D4_5F62_8641_41B3_B25B00940250_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5209C8FC_5F61_8242_41D6_27E58F35C8CC"},{"layout":"vertical","id":"Container_5CFF9A32_52CB_2B0B_418B_49458C059B14","left":"0.13%","data":{"name":"Container"},"verticalAlign":"middle","minHeight":20,"gap":10,"minWidth":20,"backgroundOpacity":0,"scrollBarColor":"#000000","top":"0%","overflow":"scroll","class":"Container","width":"10.588%","height":"100%","children":["this.Container_42A3A2CF_52C7_FB18_419B_DF144C5650D7"],"propagateClick":false,"scrollBarMargin":2,"horizontalAlign":"center"},{"vfov":180,"hfovMax":130,"data":{"label":"North 2 - Perpendicular to South"},"hfov":360,"class":"Panorama","label":trans('panorama_520931E5_5F61_8243_41C9_E129CB176792.label'),"id":"panorama_520931E5_5F61_8243_41C9_E129CB176792","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":4096,"url":"media/panorama_520931E5_5F61_8243_41C9_E129CB176792_0/{face}/0/{row}_{column}.webp","colCount":24,"class":"TiledImageResourceLevel","width":24576},{"rowCount":2,"tags":"ondemand","height":2048,"url":"media/panorama_520931E5_5F61_8243_41C9_E129CB176792_0/{face}/1/{row}_{column}.webp","colCount":12,"class":"TiledImageResourceLevel","width":12288},{"rowCount":1,"tags":["ondemand","preload"],"height":1024,"url":"media/panorama_520931E5_5F61_8243_41C9_E129CB176792_0/{face}/2/{row}_{column}.webp","colCount":6,"class":"TiledImageResourceLevel","width":6144}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_520931E5_5F61_8243_41C9_E129CB176792_t.webp"}],"thumbnailUrl":"media/panorama_520931E5_5F61_8243_41C9_E129CB176792_t.webp"},{"class":"PanoramaCameraSequence","id":"sequence_5209A8FC_5F61_8242_41C7_F0AA78DA97CA","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_5209E8FC_5F61_8242_41CB_E7D41B012173","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_520908FC_5F61_8242_418C_C64077F9AC87","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"class":"PanoramaPlayListItem","media":"this.panorama_53B07897_5F4E_F850_41D5_9818CE114EAE","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_50E79416_5F61_81C1_41C7_3CEBF3FC3BD4","camera":"this.panorama_53B07897_5F4E_F850_41D5_9818CE114EAE_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_50E46416_5F61_81C1_41C3_3F3A2D7488B1","camera":"this.panorama_51A2BCAB_5F62_82C6_41D4_A3011DAAD675_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_520863D4_5F62_8641_41B3_B25B00940250","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_50E7B416_5F61_81C1_41D5_F6E6D7E261BE","camera":"this.panorama_520863D4_5F62_8641_41B3_B25B00940250_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","media":"this.panorama_5209EADC_5F62_8641_41CB_62F8D6A13037","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_50E43411_5F61_81C3_41D2_9C6390EEF160","camera":"this.panorama_5209EADC_5F62_8641_41CB_62F8D6A13037_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","media":"this.panorama_520931E5_5F61_8243_41C9_E129CB176792","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_50E41411_5F61_81C3_41CA_819B107E8481","camera":"this.panorama_520931E5_5F61_8243_41C9_E129CB176792_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"},{"class":"PanoramaCameraSequence","id":"sequence_5316AFEC_5F4E_F7F0_416F_F7B248F2F40A","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_5209C8FC_5F61_8242_41D6_27E58F35C8CC","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]}],"children":["this.MainViewer","this.Container_5CFF9A32_52CB_2B0B_418B_49458C059B14"],"layout":"absolute","start":"this.init()","id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false},"defaultLocale":"en","name":"Player824","locales":{"en":"locale/en.txt"}},"left":486.15,"backgroundColor":["#FFFFFF"],"minHeight":0,"gap":10,"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"scrollBarColor":"#000000","class":"Player","width":"100%","scripts":{"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPixels":TDV.Tour.Script.getPixels,"clone":TDV.Tour.Script.clone,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openLink":TDV.Tour.Script.openLink,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playAudioList":TDV.Tour.Script.playAudioList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"init":TDV.Tour.Script.init,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"existsKey":TDV.Tour.Script.existsKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"mixObject":TDV.Tour.Script.mixObject,"downloadFile":TDV.Tour.Script.downloadFile,"unregisterKey":TDV.Tour.Script.unregisterKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"isPanorama":TDV.Tour.Script.isPanorama,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"createTween":TDV.Tour.Script.createTween,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizStart":TDV.Tour.Script.quizStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleVR":TDV.Tour.Script.toggleVR,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"disableVR":TDV.Tour.Script.disableVR,"shareSocial":TDV.Tour.Script.shareSocial,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cloneBindings":TDV.Tour.Script.cloneBindings,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"translate":TDV.Tour.Script.translate,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setLocale":TDV.Tour.Script.setLocale,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"enableVR":TDV.Tour.Script.enableVR,"startMeasurement":TDV.Tour.Script.startMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer},"height":"100%","propagateClick":false,"scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.36, Wed Oct 21 2026
//
document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("b33bf466-bd61-4888-9c6f-4327bbf5197c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b33bf466-bd61-4888-9c6f-4327bbf5197c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"1bb776b1-0e7f-49f5-ab99-39e618397526":{"roots":{"references":[{"attributes":{"child":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"5e91640e-db94-44f0-984a-c903637cb544","type":"Panel"},{"attributes":{"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"4e2add4c-40ac-40de-b9cf-8b566eecb175","type":"HelpTool"},{"attributes":{},"id":"9c033cba-80a3-4b89-84c6-db8ffd17c211","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.649122807017545,9.68421052631579,8.581818181818182,8.163636363636364,9.277777777777779,6.6909090909090905,7.719512195121951],"x":[7,13,13,7,13,13,6],"y":["Monday","Monday","Tuesday","Thursday","Thursday","Friday","Saturday"]}},"id":"6bd48ba5-9fd6-4eda-9e8a-f32c41213693","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0c23bd4c-e1aa-41b2-a84f-9572fd16f5c4","type":"ColumnDataSource"},"glyph":{"id":"80d2381c-da45-4bc0-937d-f8553e1e0af4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6790bcce-e352-439e-9833-549497a01294","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.574074074074073,16.68831168831169,18.542857142857144,16.986666666666668],"x":[13,17,15,17],"y":["Wednesday","Wednesday","Saturday","Sunday"]}},"id":"35256fa5-7110-4e59-a265-852a3bb35cb6","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"da059485-ade2-4637-ba97-f2c6f7c178b2","type":"LinearAxis"}],"left":[{"id":"91bdaf0e-9f97-4f5d-aab3-446c1cc13e99","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b48cc826-c892-4c83-a4a7-c55b95ecb66c","type":"BoxAnnotation"},{"id":"1ebc33c2-2431-41c0-9a77-5db7a9c83c66","type":"GlyphRenderer"},{"id":"110b0bf9-0145-4d0f-8d94-a1f941532730","type":"GlyphRenderer"},{"id":"e0e29bac-4034-4047-a552-e6d09496a26f","type":"GlyphRenderer"},{"id":"80518571-33b2-402a-8fc4-ab0deba5582c","type":"GlyphRenderer"},{"id":"fb7d8563-8800-44de-b50b-7cf8c8030cf7","type":"GlyphRenderer"},{"id":"c310cae4-e49e-4873-a371-5c1da397b20f","type":"GlyphRenderer"},{"id":"4eaa3e3b-faa4-4fa9-b1fe-9be8e615b238","type":"GlyphRenderer"},{"id":"792a4683-3294-4e3b-a94f-83cbf9781d91","type":"GlyphRenderer"},{"id":"73c3c6be-349d-4850-b5f3-a0fa5e754246","type":"GlyphRenderer"},{"id":"da059485-ade2-4637-ba97-f2c6f7c178b2","type":"LinearAxis"},{"id":"91bdaf0e-9f97-4f5d-aab3-446c1cc13e99","type":"CategoricalAxis"},{"id":"188d59a6-2870-4193-8a06-554535cbcafd","type":"ColorBar"}],"right":[{"id":"188d59a6-2870-4193-8a06-554535cbcafd","type":"ColorBar"}],"title":{"id":"7e9b81d1-31b0-4537-9cab-030bc2208f03","type":"Title"},"tool_events":{"id":"c9b37c7b-fbc4-4cbe-9abd-b438ce797669","type":"ToolEvents"},"toolbar":{"id":"6c7ebacd-54e3-45b3-8af2-9e491eec415f","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"3fa92508-fb84-498f-bd2d-def4ec376211","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"fa87654f-9b10-4517-a947-e64b6db8e47a","type":"FactorRange"}},"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"80d2381c-da45-4bc0-937d-f8553e1e0af4","type":"Rect"},{"attributes":{"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"5755cfd0-a581-4e76-9267-e7fb7d0ae8af","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"044aebdf-c2d9-4afa-80a9-5f936a68ae5b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"0beb0add-6430-456e-9f51-aa733fc6e0ba","type":"ColumnDataSource"},"glyph":{"id":"593f9b3f-f43c-49f6-a274-e40390a01efa","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7f3dca06-5bc7-4b33-963d-86b650cc2f58","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"145b8dd1-0743-4c91-b3a0-ab45bae8e269","type":"PanTool"},{"id":"39dfb13a-97e7-4cb6-9743-42617ab7510c","type":"WheelZoomTool"},{"id":"fa31b991-6ccc-4d8a-913a-3d934768dd2f","type":"BoxZoomTool"},{"id":"0ffee5ec-f022-4553-95a4-8f8278f80494","type":"SaveTool"},{"id":"5755cfd0-a581-4e76-9267-e7fb7d0ae8af","type":"ResetTool"},{"id":"4e2add4c-40ac-40de-b9cf-8b566eecb175","type":"HelpTool"}]},"id":"a449e643-300b-4d27-a613-74b7f93dac9b","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9beaa2c2-5b51-4839-8e51-44d5d237e2be","type":"Rect"},{"attributes":{},"id":"312976b9-abba-42e7-8180-b70744965a75","type":"BasicTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5a2a3392-1115-435c-b1f2-85780b1f9c3e","type":"LinearAxis"}],"left":[{"id":"74754ec1-69ae-4261-8b7b-9cdf1db7687f","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"044aebdf-c2d9-4afa-80a9-5f936a68ae5b","type":"BoxAnnotation"},{"id":"d696887c-d01b-445f-b682-f2eeb7f3e1c1","type":"GlyphRenderer"},{"id":"acd28b6e-5fd6-4683-bb5b-db35a9ede959","type":"GlyphRenderer"},{"id":"c03da610-7d87-45a5-b2bc-219b580dc740","type":"GlyphRenderer"},{"id":"5050cf6e-f5d7-46de-a2a4-38153bf0af04","type":"GlyphRenderer"},{"id":"6790bcce-e352-439e-9833-549497a01294","type":"GlyphRenderer"},{"id":"26bca3c4-aeb0-4e04-a3d9-fd67421d3a1a","type":"GlyphRenderer"},{"id":"5dcb0726-7582-44f2-a26c-c99fd53a28e5","type":"GlyphRenderer"},{"id":"7f3dca06-5bc7-4b33-963d-86b650cc2f58","type":"GlyphRenderer"},{"id":"093d7545-ff6e-420d-8c33-040c37802de7","type":"GlyphRenderer"},{"id":"5a2a3392-1115-435c-b1f2-85780b1f9c3e","type":"LinearAxis"},{"id":"74754ec1-69ae-4261-8b7b-9cdf1db7687f","type":"CategoricalAxis"},{"id":"4194a761-6941-49a0-aa5d-7e13d114b85a","type":"ColorBar"}],"right":[{"id":"4194a761-6941-49a0-aa5d-7e13d114b85a","type":"ColorBar"}],"title":{"id":"a8b13970-25bb-44bc-b6d2-4ce6abc1f516","type":"Title"},"tool_events":{"id":"c214a535-b586-463a-9d4a-98bb7a26ebc1","type":"ToolEvents"},"toolbar":{"id":"a449e643-300b-4d27-a613-74b7f93dac9b","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"37739133-adc1-44c6-a891-57bf8bfb7379","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"466c87cb-22db-4298-b3e3-7edba7a699d3","type":"FactorRange"}},"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"2f2c24c2-8168-469b-91c8-c15fcb929cb8","type":"BasicTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d5dffff1-d915-45bb-b233-35d5f6271af7","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"c1562fe6-4d25-431b-975a-e5a8bf233226","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"3576daa3-541a-4510-9207-8e5ead85b849","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.01298701298701,20.13157894736842,23.09090909090909],"x":[17,17,13],"y":["Monday","Friday","Saturday"]}},"id":"de0fd5bc-6f42-4aa4-b742-b26acac7fa35","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.518518518518519,10.27027027027027,10.051948051948052,12.171052631578947,12.36],"x":[7,12,12,12,12],"y":["Tuesday","Tuesday","Wednesday","Friday","Sunday"]}},"id":"932e690a-2c0a-4c91-ab04-c6c5fb5b51a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.81578947368421,16.527027027027028,14.346153846153847],"x":[12,12,7],"y":["Monday","Thursday","Friday"]}},"id":"0c23bd4c-e1aa-41b2-a84f-9572fd16f5c4","type":"ColumnDataSource"},{"attributes":{},"id":"7e350d5d-9502-4d5f-a6f9-ed7495145ecb","type":"BasicTicker"},{"attributes":{"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"0ffee5ec-f022-4553-95a4-8f8278f80494","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.7333333333333334,3.161764705882353,3.0,0.0,0.0,0.0,0.0],"x":[6,6,6,9,17,6,7],"y":["Monday","Wednesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"745a1239-ce36-4f63-9d49-1db6f30545da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"0927cef6-aab3-4bc6-a519-f9cb221663ac","type":"ColumnDataSource"},"glyph":{"id":"4a3df432-be28-4155-9649-cb08880143ec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26bca3c4-aeb0-4e04-a3d9-fd67421d3a1a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"a9e63375-7181-4f6b-8ad0-56c868050baa","type":"ColumnDataSource"},"glyph":{"id":"74b9ed83-25c8-497f-aa94-9cd1c1f7ad4c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1ebc33c2-2431-41c0-9a77-5db7a9c83c66","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"432e87f7-4dfc-42c5-b0a5-286f6cb5ccd5","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,28.76271186440678],"x":[16,16,17,16,16,16,16],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Sunday"]}},"id":"603d534c-da6d-4f92-84b1-fb37992c7bd6","type":"ColumnDataSource"},{"attributes":{},"id":"9dfc6bb9-cfee-431e-b45a-647fd4e77f0c","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"7e9b81d1-31b0-4537-9cab-030bc2208f03","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b48cc826-c892-4c83-a4a7-c55b95ecb66c","type":"BoxAnnotation"},{"attributes":{"callback":null,"tabs":[{"id":"6d04df13-fcd8-4d22-86e4-52bc061b9d36","type":"Panel"},{"id":"5e91640e-db94-44f0-984a-c903637cb544","type":"Panel"}]},"id":"8e675fa4-967d-426d-b20e-a211213bb3ca","type":"Tabs"},{"attributes":{"data_source":{"id":"07dd5833-9337-4c4d-87f7-67ab8a0ee640","type":"ColumnDataSource"},"glyph":{"id":"432e87f7-4dfc-42c5-b0a5-286f6cb5ccd5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c03da610-7d87-45a5-b2bc-219b580dc740","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"c8fd27f0-dea5-4797-a103-a31e2272903a","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[23.01298701298701,20.13157894736842,23.09090909090909],"x":[17,17,13],"y":["Monday","Friday","Saturday"]}},"id":"07dd5833-9337-4c4d-87f7-67ab8a0ee640","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"fa87654f-9b10-4517-a947-e64b6db8e47a","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.81578947368421,16.527027027027028,14.346153846153847],"x":[12,12,7],"y":["Monday","Thursday","Friday"]}},"id":"6b9d1064-2f84-49ca-8cfc-306067495977","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c8bb9a4-1afa-401a-95ee-98eaab41c7d7","type":"Rect"},{"attributes":{},"id":"ce2d2b2c-adeb-49d8-8241-a7ddbea980e1","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2796c2e2-f028-4d98-b23c-b40b6aa508ab","type":"BasicTickFormatter"},"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"},"ticker":{"id":"c9c01491-f015-454a-86d7-34cc289f7853","type":"BasicTicker"}},"id":"da059485-ade2-4637-ba97-f2c6f7c178b2","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0140e01e-8bf7-49ba-a07f-1aca30eb264e","type":"Rect"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"a8b13970-25bb-44bc-b6d2-4ce6abc1f516","type":"Title"},{"attributes":{"color_mapper":{"id":"6ee43adc-4b92-482b-bb1f-70d3d98329a4","type":"LinearColorMapper"},"formatter":{"id":"12484722-f689-4ed6-91ce-54c94ac7f045","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"},"ticker":{"id":"312976b9-abba-42e7-8180-b70744965a75","type":"BasicTicker"}},"id":"188d59a6-2870-4193-8a06-554535cbcafd","type":"ColorBar"},{"attributes":{"data_source":{"id":"c54844f2-2a2d-461a-8acb-acdc6acd58d0","type":"ColumnDataSource"},"glyph":{"id":"f6bc64f4-d166-4218-8705-fa97acd2dcc7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4eaa3e3b-faa4-4fa9-b1fe-9be8e615b238","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35256fa5-7110-4e59-a265-852a3bb35cb6","type":"ColumnDataSource"},"glyph":{"id":"fb59c953-c443-413b-94cf-e6ebb222f7d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5050cf6e-f5d7-46de-a2a4-38153bf0af04","type":"GlyphRenderer"},{"attributes":{},"id":"c9c01491-f015-454a-86d7-34cc289f7853","type":"BasicTicker"},{"attributes":{"data_source":{"id":"03bae271-26d8-4b83-959c-0f9f988f2694","type":"ColumnDataSource"},"glyph":{"id":"f7764e88-db98-45c9-9756-1f6b84ac108c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"093d7545-ff6e-420d-8c33-040c37802de7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"f3b32e6c-0fd5-4c0d-82c2-b2464e83dd21","type":"PanTool"},{"attributes":{"data_source":{"id":"6bdd9524-123d-4009-9a39-3dc58ca662ae","type":"ColumnDataSource"},"glyph":{"id":"0140e01e-8bf7-49ba-a07f-1aca30eb264e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"acd28b6e-5fd6-4683-bb5b-db35a9ede959","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e048a81-c8cd-41db-b386-e78da6706e6e","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"ce2d2b2c-adeb-49d8-8241-a7ddbea980e1","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"},"ticker":{"id":"44d27e1b-f126-4df6-bc36-d3392fd82cc5","type":"CategoricalTicker"}},"id":"91bdaf0e-9f97-4f5d-aab3-446c1cc13e99","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"618936bf-6f34-4119-8856-9c1e088bba96","type":"Rect"},{"attributes":{},"id":"c214a535-b586-463a-9d4a-98bb7a26ebc1","type":"ToolEvents"},{"attributes":{"data_source":{"id":"12a59eec-417a-4822-8536-c1b6b9983a86","type":"ColumnDataSource"},"glyph":{"id":"2c8bb9a4-1afa-401a-95ee-98eaab41c7d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"110b0bf9-0145-4d0f-8d94-a1f941532730","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"37739133-adc1-44c6-a891-57bf8bfb7379","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7094e7a6-a56c-4f79-a8a1-4909525dfce7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.518518518518519,10.27027027027027,10.051948051948052,12.171052631578947,12.36],"x":[7,12,12,12,12],"y":["Tuesday","Tuesday","Wednesday","Friday","Sunday"]}},"id":"0927cef6-aab3-4bc6-a519-f9cb221663ac","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9dfc6bb9-cfee-431e-b45a-647fd4e77f0c","type":"BasicTickFormatter"},"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"},"ticker":{"id":"9c033cba-80a3-4b89-84c6-db8ffd17c211","type":"BasicTicker"}},"id":"5a2a3392-1115-435c-b1f2-85780b1f9c3e","type":"LinearAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"6ee43adc-4b92-482b-bb1f-70d3d98329a4","type":"LinearColorMapper"},{"attributes":{},"id":"d2a44bfc-ffac-4cd1-9de2-1b63444b9935","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e618f073-8aa5-46de-bb7d-da1ce284c1c5","type":"Rect"},{"attributes":{"child":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"6d04df13-fcd8-4d22-86e4-52bc061b9d36","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"74b9ed83-25c8-497f-aa94-9cd1c1f7ad4c","type":"Rect"},{"attributes":{"data_source":{"id":"932e690a-2c0a-4c91-ab04-c6c5fb5b51a2","type":"ColumnDataSource"},"glyph":{"id":"9beaa2c2-5b51-4839-8e51-44d5d237e2be","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c310cae4-e49e-4873-a371-5c1da397b20f","type":"GlyphRenderer"},{"attributes":{},"id":"12484722-f689-4ed6-91ce-54c94ac7f045","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.574074074074073,16.68831168831169,18.542857142857144,16.986666666666668],"x":[13,17,15,17],"y":["Wednesday","Wednesday","Saturday","Sunday"]}},"id":"b4a9dfea-4130-4c55-9a13-f831ac9876c0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"2fc59c85-cd39-4ecd-bee6-78012345ae06","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,30.0,30.0,28.76271186440678],"x":[16,16,17,16,16,16,16],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Sunday"]}},"id":"a9e63375-7181-4f6b-8ad0-56c868050baa","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"593f9b3f-f43c-49f6-a274-e40390a01efa","type":"Rect"},{"attributes":{"data_source":{"id":"6b9d1064-2f84-49ca-8cfc-306067495977","type":"ColumnDataSource"},"glyph":{"id":"81ff5cb8-e6a0-4874-adfa-579dc4b7eebc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fb7d8563-8800-44de-b50b-7cf8c8030cf7","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.649122807017545,9.68421052631579,8.581818181818182,8.163636363636364,9.277777777777779,6.6909090909090905,7.719512195121951],"x":[7,13,13,7,13,13,6],"y":["Monday","Monday","Tuesday","Thursday","Thursday","Friday","Saturday"]}},"id":"c54844f2-2a2d-461a-8acb-acdc6acd58d0","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a0f307a7-1a9e-4465-8e6a-ff782b5780f8","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"},"ticker":{"id":"d2a44bfc-ffac-4cd1-9de2-1b63444b9935","type":"CategoricalTicker"}},"id":"74754ec1-69ae-4261-8b7b-9cdf1db7687f","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb59c953-c443-413b-94cf-e6ebb222f7d7","type":"Rect"},{"attributes":{"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"39dfb13a-97e7-4cb6-9743-42617ab7510c","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b4a9dfea-4130-4c55-9a13-f831ac9876c0","type":"ColumnDataSource"},"glyph":{"id":"618936bf-6f34-4119-8856-9c1e088bba96","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"80518571-33b2-402a-8fc4-ab0deba5582c","type":"GlyphRenderer"},{"attributes":{},"id":"2796c2e2-f028-4d98-b23c-b40b6aa508ab","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b48cc826-c892-4c83-a4a7-c55b95ecb66c","type":"BoxAnnotation"},"plot":{"id":"ef6ce769-6c79-458c-b3de-ca150088e8be","subtype":"Chart","type":"Plot"}},"id":"13a6fbd0-1cf5-4046-b251-955fbeccd8ee","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"044aebdf-c2d9-4afa-80a9-5f936a68ae5b","type":"BoxAnnotation"},"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"fa31b991-6ccc-4d8a-913a-3d934768dd2f","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"6bd48ba5-9fd6-4eda-9e8a-f32c41213693","type":"ColumnDataSource"},"glyph":{"id":"8883bf23-75ca-419b-9506-5ab5f0c79d6a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5dcb0726-7582-44f2-a26c-c99fd53a28e5","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"466c87cb-22db-4298-b3e3-7edba7a699d3","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8883bf23-75ca-419b-9506-5ab5f0c79d6a","type":"Rect"},{"attributes":{"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"}},"id":"145b8dd1-0743-4c91-b3a0-ab45bae8e269","type":"PanTool"},{"attributes":{"data_source":{"id":"de0fd5bc-6f42-4aa4-b742-b26acac7fa35","type":"ColumnDataSource"},"glyph":{"id":"e618f073-8aa5-46de-bb7d-da1ce284c1c5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e0e29bac-4034-4047-a552-e6d09496a26f","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6fc81ac8-d574-41e3-906b-208e0da25fec","type":"ColumnDataSource"},"glyph":{"id":"35404cc4-ba89-4eb1-8b7d-fe5c82be34c2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"792a4683-3294-4e3b-a94f-83cbf9781d91","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4a3df432-be28-4155-9649-cb08880143ec","type":"Rect"},{"attributes":{"data_source":{"id":"603d534c-da6d-4f92-84b1-fb37992c7bd6","type":"ColumnDataSource"},"glyph":{"id":"7094e7a6-a56c-4f79-a8a1-4909525dfce7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d696887c-d01b-445f-b682-f2eeb7f3e1c1","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.98611111111111,26.142857142857142,23.8125],"x":[17,12,16],"y":["Thursday","Saturday","Saturday"]}},"id":"6bdd9524-123d-4009-9a39-3dc58ca662ae","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.712328767123288,5.745454545454545,4.266666666666667,4.533333333333333,6.491228070175438],"x":[6,7,6,7,13],"y":["Tuesday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"0beb0add-6430-456e-9f51-aa733fc6e0ba","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81ff5cb8-e6a0-4874-adfa-579dc4b7eebc","type":"Rect"},{"attributes":{},"id":"a0f307a7-1a9e-4465-8e6a-ff782b5780f8","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.7333333333333334,3.161764705882353,3.0,0.0,0.0,0.0,0.0],"x":[6,6,6,9,17,6,7],"y":["Monday","Wednesday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"03bae271-26d8-4b83-959c-0f9f988f2694","type":"ColumnDataSource"},{"attributes":{},"id":"c9b37c7b-fbc4-4cbe-9abd-b438ce797669","type":"ToolEvents"},{"attributes":{},"id":"44d27e1b-f126-4df6-bc36-d3392fd82cc5","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.712328767123288,5.745454545454545,4.266666666666667,4.533333333333333,6.491228070175438],"x":[6,7,6,7,13],"y":["Tuesday","Wednesday","Thursday","Saturday","Sunday"]}},"id":"6fc81ac8-d574-41e3-906b-208e0da25fec","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"d5dffff1-d915-45bb-b233-35d5f6271af7","type":"LinearColorMapper"},"formatter":{"id":"2f2c24c2-8168-469b-91c8-c15fcb929cb8","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c659c349-5f15-4869-bb8c-3630feb45801","subtype":"Chart","type":"Plot"},"ticker":{"id":"7e350d5d-9502-4d5f-a6f9-ed7495145ecb","type":"BasicTicker"}},"id":"4194a761-6941-49a0-aa5d-7e13d114b85a","type":"ColorBar"},{"attributes":{"data_source":{"id":"745a1239-ce36-4f63-9d49-1db6f30545da","type":"ColumnDataSource"},"glyph":{"id":"0e048a81-c8cd-41db-b386-e78da6706e6e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"73c3c6be-349d-4850-b5f3-a0fa5e754246","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"35404cc4-ba89-4eb1-8b7d-fe5c82be34c2","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"3fa92508-fb84-498f-bd2d-def4ec376211","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7764e88-db98-45c9-9756-1f6b84ac108c","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f3b32e6c-0fd5-4c0d-82c2-b2464e83dd21","type":"PanTool"},{"id":"c1562fe6-4d25-431b-975a-e5a8bf233226","type":"WheelZoomTool"},{"id":"13a6fbd0-1cf5-4046-b251-955fbeccd8ee","type":"BoxZoomTool"},{"id":"c8fd27f0-dea5-4797-a103-a31e2272903a","type":"SaveTool"},{"id":"3576daa3-541a-4510-9207-8e5ead85b849","type":"ResetTool"},{"id":"2fc59c85-cd39-4ecd-bee6-78012345ae06","type":"HelpTool"}]},"id":"6c7ebacd-54e3-45b3-8af2-9e491eec415f","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.98611111111111,26.142857142857142,23.8125],"x":[17,12,16],"y":["Thursday","Saturday","Saturday"]}},"id":"12a59eec-417a-4822-8536-c1b6b9983a86","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6bc64f4-d166-4218-8705-fa97acd2dcc7","type":"Rect"}],"root_ids":["8e675fa4-967d-426d-b20e-a211213bb3ca"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"1bb776b1-0e7f-49f5-ab99-39e618397526","elementid":"b33bf466-bd61-4888-9c6f-4327bbf5197c","modelid":"8e675fa4-967d-426d-b20e-a211213bb3ca"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});
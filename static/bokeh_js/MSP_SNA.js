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
      };var element = document.getElementById("e0d6dd3a-c0c0-4fd1-9786-e1f1f6e45350");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0d6dd3a-c0c0-4fd1-9786-e1f1f6e45350' but no matching script tag was found. ")
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
                  var docs_json = {"073e48a9-5e20-4fae-a559-0fe5152446fb":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b76cc40-b1b2-4272-bc90-90866258e692","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2fdff513-f164-46f4-86ce-b2dcfcfc97fe","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b5a56783-bdbb-4334-96cf-89f452cae352","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"04d528e8-5b2a-4e21-834e-d7c26e307d5d","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.162162162162162,4.946666666666666,6.0,6.486111111111111,5.148936170212766,4.287037037037037,4.533333333333333,6.641791044776119,4.185185185185185,3.9626168224299065,5.346666666666667,6.082758620689655,4.925925925925926,4.768518518518518,3.4615384615384617,5.428571428571429,5.94392523364486,5.0,3.918918918918919,3.857142857142857,4.654929577464789,5.382978723404255,5.620689655172414,3.4324324324324325,6.363636363636363,3.4271844660194173,5.536585365853658,4.757142857142857,5.75,5.8979591836734695,3.4838709677419355],"x":[11,14,15,17,19,9,14,17,20,9,14,17,20,9,10,20,9,10,14,15,17,19,20,11,15,9,11,14,18,19,20],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Friday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"4ba64c3e-3bed-4cef-bf34-de6f903d2728","type":"ColumnDataSource"},{"attributes":{},"id":"d03c11e4-02b3-4e4d-96a5-798067ae1795","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d2f95a9-a660-46b2-86a3-7d6089ef4ea1","type":"Rect"},{"attributes":{"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"8e544081-f383-436e-ae15-258bc2b1dec2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"93540a05-72d1-400f-9bdd-71a2939aa583","type":"ResetTool"},{"attributes":{},"id":"6fb3fb02-7997-4616-8f6c-e5bf3bb37b5d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"09838363-15b6-45b4-b0d2-36309ebebea9","type":"ColumnDataSource"},"glyph":{"id":"1e888e00-2f0c-445f-beb6-3a0587e99aeb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c0e8fb3-72f3-424d-a449-28cc1f37a792","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"faf4d813-c0e0-48eb-acfd-941624f82b99","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a1a98f4-6e44-416f-baba-d5123e878313","type":"Rect"},{"attributes":{},"id":"09c6d746-9c88-47ac-9a08-682da7d029b3","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.0384615384615383,2.0,3.3214285714285716,1.1764705882352942,0.0,2.1923076923076925,2.8055555555555554,0.0,0.5,2.3333333333333335,1.8823529411764706,2.4761904761904763,2.9714285714285715,0.6666666666666666,0.09090909090909091,1.0,3.111111111111111,0.0,1.0769230769230769],"x":[9,10,20,11,15,19,11,15,15,11,9,13,14,19,20,7,10,13,15],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"cda286b9-8de4-4a34-8e74-ba8d51b1d396","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"034594c8-328c-489c-b90a-e3ce675d1137","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ffef2bd-b0d7-4886-9560-598140c782a3","type":"Rect"},{"attributes":{"overlay":{"id":"0639c8d3-5b6b-4e4f-8e86-60dfba224c09","type":"BoxAnnotation"},"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"9a556831-509b-4541-a4df-b0893813980b","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"4ba64c3e-3bed-4cef-bf34-de6f903d2728","type":"ColumnDataSource"},"glyph":{"id":"2ffef2bd-b0d7-4886-9560-598140c782a3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e3361b82-90e3-4f53-9c14-c938660d4774","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.625],"x":[18],"y":["Monday"]}},"id":"5d2a14cc-5a6a-4c5f-8024-96aec74a59cf","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"489ffdc8-0178-46e1-b324-23fefad5606e","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"91383184-7366-45ec-a755-4585d56c6a90","type":"LinearAxis"}],"left":[{"id":"1425f99c-a9f5-43ed-9d4c-4edb7cbde558","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"0639c8d3-5b6b-4e4f-8e86-60dfba224c09","type":"BoxAnnotation"},{"id":"3419df3e-a272-4323-8a98-0d434727ebdd","type":"GlyphRenderer"},{"id":"d63ea690-9866-4604-be1c-a3b7527e5efd","type":"GlyphRenderer"},{"id":"d52d8c3d-3b78-4347-80d4-65c3ec647497","type":"GlyphRenderer"},{"id":"efd59f64-fb55-4e1d-b9ff-f312c17312af","type":"GlyphRenderer"},{"id":"fd176ee4-de45-4647-817d-b187987a0fe0","type":"GlyphRenderer"},{"id":"d0a41686-bd0b-41d5-9a5b-46ae3acb3080","type":"GlyphRenderer"},{"id":"be6b69d1-6557-4116-926b-6a2293ebf6ae","type":"GlyphRenderer"},{"id":"91383184-7366-45ec-a755-4585d56c6a90","type":"LinearAxis"},{"id":"1425f99c-a9f5-43ed-9d4c-4edb7cbde558","type":"CategoricalAxis"},{"id":"c18bdb90-fdee-4f73-85ad-e581296bf9cb","type":"ColorBar"}],"right":[{"id":"c18bdb90-fdee-4f73-85ad-e581296bf9cb","type":"ColorBar"}],"title":{"id":"faf4d813-c0e0-48eb-acfd-941624f82b99","type":"Title"},"tool_events":{"id":"beea7737-39bc-49ce-b084-a8c93747c9ee","type":"ToolEvents"},"toolbar":{"id":"8891d5a1-a020-4d10-906c-d27ee0dde269","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"bc8c4e53-3c21-442e-94f9-742197a2b567","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"584dd0d9-a24e-47fa-8ef1-eda6cbb9f76f","type":"FactorRange"}},"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"09c6d746-9c88-47ac-9a08-682da7d029b3","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"},"ticker":{"id":"d03c11e4-02b3-4e4d-96a5-798067ae1795","type":"CategoricalTicker"}},"id":"bf384d4a-907d-487b-a7a7-d7875091063d","type":"CategoricalAxis"},{"attributes":{},"id":"05c2b78c-6bd1-47a4-b5a2-313e7b2c3184","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b5d9ff65-4556-4849-9be8-30bcb437b43c","type":"Panel"},{"attributes":{"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"7b8f62ed-4b3e-4e45-8684-3e168b457427","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2dce37fb-0575-46d1-b6d7-1c797fb19aa3","type":"PanTool"},{"id":"7b8f62ed-4b3e-4e45-8684-3e168b457427","type":"WheelZoomTool"},{"id":"9a556831-509b-4541-a4df-b0893813980b","type":"BoxZoomTool"},{"id":"0bc6dbcf-19a6-4ff6-9016-820b9c4c8664","type":"SaveTool"},{"id":"b2dbcf6a-a260-48cb-95f7-88457bc6b68a","type":"ResetTool"},{"id":"ac08a7df-5898-4fcb-93eb-88967fd0008d","type":"HelpTool"}]},"id":"8891d5a1-a020-4d10-906c-d27ee0dde269","type":"Toolbar"},{"attributes":{},"id":"fbb170e4-445e-460a-9140-34bbf8c9d009","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"b5a56783-bdbb-4334-96cf-89f452cae352","type":"LinearColorMapper"},"formatter":{"id":"3b395cee-4484-4144-a7c5-e17cf9946d7f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"},"ticker":{"id":"e4f1c568-05c5-4b79-98ec-0f7a815116d2","type":"BasicTicker"}},"id":"c18bdb90-fdee-4f73-85ad-e581296bf9cb","type":"ColorBar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0639c8d3-5b6b-4e4f-8e86-60dfba224c09","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,16.88888888888889],"x":[13,18],"y":["Friday","Friday"]}},"id":"5952b710-9117-4d01-88ad-7d47176db634","type":"ColumnDataSource"},{"attributes":{},"id":"07ffd3d6-f1be-4ef5-b173-f42b4851aa2c","type":"ToolEvents"},{"attributes":{"overlay":{"id":"489ffdc8-0178-46e1-b324-23fefad5606e","type":"BoxAnnotation"},"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"98d17926-349b-4569-8db5-fa415c3c0345","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[18],"y":["Thursday"]}},"id":"3abc4e46-2a55-42c1-9499-9bb89d7cc443","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"653f2992-b8e5-4f8b-b5be-c9f587308698","type":"Range1d"},{"attributes":{"child":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"8e7a0ace-1e7d-42a9-8d22-3363b2b1f6ce","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"01a629ae-4803-4589-ae97-2f2fd078fe7f","type":"Rect"},{"attributes":{},"id":"3b395cee-4484-4144-a7c5-e17cf9946d7f","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e888e00-2f0c-445f-beb6-3a0587e99aeb","type":"Rect"},{"attributes":{"data_source":{"id":"7d4c770c-0701-4e61-929c-822f5b07711d","type":"ColumnDataSource"},"glyph":{"id":"2fdff513-f164-46f4-86ce-b2dcfcfc97fe","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"be6b69d1-6557-4116-926b-6a2293ebf6ae","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.6923076923076925,8.692307692307692,7.958333333333333,9.371428571428572,7.621621621621622,7.246478873239437,6.8,7.25,7.815384615384615,7.753731343283582],"x":[10,10,19,11,14,17,19,10,17,17],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Saturday","Saturday","Sunday"]}},"id":"3fba7008-789e-4550-916e-b147b1d21755","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.11111111111111,10.444444444444445],"x":[18,18],"y":["Tuesday","Wednesday"]}},"id":"09838363-15b6-45b4-b0d2-36309ebebea9","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e089a98c-6ac2-4f94-af03-1c49eebbcd12","type":"LinearAxis"}],"left":[{"id":"bf384d4a-907d-487b-a7a7-d7875091063d","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"489ffdc8-0178-46e1-b324-23fefad5606e","type":"BoxAnnotation"},{"id":"57e366ed-cbd2-43d1-82f5-25e0f7eb2175","type":"GlyphRenderer"},{"id":"6c8dc96f-30d9-4d1b-aee7-8b44b3f0e831","type":"GlyphRenderer"},{"id":"8099dfbc-791c-4fcd-b5a8-0a814b1a5337","type":"GlyphRenderer"},{"id":"6c0e8fb3-72f3-424d-a449-28cc1f37a792","type":"GlyphRenderer"},{"id":"43783a9e-ebb8-4980-ad02-f22a621d3d25","type":"GlyphRenderer"},{"id":"e3361b82-90e3-4f53-9c14-c938660d4774","type":"GlyphRenderer"},{"id":"6f564a2f-6111-4b8d-954b-1d777cb55542","type":"GlyphRenderer"},{"id":"e089a98c-6ac2-4f94-af03-1c49eebbcd12","type":"LinearAxis"},{"id":"bf384d4a-907d-487b-a7a7-d7875091063d","type":"CategoricalAxis"},{"id":"5fa00c8c-203d-4562-b8b6-069a365c8698","type":"ColorBar"}],"right":[{"id":"5fa00c8c-203d-4562-b8b6-069a365c8698","type":"ColorBar"}],"title":{"id":"f28a2c8e-7a3b-422f-9500-85e0f48aec5a","type":"Title"},"tool_events":{"id":"07ffd3d6-f1be-4ef5-b173-f42b4851aa2c","type":"ToolEvents"},"toolbar":{"id":"40e64338-9a25-4cbd-b415-8783b20e62a4","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"653f2992-b8e5-4f8b-b5be-c9f587308698","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f76fc7a2-6b80-4dff-8f27-629ce96a8b50","type":"FactorRange"}},"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"5d2a14cc-5a6a-4c5f-8024-96aec74a59cf","type":"ColumnDataSource"},"glyph":{"id":"0b76cc40-b1b2-4272-bc90-90866258e692","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d63ea690-9866-4604-be1c-a3b7527e5efd","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2889209-5f24-40cb-bf62-666fe9de38a0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"68c33e02-9c23-41aa-992c-dec7e3e38f38","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.6923076923076925,8.692307692307692,7.958333333333333,9.371428571428572,7.621621621621622,7.246478873239437,6.8,7.25,7.815384615384615,7.753731343283582],"x":[10,10,19,11,14,17,19,10,17,17],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Saturday","Saturday","Sunday"]}},"id":"05e10d10-2cb1-4203-8e95-7a5a30efa018","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"87bc1298-ab12-4cf6-870f-79459a3766c6","type":"PanTool"},{"id":"8e544081-f383-436e-ae15-258bc2b1dec2","type":"WheelZoomTool"},{"id":"98d17926-349b-4569-8db5-fa415c3c0345","type":"BoxZoomTool"},{"id":"04d528e8-5b2a-4e21-834e-d7c26e307d5d","type":"SaveTool"},{"id":"93540a05-72d1-400f-9bdd-71a2939aa583","type":"ResetTool"},{"id":"daf63fe6-1632-4a85-ac7c-a08017c04ba9","type":"HelpTool"}]},"id":"40e64338-9a25-4cbd-b415-8783b20e62a4","type":"Toolbar"},{"attributes":{"data_source":{"id":"3abc4e46-2a55-42c1-9499-9bb89d7cc443","type":"ColumnDataSource"},"glyph":{"id":"034594c8-328c-489c-b90a-e3ce675d1137","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"57e366ed-cbd2-43d1-82f5-25e0f7eb2175","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c1e114c-de8e-48e4-b49c-06578ecb95d5","type":"Rect"},{"attributes":{"data_source":{"id":"a9ba42cf-85a3-407c-ae38-222a9ef0e5e0","type":"ColumnDataSource"},"glyph":{"id":"b2889209-5f24-40cb-bf62-666fe9de38a0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d52d8c3d-3b78-4347-80d4-65c3ec647497","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ede8d482-7599-45bc-aec3-8647ad3eda77","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[18],"y":["Thursday"]}},"id":"2cca9922-775b-422a-9523-575fb7410b6a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5952b710-9117-4d01-88ad-7d47176db634","type":"ColumnDataSource"},"glyph":{"id":"3a1a98f4-6e44-416f-baba-d5123e878313","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8099dfbc-791c-4fcd-b5a8-0a814b1a5337","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"ac08a7df-5898-4fcb-93eb-88967fd0008d","type":"HelpTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"f76fc7a2-6b80-4dff-8f27-629ce96a8b50","type":"FactorRange"},{"attributes":{"data_source":{"id":"3fba7008-789e-4550-916e-b147b1d21755","type":"ColumnDataSource"},"glyph":{"id":"e94a69a8-9409-41cf-8eec-3a6f91ac7c0d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fd176ee4-de45-4647-817d-b187987a0fe0","type":"GlyphRenderer"},{"attributes":{},"id":"a8f2042f-3bde-4e31-bdaa-062f71b66daf","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"daf63fe6-1632-4a85-ac7c-a08017c04ba9","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[23.625],"x":[18],"y":["Monday"]}},"id":"6398e922-78bf-452b-b643-0e8fd51ec60c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"680f78f3-0590-4bee-9c80-95b5c2fdf923","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,16.88888888888889],"x":[13,18],"y":["Friday","Friday"]}},"id":"a9ba42cf-85a3-407c-ae38-222a9ef0e5e0","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"05c2b78c-6bd1-47a4-b5a2-313e7b2c3184","type":"BasicTickFormatter"},"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"},"ticker":{"id":"70584eee-3e21-4e3f-ac80-94136214fa2e","type":"BasicTicker"}},"id":"e089a98c-6ac2-4f94-af03-1c49eebbcd12","type":"LinearAxis"},{"attributes":{},"id":"beea7737-39bc-49ce-b084-a8c93747c9ee","type":"ToolEvents"},{"attributes":{"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"}},"id":"87bc1298-ab12-4cf6-870f-79459a3766c6","type":"PanTool"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"f28a2c8e-7a3b-422f-9500-85e0f48aec5a","type":"Title"},{"attributes":{"data_source":{"id":"2cca9922-775b-422a-9523-575fb7410b6a","type":"ColumnDataSource"},"glyph":{"id":"01a629ae-4803-4589-ae97-2f2fd078fe7f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3419df3e-a272-4323-8a98-0d434727ebdd","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"05e10d10-2cb1-4203-8e95-7a5a30efa018","type":"ColumnDataSource"},"glyph":{"id":"7d2f95a9-a660-46b2-86a3-7d6089ef4ea1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43783a9e-ebb8-4980-ad02-f22a621d3d25","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"0bc6dbcf-19a6-4ff6-9016-820b9c4c8664","type":"SaveTool"},{"attributes":{},"id":"27f63daa-f1af-4353-93f1-6b3a2f9f6c1d","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"b2dbcf6a-a260-48cb-95f7-88457bc6b68a","type":"ResetTool"},{"attributes":{"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"}},"id":"2dce37fb-0575-46d1-b6d7-1c797fb19aa3","type":"PanTool"},{"attributes":{"callback":null,"tabs":[{"id":"b5d9ff65-4556-4849-9be8-30bcb437b43c","type":"Panel"},{"id":"8e7a0ace-1e7d-42a9-8d22-3363b2b1f6ce","type":"Panel"}]},"id":"e9e3dc51-ffb4-4bc3-93e5-f2b32b067d83","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.162162162162162,4.946666666666666,6.0,6.486111111111111,5.148936170212766,4.287037037037037,4.533333333333333,6.641791044776119,4.185185185185185,3.9626168224299065,5.346666666666667,6.082758620689655,4.925925925925926,4.768518518518518,3.4615384615384617,5.428571428571429,5.94392523364486,5.0,3.918918918918919,3.857142857142857,4.654929577464789,5.382978723404255,5.620689655172414,3.4324324324324325,6.363636363636363,3.4271844660194173,5.536585365853658,4.757142857142857,5.75,5.8979591836734695,3.4838709677419355],"x":[11,14,15,17,19,9,14,17,20,9,14,17,20,9,10,20,9,10,14,15,17,19,20,11,15,9,11,14,18,19,20],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Friday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday","Sunday","Sunday"]}},"id":"65660bcb-f57b-402c-88ca-0488ea2cccef","type":"ColumnDataSource"},{"attributes":{},"id":"70584eee-3e21-4e3f-ac80-94136214fa2e","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.0384615384615383,2.0,3.3214285714285716,1.1764705882352942,0.0,2.1923076923076925,2.8055555555555554,0.0,0.5,2.3333333333333335,1.8823529411764706,2.4761904761904763,2.9714285714285715,0.6666666666666666,0.09090909090909091,1.0,3.111111111111111,0.0,1.0769230769230769],"x":[9,10,20,11,15,19,11,15,15,11,9,13,14,19,20,7,10,13,15],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"7d4c770c-0701-4e61-929c-822f5b07711d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"cda286b9-8de4-4a34-8e74-ba8d51b1d396","type":"ColumnDataSource"},"glyph":{"id":"ede8d482-7599-45bc-aec3-8647ad3eda77","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6f564a2f-6111-4b8d-954b-1d777cb55542","type":"GlyphRenderer"},{"attributes":{},"id":"75095163-2d24-4209-bb12-e852e69aaacf","type":"BasicTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"89094957-fe89-4658-945a-5c6d36a9e47c","type":"LinearColorMapper"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.11111111111111,10.444444444444445],"x":[18,18],"y":["Tuesday","Wednesday"]}},"id":"993e675a-b30a-4d90-8dc8-025fcbad18eb","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"bc8c4e53-3c21-442e-94f9-742197a2b567","type":"Range1d"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"584dd0d9-a24e-47fa-8ef1-eda6cbb9f76f","type":"FactorRange"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a8f2042f-3bde-4e31-bdaa-062f71b66daf","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"},"ticker":{"id":"27f63daa-f1af-4353-93f1-6b3a2f9f6c1d","type":"CategoricalTicker"}},"id":"1425f99c-a9f5-43ed-9d4c-4edb7cbde558","type":"CategoricalAxis"},{"attributes":{},"id":"f214775a-b4ab-4026-a711-e555520ade8c","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"65660bcb-f57b-402c-88ca-0488ea2cccef","type":"ColumnDataSource"},"glyph":{"id":"680f78f3-0590-4bee-9c80-95b5c2fdf923","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d0a41686-bd0b-41d5-9a5b-46ae3acb3080","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"f214775a-b4ab-4026-a711-e555520ade8c","type":"BasicTickFormatter"},"plot":{"id":"9b1a6af0-5593-4e6d-adb7-6464615c4c12","subtype":"Chart","type":"Plot"},"ticker":{"id":"6fb3fb02-7997-4616-8f6c-e5bf3bb37b5d","type":"BasicTicker"}},"id":"91383184-7366-45ec-a755-4585d56c6a90","type":"LinearAxis"},{"attributes":{"data_source":{"id":"993e675a-b30a-4d90-8dc8-025fcbad18eb","type":"ColumnDataSource"},"glyph":{"id":"68c33e02-9c23-41aa-992c-dec7e3e38f38","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"efd59f64-fb55-4e1d-b9ff-f312c17312af","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"89094957-fe89-4658-945a-5c6d36a9e47c","type":"LinearColorMapper"},"formatter":{"id":"75095163-2d24-4209-bb12-e852e69aaacf","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"f3af4a20-c5dc-4999-8f49-754b09a0e2db","subtype":"Chart","type":"Plot"},"ticker":{"id":"fbb170e4-445e-460a-9140-34bbf8c9d009","type":"BasicTicker"}},"id":"5fa00c8c-203d-4562-b8b6-069a365c8698","type":"ColorBar"},{"attributes":{},"id":"e4f1c568-05c5-4b79-98ec-0f7a815116d2","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e94a69a8-9409-41cf-8eec-3a6f91ac7c0d","type":"Rect"},{"attributes":{"data_source":{"id":"6398e922-78bf-452b-b643-0e8fd51ec60c","type":"ColumnDataSource"},"glyph":{"id":"5c1e114c-de8e-48e4-b49c-06578ecb95d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6c8dc96f-30d9-4d1b-aee7-8b44b3f0e831","type":"GlyphRenderer"}],"root_ids":["e9e3dc51-ffb4-4bc3-93e5-f2b32b067d83"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"073e48a9-5e20-4fae-a559-0fe5152446fb","elementid":"e0d6dd3a-c0c0-4fd1-9786-e1f1f6e45350","modelid":"e9e3dc51-ffb4-4bc3-93e5-f2b32b067d83"}];
                  
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
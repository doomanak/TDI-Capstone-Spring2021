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
      };var element = document.getElementById("f74d2993-02e9-40fa-9008-b4b60f38c4a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f74d2993-02e9-40fa-9008-b4b60f38c4a6' but no matching script tag was found. ")
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
                  var docs_json = {"88022e85-db13-48ed-9016-4e03b1060d35":{"roots":{"references":[{"attributes":{},"id":"c56dd9e9-03b6-4dcd-ac5d-7a48813d4b11","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"79ebf923-e07e-4d9c-a7d2-61aae153bcbd","type":"Title"},{"attributes":{"data_source":{"id":"0a49451b-fe1e-4cf3-a8fa-1f982130aea7","type":"ColumnDataSource"},"glyph":{"id":"44615e1a-8902-452e-9100-d121e3b8600b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c88c70e7-b4d1-47c7-9314-bfc29a77655f","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"8d084948-ea5d-4383-b5a9-bca02300db86","type":"LinearAxis"}],"left":[{"id":"315ae1cc-ba09-4d87-92f6-5ba6f25d8bb7","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e5141fe5-507f-40f5-8508-b03f396148f0","type":"BoxAnnotation"},{"id":"0f33bf30-eb01-465c-ade8-9989599e15f8","type":"GlyphRenderer"},{"id":"59138c48-89d8-4a8f-8bf5-417f2a2e24d1","type":"GlyphRenderer"},{"id":"c88c70e7-b4d1-47c7-9314-bfc29a77655f","type":"GlyphRenderer"},{"id":"0c9326f4-3a15-44e5-8d62-890fe7460824","type":"GlyphRenderer"},{"id":"82372a26-c8a5-486c-8eb0-1b7216027e7e","type":"GlyphRenderer"},{"id":"a2533336-fea5-4b36-89f9-e35c9a9173f4","type":"GlyphRenderer"},{"id":"629a9d16-9541-4b42-aa29-0cf24bdf18ab","type":"GlyphRenderer"},{"id":"fa9a8741-9bad-474e-88fe-bf83440f923b","type":"GlyphRenderer"},{"id":"e9e06cbe-f77e-4d89-a1a6-b9ff2b49a261","type":"GlyphRenderer"},{"id":"8d084948-ea5d-4383-b5a9-bca02300db86","type":"LinearAxis"},{"id":"315ae1cc-ba09-4d87-92f6-5ba6f25d8bb7","type":"CategoricalAxis"},{"id":"0734a2e4-844a-469f-a9f1-4b15caa68b83","type":"ColorBar"}],"right":[{"id":"0734a2e4-844a-469f-a9f1-4b15caa68b83","type":"ColorBar"}],"title":{"id":"79ebf923-e07e-4d9c-a7d2-61aae153bcbd","type":"Title"},"tool_events":{"id":"e6f7ae12-69ca-43ce-8af5-07da962c988d","type":"ToolEvents"},"toolbar":{"id":"c79f949b-3ad4-406d-8027-7fd52d7cf29f","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a1debc00-7063-4fa3-86c1-2b184491dfde","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"75987a21-049f-4ea2-9bef-35b769caa739","type":"FactorRange"}},"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"8e61d13c-e974-4e5c-a7b2-dce65c32465d","type":"ColumnDataSource"},"glyph":{"id":"0e2cc391-b90a-4986-a3f2-f56f4b2c3927","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e9e06cbe-f77e-4d89-a1a6-b9ff2b49a261","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f5963dc-e6f8-4a16-9216-ec5f8a46f76f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.542372881355933,11.176470588235293,11.733333333333333,10.790123456790123,13.2,10.194915254237289,12.6,10.210526315789474,12.647058823529411,10.836206896551724,12.216666666666667,12.894736842105264,11.692307692307692,11.511363636363637,13.0,10.59322033898305,12.76],"x":[8,12,15,17,20,8,10,12,20,8,15,12,9,11,12,15,18],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"4ca13da2-56d5-4b9b-bb2d-f0481b2266d5","type":"ColumnDataSource"},{"attributes":{},"id":"7fb27f36-64c7-4a82-b75b-dd5990456829","type":"BasicTickFormatter"},{"attributes":{},"id":"8400244e-44d4-47b4-85a7-247641cf6f03","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[6.315789473684211,6.3076923076923075,6.311475409836065],"x":[12,8,12],"y":["Wednesday","Thursday","Saturday"]}},"id":"69edfa88-5cb5-4712-a8d6-3253f7afc4de","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.299145299145298,23.5,24.847826086956523,25.714285714285715,24.417721518987342,23.666666666666668,26.329268292682926,24.2875,26.555555555555557,26.285714285714285,25.323529411764707,26.386666666666667,24.73076923076923,26.391304347826086],"x":[13,16,14,16,19,16,17,19,20,12,16,19,10,20],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday"]}},"id":"2e57218b-5a10-4315-ae91-4440ee890b25","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e079eb0-7d1c-4f17-bed2-0c69d3d6e92c","type":"PanTool"},{"id":"0e1f6ca0-1da9-4c59-bc90-a5e20cce882c","type":"WheelZoomTool"},{"id":"1373f49b-afa5-4f1d-873a-8a59154eeeb8","type":"BoxZoomTool"},{"id":"b6360692-da7e-46d5-a40a-a8fc1da2d143","type":"SaveTool"},{"id":"2b70a647-12b0-4c3e-804b-17ed2208a3b2","type":"ResetTool"},{"id":"7bf766b3-ce94-48c6-aef0-4bd56921b688","type":"HelpTool"}]},"id":"c79f949b-3ad4-406d-8027-7fd52d7cf29f","type":"Toolbar"},{"attributes":{"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"2b70a647-12b0-4c3e-804b-17ed2208a3b2","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"405a709b-7188-48b1-b344-3bbe38995118","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[27.541666666666668,30.0,27.034782608695654,26.686746987951807,28.954545454545453,27.764705882352942,27.52,30.0,27.34567901234568,30.0,30.0],"x":[14,18,13,17,18,20,13,16,17,18,19],"y":["Monday","Monday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Friday","Friday"]}},"id":"c23536aa-d8ca-4e07-9e8d-00c058b08325","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e5141fe5-507f-40f5-8508-b03f396148f0","type":"BoxAnnotation"},{"attributes":{"child":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b9089913-bdf0-4d9a-9b9e-e8e39a8031db","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fcdc600-fea0-44a0-b023-99e0fb7b8551","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"b9089913-bdf0-4d9a-9b9e-e8e39a8031db","type":"Panel"}]},"id":"3da0f4a6-d007-4488-ab87-34bb3dd6fa07","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.80232558139535,15.141509433962264,13.729411764705882,13.766355140186915,14.022727272727273,14.609756097560975,14.8,16.229885057471265,14.026315789473685,15.636363636363637],"x":[11,13,11,13,14,14,8,11,11,20],"y":["Monday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday"]}},"id":"b083f70b-fb8c-4ad9-9ba5-186d652eef31","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"69edfa88-5cb5-4712-a8d6-3253f7afc4de","type":"ColumnDataSource"},"glyph":{"id":"3fcdc600-fea0-44a0-b023-99e0fb7b8551","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa9a8741-9bad-474e-88fe-bf83440f923b","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2e57218b-5a10-4315-ae91-4440ee890b25","type":"ColumnDataSource"},"glyph":{"id":"43d903da-977c-4c39-bb41-848911b20cd7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59138c48-89d8-4a8f-8bf5-417f2a2e24d1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"5e079eb0-7d1c-4f17-bed2-0c69d3d6e92c","type":"PanTool"},{"attributes":{"overlay":{"id":"e5141fe5-507f-40f5-8508-b03f396148f0","type":"BoxAnnotation"},"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"1373f49b-afa5-4f1d-873a-8a59154eeeb8","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.97872340425532,21.087719298245613,20.91025641025641],"x":[14,15,19],"y":["Friday","Friday","Sunday"]}},"id":"0a49451b-fe1e-4cf3-a8fa-1f982130aea7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.3076923076923077,0.0,2.823529411764706,0.0,1.4,1.967741935483871,0.0,0.0],"x":[10,21,8,10,13,15,19,21],"y":["Wednesday","Friday","Saturday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"8e61d13c-e974-4e5c-a7b2-dce65c32465d","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"667e321c-476d-440e-a152-5bbf86c671f5","type":"Rect"},{"attributes":{"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"7bf766b3-ce94-48c6-aef0-4bd56921b688","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1c882fb-45fb-41c5-ac3a-6ed6210a9244","type":"Rect"},{"attributes":{"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"0e1f6ca0-1da9-4c59-bc90-a5e20cce882c","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.838709677419354,8.775,8.536585365853659,7.35,8.962962962962964],"x":[10,11,14,13,16],"y":["Monday","Thursday","Saturday","Sunday","Sunday"]}},"id":"ff3f4fa0-3743-4f28-b3a0-7d2a11a81959","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"44615e1a-8902-452e-9100-d121e3b8600b","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7fb27f36-64c7-4a82-b75b-dd5990456829","type":"BasicTickFormatter"},"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"},"ticker":{"id":"c56dd9e9-03b6-4dcd-ac5d-7a48813d4b11","type":"BasicTicker"}},"id":"8d084948-ea5d-4383-b5a9-bca02300db86","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"43d903da-977c-4c39-bb41-848911b20cd7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,16.988235294117647,17.383333333333333,17.24390243902439,17.40909090909091,19.857142857142858,18.96,17.48148148148148,17.366666666666667,16.8125,18.160919540229884],"x":[19,11,15,17,18,18,10,15,10,14,17],"y":["Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Sunday","Sunday","Sunday"]}},"id":"66d0e1d4-9c34-4010-bd1a-b78ac32890ac","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e20488c9-4679-413e-bd71-f5bc82da8fc7","type":"Rect"},{"attributes":{"data_source":{"id":"ff3f4fa0-3743-4f28-b3a0-7d2a11a81959","type":"ColumnDataSource"},"glyph":{"id":"b1c882fb-45fb-41c5-ac3a-6ed6210a9244","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"629a9d16-9541-4b42-aa29-0cf24bdf18ab","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"2af8d803-dccc-495b-b6dd-6fda075e0692","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"},"ticker":{"id":"6e1f1b0f-3b8e-446a-9a46-2e238302f96b","type":"CategoricalTicker"}},"id":"315ae1cc-ba09-4d87-92f6-5ba6f25d8bb7","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"4ca13da2-56d5-4b9b-bb2d-f0481b2266d5","type":"ColumnDataSource"},"glyph":{"id":"e20488c9-4679-413e-bd71-f5bc82da8fc7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a2533336-fea5-4b36-89f9-e35c9a9173f4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"}},"id":"b6360692-da7e-46d5-a40a-a8fc1da2d143","type":"SaveTool"},{"attributes":{"data_source":{"id":"c23536aa-d8ca-4e07-9e8d-00c058b08325","type":"ColumnDataSource"},"glyph":{"id":"405a709b-7188-48b1-b344-3bbe38995118","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0f33bf30-eb01-465c-ade8-9989599e15f8","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"a1debc00-7063-4fa3-86c1-2b184491dfde","type":"Range1d"},{"attributes":{},"id":"2af8d803-dccc-495b-b6dd-6fda075e0692","type":"CategoricalTickFormatter"},{"attributes":{},"id":"f1d29839-d9eb-4dc3-a354-d70e3be07478","type":"BasicTickFormatter"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2e4c0871-7e22-4d0d-89dc-ffd1dbb7f0cc","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"b083f70b-fb8c-4ad9-9ba5-186d652eef31","type":"ColumnDataSource"},"glyph":{"id":"667e321c-476d-440e-a152-5bbf86c671f5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"82372a26-c8a5-486c-8eb0-1b7216027e7e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"66d0e1d4-9c34-4010-bd1a-b78ac32890ac","type":"ColumnDataSource"},"glyph":{"id":"0f5963dc-e6f8-4a16-9216-ec5f8a46f76f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c9326f4-3a15-44e5-8d62-890fe7460824","type":"GlyphRenderer"},{"attributes":{},"id":"6e1f1b0f-3b8e-446a-9a46-2e238302f96b","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e2cc391-b90a-4986-a3f2-f56f4b2c3927","type":"Rect"},{"attributes":{"color_mapper":{"id":"2e4c0871-7e22-4d0d-89dc-ffd1dbb7f0cc","type":"LinearColorMapper"},"formatter":{"id":"f1d29839-d9eb-4dc3-a354-d70e3be07478","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"22efef1c-51b0-4581-bf39-b22e0cf6a237","subtype":"Chart","type":"Plot"},"ticker":{"id":"8400244e-44d4-47b4-85a7-247641cf6f03","type":"BasicTicker"}},"id":"0734a2e4-844a-469f-a9f1-4b15caa68b83","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"75987a21-049f-4ea2-9bef-35b769caa739","type":"FactorRange"},{"attributes":{},"id":"e6f7ae12-69ca-43ce-8af5-07da962c988d","type":"ToolEvents"}],"root_ids":["3da0f4a6-d007-4488-ab87-34bb3dd6fa07"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"88022e85-db13-48ed-9016-4e03b1060d35","elementid":"f74d2993-02e9-40fa-9008-b4b60f38c4a6","modelid":"3da0f4a6-d007-4488-ab87-34bb3dd6fa07"}];
                  
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
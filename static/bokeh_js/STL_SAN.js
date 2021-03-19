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
      };var element = document.getElementById("dca08155-4bdf-4e30-9ab1-37b1b28cbb6e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dca08155-4bdf-4e30-9ab1-37b1b28cbb6e' but no matching script tag was found. ")
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
                  var docs_json = {"b8c6d4cc-50c5-4fab-83da-0a108bd349ae":{"roots":{"references":[{"attributes":{"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"9e300836-7bc0-45c3-bf32-dbc93a6ac4e0","type":"ResetTool"},{"attributes":{"callback":null,"tabs":[{"id":"ef291660-5536-4555-8d90-0c38169fcb74","type":"Panel"},{"id":"af3b218b-e96a-4a59-ab8b-854ff258a6a5","type":"Panel"}]},"id":"1d368064-83ca-4026-8782-727566a5ae74","type":"Tabs"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"554c1aa8-5a89-4c46-80ff-cadb7f3d0cb1","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f03b189e-6d73-4ef1-8d46-0c9b723af040","type":"PanTool"},{"id":"9699e329-73eb-48c6-aaa8-acc6dd8b7e05","type":"WheelZoomTool"},{"id":"ce0fa680-509f-4604-aed1-b3d738cf2661","type":"BoxZoomTool"},{"id":"0c011add-3f27-4d19-9200-8dd4d5d7a0cc","type":"SaveTool"},{"id":"9e300836-7bc0-45c3-bf32-dbc93a6ac4e0","type":"ResetTool"},{"id":"1dbb57dd-94c0-4f3c-9b0d-f23acaebef01","type":"HelpTool"}]},"id":"2700c094-c353-45b5-a61c-da38175459e1","type":"Toolbar"},{"attributes":{"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"0d8b948e-001e-4b63-989a-4c81dcb1706b","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.0,30.0,30.0],"x":[12,14,9],"y":["Tuesday","Tuesday","Thursday"]}},"id":"4424968b-2147-403e-8d00-86e310f4f4c5","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a31b6f24-23eb-4f2b-b284-567b3da8300d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"},"ticker":{"id":"b4dd06cc-27c9-4b8e-9d57-28f7e8f7a049","type":"CategoricalTicker"}},"id":"9f1d5c1d-7340-494b-8992-b692c48f75fe","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"3ab1804f-342e-4429-9779-73fc99e61a3c","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.8,7.0,10.0,8.0,7.6,6.916666666666667,7.444444444444445,8.666666666666666,8.2,9.722222222222221],"x":[7,9,7,9,10,13,8,14,12,13],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Thursday","Friday","Friday","Saturday","Saturday"]}},"id":"9612c5b9-bb03-420a-9648-eb063162ce4c","type":"ColumnDataSource"},{"attributes":{},"id":"a919f9cd-ca46-45cf-a7ca-d6aadb231118","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"013d646c-b386-404c-a6d1-1d22a3760bc1","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fda159e5-9923-498c-9e90-837cc8234d4c","type":"Rect"},{"attributes":{"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"6a5be4ee-13bf-4cd8-b68f-32912535f317","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.1,13.333333333333334,11.5,11.777777777777779,12.777777777777779,11.0,12.88888888888889],"x":[11,13,14,15,15,20,15],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday"]}},"id":"f3fe12e1-518a-4262-9ddd-c3c9cae1a552","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae018dc2-e8e5-46d1-9ff4-ac5dd106ad43","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.333333333333332,20.555555555555557,22.523809523809526,20.444444444444443],"x":[13,15,14,9],"y":["Monday","Wednesday","Saturday","Sunday"]}},"id":"8ed0838d-1117-42fd-a4ac-4be117f9c7a5","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f841e4d9-2904-4b53-9254-a64764a3e81c","type":"Rect"},{"attributes":{},"id":"cd031c91-624d-496c-91c1-aeee5d9a1094","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.88888888888889],"x":[9],"y":["Friday"]}},"id":"6b00c898-16e7-404c-99c5-ceb3678f5eb7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.333333333333332,20.555555555555557,22.523809523809526,20.444444444444443],"x":[13,15,14,9],"y":["Monday","Wednesday","Saturday","Sunday"]}},"id":"5023877a-030d-4a65-9046-8c3987f1be7a","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"b134c2e9-8617-4562-bd7e-85b718164f61","type":"Title"},{"attributes":{},"id":"eac8af07-ead1-4f1b-9ad4-96dce615b0f5","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.444444444444445,5.777777777777778,3.888888888888889,5.0,5.5,4.363636363636363,4.555555555555555,4.0,5.153846153846154,3.5454545454545454,5.2727272727272725,5.166666666666667],"x":[8,11,15,20,7,10,8,13,9,10,11,13],"y":["Monday","Monday","Monday","Monday","Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"08306704-21dc-4ca3-a38e-93dda35aba9a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"92ab455c-19da-4ec3-9c7c-0ddc9b8eee15","type":"ColumnDataSource"},"glyph":{"id":"fda159e5-9923-498c-9e90-837cc8234d4c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"de7a8903-2608-4b40-bfc4-936f867653de","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ea3d4803-bcbe-49b2-a410-ca1bf9bb0cda","type":"BoxAnnotation"},{"attributes":{},"id":"e48c7e14-e4c7-46b5-b0b5-42d61bde68e6","type":"BasicTicker"},{"attributes":{},"id":"95bbbf81-e519-4104-b801-a059534e41a3","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2acbee5f-548a-483b-92f6-c01fc24432e2","type":"Rect"},{"attributes":{"data_source":{"id":"08306704-21dc-4ca3-a38e-93dda35aba9a","type":"ColumnDataSource"},"glyph":{"id":"dd530989-8a5b-411c-8282-36d80cedb550","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"58ca36ce-0b4d-4143-b583-701a10254fd3","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"31932be8-0bdd-4404-801b-e9521b87df81","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ea3aeebf-d84c-44c3-8c47-56112c43455d","type":"Rect"},{"attributes":{"data_source":{"id":"5105c475-3063-45b3-9cf6-a7de6d335c32","type":"ColumnDataSource"},"glyph":{"id":"3f84c5dc-d5f9-4058-962b-f8e927b3c9d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87975ef3-4594-4302-9deb-fab82386b7a3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.6,2.0,1.25,0.0,2.4444444444444446,0.0,0.2222222222222222,1.5555555555555556,0.0,0.0,0.0,1.5454545454545454,2.3333333333333335,0.0,0.0,1.5833333333333333,2.3333333333333335,0.46153846153846156,1.2,1.6666666666666667,0.0,0.0],"x":[10,12,14,8,15,20,8,9,12,20,7,10,14,20,7,10,8,10,7,8,12,14],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"cf352eeb-cd63-4e2e-9b17-a3c9b2b6a556","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f3fe12e1-518a-4262-9ddd-c3c9cae1a552","type":"ColumnDataSource"},"glyph":{"id":"85352770-51d5-433e-8594-d8cc8d4f2467","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b0655bc9-87ff-4291-8642-629df58ae542","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"85352770-51d5-433e-8594-d8cc8d4f2467","type":"Rect"},{"attributes":{"data_source":{"id":"8ed0838d-1117-42fd-a4ac-4be117f9c7a5","type":"ColumnDataSource"},"glyph":{"id":"5cf7bab0-b7ca-471e-a6d6-8b1d41fbda16","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0df1e1f8-04ef-487a-8533-9f3c22697d7d","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"edf9ac2e-3c17-49ad-8bcd-a1a3db7e53f5","type":"Range1d"},{"attributes":{"data_source":{"id":"ae5183bb-7785-4ba8-bf4f-e2e3bf243550","type":"ColumnDataSource"},"glyph":{"id":"f841e4d9-2904-4b53-9254-a64764a3e81c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ecc540f-5250-4c3a-b1ce-fd29524e56f1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"1dbb57dd-94c0-4f3c-9b0d-f23acaebef01","type":"HelpTool"},{"attributes":{"overlay":{"id":"ea3d4803-bcbe-49b2-a410-ca1bf9bb0cda","type":"BoxAnnotation"},"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"ce0fa680-509f-4604-aed1-b3d738cf2661","type":"BoxZoomTool"},{"attributes":{"child":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"af3b218b-e96a-4a59-ab8b-854ff258a6a5","type":"Panel"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3ab1804f-342e-4429-9779-73fc99e61a3c","type":"PanTool"},{"id":"cff83a7a-efbd-4ce7-8ad2-2f4b75284974","type":"WheelZoomTool"},{"id":"c3da3b10-70c9-45f2-bcc4-c85f81e18739","type":"BoxZoomTool"},{"id":"6a5be4ee-13bf-4cd8-b68f-32912535f317","type":"SaveTool"},{"id":"551c1c64-f7bd-46d3-9ba0-7cc1f6360fa2","type":"ResetTool"},{"id":"0d8b948e-001e-4b63-989a-4c81dcb1706b","type":"HelpTool"}]},"id":"6a356f62-34df-4e04-b82a-4b7ebc8cd2a6","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[28.0,30.0,30.0],"x":[12,14,9],"y":["Tuesday","Tuesday","Thursday"]}},"id":"92ab455c-19da-4ec3-9c7c-0ddc9b8eee15","type":"ColumnDataSource"},{"attributes":{},"id":"47a6451e-ec6a-4b0e-aec3-9c4f159d7a9e","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.88888888888889],"x":[9],"y":["Friday"]}},"id":"d203aab5-b1f2-4e58-b3fb-0841ce22afe1","type":"ColumnDataSource"},{"attributes":{},"id":"c5b645df-7999-47a7-978b-668779f3a2dc","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6459f6eb-4348-420e-b34e-fc7da542295e","type":"Rect"},{"attributes":{},"id":"5a64b99a-c6c7-4c83-8ae7-1f7126794c16","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d203aab5-b1f2-4e58-b3fb-0841ce22afe1","type":"ColumnDataSource"},"glyph":{"id":"0e19e796-b0f5-4029-98cb-e261a3e11221","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"632aae4e-fc26-4e2c-a361-b1bc0f829e4b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.444444444444445,5.777777777777778,3.888888888888889,5.0,5.5,4.363636363636363,4.555555555555555,4.0,5.153846153846154,3.5454545454545454,5.2727272727272725,5.166666666666667],"x":[8,11,15,20,7,10,8,13,9,10,11,13],"y":["Monday","Monday","Monday","Monday","Wednesday","Wednesday","Thursday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"ae5183bb-7785-4ba8-bf4f-e2e3bf243550","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"44033c9a-2de4-4ba4-9cb1-84671d503e7e","type":"ColumnDataSource"},"glyph":{"id":"88df3026-850e-41c1-a2a8-d838a234f9c0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b92604d-8645-4d45-9e10-8932bdf1d7ad","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"39279fce-b73f-4351-b4fc-13c988c07d05","type":"LinearAxis"}],"left":[{"id":"9f1d5c1d-7340-494b-8992-b692c48f75fe","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"37f7a244-8f03-422f-bb4e-19a523599291","type":"BoxAnnotation"},{"id":"de7a8903-2608-4b40-bfc4-936f867653de","type":"GlyphRenderer"},{"id":"0df1e1f8-04ef-487a-8533-9f3c22697d7d","type":"GlyphRenderer"},{"id":"2db08eaf-cab4-4f83-a61e-df165324a762","type":"GlyphRenderer"},{"id":"b3ba5997-caa6-4c9b-8b24-e95d28d71cd8","type":"GlyphRenderer"},{"id":"54fc7bd8-facb-44a7-b95a-848d43fe3c77","type":"GlyphRenderer"},{"id":"87975ef3-4594-4302-9deb-fab82386b7a3","type":"GlyphRenderer"},{"id":"58ca36ce-0b4d-4143-b583-701a10254fd3","type":"GlyphRenderer"},{"id":"9ed75de6-b017-4424-b2fe-9491717ec95d","type":"GlyphRenderer"},{"id":"39279fce-b73f-4351-b4fc-13c988c07d05","type":"LinearAxis"},{"id":"9f1d5c1d-7340-494b-8992-b692c48f75fe","type":"CategoricalAxis"},{"id":"14b24787-7859-4a86-8762-346d1579ada5","type":"ColorBar"}],"right":[{"id":"14b24787-7859-4a86-8762-346d1579ada5","type":"ColorBar"}],"title":{"id":"c595088b-7c83-4f44-be9f-b856d593c855","type":"Title"},"tool_events":{"id":"47a6451e-ec6a-4b0e-aec3-9c4f159d7a9e","type":"ToolEvents"},"toolbar":{"id":"6a356f62-34df-4e04-b82a-4b7ebc8cd2a6","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"edf9ac2e-3c17-49ad-8bcd-a1a3db7e53f5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"88a3292c-f5ba-4251-8438-283db92ac6f2","type":"FactorRange"}},"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.76923076923077,14.363636363636363,14.222222222222221,13.444444444444445,15.0,15.444444444444445],"x":[13,11,11,11,20,15],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"5acc8b09-a6f1-46a8-bcd4-1709b3859310","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"88a3292c-f5ba-4251-8438-283db92ac6f2","type":"FactorRange"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b4f81f9-fe32-4e89-9235-6ece56eb2559","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"cb0edb21-b94a-4b50-8adf-ce6105ad53ef","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"4424968b-2147-403e-8d00-86e310f4f4c5","type":"ColumnDataSource"},"glyph":{"id":"ea3aeebf-d84c-44c3-8c47-56112c43455d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2efedc55-8568-4693-872f-f7e9b9652770","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.76923076923077,14.363636363636363,14.222222222222221,13.444444444444445,15.0,15.444444444444445],"x":[13,11,11,11,20,15],"y":["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]}},"id":"44033c9a-2de4-4ba4-9cb1-84671d503e7e","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b2d78e5-2a19-4fef-9dfd-5c08d618c6e6","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0a7e925b-8c2e-4857-b8ae-e1a73440cccd","type":"LinearAxis"}],"left":[{"id":"68c817b9-edd1-4cf0-bf87-a14ef8eec05b","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"ea3d4803-bcbe-49b2-a410-ca1bf9bb0cda","type":"BoxAnnotation"},{"id":"2efedc55-8568-4693-872f-f7e9b9652770","type":"GlyphRenderer"},{"id":"6713da23-7df7-4904-9f69-3a99ad8e94d8","type":"GlyphRenderer"},{"id":"632aae4e-fc26-4e2c-a361-b1bc0f829e4b","type":"GlyphRenderer"},{"id":"4b92604d-8645-4d45-9e10-8932bdf1d7ad","type":"GlyphRenderer"},{"id":"b0655bc9-87ff-4291-8642-629df58ae542","type":"GlyphRenderer"},{"id":"a5203b8d-2af9-4d66-a7ab-ec115f942b39","type":"GlyphRenderer"},{"id":"6ecc540f-5250-4c3a-b1ce-fd29524e56f1","type":"GlyphRenderer"},{"id":"1238d7d8-b923-4651-887b-58a5b2d20193","type":"GlyphRenderer"},{"id":"0a7e925b-8c2e-4857-b8ae-e1a73440cccd","type":"LinearAxis"},{"id":"68c817b9-edd1-4cf0-bf87-a14ef8eec05b","type":"CategoricalAxis"},{"id":"fdbe5aaa-1b9a-4d43-bf7e-239029dce0dc","type":"ColorBar"}],"right":[{"id":"fdbe5aaa-1b9a-4d43-bf7e-239029dce0dc","type":"ColorBar"}],"title":{"id":"b134c2e9-8617-4562-bd7e-85b718164f61","type":"Title"},"tool_events":{"id":"1a8ca527-6c0e-4e30-970c-176b0fbd7d23","type":"ToolEvents"},"toolbar":{"id":"2700c094-c353-45b5-a61c-da38175459e1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"257ebd1f-4eaa-4046-9c93-9e1742e8f0c8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"013d646c-b386-404c-a6d1-1d22a3760bc1","type":"FactorRange"}},"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"0c011add-3f27-4d19-9200-8dd4d5d7a0cc","type":"SaveTool"},{"attributes":{},"id":"6f4a0747-ba82-4030-a03c-f04eb886f66c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"37f7a244-8f03-422f-bb4e-19a523599291","type":"BoxAnnotation"},"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"c3da3b10-70c9-45f2-bcc4-c85f81e18739","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"8c822fac-f75d-40f2-b4fa-9b690e1b2473","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"},"ticker":{"id":"a919f9cd-ca46-45cf-a7ca-d6aadb231118","type":"CategoricalTicker"}},"id":"68c817b9-edd1-4cf0-bf87-a14ef8eec05b","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"9612c5b9-bb03-420a-9648-eb063162ce4c","type":"ColumnDataSource"},"glyph":{"id":"2acbee5f-548a-483b-92f6-c01fc24432e2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a5203b8d-2af9-4d66-a7ab-ec115f942b39","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e668de85-8cd5-429b-80a1-c97397676f59","type":"ColumnDataSource"},"glyph":{"id":"ae018dc2-e8e5-46d1-9ff4-ac5dd106ad43","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1238d7d8-b923-4651-887b-58a5b2d20193","type":"GlyphRenderer"},{"attributes":{},"id":"265e5c1e-8301-411d-bd4d-4df243213c12","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f84c5dc-d5f9-4058-962b-f8e927b3c9d5","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37f7a244-8f03-422f-bb4e-19a523599291","type":"BoxAnnotation"},{"attributes":{},"id":"1a8ca527-6c0e-4e30-970c-176b0fbd7d23","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[2.6,2.0,1.25,0.0,2.4444444444444446,0.0,0.2222222222222222,1.5555555555555556,0.0,0.0,0.0,1.5454545454545454,2.3333333333333335,0.0,0.0,1.5833333333333333,2.3333333333333335,0.46153846153846156,1.2,1.6666666666666667,0.0,0.0],"x":[10,12,14,8,15,20,8,9,12,20,7,10,14,20,7,10,8,10,7,8,12,14],"y":["Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"e668de85-8cd5-429b-80a1-c97397676f59","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"554c1aa8-5a89-4c46-80ff-cadb7f3d0cb1","type":"LinearColorMapper"},"formatter":{"id":"265e5c1e-8301-411d-bd4d-4df243213c12","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"},"ticker":{"id":"6f4a0747-ba82-4030-a03c-f04eb886f66c","type":"BasicTicker"}},"id":"14b24787-7859-4a86-8762-346d1579ada5","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cf7bab0-b7ca-471e-a6d6-8b1d41fbda16","type":"Rect"},{"attributes":{},"id":"8c822fac-f75d-40f2-b4fa-9b690e1b2473","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"5a64b99a-c6c7-4c83-8ae7-1f7126794c16","type":"BasicTickFormatter"},"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"},"ticker":{"id":"e48c7e14-e4c7-46b5-b0b5-42d61bde68e6","type":"BasicTicker"}},"id":"0a7e925b-8c2e-4857-b8ae-e1a73440cccd","type":"LinearAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"cd031c91-624d-496c-91c1-aeee5d9a1094","type":"BasicTickFormatter"},"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"},"ticker":{"id":"eac8af07-ead1-4f1b-9ad4-96dce615b0f5","type":"BasicTicker"}},"id":"39279fce-b73f-4351-b4fc-13c988c07d05","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dd530989-8a5b-411c-8282-36d80cedb550","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0e19e796-b0f5-4029-98cb-e261a3e11221","type":"Rect"},{"attributes":{},"id":"b4dd06cc-27c9-4b8e-9d57-28f7e8f7a049","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"9699e329-73eb-48c6-aaa8-acc6dd8b7e05","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"c595088b-7c83-4f44-be9f-b856d593c855","type":"Title"},{"attributes":{},"id":"a31b6f24-23eb-4f2b-b284-567b3da8300d","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"5acc8b09-a6f1-46a8-bcd4-1709b3859310","type":"ColumnDataSource"},"glyph":{"id":"6459f6eb-4348-420e-b34e-fc7da542295e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b3ba5997-caa6-4c9b-8b24-e95d28d71cd8","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6b00c898-16e7-404c-99c5-ceb3678f5eb7","type":"ColumnDataSource"},"glyph":{"id":"3869712b-5eee-49ea-bf15-931d428eefc4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2db08eaf-cab4-4f83-a61e-df165324a762","type":"GlyphRenderer"},{"attributes":{"child":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ef291660-5536-4555-8d90-0c38169fcb74","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3869712b-5eee-49ea-bf15-931d428eefc4","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"257ebd1f-4eaa-4046-9c93-9e1742e8f0c8","type":"Range1d"},{"attributes":{"color_mapper":{"id":"cb0edb21-b94a-4b50-8adf-ce6105ad53ef","type":"LinearColorMapper"},"formatter":{"id":"95bbbf81-e519-4104-b801-a059534e41a3","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"},"ticker":{"id":"c5b645df-7999-47a7-978b-668779f3a2dc","type":"BasicTicker"}},"id":"fdbe5aaa-1b9a-4d43-bf7e-239029dce0dc","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.1,13.333333333333334,11.5,11.777777777777779,12.777777777777779,11.0,12.88888888888889],"x":[11,13,14,15,15,20,15],"y":["Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday"]}},"id":"92c9b6fb-fca2-49da-a88a-b61dd9560faf","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"551c1c64-f7bd-46d3-9ba0-7cc1f6360fa2","type":"ResetTool"},{"attributes":{"data_source":{"id":"cf352eeb-cd63-4e2e-9b17-a3c9b2b6a556","type":"ColumnDataSource"},"glyph":{"id":"31932be8-0bdd-4404-801b-e9521b87df81","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9ed75de6-b017-4424-b2fe-9491717ec95d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.8,7.0,10.0,8.0,7.6,6.916666666666667,7.444444444444445,8.666666666666666,8.2,9.722222222222221],"x":[7,9,7,9,10,13,8,14,12,13],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Thursday","Friday","Friday","Saturday","Saturday"]}},"id":"5105c475-3063-45b3-9cf6-a7de6d335c32","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"88df3026-850e-41c1-a2a8-d838a234f9c0","type":"Rect"},{"attributes":{"plot":{"id":"2953016e-5476-4639-8c50-45485af686fb","subtype":"Chart","type":"Plot"}},"id":"cff83a7a-efbd-4ce7-8ad2-2f4b75284974","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"dd3b2141-0fdc-487f-94fe-85d2f7b3a39b","subtype":"Chart","type":"Plot"}},"id":"f03b189e-6d73-4ef1-8d46-0c9b723af040","type":"PanTool"},{"attributes":{"data_source":{"id":"92c9b6fb-fca2-49da-a88a-b61dd9560faf","type":"ColumnDataSource"},"glyph":{"id":"1b4f81f9-fe32-4e89-9235-6ece56eb2559","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"54fc7bd8-facb-44a7-b95a-848d43fe3c77","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"5023877a-030d-4a65-9046-8c3987f1be7a","type":"ColumnDataSource"},"glyph":{"id":"7b2d78e5-2a19-4fef-9dfd-5c08d618c6e6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6713da23-7df7-4904-9f69-3a99ad8e94d8","type":"GlyphRenderer"}],"root_ids":["1d368064-83ca-4026-8782-727566a5ae74"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b8c6d4cc-50c5-4fab-83da-0a108bd349ae","elementid":"dca08155-4bdf-4e30-9ab1-37b1b28cbb6e","modelid":"1d368064-83ca-4026-8782-727566a5ae74"}];
                  
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
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
      };var element = document.getElementById("83d9c4d7-1c1a-48c8-932f-c09e5a7f8724");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83d9c4d7-1c1a-48c8-932f-c09e5a7f8724' but no matching script tag was found. ")
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
                  var docs_json = {"80acfd0b-13e4-47d9-a0c7-1af8dc5390c0":{"roots":{"references":[{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"5c74cb15-c88d-4b7a-90d5-affde8003f8d","type":"LinearAxis"}],"left":[{"id":"9492760d-0b38-4d8c-bd2c-a56d231cc841","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"3eb48d5e-35fd-4772-9089-0b28265fd39f","type":"BoxAnnotation"},{"id":"57385ef7-466e-434a-926d-b4c861b4c943","type":"GlyphRenderer"},{"id":"303fd8bc-aff7-4671-8401-8e96afaee618","type":"GlyphRenderer"},{"id":"4ffd1760-bc2e-4fe7-b999-7153baa4f542","type":"GlyphRenderer"},{"id":"c390e8cd-76e1-4641-b876-cc28bac79ab6","type":"GlyphRenderer"},{"id":"621bcf52-d150-452f-bd4e-8e3c02d8987c","type":"GlyphRenderer"},{"id":"f7f72c65-8bde-4e39-b599-721fedf6db34","type":"GlyphRenderer"},{"id":"7a050a06-d523-48ca-916f-ecb3d5d9b42c","type":"GlyphRenderer"},{"id":"5c74cb15-c88d-4b7a-90d5-affde8003f8d","type":"LinearAxis"},{"id":"9492760d-0b38-4d8c-bd2c-a56d231cc841","type":"CategoricalAxis"},{"id":"2fb69c71-dcec-460e-a7b7-1a20628bacc5","type":"ColorBar"}],"right":[{"id":"2fb69c71-dcec-460e-a7b7-1a20628bacc5","type":"ColorBar"}],"title":{"id":"c7722d13-9a18-4065-b97f-b90a506e46e6","type":"Title"},"tool_events":{"id":"0bd711d2-9a09-4d7e-a090-ad033b264cba","type":"ToolEvents"},"toolbar":{"id":"063d235e-f228-4706-a00b-4bc7800cada9","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ec5df0bd-34f4-4636-a316-66b10e446d96","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"0fcc82b5-d29d-4aeb-9f61-8803b2304344","type":"FactorRange"}},"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"0dddf8dc-8613-432f-a00d-f6612e378125","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"11a534d5-354e-4847-80c6-5ded43922e69","type":"PanTool"},{"id":"bc068b87-9cbe-4b26-aeb5-db0d76c21daf","type":"WheelZoomTool"},{"id":"7aa6f018-ec94-4032-b0bd-c169ef094017","type":"BoxZoomTool"},{"id":"2b98c57d-8406-49ee-b8b4-c90346b30da4","type":"SaveTool"},{"id":"e7e92006-59e8-4b4f-b1ca-9858923b9a5d","type":"ResetTool"},{"id":"ed7bc785-9b04-4aa7-9b9e-6fa7bfc8b72c","type":"HelpTool"}]},"id":"063d235e-f228-4706-a00b-4bc7800cada9","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd4a437c-9d8f-41c0-a82a-20b3428de332","type":"Rect"},{"attributes":{"color_mapper":{"id":"d730be8b-f7e8-46cf-b539-863df9f504cd","type":"LinearColorMapper"},"formatter":{"id":"da66200e-875a-4310-9ef5-de3abaad1514","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"},"ticker":{"id":"7de47dc1-8412-40af-b16a-43ac00dcd1c3","type":"BasicTicker"}},"id":"2fb69c71-dcec-460e-a7b7-1a20628bacc5","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"20010fb9-5bf5-4871-9681-5213635db705","type":"PanTool"},{"id":"4e1c9a15-fe93-4ee2-a5d9-6d5611d39693","type":"WheelZoomTool"},{"id":"370db9c5-3579-4f89-a873-bcf2153bdbda","type":"BoxZoomTool"},{"id":"dfc59707-f886-4a2d-a3b6-addb2374f77e","type":"SaveTool"},{"id":"e62718ca-fdaa-42d8-aa2a-7e53aa261e02","type":"ResetTool"},{"id":"0daba171-2998-472e-a21d-252d912cb8a7","type":"HelpTool"}]},"id":"a4e63ac0-5c98-4fbb-b734-a8d42edcf66c","type":"Toolbar"},{"attributes":{},"id":"b75a4e92-c972-41d5-968a-a17c806a4dab","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"ec5df0bd-34f4-4636-a316-66b10e446d96","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3eb48d5e-35fd-4772-9089-0b28265fd39f","type":"BoxAnnotation"},{"attributes":{"child":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"4f10443c-d178-4b2b-95c7-46d23a2a9eb7","type":"Panel"},{"attributes":{"data_source":{"id":"5720ceb5-bfa3-4fa3-97f8-3c2bc7dc74dc","type":"ColumnDataSource"},"glyph":{"id":"df1caf0c-7acf-468d-895c-a27d15da35cb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4dc96609-829b-42b8-be3c-54b84fa20a98","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"569a2b3f-d6cd-4ca2-bcf0-7d83c6d4d273","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3a2348b9-afff-45ac-ac93-6d33264447a8","type":"Rect"},{"attributes":{},"id":"da66200e-875a-4310-9ef5-de3abaad1514","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"b75a4e92-c972-41d5-968a-a17c806a4dab","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"},"ticker":{"id":"2dee31b3-44a3-4760-8da7-df82703bcf9c","type":"CategoricalTicker"}},"id":"9492760d-0b38-4d8c-bd2c-a56d231cc841","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"ed7bc785-9b04-4aa7-9b9e-6fa7bfc8b72c","type":"HelpTool"},{"attributes":{"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"bc068b87-9cbe-4b26-aeb5-db0d76c21daf","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.482758620689655,14.0],"x":[14,15],"y":["Monday","Sunday"]}},"id":"2384ba2f-a8fc-4108-b423-2021da53d2d3","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3214b686-2ed9-4ff4-adf4-626e2a785d47","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"32ee6afd-2d95-4de1-b9f0-06da3b62ce72","type":"Rect"},{"attributes":{"data_source":{"id":"68699b04-05ce-4844-ab22-f4d0f0251570","type":"ColumnDataSource"},"glyph":{"id":"4b9938be-5e1c-4641-8b89-3131bf4d8e6f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5306c391-8eea-4ac1-a6a1-240e75b2f623","type":"GlyphRenderer"},{"attributes":{},"id":"7de47dc1-8412-40af-b16a-43ac00dcd1c3","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2384ba2f-a8fc-4108-b423-2021da53d2d3","type":"ColumnDataSource"},"glyph":{"id":"3a2348b9-afff-45ac-ac93-6d33264447a8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15cd8dbd-04dd-44e6-b9cd-0ea0585e42ed","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.396694214876034,7.333333333333333,9.805084745762711,7.611111111111111,9.539130434782608,7.222222222222222,7.111111111111111,7.831932773109243],"x":[14,9,14,10,14,5,10,14],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday"]}},"id":"5b4dc75d-5598-428f-abe5-52df308b8e19","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"9d5a78e6-0f90-4f1a-b9ab-dce5098eaf49","type":"LinearAxis"}],"left":[{"id":"a4efeb88-bcf1-4ec7-b759-faa4aa06dcf0","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"569a2b3f-d6cd-4ca2-bcf0-7d83c6d4d273","type":"BoxAnnotation"},{"id":"469a2968-8363-457b-936f-4874497431cd","type":"GlyphRenderer"},{"id":"fa3e6986-b325-4f91-b277-1ae0bd5a7245","type":"GlyphRenderer"},{"id":"15cd8dbd-04dd-44e6-b9cd-0ea0585e42ed","type":"GlyphRenderer"},{"id":"4dc96609-829b-42b8-be3c-54b84fa20a98","type":"GlyphRenderer"},{"id":"5306c391-8eea-4ac1-a6a1-240e75b2f623","type":"GlyphRenderer"},{"id":"95dc91ab-b483-4edf-9d02-5aeb95eae2ea","type":"GlyphRenderer"},{"id":"82614f2a-b89f-4e78-9dcf-4fbd41777ca6","type":"GlyphRenderer"},{"id":"9d5a78e6-0f90-4f1a-b9ab-dce5098eaf49","type":"LinearAxis"},{"id":"a4efeb88-bcf1-4ec7-b759-faa4aa06dcf0","type":"CategoricalAxis"},{"id":"2f9ece61-c223-49ec-be6c-98a9c9ddcf77","type":"ColorBar"}],"right":[{"id":"2f9ece61-c223-49ec-be6c-98a9c9ddcf77","type":"ColorBar"}],"title":{"id":"d9d63b52-c02c-4314-b74c-75c47751f826","type":"Title"},"tool_events":{"id":"97c3c2a3-3aad-49f9-a99c-2ae6774f30e2","type":"ToolEvents"},"toolbar":{"id":"a4e63ac0-5c98-4fbb-b734-a8d42edcf66c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a419fb90-dc0a-4f60-981f-fccafa04fbc0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a4bf31c7-4e99-47c1-8c87-650cba45ad9f","type":"FactorRange"}},"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":23},"id":"a419fb90-dc0a-4f60-981f-fccafa04fbc0","type":"Range1d"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"0e3c4ef5-a6f2-4890-91a2-c9345b82931b","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"},"ticker":{"id":"a3de31b5-2968-402f-b70d-99a9cae88531","type":"CategoricalTicker"}},"id":"a4efeb88-bcf1-4ec7-b759-faa4aa06dcf0","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"11a534d5-354e-4847-80c6-5ded43922e69","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.888059701492537,4.522058823529412,4.222222222222222,3.6666666666666665,6.333333333333333,4.804347826086956,4.5036496350364965,4.777777777777778,3.985074626865672,3.7777777777777777,3.9577464788732395,4.666666666666667,3.8,5.555555555555555,3.6],"x":[6,6,7,10,11,6,6,9,6,9,6,10,11,9,11],"y":["Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"330a35a7-c921-4df1-9c3d-afc7ad9fd0a4","type":"ColumnDataSource"},{"attributes":{"child":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"2a92a78b-7c44-451e-968c-4c2f1591430f","type":"Panel"},{"attributes":{},"id":"8d3dfc23-6769-4fd6-b0a8-6bbf7653f5b2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.0,16.88],"x":[5,12],"y":["Wednesday","Saturday"]}},"id":"59ef894c-99fd-45bc-a647-913a34398aba","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b222b6ae-9451-4f37-9649-f4da21a51edd","type":"ColumnDataSource"},"glyph":{"id":"3214b686-2ed9-4ff4-adf4-626e2a785d47","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c390e8cd-76e1-4641-b876-cc28bac79ab6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b9938be-5e1c-4641-8b89-3131bf4d8e6f","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a90bac16-cf6a-47fb-a5ef-d35c9dc7c583","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"59ef894c-99fd-45bc-a647-913a34398aba","type":"ColumnDataSource"},"glyph":{"id":"5bb20198-f190-4fb2-8cd5-143ca99885f8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fa3e6986-b325-4f91-b277-1ae0bd5a7245","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3eb48d5e-35fd-4772-9089-0b28265fd39f","type":"BoxAnnotation"},"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"7aa6f018-ec94-4032-b0bd-c169ef094017","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"330a35a7-c921-4df1-9c3d-afc7ad9fd0a4","type":"ColumnDataSource"},"glyph":{"id":"32ee6afd-2d95-4de1-b9f0-06da3b62ce72","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"95dc91ab-b483-4edf-9d02-5aeb95eae2ea","type":"GlyphRenderer"},{"attributes":{},"id":"0bd711d2-9a09-4d7e-a090-ad033b264cba","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.2857142857142856,2.7777777777777777,2.0,2.4444444444444446,0.0,1.75,0.3333333333333333,1.0,0.8888888888888888,2.6666666666666665,0.0,0.0,0.0,1.375,2.2,0.0,2.0,2.552,0.1111111111111111,0.0],"x":[5,7,9,10,15,5,9,15,7,10,15,7,13,7,7,8,5,6,7,13],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"b54f1f72-8db9-437f-8ebb-c4898bd425c4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"31ddaca9-3e8f-4c53-8513-2bdcebcf600b","type":"ColumnDataSource"},"glyph":{"id":"bd4a437c-9d8f-41c0-a82a-20b3428de332","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"303fd8bc-aff7-4671-8401-8e96afaee618","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"edbeaf8f-6c8a-4d83-b207-1e46854c49f4","type":"Rect"},{"attributes":{"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"dfc59707-f886-4a2d-a3b6-addb2374f77e","type":"SaveTool"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"c7722d13-9a18-4065-b97f-b90a506e46e6","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.888059701492537,4.522058823529412,4.222222222222222,3.6666666666666665,6.333333333333333,4.804347826086956,4.5036496350364965,4.777777777777778,3.985074626865672,3.7777777777777777,3.9577464788732395,4.666666666666667,3.8,5.555555555555555,3.6],"x":[6,6,7,10,11,6,6,9,6,9,6,10,11,9,11],"y":["Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"2159d1af-cb2a-418d-b732-7f5f9c57598e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"50d518b9-fa45-4ec1-94af-a9491fde4be4","type":"ColumnDataSource"},"glyph":{"id":"bec0b503-c9dd-423b-9726-297ba5c3a028","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"82614f2a-b89f-4e78-9dcf-4fbd41777ca6","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"df1caf0c-7acf-468d-895c-a27d15da35cb","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b747957-1963-467d-b825-aae3ad655943","type":"Rect"},{"attributes":{"overlay":{"id":"569a2b3f-d6cd-4ca2-bcf0-7d83c6d4d273","type":"BoxAnnotation"},"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"370db9c5-3579-4f89-a873-bcf2153bdbda","type":"BoxZoomTool"},{"attributes":{},"id":"db87d473-82c2-48e4-9a3e-e26466f2be6f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5b4dc75d-5598-428f-abe5-52df308b8e19","type":"ColumnDataSource"},"glyph":{"id":"db0d4dde-9b84-4d82-b6a5-b758becfeaa1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"621bcf52-d150-452f-bd4e-8e3c02d8987c","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d562d938-87cb-4261-a5d3-ec89d8d32e95","type":"Rect"},{"attributes":{"data_source":{"id":"08f66252-82d7-4511-8abd-b4325f190d89","type":"ColumnDataSource"},"glyph":{"id":"3f83b6cc-df68-40ce-a7f0-8834f82cb1b4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4ffd1760-bc2e-4fe7-b999-7153baa4f542","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"e7e92006-59e8-4b4f-b1ca-9858923b9a5d","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"0fcc82b5-d29d-4aeb-9f61-8803b2304344","type":"FactorRange"},{"attributes":{"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"e62718ca-fdaa-42d8-aa2a-7e53aa261e02","type":"ResetTool"},{"attributes":{},"id":"7694d6f7-89da-410b-93a4-2d9e0b7c62d4","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f83b6cc-df68-40ce-a7f0-8834f82cb1b4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bb20198-f190-4fb2-8cd5-143ca99885f8","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"db0d4dde-9b84-4d82-b6a5-b758becfeaa1","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a4bf31c7-4e99-47c1-8c87-650cba45ad9f","type":"FactorRange"},{"attributes":{"color_mapper":{"id":"a90bac16-cf6a-47fb-a5ef-d35c9dc7c583","type":"LinearColorMapper"},"formatter":{"id":"db87d473-82c2-48e4-9a3e-e26466f2be6f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"},"ticker":{"id":"9ef64efa-2c04-4751-bd5e-7ddb1427a5a0","type":"BasicTicker"}},"id":"2f9ece61-c223-49ec-be6c-98a9c9ddcf77","type":"ColorBar"},{"attributes":{"data_source":{"id":"f80b8340-8c66-4522-927c-627f499116d3","type":"ColumnDataSource"},"glyph":{"id":"edbeaf8f-6c8a-4d83-b207-1e46854c49f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"57385ef7-466e-434a-926d-b4c861b4c943","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.0,11.933884297520661,11.10204081632653,12.0],"x":[11,14,13,14],"y":["Wednesday","Friday","Saturday","Saturday"]}},"id":"b222b6ae-9451-4f37-9649-f4da21a51edd","type":"ColumnDataSource"},{"attributes":{},"id":"2dee31b3-44a3-4760-8da7-df82703bcf9c","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"2159d1af-cb2a-418d-b732-7f5f9c57598e","type":"ColumnDataSource"},"glyph":{"id":"7c567b67-6db6-4443-8702-fb7709e07958","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f7f72c65-8bde-4e39-b599-721fedf6db34","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"d9d63b52-c02c-4314-b74c-75c47751f826","type":"Title"},{"attributes":{"data_source":{"id":"b54f1f72-8db9-437f-8ebb-c4898bd425c4","type":"ColumnDataSource"},"glyph":{"id":"d562d938-87cb-4261-a5d3-ec89d8d32e95","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7a050a06-d523-48ca-916f-ecb3d5d9b42c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,28.666666666666668,30.0,28.055555555555557],"x":[11,5,11,11,15,10],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"6ddca35e-93e5-4e64-be79-99501235765b","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bec0b503-c9dd-423b-9726-297ba5c3a028","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.0,11.933884297520661,11.10204081632653,12.0],"x":[11,14,13,14],"y":["Wednesday","Friday","Saturday","Saturday"]}},"id":"5720ceb5-bfa3-4fa3-97f8-3c2bc7dc74dc","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[9.396694214876034,7.333333333333333,9.805084745762711,7.611111111111111,9.539130434782608,7.222222222222222,7.111111111111111,7.831932773109243],"x":[14,9,14,10,14,5,10,14],"y":["Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday"]}},"id":"68699b04-05ce-4844-ab22-f4d0f0251570","type":"ColumnDataSource"},{"attributes":{},"id":"97c3c2a3-3aad-49f9-a99c-2ae6774f30e2","type":"ToolEvents"},{"attributes":{"callback":null,"tabs":[{"id":"4f10443c-d178-4b2b-95c7-46d23a2a9eb7","type":"Panel"},{"id":"2a92a78b-7c44-451e-968c-4c2f1591430f","type":"Panel"}]},"id":"54395d43-5459-4b49-bb15-476b531ca924","type":"Tabs"},{"attributes":{"data_source":{"id":"6ddca35e-93e5-4e64-be79-99501235765b","type":"ColumnDataSource"},"glyph":{"id":"6b747957-1963-467d-b825-aae3ad655943","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"469a2968-8363-457b-936f-4874497431cd","type":"GlyphRenderer"},{"attributes":{},"id":"a174c4e8-3fbf-4ed9-8ab9-748ee1cffcc0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.482758620689655,14.0],"x":[14,15],"y":["Monday","Sunday"]}},"id":"08f66252-82d7-4511-8abd-b4325f190d89","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c567b67-6db6-4443-8702-fb7709e07958","type":"Rect"},{"attributes":{"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"0daba171-2998-472e-a21d-252d912cb8a7","type":"HelpTool"},{"attributes":{"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"}},"id":"2b98c57d-8406-49ee-b8b4-c90346b30da4","type":"SaveTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"0dddf8dc-8613-432f-a00d-f6612e378125","type":"BasicTickFormatter"},"plot":{"id":"953d9cbb-cf3b-4f3e-b38d-50b0f30fe60c","subtype":"Chart","type":"Plot"},"ticker":{"id":"a174c4e8-3fbf-4ed9-8ab9-748ee1cffcc0","type":"BasicTicker"}},"id":"5c74cb15-c88d-4b7a-90d5-affde8003f8d","type":"LinearAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d730be8b-f7e8-46cf-b539-863df9f504cd","type":"LinearColorMapper"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8d3dfc23-6769-4fd6-b0a8-6bbf7653f5b2","type":"BasicTickFormatter"},"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"},"ticker":{"id":"7694d6f7-89da-410b-93a4-2d9e0b7c62d4","type":"BasicTicker"}},"id":"9d5a78e6-0f90-4f1a-b9ab-dce5098eaf49","type":"LinearAxis"},{"attributes":{"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"4e1c9a15-fe93-4ee2-a5d9-6d5611d39693","type":"WheelZoomTool"},{"attributes":{},"id":"a3de31b5-2968-402f-b70d-99a9cae88531","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.2857142857142856,2.7777777777777777,2.0,2.4444444444444446,0.0,1.75,0.3333333333333333,1.0,0.8888888888888888,2.6666666666666665,0.0,0.0,0.0,1.375,2.2,0.0,2.0,2.552,0.1111111111111111,0.0],"x":[5,7,9,10,15,5,9,15,7,10,15,7,13,7,7,8,5,6,7,13],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"50d518b9-fa45-4ec1-94af-a9491fde4be4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,28.666666666666668,30.0,28.055555555555557],"x":[11,5,11,11,15,10],"y":["Monday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"f80b8340-8c66-4522-927c-627f499116d3","type":"ColumnDataSource"},{"attributes":{},"id":"9ef64efa-2c04-4751-bd5e-7ddb1427a5a0","type":"BasicTicker"},{"attributes":{},"id":"0e3c4ef5-a6f2-4890-91a2-c9345b82931b","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.0,16.88],"x":[5,12],"y":["Wednesday","Saturday"]}},"id":"31ddaca9-3e8f-4c53-8513-2bdcebcf600b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0dae817f-163e-4cdb-a81a-07ab956f5e51","subtype":"Chart","type":"Plot"}},"id":"20010fb9-5bf5-4871-9681-5213635db705","type":"PanTool"}],"root_ids":["54395d43-5459-4b49-bb15-476b531ca924"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"80acfd0b-13e4-47d9-a0c7-1af8dc5390c0","elementid":"83d9c4d7-1c1a-48c8-932f-c09e5a7f8724","modelid":"54395d43-5459-4b49-bb15-476b531ca924"}];
                  
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
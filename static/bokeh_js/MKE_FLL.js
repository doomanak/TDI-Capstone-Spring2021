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
      };var element = document.getElementById("96657c7d-164a-430b-bd22-a9f4c509208b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96657c7d-164a-430b-bd22-a9f4c509208b' but no matching script tag was found. ")
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
                  var docs_json = {"c8a52a53-fb4c-45b1-99ab-4c5c9066c07a":{"roots":{"references":[{"attributes":{"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"17bce802-1f23-4981-8000-133ce7ac120a","type":"ResetTool"},{"attributes":{},"id":"23f3b999-606b-4918-8d52-049543f2339d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,16.75,19.6,17.875,17.11111111111111],"x":[15,9,16,10,11],"y":["Wednesday","Thursday","Thursday","Friday","Saturday"]}},"id":"05834e6d-11bc-43c1-8ba2-c0866c1534bc","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"99d827ef-e80d-445e-a16a-5395da5b918a","type":"LinearColorMapper"},"formatter":{"id":"deb95ab2-6672-46a6-b06d-3132f6008854","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"},"ticker":{"id":"afc6239d-9862-455a-a89a-5a1f73376156","type":"BasicTicker"}},"id":"d930be4b-73d9-49f1-a5ee-7f232242a7d1","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"309904d0-06cd-40a4-b1fd-5bae4384a199","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"35f74886-db72-4370-80da-a98607fa6004","type":"FactorRange"},{"attributes":{"overlay":{"id":"922d8273-256d-4091-89cb-97803eff0879","type":"BoxAnnotation"},"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"7c5e65d7-0622-44e7-91fb-e43a59830e46","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7642834b-a257-4103-a39b-79eeb5cb853b","type":"Rect"},{"attributes":{"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"3461bc82-c316-45f0-87ef-4c38a404c726","type":"PanTool"},{"attributes":{},"id":"afc6239d-9862-455a-a89a-5a1f73376156","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cebdd187-08a7-4196-ad28-0f68bf7a2b61","type":"ColumnDataSource"},"glyph":{"id":"d8c1d372-d2d6-4c5a-8e66-9bf9b6a55cec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"96531a02-e462-406d-9e89-6430dec565f6","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"c5963695-ee78-492d-97fe-de456297ff9e","type":"LinearAxis"}],"left":[{"id":"0311fa43-4592-4c16-b516-85cb427cd892","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"922d8273-256d-4091-89cb-97803eff0879","type":"BoxAnnotation"},{"id":"9d20bba1-7aa0-451d-823c-806852882cb5","type":"GlyphRenderer"},{"id":"12eef6dc-d53c-4c0c-9b5e-ce2cdd50fd16","type":"GlyphRenderer"},{"id":"d0a86a4c-8f46-41ee-97a7-bd3866585208","type":"GlyphRenderer"},{"id":"280645d7-964e-4090-bb8a-48ba724e1acc","type":"GlyphRenderer"},{"id":"a9afcd0b-8cb9-4a1e-9b81-c37f8e225bbc","type":"GlyphRenderer"},{"id":"313afcbf-d151-44fd-bdf0-e464dff9be8f","type":"GlyphRenderer"},{"id":"1d125e7c-b15c-4626-80c5-1636b86a220a","type":"GlyphRenderer"},{"id":"eb6fefef-8660-4530-a12e-56204a3afbaa","type":"GlyphRenderer"},{"id":"c5963695-ee78-492d-97fe-de456297ff9e","type":"LinearAxis"},{"id":"0311fa43-4592-4c16-b516-85cb427cd892","type":"CategoricalAxis"},{"id":"3760f8ed-0df1-4a1c-9d78-dff4809889ae","type":"ColorBar"}],"right":[{"id":"3760f8ed-0df1-4a1c-9d78-dff4809889ae","type":"ColorBar"}],"title":{"id":"669eb68a-18fa-4adc-8968-5e9888661117","type":"Title"},"tool_events":{"id":"6e75d1c6-7520-4c17-9b2c-334be8fa6ce1","type":"ToolEvents"},"toolbar":{"id":"54b183ca-d96e-423f-a3d1-99d543404461","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"afe32cd5-2278-4557-9737-5a7e98876150","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"aac0841a-b9ab-4034-b5d0-5f1f5a7e37e4","type":"FactorRange"}},"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"40062f81-452f-4a22-b27a-1003ebb7c468","type":"ColumnDataSource"},"glyph":{"id":"062f02d2-61c8-4dd8-9b28-c2ffdcc71ae1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d60de3ce-6148-403c-b281-65d8ec8a4e59","type":"GlyphRenderer"},{"attributes":{"child":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"e549710e-f220-4320-8d6d-5b294ac0326f","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0,22.5],"x":[15,12],"y":["Monday","Tuesday"]}},"id":"94ca080b-fb33-4e0b-9054-00e14759370d","type":"ColumnDataSource"},{"attributes":{},"id":"25d00865-782d-4d91-bf70-79b8ea8877f4","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"f5f065ea-a15d-4f95-a095-d76e3699f27a","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3461bc82-c316-45f0-87ef-4c38a404c726","type":"PanTool"},{"id":"b5f7f3b4-34a9-4306-9519-11cd1991f629","type":"WheelZoomTool"},{"id":"0ad77213-ea73-4063-ba5f-876e8c6b36dd","type":"BoxZoomTool"},{"id":"d65cfbb1-6337-4e9a-9fff-532cef1caed2","type":"SaveTool"},{"id":"90a58e1e-bc06-468e-b828-4032d26da996","type":"ResetTool"},{"id":"b2bddd15-d125-4009-aff3-35caf812120d","type":"HelpTool"}]},"id":"f395810b-b37a-4143-9187-adb6b0555a3d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.0,7.137254901960785,8.272727272727273,7.313725490196078,8.076923076923077,6.754716981132075,9.414634146341463,9.928571428571429,7.6415094339622645,8.083333333333334],"x":[10,13,12,13,17,13,7,13,13,17],"y":["Monday","Tuesday","Thursday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"0ec2e38c-860f-46bd-9a9f-081c7db96d8a","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"a16a4bea-ba86-413c-8530-387fa96cf7b5","type":"Range1d"},{"attributes":{"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"886374fa-2829-41bc-98f2-10fe25b0026f","type":"PanTool"},{"attributes":{"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"e00bc6c2-780b-4f32-b06c-3e80747a8f03","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"8886e8c7-772e-4dd4-8dae-ef239d07655b","type":"ColumnDataSource"},"glyph":{"id":"4893b20c-0258-433f-87e6-7f9f6934e137","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f6e9475-c089-4195-835a-18fceb686a32","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.944444444444445,12.296296296296296,10.647058823529411,11.0,11.333333333333334,10.303030303030303,11.454545454545455],"x":[14,13,14,5,12,9,14],"y":["Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Sunday"]}},"id":"2d36d951-a3f9-46a2-973b-2ef32e050c9d","type":"ColumnDataSource"},{"attributes":{},"id":"ec058cf9-0c8b-4e2f-9bfc-f22c323b108e","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"7bb044ad-5034-45e9-9064-63ab97ee96cd","type":"LinearAxis"}],"left":[{"id":"d311581d-f689-41ae-94e5-35feef4fff8a","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7da6bdbe-ef8f-4f3f-aeab-6e948494ff8b","type":"BoxAnnotation"},{"id":"f7fc12de-7ee8-497e-a552-9972021721cd","type":"GlyphRenderer"},{"id":"0fa5fd09-d1cc-41ef-9128-abc4b8292c4b","type":"GlyphRenderer"},{"id":"2f6e9475-c089-4195-835a-18fceb686a32","type":"GlyphRenderer"},{"id":"1c3dba94-8b6e-4cf4-b4e8-533c41242e6b","type":"GlyphRenderer"},{"id":"96531a02-e462-406d-9e89-6430dec565f6","type":"GlyphRenderer"},{"id":"03c78f78-2069-4f2f-80de-e6f4d0ad631a","type":"GlyphRenderer"},{"id":"d60de3ce-6148-403c-b281-65d8ec8a4e59","type":"GlyphRenderer"},{"id":"01eeb9c1-55e3-4935-b809-79f9bfb24870","type":"GlyphRenderer"},{"id":"7bb044ad-5034-45e9-9064-63ab97ee96cd","type":"LinearAxis"},{"id":"d311581d-f689-41ae-94e5-35feef4fff8a","type":"CategoricalAxis"},{"id":"d930be4b-73d9-49f1-a5ee-7f232242a7d1","type":"ColorBar"}],"right":[{"id":"d930be4b-73d9-49f1-a5ee-7f232242a7d1","type":"ColorBar"}],"title":{"id":"15dbd61b-6baa-4727-b8a2-8050f8e516f0","type":"Title"},"tool_events":{"id":"354a1a91-3d7a-4428-8c44-8917421cf738","type":"ToolEvents"},"toolbar":{"id":"f395810b-b37a-4143-9187-adb6b0555a3d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"a16a4bea-ba86-413c-8530-387fa96cf7b5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"35f74886-db72-4370-80da-a98607fa6004","type":"FactorRange"}},"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"062f02d2-61c8-4dd8-9b28-c2ffdcc71ae1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"677b467f-4066-4811-8e35-4365ecf43e79","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfee1b65-12e7-42db-a2c0-06333fbc48f3","type":"Rect"},{"attributes":{},"id":"e511388f-9b6e-4ab5-9720-6fd584483536","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.5,0.0,1.0,0.0,0.0,0.0,2.142857142857143,2.75,0.07142857142857142,0.0,1.4074074074074074,0.0,0.0,2.25,0.0,0.0,1.6538461538461537,0.0,1.5,0.0,1.4,1.8333333333333333,0.0,0.0,0.25],"x":[5,6,9,11,16,5,9,10,16,17,5,6,9,11,16,17,10,6,11,6,12,14,6,7,9,10],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"b6acde86-32de-4991-b4ab-077f1d95c34e","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b3e01b2-8ef4-4bee-9bc7-9f9967cafb0e","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.9,15.235294117647058,15.8],"x":[12,14,12],"y":["Monday","Thursday","Sunday"]}},"id":"c89101bc-3519-44b8-af44-a4b9226e72de","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"94ca080b-fb33-4e0b-9054-00e14759370d","type":"ColumnDataSource"},"glyph":{"id":"674c9d7b-0476-4e44-b62f-5fac9dae0aa4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"12eef6dc-d53c-4c0c-9b5e-ce2cdd50fd16","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2d36d951-a3f9-46a2-973b-2ef32e050c9d","type":"ColumnDataSource"},"glyph":{"id":"309904d0-06cd-40a4-b1fd-5bae4384a199","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a9afcd0b-8cb9-4a1e-9b81-c37f8e225bbc","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d8c1d372-d2d6-4c5a-8e66-9bf9b6a55cec","type":"Rect"},{"attributes":{"data_source":{"id":"0ec2e38c-860f-46bd-9a9f-081c7db96d8a","type":"ColumnDataSource"},"glyph":{"id":"3c942dc7-fa23-4bb8-a142-f507fb0be2cc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"313afcbf-d151-44fd-bdf0-e464dff9be8f","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"7da6bdbe-ef8f-4f3f-aeab-6e948494ff8b","type":"BoxAnnotation"},"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"0ad77213-ea73-4063-ba5f-876e8c6b36dd","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.9,15.235294117647058,15.8],"x":[12,14,12],"y":["Monday","Thursday","Sunday"]}},"id":"032c5005-6e71-4be9-95c0-fbb19d3b0e4a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"edebecc7-6166-4e9c-930e-0b8a9543a6a8","type":"ColumnDataSource"},"glyph":{"id":"e0ed6353-1021-4356-9174-87f2d1358ee4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f7fc12de-7ee8-497e-a552-9972021721cd","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"b6acde86-32de-4991-b4ab-077f1d95c34e","type":"ColumnDataSource"},"glyph":{"id":"7642834b-a257-4103-a39b-79eeb5cb853b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"01eeb9c1-55e3-4935-b809-79f9bfb24870","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4893b20c-0258-433f-87e6-7f9f6934e137","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"00543df6-95fe-45b8-a5ab-fb47f6320df9","type":"Rect"},{"attributes":{},"id":"80ee7e85-aa47-46fc-b03a-f453367e6062","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"a59e3844-3663-45ec-954b-9762be969e4d","type":"Panel"},{"attributes":{"data_source":{"id":"c89101bc-3519-44b8-af44-a4b9226e72de","type":"ColumnDataSource"},"glyph":{"id":"e0331294-7721-4ae6-a215-062d3af607f8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"280645d7-964e-4090-bb8a-48ba724e1acc","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"aa2b4e5a-9262-42c6-a158-a465c052068d","type":"ColumnDataSource"},"glyph":{"id":"dfee1b65-12e7-42db-a2c0-06333fbc48f3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1d125e7c-b15c-4626-80c5-1636b86a220a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ba976ca4-fc85-4515-984f-81875aa4f6b7","type":"ColumnDataSource"},"glyph":{"id":"ce39226c-168b-4f1e-8148-ae50e5e39e7a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"03c78f78-2069-4f2f-80de-e6f4d0ad631a","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"1b84e336-ce26-4f22-ac4c-ce0036505f0e","type":"LinearColorMapper"},{"attributes":{},"id":"61a7081c-5ab5-4fd3-9b05-a58858e39d24","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce39226c-168b-4f1e-8148-ae50e5e39e7a","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"15dbd61b-6baa-4727-b8a2-8050f8e516f0","type":"Title"},{"attributes":{},"id":"1cf99e8a-72ba-4f9a-b226-337d67c07b75","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3647079f-cbe1-4549-a4c1-cc50e9595710","type":"ColumnDataSource"},"glyph":{"id":"677b467f-4066-4811-8e35-4365ecf43e79","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0fa5fd09-d1cc-41ef-9128-abc4b8292c4b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.0,7.137254901960785,8.272727272727273,7.313725490196078,8.076923076923077,6.754716981132075,9.414634146341463,9.928571428571429,7.6415094339622645,8.083333333333334],"x":[10,13,12,13,17,13,7,13,13,17],"y":["Monday","Tuesday","Thursday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"ba976ca4-fc85-4515-984f-81875aa4f6b7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"b2bddd15-d125-4009-aff3-35caf812120d","type":"HelpTool"},{"attributes":{"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"d65cfbb1-6337-4e9a-9fff-532cef1caed2","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,2.5,0.0,1.0,0.0,0.0,0.0,2.142857142857143,2.75,0.07142857142857142,0.0,1.4074074074074074,0.0,0.0,2.25,0.0,0.0,1.6538461538461537,0.0,1.5,0.0,1.4,1.8333333333333333,0.0,0.0,0.25],"x":[5,6,9,11,16,5,9,10,16,17,5,6,9,11,16,17,10,6,11,6,12,14,6,7,9,10],"y":["Monday","Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"f3d19b80-056a-49b9-844d-20631984e72b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[21.0,22.5],"x":[15,12],"y":["Monday","Tuesday"]}},"id":"3647079f-cbe1-4549-a4c1-cc50e9595710","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c942dc7-fa23-4bb8-a142-f507fb0be2cc","type":"Rect"},{"attributes":{},"id":"354a1a91-3d7a-4428-8c44-8917421cf738","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0331294-7721-4ae6-a215-062d3af607f8","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"922d8273-256d-4091-89cb-97803eff0879","type":"BoxAnnotation"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ec058cf9-0c8b-4e2f-9bfc-f22c323b108e","type":"BasicTickFormatter"},"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"},"ticker":{"id":"f2b20a30-624e-4efe-8ca4-a03ff17e0972","type":"BasicTicker"}},"id":"c5963695-ee78-492d-97fe-de456297ff9e","type":"LinearAxis"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e511388f-9b6e-4ab5-9720-6fd584483536","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"},"ticker":{"id":"fea0d238-65d3-4a89-8b8d-934e53af16bc","type":"CategoricalTicker"}},"id":"d311581d-f689-41ae-94e5-35feef4fff8a","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ebbe699-8634-4f84-b33e-fbd9efb2b0d5","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.58,4.0,3.769230769230769,3.4,4.769230769230769,6.0,6.2,5.538461538461538,4.586206896551724,3.4,4.6],"x":[13,17,6,5,6,11,16,17,8,5,16],"y":["Monday","Monday","Tuesday","Thursday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"40062f81-452f-4a22-b27a-1003ebb7c468","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"b5f7f3b4-34a9-4306-9519-11cd1991f629","type":"WheelZoomTool"},{"attributes":{},"id":"deb95ab2-6672-46a6-b06d-3132f6008854","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"}},"id":"86174254-027e-443c-bc03-2a15dd37506c","type":"HelpTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"aac0841a-b9ab-4034-b5d0-5f1f5a7e37e4","type":"FactorRange"},{"attributes":{"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"}},"id":"90a58e1e-bc06-468e-b828-4032d26da996","type":"ResetTool"},{"attributes":{"callback":null,"tabs":[{"id":"e549710e-f220-4320-8d6d-5b294ac0326f","type":"Panel"},{"id":"a59e3844-3663-45ec-954b-9762be969e4d","type":"Panel"}]},"id":"b963cf72-e734-47f3-ae6e-a20fddc3ca2f","type":"Tabs"},{"attributes":{"data_source":{"id":"032c5005-6e71-4be9-95c0-fbb19d3b0e4a","type":"ColumnDataSource"},"glyph":{"id":"8ebbe699-8634-4f84-b33e-fbd9efb2b0d5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c3dba94-8b6e-4cf4-b4e8-533c41242e6b","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e0ed6353-1021-4356-9174-87f2d1358ee4","type":"Rect"},{"attributes":{},"id":"6e75d1c6-7520-4c17-9b2c-334be8fa6ce1","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"674c9d7b-0476-4e44-b62f-5fac9dae0aa4","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,27.3,30.0,30.0,30.0,30.0,30.0,29.294117647058822,30.0,29.0],"x":[14,11,15,10,12,15,9,14,15,10,15,11,15],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"edebecc7-6166-4e9c-930e-0b8a9543a6a8","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"afe32cd5-2278-4557-9737-5a7e98876150","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.944444444444445,12.296296296296296,10.647058823529411,11.0,11.333333333333334,10.303030303030303,11.454545454545455],"x":[14,13,14,5,12,9,14],"y":["Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Sunday"]}},"id":"cebdd187-08a7-4196-ad28-0f68bf7a2b61","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"928e8f75-e813-4c8f-b71b-5e998416fd0f","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"886374fa-2829-41bc-98f2-10fe25b0026f","type":"PanTool"},{"id":"e00bc6c2-780b-4f32-b06c-3e80747a8f03","type":"WheelZoomTool"},{"id":"7c5e65d7-0622-44e7-91fb-e43a59830e46","type":"BoxZoomTool"},{"id":"f5f065ea-a15d-4f95-a095-d76e3699f27a","type":"SaveTool"},{"id":"17bce802-1f23-4981-8000-133ce7ac120a","type":"ResetTool"},{"id":"86174254-027e-443c-bc03-2a15dd37506c","type":"HelpTool"}]},"id":"54b183ca-d96e-423f-a3d1-99d543404461","type":"Toolbar"},{"attributes":{"data_source":{"id":"05834e6d-11bc-43c1-8ba2-c0866c1534bc","type":"ColumnDataSource"},"glyph":{"id":"1b3e01b2-8ef4-4bee-9bc7-9f9967cafb0e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d0a86a4c-8f46-41ee-97a7-bd3866585208","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7da6bdbe-ef8f-4f3f-aeab-6e948494ff8b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"669eb68a-18fa-4adc-8968-5e9888661117","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0,30.0,27.3,30.0,30.0,30.0,30.0,30.0,29.294117647058822,30.0,29.0],"x":[14,11,15,10,12,15,9,14,15,10,15,11,15],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"30eef147-9e17-4963-99b9-34a822832262","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[20.0,16.75,19.6,17.875,17.11111111111111],"x":[15,9,16,10,11],"y":["Wednesday","Thursday","Thursday","Friday","Saturday"]}},"id":"8886e8c7-772e-4dd4-8dae-ef239d07655b","type":"ColumnDataSource"},{"attributes":{},"id":"f2b20a30-624e-4efe-8ca4-a03ff17e0972","type":"BasicTicker"},{"attributes":{},"id":"9b6cb2fc-a18d-4cb8-8cb9-9a9f217c6c9c","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"f3d19b80-056a-49b9-844d-20631984e72b","type":"ColumnDataSource"},"glyph":{"id":"00543df6-95fe-45b8-a5ab-fb47f6320df9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eb6fefef-8660-4530-a12e-56204a3afbaa","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"30eef147-9e17-4963-99b9-34a822832262","type":"ColumnDataSource"},"glyph":{"id":"928e8f75-e813-4c8f-b71b-5e998416fd0f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9d20bba1-7aa0-451d-823c-806852882cb5","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"1b84e336-ce26-4f22-ac4c-ce0036505f0e","type":"LinearColorMapper"},"formatter":{"id":"80ee7e85-aa47-46fc-b03a-f453367e6062","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"},"ticker":{"id":"1cf99e8a-72ba-4f9a-b226-337d67c07b75","type":"BasicTicker"}},"id":"3760f8ed-0df1-4a1c-9d78-dff4809889ae","type":"ColorBar"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"23f3b999-606b-4918-8d52-049543f2339d","type":"BasicTickFormatter"},"plot":{"id":"6ac8d785-8353-481a-9caf-080dd63fd863","subtype":"Chart","type":"Plot"},"ticker":{"id":"61a7081c-5ab5-4fd3-9b05-a58858e39d24","type":"BasicTicker"}},"id":"7bb044ad-5034-45e9-9064-63ab97ee96cd","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.58,4.0,3.769230769230769,3.4,4.769230769230769,6.0,6.2,5.538461538461538,4.586206896551724,3.4,4.6],"x":[13,17,6,5,6,11,16,17,8,5,16],"y":["Monday","Monday","Tuesday","Thursday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"aa2b4e5a-9262-42c6-a158-a465c052068d","type":"ColumnDataSource"},{"attributes":{},"id":"fea0d238-65d3-4a89-8b8d-934e53af16bc","type":"CategoricalTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"25d00865-782d-4d91-bf70-79b8ea8877f4","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b0067cdd-3da5-4134-a82c-73f34593153a","subtype":"Chart","type":"Plot"},"ticker":{"id":"9b6cb2fc-a18d-4cb8-8cb9-9a9f217c6c9c","type":"CategoricalTicker"}},"id":"0311fa43-4592-4c16-b516-85cb427cd892","type":"CategoricalAxis"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"99d827ef-e80d-445e-a16a-5395da5b918a","type":"LinearColorMapper"}],"root_ids":["b963cf72-e734-47f3-ae6e-a20fddc3ca2f"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"c8a52a53-fb4c-45b1-99ab-4c5c9066c07a","elementid":"96657c7d-164a-430b-bd22-a9f4c509208b","modelid":"b963cf72-e734-47f3-ae6e-a20fddc3ca2f"}];
                  
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
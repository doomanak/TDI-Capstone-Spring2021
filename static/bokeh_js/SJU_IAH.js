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
      };var element = document.getElementById("7641f13d-6d88-471a-9dcf-0ff4e4b5a08e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7641f13d-6d88-471a-9dcf-0ff4e4b5a08e' but no matching script tag was found. ")
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
                  var docs_json = {"77ca2e38-70a1-47e8-8ae8-194154f0927c":{"roots":{"references":[{"attributes":{"data_source":{"id":"cde48ebb-21cf-4371-8b6a-434e02cf1cb5","type":"ColumnDataSource"},"glyph":{"id":"2e2f5e5a-05b0-409a-9c76-537c93dea579","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40f89904-30e6-4225-a952-01f12ccd3802","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.7,17.05263157894737,17.58730158730159,18.5,17.863636363636363],"x":[15,17,13,14,17],"y":["Tuesday","Friday","Saturday","Saturday","Saturday"]}},"id":"79728840-f443-4265-9c4b-e49119c7e484","type":"ColumnDataSource"},{"attributes":{"child":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ff75a363-3f50-4b7c-b904-171a376fcb73","type":"Panel"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e1dbc3af-317a-4158-a0fe-a08cd1bc2f6d","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0,12.266666666666667,11.333333333333334,13.175675675675675,12.207792207792208,10.538461538461538,10.25,13.0],"x":[2,16,17,16,16,15,1,15],"y":["Monday","Monday","Monday","Wednesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"cde48ebb-21cf-4371-8b6a-434e02cf1cb5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"509d4884-ced6-45a4-98f1-d52c96ecd151","type":"ColumnDataSource"},"glyph":{"id":"0a29ad9e-466c-4ea7-b0a8-6848192442f2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0c0cf6ee-0470-4b0b-8cbb-3abdfdab6829","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.452380952380953,13.546666666666667,15.875,15.0,14.78048780487805,16.5,16.636363636363637],"x":[13,16,15,2,13,2,7],"y":["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday","Sunday"]}},"id":"c2e3c298-9162-47d2-a3a3-6513c9819af4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"358f0eb7-e30c-4585-a256-c712802838bd","type":"ColumnDataSource"},"glyph":{"id":"289229f5-9fab-47e3-af3f-f82fd5821075","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"dab251b2-37b2-4baa-a3f6-5966d111b0f7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"8d9fff3c-7d19-4ea8-b3eb-1d2fe6764904","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4e4a995a-4fa8-4d25-be64-7337d6bcecaa","type":"BoxAnnotation"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"58856d61-666c-4f06-ae1d-ea1356284b25","type":"FactorRange"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"9985d3f1-fa47-4655-b156-2d85f3c37896","type":"BasicTickFormatter"},"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"},"ticker":{"id":"306fc14d-cf6c-4c40-adc1-8f4b5b8f8648","type":"BasicTicker"}},"id":"de626be0-690a-4002-a51f-b3cdf96daf73","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f2e2739f-3d18-4548-8e96-3b681c5de6ba","type":"ColumnDataSource"},"glyph":{"id":"eba9047a-a8b4-44c9-8ec7-1352a8f3375b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ea5a608-b8ce-473b-9d05-d7f238c76e1f","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2648349-30f8-4cf3-a5c8-bdd5d062c46e","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"972bb3a4-c1ff-49f3-b8c4-86fdb84c9811","type":"Rect"},{"attributes":{"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"a8b4b42e-2693-4750-af9f-434b8e78d3cf","type":"ResetTool"},{"attributes":{"color_mapper":{"id":"f0379b30-b5fc-4225-bab0-a6d2bff48246","type":"LinearColorMapper"},"formatter":{"id":"6b60abed-5d0f-4bca-9ed2-d33c2be5568d","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"},"ticker":{"id":"83f2f2d2-8818-40cf-9bb4-26d0b40c67eb","type":"BasicTicker"}},"id":"49413937-03cf-4dc8-82a5-bf17847584d2","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"acbf3329-3a83-4016-99f6-1d5f98d55c4d","type":"Rect"},{"attributes":{},"id":"ea7211d8-ad37-4df2-be50-8e92bdfabb24","type":"ToolEvents"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"6ca179af-e87c-431d-8e02-d4d7391b73d9","type":"BasicTickFormatter"},"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"},"ticker":{"id":"e23be827-abef-49e6-aad7-dfc5309e7791","type":"BasicTicker"}},"id":"ebca380a-ac3e-42bb-a2e3-d9177ce09107","type":"LinearAxis"},{"attributes":{"callback":null,"end":23},"id":"71b0bbba-61ed-457c-96bd-5181923e61bc","type":"Range1d"},{"attributes":{"data_source":{"id":"c2e3c298-9162-47d2-a3a3-6513c9819af4","type":"ColumnDataSource"},"glyph":{"id":"2ab69267-58cc-467f-8afd-d096118719a6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6db7ba90-e310-4490-ae86-7e839c264f64","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.2,4.529411764705882,4.75,5.578947368421052,3.6,3.625,3.7,4.176470588235294,5.909090909090909],"x":[15,7,7,17,7,12,12,12,17],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"73ebe3a3-551f-4d55-a25a-7d0f355c5b06","type":"ColumnDataSource"},{"attributes":{},"id":"a4192cfa-33ab-4293-8f20-8d614d34142a","type":"BasicTickFormatter"},{"attributes":{},"id":"6ca179af-e87c-431d-8e02-d4d7391b73d9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"5361d2ac-ccc1-430d-961e-400fcd0a2b69","type":"SaveTool"},{"attributes":{},"id":"2cc12eb4-9a8a-47d7-80f1-0a2ed0cbf080","type":"ToolEvents"},{"attributes":{},"id":"e23be827-abef-49e6-aad7-dfc5309e7791","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1cbd45d3-dde3-4513-bc58-094025106298","type":"ColumnDataSource"},"glyph":{"id":"f7af95c4-c099-42db-bf92-c5de786ac18f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"711e946a-5a0d-461f-ac65-5750504bcec8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"a22ad390-d5ff-4b16-8cd4-19e0149ea54d","type":"SaveTool"},{"attributes":{"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"858bb62b-bf44-4284-9e5e-4ec4daa26137","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d8ba6b5-de7f-4b86-96a4-934645fd5cc3","type":"Rect"},{"attributes":{"data_source":{"id":"a894895f-98cb-4f4a-a5d9-c0f3c9e41301","type":"ColumnDataSource"},"glyph":{"id":"972bb3a4-c1ff-49f3-b8c4-86fdb84c9811","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a3f81252-5d21-4c94-87ae-cc1f85b17626","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6396307e-6556-4253-9947-83bc312d91ed","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ab69267-58cc-467f-8afd-d096118719a6","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"2a94a9b9-da87-43f7-9ddb-57cff68cd195","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"},"ticker":{"id":"04de5865-a3b2-45c6-acbe-e451635f427a","type":"CategoricalTicker"}},"id":"befce6b5-aa22-4ea1-81ae-e83ef88a98fa","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"e1dbc3af-317a-4158-a0fe-a08cd1bc2f6d","type":"BoxAnnotation"},"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"6ae893ba-123a-47b3-8567-45987d16969d","type":"BoxZoomTool"},{"attributes":{},"id":"83f2f2d2-8818-40cf-9bb4-26d0b40c67eb","type":"BasicTicker"},{"attributes":{"data_source":{"id":"79728840-f443-4265-9c4b-e49119c7e484","type":"ColumnDataSource"},"glyph":{"id":"e2648349-30f8-4cf3-a5c8-bdd5d062c46e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cca8cee8-adb3-4f7f-af45-8072ba45af21","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"9dfac9e7-b223-4492-9499-2224df4ed9ae","type":"ColumnDataSource"},"glyph":{"id":"a9fb6bad-494e-479d-aa39-0371e850d80e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"90bffcbb-6c29-479d-9641-9efc43a1df12","type":"GlyphRenderer"},{"attributes":{},"id":"9985d3f1-fa47-4655-b156-2d85f3c37896","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"289229f5-9fab-47e3-af3f-f82fd5821075","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[13.452380952380953,13.546666666666667,15.875,15.0,14.78048780487805,16.5,16.636363636363637],"x":[13,16,15,2,13,2,7],"y":["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday","Sunday"]}},"id":"358f0eb7-e30c-4585-a256-c712802838bd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"1c592031-e7df-4638-b7b9-800d3fb7d4b2","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.1666666666666667,0.0,2.8275862068965516,2.6666666666666665,2.0,3.142857142857143,0.0,0.0,3.3134328358208953,1.125],"x":[7,2,6,12,2,12,2,15,6,8],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday"]}},"id":"9dfac9e7-b223-4492-9499-2224df4ed9ae","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"7c8954cd-c424-4e29-98f2-f8a3892ec99a","type":"FactorRange"},{"attributes":{"data_source":{"id":"6a25433c-8b9d-4a19-8435-a436efcf33cd","type":"ColumnDataSource"},"glyph":{"id":"acbf3329-3a83-4016-99f6-1d5f98d55c4d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"018884e1-1790-48d3-a8d8-502035b3c6ea","type":"GlyphRenderer"},{"attributes":{},"id":"6f13dd4f-1b2b-436e-95ff-004ce2891c06","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"2f2e59b3-806f-466b-a158-7996a1b04687","type":"LinearColorMapper"},"formatter":{"id":"a4192cfa-33ab-4293-8f20-8d614d34142a","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"},"ticker":{"id":"6f13dd4f-1b2b-436e-95ff-004ce2891c06","type":"BasicTicker"}},"id":"8d4f46f2-4ec2-4185-80c4-0d5ef9b9b408","type":"ColorBar"},{"attributes":{"overlay":{"id":"4e4a995a-4fa8-4d25-be64-7337d6bcecaa","type":"BoxAnnotation"},"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"872e5d25-8908-4da3-9d54-db4eced2f75f","type":"BoxZoomTool"},{"attributes":{"child":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"14d8cc93-2e73-470b-af53-9be932e48c3b","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[13.0,12.266666666666667,11.333333333333334,13.175675675675675,12.207792207792208,10.538461538461538,10.25,13.0],"x":[2,16,17,16,16,15,1,15],"y":["Monday","Monday","Monday","Wednesday","Thursday","Saturday","Sunday","Sunday"]}},"id":"ab3c2b67-1a06-4e29-bbb5-1d6bb7ae6817","type":"ColumnDataSource"},{"attributes":{},"id":"5842f841-3f5f-4cf7-bfb5-f7c9ee9c53a2","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"7c5abadf-42dc-4c4e-a896-f067f813558c","type":"Range1d"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"de626be0-690a-4002-a51f-b3cdf96daf73","type":"LinearAxis"}],"left":[{"id":"d80622e9-5056-427a-80e4-6fd26cceeac1","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"4e4a995a-4fa8-4d25-be64-7337d6bcecaa","type":"BoxAnnotation"},{"id":"711e946a-5a0d-461f-ac65-5750504bcec8","type":"GlyphRenderer"},{"id":"018884e1-1790-48d3-a8d8-502035b3c6ea","type":"GlyphRenderer"},{"id":"6db7ba90-e310-4490-ae86-7e839c264f64","type":"GlyphRenderer"},{"id":"1906cc0b-4dc5-4677-8abf-138434ce5e97","type":"GlyphRenderer"},{"id":"0c0cf6ee-0470-4b0b-8cbb-3abdfdab6829","type":"GlyphRenderer"},{"id":"a4a2b674-00ee-4859-8e97-f2322f522ef2","type":"GlyphRenderer"},{"id":"3ea5a608-b8ce-473b-9d05-d7f238c76e1f","type":"GlyphRenderer"},{"id":"de626be0-690a-4002-a51f-b3cdf96daf73","type":"LinearAxis"},{"id":"d80622e9-5056-427a-80e4-6fd26cceeac1","type":"CategoricalAxis"},{"id":"49413937-03cf-4dc8-82a5-bf17847584d2","type":"ColorBar"}],"right":[{"id":"49413937-03cf-4dc8-82a5-bf17847584d2","type":"ColorBar"}],"title":{"id":"958d2146-eaba-453e-81a9-8c2d584d5da4","type":"Title"},"tool_events":{"id":"ea7211d8-ad37-4df2-be50-8e92bdfabb24","type":"ToolEvents"},"toolbar":{"id":"448b0e0c-3d51-4ece-991f-d7f256756951","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"71b0bbba-61ed-457c-96bd-5181923e61bc","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"58856d61-666c-4f06-ae1d-ea1356284b25","type":"FactorRange"}},"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"a1b099c3-239c-4ab3-a791-9b3473fd638f","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e26d0be4-d0e4-4f4f-9f1f-9a2d4a1dfd03","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"eba9047a-a8b4-44c9-8ec7-1352a8f3375b","type":"Rect"},{"attributes":{"data_source":{"id":"73ebe3a3-551f-4d55-a25a-7d0f355c5b06","type":"ColumnDataSource"},"glyph":{"id":"6396307e-6556-4253-9947-83bc312d91ed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4a2b674-00ee-4859-8e97-f2322f522ef2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[15,1,2],"y":["Thursday","Saturday","Saturday"]}},"id":"1cbd45d3-dde3-4513-bc58-094025106298","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c273edb-897b-4833-8b1e-3a5b3a5d2937","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f0379b30-b5fc-4225-bab0-a6d2bff48246","type":"LinearColorMapper"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8d9fff3c-7d19-4ea8-b3eb-1d2fe6764904","type":"PanTool"},{"id":"1c592031-e7df-4638-b7b9-800d3fb7d4b2","type":"WheelZoomTool"},{"id":"872e5d25-8908-4da3-9d54-db4eced2f75f","type":"BoxZoomTool"},{"id":"a22ad390-d5ff-4b16-8cd4-19e0149ea54d","type":"SaveTool"},{"id":"0e9407a9-b4b8-43b2-a353-44a2542f006b","type":"ResetTool"},{"id":"a1b099c3-239c-4ab3-a791-9b3473fd638f","type":"HelpTool"}]},"id":"448b0e0c-3d51-4ece-991f-d7f256756951","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9fb6bad-494e-479d-aa39-0371e850d80e","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ebca380a-ac3e-42bb-a2e3-d9177ce09107","type":"LinearAxis"}],"left":[{"id":"befce6b5-aa22-4ea1-81ae-e83ef88a98fa","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"e1dbc3af-317a-4158-a0fe-a08cd1bc2f6d","type":"BoxAnnotation"},{"id":"cbe20232-f2d9-498e-b5b6-c0705fa9868b","type":"GlyphRenderer"},{"id":"cca8cee8-adb3-4f7f-af45-8072ba45af21","type":"GlyphRenderer"},{"id":"dab251b2-37b2-4baa-a3f6-5966d111b0f7","type":"GlyphRenderer"},{"id":"40f89904-30e6-4225-a952-01f12ccd3802","type":"GlyphRenderer"},{"id":"a3f81252-5d21-4c94-87ae-cc1f85b17626","type":"GlyphRenderer"},{"id":"ff771916-c7d2-42f3-a6ce-4b91e9d1f45c","type":"GlyphRenderer"},{"id":"90bffcbb-6c29-479d-9641-9efc43a1df12","type":"GlyphRenderer"},{"id":"ebca380a-ac3e-42bb-a2e3-d9177ce09107","type":"LinearAxis"},{"id":"befce6b5-aa22-4ea1-81ae-e83ef88a98fa","type":"CategoricalAxis"},{"id":"8d4f46f2-4ec2-4185-80c4-0d5ef9b9b408","type":"ColorBar"}],"right":[{"id":"8d4f46f2-4ec2-4185-80c4-0d5ef9b9b408","type":"ColorBar"}],"title":{"id":"90dce45c-f595-4bfe-b46c-014d2bdfec31","type":"Title"},"tool_events":{"id":"2cc12eb4-9a8a-47d7-80f1-0a2ed0cbf080","type":"ToolEvents"},"toolbar":{"id":"84a63732-6256-40e8-b0ab-f05611a24e44","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7c5abadf-42dc-4c4e-a896-f067f813558c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"7c8954cd-c424-4e29-98f2-f8a3892ec99a","type":"FactorRange"}},"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"306fc14d-cf6c-4c40-adc1-8f4b5b8f8648","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"42b12821-bd61-42be-b8a7-d89bd105e853","type":"PanTool"},{"id":"677b4f39-72d5-4276-89b3-7e371cc2ad7c","type":"WheelZoomTool"},{"id":"6ae893ba-123a-47b3-8567-45987d16969d","type":"BoxZoomTool"},{"id":"5361d2ac-ccc1-430d-961e-400fcd0a2b69","type":"SaveTool"},{"id":"a8b4b42e-2693-4750-af9f-434b8e78d3cf","type":"ResetTool"},{"id":"858bb62b-bf44-4284-9e5e-4ec4daa26137","type":"HelpTool"}]},"id":"84a63732-6256-40e8-b0ab-f05611a24e44","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[18.7,17.05263157894737,17.58730158730159,18.5,17.863636363636363],"x":[15,17,13,14,17],"y":["Tuesday","Friday","Saturday","Saturday","Saturday"]}},"id":"6a25433c-8b9d-4a19-8435-a436efcf33cd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ab3c2b67-1a06-4e29-bbb5-1d6bb7ae6817","type":"ColumnDataSource"},"glyph":{"id":"1c273edb-897b-4833-8b1e-3a5b3a5d2937","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1906cc0b-4dc5-4677-8abf-138434ce5e97","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.2,4.529411764705882,4.75,5.578947368421052,3.6,3.625,3.7,4.176470588235294,5.909090909090909],"x":[15,7,7,17,7,12,12,12,17],"y":["Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"401b1324-eae1-433f-ad0d-a841da5494ec","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.235294117647059,8.8,8.55,8.25,7.178571428571429,9.976190476190476,9.933333333333334,9.414634146341463,8.105263157894736,9.290322580645162,8.555555555555555,8.584415584415584,9.166666666666666,8.728571428571428,7.575757575757576,7.0,9.86111111111111,8.069444444444445],"x":[6,12,13,17,6,13,6,13,17,6,7,16,7,16,6,12,13,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"509d4884-ced6-45a4-98f1-d52c96ecd151","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"90dce45c-f595-4bfe-b46c-014d2bdfec31","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[1.1666666666666667,0.0,2.8275862068965516,2.6666666666666665,2.0,3.142857142857143,0.0,0.0,3.3134328358208953,1.125],"x":[7,2,6,12,2,12,2,15,6,8],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Saturday","Saturday"]}},"id":"f2e2739f-3d18-4548-8e96-3b681c5de6ba","type":"ColumnDataSource"},{"attributes":{},"id":"56587149-3d44-4f6f-bcb3-7faafc9d3b5d","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"0fc3d1dd-90de-4a8c-9e3e-884846d95e46","type":"ColumnDataSource"},"glyph":{"id":"e26d0be4-d0e4-4f4f-9f1f-9a2d4a1dfd03","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cbe20232-f2d9-498e-b5b6-c0705fa9868b","type":"GlyphRenderer"},{"attributes":{},"id":"2a94a9b9-da87-43f7-9ddb-57cff68cd195","type":"CategoricalTickFormatter"},{"attributes":{},"id":"04de5865-a3b2-45c6-acbe-e451635f427a","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2e2f5e5a-05b0-409a-9c76-537c93dea579","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7af95c4-c099-42db-bf92-c5de786ac18f","type":"Rect"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"958d2146-eaba-453e-81a9-8c2d584d5da4","type":"Title"},{"attributes":{"data_source":{"id":"401b1324-eae1-433f-ad0d-a841da5494ec","type":"ColumnDataSource"},"glyph":{"id":"2d8ba6b5-de7f-4b86-96a4-934645fd5cc3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ff771916-c7d2-42f3-a6ce-4b91e9d1f45c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"}},"id":"0e9407a9-b4b8-43b2-a353-44a2542f006b","type":"ResetTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"5842f841-3f5f-4cf7-bfb5-f7c9ee9c53a2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bc830d9e-200a-44b5-8313-32e5b9476c16","subtype":"Chart","type":"Plot"},"ticker":{"id":"56587149-3d44-4f6f-bcb3-7faafc9d3b5d","type":"CategoricalTicker"}},"id":"d80622e9-5056-427a-80e4-6fd26cceeac1","type":"CategoricalAxis"},{"attributes":{},"id":"6b60abed-5d0f-4bca-9ed2-d33c2be5568d","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a29ad9e-466c-4ea7-b0a8-6848192442f2","type":"Rect"},{"attributes":{"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"677b4f39-72d5-4276-89b3-7e371cc2ad7c","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.235294117647059,8.8,8.55,8.25,7.178571428571429,9.976190476190476,9.933333333333334,9.414634146341463,8.105263157894736,9.290322580645162,8.555555555555555,8.584415584415584,9.166666666666666,8.728571428571428,7.575757575757576,7.0,9.86111111111111,8.069444444444445],"x":[6,12,13,17,6,13,6,13,17,6,7,16,7,16,6,12,13,16],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday","Sunday"]}},"id":"a894895f-98cb-4f4a-a5d9-c0f3c9e41301","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"ff75a363-3f50-4b7c-b904-171a376fcb73","type":"Panel"},{"id":"14d8cc93-2e73-470b-af53-9be932e48c3b","type":"Panel"}]},"id":"8b719228-b67f-4fb5-8427-7599337bbd85","type":"Tabs"},{"attributes":{"plot":{"id":"dc1ca61c-1b37-4189-a910-ca3682e5f435","subtype":"Chart","type":"Plot"}},"id":"42b12821-bd61-42be-b8a7-d89bd105e853","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,30.0],"x":[15,1,2],"y":["Thursday","Saturday","Saturday"]}},"id":"0fc3d1dd-90de-4a8c-9e3e-884846d95e46","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"2f2e59b3-806f-466b-a158-7996a1b04687","type":"LinearColorMapper"}],"root_ids":["8b719228-b67f-4fb5-8427-7599337bbd85"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"77ca2e38-70a1-47e8-8ae8-194154f0927c","elementid":"7641f13d-6d88-471a-9dcf-0ff4e4b5a08e","modelid":"8b719228-b67f-4fb5-8427-7599337bbd85"}];
                  
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
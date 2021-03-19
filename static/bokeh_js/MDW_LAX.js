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
      };var element = document.getElementById("fa045b46-6979-4dad-bef3-13017a106488");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa045b46-6979-4dad-bef3-13017a106488' but no matching script tag was found. ")
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
                  var docs_json = {"9169b8e8-e7c8-4774-9de3-f19e5eb6acf2":{"roots":{"references":[{"attributes":{"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"fcb6c173-12db-4b8a-b5a1-1a275c7b6c69","type":"HelpTool"},{"attributes":{"data_source":{"id":"84d7ce39-6e26-426d-a782-64398d96a755","type":"ColumnDataSource"},"glyph":{"id":"d99c1057-8f94-4057-98ff-e98c5aa70d02","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"03908e7a-35b7-4ff1-a43d-58fa66f332d9","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ca70babb-fcbc-4d71-bff3-73886939f6be","type":"ColumnDataSource"},"glyph":{"id":"94162233-9467-4982-ad1b-3cc46dbb267d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8bafa630-9eb1-4a49-bf2f-a0f2c00d1a86","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"747ad01e-680c-4ad0-992f-90a6ef747f16","type":"ColumnDataSource"},"glyph":{"id":"5e88b6e1-7ab1-4886-b481-40ef4fdda2ef","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ebfa2fb2-bc5c-4a3e-b719-2c6babe71648","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"cbcc7dc4-e5d6-446d-a77b-4a40a52e48f0","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cad779d-7a25-40bc-a28a-ba0f9b58df17","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]","(4.5, 7.7]"],"chart_index":[{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"},{"POS_ARR_DELAY":"(4.5, 7.7]"}],"values":[4.775,6.428571428571429,7.282608695652174,4.65,6.342105263157895,5.256410256410256,5.573770491803279,6.341463414634147,6.6923076923076925],"x":[6,7,11,6,13,7,8,13,18],"y":["Tuesday","Tuesday","Wednesday","Thursday","Thursday","Sunday","Sunday","Sunday","Sunday"]}},"id":"30a369df-8b38-4b5a-a578-3625a50260f1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]","(17.3, 20.5]"],"chart_index":[{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"},{"POS_ARR_DELAY":"(17.3, 20.5]"}],"values":[19.986301369863014,17.426666666666666,18.285714285714285,20.37837837837838,20.42222222222222,20.235294117647058,17.714285714285715,18.112676056338028,19.88235294117647,20.21917808219178,18.23076923076923,18.574468085106382,19.74436090225564],"x":[14,17,10,17,12,17,18,17,10,18,20,16,19],"y":["Monday","Monday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"3d849548-6de9-4e21-aa8c-4c01578ab3fb","type":"ColumnDataSource"},{"attributes":{},"id":"38baa59c-f480-4edd-a341-1da0f27d3213","type":"BasicTicker"},{"attributes":{},"id":"200dac1e-7382-4c12-82a7-3fa77eebb6fa","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"486c4954-80dd-404d-a6fb-a79707a864f6","type":"Title"},{"attributes":{"data_source":{"id":"e2c1089f-1e9b-4afd-b2f0-93b154bb7e08","type":"ColumnDataSource"},"glyph":{"id":"4350bb59-6694-4d88-b6fe-1773f383e6ec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"89d588f2-7452-42d3-bb25-ee458c97629f","type":"GlyphRenderer"},{"attributes":{},"id":"77386de4-80b0-44d1-aa8b-4280003144cd","type":"ToolEvents"},{"attributes":{"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"70e137b6-0eab-4717-a0c5-148050ee9025","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0c1c495-26f3-45c5-b13a-bf26f0877f4b","type":"Rect"},{"attributes":{},"id":"e65ff3b4-769e-4713-b45b-54357994503a","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e88b6e1-7ab1-4886-b481-40ef4fdda2ef","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]","(10.9, 14.09]"],"chart_index":[{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"},{"POS_ARR_DELAY":"(10.9, 14.09]"}],"values":[12.097560975609756,12.357142857142858,13.73469387755102,13.666666666666666,13.606060606060606,11.695652173913043,13.7,12.666666666666666,11.558823529411764,12.555555555555555,11.48936170212766,12.878048780487806,14.056338028169014,12.482758620689655,13.351851851851851,12.97872340425532,12.8],"x":[13,18,12,22,7,8,9,18,7,11,12,13,8,11,13,12,20],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"80117f4e-8a99-4898-9a3a-84688a2b0682","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7ff8bfbe-b06e-4acf-8308-966c43ef7c3f","type":"ColumnDataSource"},"glyph":{"id":"441f7df2-6ac4-48b7-9c2a-91d07bbe82a1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2daa90e8-0925-4348-8b01-c9a704fa103e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"7f221cec-9c31-499e-90e6-717d9c5b852c","type":"ColumnDataSource"},"glyph":{"id":"02eb6bdc-29ee-41ce-88f3-752608837176","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7e29ab01-6088-4e6b-bd02-966ba9bfbbf3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.6, 26.8]","(23.6, 26.8]","(23.6, 26.8]","(23.6, 26.8]"],"chart_index":[{"POS_ARR_DELAY":"(23.6, 26.8]"},{"POS_ARR_DELAY":"(23.6, 26.8]"},{"POS_ARR_DELAY":"(23.6, 26.8]"},{"POS_ARR_DELAY":"(23.6, 26.8]"}],"values":[26.23404255319149,25.61111111111111,24.73076923076923,25.727272727272727],"x":[12,20,15,17],"y":["Wednesday","Wednesday","Friday","Saturday"]}},"id":"e2c1089f-1e9b-4afd-b2f0-93b154bb7e08","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d99c1057-8f94-4057-98ff-e98c5aa70d02","type":"Rect"},{"attributes":{"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"a32cb3c8-49ac-40a0-929a-22d2085eb5b0","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"bdcd872b-1299-4c20-8157-b368320c0b05","type":"FactorRange"},{"attributes":{"callback":null,"end":23},"id":"b1580060-f14b-4fc0-ac4a-1696ab2ba0a9","type":"Range1d"},{"attributes":{},"id":"cfbdb166-6fd7-41fc-82d5-c7bebdd0279c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"2c124e0c-f0e5-418b-b9af-a12aebe893b0","type":"BoxAnnotation"},"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"0be74ccf-d54a-4f92-b158-d3d43828177e","type":"BoxZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"e4062503-fa93-4eb9-9579-c2f012e85378","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"},"ticker":{"id":"e65ff3b4-769e-4713-b45b-54357994503a","type":"CategoricalTicker"}},"id":"fc5f5192-07f4-4c8e-9e76-6050c83f4347","type":"CategoricalAxis"},{"attributes":{},"id":"0d649162-0c31-4656-96ea-2dfa7546450b","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"02eb6bdc-29ee-41ce-88f3-752608837176","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"b626f1f0-8a45-495a-afab-e82f5f0b4c3d","type":"Panel"}]},"id":"4479e9c9-3d01-4dd2-9bb9-d307c026d5c2","type":"Tabs"},{"attributes":{"data_source":{"id":"80117f4e-8a99-4898-9a3a-84688a2b0682","type":"ColumnDataSource"},"glyph":{"id":"7cad779d-7a25-40bc-a28a-ba0f9b58df17","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"25896fc4-7146-4067-ae34-124c159801f6","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"200dac1e-7382-4c12-82a7-3fa77eebb6fa","type":"BasicTickFormatter"},"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"},"ticker":{"id":"cfbdb166-6fd7-41fc-82d5-c7bebdd0279c","type":"BasicTicker"}},"id":"08fd37c1-797b-4922-988b-b5a6c4c1bfd0","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]","(7.7, 10.9]"],"chart_index":[{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"},{"POS_ARR_DELAY":"(7.7, 10.9]"}],"values":[8.944444444444445,10.108695652173912,8.88888888888889,9.942528735632184,9.6,9.241758241758241,9.435897435897436,8.857142857142858,10.095238095238095,8.210526315789474,10.78014184397163,8.411764705882353,9.166666666666666,10.066666666666666,9.970149253731343,10.764044943820224,9.844827586206897,9.025641025641026,10.883333333333333,8.786666666666667,10.380952380952381,9.30952380952381],"x":[7,8,9,11,9,11,13,18,10,13,8,20,21,7,8,11,6,9,12,16,10,11],"y":["Monday","Monday","Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday"]}},"id":"7f221cec-9c31-499e-90e6-717d9c5b852c","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fb26d2e-488c-4b30-9ac2-824c65ce97e4","type":"Rect"},{"attributes":{"data_source":{"id":"3d849548-6de9-4e21-aa8c-4c01578ab3fb","type":"ColumnDataSource"},"glyph":{"id":"c0c1c495-26f3-45c5-b13a-bf26f0877f4b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5fd06de9-2808-4e61-8894-113a2ea488f2","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"441f7df2-6ac4-48b7-9c2a-91d07bbe82a1","type":"Rect"},{"attributes":{},"id":"e4062503-fa93-4eb9-9579-c2f012e85378","type":"CategoricalTickFormatter"},{"attributes":{"color_mapper":{"id":"b1ba52e6-6a5f-4124-9dd2-93925e2d7b79","type":"LinearColorMapper"},"formatter":{"id":"0d649162-0c31-4656-96ea-2dfa7546450b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"},"ticker":{"id":"38baa59c-f480-4edd-a341-1da0f27d3213","type":"BasicTicker"}},"id":"80813541-1429-4bef-9382-41574199c900","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]","(20.5, 23.6]"],"chart_index":[{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"},{"POS_ARR_DELAY":"(20.5, 23.6]"}],"values":[22.933823529411764,22.714285714285715,21.82758620689655,22.02173913043478,20.784172661870503,22.041095890410958,22.638297872340427,22.34246575342466,21.642857142857142,23.51063829787234,20.676923076923078,23.4,23.442307692307693,20.533333333333335],"x":[19,21,15,16,19,14,16,14,15,16,19,21,15,21],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"7ff8bfbe-b06e-4acf-8308-966c43ef7c3f","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"08fd37c1-797b-4922-988b-b5a6c4c1bfd0","type":"LinearAxis"}],"left":[{"id":"fc5f5192-07f4-4c8e-9e76-6050c83f4347","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"2c124e0c-f0e5-418b-b9af-a12aebe893b0","type":"BoxAnnotation"},{"id":"8bafa630-9eb1-4a49-bf2f-a0f2c00d1a86","type":"GlyphRenderer"},{"id":"89d588f2-7452-42d3-bb25-ee458c97629f","type":"GlyphRenderer"},{"id":"2daa90e8-0925-4348-8b01-c9a704fa103e","type":"GlyphRenderer"},{"id":"5fd06de9-2808-4e61-8894-113a2ea488f2","type":"GlyphRenderer"},{"id":"03908e7a-35b7-4ff1-a43d-58fa66f332d9","type":"GlyphRenderer"},{"id":"25896fc4-7146-4067-ae34-124c159801f6","type":"GlyphRenderer"},{"id":"7e29ab01-6088-4e6b-bd02-966ba9bfbbf3","type":"GlyphRenderer"},{"id":"3de5c229-ab65-494c-a3f8-997f8cb34a1d","type":"GlyphRenderer"},{"id":"ebfa2fb2-bc5c-4a3e-b719-2c6babe71648","type":"GlyphRenderer"},{"id":"08fd37c1-797b-4922-988b-b5a6c4c1bfd0","type":"LinearAxis"},{"id":"fc5f5192-07f4-4c8e-9e76-6050c83f4347","type":"CategoricalAxis"},{"id":"80813541-1429-4bef-9382-41574199c900","type":"ColorBar"}],"right":[{"id":"80813541-1429-4bef-9382-41574199c900","type":"ColorBar"}],"title":{"id":"486c4954-80dd-404d-a6fb-a79707a864f6","type":"Title"},"tool_events":{"id":"77386de4-80b0-44d1-aa8b-4280003144cd","type":"ToolEvents"},"toolbar":{"id":"f284df53-aeeb-465f-81d2-17e0517c3e21","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b1580060-f14b-4fc0-ac4a-1696ab2ba0a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"bdcd872b-1299-4c20-8157-b368320c0b05","type":"FactorRange"}},"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70e137b6-0eab-4717-a0c5-148050ee9025","type":"PanTool"},{"id":"cbcc7dc4-e5d6-446d-a77b-4a40a52e48f0","type":"WheelZoomTool"},{"id":"0be74ccf-d54a-4f92-b158-d3d43828177e","type":"BoxZoomTool"},{"id":"08c8fd49-97bb-4148-a5d2-e6b3b9376dd0","type":"SaveTool"},{"id":"a32cb3c8-49ac-40a0-929a-22d2085eb5b0","type":"ResetTool"},{"id":"fcb6c173-12db-4b8a-b5a1-1a275c7b6c69","type":"HelpTool"}]},"id":"f284df53-aeeb-465f-81d2-17e0517c3e21","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]","[1.3, 4.5]"],"chart_index":[{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"},{"POS_ARR_DELAY":"[1.3, 4.5]"}],"values":[1.4,4.533333333333333,2.619047619047619,3.449275362318841,2.763888888888889,3.5,3.859154929577465,1.3636363636363635,4.527777777777778,3.8536585365853657,3.619047619047619,4.0625,3.5925925925925926,2.0,2.6],"x":[5,6,10,5,5,6,5,10,5,6,10,7,5,6,9],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Sunday","Sunday","Sunday"]}},"id":"747ad01e-680c-4ad0-992f-90a6ef747f16","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"94162233-9467-4982-ad1b-3cc46dbb267d","type":"Rect"},{"attributes":{"child":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"b626f1f0-8a45-495a-afab-e82f5f0b4c3d","type":"Panel"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b1ba52e6-6a5f-4124-9dd2-93925e2d7b79","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4350bb59-6694-4d88-b6fe-1773f383e6ec","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]","(26.8, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"},{"POS_ARR_DELAY":"(26.8, 30]"}],"values":[30.0,30.0,30.0,26.875,27.71014492753623,30.0,30.0,30.0,30.0,30.0,30.0,27.642857142857142,30.0],"x":[16,20,22,20,19,22,9,22,18,22,22,15,22],"y":["Monday","Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"ca70babb-fcbc-4d71-bff3-73886939f6be","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"30a369df-8b38-4b5a-a578-3625a50260f1","type":"ColumnDataSource"},"glyph":{"id":"5fb26d2e-488c-4b30-9ac2-824c65ce97e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3de5c229-ab65-494c-a3f8-997f8cb34a1d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c124e0c-f0e5-418b-b9af-a12aebe893b0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"c8ac8b54-dc01-4165-a7a4-8a0abfd02ce8","subtype":"Chart","type":"Plot"}},"id":"08c8fd49-97bb-4148-a5d2-e6b3b9376dd0","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]","(14.09, 17.3]"],"chart_index":[{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"},{"POS_ARR_DELAY":"(14.09, 17.3]"}],"values":[15.98,17.133333333333333,14.503597122302159,15.202702702702704,16.613333333333333,16.125,15.7,17.25,14.4,15.305555555555555,15.75,15.661654135338345,17.176470588235293,17.0,14.653061224489797,15.31081081081081,14.733333333333333],"x":[12,15,8,14,17,21,15,21,9,14,16,19,20,14,19,14,17],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Friday","Friday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"84d7ce39-6e26-426d-a782-64398d96a755","type":"ColumnDataSource"}],"root_ids":["4479e9c9-3d01-4dd2-9bb9-d307c026d5c2"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"9169b8e8-e7c8-4774-9de3-f19e5eb6acf2","elementid":"fa045b46-6979-4dad-bef3-13017a106488","modelid":"4479e9c9-3d01-4dd2-9bb9-d307c026d5c2"}];
                  
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
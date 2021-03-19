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
      };var element = document.getElementById("e1d4207a-9b83-4a2a-b653-69cd2b3740d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1d4207a-9b83-4a2a-b653-69cd2b3740d6' but no matching script tag was found. ")
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
                  var docs_json = {"0d644da9-1ced-4f10-bf28-01e38c473a7d":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a920a082-456d-4050-ad5d-7a2e3cc3b83f","type":"PanTool"},{"id":"8ac0d066-fc0b-487f-a929-90f62836cc52","type":"WheelZoomTool"},{"id":"a0b9d4b2-e115-4d77-b01b-8d6f807183c7","type":"BoxZoomTool"},{"id":"acaba85e-1f63-4ea4-a739-9279f0d4ed67","type":"SaveTool"},{"id":"52ceaa59-2332-4ab2-8c60-f47cfb91f3c3","type":"ResetTool"},{"id":"28686b37-f1bb-4062-8065-265d59901542","type":"HelpTool"}]},"id":"87b258c4-6d85-4308-aea6-762e475ef56d","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.4, 2.9]"],"chart_index":[{"POS_ARR_DELAY":"(1.4, 2.9]"}],"values":[2.3225806451612905],"x":[17],"y":["Saturday"]}},"id":"797f008a-9946-4a23-afb9-83c8f658dfd9","type":"ColumnDataSource"},{"attributes":{},"id":"c2922d2c-bcd8-4b4c-9437-97ac4f5509a6","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.6, 10.007]","(8.6, 10.007]","(8.6, 10.007]"],"chart_index":[{"POS_ARR_DELAY":"(8.6, 10.007]"},{"POS_ARR_DELAY":"(8.6, 10.007]"},{"POS_ARR_DELAY":"(8.6, 10.007]"}],"values":[8.666666666666666,9.588235294117647,9.838709677419354],"x":[17,18,17],"y":["Monday","Monday","Friday"]}},"id":"3f2dac26-5de7-4f13-baba-a892d45ac830","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"}],"values":[0.0,0.0,0.0,0.0,0.0],"x":[16,16,16,16,16],"y":["Monday","Wednesday","Thursday","Friday","Sunday"]}},"id":"fb660b8f-d9f8-437d-89c5-91c6b6e96dae","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(1.4, 2.9]"],"chart_index":[{"POS_ARR_DELAY":"(1.4, 2.9]"}],"values":[2.3225806451612905],"x":[17],"y":["Saturday"]}},"id":"262908f9-92df-46c6-81bb-94c3e1e2ea64","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b6ae275-31c6-437c-a513-5419616c26f7","type":"Rect"},{"attributes":{"data_source":{"id":"e6c405f9-7b99-4d1e-8af1-647b1ea658ab","type":"ColumnDataSource"},"glyph":{"id":"9ecebeb3-91fa-4e3a-920f-4cf1c059e072","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6d378291-9f65-4113-a7d0-6817fc203c14","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a3486d4a-bbca-4bba-8235-0182a8039c62","type":"LinearColorMapper"},{"attributes":{},"id":"2125a462-0833-4e3b-925f-877bd5caf9aa","type":"BasicTicker"},{"attributes":{},"id":"3fa846ae-ccbe-492f-9396-43a94ad1ed96","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"c57f2de0-fb87-43d4-8764-a53622079724","type":"Panel"},{"attributes":{"data_source":{"id":"0ab0c4c0-1fda-4884-b801-8795618f56e9","type":"ColumnDataSource"},"glyph":{"id":"2549105d-52e9-4c2d-b404-5d0460017f6f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1800b9d9-945f-4fa9-b1a6-89bbfc762a8e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"a920a082-456d-4050-ad5d-7a2e3cc3b83f","type":"PanTool"},{"attributes":{},"id":"25c1ec92-fb09-47a6-ace0-64b4fa3bc108","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"0adee1a4-0250-4fc3-8941-8fe49db0bf5f","type":"LinearAxis"}],"left":[{"id":"f5876e35-b04e-44c9-9702-a3125267b2ed","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"301d62a4-0969-4260-8cb3-d2ec9ab2164f","type":"BoxAnnotation"},{"id":"ad72a46a-f519-4517-8068-fca8523319b6","type":"GlyphRenderer"},{"id":"069c5dca-0ab8-4873-bde3-b57848b33058","type":"GlyphRenderer"},{"id":"6d378291-9f65-4113-a7d0-6817fc203c14","type":"GlyphRenderer"},{"id":"1800b9d9-945f-4fa9-b1a6-89bbfc762a8e","type":"GlyphRenderer"},{"id":"3edd9c43-b179-40b4-a02c-03252f4442e9","type":"GlyphRenderer"},{"id":"9031c9ac-e82f-46b2-a1dc-65bb9394821a","type":"GlyphRenderer"},{"id":"1b05618c-c03d-4d93-bd33-6e3da4c074d5","type":"GlyphRenderer"},{"id":"0adee1a4-0250-4fc3-8941-8fe49db0bf5f","type":"LinearAxis"},{"id":"f5876e35-b04e-44c9-9702-a3125267b2ed","type":"CategoricalAxis"},{"id":"ec7e367b-66bf-4117-82d3-4885dd446500","type":"ColorBar"}],"right":[{"id":"ec7e367b-66bf-4117-82d3-4885dd446500","type":"ColorBar"}],"title":{"id":"fc9a5fbc-ca99-48db-b578-273b89805456","type":"Title"},"tool_events":{"id":"956400db-8afa-4073-81aa-d97c5da1b4a8","type":"ToolEvents"},"toolbar":{"id":"ae0aea2c-cc40-4cb5-a38a-a7f462bb254a","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"77a9422e-57e4-4f5f-a2c2-fdbb250ad805","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"cc04f686-3701-43d0-adda-092226fcc8c7","type":"FactorRange"}},"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"eb8e2f1b-c360-4752-aa10-ac4c8255e5e1","type":"Title"},{"attributes":{"data_source":{"id":"98a77a7e-d36c-4764-b2df-284b7155af89","type":"ColumnDataSource"},"glyph":{"id":"1b6ae275-31c6-437c-a513-5419616c26f7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"069c5dca-0ab8-4873-bde3-b57848b33058","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"34038bb5-5819-4b01-b428-eceea4222d14","type":"Rect"},{"attributes":{"data_source":{"id":"262908f9-92df-46c6-81bb-94c3e1e2ea64","type":"ColumnDataSource"},"glyph":{"id":"787884e4-1609-4007-b14a-0931effd0431","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68291c7f-73e9-4c32-bf42-4327aa2fe691","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb606535-024e-4e54-8818-2e5be1d55dc1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"787884e4-1609-4007-b14a-0931effd0431","type":"Rect"},{"attributes":{"data_source":{"id":"fb660b8f-d9f8-437d-89c5-91c6b6e96dae","type":"ColumnDataSource"},"glyph":{"id":"b1841428-ebdf-4fbd-9074-0c58a91f023f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2ad05832-132f-4e52-b333-1e4300fcea38","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2ba29d63-84f8-4667-9b48-a886f71b49c2","type":"ColumnDataSource"},"glyph":{"id":"32654ad4-9c0e-450c-99b6-4adf6b658697","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1b05618c-c03d-4d93-bd33-6e3da4c074d5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"af0bb497-1a61-4d90-a5fa-d7dc5918267f","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.9, 4.3]","(2.9, 4.3]","(2.9, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"(2.9, 4.3]"},{"POS_ARR_DELAY":"(2.9, 4.3]"},{"POS_ARR_DELAY":"(2.9, 4.3]"}],"values":[3.466666666666667,4.0,3.176470588235294],"x":[17,16,18],"y":["Tuesday","Saturday","Saturday"]}},"id":"ed96e5af-e2fa-4322-b964-cdf637bff8bd","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 5.7]","(4.3, 5.7]","(4.3, 5.7]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 5.7]"},{"POS_ARR_DELAY":"(4.3, 5.7]"},{"POS_ARR_DELAY":"(4.3, 5.7]"}],"values":[5.686046511627907,5.0,4.8],"x":[18,17,17],"y":["Tuesday","Wednesday","Sunday"]}},"id":"d0488346-cc7e-47bb-bed5-514dcfbc0709","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"8ac0d066-fc0b-487f-a929-90f62836cc52","type":"WheelZoomTool"},{"attributes":{},"id":"564c9369-0500-4544-b374-ef9b0193c5b0","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"891c2cbd-ccb3-46bb-830c-8f50d4ac015b","type":"HelpTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a9fb4cce-b6e1-42ee-917e-6199f741ec7c","type":"FactorRange"},{"attributes":{},"id":"cb09acd8-f4e8-4ec4-89fd-f488a4a476f3","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"056060c3-ace3-480d-ba79-2b1a3293aa86","type":"Rect"},{"attributes":{},"id":"dd0d8d3b-dd6c-4feb-bde5-060862fc1078","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.4, 12.9]"],"chart_index":[{"POS_ARR_DELAY":"(11.4, 12.9]"}],"values":[12.866666666666667],"x":[17],"y":["Thursday"]}},"id":"2a5d0617-e43d-41d2-a8f8-c609626cd560","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.7, 7.1]","(5.7, 7.1]","(5.7, 7.1]","(5.7, 7.1]"],"chart_index":[{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"}],"values":[7.070588235294117,6.506024096385542,6.670588235294118,6.105882352941176],"x":[18,18,18,18],"y":["Wednesday","Thursday","Friday","Sunday"]}},"id":"e6c405f9-7b99-4d1e-8af1-647b1ea658ab","type":"ColumnDataSource"},{"attributes":{},"id":"a0cf9d5e-4bdb-4b0c-8b1f-01daf0b80837","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"260201a8-ee6e-49b3-a158-2640b6e014c4","type":"Rect"},{"attributes":{"data_source":{"id":"ed96e5af-e2fa-4322-b964-cdf637bff8bd","type":"ColumnDataSource"},"glyph":{"id":"260201a8-ee6e-49b3-a158-2640b6e014c4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3edd9c43-b179-40b4-a02c-03252f4442e9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"28686b37-f1bb-4062-8065-265d59901542","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b35917d2-1c10-4c1d-9b6a-f395b3760126","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"2a5d0617-e43d-41d2-a8f8-c609626cd560","type":"ColumnDataSource"},"glyph":{"id":"e1bf1e2e-7763-4b5c-b22b-9969a22fa90c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ad72a46a-f519-4517-8068-fca8523319b6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"3f2dac26-5de7-4f13-baba-a892d45ac830","type":"ColumnDataSource"},"glyph":{"id":"34038bb5-5819-4b01-b428-eceea4222d14","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d771b60b-fc7a-43b1-b00a-7cfb9a0b998c","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"af0bb497-1a61-4d90-a5fa-d7dc5918267f","type":"PanTool"},{"id":"4f0570e0-4d75-486d-bf74-5bcfa51270e1","type":"WheelZoomTool"},{"id":"d7201554-2d85-4b5a-9682-2978b28af388","type":"BoxZoomTool"},{"id":"1dcf2945-43d0-4437-9997-da26fedf44b8","type":"SaveTool"},{"id":"62049492-8057-4553-bceb-645d3b31be06","type":"ResetTool"},{"id":"891c2cbd-ccb3-46bb-830c-8f50d4ac015b","type":"HelpTool"}]},"id":"ae0aea2c-cc40-4cb5-a38a-a7f462bb254a","type":"Toolbar"},{"attributes":{},"id":"3b7990fc-5db3-4f0e-a4ad-49bb2ccfc16e","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e1bf1e2e-7763-4b5c-b22b-9969a22fa90c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 5.7]","(4.3, 5.7]","(4.3, 5.7]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 5.7]"},{"POS_ARR_DELAY":"(4.3, 5.7]"},{"POS_ARR_DELAY":"(4.3, 5.7]"}],"values":[5.686046511627907,5.0,4.8],"x":[18,17,17],"y":["Tuesday","Wednesday","Sunday"]}},"id":"0ab0c4c0-1fda-4884-b801-8795618f56e9","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"9252d1e3-1925-407e-841a-80b355797656","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"c2922d2c-bcd8-4b4c-9437-97ac4f5509a6","type":"CategoricalTicker"}},"id":"f5876e35-b04e-44c9-9702-a3125267b2ed","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"301d62a4-0969-4260-8cb3-d2ec9ab2164f","type":"BoxAnnotation"},"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"d7201554-2d85-4b5a-9682-2978b28af388","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a117ce2-ed43-4083-8b62-780726baa970","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"77a9422e-57e4-4f5f-a2c2-fdbb250ad805","type":"Range1d"},{"attributes":{"plot":null,"text":"Alaska Airlines "},"id":"fc9a5fbc-ca99-48db-b578-273b89805456","type":"Title"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"cc04f686-3701-43d0-adda-092226fcc8c7","type":"FactorRange"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f5879953-d406-4579-8564-b69c646a7c52","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"08516f02-f493-4fe8-aac4-7935e2a21a8d","type":"ColumnDataSource"},"glyph":{"id":"8a117ce2-ed43-4083-8b62-780726baa970","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"20e8121b-5e2a-4a51-956d-e79827a91433","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d041da49-967f-40ae-867b-def4a6010f83","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.9, 4.3]","(2.9, 4.3]","(2.9, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"(2.9, 4.3]"},{"POS_ARR_DELAY":"(2.9, 4.3]"},{"POS_ARR_DELAY":"(2.9, 4.3]"}],"values":[3.466666666666667,4.0,3.176470588235294],"x":[17,16,18],"y":["Tuesday","Saturday","Saturday"]}},"id":"1ab05d0c-34bf-49d9-905d-bfcbc37de1f7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.6, 10.007]","(8.6, 10.007]","(8.6, 10.007]"],"chart_index":[{"POS_ARR_DELAY":"(8.6, 10.007]"},{"POS_ARR_DELAY":"(8.6, 10.007]"},{"POS_ARR_DELAY":"(8.6, 10.007]"}],"values":[8.666666666666666,9.588235294117647,9.838709677419354],"x":[17,18,17],"y":["Monday","Monday","Friday"]}},"id":"98a77a7e-d36c-4764-b2df-284b7155af89","type":"ColumnDataSource"},{"attributes":{},"id":"9252d1e3-1925-407e-841a-80b355797656","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"c57f2de0-fb87-43d4-8764-a53622079724","type":"Panel"},{"id":"6bd3700e-b9e3-4b4c-af07-66779e884324","type":"Panel"}]},"id":"d5fb33aa-8388-4de1-88cc-983aed971368","type":"Tabs"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"301d62a4-0969-4260-8cb3-d2ec9ab2164f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]","[-0.01, 1.4]"],"chart_index":[{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"},{"POS_ARR_DELAY":"[-0.01, 1.4]"}],"values":[0.0,0.0,0.0,0.0,0.0],"x":[16,16,16,16,16],"y":["Monday","Wednesday","Thursday","Friday","Sunday"]}},"id":"2ba29d63-84f8-4667-9b48-a886f71b49c2","type":"ColumnDataSource"},{"attributes":{},"id":"4b7db706-d319-452c-bc03-69cf6a6ed932","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"32654ad4-9c0e-450c-99b6-4adf6b658697","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"4b1323b5-0673-4f7d-87d3-411c2cadc571","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.7, 7.1]","(5.7, 7.1]","(5.7, 7.1]","(5.7, 7.1]"],"chart_index":[{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"},{"POS_ARR_DELAY":"(5.7, 7.1]"}],"values":[7.070588235294117,6.506024096385542,6.670588235294118,6.105882352941176],"x":[18,18,18,18],"y":["Wednesday","Thursday","Friday","Sunday"]}},"id":"c79bb92c-ec1b-4f36-b1f5-9b5be0973930","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"f5879953-d406-4579-8564-b69c646a7c52","type":"LinearColorMapper"},"formatter":{"id":"25c1ec92-fb09-47a6-ace0-64b4fa3bc108","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"3b7990fc-5db3-4f0e-a4ad-49bb2ccfc16e","type":"BasicTicker"}},"id":"ec7e367b-66bf-4117-82d3-4885dd446500","type":"ColorBar"},{"attributes":{},"id":"956400db-8afa-4073-81aa-d97c5da1b4a8","type":"ToolEvents"},{"attributes":{"overlay":{"id":"b35917d2-1c10-4c1d-9b6a-f395b3760126","type":"BoxAnnotation"},"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"a0b9d4b2-e115-4d77-b01b-8d6f807183c7","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ecebeb3-91fa-4e3a-920f-4cf1c059e072","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2549105d-52e9-4c2d-b404-5d0460017f6f","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"cb09acd8-f4e8-4ec4-89fd-f488a4a476f3","type":"BasicTickFormatter"},"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"},"ticker":{"id":"1e91d9ea-274a-4bce-b115-dfb8a03e1cfa","type":"BasicTicker"}},"id":"48155bd9-1f05-4b11-96db-cb0979fc06b4","type":"LinearAxis"},{"attributes":{"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"acaba85e-1f63-4ea4-a739-9279f0d4ed67","type":"SaveTool"},{"attributes":{"data_source":{"id":"797f008a-9946-4a23-afb9-83c8f658dfd9","type":"ColumnDataSource"},"glyph":{"id":"458b8782-ae97-4c28-8757-f9431c9eaeb4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9031c9ac-e82f-46b2-a1dc-65bb9394821a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1ab05d0c-34bf-49d9-905d-bfcbc37de1f7","type":"ColumnDataSource"},"glyph":{"id":"fb606535-024e-4e54-8818-2e5be1d55dc1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c0a7904a-96cd-4729-adfe-ebe2bd5b1cd2","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"62049492-8057-4553-bceb-645d3b31be06","type":"ResetTool"},{"attributes":{"data_source":{"id":"d0488346-cc7e-47bb-bed5-514dcfbc0709","type":"ColumnDataSource"},"glyph":{"id":"056060c3-ace3-480d-ba79-2b1a3293aa86","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6deca05b-d1ce-43d2-998c-e7e7f74d038c","type":"GlyphRenderer"},{"attributes":{},"id":"547505e9-87a5-4d48-bf1e-f8c9e5e3b219","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"547505e9-87a5-4d48-bf1e-f8c9e5e3b219","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"},"ticker":{"id":"564c9369-0500-4544-b374-ef9b0193c5b0","type":"CategoricalTicker"}},"id":"be489030-4356-4289-a396-d4fb159ffeee","type":"CategoricalAxis"},{"attributes":{"child":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"},"title":"AS"},"id":"6bd3700e-b9e3-4b4c-af07-66779e884324","type":"Panel"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"a0cf9d5e-4bdb-4b0c-8b1f-01daf0b80837","type":"BasicTickFormatter"},"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"},"ticker":{"id":"2125a462-0833-4e3b-925f-877bd5caf9aa","type":"BasicTicker"}},"id":"0adee1a4-0250-4fc3-8941-8fe49db0bf5f","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"48155bd9-1f05-4b11-96db-cb0979fc06b4","type":"LinearAxis"}],"left":[{"id":"be489030-4356-4289-a396-d4fb159ffeee","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"b35917d2-1c10-4c1d-9b6a-f395b3760126","type":"BoxAnnotation"},{"id":"20e8121b-5e2a-4a51-956d-e79827a91433","type":"GlyphRenderer"},{"id":"d771b60b-fc7a-43b1-b00a-7cfb9a0b998c","type":"GlyphRenderer"},{"id":"f6c831ed-a2bc-492e-b78f-67221629ada6","type":"GlyphRenderer"},{"id":"6deca05b-d1ce-43d2-998c-e7e7f74d038c","type":"GlyphRenderer"},{"id":"c0a7904a-96cd-4729-adfe-ebe2bd5b1cd2","type":"GlyphRenderer"},{"id":"68291c7f-73e9-4c32-bf42-4327aa2fe691","type":"GlyphRenderer"},{"id":"2ad05832-132f-4e52-b333-1e4300fcea38","type":"GlyphRenderer"},{"id":"48155bd9-1f05-4b11-96db-cb0979fc06b4","type":"LinearAxis"},{"id":"be489030-4356-4289-a396-d4fb159ffeee","type":"CategoricalAxis"},{"id":"37fbaee0-e333-4c57-a88f-aa707ef50215","type":"ColorBar"}],"right":[{"id":"37fbaee0-e333-4c57-a88f-aa707ef50215","type":"ColorBar"}],"title":{"id":"eb8e2f1b-c360-4752-aa10-ac4c8255e5e1","type":"Title"},"tool_events":{"id":"dd0d8d3b-dd6c-4feb-bde5-060862fc1078","type":"ToolEvents"},"toolbar":{"id":"87b258c4-6d85-4308-aea6-762e475ef56d","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"4b1323b5-0673-4f7d-87d3-411c2cadc571","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a9fb4cce-b6e1-42ee-917e-6199f741ec7c","type":"FactorRange"}},"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"}},"id":"52ceaa59-2332-4ab2-8c60-f47cfb91f3c3","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"458b8782-ae97-4c28-8757-f9431c9eaeb4","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b1841428-ebdf-4fbd-9074-0c58a91f023f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.4, 12.9]"],"chart_index":[{"POS_ARR_DELAY":"(11.4, 12.9]"}],"values":[12.866666666666667],"x":[17],"y":["Thursday"]}},"id":"08516f02-f493-4fe8-aac4-7935e2a21a8d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"1dcf2945-43d0-4437-9997-da26fedf44b8","type":"SaveTool"},{"attributes":{"data_source":{"id":"c79bb92c-ec1b-4f36-b1f5-9b5be0973930","type":"ColumnDataSource"},"glyph":{"id":"d041da49-967f-40ae-867b-def4a6010f83","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f6c831ed-a2bc-492e-b78f-67221629ada6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0e8bf801-684a-4643-8e04-4566543dd3e9","subtype":"Chart","type":"Plot"}},"id":"4f0570e0-4d75-486d-bf74-5bcfa51270e1","type":"WheelZoomTool"},{"attributes":{},"id":"1e91d9ea-274a-4bce-b115-dfb8a03e1cfa","type":"BasicTicker"},{"attributes":{"color_mapper":{"id":"a3486d4a-bbca-4bba-8235-0182a8039c62","type":"LinearColorMapper"},"formatter":{"id":"3fa846ae-ccbe-492f-9396-43a94ad1ed96","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b4dcf76a-290a-4642-8e83-91799dcc3263","subtype":"Chart","type":"Plot"},"ticker":{"id":"4b7db706-d319-452c-bc03-69cf6a6ed932","type":"BasicTicker"}},"id":"37fbaee0-e333-4c57-a88f-aa707ef50215","type":"ColorBar"}],"root_ids":["d5fb33aa-8388-4de1-88cc-983aed971368"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"0d644da9-1ced-4f10-bf28-01e38c473a7d","elementid":"e1d4207a-9b83-4a2a-b653-69cd2b3740d6","modelid":"d5fb33aa-8388-4de1-88cc-983aed971368"}];
                  
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
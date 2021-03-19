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
      };var element = document.getElementById("8895f4f0-2b0c-40ce-9947-1b8cd25b063f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8895f4f0-2b0c-40ce-9947-1b8cd25b063f' but no matching script tag was found. ")
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
                  var docs_json = {"94789e98-59bb-479d-8346-7732a52a63af":{"roots":{"references":[{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4fb7561-74fc-442a-83b8-7febbb79e120","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,3.142857142857143,0.7777777777777778,0.35294117647058826,0.29411764705882354,3.0,0.2222222222222222,0.7647058823529411,1.0714285714285714,0.1111111111111111,2.9411764705882355,2.4,3.2222222222222223,1.5,1.1111111111111112],"x":[9,8,9,11,8,8,9,11,8,9,11,11,14,8,9,11],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"adb6072b-d434-4096-8668-9f48d067b86f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"839e863f-9e92-499b-818a-fdd192c36336","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9bae9af4-231b-4e5f-9d92-40a9daa5bad1","type":"Rect"},{"attributes":{"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"783d679f-92b5-47c4-864a-d1f54145c5fd","type":"HelpTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e321fa79-8455-43da-acab-6305b63e9362","type":"BasicTickFormatter"},"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"},"ticker":{"id":"03d7ea95-2d10-4630-ad45-9da0cef45187","type":"BasicTicker"}},"id":"3b3505f8-4c6d-467f-acbf-b5653f3557f3","type":"LinearAxis"},{"attributes":{"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"df22b435-2202-47f3-9ed7-35a4a5337ee5","type":"HelpTool"},{"attributes":{"data_source":{"id":"18fd5380-9502-48b7-ad55-e90ebda02f93","type":"ColumnDataSource"},"glyph":{"id":"0b7d5d6e-3ac9-48c4-abb9-24fcbc3dec49","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2da6d83b-48d2-4c6f-ba4c-c0a4bb2a2971","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[9],"y":["Saturday"]}},"id":"47b58dad-6e10-4807-b6b9-a1cbdf1d7455","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5f326b2d-6329-463f-b181-9fc8cdd94aa9","type":"FactorRange"},{"attributes":{"data_source":{"id":"9ad56cad-7f01-4766-b2a3-5f7f5bb4ea86","type":"ColumnDataSource"},"glyph":{"id":"a4fb7561-74fc-442a-83b8-7febbb79e120","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"62cdbeb9-ce00-4ab5-9271-4f3bb7d48970","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"93504fd3-0e7d-4c81-8b6c-6e765832954f","type":"FactorRange"},{"attributes":{"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"2cef04cb-3e0b-4051-90fb-e7ca627d28fa","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"059d8933-b375-4c07-ae4c-128884c1fc18","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,1.0,3.142857142857143,0.7777777777777778,0.35294117647058826,0.29411764705882354,3.0,0.2222222222222222,0.7647058823529411,1.0714285714285714,0.1111111111111111,2.9411764705882355,2.4,3.2222222222222223,1.5,1.1111111111111112],"x":[9,8,9,11,8,8,9,11,8,9,11,11,14,8,9,11],"y":["Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"926e9e47-48a5-4f74-ae06-df0636314a8b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"926e9e47-48a5-4f74-ae06-df0636314a8b","type":"ColumnDataSource"},"glyph":{"id":"f2614876-ca53-470b-aabc-ff02227719d7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"27428e98-54f8-4ae6-88e8-48e79e66f032","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[9],"y":["Saturday"]}},"id":"8977ef61-02c8-49e6-8135-a718f111d578","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3b3505f8-4c6d-467f-acbf-b5653f3557f3","type":"LinearAxis"}],"left":[{"id":"eae2b3bf-e840-4f1e-bb89-c0a80162b080","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"08729298-b411-4b9c-bb97-7c286ada63bd","type":"BoxAnnotation"},{"id":"ae250163-149c-4e78-9b4d-9db3ed3cfa81","type":"GlyphRenderer"},{"id":"46a9f2af-83a3-465c-a84d-c6e0f55c1572","type":"GlyphRenderer"},{"id":"2eb9e553-cfdd-44b1-ad94-aef73915473c","type":"GlyphRenderer"},{"id":"9511aa24-5e13-407b-939e-20a8730619a4","type":"GlyphRenderer"},{"id":"208c8a53-ddda-4116-875b-417a388755b8","type":"GlyphRenderer"},{"id":"27428e98-54f8-4ae6-88e8-48e79e66f032","type":"GlyphRenderer"},{"id":"3b3505f8-4c6d-467f-acbf-b5653f3557f3","type":"LinearAxis"},{"id":"eae2b3bf-e840-4f1e-bb89-c0a80162b080","type":"CategoricalAxis"},{"id":"48ac1712-0bf3-4e19-9d4f-206c60d141eb","type":"ColorBar"}],"right":[{"id":"48ac1712-0bf3-4e19-9d4f-206c60d141eb","type":"ColorBar"}],"title":{"id":"eef9c831-4e06-43c0-ae0e-065c0f034090","type":"Title"},"tool_events":{"id":"cda64c85-9b2e-4646-abe9-83969d3462d8","type":"ToolEvents"},"toolbar":{"id":"9a85b9a9-6da2-4f66-acc8-e98486c11893","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b9b811ed-d65f-4aa0-a4d7-5891ff5dce27","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5f326b2d-6329-463f-b181-9fc8cdd94aa9","type":"FactorRange"}},"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"c5a96d6d-62f7-40f5-b98d-2985ca0ce384","type":"CategoricalTicker"},{"attributes":{"child":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"ff05523b-72b2-4181-b9ed-ff2c8dd2cb3d","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"b9b811ed-d65f-4aa0-a4d7-5891ff5dce27","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"445c595a-7e95-4028-97b9-e07f8ec4a5fd","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.333333333333333,8.666666666666666],"x":[11,12],"y":["Monday","Saturday"]}},"id":"98dd6978-67fb-433c-9b98-47ac44a02315","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"851c1c75-b37d-45fd-9a66-e807317e668e","type":"ColumnDataSource"},"glyph":{"id":"059d8933-b375-4c07-ae4c-128884c1fc18","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4ca90833-8449-4cbe-b39f-6320cad280a5","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b266acbc-58a4-4678-af06-d18817c0479a","type":"LinearColorMapper"},{"attributes":{},"id":"76f78b2d-0408-4151-8bb0-57cdf5bd0a2d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.333333333333333,8.666666666666666],"x":[11,12],"y":["Monday","Saturday"]}},"id":"851c1c75-b37d-45fd-9a66-e807317e668e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"2cffc5d4-8743-451b-9e63-57e80ddcbcc3","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"afe6820a-ca47-4b47-9ae9-a4c958390199","type":"Rect"},{"attributes":{},"id":"d0049472-8052-41b9-b101-81de78de8c0e","type":"BasicTickFormatter"},{"attributes":{},"id":"da1ecb87-7f0d-4426-89ba-bb207de68e8a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2472ee2d-2a1d-44c6-aa52-46c10e7d8bf1","type":"ColumnDataSource"},"glyph":{"id":"445c595a-7e95-4028-97b9-e07f8ec4a5fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"46a9f2af-83a3-465c-a84d-c6e0f55c1572","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bfffe456-a390-4865-b162-f0cabc209ab4","type":"ColumnDataSource"},"glyph":{"id":"ee0a4c5a-1914-4c19-8eff-a1dd1f8e3038","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d0df4a1-b3c7-4e27-af03-64aaddfcd8e6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"0489d1a6-dd38-4d26-babc-904855e87aff","type":"PanTool"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"fe37ebb3-8e92-436d-b006-9285ce6d866b","type":"LinearAxis"}],"left":[{"id":"12c601b1-cb4b-48b6-893e-269a842dde69","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"f21edfe9-2bce-4a87-aef3-d015b11df967","type":"BoxAnnotation"},{"id":"f39526bf-287a-402f-bc02-ba8131ebe12e","type":"GlyphRenderer"},{"id":"2da6d83b-48d2-4c6f-ba4c-c0a4bb2a2971","type":"GlyphRenderer"},{"id":"62cdbeb9-ce00-4ab5-9271-4f3bb7d48970","type":"GlyphRenderer"},{"id":"4ca90833-8449-4cbe-b39f-6320cad280a5","type":"GlyphRenderer"},{"id":"0d0df4a1-b3c7-4e27-af03-64aaddfcd8e6","type":"GlyphRenderer"},{"id":"9cb38c6a-63d6-43aa-bab6-b3b958fa856b","type":"GlyphRenderer"},{"id":"fe37ebb3-8e92-436d-b006-9285ce6d866b","type":"LinearAxis"},{"id":"12c601b1-cb4b-48b6-893e-269a842dde69","type":"CategoricalAxis"},{"id":"c182ffc8-f7e1-40d6-9ce2-4573582da6c6","type":"ColorBar"}],"right":[{"id":"c182ffc8-f7e1-40d6-9ce2-4573582da6c6","type":"ColorBar"}],"title":{"id":"a496e1b6-0fb0-45d3-be36-1b384ebe7b46","type":"Title"},"tool_events":{"id":"5a3675c2-b3a1-4b3d-801a-e608ea956748","type":"ToolEvents"},"toolbar":{"id":"89c4eac7-991f-47e3-a196-f3d9880d7a30","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7feddbcd-de0c-4456-9624-6e83ca711a9d","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"93504fd3-0e7d-4c81-8b6c-6e765832954f","type":"FactorRange"}},"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f2614876-ca53-470b-aabc-ff02227719d7","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0],"x":[7],"y":["Saturday"]}},"id":"93306ba2-3e37-40fa-b8d3-312343fe2fcc","type":"ColumnDataSource"},{"attributes":{},"id":"00b617b2-d729-4ad5-b79a-dcba8a1878e2","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7e0e417c-bc84-49a9-ac4a-94e456282691","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"94bb7fed-356f-49d5-bbb3-4057b76c4e49","type":"CategoricalTicker"}},"id":"12c601b1-cb4b-48b6-893e-269a842dde69","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"e61479f8-7546-4dfc-a573-280f9ef3e473","type":"PanTool"},{"attributes":{"data_source":{"id":"c9009655-5c00-48c2-8647-d113b62fe919","type":"ColumnDataSource"},"glyph":{"id":"fac576ff-fef0-40cc-a044-c2fde3715790","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2eb9e553-cfdd-44b1-ad94-aef73915473c","type":"GlyphRenderer"},{"attributes":{},"id":"ab863ec1-e74c-4bd2-ac5c-a34921c5df84","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"ffd3749d-3ba6-4392-b9f3-51b5a363d276","type":"Panel"},{"attributes":{"data_source":{"id":"98dd6978-67fb-433c-9b98-47ac44a02315","type":"ColumnDataSource"},"glyph":{"id":"aa0168fd-4f36-4053-b68d-38fa4f7c3718","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9511aa24-5e13-407b-939e-20a8730619a4","type":"GlyphRenderer"},{"attributes":{},"id":"cda64c85-9b2e-4646-abe9-83969d3462d8","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f21edfe9-2bce-4a87-aef3-d015b11df967","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b7d5d6e-3ac9-48c4-abb9-24fcbc3dec49","type":"Rect"},{"attributes":{"color_mapper":{"id":"b424b06f-563b-4630-be8e-9a148b96bb0d","type":"LinearColorMapper"},"formatter":{"id":"ab863ec1-e74c-4bd2-ac5c-a34921c5df84","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"},"ticker":{"id":"76f78b2d-0408-4151-8bb0-57cdf5bd0a2d","type":"BasicTicker"}},"id":"48ac1712-0bf3-4e19-9d4f-206c60d141eb","type":"ColorBar"},{"attributes":{"callback":null,"tabs":[{"id":"ffd3749d-3ba6-4392-b9f3-51b5a363d276","type":"Panel"},{"id":"ff05523b-72b2-4181-b9ed-ff2c8dd2cb3d","type":"Panel"}]},"id":"efe19b80-3574-40c9-9d03-14eb14f810a9","type":"Tabs"},{"attributes":{"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"b8562444-760d-4eb6-aa06-9eebd9b6f7f9","type":"ResetTool"},{"attributes":{},"id":"09d5f8c4-7b44-406f-a4da-2afddd69e5c1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0489d1a6-dd38-4d26-babc-904855e87aff","type":"PanTool"},{"id":"860973b8-dfe4-4e2a-8baf-e8c2aad4088a","type":"WheelZoomTool"},{"id":"85f87c5c-6370-4f58-ada3-8ddbd2614f2e","type":"BoxZoomTool"},{"id":"2cffc5d4-8743-451b-9e63-57e80ddcbcc3","type":"SaveTool"},{"id":"b4ba80a7-6a77-4199-aa1f-dd0ee9c0b467","type":"ResetTool"},{"id":"df22b435-2202-47f3-9ed7-35a4a5337ee5","type":"HelpTool"}]},"id":"9a85b9a9-6da2-4f66-acc8-e98486c11893","type":"Toolbar"},{"attributes":{},"id":"9745a383-3887-46f3-8128-c5061a4f363f","type":"BasicTicker"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"00b617b2-d729-4ad5-b79a-dcba8a1878e2","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"},"ticker":{"id":"c5a96d6d-62f7-40f5-b98d-2985ca0ce384","type":"CategoricalTicker"}},"id":"eae2b3bf-e840-4f1e-bb89-c0a80162b080","type":"CategoricalAxis"},{"attributes":{},"id":"e321fa79-8455-43da-acab-6305b63e9362","type":"BasicTickFormatter"},{"attributes":{},"id":"94bb7fed-356f-49d5-bbb3-4057b76c4e49","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"f21edfe9-2bce-4a87-aef3-d015b11df967","type":"BoxAnnotation"},"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"}},"id":"d2b520bc-65a4-46eb-b378-cce81f569624","type":"BoxZoomTool"},{"attributes":{},"id":"03d7ea95-2d10-4630-ad45-9da0cef45187","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"08729298-b411-4b9c-bb97-7c286ada63bd","type":"BoxAnnotation"},{"attributes":{},"id":"5a3675c2-b3a1-4b3d-801a-e608ea956748","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fac576ff-fef0-40cc-a044-c2fde3715790","type":"Rect"},{"attributes":{"color_mapper":{"id":"b266acbc-58a4-4678-af06-d18817c0479a","type":"LinearColorMapper"},"formatter":{"id":"da1ecb87-7f0d-4426-89ba-bb207de68e8a","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"9745a383-3887-46f3-8128-c5061a4f363f","type":"BasicTicker"}},"id":"c182ffc8-f7e1-40d6-9ce2-4573582da6c6","type":"ColorBar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.0],"x":[8],"y":["Monday"]}},"id":"2472ee2d-2a1d-44c6-aa52-46c10e7d8bf1","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[19.0],"x":[8],"y":["Monday"]}},"id":"18fd5380-9502-48b7-ad55-e90ebda02f93","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"860973b8-dfe4-4e2a-8baf-e8c2aad4088a","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"7feddbcd-de0c-4456-9624-6e83ca711a9d","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bec91c00-66af-4f37-b99c-550a35628029","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e61479f8-7546-4dfc-a573-280f9ef3e473","type":"PanTool"},{"id":"839e863f-9e92-499b-818a-fdd192c36336","type":"WheelZoomTool"},{"id":"d2b520bc-65a4-46eb-b378-cce81f569624","type":"BoxZoomTool"},{"id":"2cef04cb-3e0b-4051-90fb-e7ca627d28fa","type":"SaveTool"},{"id":"b8562444-760d-4eb6-aa06-9eebd9b6f7f9","type":"ResetTool"},{"id":"783d679f-92b5-47c4-864a-d1f54145c5fd","type":"HelpTool"}]},"id":"89c4eac7-991f-47e3-a196-f3d9880d7a30","type":"Toolbar"},{"attributes":{"data_source":{"id":"adb6072b-d434-4096-8668-9f48d067b86f","type":"ColumnDataSource"},"glyph":{"id":"bec91c00-66af-4f37-b99c-550a35628029","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9cb38c6a-63d6-43aa-bab6-b3b958fa856b","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee0a4c5a-1914-4c19-8eff-a1dd1f8e3038","type":"Rect"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"a496e1b6-0fb0-45d3-be36-1b384ebe7b46","type":"Title"},{"attributes":{"data_source":{"id":"47b58dad-6e10-4807-b6b9-a1cbdf1d7455","type":"ColumnDataSource"},"glyph":{"id":"9bae9af4-231b-4e5f-9d92-40a9daa5bad1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f39526bf-287a-402f-bc02-ba8131ebe12e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"b4ba80a7-6a77-4199-aa1f-dd0ee9c0b467","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.0],"x":[7],"y":["Saturday"]}},"id":"bfffe456-a390-4865-b162-f0cabc209ab4","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b424b06f-563b-4630-be8e-9a148b96bb0d","type":"LinearColorMapper"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"eef9c831-4e06-43c0-ae0e-065c0f034090","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa0168fd-4f36-4053-b68d-38fa4f7c3718","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"55646610-a4bf-4cb4-a6b4-89ff965c4db1","type":"Rect"},{"attributes":{"overlay":{"id":"08729298-b411-4b9c-bb97-7c286ada63bd","type":"BoxAnnotation"},"plot":{"id":"a2b1df32-05e3-42ae-87c4-3e702230a812","subtype":"Chart","type":"Plot"}},"id":"85f87c5c-6370-4f58-ada3-8ddbd2614f2e","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"8977ef61-02c8-49e6-8135-a718f111d578","type":"ColumnDataSource"},"glyph":{"id":"55646610-a4bf-4cb4-a6b4-89ff965c4db1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ae250163-149c-4e78-9b4d-9db3ed3cfa81","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"93306ba2-3e37-40fa-b8d3-312343fe2fcc","type":"ColumnDataSource"},"glyph":{"id":"afe6820a-ca47-4b47-9ae9-a4c958390199","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"208c8a53-ddda-4116-875b-417a388755b8","type":"GlyphRenderer"},{"attributes":{},"id":"7e0e417c-bc84-49a9-ac4a-94e456282691","type":"CategoricalTickFormatter"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d0049472-8052-41b9-b101-81de78de8c0e","type":"BasicTickFormatter"},"plot":{"id":"b7c38bd0-8610-44fb-9efa-ca0d8f5c02f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"09d5f8c4-7b44-406f-a4da-2afddd69e5c1","type":"BasicTicker"}},"id":"fe37ebb3-8e92-436d-b006-9285ce6d866b","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.307692307692308,12.9],"x":[9,11],"y":["Wednesday","Wednesday"]}},"id":"c9009655-5c00-48c2-8647-d113b62fe919","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[10.307692307692308,12.9],"x":[9,11],"y":["Wednesday","Wednesday"]}},"id":"9ad56cad-7f01-4766-b2a3-5f7f5bb4ea86","type":"ColumnDataSource"}],"root_ids":["efe19b80-3574-40c9-9d03-14eb14f810a9"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"94789e98-59bb-479d-8346-7732a52a63af","elementid":"8895f4f0-2b0c-40ce-9947-1b8cd25b063f","modelid":"efe19b80-3574-40c9-9d03-14eb14f810a9"}];
                  
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
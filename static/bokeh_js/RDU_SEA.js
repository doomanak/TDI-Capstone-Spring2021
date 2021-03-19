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
      };var element = document.getElementById("9c894ee9-96cb-4671-bebd-5a9f5fec78cc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c894ee9-96cb-4671-bebd-5a9f5fec78cc' but no matching script tag was found. ")
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
                  var docs_json = {"6ac0754f-fe5a-4f06-a1ef-44dabe881290":{"roots":{"references":[{"attributes":{"child":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"1df73401-9558-470b-8d55-29661c5c1f76","type":"Panel"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"28c490e0-39f5-4413-9438-4ccb6b18520d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"},"ticker":{"id":"13ed3cf0-983a-44e0-abea-325fc83fc76d","type":"CategoricalTicker"}},"id":"2cfd320b-686b-4589-84f5-95f45e3cac08","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"376a6733-56aa-4158-98e6-026205d21a55","type":"PanTool"},{"attributes":{"data_source":{"id":"fb16524e-8cf9-4943-a39d-dbf0122c7b70","type":"ColumnDataSource"},"glyph":{"id":"8976744d-4bf9-4df5-b71e-06240a4f273b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"68500db6-2a01-4b2e-8dc2-e576024cddfd","type":"GlyphRenderer"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5445bdb6-4d85-4afd-b259-75801fb0c3ba","type":"LinearColorMapper"},{"attributes":{"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"5ee556c9-c715-41b6-9b78-4f17db19a09f","type":"PanTool"},{"attributes":{},"id":"13ed3cf0-983a-44e0-abea-325fc83fc76d","type":"CategoricalTicker"},{"attributes":{},"id":"1aeafc64-9c7c-4868-bb0e-d2bddbd9ee4d","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7, 7.8]"],"chart_index":[{"POS_ARR_DELAY":"(7, 7.8]"}],"values":[7.291666666666667],"x":[17],"y":["Wednesday"]}},"id":"d774dd2a-372a-4f4a-a6d5-0d260928d20a","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"346d6b0a-ee1b-4a3a-bdce-60fd87bb929c","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"5445bdb6-4d85-4afd-b259-75801fb0c3ba","type":"LinearColorMapper"},"formatter":{"id":"0578f89f-0c5e-470d-9d47-455d663337a7","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"},"ticker":{"id":"cbdfcd6e-25cf-4f54-a889-473d76252fdd","type":"BasicTicker"}},"id":"748d7bdf-a8ac-4746-af9e-ba67e30def7c","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5e8a001-7918-4fb1-8beb-5af10895e3ea","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.05, 12.9]","(12.05, 12.9]"],"chart_index":[{"POS_ARR_DELAY":"(12.05, 12.9]"},{"POS_ARR_DELAY":"(12.05, 12.9]"}],"values":[12.895833333333334,12.48936170212766],"x":[17,17],"y":["Thursday","Friday"]}},"id":"bfd21da5-f9d2-4fb6-b2da-4719ea1041b7","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"84c34ea8-e627-4ed7-b1a1-7459668fd0cd","type":"LinearColorMapper"},"formatter":{"id":"8c918f17-9f56-4f45-a650-4dae641b701a","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"},"ticker":{"id":"e1ec1cf3-756b-4e8e-b510-bd91c6b5eb29","type":"BasicTicker"}},"id":"883cd571-a2bd-48d9-9410-347bf4304d29","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"cb756115-55e5-47aa-afad-be0b37c2cd05","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4eb0f8f7-268c-48fe-9e60-2bbaea64267a","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.8, 8.7]","(7.8, 8.7]"],"chart_index":[{"POS_ARR_DELAY":"(7.8, 8.7]"},{"POS_ARR_DELAY":"(7.8, 8.7]"}],"values":[7.958333333333333,8.354166666666666],"x":[17,17],"y":["Monday","Sunday"]}},"id":"5f80664b-e8aa-4667-a801-9b982b701fd5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"856cd928-d1f9-43e5-ae4a-7b82abe7c092","type":"SaveTool"},{"attributes":{"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"7bfb2d91-f516-41cf-9fbd-66814156eea9","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8cd8668-6c35-4587-9265-d4781a375453","type":"Rect"},{"attributes":{},"id":"0578f89f-0c5e-470d-9d47-455d663337a7","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.8, 8.7]","(7.8, 8.7]"],"chart_index":[{"POS_ARR_DELAY":"(7.8, 8.7]"},{"POS_ARR_DELAY":"(7.8, 8.7]"}],"values":[7.958333333333333,8.354166666666666],"x":[17,17],"y":["Monday","Sunday"]}},"id":"3ebbb7cd-912c-4c71-a246-7c90ecc24d8f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"5f80664b-e8aa-4667-a801-9b982b701fd5","type":"ColumnDataSource"},"glyph":{"id":"82fe1ebb-d909-4ab8-ba80-e6f7100bf4e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"089b772f-9016-40b0-872e-5fd36a5e6409","type":"GlyphRenderer"},{"attributes":{},"id":"aaa8aea2-1d1b-472b-a2a9-f4fd8b82a482","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"e0395c06-be84-4ad0-827a-0796b19676d1","type":"BasicTickFormatter"},"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"},"ticker":{"id":"e21c7b07-d7cd-4ed6-96b8-061ee3f6f154","type":"BasicTicker"}},"id":"347c0e1b-69e0-452d-b9fd-8dafb6d27acc","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b53c4518-5fe1-4439-80af-0ebba5a78a21","type":"Rect"},{"attributes":{"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"4cb3d950-ae42-41c7-bcf3-6bd84f3ec065","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ad00506d-e1bb-4fbd-a1f0-e8eea1bc6eec","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7, 7.8]"],"chart_index":[{"POS_ARR_DELAY":"(7, 7.8]"}],"values":[7.291666666666667],"x":[17],"y":["Wednesday"]}},"id":"fb16524e-8cf9-4943-a39d-dbf0122c7b70","type":"ColumnDataSource"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"4610b193-731b-4faa-98f5-c49663b64f8b","type":"LinearAxis"}],"left":[{"id":"2cfd320b-686b-4589-84f5-95f45e3cac08","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"346d6b0a-ee1b-4a3a-bdce-60fd87bb929c","type":"BoxAnnotation"},{"id":"4aeef0eb-75bb-4e61-8c82-d16be3a208a4","type":"GlyphRenderer"},{"id":"d6ba4bd8-751c-465b-bb9e-5e1eb8783b02","type":"GlyphRenderer"},{"id":"2aaeeac6-af58-407f-bb3b-059374f24a01","type":"GlyphRenderer"},{"id":"68500db6-2a01-4b2e-8dc2-e576024cddfd","type":"GlyphRenderer"},{"id":"43a14422-8640-4e2e-9dde-479523190bf0","type":"GlyphRenderer"},{"id":"4610b193-731b-4faa-98f5-c49663b64f8b","type":"LinearAxis"},{"id":"2cfd320b-686b-4589-84f5-95f45e3cac08","type":"CategoricalAxis"},{"id":"748d7bdf-a8ac-4746-af9e-ba67e30def7c","type":"ColorBar"}],"right":[{"id":"748d7bdf-a8ac-4746-af9e-ba67e30def7c","type":"ColorBar"}],"title":{"id":"6b637183-34c9-40fa-8eef-d3e414e8c309","type":"Title"},"tool_events":{"id":"dc90aea0-b3a1-4ae2-b2f2-8139bc0302cb","type":"ToolEvents"},"toolbar":{"id":"96093713-001b-4f75-a558-277223fcd210","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"15a16417-22c9-4932-8d0b-2f133ff4ccf2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"e47c8890-3d8f-4dca-a929-22428e000580","type":"FactorRange"}},"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"a25b5081-00c5-46c6-a077-c1bc84c4b523","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"95c89b51-b453-4e1a-872f-38a6449c0ac1","type":"ResetTool"},{"attributes":{"data_source":{"id":"461c4137-3cd5-4d24-acbe-f735cadd1d22","type":"ColumnDataSource"},"glyph":{"id":"89cae939-1bfb-48fd-86cc-32407660b7db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c128aa5c-64f9-4b38-9984-2707ebb77d45","type":"GlyphRenderer"},{"attributes":{"child":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"},"title":"AS"},"id":"18615cd7-7a99-47a6-af42-e9befbba8dbf","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[5.3, 6.1]"],"chart_index":[{"POS_ARR_DELAY":"[5.3, 6.1]"}],"values":[5.270833333333333],"x":[17],"y":["Saturday"]}},"id":"461c4137-3cd5-4d24-acbe-f735cadd1d22","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Alaska Airlines "},"id":"6b637183-34c9-40fa-8eef-d3e414e8c309","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8976744d-4bf9-4df5-b71e-06240a4f273b","type":"Rect"},{"attributes":{"data_source":{"id":"2ac16cb7-23d9-4b72-896c-a30ebfa7328d","type":"ColumnDataSource"},"glyph":{"id":"e7951ec1-221c-4217-962a-24dcfcff934d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4aeef0eb-75bb-4e61-8c82-d16be3a208a4","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"354dc11f-8373-4991-acb4-cdc88c0ee5d0","type":"Range1d"},{"attributes":{},"id":"8c918f17-9f56-4f45-a650-4dae641b701a","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"39453ac6-9d27-4d7f-92db-bf15007a7e0b","type":"WheelZoomTool"},{"attributes":{},"id":"cbdfcd6e-25cf-4f54-a889-473d76252fdd","type":"BasicTicker"},{"attributes":{"data_source":{"id":"01cad803-1b37-451e-9d2d-9ca2ab078c61","type":"ColumnDataSource"},"glyph":{"id":"bacf202e-4d9c-4b91-b6b8-b79783931cca","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43a14422-8640-4e2e-9dde-479523190bf0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"346d6b0a-ee1b-4a3a-bdce-60fd87bb929c","type":"BoxAnnotation"},"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"}},"id":"b4256d56-6bfd-4e75-98a0-dbaee9dfd37f","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"cdd8b5ec-51d2-41d3-b1d1-fb38770090a7","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"376a6733-56aa-4158-98e6-026205d21a55","type":"PanTool"},{"id":"cdd8b5ec-51d2-41d3-b1d1-fb38770090a7","type":"WheelZoomTool"},{"id":"7716b57f-84b5-41f1-ac2a-24d384e7475c","type":"BoxZoomTool"},{"id":"7bfb2d91-f516-41cf-9fbd-66814156eea9","type":"SaveTool"},{"id":"ff8230a3-d04c-42c3-9d56-b7d6e9ae1584","type":"ResetTool"},{"id":"06888a66-0df5-4560-a258-c22b8d558f88","type":"HelpTool"}]},"id":"4117036d-2e26-4cdf-bdcd-0865f058cca9","type":"Toolbar"},{"attributes":{},"id":"dc90aea0-b3a1-4ae2-b2f2-8139bc0302cb","type":"ToolEvents"},{"attributes":{},"id":"28c490e0-39f5-4413-9438-4ccb6b18520d","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.05, 12.9]","(12.05, 12.9]"],"chart_index":[{"POS_ARR_DELAY":"(12.05, 12.9]"},{"POS_ARR_DELAY":"(12.05, 12.9]"}],"values":[12.895833333333334,12.48936170212766],"x":[17,17],"y":["Thursday","Friday"]}},"id":"2ac16cb7-23d9-4b72-896c-a30ebfa7328d","type":"ColumnDataSource"},{"attributes":{},"id":"e0395c06-be84-4ad0-827a-0796b19676d1","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"3ebbb7cd-912c-4c71-a246-7c90ecc24d8f","type":"ColumnDataSource"},"glyph":{"id":"ad00506d-e1bb-4fbd-a1f0-e8eea1bc6eec","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2aaeeac6-af58-407f-bb3b-059374f24a01","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.2, 12.05]"],"chart_index":[{"POS_ARR_DELAY":"(11.2, 12.05]"}],"values":[11.956521739130435],"x":[17],"y":["Tuesday"]}},"id":"d0a693c1-6232-45b5-bed8-1cb22524e8de","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"4a4f8b53-6ab8-46c8-bfdc-d99c66c8260e","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"},"ticker":{"id":"a25b5081-00c5-46c6-a077-c1bc84c4b523","type":"CategoricalTicker"}},"id":"e46a29a0-b19e-480d-af50-05d8b9dd546c","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"d774dd2a-372a-4f4a-a6d5-0d260928d20a","type":"ColumnDataSource"},"glyph":{"id":"b8cd8668-6c35-4587-9265-d4781a375453","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a7457280-1980-4158-9461-b7e6a96e8410","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"913f3b1c-1ea2-4ebc-90eb-1f9c11b678e8","type":"BasicTickFormatter"},"plot":{"id":"4a3e4419-7fd6-4199-8cf3-cdada2add0a8","subtype":"Chart","type":"Plot"},"ticker":{"id":"aaa8aea2-1d1b-472b-a2a9-f4fd8b82a482","type":"BasicTicker"}},"id":"4610b193-731b-4faa-98f5-c49663b64f8b","type":"LinearAxis"},{"attributes":{},"id":"913f3b1c-1ea2-4ebc-90eb-1f9c11b678e8","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"82fe1ebb-d909-4ab8-ba80-e6f7100bf4e4","type":"Rect"},{"attributes":{},"id":"e21c7b07-d7cd-4ed6-96b8-061ee3f6f154","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.2, 12.05]"],"chart_index":[{"POS_ARR_DELAY":"(11.2, 12.05]"}],"values":[11.956521739130435],"x":[17],"y":["Tuesday"]}},"id":"fe3379b9-df4f-4971-86b8-fd230946a025","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"ff8230a3-d04c-42c3-9d56-b7d6e9ae1584","type":"ResetTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"e47c8890-3d8f-4dca-a929-22428e000580","type":"FactorRange"},{"attributes":{"overlay":{"id":"4eb0f8f7-268c-48fe-9e60-2bbaea64267a","type":"BoxAnnotation"},"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"7716b57f-84b5-41f1-ac2a-24d384e7475c","type":"BoxZoomTool"},{"attributes":{},"id":"4a4f8b53-6ab8-46c8-bfdc-d99c66c8260e","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"bfd21da5-f9d2-4fb6-b2da-4719ea1041b7","type":"ColumnDataSource"},"glyph":{"id":"b53c4518-5fe1-4439-80af-0ebba5a78a21","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eac979e2-1967-4aa4-81d3-892ed396d296","type":"GlyphRenderer"},{"attributes":{},"id":"e1ec1cf3-756b-4e8e-b510-bd91c6b5eb29","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d0a693c1-6232-45b5-bed8-1cb22524e8de","type":"ColumnDataSource"},"glyph":{"id":"e5e8a001-7918-4fb1-8beb-5af10895e3ea","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d6ba4bd8-751c-465b-bb9e-5e1eb8783b02","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bacf202e-4d9c-4b91-b6b8-b79783931cca","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[5.3, 6.1]"],"chart_index":[{"POS_ARR_DELAY":"[5.3, 6.1]"}],"values":[5.270833333333333],"x":[17],"y":["Saturday"]}},"id":"01cad803-1b37-451e-9d2d-9ca2ab078c61","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"33e4a140-e7b3-496a-9829-6182dd65a994","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5ee556c9-c715-41b6-9b78-4f17db19a09f","type":"PanTool"},{"id":"39453ac6-9d27-4d7f-92db-bf15007a7e0b","type":"WheelZoomTool"},{"id":"b4256d56-6bfd-4e75-98a0-dbaee9dfd37f","type":"BoxZoomTool"},{"id":"856cd928-d1f9-43e5-ae4a-7b82abe7c092","type":"SaveTool"},{"id":"95c89b51-b453-4e1a-872f-38a6449c0ac1","type":"ResetTool"},{"id":"4cb3d950-ae42-41c7-bcf3-6bd84f3ec065","type":"HelpTool"}]},"id":"96093713-001b-4f75-a558-277223fcd210","type":"Toolbar"},{"attributes":{"callback":null,"tabs":[{"id":"1df73401-9558-470b-8d55-29661c5c1f76","type":"Panel"},{"id":"18615cd7-7a99-47a6-af42-e9befbba8dbf","type":"Panel"}]},"id":"0dced228-35d9-4c4a-af99-b86132ef6113","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"89cae939-1bfb-48fd-86cc-32407660b7db","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e7951ec1-221c-4217-962a-24dcfcff934d","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d367b12a-3e09-4236-a2a0-74f6aa265fad","type":"Rect"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"347c0e1b-69e0-452d-b9fd-8dafb6d27acc","type":"LinearAxis"}],"left":[{"id":"e46a29a0-b19e-480d-af50-05d8b9dd546c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"4eb0f8f7-268c-48fe-9e60-2bbaea64267a","type":"BoxAnnotation"},{"id":"eac979e2-1967-4aa4-81d3-892ed396d296","type":"GlyphRenderer"},{"id":"0dc914d8-d8c1-4f0a-9654-8d1f1472a2b9","type":"GlyphRenderer"},{"id":"089b772f-9016-40b0-872e-5fd36a5e6409","type":"GlyphRenderer"},{"id":"a7457280-1980-4158-9461-b7e6a96e8410","type":"GlyphRenderer"},{"id":"c128aa5c-64f9-4b38-9984-2707ebb77d45","type":"GlyphRenderer"},{"id":"347c0e1b-69e0-452d-b9fd-8dafb6d27acc","type":"LinearAxis"},{"id":"e46a29a0-b19e-480d-af50-05d8b9dd546c","type":"CategoricalAxis"},{"id":"883cd571-a2bd-48d9-9410-347bf4304d29","type":"ColorBar"}],"right":[{"id":"883cd571-a2bd-48d9-9410-347bf4304d29","type":"ColorBar"}],"title":{"id":"33e4a140-e7b3-496a-9829-6182dd65a994","type":"Title"},"tool_events":{"id":"1aeafc64-9c7c-4868-bb0e-d2bddbd9ee4d","type":"ToolEvents"},"toolbar":{"id":"4117036d-2e26-4cdf-bdcd-0865f058cca9","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"354dc11f-8373-4991-acb4-cdc88c0ee5d0","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"cb756115-55e5-47aa-afad-be0b37c2cd05","type":"FactorRange"}},"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"91110da0-6897-4aa4-a6a6-6e4915210f30","subtype":"Chart","type":"Plot"}},"id":"06888a66-0df5-4560-a258-c22b8d558f88","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"84c34ea8-e627-4ed7-b1a1-7459668fd0cd","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"fe3379b9-df4f-4971-86b8-fd230946a025","type":"ColumnDataSource"},"glyph":{"id":"d367b12a-3e09-4236-a2a0-74f6aa265fad","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0dc914d8-d8c1-4f0a-9654-8d1f1472a2b9","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"15a16417-22c9-4932-8d0b-2f133ff4ccf2","type":"Range1d"}],"root_ids":["0dced228-35d9-4c4a-af99-b86132ef6113"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"6ac0754f-fe5a-4f06-a1ef-44dabe881290","elementid":"9c894ee9-96cb-4671-bebd-5a9f5fec78cc","modelid":"0dced228-35d9-4c4a-af99-b86132ef6113"}];
                  
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
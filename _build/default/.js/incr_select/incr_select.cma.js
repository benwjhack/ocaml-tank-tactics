// Generated by js_of_ocaml
//# buildInfo:effects=false, use-js-string=false, version=5.0.1
(function
   (globalThis)
   {"use strict";
    var
     runtime=globalThis.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Incr_select_Incr_select_in=
      caml_string_of_jsbytes("Incr_select__Incr_select_intf"),
     cst_incr_select=caml_string_of_jsbytes("incr_select"),
     cst_src_incr_select_intf_ml=
      caml_string_of_jsbytes("src/incr_select_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_incr_select$0=caml_string_of_jsbytes("incr_select"),
     cst_incr_select$1=caml_string_of_jsbytes("incr_select"),
     cst_Incr_select_Incr_select_in$0=
      caml_string_of_jsbytes("Incr_select__Incr_select_intf"),
     cst_Incr_select=caml_string_of_jsbytes("Incr_select"),
     cst_incr_select$2=caml_string_of_jsbytes("incr_select"),
     cst_src_incr_select_ml=caml_string_of_jsbytes("src/incr_select.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_incr_select$3=caml_string_of_jsbytes("incr_select"),
     cst_incr_select$4=caml_string_of_jsbytes("incr_select"),
     cst_Incr_select$0=caml_string_of_jsbytes("Incr_select"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_Hash_set=global_data.Core__Hash_set,
     Core_List=global_data.Core__List,
     Core_Hashtbl=global_data.Core__Hashtbl,
     Core_Option=global_data.Core__Option,
     Core=global_data.Core,
     Core_Fn=global_data.Core__Fn,
     Incr_select=[0];
    caml_register_global(14,Incr_select,"Incr_select__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_select_Incr_select_in);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_select);
    caml_call1(Expect_test_collector[5][1],cst_src_incr_select_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_select$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_select$1);
    caml_call1(Expect_test_collector[5][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_select_Incr_select_in$0);
    var Incr_select_Incr_select_intf=[0];
    caml_register_global
     (19,Incr_select_Incr_select_intf,"Incr_select__Incr_select_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Incr_select);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_incr_select$2);
    caml_call1(Expect_test_collector[5][1],cst_src_incr_select_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_incr_select$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_incr_select$4);
    caml_call1(Expect_test_collector[5][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Incr_select$0);
    var
     Incr_select$0=
      [0,
       function(Incr)
        {var E=Incr[78],hashtbl_size=10;
         function setup_generator(hashable,compute_output,make_input_node)
          {var
            necessary_dependencies=
             caml_call4(Core_Hashtbl[84][1],0,[0,hashtbl_size],hashable,0);
           function make_key_stale(key)
            {var
              _x_=E[2][4],
              _y_=caml_call2(Core_Hashtbl[53],necessary_dependencies,key),
              _z_=caml_call2(Core_Option[34],_y_,0);
             return caml_call2(Core_List[9],_z_,_x_)}
           var input_node=caml_call1(make_input_node,make_key_stale);
           caml_call2(Incr[58],input_node,Incr[57][6]);
           function _o_(key)
            {var input_dep=caml_call2(E[1][2],0,input_node),output_node=[];
             runtime.caml_update_dummy
              (output_node,
               [246,
                function(_p_)
                 {function _q_(param){return caml_call1(compute_output,key)}
                  var
                   _r_=
                    [0,
                     function(is_now_observable)
                      {if(is_now_observable)
                        {var _s_=caml_call1(Core[237],output_node);
                         return caml_call3
                                 (Core_Hashtbl[78],necessary_dependencies,key,_s_)}
                       function _t_(param)
                        {if(! param)return 0;
                         var
                          l=param[1],
                          _u_=caml_call1(Core[237],output_node),
                          _v_=caml_call1(Core[246],_u_),
                          _w_=caml_call1(Core_Fn[2],_v_),
                          l$0=caml_call2(Core_List[50],l,_w_);
                         return l$0?[0,l$0]:0}
                       return caml_call3
                               (Core_Hashtbl[37],necessary_dependencies,key,_t_)}];
                  return caml_call2(E[2][2],_r_,_q_)}]);
             var output_node$0=caml_call1(Core[237],output_node);
             caml_call2(E[2][6],output_node$0,input_dep);
             return caml_call1(E[2][3],output_node$0)}
           return caml_call1(Core[258],_o_)}
         function update_one(input,selected,make_stale)
          {function _n_(inp)
            {caml_call2(Core_Option[41],inp,make_stale);
             caml_call2(Core_Option[41],selected[1],make_stale);
             selected[1] = inp;
             return 0}
           return caml_call2(Incr[9],input,_n_)}
         function select_one(H)
          {return function(input)
            {var selected=[0,0];
             function compute_output(key)
              {var _l_=selected[1];
               if(! _l_)return 0;
               var key$0=_l_[1],_m_=caml_call2(H[1],key,key$0);
               return caml_call2(Core[90],_m_,0)}
             function make_input_node(make_key_stale)
              {return update_one(input,selected,make_key_stale)}
             return setup_generator(H[4],compute_output,make_input_node)}}
         function select_one$0(h,input)
          {var _k_=caml_call2(Incr[9],input,Core_Option[53]);
           return caml_call1(select_one(h),_k_)}
         function select_one_value(H)
          {return function(default$0,input)
            {var selected=[0,0];
             function compute_output(key)
              {var _i_=selected[1];
               if(! _i_)return default$0;
               var
                match=_i_[1],
                data=match[2],
                key$0=match[1],
                _j_=caml_call2(H[1],key,key$0);
               return caml_call2(Core[90],_j_,0)?data:default$0}
             function make_input_node(make_key_stale)
              {return update_one
                       (input,
                        selected,
                        function(param)
                         {var key=param[1];return caml_call1(make_key_stale,key)})}
             return setup_generator(H[4],compute_output,make_input_node)}}
         function select_one_value$0(h,default$0,input)
          {var _h_=caml_call2(Incr[9],input,Core_Option[53]);
           return caml_call2(select_one_value(h),default$0,_h_)}
         function select_many_values(H)
          {return function(default$0,input)
            {var
              hashable=H[4],
              selected=
               caml_call4(Core_Hashtbl[84][1],0,[0,hashtbl_size],hashable,0);
             function compute_output(key)
              {var _g_=caml_call2(Core_Hashtbl[53],selected,key);
               return caml_call2(Core_Option[34],_g_,default$0)}
             function make_input_node(make_key_stale)
              {function _e_(inp)
                {caml_call2(Core_Hashtbl[19],selected,make_key_stale);
                 caml_call1(Core_Hashtbl[16],selected);
                 function _f_(param)
                  {var data=param[2],key=param[1];
                   caml_call1(make_key_stale,key);
                   return caml_call3(Core_Hashtbl[34],selected,key,data)}
                 return caml_call2(Core_List[9],inp,_f_)}
               return caml_call2(Incr[9],input,_e_)}
             return setup_generator(hashable,compute_output,make_input_node)}}
         function select_many(H)
          {return function(input)
            {var
              hashable=H[4],
              selected=
               caml_call4(Core_Hash_set[38][1],0,[0,hashtbl_size],hashable,0);
             function compute_output(key)
              {return caml_call2(Core_Hash_set[20],selected,key)}
             function make_input_node(make_key_stale)
              {function _a_(inp)
                {var old_set=caml_call1(Core_Hash_set[21],selected);
                 caml_call1(Core_Hash_set[28],selected);
                 function _b_(key)
                  {if(1 - caml_call2(Core_Hash_set[20],old_set,key))
                    caml_call1(make_key_stale,key);
                   return caml_call2(Core_Hash_set[22],selected,key)}
                 caml_call2(Core_List[9],inp,_b_);
                 function _c_(key)
                  {var _d_=1 - caml_call2(Core_Hash_set[20],selected,key);
                   return _d_?caml_call1(make_key_stale,key):_d_}
                 return caml_call2(Core_Hash_set[6],old_set,_c_)}
               return caml_call2(Incr[9],input,_a_)}
             return setup_generator(hashable,compute_output,make_input_node)}}
         return [0,
                 select_one$0,
                 select_one,
                 select_one_value$0,
                 select_one_value,
                 select_many,
                 select_many_values]}];
    caml_register_global(26,Incr_select$0,"Incr_select");
    return}
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJpbmNyX3NlbGVjdC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiaGFzaHRibF9zaXplIiwic2V0dXBfZ2VuZXJhdG9yIiwiaGFzaGFibGUiLCJjb21wdXRlX291dHB1dCIsIm1ha2VfaW5wdXRfbm9kZSIsIm5lY2Vzc2FyeV9kZXBlbmRlbmNpZXMiLCJtYWtlX2tleV9zdGFsZSIsImtleSIsImlucHV0X25vZGUiLCJpbnB1dF9kZXAiLCJvdXRwdXRfbm9kZSIsImlzX25vd19vYnNlcnZhYmxlIiwibCIsImwkMCIsIm91dHB1dF9ub2RlJDAiLCJ1cGRhdGVfb25lIiwiaW5wdXQiLCJzZWxlY3RlZCIsIm1ha2Vfc3RhbGUiLCJpbnAiLCJzZWxlY3Rfb25lIiwiSCIsImtleSQwIiwic2VsZWN0X29uZSQwIiwiaCIsInNlbGVjdF9vbmVfdmFsdWUiLCJkZWZhdWx0JDAiLCJkYXRhIiwic2VsZWN0X29uZV92YWx1ZSQwIiwic2VsZWN0X21hbnlfdmFsdWVzIiwic2VsZWN0X21hbnkiLCJvbGRfc2V0Il0sInNvdXJjZXMiOlsiL2hvbWUvYmVuLy5vcGFtLzQuMTQvbGliL2luY3Jfc2VsZWN0L2luY3Jfc2VsZWN0Lm1sIl0sIm1hcHBpbmdzIjoiOzs7OztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBT01BO2tCQWNBQyxnQkFDR0MsU0FDQ0MsZUFDQUM7V0FHdUI7WUFBekJDO2FBQXlCLG9DQXBCM0JMLGNBZUdFO1dBS3dCLFNBRXZCSSxlQUFlQzthQUNqQjs7OENBSEFGLHVCQUVpQkU7Y0FDakI7b0RBRWlDO1dBRW5DLElBTkdDLFdBTUgsV0FWSUosZ0JBS0FFO1dBU04sb0JBVktFO1dBVUwsYUFDV0Q7YUFDTyxtQ0FaYkMsWUFZYTthQWdCaEI7ZUFmUUU7OztzQ0FFTyxrQkFwQlhQLGVBZ0JLSSxJQUl3Qjs7Ozs4QkFDRUk7dUJBQzdCLEdBRDZCQTt5QkFFeUIsNkJB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dWxlIE1ha2UgKEluY3IgOiBJbmNyZW1lbnRhbC5TX2dlbikgPSBzdHJ1Y3RcbiAgbW9kdWxlIEUgPSBJbmNyLkV4cGVydFxuXG4gICgqIEhhc2h0Ymwgc3RhcnRzIG91dCBhdCBhIHJpZGljdWxvdXMgc2l6ZSBvZiAxMjguIFRoaXMgaXMgYSBtb3JlIHJlYXNvbmFibGUgbnVtYmVyXG4gICAgIG9mIGJpbnMgdG8gaGF2ZS4gKilcbiAgbGV0IGhhc2h0Ymxfc2l6ZSA9IDEwXG5cbiAgKCoqIFtzZXR1cF9nZW5lcmF0b3JdIHNldHMgdXAgdGhlIHN0YWdlZCBjb252ZXJzaW9uLlxuXG4gICAgICBbaGFzaGFibGVdIGlzIHVzZWQgdG8gYnVpbGQgYSB0YWJsZSBvZiBuZWNlc3NhcnkgZGVwZW5kZW5jaWVzLiBXZSBkcm9wIHVubmVjZXNzYXJ5XG4gICAgICBkZXBlbmRlbmNpZXMgdG8gYWxsb3cgdGhlbSB0byBiZSBjb2xsZWN0ZWQuXG5cbiAgICAgIFtjb21wdXRlX291dHB1dCBrZXldIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBvdXRwdXQgbm9kZSBjb3JyZXNwb25kaW5nIHRvIFtrZXldLlxuICAgICAgW2NvbXB1dGVfb3V0cHV0XSBpcyBjbG9zZWQgb3ZlciB0aGUgbXV0YWJsZSBzdGF0ZSBkZXRlcm1pbmluZyB0aGUgY3VycmVudCB2YWx1ZSBvZlxuICAgICAgdGhlIHNlbGVjdG9yJ3MgaW5wdXQuXG5cbiAgICAgIFttYWtlX2lucHV0X25vZGVdIG1ha2VzIHN1cmUgdGhhdCB3aGVuIHRoZSBtdXRhYmxlIHN0YXRlIGluc2lkZSBbY29tcHV0ZV9vdXRwdXRdIGlzXG4gICAgICB1cGRhdGVkLCB0aGUgY29ycmVzcG9uZGluZyBub2RlcyBpbiB0aGUgW25lY2Vzc2FyeV9kZXBlbmRlbmNpZXNdIHRhYmxlIGFyZSBtYWRlXG4gICAgICBzdGFsZS4gICopXG4gIGxldCBzZXR1cF9nZW5lcmF0b3JcbiAgICAgICAgKGhhc2hhYmxlIDogJ2EgSGFzaHRibF9pbnRmLkhhc2hhYmxlLnQpXG4gICAgICAgIH4oY29tcHV0ZV9vdXRwdXQgOiAnYSAtPiAnYilcbiAgICAgICAgfihtYWtlX2lucHV0X25vZGUgOiBtYWtlX2tleV9zdGFsZTooJ2EgLT4gdW5pdCkgLT4gdW5pdCBJbmNyLnQpXG4gICAgOiAoJ2EgLT4gJ2IgSW5jci50KSBTdGFnZWQudFxuICAgID1cbiAgICBsZXQgbmVjZXNzYXJ5X2RlcGVuZGVuY2llcyA9IEhhc2h0YmwuVXNpbmdfaGFzaGFibGUuY3JlYXRlIH5zaXplOmhhc2h0Ymxfc2l6ZSB+aGFzaGFibGUgKCkgaW5cbiAgICBsZXQgKGlucHV0X25vZGUgOiB1bml0IEluY3IudCkgPVxuICAgICAgbGV0IG1ha2Vfa2V5X3N0YWxlIGtleSA9XG4gICAgICAgIEhhc2h0YmwuZmluZCBuZWNlc3NhcnlfZGVwZW5kZW5jaWVzIGtleVxuICAgICAgICB8PiBPcHRpb24udmFsdWUgfmRlZmF1bHQ6W11cbiAgICAgICAgfD4gTGlzdC5pdGVyIH5mOkUuTm9kZS5tYWtlX3N0YWxlXG4gICAgICBpblxuICAgICAgbWFrZV9pbnB1dF9ub2RlIH5tYWtlX2tleV9zdGFsZVxuICAgIGluXG4gICAgKCogU2V0IHRoZSBjdXRvZmYgc28gdGhhdCB3ZSBuZXZlciBwYXNzIGF1dG9tYXRpY2FsbHkgZnJvbSB0aGUgdXBkYXRlIHRvIHRoZSBub2Rlcy4gV2VcbiAgICAgICB3YW50IGV2ZXJ5dGhpbmcgdG8gZ28gdGhyb3VnaCBbbWFrZV9rZXlfc3RhbGVdICopXG4gICAgSW5jci5zZXRfY3V0b2ZmIGlucHV0X25vZGUgSW5jci5DdXRvZmYuYWx3YXlzO1xuICAgIHN0YWdlIChmdW4ga2V5IC0+XG4gICAgICBsZXQgaW5wdXRfZGVwID0gRS5EZXBlbmRlbmN5LmNyZWF0ZSBpbnB1dF9ub2RlIGluXG4gICAgICBsZXQgcmVjIG91dHB1dF9ub2RlID0gbGF6eSAoXG4gICAgICAgIEUuTm9kZS5jcmVhdGVcbiAgICAgICAgICAoZnVuICgpIC0+IGNvbXB1dGVfb3V0cHV0IGtleSlcbiAgICAgICAgICB+b25fb2JzZXJ2YWJpbGl0eV9jaGFuZ2U6KGZ1biB+aXNfbm93X29ic2VydmFibGUgLT5cbiAgICAgICAgICAgIGlmIGlzX25vd19vYnNlcnZhYmxlIHRoZW5cbiAgICAgICAgICAgICAgSGFzaHRibC5hZGRfbXVsdGkgbmVjZXNzYXJ5X2RlcGVuZGVuY2llcyB+a2V5IH5kYXRhOihmb3JjZSBvdXRwdXRfbm9kZSlcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgSGFzaHRibC5jaGFuZ2UgbmVjZXNzYXJ5X2RlcGVuZGVuY2llcyBrZXkgfmY6KGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgfCBOb25lIC0+IE5vbmVcbiAgICAgICAgICAgICAgICB8IFNvbWUgbCAtPlxuICAgICAgICAgICAgICAgICAgbWF0Y2ggTGlzdC5maWx0ZXIgbCB+ZjooRm4ubm9uIChwaHlzX2VxdWFsIChmb3JjZSBvdXRwdXRfbm9kZSkpKSB3aXRoXG4gICAgICAgICAgICAgICAgICB8IFtdIC0+IE5vbmVcbiAgICAgICAgICAgICAgICAgIHwgbCcgLT4gU29tZSBsJ1xuICAgICAgICAgICAgICApKSlcbiAgICAgIGluXG4gICAgICBsZXQgb3V0cHV0X25vZGUgPSBmb3JjZSBvdXRwdXRfbm9kZSBpblxuICAgICAgRS5Ob2RlLmFkZF9kZXBlbmRlbmN5IG91dHB1dF9ub2RlIGlucHV0X2RlcDtcbiAgICAgIEUuTm9kZS53YXRjaCBvdXRwdXRfbm9kZVxuICAgIClcblxuICAoKiogVGhpcyBjcmVhdGVzIGEgdW5pdCBpbmNyZW1lbnRhbCB0aGF0IGZpcmVzIHdoZW5ldmVyIHRoZSBpbnB1dCBpbmNyZW1lbnRhbFxuICAgICAgZmlyZXMuIFdoZW4gdGhhdCBvY2N1cnMsIGl0IHVwZGF0ZXMgW3NlbGVjdGVkXSB0byBtYXRjaCB0aGUgY3VycmVudCB2YWx1ZSBvZlxuICAgICAgW2lucHV0XSwgYW5kIGNhbGxzIFttYWtlX2tleV9zdGFsZV0gZm9yIGJvdGggdGhlIG9sZCBhbmQgbmV3IHZhbHVlIG9mIHRoZVxuICAgICAgaW5jcmVtZW50YWwuICopXG4gIGxldCB1cGRhdGVfb25lIH5pbnB1dCB+c2VsZWN0ZWQgfm1ha2Vfc3RhbGUgPVxuICAgIEluY3IubWFwIGlucHV0IH5mOihmdW4gaW5wIC0+XG4gICAgICBPcHRpb24uaXRlciBpbnAgfmY6bWFrZV9zdGFsZTtcbiAgICAgIE9wdGlvbi5pdGVyICFzZWxlY3RlZCB+ZjptYWtlX3N0YWxlO1xuICAgICAgc2VsZWN0ZWQgOj0gaW5wXG4gICAgKVxuXG4gIGxldCBzZWxlY3Rfb25lJ1xuICAgICAgICAodHlwZSBhKVxuICAgICAgICAobW9kdWxlIEggOiBIYXNoYWJsZS5Db21tb24gd2l0aCB0eXBlIHQgPSBhKVxuICAgICAgICAoaW5wdXQgOiBhIG9wdGlvbiBJbmNyLnQpXG4gICAgPVxuICAgIGxldCBzZWxlY3RlZCA9IHJlZiBOb25lIGluXG4gICAgbGV0IGNvbXB1dGVfb3V0cHV0IGtleSA9XG4gICAgICBtYXRjaCAhc2VsZWN0ZWQgd2l0aFxuICAgICAgfCBOb25lIC0+IGZhbHNlXG4gICAgICB8IFNvbWUga2V5JyAtPiBILmNvbXBhcmUga2V5IGtleScgPSAwXG4gICAgaW5cbiAgICBsZXQgbWFrZV9pbnB1dF9ub2RlIH5tYWtlX2tleV9zdGFsZSA9XG4gICAgICB1cGRhdGVfb25lIH5pbnB1dCB+c2VsZWN0ZWQgfm1ha2Vfc3RhbGU6bWFrZV9rZXlfc3RhbGVcbiAgICBpblxuICAgIHNldHVwX2dlbmVyYXRvciBILmhhc2hhYmxlIH5jb21wdXRlX291dHB1dCB+bWFrZV9pbnB1dF9ub2RlXG5cbiAgbGV0IHNlbGVjdF9vbmUgaCBpbnB1dCA9XG4gICAgc2VsZWN0X29uZScgaCAoSW5jci5tYXAgfmY6T3B0aW9uLnNvbWUgaW5wdXQpXG5cbiAgbGV0IHNlbGVjdF9vbmVfdmFsdWUnXG4gICAgICAgICh0eXBlIGEpXG4gICAgICAgIChtb2R1bGUgSCA6IEhhc2hhYmxlLkNvbW1vbiB3aXRoIHR5cGUgdCA9IGEpXG4gICAgICAgIH5kZWZhdWx0XG4gICAgICAgIGlucHV0XG4gICAgPVxuICAgIGxldCBzZWxlY3RlZCA9IHJlZiBOb25lIGluXG4gICAgbGV0IGNvbXB1dGVfb3V0cHV0IGtleSA9XG4gICAgICBtYXRjaCAhc2VsZWN0ZWQgd2l0aFxuICAgICAgfCBOb25lIC0+IGRlZmF1bHRcbiAgICAgIHwgU29tZSAoa2V5JywgZGF0YSkgLT4gaWYgSC5jb21wYXJlIGtleSBrZXknID0gMCB0aGVuIGRhdGEgZWxzZSBkZWZhdWx0XG4gICAgaW5cbiAgICBsZXQgbWFrZV9pbnB1dF9ub2RlIH5tYWtlX2tleV9zdGFsZSA9XG4gICAgICB1cGRhdGVfb25lIH5zZWxlY3RlZCB+aW5wdXQgfm1ha2Vfc3RhbGU6KGZ1biAoa2V5LCBfKSAtPiBtYWtlX2tleV9zdGFsZSBrZXkpXG4gICAgaW5cbiAgICBzZXR1cF9nZW5lcmF0b3IgSC5oYXNoYWJsZSB+Y29tcHV0ZV9vdXRwdXQgfm1ha2VfaW5wdXRfbm9kZVxuXG4gIGxldCBzZWxlY3Rfb25lX3ZhbHVlIGggfmRlZmF1bHQgaW5wdXQgPVxuICAgIHNlbGVjdF9vbmVfdmFsdWUnIGggfmRlZmF1bHQgKEluY3IubWFwIH5mOk9wdGlvbi5zb21lIGlucHV0KVxuXG4gIGxldCBzZWxlY3RfbWFueV92YWx1ZXNcbiAgICAgICAgKHR5cGUgYSlcbiAgICAgICAgKG1vZHVsZSBIIDogSGFzaGFibGUuQ29tbW9uIHdpdGggdHlwZSB0ID0gYSlcbiAgICAgICAgfmRlZmF1bHRcbiAgICAgICAgaW5wdXRcbiAgICA9XG4gICAgbGV0IGhhc2hhYmxlID0gSC5oYXNoYWJsZSBpblxuICAgIGxldCBzZWxlY3RlZCA9IEhhc2h0YmwuVXNpbmdfaGFzaGFibGUuY3JlYXRlIH5zaXplOmhhc2h0Ymxfc2l6ZSB+aGFzaGFibGUgKCkgaW5cbiAgICBsZXQgY29tcHV0ZV9vdXRwdXQga2V5ID1cbiAgICAgIEhhc2h0YmwuZmluZCBzZWxlY3RlZCBrZXkgfD4gT3B0aW9uLnZhbHVlIH5kZWZhdWx0XG4gICAgaW5cbiAgICBsZXQgbWFrZV9pbnB1dF9ub2RlIH5tYWtlX2tleV9zdGFsZSA9XG4gICAgICBJbmNyLm1hcCBpbnB1dCB+ZjooZnVuIGlucCAtPlxuICAgICAgICBIYXNodGJsLml0ZXJfa2V5cyBzZWxlY3RlZCB+ZjptYWtlX2tleV9zdGFsZTtcbiAgICAgICAgSGFzaHRibC5jbGVhciBzZWxlY3RlZDtcbiAgICAgICAgTGlzdC5pdGVyIGlucCB+ZjooZnVuIChrZXksIGRhdGEpIC0+XG4gICAgICAgICAgbWFrZV9rZXlfc3RhbGUga2V5O1xuICAgICAgICAgIEhhc2h0Ymwuc2V0IHNlbGVjdGVkIH5rZXkgfmRhdGFcbiAgICAgICAgKSlcbiAgICBpblxuICAgIHNldHVwX2dlbmVyYXRvciBoYXNoYWJsZSB+Y29tcHV0ZV9vdXRwdXQgfm1ha2VfaW5wdXRfbm9kZVxuXG4gIGxldCBzZWxlY3RfbWFueVxuICAgICAgICAodHlwZSBhKVxuICAgICAgICAobW9kdWxlIEggOiBIYXNoYWJsZS5Db21tb24gd2l0aCB0eXBlIHQgPSBhKVxuICAgICAgICBpbnB1dFxuICAgID1cbiAgICBsZXQgaGFzaGFibGUgPSBILmhhc2hhYmxlIGluXG4gICAgbGV0IHNlbGVjdGVkID0gSGFzaF9zZXQuVXNpbmdfaGFzaGFibGUuY3JlYXRlIH5zaXplOmhhc2h0Ymxfc2l6ZSB+aGFzaGFibGUgKCkgaW5cbiAgICBsZXQgY29tcHV0ZV9vdXRwdXQga2V5ID0gSGFzaF9zZXQubWVtIHNlbGVjdGVkIGtleSBpblxuICAgIGxldCBtYWtlX2lucHV0X25vZGUgfm1ha2Vfa2V5X3N0YWxlID1cbiAgICAgIEluY3IubWFwIGlucHV0IH5mOihmdW4gaW5wIC0+XG4gICAgICAgIGxldCBvbGRfc2V0ID0gSGFzaF9zZXQuY29weSBzZWxlY3RlZCBpblxuICAgICAgICBIYXNoX3NldC5jbGVhciBzZWxlY3RlZDtcblxuICAgICAgICBMaXN0Lml0ZXIgaW5wIH5mOihmdW4ga2V5IC0+XG4gICAgICAgICAgaWYgbm90IChIYXNoX3NldC5tZW0gb2xkX3NldCBrZXkpIHRoZW5cbiAgICAgICAgICAgIG1ha2Vfa2V5X3N0YWxlIGtleTtcbiAgICAgICAgICBIYXNoX3NldC5hZGQgc2VsZWN0ZWQga2V5XG4gICAgICAgICk7XG5cbiAgICAgICAgSGFzaF9zZXQuaXRlciBvbGRfc2V0IH5mOihmdW4ga2V5IC0+XG4gICAgICAgICAgaWYgbm90IChIYXNoX3NldC5tZW0gc2VsZWN0ZWQga2V5KSB0aGVuXG4gICAgICAgICAgICBtYWtlX2tleV9zdGFsZSBrZXk7XG4gICAgICAgICkpXG4gICAgaW5cbiAgICBzZXR1cF9nZW5lcmF0b3IgaGFzaGFibGUgfmNvbXB1dGVfb3V0cHV0IH5tYWtlX2lucHV0X25vZGVcbmVuZFxuXG4iXX0=

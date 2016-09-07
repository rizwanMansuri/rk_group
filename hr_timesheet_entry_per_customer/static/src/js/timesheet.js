odoo.define('hr_timesheet_entry_per_customer.Addweeklytimesheet', function (require) {
"use strict";

var WeeklyTimesheet = require('hr_timesheet_sheet.sheet');
var core = require('web.core');
console.log('CALLLLLLLLLLLLLLLLLLLl', core)
//var data = require('web.data');
//var form_common = require('web.form_common');
//var formats = require('web.formats');
//`var Model = require('web.DataModel');
//var time = require('web.time');
//var utils = require('web.utils');
//
//var QWeb = core.qweb;
//var _t = core._t;
//
var timesheet_get = core.form_custom_registry.get('weekly_timesheet')
////
console.log(':LLLLL', timesheet_get)

var WeeklyTimesheet = timesheet_get.include({
        init_add_account : function(){
            this._super()
            var partner_id = this.field_manager.get_field_value("partner_id");
            var ctx = {'partner_id': partner_id, 'has_analytic_account': 'True'}
            var FieldMany2One = core.form_widget_registry.get('many2one');
            console.log(':::::::::::', partner_id, ctx, this.account_m2o)
            var id = this.account_m2o.get_value();
            console.log('::::::::::111111111111:', id)
//            this.account_m2o = new FieldMany2One(this.dfm, {
//                attrs: {
//                    name: "account",
//                    type: "many2one",
//                    domain: [
//                        ['id', 'not in', _.pluck(this.accounts, "account")],
//                    ],
//                    modifiers: '{"required": true}',
//                    context : ctx,
//                },
//        });
        },

//        init_add_account: function() {
//        if (this.dfm) {
//            this.dfm.destroy();
//        }
//        console.log('AAAAAAAAAAAAAAAAAAAAAAA')
//
//        var self = this;
//        this.$(".oe_timesheet_weekly_add_row").show();
//        this.dfm = new form_common.DefaultFieldManager(this);
//        this.dfm.extend_field_desc({
//            account: {
//                relation: "account.analytic.account",
//            },
//        });
//        var partner_id = this.field_manager.get_field_value("partner_id");
//        var ctx = {'partner_id': partner_id, 'has_analytic_account': 'True'}
//        var FieldMany2One = core.form_widget_registry.get('many2one');
//        this.account_m2o = new FieldMany2One(this.dfm, {
//            attrs: {
//                name: "account",
//                type: "many2one",
//                domain: [
//                    ['id', 'not in', _.pluck(this.accounts, "account")],
//                ],
//                modifiers: '{"required": true}',
//                context : ctx,
//            },
//        });
//        this.account_m2o.prependTo(this.$(".o_add_timesheet_line > div")).then(function() {
//            self.account_m2o.$el.addClass('oe_edit_only');
//        });
//        this.$(".oe_timesheet_button_add").click(function() {
//            var id = self.account_m2o.get_value();
//            if (id === false) {
//                self.dfm.set({display_invalid_fields: true});
//                return;
//            }
//
//            var ops = self.generate_o2m_value();
//            ops.push(_.extend({}, self.default_get, {
//                name: self.description_line,
//                unit_amount: 0,
//                date: time.date_to_str(self.dates[0]),
//                account_id: id,
//            }));
//
//            self.set({sheets: ops});
//            self.destroy_content();
//        });
//    },
});
});

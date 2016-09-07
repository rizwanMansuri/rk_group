from openerp import models, fields, api, _
from lxml import etree

class hr_timesheet_sheet_sheet(models.Model):
    _inherit = 'hr_timesheet_sheet.sheet'

    partner_id = fields.Many2one('res.partner', string='Customer')

    @api.multi
    def search_analyic_account(self):
        return True

class res_partner(models.Model):
    _inherit = 'res.partner'

    @api.model
    def name_search(self, name, args=None, operator='ilike', limit=100):
        res = super(res_partner, self).name_search(name=name, args=args, operator=operator, limit=limit)
        new_res = []
        context = dict(self._context)
        if context and context.get('has_analytic_account'):
            partner_rec = self.search([('customer', '=', True)])
            for partner in partner_rec:
                if partner.contract_ids:
                    new_res += partner.name_get()
            res = new_res
        return res

class account_analytic_account(models.Model):
    _inherit = 'account.analytic.account'

    @api.model
    def name_search(self, name, args=None, operator='ilike', limit=100):
        res = super(account_analytic_account, self).name_search(name=name, args=args, operator=operator, limit=limit)
        new_res = []
        context = dict(self._context)
        print 'CCCCCCCCCCCCCCCCC', context  
        if context and context.get('has_analytic_account') and context.get('partner_id'):
            account_analytic_rec = self.search([('partner_id', '=', context.get('partner_id'))])
            for account in account_analytic_rec:
                new_res += account.name_get()
            res = new_res
        return res

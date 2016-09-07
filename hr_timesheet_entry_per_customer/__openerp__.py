# -*- coding:utf-8 -*-
#
#
#    Copyright (C) 2011,2013 Michael Telahun Makonnen <mmakonnen@gmail.com>.
#    All Rights Reserved.
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as published
#    by the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
#

{
    'name': 'Hr timesheet entry per customer',
    'version': '1.0',
    'category': 'Generic Modules/Human Resources',
    'author': "RK Group",
    'website': '',
    'license': 'AGPL-3',
    'depends': [
        'account', 'hr_timesheet_sheet',
    ],
    'data': [
        'views/hr_timesheet_view.xml',
        'views/hr_timesheet_sheet.xml',
    ],
    'installable': True,
}

# ===========================================================================
# eXe
# Copyright 2004-2005, University of Auckland
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
# ===========================================================================

"""
NewPackagePage is the first screen the user loads.  It doesn't show
anything it just redirects the user to a new package.
"""

import logging
import gettext
from twisted.web.resource import Resource
from exe.webui import common
from exe.engine.packagestore  import g_packageStore
from exe.webui.authoringpage  import AuthoringPage
from exe.webui.propertiespage import PropertiesPage
from exe.webui.savepage       import SavePage
from exe.webui.loadpage       import LoadPage
from exe.webui.exportpage     import ExportPage

log = logging.getLogger(__name__)
_   = gettext.gettext


class NewPackagePage(Resource):
    """
    NewPackagePage is the first screen the user loads.  It doesn't show
    anything it just redirects the user to a new package.
    """
    
    def __init__(self):
        """
        Initialize
        """
        Resource.__init__(self)

    def getChild(self, name, request):
        """
        Get the child page for the name given
        """
        if name == '':
            return self
        else:
            return Resource.getChild(self, name, request)

    def render_GET(self, request):
        """
        Create a new package and redirect the webrowser to the URL for it
        """
        log.debug("render_GET" + repr(request.args))

        # Create new package
        package = g_packageStore.createPackage()
        log.info("Creating a new package name="+ package.name)

        authoringPage = AuthoringPage()
        self.putChild(package.name, authoringPage)

        propertiesPage = PropertiesPage()
        authoringPage.putChild("properties", propertiesPage)

        savePage = SavePage()
        authoringPage.putChild("save", savePage)

        loadpage = LoadPage()
        authoringPage.putChild("load", loadpage) 
        
        exportPage = ExportPage()
        authoringPage.putChild("export", exportPage)
                     
        # Rendering
        html  = common.docType()
        html += "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n"
        html += "<head><title>"+_("eXe")+"</title>\n"
        html += "<meta http-equiv=\"content-type\" content=\"text/html;"
        html += " charset=UTF-8\">\n";
        html += "<meta http-equiv=\"Refresh\" content=\"0; URL=http:/"
        html += package.name
        html += "\">\n"
        html += "</head>\n"
        html += common.banner()
        html += "<div id=\"main\"> \n"
        html += _("Click here:")
        html += "<a href=\"http:/"
        html += package.name
        html += "\">"
        html += package.name
        html += "</a>\n "
        html += "</div> \n"
        html += common.footer()
        return html

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

import sys
import logging
import gettext
import tempfile 
import os
import os.path
from package import Package

log = logging.getLogger(__name__)
_   = gettext.gettext


# ===========================================================================
class PackageStore:
    """
    PackageStore is responsible for managing the Packages which the eXe server
    has loaded, (and loading and saving them?)
    """
    def __init__(self):
        self.loaded = {}


    def createPackage(self, name=None):
        """
        Creates a package
        """
        log.debug("createPackage: name=" + repr(name))

        if name is None:
            #filename = tempfile.mkstemp('.pkg', 'New-', '.')[1]
            fileList = os.listdir(".")
            isDoing = True
            i = 1
            
            while isDoing:
                name = "package" + str(i)
                if name+".pkg" in fileList or name in self.loaded:
                    i += 1                    
                else:                        
                    isDoing = False
            
            filename = "package" + str(i) + ".pkg"
               
            name = os.path.splitext(os.path.basename(filename))[0]

        package = Package(name)
        self.loaded[package.name] = package

        return package

    def getPackage(self, name):
        """
        Get package using the name
        """
        return self.loaded[name]
    
    def addPackage(self, package):
        """
        Add a package
        """
        self.loaded[package.name] = package
    	

# nasty old global
g_packageStore = PackageStore()


# ===========================================================================

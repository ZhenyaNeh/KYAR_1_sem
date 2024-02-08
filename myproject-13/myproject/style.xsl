<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/main">
        <html>
            <body>
            <xsl:for-each select="list">
                <table border="1">
                    <xsl:for-each select="row1">
                    <tr>
                        <th><xsl:value-of select="coll1"/></th>
                        <th><xsl:value-of select="coll2"/></th>
                    </tr>
                    </xsl:for-each>
                    <xsl:for-each select="row">
                        <xsl:sort order="descending"/>
                        <tr>
                            <td bgcolor ="247719"><xsl:value-of select="coll3"/></td> 
                            <td bgcolor ="#E32636"><xsl:value-of select="coll4"/></td>
                        </tr>   
                    </xsl:for-each>
                </table>
            </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
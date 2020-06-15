import React from 'react'
import './headerfootercontrol.css'
import './dropdownmenucontrol.css'
import './maincategorydropdownmenu.css'
import './maincategorynavigation.css'
import '../basecase.css'

class headerApp extends React.Component { 
    render(){
        return (

<div id="header">

    <span id="logo">
        <img src="https://www.argos.ie/wcsstore/argosie/en_IE/images/headerfooter/images/argos_logo_header.gif" alt="Argos" />
    </span>

    <div id="globalNavigation">
        <div className="links">
            <div className="secondary">
                <ul>
                    <li>
                        <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosStoreLocatorDB?includeName=StoreLocator&amp;langId=111&amp;storeId=10152">Store locator</a>
                    </li>

                    <li>
                        <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosGSGiftModeExitCmd?action=ArgosCustomerServices?langId=111&amp;storeId=10152">Customer services</a>
                    </li>

                    <li className="newwindowlink">
                        <a href="https://competitions.argos.ie/email_signup/default.aspx?source=IEES1"
                             className="signup">Email Sign-Up</a>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div id="sitesearch">
                <ul>
                    <li className="first">
                        <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosOrderByCatView?storeId=10152&amp;langId=111&amp;catalogId=14551">Quick Shop</a>
                    </li>
                    <li>
                        <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosAToZCategoriesView?langId=111&amp;storeId=10152">A-Z Index</a>
                    </li>
                    <li className="last">
                        <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosGSGiftModeExitCmd?action=CheckPriceAndStockEntryCmd?langId=111&amp;storeId=10152">Stock checker</a>
                    </li>
                </ul>
                <form id="sb" name="sb" action="https://www.argos.ie/webapp/wcs/stores/servlet/Search" >
                    <fieldset title="Search the site">
                        <input type="hidden" name="storeId" value="10152" />
                        <input type="hidden" name="catalogId" value="14551" />
                        <input type="hidden" name="langId" value="111" />
                        <input id="search" name="searchTerms" type="text" value="Search by word or catalogue number" />
                        <input type="submit" className="searchbutton" value="" />
                    </fieldset>
                    <input type="hidden" name="authToken" value="349430325%2cldaaiK4fur05ftD7m%2fc0%2bpjlSmI%3d" id="authtoken_1" />
                </form>
            </div>
            <div className="primary">
            <div className="primaryInner">

                    <p className="welcome">
                        <span className="greeting">Hello </span>
                    </p>

                    <ul>
                        <li className="signIn">
                            <a href="https://www.argos.ie/webapp/wcs/stores/servlet/AccessMyAccount?langId=111&amp;storeId=10152&amp;returnURL=StoreCatalogDisplay%3FstoreId%3D10152">Sign in</a>
                        </li>
                        <li className="register">
                            <a href="https://www.argos.ie/webapp/wcs/stores/servlet/AccessMyAccount?langId=111&amp;storeId=10152&amp;edit=registeruser&amp;deleteCookie=true">Register</a>
                        </li>
                        <li className="signOut">
                            <a href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosLogoff?langId=111&amp;storeId=10152">Sign out</a>
                        </li>
                        <li className="myAccount last">
                            <a href="https://www.argos.ie/webapp/wcs/stores/servlet/EditMyAccount?langId=111&amp;storeId=10152&amp;returnToURL=EditMyAccount?langId=111&amp;storeId=10152"
                                className="">My account</a>
                        </li>
                    </ul>

                </div>

                <div className="trolley">

                    <p>
                        <a id="trolleylink" href="https://www.argos.ie/webapp/wcs/stores/servlet/ArgosGSGiftModeExitCmd?action=OrderItemDisplay?langId=111&amp;storeId=10152&amp;updateTrolley=true">My Trolley</a>
                        <span className="trolleysummary">(
                            <span id="trolleyitems"></span>
                            <span id="trolleyprice"></span>)</span>
                    </p>
                </div>

            </div>
        </div>
    </div>
    <div id="mainnav">
        <ul className="mainnavcategories navitems">
            <li className=" first ddm_14418476" rel="ddm_14418476">
                <a id="firstnavlink" className="maincategorylink" title="Kitchen &amp; Laundry" href="https://www.argos.ie/static/Browse/ID72/14418476/c_1/1|category_root|Kitchen+and+laundry|14418476.htm">
                    <span className="linkinner">
                        <span className="">Kitchen &amp; <br /> Laundry</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14417894" rel="ddm_14417894">
                <a className="maincategorylink" title="Home &amp; Furniture" href="https://www.argos.ie/static/Browse/ID72/14417894/c_1/1|category_root|Home+and+furniture|14417894.htm">
                    <span className="linkinner">
                        <span className="">Home &amp; <br /> Furniture</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14418702" rel="ddm_14418702">
                <a className="maincategorylink" title="Garden &amp; DIY" href="https://www.argos.ie/static/Browse/ID72/14418702/c_1/1|category_root|Garden+and+DIY|14418702.htm">
                    <span className="linkinner">
                        <span className="">Garden <br /> &amp; DIY</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14419152" rel="ddm_14419152">
                <a className="maincategorylink" title="Sports &amp; Leisure" href="https://www.argos.ie/static/Browse/ID72/14419152/c_1/1|category_root|Sports+and+leisure|14419152.htm">
                    <span className="linkinner">
                        <span className="">Sports &amp; <br /> Leisure</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14418350" rel="ddm_14418350">
                <a className="maincategorylink" title="Health &amp; Personal Care" href="https://www.argos.ie/static/Browse/ID72/14418350/c_1/1|category_root|Health+and+personal+care|14418350.htm">
                    <span className="linkinner">
                        <span className="">Health &amp; <br /> Personal Care</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14419512" rel="ddm_14419512">
                <a className="maincategorylink" title="Home Entertainment" href="https://www.argos.ie/static/Browse/ID72/14419512/c_1/1|category_root|Home+entertainment+and+sat+nav|14419512.htm">
                    <span className="linkinner">
                        <span className="">Home <br />Entertainment</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14419738" rel="ddm_14419738">
                <a className="maincategorylink" title="Video Games" href="https://www.argos.ie/static/Browse/ID72/14419738/c_1/1|category_root|Video+games|14419738.htm">
                    <span className="linkinner">
                        <span className="">Video <br />Games</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14419436" rel="ddm_14419436">
                <a className="maincategorylink" title="Photography" href="https://www.argos.ie/static/Browse/ID72/14419436/c_1/1|category_root|Photography|14419436.htm">
                    <span className="linkinner">
                        <span className="singleline">Photography</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14418968" rel="ddm_14418968">
                <a className="maincategorylink" title="Office, PCs &amp; Phones" href="https://www.argos.ie/static/Browse/ID72/14418968/c_1/1|category_root|Office%2C+PCs+and+phones|14418968.htm">
                    <span className="linkinner">
                        <span className="">Office, PCs <br /> &amp; Phones</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14417629" rel="ddm_14417629">
                <a className="maincategorylink" title="Toys &amp; Games" href="https://www.argos.ie/static/Browse/ID72/14417629/c_1/1|category_root|Toys+and+games|14417629.htm">
                    <span className="linkinner">
                        <span className="">Toys &amp; <br /> Games</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14417537" rel="ddm_14417537">
                <a className="maincategorylink" title="Nursery" href="https://www.argos.ie/static/Browse/ID72/14417537/c_1/1|category_root|Nursery|14417537.htm">
                    <span className="linkinner">
                        <span className="singleline">Nursery</span>
                    </span>
                </a>
            </li>
            <li className=" ddm_14416987" rel="ddm_14416987">
                <a className="maincategorylink" title="Jewellery &amp; Watches" href="https://www.argos.ie/static/Browse/ID72/14416987/c_1/1|category_root|Jewellery+and+watches|14416987.htm">
                    <span className="linkinner">
                        <span className="">Jewellery <br /> &amp; Watches</span>
                    </span>
                </a>
            </li>
            <li className=" last ddm_14417351" rel="ddm_14417351">
                <a className="maincategorylink" title="Gifts &amp; Hobbies" href="https://www.argos.ie/static/Browse/ID72/14417351/c_1/1|category_root|Gifts+and+hobbies|14417351.htm">
                    <span className="linkinner">
                        <span className="">Gifts <br /> &amp; Hobbies</span>
                    </span>
                </a>
            </li>
        </ul>
        <div className="pricecuts">
            <a className="maincategorylink" title="What&#39s Hot" href="https://www.argos.ie/static/Browse/ID72/Price+Cut/r_001/1|Price+Cut|Yes|1.htm">
                <span className="linkinner">
                    <span className="">What's Hot</span>
                </span>
            </a>
        </div>
    </div>
    <span className="clear"></span>
</div>);
    }
}

export default headerApp;
import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace id.apnv.starter.controller
 */
export default class Main extends BaseController {
	public onInit() {
		let oModel = new JSONModel()
		oModel.setData({
			"selectedKey": "page2",
			"navigation": [
				{
					"title": "API Proxy",
					"icon": "sap-icon://internet-browser",
					"key": "proxy"
				},
				{
					"title": "Users",
					"icon": "sap-icon://person-placeholder",
					"key": "users"
				}
			],
			"fixedNavigation": [
				{
					"title": "Github",
					"icon": "sap-icon://source-code"
				},
				{
					"title": "Logoff",
					"icon": "sap-icon://log",
					"key": "logoff"
				}
			]
		})
		this.getView().setModel(oModel)
	}
}

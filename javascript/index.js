Ext.ns('Demo', 'Demo.views', 'Demo.stores');

Ext.setup({
    phoneStartupScreen: 'images/phone_startup.png',
    icon: 'images/icon.png',
    glossOnIcon: false,
    
    onReady: function() {
		if (Ext.is.Android){
			Ext.get('demoStylesheet').dom.href = "sencha/css/android.css";
		}else if (Ext.is.iOS){
			Ext.get('demoStylesheet').dom.href = "sencha/css/apple.css";
		}
        var app = new Demo.App();
    }
});
// Ext.regApplication({
//     name: 'Demo',
// 	phoneStartupScreen: 'images/phone_startup.png',
//     icon: 'images/icon.png',
//     glossOnIcon: false,
// 	defaultUrl: 'demo/',
// 
//     launch: function() {
//         var app = new Demo.App();
//     }
// });

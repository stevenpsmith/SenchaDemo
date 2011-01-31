Demo.views.SpeakerDetails = Ext.extend(Ext.Panel, {
	layout: 'card',
	styleHtmlContent: true,
	
	initComponent: function() {
		this.detailView = new Ext.XTemplate(
		    '<div class="data-set">',
		      '<div class="field"><span class="label">Name:</span> {name}</div>',
			  '<div class="field"><span class="label">Position:</span> {position:ellipsis(40, true)}</div>',
			  '<div class="field"><span class="label">Bio:</span> {bio:ellipsis(60, true)}</div>',
			'</div>'
		);
		this.tpl = this.detailView;
	
		Demo.views.SpeakerDetails.superclass.initComponent.call(this);
		this.on('activate', this.onPanelActivate, this);
	},
	
	updateSpeaker: function(speaker) {
		Ext.getCmp('navBar').setTitle('Details');
		this.update(speaker.data);
		Ext.getCmp('navBar').doLayout();
	},
	
	onPanelActivate: function() {
		Ext.getCmp('navBar').items.get(0).show();
		Ext.getCmp('navBar').items.get(2).hide();
	}
});
Demo.views.SpeakerDetails = Ext.extend(Ext.Panel, {
	layout: 'card',
	
	initComponent: function() {
		this.form = new Ext.form.FormPanel ({
			items: [
				{
					xtype: 'fieldset',
					items: [
						{
				            xtype: 'textfield',
				            name : 'name',
				            label: 'Name',
							editable: false
				        },
						{
				            xtype: 'textfield',
				            name : 'position',
				            label: 'Position',
							editable: false
				        },
						{
				            xtype: 'textfield',
				            name : 'twitter',
				            label: 'Twitter',
							editable: false
				        },
						{
							xtype: 'textareafield',
							name: 'bio',
							label: 'Bio'
						}
					]
				}
		    ]
		});
		
		this.items = [this.form];
		
		Demo.views.SpeakerDetails.superclass.initComponent.call(this);
		
		this.on('activate', this.onPanelActivate, this);
	},
	
	updateSpeaker: function(speaker) {
		Ext.getCmp('navBar').setTitle(speaker.get('first_name') + ' ' + speaker.get('last_name'));
		this.form.load(speaker);
		Ext.getCmp('navBar').doLayout();
	},
	
	onPanelActivate: function() {
		Ext.getCmp('navBar').items.get(0).show();
		Ext.getCmp('navBar').items.get(2).hide();
	}
});
/*
 * File: app/view/LoginForm.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ProDooMobileApp.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.LoginForm',

    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Button'
    ],

    config: {
        cls: 'LoginFormCnt',
        itemId: 'LoginFormItemId',
        items: [
            {
                xtype: 'container',
                cls: 'loginProdoo',
                items: [
                    {
                        xtype: 'image',
                        height: 138,
                        src: 'resources/images/Login.png'
                    },
                    {
                        xtype: 'label',
                        cls: 'loginHeading',
                        html: 'Prodoo'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                cls: 'loginForm',
                itemId: 'LoginFieldSetItemId',
                padding: '20 20 0 20',
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'field',
                        itemId: 'LoginEmail',
                        clearIcon: false,
                        labelAlign: 'top',
                        name: 'Email',
                        value: 'nauman@prodoo.dk',
                        maxLength: 50,
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        cls: 'field',
                        itemId: 'LoginPassword',
                        clearIcon: false,
                        labelAlign: 'top',
                        name: 'Password',
                        value: 'password',
                        maxLength: 50,
                        placeHolder: 'Password'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'SignUpCnt',
                html: '<span class="forgot">Forgot password</span><br>Don\'t have an account?<br><span class=\'SignUp\'>Sign up</span> for free',
                itemId: 'SignUp',
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            element.on('tap',function(event){
                                var itemClick = event.target;
                                if(itemClick.className=="forgot"){
                                    G.ShowView("Register");
                                    G.show('forgotPasswordForm');
                                    G.get("createAccountBtn").setText('Forgot Password');
                                }
                                else if(itemClick.className=="SignUp"){
                                    G.ShowView('Register');
                                    G.show('registerationForm');
                                    //         G.get("createAccountBtn").setText('Forgot Password');

                                }
                                else if(itemClick.className=="facebook"){
                                    //Login();
                                    //         G.externalLogin('Facebook');

                                }
                                else if(itemClick.className=="linkdIn"){
                                    //IN.User.authorize();
                                    //        G.externalLogin('LinkedIn');

                                }
                                else if(itemClick.className=="visitor"){
                                    //         G.loadCommonLookups();
                                    //         G.ShowView("StartScreen");
                                }
                            });
                        },
                        event: 'painted'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        cls: 'visitorBtn',
                        itemId: 'visitorBtn',
                        text: 'Enter as a visitor'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'facebookBtn',
                                itemId: 'facebookLoginBtn',
                                text: 'Login with facebook'
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                cls: 'linkedinBtn',
                                itemId: 'linkedinBtn',
                                text: 'Login with linked in'
                            },
							{
                                xtype: 'button',
                                flex: 1,
                                cls: '',
                                itemId: 'logoutBtn',
                                text: 'Logout'
                            },
							 
                        ]
                    },
                    {
                        xtype: 'button',
                        cls: 'loginBtn',
                        itemId: 'loginButton',
                        text: 'Login'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onVisitorBtnTap',
                event: 'tap',
                delegate: '#visitorBtn'
            },
            {
                fn: 'onfacebookTap',
                event: 'tap',
                delegate: '#facebookLoginBtn'
            },
            {
                fn: 'onLinkedinBtnTap',
                event: 'tap',
                delegate: '#linkedinBtn'
            },
			{
                fn: 'onfacebooklogoutTap',
                event: 'tap',
                delegate: '#logoutBtn'
            }
        ]
    },

    onVisitorBtnTap: function(button, e, eOpts) {
        Account.onVisitBtnClick();
    },

    onfacebookTap: function(button, e, eOpts) {
        G.externalLogin('Facebook');
    },

	onfacebooklogoutTap: function(button, e, eOpts) {
        logoutFB();
    },
	
    onLinkedinBtnTap: function(button, e, eOpts) {
        G.externalLogin('LinkedIn');

    }

});
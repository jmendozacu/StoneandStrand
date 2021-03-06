define([
    'uiComponent',
    'ko',
], function (Component, ko) {
    'use strict';

    var ss_shipping_date = window.checkoutConfig.ssShippingDate;

    return Component.extend({
        defaults: {
            template: 'Ss_Checkout/form/element/ss-shipping-date',
            ss_shipping_date: ss_shipping_date
        },
    });
});

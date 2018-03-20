'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

// Payments
Route
  .group(() => {
  
      // User Resources
      Route.resource('payment', 'PaymentsPaymentController').apiOnly()
      Route.resource('sale', 'PaymentsSaleController').apiOnly()
      Route.resource('authorization', 'PaymentsAuthorizationController').apiOnly()
      Route.resource('orders', 'PaymentsOrderController').apiOnly()
      Route.resource('capture', 'PaymentsCaptureController').apiOnly()
      Route.resource('refund', 'PaymentsRefundController').apiOnly()

      
      Route.resource('billing-plans', 'PaymentsBillingPlanController').apiOnly()
      Route.resource('payouts', 'PaymentsPayoutController').apiOnly()
      Route.resource('payouts.payouts-item', 'PaymentsPayoutsPayoutItemController').apiOnly()

  }).prefix('api/v1/payments/')


// Vault
  Route
  .group(() => {
  
      // User Resources
      Route.resource('credit-cards', 'VaultCreditCardController').apiOnly()

  }).prefix('api/v1/vault/')


// Identity
  Route
  .group(() => {
  
      // User Resources
      Route.resource('userinfo', 'IdentityOpenIdConnectUserinfoController').apiOnly()

  }).prefix('api/v1/identity/')



Route.on('/').render('index')

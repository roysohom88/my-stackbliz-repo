// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const obj = `{visitorId:37f321029125fe5d40c5c617af4c2ad0}`;
console.log(encodeURI(obj));
const firstOrderFunc = () => console.log('Hello, I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// Import stylesheets
const regex = new RegExp(/^a...s$/);
const regex1 = new RegExp(
  '^(design|feature|bugfix|stage-fix|issue|prerelease|release|hotfix)[ a-zA-Z0-9._/-]+$'
);
console.log(regex1.test('designsdsd')); // true
var pattern = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
);
console.log(pattern.test('P@ssword7'));
const sum = async (a, b) => {
  return a + b;
};
sum(1, 4)
  .then(
    res => {
      console.log(res);
    },
    err => {
      console.error(err);
    }
  )
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Sohom');
  });
const json_arr_str = `[
  {
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "expires_date_ms": "1623224199000",
    "web_order_line_item_id": "1000000063175997",
    "transaction_id": "1000000823697357",
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "original_purchase_date_ms": "1623220601000",
    "expires_date": "2021-06-09 07:36:39 Etc/GMT",
    "purchase_date": "2021-06-09 06:36:39 Etc/GMT",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "original_transaction_id": "1000000823697357",
    "expires_date_pst": "2021-06-09 00:36:39 America/Los_Angeles",
    "subscription_group_identifier": "20552850",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date_pst": "2021-06-08 23:36:39 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "quantity": "1",
    "purchase_date_ms": "1623220599000"
  },
  {
    "purchase_date": "2021-06-09 07:36:39 Etc/GMT",
    "purchase_date_pst": "2021-06-09 00:36:39 America/Los_Angeles",
    "quantity": "1",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "web_order_line_item_id": "1000000063175998",
    "purchase_date_ms": "1623224199000",
    "original_purchase_date_ms": "1623220601000",
    "subscription_group_identifier": "20552850",
    "transaction_id": "1000000823744508",
    "expires_date_pst": "2021-06-09 01:36:39 America/Los_Angeles",
    "expires_date": "2021-06-09 08:36:39 Etc/GMT",
    "expires_date_ms": "1623227799000",
    "is_trial_period": "false",
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "is_in_intro_offer_period": "false",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "original_transaction_id": "1000000823697357",
    "in_app_ownership_type": "PURCHASED"
  },
  {
    "subscription_group_identifier": "20552850",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "web_order_line_item_id": "1000000063178103",
    "in_app_ownership_type": "PURCHASED",
    "expires_date_ms": "1623231399000",
    "expires_date": "2021-06-09 09:36:39 Etc/GMT",
    "transaction_id": "1000000823796314",
    "original_purchase_date_ms": "1623220601000",
    "is_trial_period": "false",
    "purchase_date_ms": "1623227799000",
    "is_in_intro_offer_period": "false",
    "quantity": "1",
    "purchase_date": "2021-06-09 08:36:39 Etc/GMT",
    "purchase_date_pst": "2021-06-09 01:36:39 America/Los_Angeles",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "expires_date_pst": "2021-06-09 02:36:39 America/Los_Angeles",
    "original_transaction_id": "1000000823697357"
  },
  {
    "subscription_group_identifier": "20552850",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "web_order_line_item_id": "1000000063180437",
    "purchase_date_ms": "1623231399000",
    "purchase_date_pst": "2021-06-09 02:36:39 America/Los_Angeles",
    "original_transaction_id": "1000000823697357",
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "is_trial_period": "false",
    "expires_date": "2021-06-09 10:36:39 Etc/GMT",
    "quantity": "1",
    "expires_date_ms": "1623234999000",
    "is_in_intro_offer_period": "false",
    "purchase_date": "2021-06-09 09:36:39 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "transaction_id": "1000000823848521",
    "expires_date_pst": "2021-06-09 03:36:39 America/Los_Angeles"
  },
  {
    "expires_date_ms": "1623238599000",
    "subscription_group_identifier": "20552850",
    "original_transaction_id": "1000000823697357",
    "expires_date": "2021-06-09 11:36:39 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "expires_date_pst": "2021-06-09 04:36:39 America/Los_Angeles",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "is_trial_period": "false",
    "purchase_date_pst": "2021-06-09 03:36:39 America/Los_Angeles",
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "purchase_date": "2021-06-09 10:36:39 Etc/GMT",
    "purchase_date_ms": "1623234999000",
    "in_app_ownership_type": "PURCHASED",
    "quantity": "1",
    "transaction_id": "1000000823896428",
    "web_order_line_item_id": "1000000063182885",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles"
  },
  {
    "product_id": "com.com.eAlarmSOS.yearlySubscription",
    "original_purchase_date_ms": "1623220601000",
    "original_transaction_id": "1000000823697357",
    "purchase_date_ms": "1623238599000",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "purchase_date": "2021-06-09 11:36:39 Etc/GMT",
    "is_trial_period": "false",
    "expires_date_ms": "1623242199000",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date_pst": "2021-06-09 04:36:39 America/Los_Angeles",
    "web_order_line_item_id": "1000000063185195",
    "transaction_id": "1000000823938017",
    "quantity": "1",
    "subscription_group_identifier": "20552850",
    "expires_date": "2021-06-09 12:36:39 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "expires_date_pst": "2021-06-09 05:36:39 America/Los_Angeles"
  },
  {
    "is_trial_period": "false",
    "subscription_group_identifier": "20552850",
    "quantity": "1",
    "transaction_id": "1000000823988521",
    "original_purchase_date_ms": "1623220601000",
    "purchase_date_pst": "2021-06-09 05:42:37 America/Los_Angeles",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "expires_date_ms": "1623242857000",
    "web_order_line_item_id": "1000000063187399",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "in_app_ownership_type": "PURCHASED",
    "is_in_intro_offer_period": "false",
    "purchase_date_ms": "1623242557000",
    "expires_date": "2021-06-09 12:47:37 Etc/GMT",
    "expires_date_pst": "2021-06-09 05:47:37 America/Los_Angeles",
    "purchase_date": "2021-06-09 12:42:37 Etc/GMT",
    "original_transaction_id": "1000000823697357",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT"
  },
  {
    "purchase_date": "2021-06-09 12:47:37 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "is_in_intro_offer_period": "false",
    "expires_date_ms": "1623243157000",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "is_trial_period": "false",
    "original_transaction_id": "1000000823697357",
    "transaction_id": "1000000823991397",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "web_order_line_item_id": "1000000063190033",
    "quantity": "1",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date_ms": "1623242857000",
    "subscription_group_identifier": "20552850",
    "expires_date_pst": "2021-06-09 05:52:37 America/Los_Angeles",
    "expires_date": "2021-06-09 12:52:37 Etc/GMT",
    "purchase_date_pst": "2021-06-09 05:47:37 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED"
  },
  {
    "original_transaction_id": "1000000823697357",
    "expires_date_pst": "2021-06-09 05:57:37 America/Los_Angeles",
    "expires_date": "2021-06-09 12:57:37 Etc/GMT",
    "expires_date_ms": "1623243457000",
    "purchase_date_ms": "1623243157000",
    "is_in_intro_offer_period": "false",
    "is_trial_period": "false",
    "purchase_date": "2021-06-09 12:52:37 Etc/GMT",
    "subscription_group_identifier": "20552850",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "quantity": "1",
    "purchase_date_pst": "2021-06-09 05:52:37 America/Los_Angeles",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "transaction_id": "1000000823994456",
    "web_order_line_item_id": "1000000063190186",
    "original_purchase_date_ms": "1623220601000",
    "in_app_ownership_type": "PURCHASED",
    "product_id": "com.com.eAlarmSOS.monthlySubscription"
  },
  {
    "in_app_ownership_type": "PURCHASED",
    "original_purchase_date_ms": "1623220601000",
    "purchase_date": "2021-06-09 12:57:37 Etc/GMT",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "purchase_date_pst": "2021-06-09 05:57:37 America/Los_Angeles",
    "purchase_date_ms": "1623243457000",
    "web_order_line_item_id": "1000000063190391",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "subscription_group_identifier": "20552850",
    "expires_date_pst": "2021-06-09 06:02:37 America/Los_Angeles",
    "is_trial_period": "false",
    "quantity": "1",
    "expires_date_ms": "1623243757000",
    "transaction_id": "1000000823997860",
    "expires_date": "2021-06-09 13:02:37 Etc/GMT",
    "original_transaction_id": "1000000823697357"
  },
  {
    "product_id": "com.com.eAlarmSOS.halfYearlySubscription",
    "purchase_date_ms": "1623243757000",
    "quantity": "1",
    "original_purchase_date_ms": "1623220601000",
    "subscription_group_identifier": "20552850",
    "purchase_date": "2021-06-09 13:02:37 Etc/GMT",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "expires_date_pst": "2021-06-09 06:32:37 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "purchase_date_pst": "2021-06-09 06:02:37 America/Los_Angeles",
    "expires_date_ms": "1623245557000",
    "web_order_line_item_id": "1000000063190598",
    "original_transaction_id": "1000000823697357",
    "expires_date": "2021-06-09 13:32:37 Etc/GMT",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "transaction_id": "1000000824000472",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT"
  },
  {
    "expires_date_pst": "2021-06-09 10:33:15 America/Los_Angeles",
    "purchase_date_ms": "1623259695000",
    "web_order_line_item_id": "1000000063190798",
    "original_purchase_date_ms": "1623220601000",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "purchase_date": "2021-06-09 17:28:15 Etc/GMT",
    "in_app_ownership_type": "PURCHASED",
    "expires_date": "2021-06-09 17:33:15 Etc/GMT",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "subscription_group_identifier": "20552850",
    "purchase_date_pst": "2021-06-09 10:28:15 America/Los_Angeles",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "is_in_intro_offer_period": "false",
    "is_trial_period": "false",
    "transaction_id": "1000000824147969",
    "original_transaction_id": "1000000823697357",
    "quantity": "1",
    "expires_date_ms": "1623259995000"
  },
  {
    "purchase_date_pst": "2021-06-09 10:33:15 America/Los_Angeles",
    "original_transaction_id": "1000000823697357",
    "in_app_ownership_type": "PURCHASED",
    "transaction_id": "1000000824149326",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "purchase_date_ms": "1623259995000",
    "expires_date": "2021-06-09 17:38:15 Etc/GMT",
    "quantity": "1",
    "original_purchase_date_ms": "1623220601000",
    "expires_date_ms": "1623260295000",
    "purchase_date": "2021-06-09 17:33:15 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "is_trial_period": "false",
    "web_order_line_item_id": "1000000063198824",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "subscription_group_identifier": "20552850",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "expires_date_pst": "2021-06-09 10:38:15 America/Los_Angeles"
  },
  {
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "quantity": "1",
    "original_transaction_id": "1000000823697357",
    "subscription_group_identifier": "20552850",
    "web_order_line_item_id": "1000000063198914",
    "purchase_date_pst": "2021-06-09 10:38:15 America/Los_Angeles",
    "purchase_date_ms": "1623260295000",
    "is_trial_period": "false",
    "transaction_id": "1000000824150780",
    "purchase_date": "2021-06-09 17:38:15 Etc/GMT",
    "expires_date": "2021-06-09 17:43:15 Etc/GMT",
    "expires_date_ms": "1623260595000",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "expires_date_pst": "2021-06-09 10:43:15 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "is_in_intro_offer_period": "false"
  },
  {
    "expires_date_pst": "2021-06-09 10:48:15 America/Los_Angeles",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "quantity": "1",
    "expires_date_ms": "1623260895000",
    "in_app_ownership_type": "PURCHASED",
    "expires_date": "2021-06-09 17:48:15 Etc/GMT",
    "purchase_date_pst": "2021-06-09 10:43:15 America/Los_Angeles",
    "original_purchase_date_ms": "1623220601000",
    "purchase_date_ms": "1623260595000",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "is_trial_period": "false",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "web_order_line_item_id": "1000000063199012",
    "original_transaction_id": "1000000823697357",
    "transaction_id": "1000000824152471",
    "purchase_date": "2021-06-09 17:43:15 Etc/GMT",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "20552850"
  },
  {
    "is_in_intro_offer_period": "false",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "expires_date": "2021-06-09 17:53:15 Etc/GMT",
    "purchase_date_pst": "2021-06-09 10:48:15 America/Los_Angeles",
    "original_purchase_date_ms": "1623220601000",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "web_order_line_item_id": "1000000063199109",
    "is_trial_period": "false",
    "transaction_id": "1000000824154341",
    "expires_date_pst": "2021-06-09 10:53:15 America/Los_Angeles",
    "purchase_date_ms": "1623260895000",
    "quantity": "1",
    "original_transaction_id": "1000000823697357",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date": "2021-06-09 17:48:15 Etc/GMT",
    "expires_date_ms": "1623261195000",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20552850"
  },
  {
    "purchase_date_pst": "2021-06-09 10:53:15 America/Los_Angeles",
    "quantity": "1",
    "subscription_group_identifier": "20552850",
    "is_in_intro_offer_period": "false",
    "expires_date": "2021-06-09 17:58:15 Etc/GMT",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date": "2021-06-09 17:53:15 Etc/GMT",
    "product_id": "com.com.eAlarmSOS.monthlySubscription",
    "transaction_id": "1000000824155785",
    "expires_date_ms": "1623261495000",
    "expires_date_pst": "2021-06-09 10:58:15 America/Los_Angeles",
    "original_purchase_date_ms": "1623220601000",
    "web_order_line_item_id": "1000000063199199",
    "purchase_date_ms": "1623261195000",
    "in_app_ownership_type": "PURCHASED",
    "is_trial_period": "false",
    "original_transaction_id": "1000000823697357",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles"
  },
  {
    "original_transaction_id": "1000000823697357",
    "quantity": "1",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "purchase_date_ms": "1623264271000",
    "web_order_line_item_id": "1000000063199297",
    "purchase_date_pst": "2021-06-09 11:44:31 America/Los_Angeles",
    "is_in_intro_offer_period": "false",
    "is_trial_period": "false",
    "expires_date": "2021-06-09 19:14:31 Etc/GMT",
    "in_app_ownership_type": "PURCHASED",
    "transaction_id": "1000000824173350",
    "expires_date_ms": "1623266071000",
    "product_id": "com.com.eAlarmSOS.halfYearlySubscription",
    "purchase_date": "2021-06-09 18:44:31 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "expires_date_pst": "2021-06-09 12:14:31 America/Los_Angeles",
    "subscription_group_identifier": "20552850"
  },
  {
    "expires_date_pst": "2021-06-09 12:44:50 America/Los_Angeles",
    "is_in_intro_offer_period": "false",
    "purchase_date_pst": "2021-06-09 12:14:50 America/Los_Angeles",
    "quantity": "1",
    "expires_date_ms": "1623267890000",
    "is_trial_period": "false",
    "web_order_line_item_id": "1000000063200250",
    "subscription_group_identifier": "20552850",
    "original_transaction_id": "1000000823697357",
    "transaction_id": "1000000824183600",
    "original_purchase_date_pst": "2021-06-08 23:36:41 America/Los_Angeles",
    "in_app_ownership_type": "PURCHASED",
    "expires_date": "2021-06-09 19:44:50 Etc/GMT",
    "product_id": "com.com.eAlarmSOS.halfYearlySubscription",
    "purchase_date": "2021-06-09 19:14:50 Etc/GMT",
    "original_purchase_date_ms": "1623220601000",
    "original_purchase_date": "2021-06-09 06:36:41 Etc/GMT",
    "purchase_date_ms": "1623266090000"
  }
]`;
const latest_receipt_info_arr = JSON.parse(json_arr_str);
latest_receipt_info_arr.sort((x, y) => {
  return x.purchase_date_ms - y.purchase_date_ms;
});
console.info(latest_receipt_info_arr);
const latest_receipt_info = latest_receipt_info_arr.pop();
console.info(latest_receipt_info);
/* paymentData = {
  billingIdentifier: latest_receipt_info.original_transaction_id,
  receipt: receipt,
  billing_type: billing_type,
  platform: uConst.platform_list.apple,
  amount: amount,
  payment_date: MomentUTC.getUTCDefaultDateTime(
    parseInt(latest_receipt_info.purchase_date_ms)
  ),
  renewal_date: MomentUTC.getUTCDefaultDateTime(
    parseInt(latest_receipt_info.expires_date_ms)
  ),
  subscription_status: JSON.parse(receipt.auto_renew_status)
    ? uConst.subscription_status_list.activated
    : uConst.subscription_status_list.stopped,
  environment: receipt.environment,
}; */

var value = '+919916489165';
var number = value.replace(/\D/g, '').slice(-10);
console.log(number);
const input = '9916489165';
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (input.match(regexEmail)) {
  console.log(true);
} else {
  console.log(false);
}

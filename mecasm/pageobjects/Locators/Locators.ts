class LocatorHome {

  get clientDashboard() {
    return $('//*[@id="kt_app_toolbar_container"]/div/h1');
  }

  get clickEvent() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[11]/a[1]/span[2]');
  }
  get inputEventName() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[1]/div[2]/div/div[3]/div[3]');
  }
  get eventSave() { 
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/button');
  }
  get clickEventEdit() {
    return $('//*[@id="datatable"]/tbody/tr[6]/td[7]/div/a[2]');
  }
  get eventTitleEdt() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[3]/div[3]');
  }
  get titleFontsize() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[2]/div[2]/div/button');
  }
  get selectTFontSize() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[2]/div[2]/div/div/a[12]');
  }
  get tFontBold() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[2]/div[4]/button[1]');
  }
  get tFontFamily() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[2]/div[3]/div/button');
  }
  get tFontFamilyclick() {
    return $('//*[@id="general"]/form/div[1]/div[1]/div/div[2]/div[3]/div/div/a[4]');
  }
  get editSubTitle() {
    return $('//*[@id="subtitle_en"]');
  }
  get updateClick() {
    return $('//*[@id="general"]/form/div[4]/button');
  }


  // ############ Start Event Settings Page Locator ############

  get clickSettings() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[2]/a/span[1]');
  }
  get selectDate1() {
    return $('//*[@id="start_date"]');
  }
  get selectDate2() {
    return $('//*[@id="end_date"]');
  }
  get startDate() {
    return $('//*[@id="kt_app_body"]/div[2]/div[2]/div/div[2]/div/span[4]');
  }
  get endDate() {
    return $('//*[@id="kt_app_body"]/div[3]/div[2]/div/div[2]/div/span[33]');
  }
  get clickEvStatus() {
    return $('//*[@id="setting"]/form/div[1]/div[1]/div[3]/div/span/span[1]/span');
  }
  get selectLan() {
    return $('//*[@id="setting"]/form/div[1]/div[1]/div[4]/div/span/span[1]/span');
  }
  get chngMemberNo() {
    return $('//*[@id="custom_label_of_membership_number"]');
  }
  get enableVote() {
    return $('//*[@id="allow_poll"]');
  }
  get clickUpdate() {
    return $('//*[@id="setting"]/form/div[2]/button');
  }

  //  ############ End Event Settings Page Locator ############
  //----------------------------------------------------------------------------//

  // ################## Start Event Layout page Locator ###########

  get clickLayout() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[3]/a');
  }
  get selectColor() {
    return $('//*[@id="page_background_color"]');
  }
  get updateLayout() {
    return $('//*[@id="kt_timeline_widget_4_3"]/div[3]/button');
  }
  get headerImage() {
    return $('//*[@id="header_image"]');
  }
  get bannerImage() {
    return $('//*[@id="login_header_image"]');
  }
  get layoutType() {
    return $('//*[@id="kt_timeline_widget_4_3"]/div[2]/div/div[1]/div[1]/span/span[1]/span');
  }
  get description() {
    return $('//*[@id="kt_timeline_widget_4_3"]/div[2]/div/div[2]/div[1]/div/div[3]/div[3]');
  }

  //  --------- End Event Layout page Locator -----------------//

  // -----------Start Event Login Form  locator ---------------//
  get loginFormBuilder() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[4]/a');
  }
  get clickHeader() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[3]/div[3]');
  }
  get clickFontSize() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[2]/div[2]/div/button');
  }
  get clickSizeValue() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div/a[11]');
  }
  get fontBold() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[2]/div[4]/button[1]');
  }
  get fontColorAro() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[2]/div[5]/div/button[2]/span');
  }
  get fontColor() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[1]/div/div[1]/div/div[2]/div[5]/div/div/div[2]/div[3]/div/div[6]/button[1]');
  }
  get clickFrame() {
    return $('//*[@id="frmb-1697607100470-control-box"]');
  }
  get catchdNumb() {
    return $('#frmb-1697607100470-control-box > li.icon-checkbox-group.input-control.input-control-6.ui-sortable-handle > span');
  }
  get dropNumb() {
    return $('//*[@id="frmb-1697607100470"]');
  }
  get custFldNumbEdit() {
    return $('//*[@id="frmb-1697607100470-fld-3-edit"]');
  }
  get numberTitle() {
    return $('//*[@id="label-frmb-1697607100470-fld-3"]');
  }
  get updateLogin() {
    return $('//*[@id="kt_timeline_widget_4_33"]/div[2]/button');
  }
  //registration Form Builder------

  get regFormBuilder(){
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[5]/a')
  }
  get clickFormHeader(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]')
  }
  get fontSizeH(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]')
  }
  get fontSizes(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[11]')
  }
  get boldFontH(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]')
  }
  get regFooter(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[3]')
  }
  get FooterFontS(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/button[1]')
  }
  get clickFFSize(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/a[10]')
  }
  get fontItalic(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[4]/button[2]')
  }
  get updateRegForm(){
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[5]/div[1]/form[1]/div[1]/div[2]/button[1]')
  }

  //------End Event Login Form builder locator-----------------//
  // ################## Start Stream  page Locator ###########

  get clickStream() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[3]/a');
  }
  get createStream() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a');
  }
  get inputStreamName() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[1]/div[1]/div/div[3]/div[3]');
  }
  get inputSubTitle() {
    return $('//*[@id="subtitle_en"]');
  }
  get selectEvent() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[1]/span/span[1]/span');
  }
  get streamSave() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/button');
  }

  //  ############ End Stream Create page Locator ############
  //----------------------------------------------------------------------------//

  // ################## Start Stream  Settings Locator ###########

  get clickEventSelect() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[2]/div/div/span[2]/span[1]/span');
  }
  get clickStreamEdit() {
    return $('//*[@id="datatable"]/tbody/tr[3]/td[7]/div/a[2]/i');
  }
  get editSlug() {
    return $('//*[@id="slug"]');
  }
  get updateStream() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/button');
  }
  get streamSettings() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[2]/a/span[1]');
  }
  get st_date1() {
    return $('//*[@id="start_time"]');
  }
  get st_date2() {
    return $('//*[@id="end_time"]');
  }
  get startDates() {
    return $('//*[@id="kt_app_body"]/div[5]/div[2]/div/div[2]/div/span[8]');
  }
  get endDates() {
    return $('//*[@id="kt_app_body"]/div[6]/div[2]/div/div[2]/div/span[31]');
  }

  get streamStatus() {
    return $('//*[@id="kt_timeline_widget_4_tab_week"]/form/div[1]/div[1]/div[3]/div/span/span[1]/span');
  }
  get inputVideoUrl() {
    return $('//*[@id="stream_url_en"]');
  }
  get streamUpdate() {
    return $('//*[@id="kt_timeline_widget_4_tab_week"]/form/div[2]/button');
  }

  //------------Layout Settings Locator ------------------//
  get streamLayout() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[3]/a/span[1]');
  }
  get streamColor() {
    return $('//*[@id="page_background_color"]');
  }
  get pickColor() {
    return $('//*[@id="kt_app_body"]/div[7]/div[1]/div[1]/div[3]/span[2]/span');
  }
  get streamLayoutType() {
    return $('//*[@id="kt_timeline_widget_4_3"]/div[1]/div/div[1]/div[2]/span/span[1]/span')
  }
  get updtLayout() {
    return $('//*[@id="kt_timeline_widget_4_3"]/div[4]/button')
  }

  //---------- Messaging locator Start-----------------//

  get messaging() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[6]/a/span[2]')
  }
  get replyMessage() {
    return $('//*[@id="question_list"]/table/tbody/tr[1]/td[4]/div/button[1]')
  }
  get messageBody() {
    return $('//*[@id="kt_app_content_container"]/div/div/div/div/div[1]/div/div[1]/div/div/div[2]/div[2]/form/div[1]/div[1]')
  }
  get clickmessageBody() {
    return $('//*[@id="kt_app_content_container"]/div/div/div/div/div[1]/div/div[1]/div/div/div[2]/div[2]/form/div[1]/div[1]/input')
  }
  get sendMessage() {
    return $('//*[@id="kt_app_content_container"]/div/div/div/div/div[1]/div/div[1]/div/div/div[2]/div[2]/form/div[1]/div[2]/button')
  }
  get liveSupprt() {
    return $('//*[@id="app"]/div/div[1]/ul/li[2]/a/span[1]')
  }
  get click1st() {
    return $('//*[@id="user_div"]/div/div[1]/div[1]')
  }
  get click5th() {
    return $('//*[@id="user_div"]/div/div[5]/div[1]')
  }
  get typeMsg() {
    return $('//*[@id="kt_chat_messenger_footer"]/textarea')
  }
  get sendMsg() {
    return $('//*[@id="kt_chat_messenger_footer"]/div[3]/button')
  }

  //-----------------  Messaging locator end ---------------------------//

  //--------------event Participant Locator Start Here------------------//

  get eventParticipant() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[8]/a/span[2]')
  }
  get addEventParticpnt() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/div/div/a[1]')
  }
  get participantName() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div/form/div/div[1]/input')
  }
  get participanteEmail() {
    return $('//*[@id="email"]')
  }
  get participantePass() {
    return $('//*[@id="password"]')
  }
  get clickVoter() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div/form/div/div[4]/span/span[1]/span')
  }
  get appearSelect() {
    return $('//*[@id="select2-voter-results"]')
  }
  get selectVoter() {
    return $("//li[@id='select2-voter-result-d415-Yes']")
  }
  get classSelect() {
    return $('//*[@id="class_div"]/span/span[1]/span')
  }
  get selectClass1() {
    return $('//*[@id="select2-selectClass-result-e9ni-Class 1"]')
  }
  get selectClass3() {
    return $('//*[@id="select2-selectClass-result-uipn-Class 3"]')
  }
  get setClassWeight1() {
    return $('//*[@id="class_1"]/input')
  }
  get setClassWeight3() {
    return $('//*[@id="class_1"]/input')
  }
  get saveButton() {
    return $('//*[@id="submit_btn"]')
  }

  //-------------End Create Event Participants.----------------------//

  //-------------Start Edit Event Participants.----------------------//

  get editParticipant() {
    return $('//*[@id="datatable"]/tbody/tr[1]/td[11]/div/a[2]/span/i')
  }
  get memberNo() {
    return $('//*[@id="membership_number"]')
  }
  get clickClass() {
    return $('//*[@id="class_div"]/span/span[1]/span')
  }
  get addClass() {
    return $('//*[@id="select2-selectClass-result-i0zg-Class 3"]')
  }
  get weightEdit1() {
    return $('//*[@id="class_1"]/input')
  }
  get weightEdit2() {
    return $('//*[@id="class_2"]/input')
  }
  get updateParticipant() {
    return $('//*[@id="submit_btn"]')
  }
  get pagination2() {
    return $('//*[@id="datatable_paginate"]/ul/li[3]')
  }
  get enableCheck1() {
    return $('//*[@id="datatable"]/tbody/tr[4]/td[1]/div/input')
  }
  get enableCheck2() {
    return $('//*[@id="datatable"]/tbody/tr[5]/td[1]/div/input')
  }
  get voterUnvoter() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[2]/button[3]')
  }
  get frameOpen() {
    return $('//*[@id="kt_modal_new_target_new"]/div/div')
  }

  get classSelectPu() {
    return $('//*[@id="class_div"]/span[1]/span[1]/span/span/textarea')
  }
  get submitVoter() {
    return $('//*[@id="voter_submit"]/span[1]')
  }
  get popUpOpen() {
    return $('//*[@id="kt_app_body"]/div[5]/div')
  }
  get varifyUser() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[2]/button[1]')
  }
  get yesVerify() {
    return $('//*[@id="kt_app_body"]/div[5]/div/div[6]/button[1]')
  }

  //--------------End Event participant update-------------//

  //--------------Start Emeil Blust----------------------//

  get clickEmailBlast() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/div/div/a[4]')
  }
  get emailSubject() {
    return $('//*[@id="subject"]')
  }
  get emailBody() {
    return $('//*[@id="#kt_app_body_content"]/div/table/tbody/tr[2]/td')
  }
  get sendEmail() {
    return $('//*[@id="submit_btn"]')
  }

  //------------ End Email Blust Locator-----------------------//

  //-----------start Client User Create and Update--------------//
  get ca_Users() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[11]/a[2]/span[2]')
  }
  get userCreate() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a')
  }
  get enterFName() {
    return $('//*[@id="first_name"]')
  }
  get enterLName() {
    return $('//*[@id="last_name"]')
  }
  get enterUserEmail() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[1]/input')
  }
  get removeModule() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[2]/span/span[1]/span/button')
  }
  get clickModuleAcc() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[2]/span/span[1]')
  }
  get enterPhone() {
    return $('//*[@id="phone"]')
  }
  get eventAccess() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/div/div[1]/div[2]/span/span[1]/span')
  }
  get enterPass() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/div/div[2]/div[1]/input')
  }
  get saveUser() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[3]/button')
  }

  //------------ End Email Blust Locator-----------------------//

  //-----------start Client User Create and Update--------------//  

  get caClient() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[11]/a[3]/span[2]')
  }
  get createClient() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a')
  }
  get inputFName() {
    return $('//*[@id="first_name"]')
  }
  get inputLName() {
    return $('//*[@id="last_name"]')
  }
  get inputEmail() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[1]/input')
  }
  get inputPhone() {
    return $('//*[@id="phone"]')
  }
  get maxNumbeEvent() {
    return $('//*[@id="max_number_of_events"]')
  }
  get inputPass() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/div/div[2]/div[1]/input')
  }
  get maxNumberStream() {
    return $('//*[@id="max_number_of_webcasts"]')
  }
  get activeInactive() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[2]/div/div[3]/div/div/div/div/input')
  }
  get removeModules() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[2]/span/span[1]/span/button')
  }
  get moduleAccess() {
    return $('//*[@id="kt_timeline_widget_4_tab_day"]/form/div[1]/div/div[2]/div[2]/span/span[1]/span')
  }
  get saveClient() {
    return $('//*[@id="kt_sign_in_submit"]')
  }

  //-----------End Client User Create and Update--------------//

  //-----------start Support Ticket Create and Update--------------//

  get supportTicket() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[12]/a/span[2]')
  }
  get createSuppTicket() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/a')
  }
  get inputSubject() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[1]/input')
  }
  get supportTicketCategroy() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[2]/div[1]/span/span[1]/span')
  }
  get clickCategory() {
    return $('//*[@id="kt_app_body"]/span/span/span[1]')
  }
  get priority() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[2]/div[2]/span/span[1]/span')
  }
  get selectPriority() {
    return $('//*[@id="kt_app_body"]/span/span/span[1]/input')
  }
  get inputDescription() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[3]/textarea')
  }
  get uploadAttachement() {
    return $('//*[@id="inputGroupFile02"]')
  }
  get saveSupport() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[5]/button')
  }

  get clickAction() {
    return $('//*[@id="kt_datatable_example_1"]/tbody/tr[1]/td[8]/a')
  }
  get clickEdit() {
    return $('//*[@id="kt_datatable_example_1"]/tbody/tr[1]/td[8]/div/div[2]/a')
  }
  get clickViewReply() {
    return $('//*[@id="kt_datatable_example_1"]/tbody/tr[1]/td[8]/div/div[1]/a')
  }
  get clickReplyDesc() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div[2]/div/form/div[1]/div/div[3]/div[3]')
  }
  get replyTicket() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div[2]/div/form/div[2]/div/button')
  }
  get clickBack() {
    return $('//*[@id="kt_app_toolbar_container"]/a')
  }
  get clickCategory1() {
    return $('//*[@id="kt_ecommerce_settings_general_form"]/div[2]/div[1]/span/span[1]/span')
  }
  get updateSuup() {
    return $('//*[@id="kt_sign_in_submit"]')
  }

  //----------------- End of Support Ticket locator-------------------//

  //------------------Start Settings page Locator---------------------//


  get settings() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[13]/span/span[2]')
  }
  get settingsGen() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[13]/div/div[1]/a')
  }
  get cngLogo() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[1]/label/input[1]')
  }
  get genFName() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[2]/div[1]/input')
  }
  get genLName() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[2]/div[2]/input')
  }
  get genPhoneNo() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[3]/div[2]/input')
  }
  get genCountry() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[4]/div[1]/span/span[1]/span')
  }
  get genState() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[4]/div[2]/input')
  }
  get genCity() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[5]/div[1]/input')
  }
  get genPostCode() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[5]/div[2]/input')
  }
  get genStreatAdd() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[6]/div[1]/input')
  }
  get settingsSave() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[7]/button')
  }

  //Change Passoword locator
  get passwordCng() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[2]/a/span[1]')
  }
  get currentPass() {
    return $('//*[@id="kt_timeline_widget_4_3"]/form/div[1]/input')
  }
  get newPass() {
    return $('//*[@id="kt_timeline_widget_4_3"]/form/div[2]/input')
  }
  get confirmPass() {
    return $('//*[@id="kt_timeline_widget_4_3"]/form/div[3]/input')
  }

  get updatePass() {
    return $('//*[@id="kt_timeline_widget_4_3"]/form/button')
  }

  //--------------------- End of General Settings locator------------//

  //--------------------start email settings locator----------------//

  get emailSetup() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[13]/div/div[2]/a/span[2]')
  }
  get fromName() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[1]/input')
  }
  get fromEmail() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[2]/input')
  }
  get mailHost() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[3]/input')
  }
  get mailPort() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[4]/input')
  }
  get mailUserName() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[5]/input')
  }
  get mailPassword() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[6]/input')
  }
  get mailEncryption() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/div/div[7]/span/span[1]/span')
  }
  get updateMail() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[1]/form/button')
  }
  get sendTestmail() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/form/div/div[1]/input')
  }
  get mailContent() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/form/div/div[2]/input')
  }
  get mailSend() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/form/div/div[3]/button')
  }
  //email template Locator

  get emailTemplate() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[13]/div/div[3]/a/span[2]')
  }
  get templateManage() {
    return $('//*[@id="kt_app_content"]/div/div/div/table/tbody/tr[5]/td[3]/a')
  }
  get tempsubject() {
    return $('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[2]/input[1]')
  }
  get tempHeader() {
    return $('//*[@id="#kt_app_body_content"]/div/table/tbody/tr[1]/td/div[2]/div/p[1]')
  }
  get tempDesc() {
    return $('//*[@id="#kt_app_body_content"]/div/table/tbody/tr[1]/td/div[2]/div/p[2]')
  }
  get tempSave() {
    return $('//*[@id="kt_app_main"]/div/form/div/button')
  }

  //-------------------End of Email Settings Locator---------------//
  //-------------------Start Votings locator-----------------------//

  get votings() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[5]/a')
  }
  get addVote() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div[1]/div/div/a[1]')
  }
  get inputTitle() {
    return $('//*[@id="title_en"]')
  }
  get voteType() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/div[1]/div[2]/span[1]/span[1]/span')
  }
  get displyTime() {
    return $('//*[@id="display_time"]')
  }
  get voteStatus() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/div[2]/div[2]/span[1]/span[1]/span')
  }
  get displyType() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/div[2]/div[4]/div[1]/span[1]/span[1]/span')
  }
  get accessType() {
    return $('//*[@id="kt_app_main"]/div/div[2]/div/div[2]/div[2]/div[4]/div[2]/span[1]/span[1]/span')
  }
  get priorityCheck() {
    return $('//*[@id="priority"]')
  }

  get numberOfCheck() {
    return $('//*[@id="number_of_secetion_for_checkbox_poll"]')
  }
  get checkBoxGroup() {
    return $('//*[@id="frmb-1698309799494-control-box"]/li[3]')
  }
  get saveVote() {
    return $('//*[@id="submit_btn"]')
  }
  get formbuilder() {
    return $('//*[@id="poll_formbuilder"]')
  }
  get dragableArea() {
    return $('//*[@id="frmb-1698309799494-stage-wrap"]')
  }

  //voting LIve
  get liveVoteOn() {
    return $('//*[@id="display_live_188"]')
  }
  get voteResultOn() {
    return $('//*[@id="is_display_result_188"]')
  }

  get clickEventLivepage() {
    return $('//*[@id="datatable"]/tbody/tr[1]/td[1]/a')
  }
  get inputEventUser() {
    return $('//*[@id="app"]/div[2]/div[2]/div/div/div[1]/div/div[2]/div/form/div[1]/input')
  }
  get loginUser() {
    return $('//*[@id="app"]/div[2]/div[2]/div/div/div[1]/div/div[2]/div/form/div[5]/button')
  }
  get giveVote() {
    return $('//*[@id="sidebar_voting_accordian_body"]/div/div/div/div[1]/div[1]/div[2]/div/div/button[1]')
  }
  get checkBoxS2() {
    return $('//*[@id="checkbox_2"]')
  }
  get radioChk2() {
    return $('//*[@id="2"]')
  }
  get submitVote() {
    return $('//*[@id="sidebar_voting_accordian_body"]/div/div/div/div[2]/div/div[2]/div/button')
  }

  //------------ Analytics Page Locator start-------------//
  get openStream() {
    return $('//*[@id="datatable"]/tbody/tr[1]/td[1]/a')
  }
  get streamLogin() {
    return $('//*[@id="app"]/div[2]/div[2]/div/div/div[1]/div/div[2]/div/form/div[1]/input')
  }
  get loginButton() {
    return $('//*[@id="app"]/div[2]/div[2]/div/div/div[1]/div/div[2]/div/form/div[5]/button')
  }
  get askQuestion() {
    return $('//*[@id="app"]/div[4]/div[2]/div[4]/div[3]/div/form/div[1]/input')
  }
  get sendQues() {
    return $('//*[@id="app"]/div[4]/div[2]/div[4]/div[3]/div/form/div[1]/div/button')
  }
  get analitics() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[7]/a/span[2]')
  }
  get chartView() {
    return $('//*[@id="app"]/div[1]/div[1]/div/div/div[1]/div/span/span[1]/span')
  }
  get ThisYear() {
    return $('//*[@id="kt_app_body"]/span/span/span[1]/input')
  }

  //--------------------------Start Pages locator --------------//

  get pages() {
    return $('//*[@id="#kt_app_sidebar_menu"]/div[4]/a/span[2]')
  }
  get createPages() {
    return $('//*[@id="kt_app_content_container"]/div/div[1]/div[2]/div/a')
  }
  get inputPTitle() {
    return $('//*[@id="title_en"]')
  }
  get inputPName() {
    return $('//*[@id="name_en"]')
  }
  get pageStatus() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[3]/span/span[1]/span')
  }
  get selectPublish() {
    return $('//*[@id="select2-status-ku-result-07ks-1"]')
  }
  get uploadImage() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[8]/button[2]')
  }
  get selectImage() {
    return $('//*[@id="note-dialog-image-file-16987311753761"]')
  }
  get savePage() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[2]/div/button')
  }
  get editorPage() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[3]/div[3]')
  }
  get textBold() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[4]/button[1]')
  }
  get textSize() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[2]/div/button')
  }
  get textSizeClick() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[2]/div/div/a[13]')
  }
  get textSizes() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[2]/div/div/a[9]')
  }
  get clickColor() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[5]/div/button[2]/span')
  }

  get textBg() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[5]/div/div/div[1]/div[3]/div/div[7]/button[4]')
  }
  get textColor() {
    return $('//*[@id="kt_app_main"]/div/div[2]/form/div[1]/div[5]/div/div[2]/div[5]/div/div/div[2]/div[3]/div/div[6]/button[1]')
  }

  get globalSettings() {
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[2]/a/span[1]')
  }
  get setTitle() {
    return $('//*[@id="title_en"]')
  }
  get uploadLogo() {
    return $('//*[@id="logo_image"]')
  }
  get uploadFavicon() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[2]/div/div/div[2]/div/div[2]/label')
  }
  get primaryColor() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[3]/div/div/div[1]/div/span/input')
  }
  get secondaryColor() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[3]/div/div/div[2]/div/span/input')
  }
  get textColors() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[3]/div/div/div[3]/div/span/input')
  }
  get updateGSetting() {
    return $('//*[@id="kt_timeline_widget_4_1"]/div[4]/button')
  }
  //Menu Locator for page

  get menuClick(){
    return $('//*[@id="kt_app_content"]/div[1]/ul/li[3]/a/span[1]')
  }
  get clickPage(){
    return $('//*[@id="kt_accordion_page_header_page"]/button')
  }
  get clickPageList(){
    return $('//*[@id="kt_accordion_page_body_page"]/div/span/span[1]/span')
  }
  get clickStrm(){
    return $('//*[@id="kt_accordion_webcast_header_webcast"]/button')
  }
  get clickStrmList(){
    return $('//*[@id="select2-menu_webcasts-container"]')
  }
  get addPagetoMenu(){
    return $('//*[@id="kt_accordion_page_body_page"]/div/a')
  }
  get addStrmTomenu(){
    return $('//*[@id="kt_accordion_webcast_body_webcast"]/div/a')
  }




}

export default LocatorHome;
//module.exports = new LocatorHome();
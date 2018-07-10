
      (function(){
        olark.extend('CartSaver');
olark.extend('Sounds');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"CartSaver":{"enabled":true,"type":"magento","version":"1.0.7"},"Sounds":{"enabled":true},"system":{"feedback_survey_cancel_text":"Cancel","branding_link_text":"Powered by Olark","before_chat_text":"Chat with us!","feedback_survey_question_operator_attitude_low":"Not at all friendly","allow_change_width":true,"allow_change_colors":true,"feedback_survey_question_5_text":"Question 5 of 5","hide_not_available":0,"file_type_error_text":"This file type is not allowed.","restart_chat_offline_button_text":"Leave a message","inline_css_url_quirks":"static.olark.com/css/c/5/c57177fb5497e1053f613e9dbd8d4106.css","conversation_id_error_text":"File uploading is currently unavailable.","prechat_email_validation_message":"Please enter a valid email address","feedback_survey_question_2_text":"Question 2 of 5","prechat_survey_website_placeholder":"Enter your website...","feedback_survey_question_operator_speed_low":"Not at all responsive","top_margin":0,"habla_offline_sent_text":"Thanks for your message!  We'll get back to you shortly.","feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","offline_phone_validation_message":"Please enter a valid phone number","left_margin":20,"branding":"powered_by","habla_offline_email_text":"click here and type your Email","operator_has_stopped_typing_text":"has stopped typing","offline_survey_phone_label":"Phone","upload_rejected_error_text":"File uploading is currently unavailable.","dismiss_message_text":"Dismiss","feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","hb_position":"right","file_size_error_text":"This file size is too large.","disable_default_visitor_information":0,"end_chat_button_text":"End Chat","pre_chat_error_text":"Please enter your name and email in case we get disconnected.","feedback_survey_begin_button_text":"Rate Chat","prechat_survey_website_label":"Website","email_body_error_text":"You must complete all fields and specify a valid email address","offline_button_text":"Contact us!","default_localization":"en-US","not_available_text":"Contact us!","offline_survey_next_button_text":"Next","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?","disable_extra_br":true,"hb_dark_theme":false,"feedback_survey_button_finish":"Finish","hb_show_as_tab":true,"close_hides_window":0,"offline_msg_mode":1,"offline_survey_phone_placeholder":"Enter your phone number...","show_popout":0,"prechat_survey_name_placeholder":"Enter your name...","branding_panel_cancel_text":"Go back","offline_header_text":"Contact us!","feedback_survey_question_1_text":"Question 1 of 5","prechat_phone_validation_message":"Please enter a valid phone number","right_to_left":false,"feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","feedback_survey_question_operator_attitude_high":"Extremely friendly","branding_panel_message_text":"10,000+ companies rely on Olark software to chat with customers directly.","visitor_id_error_text":"File uploading is currently unavailable.","feedback_survey_question_operator_speed_high":"Extremely responsive","offline_survey_name_label":"Name","offline_survey_submit_button_text":"Send","pre_chat_submit":"Click here to start chatting","habla_name_input_text":"click here and type your Name","habla_offline_submit_value":"Send","prechat_survey_submit_button_text":"Start chatting","feedback_survey_question_chat_low":"Not at all satisfied","feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","right_margin":20,"offline_survey_email_placeholder":"Enter your email...","hb_show_button_text":true,"prechat_survey_phone_label":"Phone","show_pre_chat":0,"offline_message":"Live help is displayed for demo purposes only. To add it to your store please refer to the template documentation or \u003Ca href=\"http://www.olark.com/?r=ad8fbsj2\"\u003EOlark Live chat official website. \u003C/a\u003E","bottom_margin":0,"feedback_survey_end_message":"Thank you for your feedback :)","online_header_text":"Now Chatting","send_transcript_title_text":"Send Transcript","offline_email_validation_message":"Please enter a valid email address","require_offline_phone":0,"feedback_survey_button_next":"Next","use_theme":"bouncing_buzzard","allowed_domains":"","habla_offline_phone_text":"click here and type your Phone","send_transcript_error_text":"Please enter a valid email address","branding_panel_link_text":"Try Olark on your site","feedback_survey_question_4_text":"Question 4 of 5","feedback_survey_question_chat_text":"How satisfied were you with this chat?","prechat_required_error_message":"Please complete all required fields","habla_offline_body_text":"We're not around but we still want to hear from you!  Leave us a note:","start_hidden":0,"feedback_survey_complete_button_text":"Feedback Sent","inline_css_url":"static.olark.com/css/c/b/cbb092d6554938a9549cb716ffcb1f94.css","offline_survey_name_placeholder":"Enter your name...","prechat_survey_phone_placeholder":"Enter your phone number...","hb_primary_color":"#5ba0d0","operator_is_typing_text":"is typing...","feedback_survey_button_submitting":"Submitting","disable_width":true,"offline_website_validation_message":"Please enter a valid URL","hashchange_events_trigger_page_change":0,"hb_disable_mobile":true,"offline_required_error_message":"Please complete all required fields","offline_survey_welcome_message":"We're not around but we still want to hear from you! Leave us a note:","feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","allow_mobile_boot":0,"in_chat_text":"Now Chatting","welcome_msg":"Questions? We'd love to chat!","disable_offline_messaging_fallback":true,"send_transcript_complete_button_text":"Transcript Sent","start_expanded":0,"offline_survey_email_label":"Email","offline_survey_thank_you_message":"Thanks for your message! We will have a member of our team contact you shortly.","popout_css_url":"static.olark.com/css/9/8/98c23c22d4700f33524c3faf5aa12bd2.css","hb_enable_uploads":true,"offline_survey_website_label":"Website","prechat_survey_email_placeholder":"Enter your email...","ended_chat_message":"This chat has ended, start typing below if you need anything else!","inline_css_url_ie":"static.olark.com/css/7/f/7f64cf9c8017bad7f8bfbb157871daed.css","restart_chat_online_button_text":"Start conversation","feedback_survey_question_3_text":"Question 3 of 5","prechat_survey_welcome_message":"Hi! Let\u2019s get some quick info so we can better serve you:","send_transcript_begin_button_text":"Send Transcript","prechat_survey_next_button_text":"Next","prechat_website_validation_message":"Please enter a valid URL","online_button_text":"Chat with us!","allow_change_height":true,"processing_file_error_text":"There was a problem processing your file.","pre_chat_message":"Questions? We'd love to chat.","offline_survey_website_placeholder":"Enter your website...","prechat_survey_name_label":"Name","send_transcript_cancel_text":"No Thanks","feedback_survey_question_additional_feedback_text":"Additional Feedback.","feedback_survey_question_chat_high":"Extremely satisfied","send_transcript_placeholder":"Email","generic_upload_error_text":"File uploading is currently unavailable.","prechat_survey_email_label":"Email","say_text":"Type here and hit enter to chat","show_in_buddy_list":"all","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj48YSBocmVmPSJodHRwOi8vd3d3Lm9sYXJrLmNvbS8/cmlkPTc4MzAtNTgyLTEwLTM3MTQmYW1wO2J1c2luZXNzPTEmYW1wO3V0bV9tZWRpdW09d2lkZ2V0JmFtcDt1dG1fY2FtcGFpZ249ZnJlZV9idXNpbmVzc19jaGF0JmFtcDt1dG1fc291cmNlPTc4MzAtNTgyLTEwLTM3MTQiIGlkPSJoYmxpbms5OSIgdGFyZ2V0PSJfYmxhbmsiPkZyZWUgT2xhcmsgQ2hhdCBmb3IgQnVzaW5lc3M8L2E+","md5":"635b65a782cf6e8ac78ca4255f5d040e","site_id":"7830-582-10-3714","template":"azul","operators":{}},"invalidate_cache":{}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="7830-582-10-3714";
          });
          olark._.finish();
        }
      })();
    
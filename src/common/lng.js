/**
 * Created by Administrator on 2018/1/3.
 */
export var gcmlng = gcmlng;
var intLng=0
window.intLng=intLng;

import  'jQuery';


function gcmlng (intSetLngID){

    var intLngID = intSetLngID;

    this.doGetLngID = function () {
        return intLngID;
    }

    this.doGetLngDesc = function () {
        switch (intLngID){
            case 1:
                return "简体中文";
            case 2:
                return "Thailand";
            case 3:
                return "Vietnam";
            default:
                return "English";
        }
    }

    function doGetTextWithLngMark(jsonLngMrak) {
        jsonLngMrak = eval(jsonLngMrak);
        switch (intLngID){
            case 1:
                return jsonLngMrak.strCN;
            case 2:
                return jsonLngMrak.strTail;
            case 3:
                return jsonLngMrak.strVientn;
            default:
                return jsonLngMrak.strEN;
        }
    }

    this.doSetLngID = function (intSetValue) {
        intLngID = intSetValue;
    }
    
    this.doUpdateLngDesc = function(){
        $("label").each(function (intTempIndex, itemTemp) {
            // console.log($(itemTemp).attr("tx"));
            $(itemTemp).html(doGetTextWithLngMark($(itemTemp).attr("tx")));
        });
    }
    
    this.doGetLngTx = function (strLngMark) {
        return doGetTextWithLngMark(strLngMark);
    }
}

/*onChangeLngPages(window.intLng)*/

/*最新*/

var strlng_hY={"strEN":"welcome","strCN":"欢迎","strTail":"ยินดีต้อนรับ","strVientn":"Chào mừng"};



/**/

var strlng_account={"strEN":"Account","strCN":"账号","strTail":"บัญชี","strVientn":"Tài khoản"};
var strlng_all={"strEN":"All","strCN":"全部","strTail":"ทั้งหมด","strVientn":"Tất cả"};
var strlng_cancel={"strEN":"Cancel","strCN":"取消","strTail":"ยกเลิก","strVientn":"Hủy"};
var strlng_change_password_faile={"strEN":"Save failed, the old password is wrong!","strCN":"修改失败，旧密码错误","strTail":"บันทึกล้มเหลวรหัสผ่านเก่าผิด!","strVientn":"Sửa đổi thất bại, mật khẩu cũ là sai"};
var strlng_change_password_must_enter={"strEN":"Must enter old password / new password / confirm new password !","strCN":"必须填写 旧密码/新密码/确认新密码","strTail":"ต้องใส่รหัสผ่าน / รหัสผ่านใหม่ / ยืนยันรหัสผ่านใหม่!","strVientn":"Phải điền vào mật khẩu cũ / mật khẩu mới / xác nhận mật khẩu mới"};
var strlng_change_password_new_password_same={"strEN":"The new password entered is inconsistent!","strCN":"输入的新密码不一致","strTail":"ป้อนรหัสผ่านใหม่ไม่สอดคล้องกัน!","strVientn":"Mật khẩu mới nhập vào là không nhất quán"};
var strlng_change_password_sucess={"strEN":"Save successful, please sign in again!","strCN":"修改成功，请重新登录","strTail":"บันทึกสำเร็จโปรดลงชื่อเข้าใช้อีกครั้ง!","strVientn":"Nếu sửa đổi thành công, hãy đăng nhập lại"};
var strlng_change_pwd_confirm={"strEN":"Confirm New Password","strCN":"确认新密码","strTail":"ยืนยันรหัสผ่านใหม่","strVientn":"Xác nhận mật khẩu mới"};
var strlng_change_pwd_new={"strEN":"New Password","strCN":"新密码","strTail":"รหัสผ่านใหม่","strVientn":"Mật khẩu mới"};
var strlng_change_pwd_old={"strEN":"Old Password","strCN":"旧密码","strTail":"รหัสผ่านเก่า","strVientn":"Mật khẩu cũ"};
var strlng_change_pwd_title={"strEN":"Change Password","strCN":"修改密码","strTail":"เปลี่ยนรหัสผ่าน","strVientn":"Thay đổi mật khẩu"};
var strlng_click_and_input={"strEN":"click for input","strCN":"点击输入","strTail":"คลิกเพื่อป้อนข้อมูล","strVientn":"Nhấp vào nhập"};
var strlng_click_and_select={"strEN":"click for select","strCN":"点击选择","strTail":"คลิกเพื่อเลือก","strVientn":"Nhấp để chọn"};
var strlng_click_for_more={"strEN":"click for more","strCN":"点击查看","strTail":"คลิกเพื่อดูข้อมูลเพิ่มเติม","strVientn":"Nhấp để xem"};
var strlng_close={"strEN":"Close","strCN":"关闭","strTail":"ปิด","strVientn":"Đóng"};
var strlng_container_id={"strEN":"Container ID","strCN":"柜号","strTail":"รหัสคอนเทนเนอร์","strVientn":"Số nội các"};
var strlng_dialog_date_select_day={"strEN":"Day","strCN":"日","strTail":"วัน","strVientn":"Ngày"};
var strlng_dialog_date_select_monther={"strEN":"Monther","strCN":"月","strTail":"คุณแม่","strVientn":"Tháng"};
var strlng_dialog_date_select_title={"strEN":"Please select date","strCN":"上下滑动选择时间","strTail":"กรุณาเลือกวันที่","strVientn":"Vuốt lên và xuống để chọn thời gian"};
var strlng_dialog_date_select_year={"strEN":"Year","strCN":"年","strTail":"ปี","strVientn":"Năm"};
var strlng_dialog_title_system={"strEN":"System Info","strCN":"温馨提示","strTail":"ข้อมูลระบบ","strVientn":"Mẹo"};
var strlng_faild={"strEN":"Failed","strCN":"失败","strTail":"ล้มเหลว","strVientn":"Không thành công"};
var strlng_first_login={"strEN":"For your account security","strCN":"为了您的账户安全","strTail":"สำหรับความปลอดภัยของบัญชี","strVientn":"Đối với bảo mật tài khoản của bạn"};
var strlng_first_login_change_password={"strEN":"Please change your sign in password ","strCN":"请修改登录密码","strTail":"โปรดเปลี่ยนรหัสผ่านการลงชื่อเข้าใช้ของคุณ","strVientn":"Vui lòng thay đổi mật khẩu đăng nhập của bạn"};
var strlng_forgot_account_input={"strEN":"Please input your account","strCN":"请输入您的登录账号","strTail":"โปรดใส่บัญชีของคุณ","strVientn":"Vui lòng nhập tài khoản đăng nhập của bạn"};
var strlng_forgot_get_button={"strEN":"Retrieve Password","strCN":"取回密码","strTail":"เรียกรหัสผ่าน","strVientn":"Truy xuất mật khẩu"};
var strlng_forgot_mark_info={"strEN":"Please enter your account, click on the [ Retrieve Password ] button, staff will assist you in the certification and reset password","strCN":"请输入您的果真快账号，点击 [ 取回密码 ] 按钮，工作人员将在收到信息后尽快协助您认证并取回登录密码","strTail":"โปรดป้อนบัญชีของคุณคลิกปุ่ม  [ ดึงข้อมูลรหัสผ่าน]  เจ้าหน้าที่จะช่วยคุณในการรับรองและรีเซ็ตรหัสผ่าน","strVientn":"Hãy nhập tài khoản thực sự nhanh chóng của bạn, nhấp chuột vào nút [ Lấy mật khẩu ], nhân viên của bạn sẽ giúp càng sớm càng tốt sau khi nhận được thông tin xác thực và lấy lại mật khẩu"};
var strlng_forgot_must_enter={"strEN":"Must enter account","strCN":"必须填写账号","strTail":"ต้องป้อนบัญชี","strVientn":"Phải điền vào tài khoản"};
var strlng_forgot_pwasword_sened={"strEN":"The message has been sent and the staff will contact you later!","strCN":"信息已发送，稍后会有果真快工作人员与您联系","strTail":"มีการส่งข้อความและพนักงานจะติดต่อคุณในภายหลัง!","strVientn":"Thư đã được gửi và bạn sẽ được nhân viên của bạn liên hệ ngay lập tức"};
var strlng_forgot_title={"strEN":"Forget Password","strCN":"忘记密码","strTail":"ลืมรหัสผ่าน","strVientn":"Quên mật khẩu của bạn"};
var strlng_home_about_guozk={"strEN":"About GuoZK","strCN":"关于果真快","strTail":"เกี่ยวกับ GuoZK","strVientn":"Về thực sự nhanh"};
var strlng_home_container_exchange={"strEN":"Container Exchange","strCN":"调换货柜","strTail":"การแลกเปลี่ยนตู้คอนเทนเนอร์","strVientn":"Container trao đổi"};
var strlng_home_container_exchange_hint={"strEN":"Log / Check / Locate / Track your swapping container","strCN":"记录 / 检查 / 定位 / 跟踪 您的调换的货柜","strTail":"บันทึก / ตรวจสอบ / ค้นหา / ติดตามคอนเทนเนอร์การแลกเปลี่ยนของคุณ","strVientn":"Ghi lại / kiểm tra / định vị / theo dõi hoán đổi của bạn"};
var strlng_home_hotline={"strEN":"400 Hotline","strCN":"400 服务热线","strTail":"400 Hotline","strVientn":"400 đường dây nóng phục vụ"};
var strlng_home_my_container={"strEN":"My Container","strCN":"我的集装箱","strTail":"คอนเทนเนอร์ของฉัน","strVientn":"Thùng chứa của tôi"};
var strlng_home_my_container_hint={"strEN":"Locate / view / manage / dispatch all your containers","strCN":"定位 ／查看／管理／调度 您的所有货柜","strTail":"ค้นหา / ดู / จัดการ / จัดส่งตู้คอนเทนเนอร์ทั้งหมดของคุณ","strVientn":"Định vị / xem / quản lý / gửi tất cả các thùng chứa của bạn"};
var strlng_home_share_friend={"strEN":"Share Friend","strCN":"分享好友","strTail":"แบ่งปันเพื่อน","strVientn":"Chia sẻ bạn bè"};
var strlng_home_title={"strEN":"GuoZK GCM","strCN":"果真快 全球冷运","strTail":"GuoZK GCM","strVientn":"GuoZK GCM"};
var strlng_home_transport_record={"strEN":"Transport Record","strCN":"货运记录","strTail":"บันทึกการขนส่ง","strVientn":"Hồ sơ vận tải"};
var strlng_home_transport_record_hint={"strEN":"Log / Tracking / Alarm / Share your transport records","strCN":"记录／跟踪／警报／分享 您的运输记录","strTail":"ล็อก / ติดตาม / เตือน / แบ่งปันบันทึกการเดินทางของคุณ","strVientn":"Đăng nhập / theo dõi / cảnh báo / chia sẻ lịch sử vận ​​chuyển của bạn"};
var strlng_home_user_center={"strEN":"User Center","strCN":"用户中心","strTail":"ศูนย์ผู้ใช้","strVientn":"Trung tâm người dùng"};
var strlng_home_user_center_hint={"strEN":"Manage your personal information","strCN":"管理您的个人资料","strTail":"จัดการข้อมูลส่วนบุคคลของคุณ","strVientn":"Quản lý thông tin cá nhân của bạn"};
var strlng_home_user_help={"strEN":"Use Guide","strCN":"用户帮助","strTail":"ใช้คู่มือ","strVientn":"Trợ giúp người dùng"};
var strlng_id={"strEN":"ID","strCN":"编号","strTail":"ID","strVientn":"Số"};
var strlng_in_swap={"strEN":"Swap out","strCN":"交换中","strTail":"สลับออก","strVientn":"Trao đổi"};
var strlng_input_optional={"strEN":"Optional","strCN":"选填","strTail":"ไม่จำเป็น","strVientn":"Tùy chọn"};
var strlng_last_update={"strEN":"Last","strCN":"最后更新","strTail":"สุดท้าย","strVientn":"Cập nhật lần cuối"};
var strlng_list_loading={"strEN":"Loading, please wait …","strCN":"数据加载中，请稍候 …","strTail":"กำลังโหลดโปรดรอสักครู่ ...","strVientn":"Đang tải dữ liệu, vui lòng đợi ..."};
var strlng_list_no_data={"strEN":"No more data","strCN":"没有更多数据","strTail":"ไม่มีข้อมูลเพิ่มเติม","strVientn":"Không còn dữ liệu nữa"};
var strlng_list_pull_down={"strEN":"Pull down to refresh the data","strCN":"下拉刷新数据","strTail":"ดึงลงเพื่อรีเฟรชข้อมูล","strVientn":"Kéo xuống để làm mới dữ liệu"};
var strlng_list_pull_up={"strEN":"Pull up to load more data","strCN":"上拉加载更多数据","strTail":"ดึงขึ้นเพื่อโหลดข้อมูลเพิ่มเติม","strVientn":"Kéo lên để tải thêm dữ liệu"};
var strlng_loading_wait={"strEN":"Loading, please wait …","strCN":"数据加载中，请稍候 …","strTail":"กำลังโหลดโปรดรอสักครู่ ...","strVientn":"Đang tải dữ liệu, vui lòng đợi ..."};
var strlng_login_account_input={"strEN":"Please input your account","strCN":"请输入您的登录账号","strTail":"โปรดใส่บัญชีของคุณ","strVientn":"Vui lòng nhập tài khoản đăng nhập của bạn"};
var strlng_login_failed={"strEN":"Sign in failed, wrong account or password!","strCN":"登入失败，账号或密码错误","strTail":"ลงชื่อเข้าใช้ล้มเหลวบัญชีหรือรหัสผ่านไม่ถูกต้อง!","strVientn":"Đăng nhập thất bại, tài khoản hoặc mật khẩu sai"};
var strlng_login_forgot_button={"strEN":"Forget password ?","strCN":"忘记密码 ?","strTail":"ลืมรหัสผ่าน ?","strVientn":"Quên mật khẩu?"};
var strlng_login_must_enter={"strEN":"Must enter account / password","strCN":"必须填写 账号 / 密码","strTail":"ต้องป้อนบัญชี / รหัสผ่าน","strVientn":"Phải điền vào tài khoản / mật khẩu"};
var strlng_login_password_input={"strEN":"Please input your password","strCN":"请输入您的登录密码","strTail":"โปรดใส่รหัสผ่านของคุณ","strVientn":"Hãy nhập mật khẩu đăng nhập của bạn"};
var strlng_login_sing_button={"strEN":"Sign In","strCN":"登录","strTail":"ลงชื่อเข้าใช้","strVientn":"Đăng nhập"};
var strlng_menu_item_share_wx={"strEN":"Share WeChat","strCN":"分享微信好友","strTail":"แชร์ WeChat","strVientn":"Chia sẻ WeChat bạn bè"};
var strlng_must_enter={"strEN":"Must enter","strCN":"必须填写","strTail":"ต้องเข้า","strVientn":"Phải điền vào"};
var strlng_my_care={"strEN":"My Care","strCN":"关注的","strTail":"การดูแลของฉัน","strVientn":"Quan tâm đến"};
var strlng_my_container_list_title={"strEN":"My Container","strCN":"我的货柜","strTail":"คอนเทนเนอร์ของฉัน","strVientn":"Thùng chứa của tôi"};
var strlng_network_error={"strEN":"Network data error, please try later!","strCN":"网络数据错误，请稍候再尝试","strTail":"ข้อผิดพลาดของข้อมูลเครือข่ายโปรดลองใหม่ในภายหลัง!","strVientn":"Lỗi dữ liệu mạng, vui lòng thử lại sau"};
var strlng_new_transport_sucess={"strEN":"New transport record successful!","strCN":"新建运输单成功","strTail":"บันทึกการเดินทางใหม่สำเร็จ!","strVientn":"Bản phân phối mới đã thành công"};
var strlng_ok={"strEN":"OK","strCN":"确定","strTail":"ตกลง","strVientn":"OK"};
var strlng_page_must_enter={"strEN":"Please enter the required fields according to the page prompt!","strCN":"请根据页面提示输入必填项目","strTail":"โปรดป้อนข้อมูลที่จำเป็นตามพรอมต์เพจ!","strVientn":"Vui lòng nhập các trường bắt buộc theo dấu nhắc trang"};
var strlng_password={"strEN":"Password","strCN":"密码","strTail":"รหัสผ่าน","strVientn":"Mật mã"};
var strlng_query_button={"strEN":"Query","strCN":"查找","strTail":"สอบถาม","strVientn":"Tìm"};
var strlng_query_container_keyword={"strEN":"Input keyword ex：Container ID","strCN":"请输入柜号查询","strTail":"ใส่คำหลักเช่นรหัสประจำตู้","strVientn":"Vui lòng nhập số kiểm tra"};
var strlng_query_input_keyword_hint={"strEN":"Please input keyword","strCN":"请输入关键字查找","strTail":"กรุณาใส่คำค้นหา","strVientn":"Vui lòng nhập tìm kiếm từ khóa"};
var strlng_save={"strEN":"Save","strCN":"保存","strTail":"บันทึก","strVientn":"Lưu lại"};
var strlng_save_change={"strEN":"Save Change","strCN":"保存修改","strTail":"บันทึกการเปลี่ยนแปลง","strVientn":"Lưu thay đổi"};
var strlng_save_change_question={"strEN":"Are you sure to save changes?","strCN":"您是否确定保存修改？","strTail":"คุณแน่ใจหรือไม่ว่าจะบันทึกการเปลี่ยนแปลง","strVientn":"Bạn có chắc chắn muốn lưu thay đổi của mình không?"};
var strlng_save_faile={"strEN":"Save failed, please try later!","strCN":"保存失败，请稍后再尝试","strTail":"บันทึกล้มเหลวโปรดลองภายหลัง!","strVientn":"Lưu không thành công, vui lòng thử lại sau"};
var strlng_save_sucess={"strEN":"Save successful!","strCN":"保存成功","strTail":"บันทึกสำเร็จ!","strVientn":"Lưu thành công"};
var strlng_share_record_access_password={"strEN":"Access password","strCN":"访问密码","strTail":"เข้าถึงรหัสผ่าน","strVientn":"Truy cập mật khẩu"};
var strlng_share_record_click_to_view={"strEN":"Click link enter track view","strCN":"点击链接进入跟踪页面","strTail":"คลิกลิงก์เข้าสู่มุมมองแทร็ก","strVientn":"Nhấp vào liên kết để vào trang theo dõi"};
var strlng_share_record_mark_info={"strEN":"Click on the [ Share WeChat friends ] button to let your buddy through the WeChat check tracking information, valid for 15 days","strCN":"点击 [ 分享微信好友 ] 按钮即可让您的好友通过微信查看运单跟踪信息，有效期 15 天","strTail":"คลิกที่ปุ่ม [ แบ่งปันเพื่อน WeChat ] เพื่อให้เพื่อนของคุณผ่านข้อมูลการติดตามการตรวจสอบของ WeChat ถูกต้องเป็นเวลา 15 วัน","strVientn":"Nhấp vào nút [ Chia sẻ WeChat ] để cho bạn của bạn thông qua thông tin theo dõi kiểm tra của WeChat, có hiệu lực trong 15 ngày"};
var strlng_share_record_share_button={"strEN":"Share WeChat friends","strCN":"分享微信好友","strTail":"แชร์เพื่อน WeChat","strVientn":"Chia sẻ WeChat bạn bè"};
var strlng_share_record_title={"strEN":"Share Transport Record","strCN":"分享运单","strTail":"แบ่งปันบันทึกการขนส่ง","strVientn":"Chia sẻ vận đơn"};
var strlng_share_record_transport_area={"strEN":"Transport Area","strCN":"运输地区","strTail":"พื้นที่คมนาคม","strVientn":"Khu vực vận tải"};
var strlng_share_transport_record_track_title={"strEN":"Share Transport Record","strCN":"分享运单跟踪","strTail":"แบ่งปันบันทึกการขนส่ง","strVientn":"Chia sẻ theo dõi vận đơn"};
var strlng_sign_out_sure={"strEN":"Are you sure sign out？","strCN":"您确定需要退出登录吗？","strTail":"แน่ใจหรือไม่ว่าออกจากระบบ","strVientn":"Bạn có chắc chắn muốn đăng xuất?"};
var strlng_sucessed={"strEN":"Successful","strCN":"成功","strTail":"ที่ประสบความสำเร็จ","strVientn":"Thành công"};
var strlng_sure={"strEN":"Sure","strCN":"确定","strTail":"แน่ใจ","strVientn":"OK"};
var strlng_time={"strEN":"Time","strCN":"时间","strTail":"เวลา","strVientn":"Thời gian"};
var strlng_total_data_average_temperature={"strEN":"Average temperature","strCN":"平均温度","strTail":"อุณหภูมิเฉลี่ย","strVientn":"Nhiệt độ trung bình"};
var strlng_total_data_cooling_time={"strEN":"Cooling time","strCN":"打冷时长","strTail":"เวลาระบายความร้อน","strVientn":"Chilling time"};
var strlng_total_data_lowest_temperature={"strEN":"Full lowest temperature","strCN":"全程最低温度","strTail":"อุณหภูมิต่ำสุดเต็ม","strVientn":"Nhiệt độ thấp nhất trong suốt"};
var strlng_total_data_maximum_temperature={"strEN":"Full maximum temperature","strCN":"全程最高温度","strTail":"อุณหภูมิสูงสุดเต็มรูปแบบ","strVientn":"Nhiệt độ tối đa"};
var strlng_total_data_time_hour={"strEN":"Hour","strCN":"小时","strTail":"ชั่วโมง","strVientn":"Giờ"};
var strlng_total_data_time_minute={"strEN":"Minute","strCN":"分钟","strTail":"นาที","strVientn":"Biên bản"};
var strlng_track_history_no_datas={"strEN":"Data no found of this time !","strCN":"该时刻暂无数据","strTail":"ข้อมูลที่ไม่พบในครั้งนี้!","strVientn":"Không có dữ liệu tại thời điểm này"};
var strlng_track_history_timeline={"strEN":"Time","strCN":"时间","strTail":"เวลา","strVientn":"Thời gian"};
var strlng_track_history_title={"strEN":"Track History","strCN":"历史轨迹","strTail":"ติดตามประวัติ","strVientn":"Lịch sử"};
var strlng_transport_detail_end_record={"strEN":"Are you sure to marked the record to end transport?","strCN":"您是否确定提前结束运单记录？","strTail":"คุณแน่ใจหรือไม่ว่าจะทำเครื่องหมายบันทึกเพื่อสิ้นสุดการขนส่ง?","strVientn":"Bạn có chắc chắn để kết thúc hồ sơ AWB trước?"};
var strlng_transport_record_list_all={"strEN":"All","strCN":"全部","strTail":"ทั้งหมด","strVientn":"Tất cả"};
var strlng_transport_record_list_create_time={"strEN":"Create Time","strCN":"创建时间","strTail":"สร้างเวลา","strVientn":"Tạo thời gian"};
var strlng_transport_record_list_history_record={"strEN":"History","strCN":"历史记录","strTail":"ประวัติศาสตร์","strVientn":"Lịch sử"};
var strlng_transport_record_list_on_road={"strEN":"On Road","strCN":"进行中","strTail":"บนถนน","strVientn":"Đang tiến hành"};
var strlng_transport_record_list_title={"strEN":"Transport Record List","strCN":"货运记录列表","strTail":"รายการบันทึกการขนส่ง","strVientn":"Danh sách hồ sơ vận tải"};
var strlng_transport_record_new_transport={"strEN":"New Transport","strCN":"新建运单记录","strTail":"การขนส่งใหม่","strVientn":"Tạo một bản ghi phiếu vận đơn mới"};
var strlng_user_center_change_password={"strEN":"Change Password","strCN":"修改密码","strTail":"เปลี่ยนรหัสผ่าน","strVientn":"Thay đổi mật khẩu"};
var strlng_user_center_my_account={"strEN":"Account","strCN":"我的账号","strTail":"บัญชี","strVientn":"Tài khoản của tôi"};
var strlng_user_center_my_alias={"strEN":"Alias","strCN":"我的昵称","strTail":"นามแฝง","strVientn":"Biệt danh của tôi"};
var strlng_user_center_signout={"strEN":"Sing Out","strCN":"退出登录","strTail":"ร้องเพลง","strVientn":"Đăng xuất"};
var strlng_user_center_title={"strEN":"User Center","strCN":"个人中心","strTail":"ศูนย์ผู้ใช้","strVientn":"Trung tâm cá nhân"};
var strlng_container_detail={"strEN":"Container Detail","strCN":"货柜详情","strTail":"รายละเอียดคอนเทนเนอร์","strVientn":"Chi tiết thùng"};
var strlng_update_time={"strEN":"Update Time","strCN":"更新时间","strTail":"เวลาอัปเดต","strVientn":"Thời gian cập nhật"};
var strlng_location={"strEN":"Location","strCN":"位置","strTail":"ที่ตั้ง","strVientn":"Địa điểm"};
var strlng_wind_in_position={"strEN":"Wind In","strCN":"入风口","strTail":"ลมในตำแหน่ง","strVientn":"Vào khe không khí"};
var strlng_return_air_position={"strEN":"Return Air","strCN":"回风口","strTail":"ตำแหน่งอากาศกลับ","strVientn":"Quay trở lại"};
var strlng_center_of={"strEN":"Center Of","strCN":"车厢中部","strTail":"ศูนย์","strVientn":"Tàu trung tâm"};
var strlng_near_door={"strEN":"Near Door","strCN":"车厢尾部","strTail":"ใกล้ประตู","strVientn":"Đuôi xe"};
var strlng_avg_data={"strEN":"Avg. Data","strCN":"平均值","strTail":"เฉลี่ย ข้อมูล","strVientn":"Trung bình"};
var strlng_cooler_status={"strEN":"Cooler Status","strCN":"制冷状态","strTail":"สถานะ Cooler","strVientn":"Trạng thái làm mát"};
var strlng_care_status={"strEN":"Care Status","strCN":"关注状态","strTail":"สถานะการดูแล","strVientn":"Tập trung vào nhà nước"};
var strlng_battery_status={"strEN":"Battery Status","strCN":"电池状态","strTail":"สถานะแบตเตอรี่","strVientn":"Trạng thái pin"};
var strlng_idle={"strEN":"Idle","strCN":"没工作","strTail":"ว่าง","strVientn":"Trạng thái làm mát: Không hoạt động"};
var strlng_working={"strEN":"Working","strCN":"制冷中","strTail":"การทำงาน","strVientn":"Trạng thái làm mát: Làm mát"};
var strlng_in_care={"strEN":"In Care","strCN":"关注中","strTail":"ใน Care","strVientn":"Trạng thái chú ý: Chú ý"};
var strlng_not_care={"strEN":"Not Care","strCN":"未关注","strTail":"ไม่สนใจ","strVientn":"Trạng thái chú ý: Không quan tâm"};
var strlng_high={"strEN":"High","strCN":"高","strTail":"สูง","strVientn":"Trạng thái pin: cao"};
var strlng_middle={"strEN":"Middle","strCN":"中","strTail":"กลาง","strVientn":"Trạng thái pin: vừa"};
var strlng_low={"strEN":"Low","strCN":"低","strTail":"ต่ำ","strVientn":"Trạng thái pin: thấp"};
var strlng_very_low={"strEN":"Very Low","strCN":"极低","strTail":"ต่ำมาก","strVientn":"Trạng thái pin: rất thấp"};
var strlng_new_transport={"strEN":"New Transport","strCN":"新建运单","strTail":"การขนส่งใหม่","strVientn":"Vận đơn mới"};
var strlng_departure={"strEN":"Departure","strCN":"起运地","strTail":"การออกเดินทาง","strVientn":"Nguồn gốc"};
var strlng_destination={"strEN":"Destination","strCN":"目的地","strTail":"ปลายทาง","strVientn":"Điểm đến"};
var strlng_transport_end_time={"strEN":"End time","strCN":"结束时间","strTail":"เวลาสิ้นสุดการขนส่ง","strVientn":"Thời gian kết thúc"};
var strlng_the_highest_alarm_temperature={"strEN":"Highest alarm temperature","strCN":"最高警报温度","strTail":"อุณหภูมิปลุกสูงที่สุด","strVientn":"Nhiệt độ báo động cao nhất"};
var strlng_lowest_alarm_temperature={"strEN":"Lowest alarm temperature","strCN":"最低警报温度","strTail":"อุณหภูมิปลุกต่ำสุด","strVientn":"Nhiệt độ báo động thấp nhất"};
var strlng_alarm_option={"strEN":"Alarm Option","strCN":"报警选项","strTail":"ตัวเลือกการปลุก","strVientn":"Tùy chọn báo thức"};
var strlng_remark={"strEN":"Remark","strCN":"备注","strTail":"ข้อสังเกต","strVientn":"Ghi chú"};
var strlng_save_record={"strEN":"Save Record","strCN":"保存记录","strTail":"บันทึกบันทึก","strVientn":"Lưu hồ sơ"};
var strlng_excessive_alarm_immediately={"strEN":"Excessive alarm immediately","strCN":"超标立刻报警","strTail":"แจ้งเตือนทันทีทันใด","strVientn":"Báo động quá mức ngay lập tức"};
var strlng_continuous_10_minutes_alarm={"strEN":"Continuous 10 minutes alarm","strCN":"连续超标10分钟报警","strTail":"ปลุกต่อเนื่อง 10 นาที","strVientn":"Báo thức liên tục 10 phút"};
var strlng_continuous_20_minutes_alarm={"strEN":"Continuous 20 minutes alarm","strCN":"连续超标20分钟报警","strTail":"ปลุกต่อเนื่องได้ 20 นาที","strVientn":"Báo thức liên tục vượt quá 20 phút"};
var strlng_continuous_30_minutes_alarm={"strEN":"Continuous 30 minutes alarm","strCN":"连续超标30分钟报警","strTail":"ปลุกต่อเนื่อง 30 นาที","strVientn":"Báo thức liên tục 30 phút"};
var strlng_continuous_60_minutes_alarm={"strEN":"Continuous 60 minutes alarm","strCN":"连续超标60分钟报警","strTail":"ปลุกต่อเนื่อง 60 นาที","strVientn":"Báo thức liên tục 60 phút"};
var strlng_transport_detail={"strEN":"Transport Detail","strCN":"运单详情","strTail":"รายละเอียดการขนส่ง","strVientn":"Các chi tiết về Waybill"};
var strlng_shipment_time={"strEN":"Shipment time","strCN":"起运时间","strTail":"เวลาจัดส่ง","strVientn":"Thời gian vận chuyển"};
var strlng_goods_name={"strEN":"Goods Name","strCN":"货物名称","strTail":"ชื่อสินค้า","strVientn":"Tên hàng"};
var strlng_end_record={"strEN":"End Record","strCN":"结束记录","strTail":"บันทึกท้าย","strVientn":"Kết thúc bản ghi"};
var strlng_share_record={"strEN":"Share Record","strCN":"分享运单","strTail":"แบ่งปันบันทึก","strVientn":"Chia sẻ vận đơn"};
var strlng_transport_tracking={"strEN":"Transport Tracking","strCN":"线路跟踪","strTail":"การติดตามการขนส่ง","strVientn":"Theo dõi tuyến"};
var strlng_total_data={"strEN":"Total Data","strCN":"数据统计","strTail":"ข้อมูลทั้งหมด","strVientn":"Thống kê"};
var strlng_new_exhange_record={"strEN":"New Exchange Records","strCN":"新建吊换柜记录","strTail":"ระเบียนใหม่ของ Exchange","strVientn":"Hồ sơ Giao dịch Mới"};
var strlng_end_exchange={"strEN":"Completed","strCN":"已归还","strTail":"เสร็จ","strVientn":"hoàn thành"};
var strlng_outside={"strEN":"Outside","strCN":"未归还","strTail":"ด้านนอก","strVientn":"Ở ngoài"};
var strlng_exchanger_contact={"strEN":"Exchanger Contact","strCN":"交换联系人","strTail":"ติดต่อแลกเปลี่ยน","strVientn":"Liên hệ"};
var strlng_exchanger_time={"strEN":"Exchanger Time","strCN":"换柜时间","strTail":"เวลาของการแลกเปลี่ยน","strVientn":"Thời gian trao đổi"};
var strlng_exchanger_location={"strEN":"Exchanger Location","strCN":"交换地点","strTail":"สถานที่แลกเปลี่ยน","strVientn":"Địa điểm"};
var strlng_exchanger_status={"strEN":"Exchanger Status","strCN":"交换状态","strTail":"สถานะการแลกเปลี่ยน","strVientn":"Trạng thái trao đổi"};
var strlng_exchanger_container_id={"strEN":"Exchanger Container ID","strCN":"交换柜号","strTail":"รหัสคอนเทนเนอร์ของ Exchanger","strVientn":"ID vùng của người trao đổi"};
var strlng_exchanger_car_number={"strEN":"Exchanger Plate Number ","strCN":"交换人车牌","strTail":"หมายเลขจานของ Exchanger","strVientn":"Số tấm trao đổi"};
var strlng_exchanger_contact_phone={"strEN":"Exchanger Contact Phone","strCN":"交换人电话","strTail":"โทรศัพท์ติดต่อของ Exchanger","strVientn":"Điện thoại liên lạc trao đổi"};
var strlng_current_location={"strEN":"Current Location","strCN":"当前位置","strTail":"สถานที่ปัจจุบัน","strVientn":"Vị trí hiện tại"};
var strlng_visit_share_record_timeout={"strEN":"The record you are visiting is timed out, please contact the sharer to confirm the information","strCN":"您要访问的记录已经超时，请联系分享人确认信息","strTail":"บันทึกที่คุณกำลังเข้าชมหมดเวลาแล้วโปรดติดต่อ sharer เพื่อยืนยันข้อมูล","strVientn":"Hồ sơ bạn đang truy cập bị hết thời gian, vui lòng liên hệ với người chia sẻ để xác nhận thông tin"};
var strlng_visit_share_record_welcome={"strEN":"Welcome to the freezer transport monitoring provided by GuoZK, please enter the password to view details","strCN":"欢迎使用由果真快提供的冷柜运输监控功能，请输入密码后查看详情","strTail":"ยินดีต้อนรับสู่การตรวจสอบการขนส่งตู้แช่แข็งโดย GuoZK โปรดป้อนรหัสผ่านเพื่อดูรายละเอียด","strVientn":"Chào mừng bạn đến với hệ thống giám sát vận chuyển tủ lạnh do GuoZK cung cấp, vui lòng nhập mật khẩu để xem chi tiết"};
var strlng_visit_share_record_check_button={"strEN":"Check Detail","strCN":"开始查看","strTail":"ตรวจสอบรายละเอียด","strVientn":"Kiểm tra chi tiết"};
var strlng_visit_share_record_sharer={"strEN":"Share Providers","strCN":"分享人","strTail":"แบ่งปันผู้ให้บริการ","strVientn":"Chia sẻ Nhà cung cấp"};
var strlng_visit_share_input_hint={"strEN":"Please input your visit password","strCN":"请输入您的访问密码","strTail":"โปรดป้อนรหัสผ่านเข้าชมของคุณ","strVientn":"Vui lòng nhập mật khẩu truy cập của bạn"};
var strlng_input_alias_hint={"strEN":"Please input your alias","strCN":"请输入用户昵称","strTail":"กรุณาใส่ชื่อแทนของคุณ","strVientn":"Vui lòng nhập bí danh của bạn"};
var strlng_input_word_length_hint_enter={"strEN":"You can also enter ","strCN":"您还可以输入","strTail":"คุณสามารถป้อนคำ","strVientn":"Bạn cũng có thể nhập"};
var strlng_input_word_length_hint_words={"strEN":"words","strCN":"个字","strTail":"ได้","strVientn":"từ"};
var strlng_input_not_empty={"strEN":"Input can not be empty","strCN":"输入内容不能为空","strTail":"ข้อมูลป้อนต้องไม่ว่างเปล่า","strVientn":"Đầu vào không thể để trống"};
var strlng_remove_care={"strEN":"Unsubscribe","strCN":"取消关注","strTail":"ยกเลิกการรับข่าวสาร","strVientn":"Hủy đăng ký"};
var strlng_add_care={"strEN":"Attention","strCN":"加入关注","strTail":"ความสนใจ","strVientn":"Chú ý"};
var strlng_input_history={"strEN":"Input History","strCN":"输入历史","strTail":"ประวัติการป้อนข้อมูล","strVientn":"Lịch sử Nhập"};
var strlng_input_range={"strEN":"Input Range","strCN":"可输入范围","strTail":"ช่วงป้อนข้อมูล","strVientn":"dải đầu vào"};
var strlng_input_lowest_not_higher_than={"strEN":"The setting of the lowest value can not be higher than the highest value","strCN":"最低数值的设置不能高于最高数值","strTail":"การตั้งค่าต่ำสุดไม่สามารถสูงกว่าค่าสูงสุด","strVientn":"Cài đặt giá trị thấp nhất không được cao hơn giá trị cao nhất"};
var strlng_end_record_sucessed={"strEN":"Successful conclusion of the record","strCN":"记录已经结束","strTail":"ข้อสรุปที่สำเร็จของการบันทึก","strVientn":"Kết luận thành công của hồ sơ"};
var strlng_not_authority_container={"strEN":"You haven't the authority to operate the container, please contact administrator","strCN":"您没有对这个货柜的操作权限，请联系管理员咨询","strTail":"คุณไม่มีสิทธิ์ใช้คอนเทนเนอร์โปรดติดต่อผู้ดูแลระบบ","strVientn":"Bạn không có quyền vận hành container, vui lòng liên hệ với quản trị viên"};
var strlng_record_endtime_not_more_than={"strEN":"The end time of the transport note can not be set more than 10 days after the departure date","strCN":"运输单记录的结束时间设置不能超过起运时间十天","strTail":"ไม่สามารถตั้งเวลาสิ้นสุดของบันทึกการเดินทางได้มากกว่า 10 วันหลังจากวันที่เดินทาง  ","strVientn":"Thời gian kết thúc của phiếu vận chuyển không thể được đặt quá 10 ngày sau ngày khởi hành"};
var strlng_conntry_thailand={"strEN":"Thailand","strCN":"泰国","strTail":"ประเทศไทย","strVientn":"Thái Lan"};
var strlng_conntry_laos={"strEN":"Laos","strCN":"老挝","strTail":"ลาว","strVientn":"Lào"};
var strlng_conntry_vietnam={"strEN":"Vietnam","strCN":"越南","strTail":"เวียดนาม","strVientn":"Việt Nam"};
var strlng_conntry_china={"strEN":"China","strCN":"中国","strTail":"ประเทศจีน","strVientn":"Trung Quốc"};
var strlng_not_install_wechar={"strEN":"You have not installed WeChat client yet","strCN":"您尚未安装微信客户端","strTail":"คุณยังไม่ได้ติดตั้งไคลเอ็นต์ WeChat","strVientn":"Bạn chưa cài đặt khách hàng WeChat"};
var strlng_features={"strEN":"Features","strCN":"功能介绍","strTail":"คุณสมบัติ","strVientn":"Tính năng, đặc điểm"};
var strlng_time_out_frame={"strEN":"The time you viewed is out of time frame","strCN":"您查看的时间已超出运输单时间范围","strTail":"เวลาที่คุณดูอยู่นอกกรอบเวลา","strVientn":"Thời gian bạn xem đã hết thời gian"};
var strlng_app_name={"strEN":"GCM","strCN":"全球冷运","strTail":"GCM","strVientn":"GCM"};
var strlng_same_transport_record={"strEN":"The container has a valid shipping record","strCN":"该货柜已存有效运输记录","strTail":"คอนเทนเนอร์มีบันทึกการจัดส่งที่ถูกต้อง","strVientn":"Container chứa hồ sơ vận chuyển hợp lệ"};
var strlng_input_prompt={"strEN":"Input prompt","strCN":"输入提示","strTail":"ป้อนข้อมูล prompt","strVientn":"Nhập dấu nhắc"};
var strlng_transport_status={"strEN":"Transport Status","strCN":"运输状态","strTail":"สถานะการขนส่ง","strVientn":"Tình trạng vận chuyển"};
var strlng_record_endtime_not_before_now={"strEN":"The end time settomg can not before the shipping time","strCN":"结束时间设置不能在起运时间之前","strTail":"การตั้งค่าเวลาสิ้นสุดไม่สามารถทำได้ก่อนเวลาปัจจุบัน","strVientn":"Cài đặt thời gian kết thúc không thể trước thời điểm hiện tại"};
var strlng_exchanger_record={"strEN":"Exchanger Record","strCN":"调换柜记录","strTail":"บันทึกข้อมูลการแลกเปลี่ยน","strVientn":"Hồ sơ trao đổi"};
var strlng_alarm_detail={"strEN":"Alarm Detail","strCN":"警报详情","strTail":"รายละเอียดสัญญาณเตือน","strVientn":"Chi tiết báo thức"};
var strlng_alarm_list={"strEN":"Alarm List","strCN":"警报列表","strTail":"รายการเตือนภัย","strVientn":"Danh sách cảnh báo"};
var strlng_alarm_time={"strEN":"Alarm Time","strCN":"警报时间","strTail":"เวลาปลุก","strVientn":"Thời gian báo thức"};
var strlng_alarm={"strEN":"Alarm","strCN":"警报","strTail":"สัญญาณเตือนภัย","strVientn":"báo thức"};
var strlng_location_warn={"strEN":"Location Warn","strCN":"位置提醒","strTail":"สถานที่เตือน","strVientn":"Địa điểm Cảnh báo"};
var strlng_location_warn_hint={"strEN":"Monitor / Range / Remind your container location","strCN":"定位 ／范围／提醒 您货柜的位置","strTail":"จอภาพ / ช่วง / เตือนตำแหน่งที่เก็บของคุณ","strVientn":"Theo dõi / Dãy / Nhắc vị trí chứa của bạn"};
var strlng_always_effective={"strEN":"Always effective","strCN":"长期有效","strTail":"มีประสิทธิภาพเสมอ","strVientn":"Luôn luôn hiệu quả"};
var strlng_new_location_warn={"strEN":"New location warn","strCN":"新建位置提醒","strTail":"เตือนตำแหน่งใหม่","strVientn":"Cảnh báo vị trí mới"};
var strlng_reminder_options={"strEN":"Reminder options","strCN":"提醒时效","strTail":"ตัวเลือกการแจ้งเตือน","strVientn":"Tùy chọn lời nhắc"};
var strlng_selected={"strEN":"Selected","strCN":"已选","strTail":"เลือก","strVientn":"Đã chọn"};
var strlng_optional={"strEN":"Optional","strCN":"可选","strTail":"ไม่จำเป็น","strVientn":"Không bắt buộc"};
var strlng_container_selection={"strEN":"Container Selection","strCN":"货柜选择","strTail":"การเลือกคอนเทนเนอร์","strVientn":"Lựa chọn thùng chứa"};
var strlng_n_container_has_been_selected={"strEN":"N Container has been selected","strCN":"已选择货柜 N 个","strTail":"เลือกคอนเทนเนอร์ N แล้ว","strVientn":"N Container đã được chọn"};
var strlng_once_effective={"strEN":"Once Effective","strCN":"一次有效","strTail":"เมื่อมีประสิทธิภาพ","strVientn":"Một khi hiệu quả"};
var strlng_cancel_warn={"strEN":"Cancel Warn","strCN":"取消提醒","strTail":"ยกเลิกคำเตือน","strVientn":"Hủy Cảnh báo"};
var strlng_long_press_the_map_hint={"strEN":"Long press the map to select the location you want ","strCN":"长按地图选择你想要的位置","strTail":"กดแผนที่ค้างไว้เพื่อเลือกตำแหน่งที่คุณต้องการ","strVientn":"Nhấn và giữ bản đồ để chọn vị trí bạn muốn"};
var strlng_effective_range={"strEN":"Effective range","strCN":"有效范围","strTail":"ช่วงที่มีประสิทธิภาพ","strVientn":"Phạm vi có hiệu lưc"};
var strlng_cancel_reminder_ask={"strEN":"Are you sure you want to cancel the reminder?","strCN":"您确定需要取消提醒吗?","strTail":"คุณแน่ใจหรือไม่ว่าต้องการยกเลิกการแจ้งเตือน","strVientn":"Bạn có chắc chắn muốn hủy lời nhắc không?"};
var strlng_container={"strEN":"Container","strCN":"货柜","strTail":"ภาชนะ","strVientn":"Container"};
var strlng_history={"strEN":"History","strCN":"历史记录","strTail":"ประวัติ","strVientn":"Lịch sử"};
var strlng_create_time={"strEN":"Create Time","strCN":"创建时间","strTail":"สร้างเวลา","strVientn":"Tạo thời gian"};

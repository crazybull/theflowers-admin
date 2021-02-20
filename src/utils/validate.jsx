/*正则验证*/
//账号密码验证
export const validate_pwd=/^(?![0-9]+$)(?![A-Za-z]+$)[A-Za-z0-9]{8,20}$/
//手机号（账号）验证
export const validate_phone=/^1\d{10}$/
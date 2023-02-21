#！name=91
#！desc=91视频解锁会员

[脚本]

http-response ^http[s]?:\/\/.+((ppapi)|(17gwl)|(sgyrc)|(mnghx)|(czbt)|(jtshuzhiwa)).(info|cc|com)\/m_sns\/(video\/apply_play_permission|film).*$ require-body=1,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/keep.js
[MITM]

hostname = *17gwl*,appapi*,*sgyrc*,*mnghx*,*czbt*,*jtshuzhiwa*,mnghx,czbt

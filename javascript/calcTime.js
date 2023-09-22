const work_st = 8;
const work_et = 17;
const noon_st = 12;
const noon_et = 13;

function getHour(StartTime, EndTime) {
	StartTime = new Date(StartTime.replace(/-/g, '/'));
	EndTime = new Date(EndTime.replace(/-/g, '/'));
	var ms = Math.abs(EndTime.getTime() - StartTime.getTime());

	// 实际工时（天） = 起止日期差 - 周六日数目。
	if ((StartTime.getMonth() == EndTime.getMonth())
			&& (StartTime.getDate() == EndTime.getDate())) {
		// 若为同一日期
		var hour1 = (getDayHour(StartTime.getHours(), StartTime.getMinutes(),
				EndTime.getHours(), EndTime.getMinutes(), "1")).toFixed(1);
		$("#xxtj").val(hour1.substring(0,hour1.length-2));// 按天计算
		return hour1;
	} else {
		var sh=StartTime.getHours();
		var eh= EndTime.getHours();
		if (noon_et <= sh) {
			if (work_st <= eh && eh <= noon_st) {
				var days = Math.ceil(ms / 1000 / 60 / 60 / 24) + 1;
			}else{
				var days = Math.floor(ms / 1000 / 60 / 60 / 24) + 1;
			}
		} else {
			var days = Math.floor(ms / 1000 / 60 / 60 / 24) + 1;
		}
		var workDayVal = 0;
		// 工时的余数
		var remainder = days % 7;
		// 工时向下取整的除数
		var divisor = Math.floor(days / 7);
		var weekendDay = 2 * divisor;
 
		// 起始日期的星期，星期取值有（1,2,3,4,5,6,0）
		var nextDay = StartTime.getDay();
		// 从起始日期的星期开始 遍历remainder天
		for (var tempDay = remainder; tempDay >= 1; tempDay--) {
			// 第一天不用加1
			if (tempDay == remainder) {
				nextDay = nextDay + 0;
			} else if (tempDay != remainder) {
				nextDay = nextDay + 1;
			}
			// 周日，变更为0
			if (nextDay == 7) {
				nextDay = 0;
			}
			// 周六日
			if (nextDay == 0 || nextDay == 6) {
				weekendDay = weekendDay + 1;
			}
		}
		workDayVal = days - weekendDay - 2;
		var hour0 = (workDayVal * 8 + getDayHour(StartTime.getHours(),
				StartTime.getMinutes(), EndTime.getHours(), EndTime
						.getMinutes(), "0")).toFixed(1);
		$("#xxtj").val(hour0.substring(0,hour0.length-2));// 按天计算
		return hour0;
	}
}
function getDayHour(sh, sm, eh, em, type) {
	// console.log(sh)
	// console.log(sm)
	// console.log(eh)
	// console.log(em)
	sh = parseFloat(sh);
	eh = parseFloat(eh);

	var sh_sm = parseFloat(sh + sm / 60);
	var eh_em = parseFloat(eh + em / 60);

	if (type == "0") {
		// 计算非当天
		if (work_st <= sh && sh <= noon_st) {
			sh = noon_st - sh_sm + 4;
		} else if (noon_et <= sh && sh <= work_et) {
			sh = work_et - sh_sm;
		}
		if (work_st <= eh && eh <= noon_st) {
			eh = eh_em - work_st;
		} else if (noon_et <= eh && eh <= work_et) {
			eh = eh_em - noon_et + 4;
		}
		return parseFloat(sh + eh);

		// if (work_st <= sh && sh <= noon_st) {
		// 	sh = noon_st - sh + 4;
		// } else if (noon_et <= sh && sh <= work_et) {
		// 	sh = work_et - sh;
		// }
		// if (work_st <= eh && eh <= noon_st) {
		// 	eh = eh - work_st;
		// } else if (noon_et <= eh && eh <= work_et) {
		// 	eh = eh - noon_et + 4;
		// }
		// return parseFloat(sh + eh);
	} else {
		// 计算当天
		if (sh == eh) {
			// 在同一小时
			if (sm == em) {
				return 0;
			} else {
				return Math.abs((sm - em) / 60);
			}
		} else {
			
			// 不在同一小时
			// 开始时间在上午时间段，并且结束时间在下午时间段
			if ((work_st <= sh && sh <= noon_st) && (noon_et <= eh && eh <= work_et)) {

				// console.log(noon_st)
				// console.log(sh_sm)
				// console.log(eh_em)
				// console.log(noon_et)

				if (sm == 30) {
					console.log(parseFloat(noon_st - sh_sm + eh_em - noon_et))
					return parseFloat(noon_st - sh_sm + eh_em - noon_et);
					
				} else if (sm < 30) {
					return parseFloat(noon_st - sh_sm + eh_em - noon_et);
 
				} else if (sm > 30 && sh != noon_st) {
					return parseFloat(noon_st - sh_sm - 1 + eh_em - noon_et);
				}

				// if (sm == 30) {
				// 	return parseFloat(noon_st - sh + eh - noon_et);
				// } else if (sm < 30) {
				// 	return parseFloat(noon_st - sh + eh - noon_et);
 
				// } else if (sm > 30 && sh != noon_st) {
				// 	return parseFloat(noon_st - sh - 1 + eh - noon_et);
				// }
			}
			// 开始时间与结束时间都在上午时间段
			if ((work_st <= sh && sh <= noon_st) && (work_st <= eh && eh <= noon_st)) {
 
				if (sm == em) {
					return parseFloat(Math.abs(eh - sh));
				} else {
 
					return parseFloat(Math.abs(eh - sh - 1) + (60 - sm) / 60
							+ em / 60);
				}
 
			} else if (noon_et <= sh && sh <= work_et && noon_et <= eh && eh <= work_et) {
				if (sm == em) {
					return parseFloat(Math.abs(eh - sh));
				} else {
 
					return parseFloat(Math.abs(eh - sh - 1) + (60 - sm) / 60
							+ em / 60);
				}
			}
		}
	}
}
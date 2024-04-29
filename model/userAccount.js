import {
	mockIp,
	mockReqId
} from '../utils/mock';

export function genUserAccount() {
	const resp = {
		data: {
        account: 'xijian12',
        password: '20021012',
        userType: 'client',
        username: '汐渐',
        avatar: 'https://xiao-shu-shu.oss-cn-shanghai.aliyuncs.com/Avatar/d35a5084-357f-4cdd-8d3f-e0799f49f8e5.png',
        email: '3146624068@qq.com',
        phone: '13984760942',
		},
		code: 'Success',
		msg: null,
		requestId: mockReqId(),
		clientIp: mockIp(),
		rt: 113,
		success: true,
	};

	return resp;
}
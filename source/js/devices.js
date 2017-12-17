
    var app=angular.module('myApp', ['ui.bootstrap','ui.utils']);
        app.controller('myCtrl',function($scope){
        $scope.data=[
        [
           
            "18:D6:C7:8D:9D:F7",
            "WIFIMAN VNPT DEMO" ,
            "VNPT DEMO",
            "1",
            "255d15h0m31s",
            "in 4 minutes"
        ],
        [
            "D4:6E:0E:C1:4D:C1	",
            "@ IPOS.VN",
            "IPOS.VN",
            "1",
            "0:03:55:59",
            "in 3 minutes",
            "21919"
        ],
        [
            "18:D6:C7:22:A1:EC",	
            "@ BlackBall",	
            "BLACK BALL - 173 XÃ ĐÀN",	
            "3",	
            "0:03:56:47",
            "in 2 minutes",	
            "20639"
        ],
        [
            "D4:6E:0E:3C:A0:1D",	
            "KOMBO 108A1 PNT",	
            "KOMBO PHẠM NGỌC THẠCH",	
            "4",	
            "0:03:55:38",	
            "a few seconds ago",	
            "20644"
        ],
        [
            "18:D6:C7:39:2F:E4",	
            "@ Xfood",	
            "Xfood",	
            "1",	
            "0:03:56:47",
            "2 minutes ago",	
            "10731"
        ],
        [
            "D4:6E:0E:7B:90:61",	
            "@Black Ball",	
            "BLACK BALL - 46 HÀNG MÃ",	
            "1",	
            "0:03:55:38",	
            "3 minutes ago",	
            "22723"
        ],
        [
            "D4:6E:0E:7B:8C:F3",	
            "@ Cây Xăng",	
            "KAFFE CAY XANG",	
            "6",	
            "0:03:56:47",	
            "4 minutes ago",	
            "19280"
        ],
        [
			"D4:6E:0E:3C:A3:35",	
			"@ KOMBO Giảng Võ",	
			"KOMBO Giảng Võ",	
			"2",	
			"0:03:55:39",	
			"5 minutes ago",
			"23412"
        ],
        [
            "18:D6:C7:FC:3B:2F",	
            "Goky Tea",	
            "Goky 29 Hai Bà Trưng",	
            "4",	
            "0:03:55:39",	
            "11 minutes ago",	
            "21036"
        ],
        [
            "84:16:F9:7C:8C:4A",	
            "@ Xfood",	
            "Xfood",	
            "1",	
            "0:03:55:38",	
            "13 minutes ago",	
            "23938"
        ],
        [
            "D4:6E:0E:7B:97:DB",	
            "DingTea",	
            "DingTea Hà Nam",	
            "3",	
            "0:03:55:39",	
            "15 minutes ago",	
            "23741"
        ],
        [
            "D4:6E:0E:7B:90:25",	
            "@TocoToco",	
            "TocoToco - Thường Tín",	
            "3",	
            "0:03:55:39",	
            "16 minutes ago",	
            "25112"
        ],
        [
            "D4:6E:0E:3C:CB:29",	
            "@ KOMBO Nguyễn Phong Sắc",	
            "KOMBO Nguyễn Phong Sắc",	
            "1",	
            "0:03:55:39",	
            "17 minutes ago",	
            "29801"
        ],
        [
            "84:16:F9:D9:CF:2A",	
            "@ LÃ VỌNG",	
            "Lã Vọng 2",	
            "1",	
            "0:03:55:38",	
            "18 minutes ago",	
            "13831"
        ],
        [
			"18:D6:C7:8D:A2:E3",	
			"@ FOOD HOUSE",	
			"FOOD HOUSE - HỒ ĐẮC DI",	
			"1",	
			"0:03:55:38",	
			"18 minutes ago",	
			"28052"
        ],
        [
            "D4:6E:0E:7B:7A:3F",	
            "@ SARIWON BUFFET",	
            "SARIWON - VINCOM",	
            "1",	
            "0:03:56:48",	
            "20 minutes ago",	
            "38299"
        ],
        [
            "D4:6E:0E:7B:96:73",	
            "@Hầm Lã Vọng",	
            "Hầm Lã Vọng",	
            "1",	
            "0:03:55:38",	
            "21 minutes ago",	
            "17571"
        ],
        [
            "D4:6E:0E:7B:7A:CB",	
            "@ GOKY TEA",	
            "Goky Tea - Phạm Ngọc Thạch",	
            "1",	
            "0:03:55:39",	
            "22 minutes ago",	
            "22431"
        ],
        [
            '18:D6:C7:22:AE:FC',	
            '@ ĐỘC QUÁN',	
            'ĐỘC QUÁN',	 
            '1',	
            '0:03:55:38',	
            '23 minutes ago',	
            '20656'
        ],
        [
            'D4:6E:0E:7B:90:07',	
            'Goky 280 Thuong Dinh',	
            'Goky 280 Thượng Đình',	
            '1',	
            '0:03:55:39',	
            '26 minutes ago',	
            '26883'
        ],
        [
            '18:D6:C7:38:20:04',	
            '@ GOKY TEA',	
            'GOKY TEA-517 NGUYỄN TRÃI',	
            '6',
            '0:03:56:47',	
            '27 minutes ago',	
            '36160'
        ],
        [
            '84:16:F9:E1:8F:EE',	
            '@ BBQ Đào Nguyên',	
            'BBQ Đào Nguyên',	
            '1',	
            '0:03:55:38',	
            '29 minutes ago',	
            '20068'
        ],
        [
            '84:16:F9:E1:83:3A',	
            '@KOOLOFF - Matcha Caffe',	
            'KOOLOFF-Matcha Caffe',	
            '2',	
            '0:00:42:26',	
            '30 minutes ago',	
            '24862'
        ],
        [
            'D4:6E:0E:7B:8B:23',	
            '@Black Ball',	
            'BLACK BALL - 32 QUANG TRUNG',	
            '3',	
            '0:03:56:48',	
            '31 minutes ago',	
            '42620'
        ],
        [
            'D4:6E:0E:7B:77:81',	
            'Foodhouse85Thaiha',	
            'FOOD HOUSE - 85 THÁI HÀ',	
            '1',	
            '0:03:55:38',
            '32 minutes ago',	
            '21784'
        ],
        [
            '18:D6:C7:FC:40:05',	
            '@ KOMBO Cửa Bắc',	
            'KOMBO Cửa Bắc',	
            '1',	
            '0:03:55:38',	
            '33 minutes ago',	
            '17007'
        ],
        [
            '18:D6:C7:FC:41:97',	
            '@ Cây Xăng',	
            'KAFFE CAY XANG',	
            '1',	
            '0:03:55:39',	
            '33 minutes ago',	
            '23887'
        ],
        [
            '18:D6:C7:39:0B:E2',	
            'KODO CAFE - 213 XA DAN',	
            'Kodo Cafe-213 Xã Đàn',	
            '1',	
            '0:03:55:38',	
            '34 minutes ago',	
            '25550'
        ],
        [
            '18:D6:C7:39:2F:F4',	
            '@ GOKY TEA',	
            'GOKY TEA-517 NGUYỄN TRÃI',	
            '29',	
            '0:03:56:48',	
            '35 minutes ago',	
            '12529'
        ],
        [
            'D4:6E:0E:7B:95:55',	
            '@ SARIWON BUFFET',	
            'SARIWON - BIG C',	
            '3',	
            '0:03:56:48',	
            '35 minutes ago',	
            '10812'
        ],
        [
            'D4:6E:0E:7B:93:E9',	
            '@GOKY',	
            'Goky Láng Hạ',	
            '1',	
            '0:03:55:39',	
            '36 minutes ago',	
            '23293'
        ],
        [
            'D4:6E:0E:7B:93:E7',	
            'Foodhouse85Thaiha',	
            'FOOD HOUSE - 85 THÁI HÀ',	
            '3',	
            '0:03:55:38',	
            '37 minutes ago',	
            '20902'
        ],
        [
            '18:D6:C7:8D:9E:07',	
            '@ TIẾN PRO',	
            'BÍCH THẢO',	
            '1',	
            '0:03:55:38',	
            '38 minutes ago',	
            '15020'
        ],
        [
            '84:16:F9:E1:F7:96',	
            '@ KOMBO Hai Bà Trưng',	
            'KOMBO Hai Bà Trưng',	
            '1',	
            '0:03:55:39',	
            '39 minutes ago',	
            '16224'
        ],
        [
            'D4:6E:0E:3C:A3:1B',	
            'KODO CAFE - 213 XA DAN',	
            'Kodo Cafe-213 Xã Đàn',	
            '0',	
            '0:03:56:48',	
            '39 minutes ago',	
            '23193'
        ],
        [
            'D4:6E:0E:7B:7F:47',	
            'KODO CAFE - 213 XA DAN',	
            'Kodo Cafe-213 Xã Đàn',	
            '1',	
            '0:03:55:39',	
            '41 minutes ago',	
            '15254'
        ],
        [
            '18:D6:C7:FC:44:61',	
            '@ GOKY',	
            'Goky Tea - Hồ Tùng Mậu',	
            '1',	
            '0:03:55:39',	
            '42 minutes ago',	
            '11442'
        ],
        [
            'D4:6E:0E:7B:93:DF',	
            '@KOMBO Lạc Trung',	
            'KOMBO Lạc Trung',	
            '1',	
            '0:03:55:38',	
            '43 minutes ago',	
            '27494'
        ],
        [
            'D4:6E:0E:3C:A3:17',	
            '@ GOKY',	
            'Goky Tea - 425 Bach Mai',	
            '4',	
            '0:03:55:38',	
            '44 minutes ago',	
            '26818'
        ],
        [
            '84:16:F9:D9:CD:66',	
            '@GOKY',	
            'Goky Láng Hạ',	
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '15943'
        ],
        [
        	'18:D6:C7:FC:40:6F',	
        	'@ TASTER',	
        	"TASTER'S CHOICE",	
        	'3',	
        	'0:03:55:39',	
        	'an hour ago',	
        	'28953'
        ],
        [
            '84:16:F9:B6:A2:74',	
            '@ CHATIME 128 Hàng Trống',	
            'CHATIME-128 Hang Trong',	
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '21591'
        ],
        [
            '98:DE:D0:C2:79:54',	
            '@KOMBO Trần Đại Nghĩa',	
            'KOMBO - 46 TRẦN ĐẠI NGHĨA',	
            '2',	
            '0:03:55:39',	
            'an hour ago',	
            '23713'
        ],
        [
            'D4:6E:0E:3C:CB:25',	
            '@ ỐC KEN',	
            'ỐC KEN - ĐÀ NẴNG',	
            '1',	
            '0:03:55:39',	
            'an hour ago',	
            '18311'
        ],
        [
            '84:16:F9:E1:B6:D6',	
            '@KOMBO Trần Đại Nghĩa',	
            'KOMBO - 46 TRẦN ĐẠI NGHĨA',
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '28621'
        ],
        [
            '18:D6:C7:FC:41:75',	
            'KOMBO 108A1 PNT',	
            'KOMBO PHẠM NGỌC THẠCH',	
            '2',	
            '0:03:55:38',	
            'an hour ago',	
            '14121'
        ],
        [
        	'E8:94:F6:EB:2D:EA',	
        	'@ GOKY',	
        	'Goky Tea - Hồ Tùng Mậu',	
        	'1',	
        	'0:03:55:40',	
        	'an hour ago',	
        	'29298'
        ],
        [
            'E8:94:F6:EB:2D:EA',	
            '@ GOKY',
            'Goky Tea - Hồ Tùng Mậu',	
            '1',	
            '0:03:55:40',	
            'an hour ago',	
            '29298'
        ],
        [
            'D4:6E:0E:7B:99:B7',	
            '@TocoToco',	
            'TocoToco - Thường Tín',	
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '21672'
        ],
        [
            '84:16:F9:7C:82:58',	
            '@ Xfood',	
            'Xfood - 8 Trần Quý Kiên',	
            '2',	
            '0:03:56:47',	
            'an hour ago',	
            '25454'
        ],
        [
            'D4:6E:0E:3C:CE:5B',	
            '@ Minh Chay',	
            'Minh Chay Hàng Gai',	
            '1',	
            '0:03:55:39',	
            'an hour ago',	
            '16320'
        ],
        [
        	'D4:6E:0E:3C:D9:57',	
        	'@ PHAN BUFFET',	
        	'PHAN BUFFET - TRIỀU KHÚC',	
        	'2',	
        	'0:03:55:39',
        	'an hour ago',	
        	'23263'
        ],
        [
            'D4:6E:0E:7B:9A:3D',	
            'DingTea',	
            'DingTea Hà Nam',	
            '1',	
            '0:03:55:39',	
            'an hour ago',	
            '18527'
        ],
        [
            'D4:6E:0E:3C:B3:0F',	
            '@ KOMBO Lê Văn Thiêm',	
            'KOMBO Lê Văn Thiêm',	
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '15540'
        ],
        [
            'D4:6E:0E:3C:CA:43',	
            '@ ỐC KEN',	
            'ỐC KEN',	
            '1',	
            '0:03:55:38',	
            'an hour ago',	
            '10833'
        ],
        [
            '18:D6:C7:FC:47:93',	
            'Toco Toco - 188 Thái Hà',	
            'Toco Toco',	
            '2',	
            '0:03:55:38',	
            'an hour ago',	
            '27129'
        ],
        [
            'D4:6E:0E:7B:93:C3',	
            'KODO CAFE - 213 XA DAN',	
            'Kodo Cafe-213 Xã Đàn',	
            '2',	
            '0:03:56:48',	
            'an hour ago',	
            '11300'
        ],
        [
        	'D4:6E:0E:7B:79:03',	
        	'@ Cây Xăng',	
        	'KAFFE CAY XANG',	
        	'1',	
        	'0:03:56:48',	
        	'an hour ago',	
        	'56447'
        ],
        [
        	'D4:6E:0E:7B:95:7B',	
        	'@Foodhouse-171NKKN',	
        	'FOOD HOUSE - 171 NAM KỲ KHỞI NGHĨA',	
        	'1',	
        	'0:03:55:38',	
        	'an hour ago',	
        	'14695'
        ],
        [
        	'D4:6E:0E:7B:95:37',	
        	'@ FITNESS WORLD',	
        	'FITNESS WORLD',	
        	'4',	
        	'0:03:56:48',	
        	'an hour ago',	
        	'26225'
        ],
        [
            '18:D6:C7:FC:53:EF', 
            '@TRUC QUYEN LAU QUAN',    
            'Trúc Quyên Lầu Quán', 
            '1',   
            '0:03:56:48',  
            '2 hours ago',
            '33232'
        ],
        [
            '18:D6:C7:FC:53:41',   
            'CHÁO ẾCH SINGAPORE',  
            'CHÁO ẾCH SINGAPORE',  
            '1',  
            '0:03:55:39',  
            '2 hours ago', 
            '22387'
        ],
        [
            'D4:6E:0E:7B:78:F5',   
            '@ FITNESS WORLD', 
            'FITNESS WORLD',   
            '3',   
            '0:03:55:38',  
            '2 hours ago', 
            '28247'
        ],
        [   
            '18:D6:C7:FC:53:FB',   
            '@TÔM HÙM RESTAURANT', 
            'NHÀ HÀNG TÔM HÙM',    
            '1',   
            '0:03:55:36',  
            '2 hours ago', 
            '14474'
        ],
        [
            '18:D6:C7:FC:53:13',   
            '@ PHAN BUFFET',   
            'PHAN BUFFET - TRIỀU KHÚC',    
            '2',   
            '0:03:55:38',  
            '2 hours ago', 
            '16682'
        ],
        [
            '18:D6:C7:FC:51:F5',   
            'CHÁO ẾCH SINGAPOR',  
            'CHÁO ẾCH SINGAPORE',  
            '4',   
            '0:03:55:39',  
            '2 hours ago', 
            '15428'
        ],
        [    
            '18:D6:C7:FC:52:B9',   
            'CHÁO ẾCH SINGAPORE',  
            'CHÁO ẾCH SINGAPORE',  
            '1',  
            ' 0:03:55:39', 
            '2 hours ago', 
            '28143'
        ],
        [
            'D4:6E:0E:3C:9E:B1',  
            '@ ĐỘC QUÁN',  
            'ĐỘC QUÁN',    
            '1',   
            '0:03:55:37',  
            '2 hours ago', 
            '25246'
        ],
        [
            'D4:6E:0E:3C:9F:23',  
            '@FOODHOUSE-135PXL',   
            'FOOD HOUSE - 135 PHAN XÍCH LONG', 
            '1',   
            '0:03:55:40',  
            '2 hours ago', 
            '25444'
        ],
        [
            'D4:6E:0E:3C:A7:B9',  ' @ Cây Xăng',  'KAFFE CAY XANG',  '3',   '0:03:55:39',  '2 hours ago', '12721'
        ],
        [   
            '18:D6:C7:FC:54:15',  '@FOODHOUSE-135PXL',   'FOOD HOUSE - 135 PHAN XÍCH LONG', '1',   '0:03:55:40',  '2 hours ago', '17321'
        ],
        [
            '18:D6:C7:FC:47:C7',   '@ FOOD HOUSE-NGUYEN KIEM',    'FOOD HOUSE - NGUYỄN KIỆM',    '1',   '0:03:55:39',  '2 hours ago', '27202'
        ],
        [
            'D4:6E:0E:3C:A7:D3',  '@ PHAN BUFFET',   'PHAN BUFFET - 485 NGUYỄN VĂN CỪ', '1',  '0:03:55:39',  '2 hours ago', '10161'
        ],
        [
            '18:D6:C7:FC:58:61',   '@ FOOD HOUSE',    'FOOD HOUSE - HỒ ĐẮC DI',  '2',   '0:03:55:38',  '2 hours ago', '16184'
        ],
        [
            'D4:6E:0E:3C:9C:65',   '@ ỐC KEN',    'ỐC KEN - 253 TRÍCH SÀI',  '1',   '0:03:55:38',  '2 hours ago', '27921'
        ],
        [
            '18:D6:C7:F8:0B:A0',   '@ GOKY TEA',  'GOKY TEA-517 NGUYỄN TRÃI',    '3',   '0:03:55:41',  '2 hours ago', '23284'
        ],
        [
            '18:D6:C7:FC:53:33',   '@ FITNESS WORLD', 'FITNESS WORLD',   '2',   '0:03:55:39',  '2 hours ago', '15692'
        ],
        [ 
            '18:D6:C7:FC:50:6B',   '@ BlackBall', 'BLACK BALL - 239 TÔ HIỆU',    '4',  '0:03:55:39',  '2 hours ago', '21815'
        ],
        [
            '18:D6:C7:FC:51:6D',   '@ FOOD HOUSE-NGUYEN KIEM',    'FOOD HOUSE - NGUYỄN KIỆM',    '1',   '0:03:55:39',  '2 hours ago', '26449'
        ],
        [
            'D4:6E:0E:3C:CF:83',   '@ RiO Garden Coffee', 'RIO GARDEN COFFEE',   '8',   '0:09:24:04',  '2 hours ago', '24295'
        ],
        [
            'D4:6E:0E:7B:97:EB',   '@ Buffet Việt',   'BUFFET VIỆT', '1',   '0:03:55:38',  '2 hours ago', '15903'
        ],
        [
            '18:D6:C7:FC:4E:13',   '@ RiO Garden Coffee', 'RIO GARDEN COFFEE',   '1',   '0:00:40:03',  '2 hours ago', '13699'
        ],
        [
            'D4:6E:0E:7B:81:E1',  '@ Buffet Việt',   'BUFFET VIỆT', '1',   '0:03:55:39',  '2 hours ago', '22794'
        ],
        [
            'D4:6E:0E:7B:97:05',   '@ Buffet Việt',   'BUFFET VIỆT', '1',   '0:03:55:38',  '2 hours ago','14036'
        ],
        [
            'D4:6E:0E:7B:82:17',   '@ Buffet Việt',   'BUFFET VIỆT', '3',   '0:03:55:38',  '2 hours ago', '10830'
        ],
        [
            'D4:6E:0E:7B:82:4F',   '@ Buffet Việt',   'BUFFET VIỆT', '1',   '0:03:55:39',  '2 hours ago', '23699'
        ],
        [
            'D4:6E:0E:3C:9E:81',   '@ PHAN BUFFET',   'PHAN BUFFET - TRIỀU KHÚC',    '1',   '0:03:55:40',  '2 hours ago', '17263'
        ],
        [
            'D4:6E:0E:7B:95:AD',   '@ VƯỜN NƯỚNG BRAZIL', 'VƯỜN NƯỚNG BRAZIL',   '1',   '0:03:55:39',  '2 hours ago', '24810'
        ],
        [
            'D4:6E:0E:7B:95:D9',   '@ Xfood', 'Xfood - 8 Trần Quý Kiên', '1',   '0:03:55:38',  '2 hours ago', '24059'
        ],
        [
            '18:D6:C7:FC:58:6F',   '@ Food House',    'FOOD HOUSE - HUỲNH TẤN PHÁT', '4',   '0:03:55:40',  '2 hours ago', '21669'
        ],
        [
            'D4:6E:0E:3C:9F:41',' @ Food House',    'FOOD HOUSE - HUỲNH TẤN PHÁT', '2',   '0:03:55:39',  '2 hours ago', '16914'
        ],
        [
            '18:D6:C7:FC:54:FB',' @ ỐC KEN',    'ỐC KEN - 66 PHẠM NGỌC THẠCH', '1',   '0:03:55:39',  '2 hours ago', '26573'
        ],
        [
            'D4:6E:0E:3C:AA:1F', ' @ PHAN BUFFET',   'PHAN BUFFET - TRIỀU KHÚC',    '1',   '0:03:55:38',  '2 hours ago', '13266'
        ],
        [
            'D4:6E:0E:C1:5C:77', ' @ PHAN BUFFET',   'PHAN BUFFET - NGUYỄN CHÁNH',  '1',  '0:03:55:38',  '2 hours ago', '20327'
        ],
        [
            'D4:6E:0E:C1:65:27','  @ PHAN BUFFET',  'PHAN BUFFET - NGUYỄN CHÁNH',  '2',   '0:03:55:39',  '2 hours ago', '19666'
        ],
        [
            'D4:6E:0E:C1:4F:09','  @ FOOD HOUSE',    'FOOD HOUSE - 72 NGUYỄN VĂN CỪ',   '1',   '0:03:55:38',  '2 hours ago', '12345'
        ],
        [
            'D4:6E:0E:C1:52:57','  @ FOOD HOUSE',    'FOOD HOUSE - 72 NGUYỄN VĂN CỪ',   '1' ,  '0:03:55:39',  '2 hours ago', '21543'
        ],
        [
            'D4:6E:0E:C1:48:F3','  @ PHAN BUFFET',   'PHAN BUFFET - THÁI HÀ',  '1',   '0:03:55:38',  '2 hours ago', '24585'
        ],
        [
            'D4:6E:0E:C1:50:4F','  @ PHAN BUFFET',   'PHAN BUFFET - THÁI HÀ', '1',   '0:03:55:38',  '2 hours ago', '11682'
        ],
        [
            'D4:6E:0E:C1:5C:13','  @ PHAN BUFFET',   'PHAN BUFFET - THÁI HÀ', '1',   '0:03:55:39',  '2 hours ago', '13600'
        ],
        [
            'D4:6E:0E:C1:6B:8D','  @ PHAN BUFFET',   'PHAN BUFFET - 485 NGUYỄN VĂN CỪ', '1',   '0:03:55:38',  '2 hours ago', '12855'
        ],
        [
            'D4:6E:0E:C1:48:E1','  @ PHAN BUFFET',   'PHAN BUFFET - 485 NGUYỄN VĂN CỪ', '1',  '0:03:55:39',  '2 hours ago', '28965'
        ],
        [
            'D4:6E:0E:C1:6C:B7',' @ Xfood', 'XFOOD - 40 ĐỖ QUANG', '1',   '0:03:55:39',  '2 hours ago', '27806'
        ],
        [
            'D4:6E:0E:C1:5B:A9',' @ Xfood', 'XFOOD - 40 ĐỖ QUANG', '1',   '0:03:55:39', '2 hours ago', '19190'
        ],
        [
            'D4:6E:0E:3C:CE:31',' Nha khoa Smile Care', 'Nha khoa Smile Care', '1',   '0:03:54:38',  '2 hours ago', '23743'
        ],
        [
            'D4:6E:0E:3C:C9:F9',' Nha khoa Smile Care', 'Nha khoa Smile Care', '1',   '0:03:54:38',  '2 hours ago', '29562'
        ],
        [
            'D4:6E:0E:7B:93:A5',' Nha khoa Smile Care', 'Nha khoa Smile Care', '1',   '0:03:54:38',  '2 hours ago', '17316'
        ],
        [
            'D4:6E:0E:7B:95:FB',' @TocoToco',   'TocoToco - Thường Tín',   '3',   '0:00:07:06',  'a month ago', '24570'
        ],
        [
            '18:D6:C7:8D:A9:A5',' @ Nhà Hàng Nam Sơn',  'Nhà Hàng Nam Sơn',    '1',   '0:04:10:29',  'a month ago', '29398'
        ],
        [
            'D4:6E:0E:7B:7A:F9',' @ Nhà Hàng Nam Sơn',  'Nhà Hàng Nam Sơn ',   '1',   '0:00:01:58',  'a month ago', '27681'
        ],
        [
            '84:16:F9:E2:29:FC',' KODO CAFE - 213 XA DAN',  'Kodo Cafe-213 Xã Đàn',    '4',   '0:12:59:39',  'a month ago', '25973'
        ],
        [
            '84:16:F9:E2:3F:48',' @ WIFIMAN',   'WIFIMAN', '1',   '0:00:02:53',  'a month ago', '20802'
        ],
        [
            '4:16:F9:E1:A8:88' , '@Phở 360',    'PHỞ 360 Cửa Bắc', '4',   '0:08:22:38',  'a month ago', '20372'
        ],
        [
            '18:D6:C7:FC:4F:37',' CHÁO ẾCH SINGAPORE',  'CHÁO ẾCH SINGAPORE',  '2',   '0:11:10:48',  'a month ago', '44434'
        ],
        [
            '18:D6:C7:F8:0B:B6',' @ WIFIMAN DEMO',  'WIFIMAN', '1',   '0:00:00:59',  'a month ago', '24715'
        ],
        [
            'D4:6E:0E:7B:81:5D',' @ Buffet Việt',   'BUFFET VIỆT', '4',   '0:00:11:08',  'a month ago', '14114'
        ],
        [
            'C0:4A:00:FC:52:E5',' @ WIFIMAN',   'WIFIMAN', '1',   '0:00:07:20',  'a month ago', '28322'
        ],
        [
            '18:D6:C7:8D:AA:0F',' HẢI SẢN LÃ VỌNG (3)', 'WIFIMAN', '0',   '8d11h42m10s', '9 months ago'    
        ],
        [
            '18:D6:C7:8D:98:A5',' Quán 39 Gà Quê Vịt Quay Bắc Kinh',    'WIFIMAN', '0',   '0d0h15m39s',  '9 months ago'    
        ],
        [
            '84:16:F9:E1:7D:D6',' HỒNG TRÀ',  'Hồng Trà - Vincom NCT',  '8',  '5d9h25m47s',  '9 months ago'    
        ],
        [    
            'C4:E9:84:7F:89:B6','  GOLDEN GATE (2)', 'WIFIMAN', '1',   '0d3h9m34s',   '9 months ago '   
        ],
        [
            '84:16:F9:E2:40:9E','  Kodo Cafe T5',    'Kodo Cafe-213 Xã Đàn',   '0',   '21d6h0m42s',  '9 months ago'    
        ],
        [
            '18:D6:C7:22:89:46','  @ Xfood', 'Xfood - 8 Trần Quý Kiên', '1',  '0:05:45:34',  '10 hours ago',  '25054'
        ],
        [
            'D4:6E:0E:7B:94:35','  @SENGOCHA TEA',   'SENGOCHA TEA',    '3',   '0:14:26:46',  '10 hours ago',    '43040'
        ],
        [
            '18:D6:C7:22:89:76',  'HathiJulia',  'HathiJulia',  '1',   '0:06:40:54',  '10 hours ago',    '26942'
        ],
        [
            '84:16:F9:E1:A7:76','  Lẩu Ba Lý - Hong Kong Cuisine',   'WIFIMAN', '11',  '3d11h37m43s', '8 months ago'    
        ],
        [
            '84:16:F9:E2:65:58','  GEMINI COFFEE (2)', 'WIFIMAN', '5',   '23d7h12m19s', '8 months ago '   
        ],
        [
            '18:D6:C7:FC:56:F9','  BayBuffet',   'WIFIMAN', '32',  '0:17:09:47',  '8 months ago'
        ],
        [ 
            '18:D6:C7:8D:A9:77',' WIFIMAN VNPT DEMO',   'VNPT DEMO',   '3',   '21d17h35m50s',    '8 months ago'    
        ],
        [
            'C4:E9:84:7F:89:4E',' MỲ CAY SEOUL',    'WIFIMAN', '4',  '0:02:49:33',  '8 months ago '   
        ],
        [
            '18:D6:C7:8D:97:4F',' WIFIMAN',  'WIFIMAN', '3',   '0:12:51:47', '8 months ago '   
        ],
        [
            'D4:6E:0E:7B:89:BB',' WIFIMAN ', 'WIFIMAN',  '',   '0:00:00:27',  '8 months ago '  
        ],
        [
            '18:D6:C7:8D:AA:6B',' SeasonBBQ',   'WIFIMAN', '4',   '28d0h9m13s',  '8 months ago'    
        ],
        [
            '18:D6:C7:8D:A7:37',' BayBuffet',   'WIFIMAN', '3',   '0d0h31m57s',  '8 months ago'   
        ],
        [
            '84:16:F9:E1:8A:1E','CẬN COFFEE',  'WIFIMAN', '2',   '0d0h21m23s',  '8 months ago'  
        ],
        [
            '18:D6:C7:8D:A9:47','Hera Restaurant', 'WIFIMAN', '0',   '0d13h7m46s',  '8 months ago'    
        ],
        [
            '84:16:F9:E1:97:16',' GEMINI COFFEE (1)',  'WIFIMAN', '5',   '23d7h38m28s', '8 months ago'    
        ],
        [
            '18:D6:C7:39:29:A6',' THẾ GIỚI BIA LÃ VỌNG (2)',  'WIFIMAN', '0',   '61d19h40m44s',    '8 months ago'    
        ],
        [
            'D4:6E:0E:7B:9B:2D',' WIFIMAN', 'WIFIMAN', '1',   '0:00:01:29',  '8 months ago',    '26853'
        ],
        [
            'D4:6E:0E:3C:DB:D5',' @ Season BBQ',    'SeasonBBQ',   '1',   '0:20:01:39',  '10 hours ago',    '19092'
        ],
        [
            'D4:6E:0E:3C:D9:FD',  '@ Season BBQ',    'SeasonBBQ',   '2',   '0:17:45:11',  '10 hours ago',    '19708'
        ],
        [
            'D4:6E:0E:7B:90:33',  '@ Mì Cay Seoul',  'Mì Cay Seoul - 214 Nguyễn Xiển',  '1',   '0:19:57:48',  '10 hours ago',    '35545'
        ],
        [
            'D4:6E:0E:3C:D7:D1','   @ PHAN BUFFET',   'PHAN BUFFET - TRIỀU KHÚC',    '1',   '0:15:46:27',  '9 hours ago', '27207'
        ],
        [
            '18:D6:C7:8D:AA:03',' Coco Fresh Tea & Juice',  'WIFIMAN', '0',   '0:00:00:23',  '7 months ago',    ' ssh-y-y-N-K3-'
        ],
        [
            '84:16:F9:7C:A3:DE','  THÁI RESPECT',    'WIFIMAN', '1',   '0:00:15:10',  '7 months ago',    '16505'
        ],
        [
            'D4:6E:0E:7B:93:55','  Minh Chay Vegan Restaurant',  'Minh Chay Hàng Gai', '2',  ' 0:04:07:03',  '7 months ago',    '14697'
        ],
        [
            '18:D6:C7:39:2F:36','  Lương Sơn Quán (2)', ' WIFIMAN', '25',  '0:01:40:34',  '7 months ago',    '19935'
        ],
        [
            '18:A6:F7:B0:85:1C','  Lương Sơn Quán (1)', ' WIFIMAN', '45',  '0:12:56:47',  '7 months ago',    '35789'
        ],
        [
            '18:D6:C7:53:77:E0','  My Way Cafe & Beer',  'WIFIMAN', '3',   '0:14:13:34',  '7 months ago',    '10393'
        ],
        [
            'D4:6E:0E:7B:7E:D3',' DingTea', 'WIFIMAN', '2',   '0:00:20:34',  '7 months ago',    '49009'
        ],
        [
            '84:16:F9:E1:B5:AC',' Passion Coffee',  'WIFIMAN', '9',   '0:06:47:47',  '7 months ago',    '54438'
        ],
        [
            '84:16:F9:E2:40:BE',' HathiJulia',  'WIFIMAN', '0',   '0:00:04:42',  '7 months ago',    '32114'
        ],
        [
            '18:A6:F7:05:2A:90',' Lương Sơn Quán (3)',  'WIFIMAN', '32',  '0:13:12:47',  '7 months ago',    '22569'
        ],
        [
            'D4:_6:E_:0E:_7:B_',' Nha Khoa Smile Care', 'WIFIMAN', '19',  '0:15:29:48',  '7 months ago',    '53277'
        ],
        [
            'D4:_6:E_:0E:_3:C_',' DINGTEA Điện Biên Phủ',  'WIFIMAN', '28',  '0:15:29:49',  '7 months ago',   '30990'
        ],
        [
            '18:_D:6_:C7:_F:C_',' Toco Toco - 188 Thái Hà', 'WIFIMAN', '38', '0:15:29:48',  '7 months ago',    '49102'
        ],
        [
            '18:_D:6_:C7:_5:3_',' Goky Tea',   'WIFIMAN', '7',   '0:00:51:45',  '7 months ago',    '12740'
        ],
        [
            '84:_1:6_:F9:_7:C_',  'Goky Tea',    'WIFIMAN', '25',  '0:12:08:13',  '7 months ago',  '42470'
        ],
        [
            '84:_1:6_:F9:_D:9_',  'LAKE VIEW',   'WIFIMAN', '22',  '0:12:56:35',  '7 months ago',    '20794'
        ],
        [
            'EC:_0:8_:6B:_C:B_',' SASHIMI-BBQ GARDEN',  'WIFIMAN', '13',  '0:09:42:02',  '7 months ago',    '31857'
        ],
        [
            '18:_D:6_:C7:_3:9_','  KODO CAFE - 213 XA DAN',  'WIFIMAN', '8',   '0:15:29:48',  '7 months ago',    '14312'
        ],
        [
            '18:_D:6_:C7:_2:2_','  TocoToco',    'WIFIMAN', '21',  '0:15:29:47',  '7 months ago',    '58268'
        ],
        [
            '84:_1:6_:F9:_E:1_','  KOOLOFF - matcha caffe',  'WIFIMAN', '49',  '0:08:36:22',  '7 months ago',    '16618'
        ],
        [
            'E8:_9:4_:F6:_E:B_',' Goky Tea',    'WIFIMAN', '6',   '0:15:29:49',  '7 months ago',    '19053'
        ],
        [
            '84:_1:6_:F9:_B:6_',' VAI RÉO', 'WIFIMAN ', '25',  '0:15:29:48',  '7 months ago',    '30857'
        ],
        [
            '18:_D:6_:C7:_8:D_',' Coco Fresh Tea & Juice',  'WIFIMAN', '46',  '0:15:29:47',  '7 months ago',    '52397'
        ],
        [
            'C4:_E:9_:84:_7:F_',' DINGTEA 23',  'WIFIMAN', '0',   '0:23:59:48',  '7 months ago',    '38594'
        ],
        [
            '84:_1:6_:F9:_E:2_',' KODO CAFE - 213 XA DAN',  'Kodo Cafe-213 Xã Đàn',    '20',  '0:15:29:48',  '7 months ago',    '47931'
        ],
        [
            '18:_D:6_:C7:_3:8_',' LÃ VỌNG', 'WIFIMAN', '15',  '0:15:29:47',  '7 months ago',    '24076'
        ],
        [
            'D4:6E:0E:7B:7A:9B', '@ WIFIMAN',   'FOOD HOUSE - 171 NAM KỲ KHỞI NGHĨA',  '1',   '0:00:02:03',  '6 months ago',    '16534'
        ],
        [
            '84:16:F9:7C:AA:14', '@ GOKY',  'WIFIMAN', '18',  '0:12:50:26',  '6 months ago',    'ssh-y-y-N-K3-'
        ],
        [
            '18:D6:C7:38:20:EE','  WIFIMAN', 'WIFIMAN', '2',   '0:00:16:55',  '6 months ago',    '30324'
        ],
        [
            'D4:6E:0E:7B:7B:DF',' Coco 19 Lê Đại Hành', 'WIFIMAN', '26',  '0:05:28:49',  '6 months ago',    '41126'
        ],
        [
            'D4:6E:0E:7B:8F:BB',' Goky Tea - 124 Láng Hạ', 'WIFIMAN', '0',   '0:18:02:19',  '6 months ago',    '40711'
        ],
        [
            '18:D6:C7:8D:9B:77',' WIFIMAN', 'WIFIMAN', '1',   '0:00:02:19',  '6 months ago',    '30907'
        ],
        [
            'C4:E9:84:7F:A5:CA',' @ DINGTEA 23',    'WIFIMAN', '12',  '0:06:08:49',  '6 months ago',    '21912'
        ],
        [
            '18:D6:C7:53:52:86','@ Xfood', 'Xfood - 8 Trần Quý Kiên', '1',   '0:08:55:39',  '6 days ago',  '15524'
        ],
        [
            '84:16:F9:7C:80:F4', '@ Viện Tóc Havout',   'HAVOUT-160 KIM GIANG',    '1',   '0:16:25:38',  '7 days ago',  '18631'
        ],
        [
            'D4:6E:0E:7B:7C:07',' CHÁO ẾCH SINGAPORE',  'CHÁO ẾCH SINGAPORE',  '3',   '0:07:35:39',  '6 days ago',  '28731'
        ],
        [
            'D4:6E:0E:7B:94:83',' THẾ GIỚI BIA LÃ VỌNG',    'WIFIMAN', '1',   '0:00:00:45',  '5 months ago',    '28911'
        ],
        [
            '84:16:F9:E1:89:9E',' @ SAMGONGi CHA 3',    'WIFIMAN', '2',   '0:04:46:38',  '5 months ago',    '13149'
        ],
        [
            '18:D6:C7:22:A2:24',' WIFIMAN�EMO STAFF%A12345678', 'WIFIMAN', '1',   '0:10:47:38',  '5 months ago',    '11059'
        ],
        [
            '84:16:F9:E1:85:5E', '@ WIFIMAN',   'Món Ngon Sài Thành',  '4',   '0:00:02:23',  '5 months ago',    '19009'
        ],
        [
            '18:D6:C7:8D:9D:09', '@Hầm Lã Vọng',   'WIFIMAN', '5',   '0:11:16:48',  '5 months ago',    '40502'
        ],
        [
            '84:16:F9:B6:A2:AC',' @ Vai Réo Lã Vọng',   'Vai Réo Lã Vọng', '6',   '0:08:56:39',  '5 months ago',    '18084'
        ],
        [
            '84:16:F9:7C:82:36',' @Hầm Lã Vọng',    'WIFIMAN', '5',   '0:11:10:48',  '5 months ago',    '41384'
        ],
        [
            'D4:6E:0E:7B:8E:29',' WIFIMAN', 'WIFIMAN',  '',   '0:00:00:22',  '5 months ago',    '27792'
        ],
        [
            '18:D6:C7:FC:40:19',' THẾ GIỚI BIA LÃ VỌNG',    'WIFIMAN',  ' 1',   '0:00:00:27',  '5 months ago',    '13291'
        ],
        [
            'D4:6E:0E:7B:93:D1',' WIFIMAN', 'WIFIMAN', '1',   '0:04:00:39',  '5 months ago',    '29480'
        ],
        [
            '84:16:F9:D9:CF:94',' @ LAKE VIEW', 'Lake View',   '37',  '0:11:43:47',  '5 months ago',    '59966'
        ],
        [
            '18:D6:C7:8D:9D:CB', '@ Mì Cay Seoul',  'Mì Cay Seoul - 214 Nguyễn Xiển',  '1',   '0:00:03:02',  '5 months ago',    '11724'
        ],
        [
            'D4:6E:0E:3C:C9:29',' @ WIFIMAN',   'Nha khoa Smile Care', '2',   '0:00:25:12',  '5 months ago',    '14534'
        ],
        [
            '18:D6:C7:53:4E:EC',' @ Hải Sản Lã Vọng',   'Hải Sản Lã Vọng', '28',  '0:10:51:47',  '5 months ago',    '54024'
        ],
        [
            'D4:6E:0E:3C:CA:CB',' WIFIMAN', 'WIFIMAN', '0',   '0:00:01:59',  '5 months ago',    '46209'
        ],
        [
            '18:D6:C7:22:AE:B8',' WIFIMAN', 'WIFIMAN', '1',   '0:00:22:21',  '5 months ago',    '17972'
        ],
        [
            '84:16:F9:E1:8B:1A',' @ SAMGONGi CHA 3',    'WIFIMAN', '4',   '0:03:51:56',  '5 months ago',    '15455'
        ],
        [
            '18:D6:C7:F8:0C:02',' @ WIFIMAN',   'WIFIMAN', '1',   '0:00:00:29',  '5 months ago',    '13417'
        ],
        [
            '18:D6:C7:F8:0D:82',' @ TASTER',  'WIFIMAN', '1',   '0:01:04:50',  '5 months ago',    '29317'
        ],
        [
            'D4:6E:0E:3C:A3:8D',' ',    'WIFIMAN', '',    '0:00:00:20',  '5 months ago',    'ssh-y-y-N-K3-'
        ],
        [
            'D4:6E:0E:3C:C3:57',' ',    'WIFIMAN', '3',   '0:00:22:40',  '5 months ago',    '42611'
        ],
        [
            'D4:6E:0E:7B:7A:9D',' Tra Koro-12A Tran Nhan Tong', 'Tra Koro-12A Tran Nhan Tong', '1',   '0:00:03:19',  '5 days ago', '54874'
        ],
        [
            '84:16:F9:7C:A4:DA',' HỒNG TRÀ ',   'Hồng Trà - Vincom NCT',  '1',   '157d2h51m46s',   '4 months ago'    
        ],
        [
            '84:16:F9:E1:C7:8E',' @ BlackBall', 'WIFIMAN', '3',   '0:06:12:46', '4 months ago',    '20294'
        ],
        [
            'D4:6E:0E:7B:77:4D',' KODO CAFE - 213 XA DAN', 'Kodo Cafe-213 Xã Đàn',    '3',   '0:15:49:39',  '4 months ago',    '24967'
        ],
        [
            '18:D6:C7:FC:51:E1',' @ RiO Garden Coffee', 'RIO GARDEN COFFEE',   '1',   '0:08:35:50',  '4 months ago',    '22784'
        ],
        [
            'D4:6E:0E:C1:6A:B9', ' ',     'WIFIMAN', '0',   '0:00:02:38',  '4 months ago',    '44919'
        ],
        [
            '18:D6:C7:38:1F:8C',' @ Xfood', 'WIFIMAN ',  '1', '0:00:32:39',  '4 days ago',  '22318'
        ],
        [
            '18:D6:C7:8D:A9:39',' @ REUS AGC',  'IPOS.VN', '2',   '0:11:50:38',  '4 days ago',  '13747'
        ],
        [
            'D4:6E:0E:7B:7B:ED', ' Goky Tea',    'Goky 29 Hai Bà Trưng',    '25',  '0:06:12:10',  '3 months ago',    '17726'
        ],
        [
            '18:D6:C7:F8:09:60',' @ WIFIMAN',   'WIFIMAN', '1',   '0:00:03:47',  '3 months ago',    '23253'
        ],
        [
            'D4:6E:0E:3C:A3:33',' @TÔM HÙM RESTAURANT', 'NHÀ HÀNG TÔM HÙM',    '18',  '0:10:40:47',  '2 months ago',    '14267'
        ],
        [
            'D4:6E:0E:7B:7C:1F',' @ Minh Chay', 'Minh Chay Ấu Triệu',  '1',   '0:05:01:38',  '2 months ago',    '24108'
        ],
        [
            '18:D6:C7:22:92:CC',' @ PHAN BUFFET',   'PHAN BUFFET - 485 NGUYỄN VĂN CỪ', '4',   '0:16:44:38',  '2 months ago',    '24932'
        ],
        [
            '84:16:F9:E1:97:30',' @ SARIWON BUFFET',    'SARIWON - VINCOM',    '1',   '0:00:00:29',  '2 months ago',    '24115'
        ],
        [    
            '18:D6:C7:53:51:FA',' SASHIMI-BBQ GARDEN (2)',  ' ASHIMI BBQ GARDEN',  '2',   '0d0h16m7s',   '2 months ago'    
        ],
        [
            'EC:08:6B:CB:DF:B4',' @ Xfood', 'Xfood',   '4',   '0:13:44:10',  '2 days ago',  '13706'
        ],
        [
            '84:16:F9:89:15:A3',' @Foodhouse-171NKKN',  'FOOD HOUSE - 171 NAM KỲ KHỞI NGHĨA',  '1',  ' 0:00:02:16',  '2 days ago',  '21882'
        ],
        [
            '18:A6:F7:05:2C:82',' WIFIMAN', 'WIFIMAN', '1',   '0:12:33:38',  '19 days ago', '12114'
        ],
        [
            'C0:4A:00:0E:11:FD',' @ PHAN BUFFET',   'PHAN BUFFET - TRIỀU KHÚC',    '1',  ' 0:00:03:14',  '19 days ago', '27774'
        ],
        [
            '18:D6:C7:FC:49:0D',' @GOKY',   'Goky Tea - 425 Bach Mai', '8',   '0:08:32:53',  '17 days ago', '59561'
        ],
        [
            'D4:6E:0E:7B:7C:01',' TÂN LƯƠNG SƠN QUÁN',  'Tân Lương Sơn Quán',  '7' ,  '0:11:29:39',  '17 days ago', '27397'
        ],
        [
            '18:D6:C7:FC:48:1B',' TÂN LƯƠNG SƠN QUÁN ', 'Tân Lương Sơn Quán',  '9',   '0:11:34:39',  '17 days ago', '14659'
        ],
        [
            'D4:6E:0E:7B:77:99',' @ VƯỜN NƯỚNG BRAZIL', 'VƯỜN NƯỚNG BRAZIL',  ' 6',   '0:15:05:39',  '17 days ago', '20635'
        ],
        [
            'D4:6E:0E:7B:84:83',' TÂN LƯƠNG SƠN QUÁN', 'Tân Lương Sơn Quán',  '6',   '0:02:56:18',  '17 days ago', '17098'
        ],
        [
            'D4:6E:0E:7B:8F:51',' TÂN LƯƠNG SƠN QUÁN',  'Tân Lương Sơn Quán',  '1',   '0:00:00:24',  '17 days ago', '20029'
        ],
        [
            '18:D6:C7:39:0B:C8',' @ BÍCH THẢO - BÍCH ĐÀO',  'BÍCH THẢO',   '2',  '0:11:31:39',  '14 days ago', '14229'
        ],
        [
            '18:D6:C7:22:86:0E',' Hana Spa',    'Hana Spa',    '2',   '0:14:52:38',  '15 hours ago',    '23272'
        ],
        [
            'D4:6E:0E:3C:A3:2B',' Hana Spa',    'Hana Spa ',   '1',   '0:00:37:03',  '15 hours ago',    '14919'
        ],
        [
            'D4:6E:0E:7B:95:5D',' Nha Khoa Smile Care', 'Nha khoa Smile Care', '1',   '0:10:54:20',  '14 hours ago',    '53489'
        ],
        [
            'D4:6E:0E:7B:93:F9',' @THÁI RESPECT',   'Nhà hàng Thái Respect',   '2',   '0:00:10:15',  '12 days ago', '26095'
        ],
        [
            '18:D6:C7:8D:A5:D9',' @KOOLOFF - Matcha caffe', 'KOOLOFF-Matcha Caffe',    '1',   '0:13:02:53',  '12 hours ago',    '13473'
        ],
        [
            'D4:6E:0E:3C:B3:33',' @ KOMBO HOANG NGOC PHACH',    'KOMBO - HOÀNG NGỌC PHÁCH',    '1',  ' 0:13:04:51',  '12 hours ago',    '11571'
        ],
        [
            'D4:6E:0E:7B:95:01','  @ KOMBO HOANG NGOC PHACH',    'KOMBO - HOÀNG NGỌC PHÁCH',    '3',  ' 0:13:02:54',  '12 hours ago',    '38866'
        ],
        [
            '18:D6:C7:22:AE:D6',' @ PHAN BUFFET',   'PHAN BUFFET - 485 NGUYỄN VĂN CỪ', '5',   '0:11:52:39',  '11 days ago', '24394'
        ],
        [
            '18:D6:C7:8D:AA:1D',' @ PHAN BUFFET ',  'PHAN BUFFET - 485 NGUYỄN VĂN CỪ',  '1',   '0:11:58:38',  '11 days ago', '14248'
        ],
        [
            '10:FE:ED:7D:5E:27', 'WIFIMAN DEMO',    'WIFIMAN', '1',   '39d18h18m52s',    '10 months ago',   
        ],
        [
            'D4:6E:0E:7B:92:BD',' @TÔM HÙM RESTAURANT', 'NHÀ HÀNG TÔM HÙM',    '1',   '0:12:54:14',  '12 hours ago',    '15491'
        ],
        [
            'D4:6E:0E:C1:48:65',' @ PHAN BUFFET',   'PHAN BUFFET - THÁI HÀ',   '10',  '0:01:52:41',  '11 hours ago',    '21364'
        ],
        [
            '18:D6:C7:FC:53:8D',  ' CHÁO ẾCH SINGAPORE',  'CHÁO ẾCH SINGAPORE',  '1',   '0:00:00:24',  '10 days ago', '16519'
        ],
        [
            'D4:6E:0E:C1:4F:2F', 'WIFIMAN - Public',    'WIFIMAN', '1',   '0:00:54:34',  '10 days ago', '21121'
        ],
        [
            'D4:6E:0E:C1:5D:91',' @ PHAN BUFFET',   'PHAN BUFFET - ĐÀO DUY ANH',  ' 6',   '0:05:37:39',  '10 days ago', '28128'
        ],
        [
            'D4:6E:0E:C1:53:B9',' @ PHAN BUFFET',  'PHAN BUFFET - ĐÀO DUY ANH',   '7',  ' 0:05:37:40',  '10 days ago', '28390'
        ],
        [
            'D4:6E:0E:C1:64:89',' @ WIFIMAN',   'WIFIMAN', '1',   '0:00:05:35',  '10 days ago', '21383'
        ]
    ]

       
	   $scope.dataTableOpt = {

  		"aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
        };
	});

    
  